import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IState } from '@core/filter-managment/state-model';
import { Store } from '@ngrx/store';
import { SetFilters } from '@core/filter-managment/filter.actions';
import { KeyValue } from '@angular/common';
import { debounceTime, startWith, map } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { CharacterService } from '@core/service/character/character.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  name = new FormControl();
  filters: KeyValue<string, string>[];
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  charObs: Subscription;
  crtObs: Subscription;
  constructor(private characterService:CharacterService, private store: Store<{state: IState}>) {}

  setFilters() {
    this.store.dispatch(new SetFilters(this.filters));
  }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.crtObs = this.name.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      if (val.length === 0 || val === undefined) {
        this.filters = [];
        this.filteredOptions = of([]);
        this.setFilters();
      } else {
        this.filters = [];
        this.filters.push({
          key: 'nameStartsWith',
          value: val
        })
        this.charObs = this.getCharOptions();
      }
    })
  }

  getCharOptions() {
    return this.characterService.readAll(this.filters).subscribe(res => {
      this.options = res.data.results.map(itm => itm.name);
      this.filteredOptions = this.name.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
        )
    })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getCharacter() {
    this.filters = [];
    this.filters.push({
      key: 'name',
      value: this.name.value
    })
    this.setFilters();
  }

  ngOnDestroy() {
    this.charObs.unsubscribe();
    this.crtObs.unsubscribe();
  }
}
