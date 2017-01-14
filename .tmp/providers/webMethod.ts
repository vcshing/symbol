import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import $ from "jquery";



import { User } from '../models/dataModels';

import { Symbol } from '../models/dataModels';
import { SymbolType } from '../models/dataModels';


import * as localforage from "localforage"
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebMethod {

  self=this;

  constructor(public http: Http) {

  }

  // Load all github users
  loadUser(): Observable<User[]> {
      var githubApiUrl = 'https://api.github.com';
      return this.http.get(githubApiUrl +'/users')
      .map(res => <User[]>res.json());
  }
  // Load all github users
  GetSymbol(page,selectTypeItem,type2,lang): Observable<Symbol[]> {
      var url = 'http://gogogo.synology.me/api/symbol/getdata.php?page='+page+'&type='+selectTypeItem +'&type2=' + type2 +'&lang=' + lang;
      return this.http.get(url)
      .map(res => <Symbol[]>res.json());
  }

  GetSymbolType(lang): Observable<SymbolType[]> {
      var url = 'http://gogogo.synology.me/api/symbol/gettype.php?lang='+lang;
      return this.http.get(url)
      .map(res => <SymbolType[]>res.json());
  }

  UpdateSymbolLike(masterID)  {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    let config={
      headers: headers
    }
    var data =$.param({
                 masterid: masterID
               });

      var url = 'http://gogogo.synology.me/api/symbol/updatelike.php';

      return this.http.post(url,data,config);

  }


    AddSymbolFavoriteCount(masterID)  {
        console.log("ADD"+masterID);
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
      let config={
        headers: headers
      }
      var data =$.param({
                   masterid: masterID
                 });

        var url = 'http://gogogo.synology.me/api/symbol/addfavorite.php';

        return this.http.post(url,data,config);
    }

    ReduceSymbolFavoriteCount(masterID)  {

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
      let config={
        headers: headers
      }
      var data =$.param({
                   masterid: masterID
                 });

        var url = 'http://gogogo.synology.me/api/symbol/reducefavorite.php';

        return this.http.post(url,data,config);
    }

    test()  {
        console.log("test");
    }



  Addfavorite(Symbol,Addfavoritecallback,Removefavoritecallback) {
    let favoriteArr=[];
    let self=this;
    localforage.getItem('favoriteArr', function (err, value) {

      if($(value).length==0){

          favoriteArr.push(Symbol);
          localforage.setItem("favoriteArr",favoriteArr);
          self.AddSymbolFavoriteCount(Symbol).subscribe(data => {
                Addfavoritecallback();
          })

      }else{
          favoriteArr=$(value).toArray();

          if($.inArray(Symbol, favoriteArr) <0){

              favoriteArr.push(Symbol);
              localforage.setItem("favoriteArr",favoriteArr);
              self.AddSymbolFavoriteCount(Symbol).subscribe(data => {
                    Addfavoritecallback();
              })

          }else{
              favoriteArr.splice( $.inArray(Symbol,favoriteArr) ,1 );
              localforage.setItem("favoriteArr",favoriteArr);

              self.ReduceSymbolFavoriteCount(Symbol).subscribe(data => {
                    Removefavoritecallback();
              })

          }
      }
    });
  }

  Checkfavorite(Symbol,IsFavoriteCallback,NotFavoriteCallback) {
    let favoriteArr=[];

    localforage.getItem('favoriteArr', function (err, value) {
      if($(value).length==0){
          NotFavoriteCallback();
      }else{
          favoriteArr=$(value).toArray();

          if($.inArray(Symbol, favoriteArr) <0){
              NotFavoriteCallback();
          }else{
              IsFavoriteCallback();
          }
      }
    });
  }

  Getfavorite(page,selectTypeItem,favoriteList,lang):Observable<Symbol[]> {
    console.log(favoriteList);
    var url = 'http://gogogo.synology.me/api/symbol/getdata.php?page='+page+'&type='+selectTypeItem+"&id="+favoriteList+"&lang="+lang;
    return this.http.get(url)
    .map(res => <Symbol[]>res.json());

  }

  SaveLoginInfo(userid){

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    let config={
      headers: headers
    }
    var data =$.param({
                 id: userid
               });

      var url = 'http://gogogo.synology.me/api/symbol/savelogininfo.php';
      alert(url);
      return this.http.post(url,data,config);

  }
}
