import {Page} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/grid/reset.html'
})
export class ResetPage implements OnInit {

  public disabled : boolean;

  ngOnInit() {
      this.disabled = true;
  }
}
