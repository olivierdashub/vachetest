import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public items: any[]= [
  {
    sanibel: "00AAbCC5",
    photo:"https://www.francebleu.fr/s3/cruiser-production/2016/04/54a020da-cb69-4353-8eb0-efa6a0a2cbff/738_vache.jpg",
    last: "10 Novembre 2017 10:46",
    location:"champs 1"
  },
  {
    sanibel: "ADAAbFG1",
    photo:"http://www.franchement-comtois.net/wp-content/uploads/vache-brune.jpg",
    last: "10 Novembre 2017 10:51",
    location:"champs 3"

  },
  {
    sanibel: "00GHBD3",
    photo:"https://www.causeur.fr/wp-content/uploads/2017/09/vaches-cloches-le-biot.jpg",
    last: "10 Novembre 2017 10:53",
    location:"champs 4"

  }

 ];
  constructor(public navCtrl: NavController) {

  }

}
