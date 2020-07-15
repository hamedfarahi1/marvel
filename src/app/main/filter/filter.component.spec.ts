import { async, ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { CharacterService } from '@core/service/character/character.service';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from '@core/filter-managment/filter.reducer';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@core/interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptor/errorhandler.interceptor';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { EMPTY } from 'rxjs';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [
        SharedModule,
        StoreModule.forRoot({ state: filterReducer}),
        ToastrModule.forRoot()
      ],
      providers: [
        {
          provide: CharacterService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        
        // for handle error that recived from server
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorHandlerInterceptor,
          multi: true,
          deps: [ToastrService]
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load character by getCharacters func', fakeAsync(() => {
    const gt = spyOn(component, 'getCharacter')
    .and
    .returnValue(EMPTY);

    component.getCharacter();
    expect(gt).toHaveBeenCalledTimes(1);
  }))
});
