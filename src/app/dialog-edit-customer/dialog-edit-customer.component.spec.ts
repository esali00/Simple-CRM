import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


import { DialogEditCustomerComponent } from './dialog-edit-customer.component';

describe('DialogEditCustomerComponent', () => {
  let component: DialogEditCustomerComponent;
  let fixture: ComponentFixture<DialogEditCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, RouterModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule ],
      declarations: [ DialogEditCustomerComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: []
      }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
