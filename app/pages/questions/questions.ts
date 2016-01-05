import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';
import {QuestionsDetail} from './questionsdetail';

@Page({
  templateUrl: 'build/pages/questions/questions.html'
})
export class QuestionsPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
  }

  itemTapped(item) {
    this.nav.push(QuestionsDetail, { item: item })
    console.log("switch screen");
  }
}
