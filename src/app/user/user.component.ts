import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
  user = new User() // Employees
  allUsers = []
  displayedColumns = ['firstname','lastname', 'email', 'phone', 'department'];
  dataSource: any;
  
  @ViewChild("matpaginator") paginator: MatPaginator;

  constructor(private dialog: MatDialog, private AngularFireStore: AngularFirestore) { 
    
  }


  ngOnInit(): void {
    this.AngularFireStore.collection("users").valueChanges({idField: "customID"}).subscribe(changes => {
      console.log("received changes", changes)
      this.allUsers = changes
      this.dataSource = new MatTableDataSource(changes)
      this.dataSource.paginator = this.paginator;
    })

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


