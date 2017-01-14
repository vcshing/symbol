import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebMethod } from '../../providers/webMethod';
import $ from "jquery";
import * as localForage from "localforage";
import { Clipboard } from 'ionic-native';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
export var HelloFavoritePage = (function () {
    function HelloFavoritePage(navCtrl, webMethod) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.webMethod = webMethod;
        //  navigator.language.split('-')[0]
        this.lang = navigator.language.split('-')[0];
        this.page = 1;
        this.type = [];
        this.selectTypeItem = "";
        var self = this;
        localForage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
            }
            else {
                webMethod.Getfavorite(self.page, self.type, value, self.lang).subscribe(function (data) {
                    $.each(data["result"], function (key, value) {
                        webMethod.Checkfavorite(String(value.master_id), function () {
                            data["result"][key]["favoritecss"] = "danger";
                        }, function () {
                            data["result"][key]["favoritecss"] = "default";
                        });
                    });
                    self.symbols = data["result"];
                    self.page++;
                });
            }
        });
        webMethod.GetSymbolType(this.lang).subscribe(function (data) {
            _this.symboltypes = data["result"];
            $(".select-text").html("ALL");
        });
    }
    HelloFavoritePage.prototype.doInfinite = function (infiniteScroll) {
        var self = this;
        localForage.getItem('favoriteArr', function (err, value) {
            var _this = this;
            if ($(value).length == 0) {
            }
            else {
                self.webMethod.Getfavorite(self.page, self.type, value, self.lang).subscribe(function (data) {
                    $.each(data["result"], function (key, value) {
                        self.webMethod.Checkfavorite(String(value.master_id), function () {
                            data["result"][key]["favoritecss"] = "danger";
                        }, function () {
                            data["result"][key]["favoritecss"] = "default";
                        });
                    });
                    console.log(data["result"]);
                    if ($(data["result"]).length > 0) {
                        self.symbols = _this.symbols.concat(data["result"]);
                        self.page++;
                    }
                    infiniteScroll.complete();
                });
            }
        });
    };
    HelloFavoritePage.prototype.updatelist = function (returnData) {
        var self = this;
        self.type = returnData.type;
        self.page = 1;
        localForage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
            }
            else {
                self.webMethod.Getfavorite(self.page, self.type, value, self.lang).subscribe(function (data) {
                    $.each(data["result"], function (key, value) {
                        self.webMethod.Checkfavorite(String(value.master_id), function () {
                            data["result"][key]["favoritecss"] = "danger";
                        }, function () {
                            data["result"][key]["favoritecss"] = "default";
                        });
                    });
                    self.symbols = data["result"];
                    self.page++;
                });
            }
        });
    };
    HelloFavoritePage.prototype.addlike = function (event, symbol) {
        //console.log(symbol.master_id);
        this.webMethod.UpdateSymbolLike(symbol.master_id).subscribe(function (data) {
            symbol.likecount++;
        });
    };
    HelloFavoritePage.prototype.addfavorite = function (event, favorite) {
        this.webMethod.Addfavorite(String(favorite.master_id), function () {
            favorite.favoritecss = "danger";
            favorite.favoritecount++;
        }, function () {
            favorite.favoritecss = "default";
            favorite.favoritecount--;
        });
    };
    HelloFavoritePage.prototype.shareFb = function (event, msg) {
        Clipboard.copy(msg.symbol);
    };
    HelloFavoritePage.prototype.refresh = function (event) {
        this.navCtrl.push(HelloIonicPage, {
            tabindex: 2
        });
    };
    HelloFavoritePage.decorators = [
        { type: Component, args: [{
                    selector: 'hello-ionic-page',
                    templateUrl: 'hello-ionic.html'
                },] },
    ];
    /** @nocollapse */
    HelloFavoritePage.ctorParameters = [
        { type: NavController, },
        { type: WebMethod, },
    ];
    return HelloFavoritePage;
}());
//# sourceMappingURL=hello-ionic.js.map