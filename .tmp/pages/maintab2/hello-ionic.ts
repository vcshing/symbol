import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HttpModule } from '@angular/http';

//import 'rxjs/add/operator/map';

import { Symbol } from '../../models/dataModels';
import { SymbolType } from '../../models/dataModels';
import {  WebMethod } from '../../providers/webMethod';
import {  GlobalFunction } from '../../providers/function';

import $ from "jquery";

import { SocialSharing } from 'ionic-native';
import { Clipboard } from 'ionic-native';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'hello-ionic-page',
  templateUrl: 'hello-ionic.html'
})



export class MainTab2 {
//  navigator.language.split('-')[0]

  lang=navigator.language.split('-')[0];
  page=1;
  type="";
  type2=1;
  symbols: Symbol[];
  symboltypes: SymbolType[];
  selectTypeItem="";


  constructor(public navCtrl: NavController, private webMethod: WebMethod, private globalFunction: GlobalFunction) {

      webMethod.GetSymbol(this.page,this.type,this.type2,this.lang).subscribe(data => {
        console.log(data["result"]);

        $.each( data["result"], function( key, value ) {
          webMethod.Checkfavorite(String(value.master_id),function(){
              data["result"][key]["favoritecss"]=  "danger";
          },function(){
              data["result"][key]["favoritecss"]=  "default";
          })
        });

        this.symbols = data["result"];

        this.page ++;
      })

      webMethod.GetSymbolType(this.lang).subscribe(data => {
        this.symboltypes = data["result"];
      })


  }




  doInfinite(infiniteScroll) {
      let self=this;
      this.webMethod.GetSymbol(this.page,this.type,this.type2,this.lang).subscribe(data => {

      $.each( data["result"], function( key, value ) {
        self.webMethod.Checkfavorite(String(value.master_id),function(){
            data["result"][key]["favoritecss"]=  "danger";
        },function(){
            data["result"][key]["favoritecss"]=  "default";
        })
      });
      if($(data["result"]).length>0){
        this.symbols = this.symbols.concat( data["result"]);
        this.page ++;
      }

      infiniteScroll.complete();
    })

    if(Math.floor(Math.random() * 5) + 1 == 1 ){
      self.globalFunction.showInterstitial();
    }

  }

  updatelist(returnData) {
      let self=this;
       self.type = returnData.type;
       self.page =1;


       self.webMethod.GetSymbol(this.page,this.type,this.type2,this.lang).subscribe(data => {

         $.each( data["result"], function( key, value ) {
           self.webMethod.Checkfavorite(String(value.master_id),function(){
               data["result"][key]["favoritecss"]=  "danger";

           },function(){
               data["result"][key]["favoritecss"]=  "default";

           })
         });

         self.symbols = data["result"];
         self.page ++;
       })
  }

  addlike(event,symbol) {
      //console.log(symbol.master_id);
        this.webMethod.UpdateSymbolLike(symbol.master_id).subscribe(data => {
          symbol.likecount++
        })
  }


    addfavorite(event,favorite) {
      this.webMethod.Addfavorite(String(favorite.master_id),function(){
          favorite.favoritecss=  "danger";
          favorite.favoritecount++;
      },function(){
          favorite.favoritecss=  "default";
          favorite.favoritecount--;
      })
    }

    shareFb(event,msg) {
        // Check if sharing via email is supported
        Clipboard.copy(msg.symbol);
    }

    refresh(event){
      this.navCtrl.push(HelloIonicPage, {
        tabindex: 1
      });
    }
}
