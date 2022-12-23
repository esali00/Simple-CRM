import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  disabledSendButton = true
  loading = false

  @ViewChild("YourEmailAddress") yourEmailAddress: ElementRef
  @ViewChild("ContactEmailAddress") ContactEmailAddress: ElementRef
  @ViewChild("EmailText") EmailText: ElementRef

  constructor() { }

  ngOnInit(): void {

  }

  async sendMail() {
    this.loading = true
    let fd = new FormData()

    fd.append("sender", this.yourEmailAddress.nativeElement.value)
    fd.append("receiver", this.ContactEmailAddress.nativeElement.value)
    fd.append("message", this.EmailText.nativeElement.value)

    await fetch("https://emir-salihovic.developerakademie.net/send_mail/send_mail_crm.php", {
      method: "POST",
      body: fd
    }).then(() => {
      this.loading = false
    }
    )
    this.clearEmail()
    this.enableSendMailButton()
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
