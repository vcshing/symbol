import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import $ from "jquery";
import * as localforage from "localforage";
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var WebMethod = (function () {
    function WebMethod(http) {
        this.http = http;
        this.self = this;
    }
    // Load all github users
    WebMethod.prototype.loadUser = function () {
        var githubApiUrl = 'https://api.github.com';
        return this.http.get(githubApiUrl + '/users')
            .map(function (res) { return res.json(); });
    };
    // Load all github users
    WebMethod.prototype.GetSymbol = function (page, selectTypeItem, type2, lang) {
        var url = 'http://gogogo.synology.me/api/symbol/getdata.php?page=' + page + '&type=' + selectTypeItem + '&type2=' + type2 + '&lang=' + lang;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    WebMethod.prototype.GetSymbolType = function (lang) {
        var url = 'http://gogogo.synology.me/api/symbol/gettype.php?lang=' + lang;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    WebMethod.prototype.UpdateSymbolLike = function (masterID) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            masterid: masterID
        });
        var url = 'http://gogogo.synology.me/api/symbol/updatelike.php';
        return this.http.post(url, data, config);
    };
    WebMethod.prototype.AddSymbolFavoriteCount = function (masterID) {
        console.log("ADD" + masterID);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            masterid: masterID
        });
        var url = 'http://gogogo.synology.me/api/symbol/addfavorite.php';
        return this.http.post(url, data, config);
    };
    WebMethod.prototype.ReduceSymbolFavoriteCount = function (masterID) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            masterid: masterID
        });
        var url = 'http://gogogo.synology.me/api/symbol/reducefavorite.php';
        return this.http.post(url, data, config);
    };
    WebMethod.prototype.test = function () {
        console.log("test");
    };
    WebMethod.prototype.Addfavorite = function (Symbol, Addfavoritecallback, Removefavoritecallback) {
        var favoriteArr = [];
        var self = this;
        localforage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
                favoriteArr.push(Symbol);
                localforage.setItem("favoriteArr", favoriteArr);
                self.AddSymbolFavoriteCount(Symbol).subscribe(function (data) {
                    Addfavoritecallback();
                });
            }
            else {
                favoriteArr = $(value).toArray();
                if ($.inArray(Symbol, favoriteArr) < 0) {
                    favoriteArr.push(Symbol);
                    localforage.setItem("favoriteArr", favoriteArr);
                    self.AddSymbolFavoriteCount(Symbol).subscribe(function (data) {
                        Addfavoritecallback();
                    });
                }
                else {
                    favoriteArr.splice($.inArray(Symbol, favoriteArr), 1);
                    localforage.setItem("favoriteArr", favoriteArr);
                    self.ReduceSymbolFavoriteCount(Symbol).subscribe(function (data) {
                        Removefavoritecallback();
                    });
                }
            }
        });
    };
    WebMethod.prototype.Checkfavorite = function (Symbol, IsFavoriteCallback, NotFavoriteCallback) {
        var favoriteArr = [];
        localforage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
                NotFavoriteCallback();
            }
            else {
                favoriteArr = $(value).toArray();
                if ($.inArray(Symbol, favoriteArr) < 0) {
                    NotFavoriteCallback();
                }
                else {
                    IsFavoriteCallback();
                }
            }
        });
    };
    WebMethod.prototype.Getfavorite = function (page, selectTypeItem, favoriteList, lang) {
        console.log(favoriteList);
        var url = 'http://gogogo.synology.me/api/symbol/getdata.php?page=' + page + '&type=' + selectTypeItem + "&id=" + favoriteList + "&lang=" + lang;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    WebMethod.prototype.SaveLoginInfo = function (userid) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            id: userid
        });
        var url = 'http://gogogo.synology.me/api/symbol/savelogininfo.php';
        alert(url);
        return this.http.post(url, data, config);
    };
    WebMethod.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WebMethod.ctorParameters = [
        { type: Http, },
    ];
    return WebMethod;
}());
//# sourceMappingURL=webMethod.js.map