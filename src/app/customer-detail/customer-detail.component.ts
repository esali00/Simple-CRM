import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/models/customer.class';
import { DialogEditCustomerComponent } from '../dialog-edit-customer/dialog-edit-customer.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customers = new Customer()
  allCustomers = []
  customerID: string = "";

  constructor(private route: ActivatedRoute ,private dialog: MatDialog , private AngularFireStore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.customerID = paramMap.get("id")
      console.log(this.customerID)
      this.getCustomer()
    })
}

  getCustomer() {
    this.AngularFireStore.collection("customers").doc(this.customerID).valueChanges().subscribe((customer: string) => {
      this.customers = new Customer(customer)
      console.log(this.customers)
    })
  }

  openEditCustomer() {
    const dialogRef = this.dialog.open(DialogEditCustomerComponent);

    dialogRef.componentInstance.customers = new Customer(this.customers.toJSON())
    dialogRef.componentInstance.customerID = this.customerID
  }

}
