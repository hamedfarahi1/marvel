import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CardViewComponent } from './card-view.component';

describe('CardViewComponent', () => {
  let component: CardViewComponent;
  let fixture: ComponentFixture<CardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should testing getSubStr func', fakeAsync(() => {
    const gsu = spyOn(component, 'getShortedUrl')
    .and.returnValue((st: string) => st.endsWith('...'))

    component.getShortedUrl('jfwoiegweoigwnvueirbgeoigwheoifjwefwnioegnwefoiwvonwiegbw')
    expect(gsu).toHaveBeenCalledTimes(1)
  }))
});
