import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userID: string;
  user: User = new User() // Employees
  panelOpenState = false

  constructor(private route: ActivatedRoute, private AngularFireStore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userID = paramMap.get("id")
      console.log(this.userID)
      this.getUser()
    })
  }

  getUser() {
    this.AngularFireStore.collection("users").doc(this.userID).valueChanges().subscribe(user => {
      this.user = new User(user)
      console.log(this.user)
    })
  }


  editUser() {
    const dialogRef = this.dialog.open(DialogEditUserComponent)

    dialogRef.componentInstance.user = new User(this.user.toJSON())
    dialogRef.componentInstance.userID = this.userID
  }

}
