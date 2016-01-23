import {NavController} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {ResetPage} from './reset';
import {User} from './models';
import {Core} from './core';

@Page({
  templateUrl: 'build/pages/grid/login.html'
})
export class LoginPage {

  public disabled : boolean;
  public user: User;
  private coreService : Core;

  constructor(nav: NavController, core: Core) {
    this.nav = nav;
    this.user = { 'username' : '', 'firstName': '', 'lastName' : '',
                  'email': '', 'password': ''};
    this.disabled = true;
    this.coreService = core;
  }

  gotoSignup() {
    this.nav.pop();
  }

  gotoResetPassword() {
    this.nav.push(ResetPage, {});
  }

  checkChanges(changeData: any) {
    console.log('name: ' + changeData.name + ', value: ' + changeData.value);
    let newUsername = this.user.username;
    let newPassword = this.user.password;
    this.disabled = !(newUsername && newPassword);
    console.log('disabled = ' + this.disabled + ', username = ' +
      newUsername + ", password = " + newPassword);
  }

  loginAccount() {
    console.log('Fire loginAccount method');
    this.coreService.userLogin(this.user, this.nav);
  }
}
