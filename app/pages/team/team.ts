import {Page, NavController} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/team/team.html'
})
export class TeamPage {
  constructor(nav: NavController) {
	this.team = 'grid';
  }
}
