import {Page, NavController} from 'ionic-framework/ionic';
import {User} from './models';
import {Core} from './core';

@Page({
  templateUrl: 'build/pages/grid/reset.html'
})
export class ResetPage {

  public disabled : boolean;
  public user: User;
  private coreService : Core;

  constructor(nav: NavController, core: Core) {
      this.nav =  nav;
      this.user = { 'username' : '', 'firstName': '', 'lastName' : '',
                  'email': '', 'password': ''};
      this.disabled = true;
      this.coreService = core;
  }

  checkChanges(changeData: any) {
    console.log('name: ' + changeData.name + ', value: ' + changeData.value);
    this.disabled = !(this.user.email);
    console.log('disabled = ' + this.disabled + ', email = ' + this.user.email);
  }

  resetPassword() {
    console.log('Fire resetPassword method.');
    this.coreService.userReset(this.user.email, this.nav);
  }
}
