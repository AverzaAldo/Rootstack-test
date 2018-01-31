import { Component, OnInit, Input } from '@angular/core';
import { InfoName } from '../interfaces';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-sw-names',
  templateUrl: './sw-names.component.html',
  styleUrls: ['./sw-names.component.css']
})
export class SwNamesComponent implements OnInit {
  curName= '';
  curGender = '';
  curBirth= '';
  curHeight= '';
  curMass= '';
  curHair= '';
  hideInfo = true;


  @Input() names: InfoName[];
  constructor() { }
  ngOnInit() {
  }

  onClickName(index){
    this.hideInfo = false;
    this.curName = index.name;
    this.curGender = index.gender;
    this.curBirth = index.birth_year;
    this.curHeight = index.height;
    this.curMass = index.mass;
    this.curHair = index.hair_color;

  }

  genderIcon(){
    if (this.curGender == 'male'){
      return 'fa fa-male';
    }
    else if (this.curGender == 'female'){
      return 'fa fa-female';
    }
    else if (this.curGender == 'n/a'){
      return 'fa fa-android'
    }
  }

}
