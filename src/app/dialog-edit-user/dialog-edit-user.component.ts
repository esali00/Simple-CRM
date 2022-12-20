import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  userID: string;
  user: User;
  loading = false

  constructor(private dialogRef: MatDialogRef<DialogEditUserComponent> , private route: ActivatedRoute, private AngularFireStore: AngularFirestore) { }

  ngOnInit(): void {
      
  }

  cancel() {
    this.dialogRef.close()
  }

  saveEditedUser() {
    this.loading = true 

    this.AngularFireStore.collection("users").doc(this.userID).update(this.user.toJSON()).then(() => {
      this.loading = false
      this.dialogRef.close()
    })



  }

}
