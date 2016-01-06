import {OnInit} from 'angular2/core';
import {Page, NavController} from 'ionic-framework/ionic';
import {TeamService} from './team.service';
import {Member} from './member';

@Page({
  templateUrl: 'build/pages/team/team.html',
  providers: [TeamService]
})
export class TeamPage implements OnInit {
  
  public team: Member[];
  
  constructor(nav: NavController, private _teamService: TeamService) {
	this.team = 'grid';
  }

  getTeam() {
	  this._teamService.getTeam().then(team => this.team = team);
  }

  ngOnInit() {
	  this.getTeam();
  }

}
