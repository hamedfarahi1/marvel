import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { savingReducer } from '@core/saving-managment/save.reducer';
import { LoadingDirective } from '@shared/shared-common/loading-directive/loading-directive';
import { CharacterService } from '@core/service/character/character.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@core/interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptor/errorhandler.interceptor';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent, LoadingDirective ],
      imports: [
        SharedModule,
        StoreModule.forRoot({saveState: savingReducer})
      ],
      providers: [
        {
          provide: CharacterService,
          deps: [ HttpClient ]
        },
        // add auth props into each request that sent
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
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be test getItem func', fakeAsync(() => {
    const gt = spyOn(component, 'getItem')
    .and
    .returnValue(EMPTY);

    component.getItem();
    expect(gt).toHaveBeenCalledTimes(1);
  }))
});
