import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/models/customer.class';

@Component({
  selector: 'app-dialog-add-customer',
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.scss']
})
export class DialogAddCustomerComponent implements OnInit {
  customers = new Customer()
  loading = false

  constructor(public dialogRef: MatDialogRef<DialogAddCustomerComponent>, private AngularFireStore: AngularFirestore) { }

  ngOnInit(): void {

  }

  createCustomer() {
    this.loading = true
    this.AngularFireStore.collection("customers").add(this.customers.toJSON()).then(() => {
      this.loading = false
      this.dialogRef.close()
    })
  }

  cancel() {
    this.dialogRef.close()
  }

}
