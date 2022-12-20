import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple-CRM';

  constructor(public router: Router, private firestore: AngularFirestore) {

  }

  

}
