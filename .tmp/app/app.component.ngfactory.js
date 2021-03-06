/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from 'ionic-angular/components/menu/menu-controller';
import * as import10 from '../providers/webMethod';
import * as import11 from '../providers/function';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import16 from '../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import17 from '../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import18 from '../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import19 from '../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import20 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import21 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/gestures/gesture-controller';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from 'ionic-angular/components/navbar/navbar';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from '@angular/core/src/linker/template_ref';
import * as import32 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import33 from 'ionic-angular/navigation/nav-controller-base';
import * as import34 from '@angular/core/src/linker/component_factory_resolver';
import * as import35 from 'ionic-angular/transitions/transition-controller';
import * as import36 from 'ionic-angular/navigation/deep-linker';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import38 from 'ionic-angular/components/toolbar/toolbar';
import * as import39 from '@angular/common/src/directives/ng_for';
import * as import40 from 'ionic-angular/components/list/list';
import * as import41 from 'ionic-angular/components/content/content';
import * as import42 from 'ionic-angular/components/menu/menu';
import * as import43 from 'ionic-angular/components/nav/nav';
import * as import44 from '../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import45 from 'ionic-angular/util/form';
import * as import46 from 'ionic-angular/components/item/item-reorder';
import * as import47 from 'ionic-angular/components/item/item';
export var Wrapper_MyApp = (function () {
    function Wrapper_MyApp(p0, p1, p2, p3) {
        this.changed = false;
        this.context = new import0.MyApp(p0, p1, p2, p3);
    }
    Wrapper_MyApp.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_MyApp;
}());
var renderType_MyApp_Host = null;
var _View_MyApp_Host0 = (function (_super) {
    __extends(_View_MyApp_Host0, _super);
    function _View_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp_Host0, renderType_MyApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyApp_0_4 = new Wrapper_MyApp(this.parentInjector.get(import8.Platform), this.parentInjector.get(import9.MenuController), this.parentInjector.get(import10.WebMethod), this.parentInjector.get(import11.GlobalFunction));
        this._appEl_0.initComponent(this._MyApp_0_4.context, [], compView_0);
        compView_0.create(this._MyApp_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MyApp) && (0 === requestNodeIndex))) {
            return this._MyApp_0_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MyApp_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MyApp_Host0;
}(import1.AppView));
function viewFactory_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp_Host === null)) {
        (renderType_MyApp_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_MyApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyAppNgFactory = new import13.ComponentFactory('ng-component', viewFactory_MyApp_Host0, import0.MyApp);
var styles_MyApp = [];
var renderType_MyApp = null;
var _View_MyApp0 = (function (_super) {
    __extends(_View_MyApp0, _super);
    function _View_MyApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp0, renderType_MyApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_Nav_0 = new import14.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-menu', null);
        this.renderer.setElementAttribute(this._el_0, 'role', 'navigation');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import15.viewFactory_Menu0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Menu_0_4 = new import15.Wrapper_Menu(this.parentInjector.get(import9.MenuController), new import22.ElementRef(this._el_0), this.parentInjector.get(import23.Config), this.parentInjector.get(import8.Platform), this.renderer, this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import26.GestureController));
        this._query_Content_0_0 = new import14.QueryList();
        this._appEl_0.initComponent(this._Menu_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-header', null);
        this._Header_2_3 = new import16.Wrapper_Header(this.parentInjector.get(import23.Config), new import22.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'toolbar');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import16.viewFactory_Toolbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Toolbar_4_4 = new import16.Wrapper_Toolbar(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import23.Config), new import22.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Toolbar_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import17.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import17.Wrapper_ToolbarTitle(this.parentInjector.get(import23.Config), new import22.ElementRef(this._el_6), this.renderer, this._Toolbar_4_4.context, this.parentInjector.get(import28.Navbar, null));
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Symbol', null);
        compView_6.create(this._ToolbarTitle_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Toolbar_4_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_5,
                this._el_6,
                this._text_8
            ])
        ], null);
        this._text_9 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-content', null);
        this._appEl_11 = new import3.AppElement(11, 0, this, this._el_11);
        var compView_11 = import18.viewFactory_Content0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Content_11_4 = new import18.Wrapper_Content(this.parentInjector.get(import23.Config), new import22.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import30.Tabs, null));
        this._appEl_11.initComponent(this._Content_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-list', null);
        this._List_13_3 = new import19.Wrapper_List(this.parentInjector.get(import23.Config), new import22.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import26.GestureController));
        this._text_14 = this.renderer.createText(this._el_13, '\n      ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._appEl_15 = new import3.AppElement(15, 13, this, this._anchor_15);
        this._TemplateRef_15_5 = new import31.TemplateRef_(this._appEl_15, viewFactory_MyApp1);
        this._NgFor_15_6 = new import20.Wrapper_NgFor(this._appEl_15.vcRef, this._TemplateRef_15_5, this.parentInjector.get(import32.IterableDiffers), this.ref);
        this._text_16 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_17 = this.renderer.createText(null, '\n  ', null);
        compView_11.create(this._Content_11_4.context, [
            [],
            [].concat([
                this._text_12,
                this._el_13,
                this._text_17
            ]),
            []
        ], null);
        this._text_18 = this.renderer.createText(null, '\n\n', null);
        this._query_Content_0_0.reset([this._Content_11_4.context]);
        this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
        compView_0.create(this._Menu_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_10,
                this._el_11,
                this._text_18
            ])], null);
        this._text_19 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_20 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this.renderer.setElementAttribute(this._el_20, 'swipeBackEnabled', 'false');
        this._appEl_20 = new import3.AppElement(20, null, this, this._el_20);
        var compView_20 = import21.viewFactory_Nav0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Nav_20_4 = new import21.Wrapper_Nav(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import33.NavControllerBase, null), this.parentInjector.get(import29.App), this.parentInjector.get(import23.Config), this.parentInjector.get(import24.Keyboard), new import22.ElementRef(this._el_20), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import34.ComponentFactoryResolver), this.parentInjector.get(import26.GestureController), this.parentInjector.get(import35.TransitionController), this.parentInjector.get(import36.DeepLinker, null));
        this._appEl_20.initComponent(this._Nav_20_4.context, [], compView_20);
        compView_20.create(this._Nav_20_4.context, [], null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._viewQuery_Nav_0.reset([this._Nav_20_4.context]);
        this.context.nav = this._viewQuery_Nav_0.first;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21
        ], [], []);
        return null;
    };
    _View_MyApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import38.Toolbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Toolbar_4_4.context;
        }
        if (((token === import38.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Header_2_3.context;
        }
        if (((token === import31.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import39.NgFor) && (15 === requestNodeIndex))) {
            return this._NgFor_15_6.context;
        }
        if (((token === import40.List) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._List_13_3.context;
        }
        if (((token === import41.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Content_11_4.context;
        }
        if (((token === import42.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Menu_0_4.context;
        }
        if (((token === import43.Nav) && (20 === requestNodeIndex))) {
            return this._Nav_20_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._Nav_20_4.context;
        this._Menu_0_4.check_content(currVal_0, throwOnChange, false);
        if (this._Menu_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Header_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Toolbar_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (this._Content_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        this._List_13_3.detectChangesInternal(this, this._el_13, throwOnChange);
        var currVal_3 = this.context.pages;
        this._NgFor_15_6.check_ngForOf(currVal_3, throwOnChange, false);
        this._NgFor_15_6.detectChangesInternal(this, this._anchor_15, throwOnChange);
        var currVal_4 = this.context.rootPage;
        this._Nav_20_4.check_root(currVal_4, throwOnChange, false);
        var currVal_5 = 'false';
        this._Nav_20_4.check_swipeBackEnabled(currVal_5, throwOnChange, false);
        this._Nav_20_4.detectChangesInternal(this, this._el_20, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this._Toolbar_4_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_4, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_20_4.context.ngAfterViewInit();
            }
        }
    };
    _View_MyApp0.prototype.destroyInternal = function () {
        this._Content_11_4.context.ngOnDestroy();
        this._Menu_0_4.context.ngOnDestroy();
    };
    return _View_MyApp0;
}(import1.AppView));
export function viewFactory_MyApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp === null)) {
        (renderType_MyApp = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_MyApp, {}));
    }
    return new _View_MyApp0(viewUtils, parentInjector, declarationEl);
}
var _View_MyApp1 = (function (_super) {
    __extends(_View_MyApp1, _super);
    function _View_MyApp1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp1, renderType_MyApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import44.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import44.Wrapper_Item(this.parent.parentInjector.get(import45.Form), this.parent.parentInjector.get(import23.Config), new import22.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import46.ItemReorder, null));
        this._ItemContent_0_5 = new import44.Wrapper_ItemContent();
        this._query_Label_0_0 = new import14.QueryList();
        this._query_Button_0_1 = new import14.QueryList();
        this._query_Icon_0_2 = new import14.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([this._text_1]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_MyApp1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import47.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4.context;
        }
        if (((token === import47.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_MyApp1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = import4.interpolate(1, '\n        ', this.context.$implicit.title, '\n      ');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyApp1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.openPage(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_MyApp1;
}(import1.AppView));
function viewFactory_MyApp1(viewUtils, parentInjector, declarationEl) {
    return new _View_MyApp1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map