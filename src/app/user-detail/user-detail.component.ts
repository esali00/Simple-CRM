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
  user: User = new User()

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

  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date: { getDate: () => any; getMonth: () => number; getFullYear: () => any; }) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }


  editUser() {
    const dialogRef = this.dialog.open(DialogEditUserComponent)

    dialogRef.componentInstance.user = new User(this.user.toJSON())
    dialogRef.componentInstance.user.birthdate = this.formatDate(new Date(this.user.birthdate))
  }

}
