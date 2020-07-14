import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedViewComponent } from './saved-view.component';

describe('SavedViewComponent', () => {
  let component: SavedViewComponent;
  let fixture: ComponentFixture<SavedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedViewComponent ]
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
