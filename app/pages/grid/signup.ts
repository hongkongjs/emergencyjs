import {Page} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/grid/signup.html'
})
export class SignUpPage implements OnInit {

  public disabled: boolean;

  ngOnInit() {
    this.disabled = true;
  }

  gotoLogin() {
    console.log("suppose to go to login page");
  }
}
