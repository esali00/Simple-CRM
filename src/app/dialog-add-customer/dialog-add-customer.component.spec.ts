import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DialogAddCustomerComponent } from './dialog-add-customer.component';

describe('DialogAddCustomerComponent', () => {
  let component: DialogAddCustomerComponent;
  let fixture: ComponentFixture<DialogAddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule  ],
      declarations: [ DialogAddCustomerComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: []
      }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
