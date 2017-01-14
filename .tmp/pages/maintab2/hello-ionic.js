import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebMethod } from '../../providers/webMethod';
import { GlobalFunction } from '../../providers/function';
import $ from "jquery";
import { Clipboard } from 'ionic-native';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
export var MainTab2 = (function () {
    function MainTab2(navCtrl, webMethod, globalFunction) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.webMethod = webMethod;
        this.globalFunction = globalFunction;
        //  navigator.language.split('-')[0]
        this.lang = navigator.language.split('-')[0];
        this.page = 1;
        this.type = "";
        this.type2 = 1;
        this.selectTypeItem = "";
        webMethod.GetSymbol(this.page, this.type, this.type2, this.lang).subscribe(function (data) {
            console.log(data["result"]);
            $.each(data["result"], function (key, value) {
                webMethod.Checkfavorite(String(value.master_id), function () {
                    data["result"][key]["favoritecss"] = "danger";
                }, function () {
                    data["result"][key]["favoritecss"] = "default";
                });
            });
            _this.symbols = data["result"];
            _this.page++;
        });
        webMethod.GetSymbolType(this.lang).subscribe(function (data) {
            _this.symboltypes = data["result"];
        });
    }
    MainTab2.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var self = this;
        this.webMethod.GetSymbol(this.page, this.type, this.type2, this.lang).subscribe(function (data) {
            $.each(data["result"], function (key, value) {
                self.webMethod.Checkfavorite(String(value.master_id), function () {
                    data["result"][key]["favoritecss"] = "danger";
                }, function () {
                    data["result"][key]["favoritecss"] = "default";
                });
            });
            if ($(data["result"]).length > 0) {
                _this.symbols = _this.symbols.concat(data["result"]);
                _this.page++;
            }
            infiniteScroll.complete();
        });
        if (Math.floor(Math.random() * 5) + 1 == 1) {
            self.globalFunction.showInterstitial();
        }
    };
    MainTab2.prototype.updatelist = function (returnData) {
        var self = this;
        self.type = returnData.type;
        self.page = 1;
        self.webMethod.GetSymbol(this.page, this.type, this.type2, this.lang).subscribe(function (data) {
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
    };
    MainTab2.prototype.addlike = function (event, symbol) {
        //console.log(symbol.master_id);
        this.webMethod.UpdateSymbolLike(symbol.master_id).subscribe(function (data) {
            symbol.likecount++;
        });
    };
    MainTab2.prototype.addfavorite = function (event, favorite) {
        this.webMethod.Addfavorite(String(favorite.master_id), function () {
            favorite.favoritecss = "danger";
            favorite.favoritecount++;
        }, function () {
            favorite.favoritecss = "default";
            favorite.favoritecount--;
        });
    };
    MainTab2.prototype.shareFb = function (event, msg) {
        // Check if sharing via email is supported
        Clipboard.copy(msg.symbol);
    };
    MainTab2.prototype.refresh = function (event) {
        this.navCtrl.push(HelloIonicPage, {
            tabindex: 1
        });
    };
    MainTab2.decorators = [
        { type: Component, args: [{
                    selector: 'hello-ionic-page',
                    templateUrl: 'hello-ionic.html'
                },] },
    ];
    /** @nocollapse */
    MainTab2.ctorParameters = [
        { type: NavController, },
        { type: WebMethod, },
        { type: GlobalFunction, },
    ];
    return MainTab2;
}());
//# sourceMappingURL=hello-ionic.js.map