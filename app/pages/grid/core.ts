/**
 * Created by Connie Leung on 1/23/2016.
 */
import {User} from './models';
import {TeamPage} from '../team/team';
import {LoginPage} from '../grid/login';

import {NavController, Alert } from 'ionic-framework/ionic';

var Parse = require('parse');

export class Core  {

  constructor () {
  }

  isLogin() {
     let currentUser =  Parse.User.current();
     if (currentUser) {
       return true;
     }
     return false;
  }

  userSignup(user: User, nav: NavController) {
    let newUser = new Parse.User();

    newUser.set("username", user.username);
    newUser.set("password", user.password);
    newUser.set("email", user.email);
    newUser.set("fn", user.firstName);
    newUser.set("ln", user.lastName);

    if (this.isLogin()) {
      Parse.User.logOut();
    }

    newUser.signUp(null, {
        success: (user) => { nav.push(TeamPage, {}); },
        error: (user, error) => {
            let alert = Alert.create({
                title : 'Sign up failed',
                subTitle : error.message,
                buttons : ['OK']
            });
            nav.present(alert);
        }
    });
  }

  userLogin(loginUser: User, nav: NavController) {
    //$ionicLoading.show({template:'<ion-spinner></ion-spinner>'});
    if (this.isLogin()) {
      Parse.User.logOut();
    }

    Parse.User.logIn(loginUser.username, loginUser.password, {
      success: (user) => {
          nav.push(TeamPage, {});
      },
      error: (user, error) => {
          let alert = Alert.create({
              title : 'Sorry',
              subTitle : (error && error.message? error.message : 'Incorrect username or password.'),
              buttons : ['OK']
          });
          nav.present(alert);
      }
    });
  }

  userReset(email: string, nav: NavController) {

    if (this.isLogin()) {
      Parse.User.logOut();
    }

    Parse.User.requestPasswordReset(email, {
        success: () => {
            // Password reset request was sent successfully
            let alert = Alert.create({
                title : 'Success',
                subTitle : 'password was sent to ' + email,
                buttons : ['OK']
            });
             nav.present(alert);
        },
        error: (error) => {
            // Password reset failed
            let alert = Alert.create({
                title : 'Sorry',
                subTitle : error.message,
                buttons : ['OK']
            });
            nav.present(alert);
        }
    });
  }

  userLogout(nav: NavController) {

    let alert = Alert.create({
       title: 'LOG OUT',
       subTitle: 'Are you sure?',
       buttons: [
         {
           text: 'No'
         },
         {
           text: 'Yes',
           handler: () => {
             console.log('Yes clicked');
             Parse.User.logOut();
             nav.push(LoginPage, {});
           }
         }
       ]
     });
     nav.present(alert);
  }

};
