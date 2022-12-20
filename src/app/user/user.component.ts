import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User()
  allUsers = []

  constructor(private dialog: MatDialog, private AngularFireStore: AngularFirestore) { }

  ngOnInit(): void {
    this.AngularFireStore.collection("users").valueChanges({idField: "customID"}).subscribe(changes => {
      console.log("received changes", changes)
      this.allUsers = changes
      this.allUsers.forEach(user => {
        user.birthdate = new Date(user.birthdate).toLocaleDateString()
      })
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


