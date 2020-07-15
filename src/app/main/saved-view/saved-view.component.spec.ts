import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedViewComponent } from './saved-view.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { savingReducer } from '@core/saving-managment/save.reducer';

describe('SavedViewComponent', () => {
  let component: SavedViewComponent;
  let fixture: ComponentFixture<SavedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedViewComponent ],
      imports: [
        SharedModule,
        StoreModule.forRoot({saveState: savingReducer})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
