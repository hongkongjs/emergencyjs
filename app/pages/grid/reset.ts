import {Page} from 'ionic-framework/ionic';
import {User} from './models';

@Page({
  templateUrl: 'build/pages/grid/reset.html'
})
export class ResetPage {

  public disabled : boolean;
  public user: User;

  constructor() {
      this.user = { 'username' : '', 'firstName': '', 'lastName' : '',
                  'email': '', 'password': ''};
      this.disabled = true;
  }

  checkChanges(changeData: any) {
    console.log('name: ' + changeData.name + ', value: ' + changeData.value);
    this.disabled = !(this.user.email);
    console.log('disabled = ' + this.disabled + ', email = ' + this.user.email);
  }

  resetPassword() {
    console.log('Fire resetPassword method.');
  }
}
