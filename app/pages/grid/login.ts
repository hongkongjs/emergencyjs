import {Page} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/grid/login.html'
})
export class LoginPage implements OnInit {

  public disabled : boolean;

  ngOnInit() {
      this.disabled = true;
  }
}
