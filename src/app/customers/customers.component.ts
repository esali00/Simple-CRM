import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/models/customer.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers = new Customer()
  allCustomers = []
  displayedColumns = ['firstname','lastname', 'email', 'phone', 'industry'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog ,private AngularFireStore: AngularFirestore) {
    
  } 

  ngOnInit(): void {
    this.AngularFireStore.collection("customers").valueChanges({idField: "customID"}).subscribe(customers => {
      this.allCustomers = customers
      this.dataSource = new MatTableDataSource(customers)
      this.dataSource.paginator = this.paginator
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddCustomerComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }  

}
