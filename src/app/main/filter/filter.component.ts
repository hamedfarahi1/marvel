import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IState } from '@core/filter-managment/state-model';
import { Store } from '@ngrx/store';
import { SetFilters, ReturnFilters } from '@core/filter-managment/filter.actions';
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

  // input form control for character's name
  name = new FormControl();

  // array of character api filter params (Ex. name, nameStartsWith ...)
  filters: KeyValue<string, string>[];

  /**
   * options that fetch from server is defined for auto complete 
   * filtered option that are filtered by user for auto complete
   */
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  // subscribtions props only for unsubscribe in ngOnDestroy
  charObs: Subscription;
  crtObs: Subscription;

  constructor(private characterService:CharacterService, private store: Store<{state: IState}>) {}

  // apply filters in store and get new data
  setFilters() {
    this.store.dispatch(new SetFilters(this.filters));
  }

  // return filters to initialState in store
  returnFilters() {
    this.store.dispatch(new ReturnFilters());
  }

  ngOnInit(): void {
    this.init()
  }

  init() {
    /* listener for name formControl value changes and get new options for auto compelete
    set 500 ms debounceTime
    */ 
    this.crtObs = this.name.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      // check input value undefined for return to filter initial state
      if (val.length === 0 || val === undefined) {
        this.filters = [];
        this.filteredOptions = of([]);
        this.returnFilters()
      } 
      // push nameStartsWith filter to filters and save to store
      else {
        this.filters = [];
        this.filters.push({
          key: 'nameStartsWith',
          value: val
        })
        // get new options from server
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
    // get filtered options related to input value and options
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getCharacter() {
    /**
     * when user click on an option in auto complete's options, app send a request for get character by name
     */
    this.filters = [];
    this.filters.push({
      key: 'name',
      value: this.name.value
    })

    // dispacth SetFilters class by store
    this.setFilters();
  }

  ngOnDestroy() {
    this.charObs.unsubscribe();
    this.crtObs.unsubscribe();
  }
}
