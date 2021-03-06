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
import * as import0 from './item-details';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from 'ionic-angular/components/toolbar/toolbar';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from 'ionic-angular/components/tabs/tabs';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import28 from 'ionic-angular/components/navbar/navbar';
import * as import29 from 'ionic-angular/components/content/content';
import * as import30 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import32 from '@angular/core/src/linker/query_list';
import * as import33 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import34 from 'ionic-angular/components/menu/menu-controller';
import * as import35 from 'ionic-angular/components/icon/icon';
import * as import36 from 'ionic-angular/components/menu/menu-toggle';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-item';
export var Wrapper_ItemDetailsPage = (function () {
    function Wrapper_ItemDetailsPage(p0, p1) {
        this.changed = false;
        this.context = new import0.ItemDetailsPage(p0, p1);
    }
    Wrapper_ItemDetailsPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ItemDetailsPage;
}());
var renderType_ItemDetailsPage_Host = null;
var _View_ItemDetailsPage_Host0 = (function (_super) {
    __extends(_View_ItemDetailsPage_Host0, _super);
    function _View_ItemDetailsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemDetailsPage_Host0, renderType_ItemDetailsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemDetailsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('item-details-page', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ItemDetailsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ItemDetailsPage_0_4 = new Wrapper_ItemDetailsPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams));
        this._appEl_0.initComponent(this._ItemDetailsPage_0_4.context, [], compView_0);
        compView_0.create(this._ItemDetailsPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ItemDetailsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ItemDetailsPage) && (0 === requestNodeIndex))) {
            return this._ItemDetailsPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_ItemDetailsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ItemDetailsPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ItemDetailsPage_Host0;
}(import1.AppView));
function viewFactory_ItemDetailsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ItemDetailsPage_Host === null)) {
        (renderType_ItemDetailsPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ItemDetailsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ItemDetailsPageNgFactory = new import11.ComponentFactory('item-details-page', viewFactory_ItemDetailsPage_Host0, import0.ItemDetailsPage);
var styles_ItemDetailsPage = [];
var renderType_ItemDetailsPage = null;
var _View_ItemDetailsPage0 = (function (_super) {
    __extends(_View_ItemDetailsPage0, _super);
    function _View_ItemDetailsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemDetailsPage0, renderType_ItemDetailsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemDetailsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import21.TemplateRef_(this._appEl_4, viewFactory_ItemDetailsPage1);
        this._NgIf_4_6 = new import14.Wrapper_NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(null, '\n    ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 2, this, this._el_6);
        var compView_6 = import15.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_6), this.renderer, this.parentInjector.get(import22.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Item Details', null);
        compView_6.create(this._ToolbarTitle_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._appEl_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_5,
                this._el_6,
                this._text_8
            ])
        ], null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_11 = new import3.AppElement(11, null, this, this._el_11);
        var compView_11 = import16.viewFactory_Content0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Content_11_4 = new import16.Wrapper_Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import23.Keyboard), this.parentInjector.get(import24.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import25.Tabs, null));
        this._appEl_11.initComponent(this._Content_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_13 = new import3.AppElement(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import21.TemplateRef_(this._appEl_13, viewFactory_ItemDetailsPage2);
        this._NgIf_13_6 = new import14.Wrapper_NgIf(this._appEl_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(null, '\n', null);
        compView_11.create(this._Content_11_4.context, [
            [],
            [].concat([
                this._text_12,
                this._appEl_13,
                this._text_14
            ]),
            []
        ], null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15
        ], [], []);
        return null;
    };
    _View_ItemDetailsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import26.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import27.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import28.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import22.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Header_0_3.context;
        }
        if (((token === import21.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import26.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import29.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Content_11_4.context;
        }
        return notFoundResult;
    };
    _View_ItemDetailsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_2 = !this.context.selectedItem;
        this._NgIf_4_6.check_ngIf(currVal_2, throwOnChange, false);
        this._NgIf_4_6.detectChangesInternal(this, this._anchor_4, throwOnChange);
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (this._Content_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        var currVal_4 = this.context.selectedItem;
        this._NgIf_13_6.check_ngIf(currVal_4, throwOnChange, false);
        this._NgIf_13_6.detectChangesInternal(this, this._anchor_13, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._Content_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ItemDetailsPage0.prototype.destroyInternal = function () {
        this._Content_11_4.context.ngOnDestroy();
    };
    return _View_ItemDetailsPage0;
}(import1.AppView));
export function viewFactory_ItemDetailsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ItemDetailsPage === null)) {
        (renderType_ItemDetailsPage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_ItemDetailsPage, {}));
    }
    return new _View_ItemDetailsPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ItemDetailsPage1 = (function (_super) {
    __extends(_View_ItemDetailsPage1, _super);
    function _View_ItemDetailsPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemDetailsPage1, renderType_ItemDetailsPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemDetailsPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'menuToggle', '');
        this._MenuToggle_0_3 = new import30.Wrapper_MenuToggle(this.parent.parentInjector.get(import34.MenuController), new import18.ElementRef(this._el_0), this.parent.parentInjector.get(import19.ViewController, null), this.parent._Navbar_2_4.context);
        this._ToolbarItem_0_4 = new import31.Wrapper_ToolbarItem(this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import22.Toolbar, null), this.parent._Navbar_2_4.context);
        this._query_Button_0_0 = new import32.QueryList();
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_2, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_2, 'role', 'img');
        this._Icon_2_3 = new import33.Wrapper_Icon(this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_ItemDetailsPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Icon) && (2 === requestNodeIndex))) {
            return this._Icon_2_3.context;
        }
        if (((token === import36.MenuToggle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._MenuToggle_0_3.context;
        }
        if (((token === import37.ToolbarItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._ToolbarItem_0_4.context;
        }
        return notFoundResult;
    };
    _View_ItemDetailsPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = '';
        this._MenuToggle_0_3.check_menuToggle(currVal_1, throwOnChange, false);
        this._MenuToggle_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._ToolbarItem_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_3 = 'menu';
        this._Icon_2_3.check_name(currVal_3, throwOnChange, false);
        this._Icon_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_0.dirty) {
                this._query_Button_0_0.reset([]);
                this._ToolbarItem_0_4.context._buttons = this._query_Button_0_0;
                this._query_Button_0_0.notifyOnChanges();
            }
        }
        var currVal_2 = this._MenuToggle_0_3.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'hidden', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Icon_2_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'hide', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ItemDetailsPage1.prototype.destroyInternal = function () {
        this._Icon_2_3.context.ngOnDestroy();
    };
    _View_ItemDetailsPage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_0_3.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_ItemDetailsPage1;
}(import1.AppView));
function viewFactory_ItemDetailsPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ItemDetailsPage1(viewUtils, parentInjector, declarationEl);
}
var _View_ItemDetailsPage2 = (function (_super) {
    __extends(_View_ItemDetailsPage2, _super);
    function _View_ItemDetailsPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ItemDetailsPage2, renderType_ItemDetailsPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ItemDetailsPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'selection');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'b', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_5, 'role', 'img');
        this._Icon_5_3 = new import33.Wrapper_Icon(this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_5), this.renderer);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_8 = this.renderer.createText(this._el_7, '\n      You navigated here from ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'b', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_ItemDetailsPage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Icon) && (5 === requestNodeIndex))) {
            return this._Icon_5_3.context;
        }
        return notFoundResult;
    };
    _View_ItemDetailsPage2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = import4.interpolate(1, '', this.parent.context.selectedItem.icon, '');
        this._Icon_5_3.check_name(currVal_1, throwOnChange, false);
        this._Icon_5_3.detectChangesInternal(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.parent.context.selectedItem.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_2 = this._Icon_5_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_5, 'hide', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.parent.context.selectedItem.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ItemDetailsPage2.prototype.destroyInternal = function () {
        this._Icon_5_3.context.ngOnDestroy();
    };
    return _View_ItemDetailsPage2;
}(import1.AppView));
function viewFactory_ItemDetailsPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ItemDetailsPage2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=item-details.ngfactory.js.map