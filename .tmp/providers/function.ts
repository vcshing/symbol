import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
declare var AdMob: any;

@Injectable()
export class GlobalFunction {
  private admobId: any;
  self=this;

  constructor(public http: Http) {
    if(/(android)/i.test(navigator.userAgent)) {
      this.admobId = {
          banner: 'ca-app-pub-3715336230214756/5502079025',
          interstitial: 'ca-app-pub-3715336230214756/6978812228'
      };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        this.admobId = {
            banner: 'ca-app-pub-3715336230214756/5502079025',
            interstitial: 'ca-app-pub-3715336230214756/6978812228'
        };
    }
  }



    showInterstitial() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            if(AdMob) {
                AdMob.prepareInterstitial({
                    adId: this.admobId.interstitial,
                    autoShow: true
                });
            }
        }
    }


    hideBanner() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            if(AdMob) {
                AdMob.hideBanner();
            }
      }
    }


    createBanner() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        if(AdMob) AdMob.createBanner({
        adId: this.admobId.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true })
      }
    }

    prepareInterstitial() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        if(AdMob) AdMob.prepareInterstitial( {adId:this.admobId.interstitial, autoShow:false} );
      }
    }

}
