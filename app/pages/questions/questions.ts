import {IonicApp, Page, NavController, NavParams, Modal, Platform} from 'ionic-framework/ionic';
import {QuestionsDetail} from './questionsdetail';

@Page({
  templateUrl: 'build/pages/questions/questions.html'
})
export class QuestionsPage {

  constructor(app: IonicApp, nav: NavController, navParams: NavParams, modal: Modal) {
    this.nav = nav;
    this.modal = modal;
  }

  itemTapped(item) {
    this.nav.push(QuestionsDetail, { item: item })
    console.log("switch screen");
  }

  openModal(item){
    this.modal.open(questionModal);
    console.log("Open Modal");
  }

}

@Page({
  templateUrl: 'build/pages/questions/questionadd.html'
})
class questionModal{

  constructor(modal: Modal) {
    this.nav = nav;
    this.modal = Modal;
  }
  
}
