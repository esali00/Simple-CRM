import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User() // Employees
  loading = false

  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>, private AngularFireStore: AngularFirestore) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log("current user is", this.user)
    this.loading = true

    this.AngularFireStore.collection('users').add(this.user.toJSON()).then(result => {
      // console.log(result)
      this.loading = false
      this.dialogRef.close()
    });
  }

  cancel() {
    this.dialogRef.close()
  }
}
