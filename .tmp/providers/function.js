import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export var GlobalFunction = (function () {
    function GlobalFunction(http) {
        this.http = http;
        this.self = this;
        if (/(android)/i.test(navigator.userAgent)) {
            this.admobId = {
                banner: 'ca-app-pub-3715336230214756/5502079025',
                interstitial: 'ca-app-pub-3715336230214756/6978812228'
            };
        }
        else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            this.admobId = {
                banner: 'ca-app-pub-3715336230214756/5502079025',
                interstitial: 'ca-app-pub-3715336230214756/6978812228'
            };
        }
    }
    GlobalFunction.prototype.showInterstitial = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob) {
                AdMob.prepareInterstitial({
                    adId: this.admobId.interstitial,
                    autoShow: true
                });
            }
        }
    };
    GlobalFunction.prototype.hideBanner = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob) {
                AdMob.hideBanner();
            }
        }
    };
    GlobalFunction.prototype.createBanner = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob)
                AdMob.createBanner({
                    adId: this.admobId.banner,
                    position: AdMob.AD_POSITION.BOTTOM_CENTER,
                    autoShow: true });
        }
    };
    GlobalFunction.prototype.prepareInterstitial = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob)
                AdMob.prepareInterstitial({ adId: this.admobId.interstitial, autoShow: false });
        }
    };
    GlobalFunction.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GlobalFunction.ctorParameters = [
        { type: Http, },
    ];
    return GlobalFunction;
}());
//# sourceMappingURL=function.js.map