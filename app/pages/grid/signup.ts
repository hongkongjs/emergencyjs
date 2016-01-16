import {NavController} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {LoginPage} from './login';
import {User} from './models';

@Page({
  templateUrl: 'build/pages/grid/signup.html'
})
export class SignUpPage {

  public disabled: boolean;
  public user: User;

  constructor(nav: NavController) {
    this.nav = nav;
    this.user = { 'username' : '', 'firstName': '', 'lastName' : '',
                  'email': '', 'password': ''};
    this.disabled = true;
  }

  checkChanges(changeData: any) {
    console.log('name: ' + changeData.name + ', value: ' + changeData.value);

//    let valid = new RegExp('/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i');
    let newUser = this.user.username;
    let newfirstName = this.user.firstName;
    let newlastName = this.user.lastName;
    let newEmail = this.user.email;
    let newPassword = this.user.password;

//    let validEmail =!!valid.test(newEmail);
    this.disabled = !(newUser && newfirstName && newlastName && newEmail && newPassword);
    console.log('disabled = ' + this.disabled + ', username = '
      + newUser + ', firstName = ' + newfirstName
      + ', lastName = ' + newlastName
      + ', email = ' + newfirstName
      + 'password = ' + newPassword);
  }

  gotoLogin() {
    console.log("suppose to go to login page");
    this.nav.push(LoginPage, {});
  }

  signUp() {
    console.log('Fire signUp method');
  }

}
