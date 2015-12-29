import {Page, NavController} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/team/team.html'
})
export class TeamPage {
  constructor(nav: NavController) {
	this.team = 'grid';
	this.isGrid = true;
	this.isList = false;
  }
  switch(segment) { 
  	this.team = segment;
	 if (segment == 'grid') {
	 	this.isGrid = true;
	 	this.isList = false;
	 }else{
	 	this.isGrid = false;
	 	this.isList = true;
	 }
  }
}
