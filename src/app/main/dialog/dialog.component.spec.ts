import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, DialogPosition, MatDialogContainer, MatDialogState } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { savingReducer } from '@core/saving-managment/save.reducer';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CharacterService } from '@core/service/character/character.service';
import { AuthInterceptor } from '@core/interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptor/errorhandler.interceptor';
import { ToastrService } from 'ngx-toastr';

const model = {
  component: DetailComponent,
  id: 1513415,
}

class MockMatDialogRef {
  updatePosition(p?: DialogPosition) {
    return this;
  }
}

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports: [
        SharedModule,
        StoreModule.forRoot({saveState: savingReducer})
      ],
      providers: [
        {
          provide: MatDialogRef, useClass: MockMatDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        },
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
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
