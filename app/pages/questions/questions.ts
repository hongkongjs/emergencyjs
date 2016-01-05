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

  //once clicked, opens up the new screen, take note of the QuestionsDetail
  itemTapped(item) {
    this.nav.push(QuestionsDetail)
    console.log("switch screen");
  }

  //opens the modal, placed here because we are still in the questions page
  openModal(item){
    this.modal.open(questionModal);
    console.log("Open Modal");
  }

}


//Modal code, the templateUrl directs to the modal template
@Page({
  templateUrl: 'build/pages/questions/questionadd.html'
})
class questionModal{

  constructor() {
  }
}
