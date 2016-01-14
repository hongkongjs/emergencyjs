import {NavController} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';
import {LoginPage} from './login';

@Page({
  templateUrl: 'build/pages/grid/signup.html'
})
export class SignUpPage implements OnInit {

  public disabled: boolean;

  constructor(nav: NavController) {
    this.nav = nav;
  }

  ngOnInit() {
    this.disabled = true;
  }

  gotoLogin() {
    console.log("suppose to go to login page");
    this.nav.push(LoginPage, {});
  }
}
