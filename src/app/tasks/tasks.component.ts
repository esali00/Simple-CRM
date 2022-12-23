import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task = new Task()
  allTasks: any[] = [];
  RadioValue: string;

  disabledButton = true;
  @ViewChild("title") title: ElementRef;
  @ViewChild("description") description: ElementRef;
  @ViewChild("radiovalue") radiovalue: ElementRef;


  constructor(private AngularFireStore: AngularFirestore) {   }

  ngOnInit(): void {
    this.AngularFireStore.collection("tasks").valueChanges().subscribe(tasks => {
      this.allTasks = tasks
    })
  }


  createTask() {
    this.AngularFireStore.collection("tasks").add(this.task.toJSON())
    this.clearTaskForm()
    this.showHint()
  }

  showHint() {
    document.querySelector<HTMLDivElement>(".task-created").classList.remove("d-none")

    setTimeout(() => {
      document.querySelector<HTMLDivElement>(".task-created").classList.add("d-none")
    }, 2500)
  }

  
  @HostListener("keydown")
  enableCreateButton() {
    if (this.task.title != "" && this.task.description != "" && this.task.priority != "") {
      this.disabledButton = false
    } else {
      this.disabledButton = true
    }
  }

  clearTaskForm() {
    this.task.title = ""
    this.task.description = ""
    this.task.priority = ""
    this.enableCreateButton()
  }


}
