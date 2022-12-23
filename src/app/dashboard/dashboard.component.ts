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
  tasks = []
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

  getAmountOfTasks() {
    this.AngularFireStore.collection("tasks").valueChanges().subscribe(changes => {
      this.tasks = changes
    })
  }

  ngOnInit() {
    this.getAmountOfEmployees()
    this.getAmountOfCustomers()
    this.getAmountOfTasks()

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
