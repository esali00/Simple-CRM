import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/models/customer.class';

@Component({
  selector: 'app-dialog-edit-customer',
  templateUrl: './dialog-edit-customer.component.html',
  styleUrls: ['./dialog-edit-customer.component.scss']
})
export class DialogEditCustomerComponent implements OnInit {
  customers = new Customer()
  customerID;
  loading = false

  constructor(private dialogRef: MatDialogRef<DialogEditCustomerComponent>, private AngularFireStore: AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.customerID)
  }

  editCustomer() {
    this.loading = true
    this.AngularFireStore.collection("customers").doc(this.customerID).update(this.customers.toJSON()).then(() => {
      this.loading = false
      this.dialogRef.close()
    })
  }

  cancel() {
    this.dialogRef.close()
  }

}
