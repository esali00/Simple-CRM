import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  disabledSendButton = true

  @ViewChild("YourEmailAddress") yourEmailAddress: ElementRef
  @ViewChild("ContactEmailAddress") ContactEmailAddress: ElementRef
  @ViewChild("EmailText") EmailText: ElementRef

  constructor() { }

  ngOnInit(): void {

  }

  clearEmail() {
    this.yourEmailAddress.nativeElement.value = ""
    this.ContactEmailAddress.nativeElement.value = ""
    this.EmailText.nativeElement.value = ""
  }

  enableSendMailButton() {
    if(this.yourEmailAddress.nativeElement.value != "" && 
      this.ContactEmailAddress.nativeElement.value != "" && 
      this.EmailText.nativeElement.value != "" 
    ) {
      this.disabledSendButton = false
    } else {
      this.disabledSendButton = true 
    }
  }

}
