import {NavController} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';
import {ResetPage} from './reset';

@Page({
  templateUrl: 'build/pages/grid/login.html'
})
export class LoginPage implements OnInit {

  public disabled : boolean;

  constructor(nav: NavController) {
    this.nav = nav;
  }

  ngOnInit() {
      this.disabled = true;
  }

  gotoSignup() {
    this.nav.pop();
  }

  gotoResetPassword() {
    this.nav.push(ResetPage, {});
  }
}
