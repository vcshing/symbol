import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//import 'rxjs/add/operator/map';



import { Symbol } from '../../models/dataModels';
import { SymbolType } from '../../models/dataModels';
import {  WebMethod } from '../../providers/webMethod';


import $ from "jquery";
import * as localForage from "localforage";

import { SocialSharing } from 'ionic-native';
import { Clipboard } from 'ionic-native';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
@Component({
  selector: 'hello-ionic-page',
  templateUrl: 'hello-ionic.html'
})
export class HelloFavoritePage {
//  navigator.language.split('-')[0]

  lang=navigator.language.split('-')[0];
  page=1;
  type="";
  symbols: Symbol[];
  symboltypes: SymbolType[];
  selectTypeItem="";


  constructor(public navCtrl: NavController, private webMethod: WebMethod) {
    let self=this;
      localForage.getItem('favoriteArr', function (err, value) {

        if($(value).length==0){

        }else{
          webMethod.Getfavorite(self.page,self.type,value,self.lang).subscribe(data => {


            $.each( data["result"], function( key, value ) {
              webMethod.Checkfavorite(String(value.master_id),function(){
                  data["result"][key]["favoritecss"]=  "danger";
              },function(){
                  data["result"][key]["favoritecss"]=  "default";
              })
            });

            self.symbols = data["result"];
            self.page ++;
          })

          webMethod.GetSymbolType(self.page,self.type,"",value,self.lang).subscribe(data => {
            self.symboltypes = data["result"];
          })
        }
      });




  }

  doInfinite(infiniteScroll) {

    let self=this;
      localForage.getItem('favoriteArr', function (err, value) {

        if($(value).length==0){

        }else{
          self.webMethod.Getfavorite(self.page,self.type,value,self.lang).subscribe(data => {

            $.each( data["result"], function( key, value ) {
              self.webMethod.Checkfavorite(String(value.master_id),function(){
                  data["result"][key]["favoritecss"]=  "danger";
              },function(){
                  data["result"][key]["favoritecss"]=  "default";
              })
            });
            console.log(data["result"]);

            if($(data["result"]).length>0){
                  self.symbols = this.symbols.concat( data["result"]);
                  self.page ++;
            }
            infiniteScroll.complete();
          })

        }
      });

  }

  updatelist(returnData) {
      let self=this;
       self.type = returnData.type;
       self.page =1;

       localForage.getItem('favoriteArr', function (err, value) {

         if($(value).length==0){

         }else{
           self.webMethod.Getfavorite(self.page,self.type,value,self.lang).subscribe(data => {

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
       });
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
      alert(1);
      Clipboard.copy(msg.symbol);
      alert(2);
      this.webMethod.test().subscribe(data => {
        console.log(123);
        alert(3);
      })
    }

    refresh(event){
      this.navCtrl.push(HelloIonicPage, {
        tabindex: 2
      });
    }
}
