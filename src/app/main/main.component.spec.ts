import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CharacterService } from '@core/service/character/character.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from '@core/filter-managment/filter.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthInterceptor } from '@core/interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptor/errorhandler.interceptor';
import { ToastrService } from 'ngx-toastr';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FilterComponent } from './filter/filter.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EMPTY } from 'rxjs';
import { DetailComponent } from './detail/detail.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingDirective } from '@shared/shared-common/loading-directive/loading-directive';

class DialogMock {
  open(a: DialogComponent, b: MatDialogConfig) {}
};

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, FilterComponent ],
      imports: [
        SharedModule,
        StoreModule.forRoot({ state: filterReducer }),
        RouterTestingModule,
        BrowserTestingModule,
        BrowserDynamicTestingModule
      ],
      providers: [
        {
          provide: CharacterService,
          deps: [ HttpClient ]
        },
        { provide: MatDialog, useClass: DialogMock },
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
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onItemClick() should open a dialog', () => {
    const openDialogSpy = spyOn(component.matDialog, 'open')
        .and
        .returnValue({afterClosed: () => EMPTY});

    component.onItemClick(352625);

    expect(openDialogSpy).toHaveBeenCalled();
});
});
