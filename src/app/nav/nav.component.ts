import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatMenuPanel} from "@angular/material/menu/menu-panel";
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private matSnackBar: MatSnackBar) {}


  website_name = 'mcit';

  x = 150

  logo = "//via.placeholder.com/" + this.x


  increase_x (){

    if ( this.x < 200){
      this.x = this.x + 5;
      console.log(this.x)
    }

  this.logo = "//via.placeholder.com/" + this.x

}

change_logo(){

  this.logo = "//via.placeholder.com/" + this.x + '/FF0000'


  }


  durationInSeconds = 5;



  message = ""

  showSnack(  ) {
    this.matSnackBar.open( this.message, "Okay" , { duration: 3000 } );
  }

    user_loggedin = true

  login (){
    this.user_loggedin = !this.user_loggedin
    this.message ="Welcome back"
    this.showSnack()
  }



  logout (){
    this.user_loggedin = !this.user_loggedin
    this.message ="Bey!"
    this.showSnack()
  }





}









