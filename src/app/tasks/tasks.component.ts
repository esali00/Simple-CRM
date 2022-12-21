import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task = new Task()

  RadioValue: string = "";
  disabledButton = true;
  @ViewChild("title") title: ElementRef;
  @ViewChild("description") description: ElementRef;


  constructor() { }

  ngOnInit(): void {

  }

  createTask() {
    
  }

  enableCreateButton() {
    if (this.title.nativeElement.value != "" && this.description.nativeElement.value != "" && this.RadioValue != "") {
      console.log(this.RadioValue)
      this.disabledButton = false
    } else {
      this.disabledButton = true
    }
  }

  clearTaskForm() {
    this.title.nativeElement.value = ""
    this.description.nativeElement.value = ""
    this.RadioValue = ""
  }


}
