import { Component} from '@angular/core';
import { NavbarService } from '../../src/app/navbar/navbar.service'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'timeSchedule'
  navbarDialogStatus:String

  constructor(private navbarService:NavbarService,public dialog:MatDialog){
    this.navbarService.navbarDialogStatus.subscribe(data=>{
      this.navbarDialogStatus=data
      this.openDialog()
    })
    this.navbarService.userCheckInLogin()
  }

  openDialog(){
    let dialogRef=this.dialog.open(DialogContentExampleDialog)
  }
}

@Component({
  selector:'dialog-example',
  template:`
  <h1 mat-dialog-title>Please login is required</h1>
  <div mat-dialog-content>if you are used Today Work,Add work,Remove Work,Completed Work</div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close (click)="onClick()">Close</button>
  </div>
  `
})
export class DialogContentExampleDialog{

  constructor(public dialog:MatDialog){}

  onClick(){
    this.dialog.closeAll()
  }
}
