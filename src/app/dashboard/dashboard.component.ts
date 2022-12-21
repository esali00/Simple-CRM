import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees = []
  customers = []
  date = new Date().toLocaleDateString();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  constructor(private AngularFireStore: AngularFirestore) { }

  getAmountOfEmployees() {
    this.AngularFireStore.collection("users").valueChanges().subscribe(changes => {
      this.employees = changes
    })
  }

  getAmountOfCustomers() {
    this.AngularFireStore.collection("customers").valueChanges().subscribe(changes => {
      this.customers = changes
    })
  }

  ngOnInit() {
    this.getAmountOfEmployees()
    this.getAmountOfCustomers()

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
