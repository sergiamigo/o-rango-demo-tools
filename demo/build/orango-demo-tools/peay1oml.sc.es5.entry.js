var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();OrangoDemoTools.loadBundle("peay1oml",["exports","./chunk-9b418755.js"],function(t,e){var n=window.OrangoDemoTools.h,o={OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",CLOSING:"mdc-dialog--closing",SCROLLABLE:"mdc-dialog--scrollable",STACKED:"mdc-dialog--stacked",SCROLL_LOCK:"mdc-dialog-scroll-lock"},i={SCRIM_SELECTOR:".mdc-dialog__scrim",CONTAINER_SELECTOR:".mdc-dialog__container",SURFACE_SELECTOR:".mdc-dialog__surface",CONTENT_SELECTOR:".mdc-dialog__content",BUTTON_SELECTOR:".mdc-dialog__button",DEFAULT_BUTTON_SELECTOR:".mdc-dialog__button--default",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),OPENING_EVENT:"MDCDialog:opening",OPENED_EVENT:"MDCDialog:opened",CLOSING_EVENT:"MDCDialog:closing",CLOSED_EVENT:"MDCDialog:closed",ACTION_ATTRIBUTE:"data-mdc-dialog-action",CLOSE_ACTION:"close",DESTROY_ACTION:"destroy"},a={DIALOG_ANIMATION_OPEN_TIME_MS:150,DIALOG_ANIMATION_CLOSE_TIME_MS:75},r=function(t){function e(n){var o=t.call(this,Object.assign(e.defaultAdapter,n))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.layoutFrame_=0,o.escapeKeyAction_=i.CLOSE_ACTION,o.scrimClickAction_=i.CLOSE_ACTION,o.autoStackButtons_=!0,o.areButtonsStacked_=!1,o}return __extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return i},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){},addBodyClass:function(){},removeBodyClass:function(){},eventTargetMatches:function(){},trapFocus:function(){},releaseFocus:function(){},isContentScrollable:function(){},areButtonsStacked:function(){},getActionFromEvent:function(){},clickDefaultButton:function(){},reverseButtons:function(){},notifyOpening:function(){},notifyOpened:function(){},notifyClosing:function(){},notifyClosed:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.hasClass(o.STACKED)&&this.setAutoStackButtons(!1)},e.prototype.destroy=function(){this.isOpen_&&this.close(i.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},e.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(o.OPENING),this.runNextAnimationFrame_(function(){t.adapter_.addClass(o.OPEN),t.adapter_.addBodyClass(o.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout(function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(),t.adapter_.notifyOpened()},a.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(o.CLOSING),this.adapter_.removeClass(o.OPEN),this.adapter_.removeBodyClass(o.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){e.adapter_.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)},a.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction_},e.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},e.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(o.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(o.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},e.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(o.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(o.SCROLLABLE)},e.prototype.handleInteraction=function(t){var e="click"===t.type,n="Enter"===t.key||13===t.keyCode;if(e&&this.adapter_.eventTargetMatches(t.target,i.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else if(e||"Space"===t.key||32===t.keyCode||n){var o=this.adapter_.getActionFromEvent(t);o?this.close(o):n&&!this.adapter_.eventTargetMatches(t.target,i.SUPPRESS_DEFAULT_PRESS_SELECTOR)&&this.adapter_.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){"Escape"!==t.key&&27!==t.keyCode||""===this.escapeKeyAction_||this.close(this.escapeKeyAction_)},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(o.OPENING),this.adapter_.removeClass(o.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},e}(e.MDCFoundation),c=function(t,e){e=e||{};var n,o,i,a=t.ownerDocument||t,r=[],c=[],s=function(t){var e=[];return function(n){if(n===t.documentElement)return!1;var o=t.defaultView.getComputedStyle(n);return!!function n(o,i){if(o===t.documentElement)return!1;for(var a=0,r=e.length;a<r;a++)if(e[a][0]===o)return e[a][1];var c=!1;return"none"===(i=i||t.defaultView.getComputedStyle(o)).display?c=!0:o.parentNode&&(c=n(o.parentNode)),e.push([o,c]),c}(n,o)||"hidden"===o.visibility}}(a),u=["input","select","a[href]","textarea","button","[tabindex]"],l=t.querySelectorAll(u.join(","));if(e.includeContainer){var d=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;u.some(function(e){return d.call(t,e)})&&(l=Array.prototype.slice.apply(l)).unshift(t)}for(var f=0,p=l.length;f<p;f++)n=l[f],o=parseInt(n.getAttribute("tabindex"),10),(i=isNaN(o)?n.tabIndex:o)<0||"INPUT"===n.tagName&&"hidden"===n.type||n.disabled||s(n,a)||(0===i?r.push(n):c.push({index:f,tabIndex:i,node:n}));var _=c.sort(function(t,e){return t.tabIndex===e.tabIndex?t.index-e.index:t.tabIndex-e.tabIndex}).map(function(t){return t.node});return Array.prototype.push.apply(_,r),_},s=null;function u(t){t&&t.focus&&t!==document.activeElement&&(t.focus(),"input"===t.tagName.toLowerCase()&&t.select())}var l=function(t,e){var n=[],o=null,i=null,a=null,r=!1,l=!1,d=null,f="string"==typeof t?document.querySelector(t):t,p=e||{};p.returnFocusOnDeactivate=!e||void 0===e.returnFocusOnDeactivate||e.returnFocusOnDeactivate,p.escapeDeactivates=!e||void 0===e.escapeDeactivates||e.escapeDeactivates;var _={activate:function(t){if(!r){var e={onActivate:t&&void 0!==t.onActivate?t.onActivate:p.onActivate};return r=!0,l=!1,a=document.activeElement,e.onActivate&&e.onActivate(),h(),_}},deactivate:m,pause:function(){!l&&r&&(l=!0,y())},unpause:function(){l&&r&&(l=!1,h())}};return _;function m(t){if(r){var e={returnFocus:t&&void 0!==t.returnFocus?t.returnFocus:p.returnFocusOnDeactivate,onDeactivate:t&&void 0!==t.onDeactivate?t.onDeactivate:p.onDeactivate};return y(),e.onDeactivate&&e.onDeactivate(),e.returnFocus&&setTimeout(function(){u(a)},0),r=!1,l=!1,this}}function h(){if(r)return s&&s.pause(),s=_,T(),setTimeout(function(){u(function(){var t;if(!(t=null!==E("initialFocus")?E("initialFocus"):f.contains(document.activeElement)?document.activeElement:n[0]||E("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}())},0),document.addEventListener("focus",C,!0),document.addEventListener("click",g,!0),document.addEventListener("mousedown",v,!0),document.addEventListener("touchstart",v,!0),document.addEventListener("keydown",O,!0),_}function y(){if(r&&s===_)return document.removeEventListener("focus",C,!0),document.removeEventListener("click",g,!0),document.removeEventListener("mousedown",v,!0),document.removeEventListener("touchstart",v,!0),document.removeEventListener("keydown",O,!0),s=null,_}function E(t){var e=p[t],n=e;if(!e)return null;if("string"==typeof e&&!(n=document.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function v(t){p.clickOutsideDeactivates&&!f.contains(t.target)&&m({returnFocus:!1})}function g(t){p.clickOutsideDeactivates||f.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function C(t){f.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation(),"function"==typeof t.target.blur&&t.target.blur(),d&&function(t){if(d.shiftKey)return u(i);u(o)}())}function O(t){"Tab"!==t.key&&9!==t.keyCode||function(t){if(T(),t.target.hasAttribute("tabindex")&&Number(t.target.getAttribute("tabindex"))<0)return d=t;t.preventDefault();var e=n.indexOf(t.target);t.shiftKey?t.target===o||-1===n.indexOf(t.target)?u(i):u(n[e-1]):u(t.target===i?o:n[e+1])}(t),!1!==p.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&m()}function T(){n=c(f),o=n[0],i=n[n.length-1]}};function d(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var f=r.strings,p=function(t){function n(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.apply(this,e)||this}return __extends(n,t),n.attachTo=function(t){return new n(t)},Object.defineProperty(n.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"escapeKeyAction",{get:function(){return this.foundation_.getEscapeKeyAction()},set:function(t){this.foundation_.setEscapeKeyAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scrimClickAction",{get:function(){return this.foundation_.getScrimClickAction()},set:function(t){this.foundation_.setScrimClickAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"autoStackButtons",{get:function(){return this.foundation_.getAutoStackButtons()},set:function(t){this.foundation_.setAutoStackButtons(t)},enumerable:!0,configurable:!0}),n.prototype.initialize=function(t,n){void 0===t&&(t=l),void 0===n&&(n=null),this.container_=this.root_.querySelector(f.CONTAINER_SELECTOR),this.content_=this.root_.querySelector(f.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(f.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector(f.DEFAULT_BUTTON_SELECTOR),this.buttonRipples_=[],this.focusTrapFactory_=t,this.initialFocusEl_=n;for(var o=0,i=void 0;i=this.buttons_[o];o++)this.buttonRipples_.push(new e.MDCRipple(i))},n.prototype.initialSyncWithDOM=function(){var t,e,n=this;this.focusTrap_=(void 0===(t=this.focusTrapFactory_)&&(t=l),void 0===(e=this.initialFocusEl_)&&(e=null),t(this.container_,{initialFocus:e,escapeDeactivates:!1,clickOutsideDeactivates:!0})),this.handleInteraction_=this.foundation_.handleInteraction.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.layout_=this.layout.bind(this);var o=["resize","orientationchange"];this.handleOpening_=function(){o.forEach(function(t){return window.addEventListener(t,n.layout_)}),document.addEventListener("keydown",n.handleDocumentKeydown_)},this.handleClosing_=function(){o.forEach(function(t){return window.removeEventListener(t,n.layout_)}),document.removeEventListener("keydown",n.handleDocumentKeydown_)},this.listen("click",this.handleInteraction_),this.listen("keydown",this.handleInteraction_),this.listen(f.OPENING_EVENT,this.handleOpening_),this.listen(f.CLOSING_EVENT,this.handleClosing_)},n.prototype.destroy=function(){this.unlisten("click",this.handleInteraction_),this.unlisten("keydown",this.handleInteraction_),this.unlisten(f.OPENING_EVENT,this.handleOpening_),this.unlisten(f.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach(function(t){return t.destroy()}),t.prototype.destroy.call(this)},n.prototype.layout=function(){this.foundation_.layout()},n.prototype.open=function(){this.foundation_.open()},n.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new r({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},addBodyClass:function(t){return document.body.classList.add(t)},removeBodyClass:function(t){return document.body.classList.remove(t)},eventTargetMatches:function(t,e){return d(t,e)},trapFocus:function(){return t.focusTrap_.activate()},releaseFocus:function(){return t.focusTrap_.deactivate()},isContentScrollable:function(){return!!t.content_&&(e=t.content_).scrollHeight>e.offsetHeight;var e},areButtonsStacked:function(){return e=t.buttons_,n=new Set,[].forEach.call(e,function(t){return n.add(t.offsetTop)}),n.size>1;var e,n},getActionFromEvent:function(t){var e=function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(d(n,e))return n;n=n.parentElement}return null}(t.target,"["+f.ACTION_ATTRIBUTE+"]");return e&&e.getAttribute(f.ACTION_ATTRIBUTE)},clickDefaultButton:function(){t.defaultButton_&&t.defaultButton_.click()},reverseButtons:function(){t.buttons_.reverse(),t.buttons_.forEach(function(t){return t.parentElement.appendChild(t)})},notifyOpening:function(){return t.emit(f.OPENING_EVENT,{})},notifyOpened:function(){return t.emit(f.OPENED_EVENT,{})},notifyClosing:function(e){return t.emit(f.CLOSING_EVENT,e?{action:e}:{})},notifyClosed:function(e){return t.emit(f.CLOSED_EVENT,e?{action:e}:{})}})},n}(e.MDCComponent),_=function(){function t(){this.open=!1,this.code=""}return t.prototype.debounce=function(t,e){var n;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout(function(){e.apply(void 0,o),n=null},t)}},t.prototype.contentChanged=function(t){console.log("debounceing"),this.codeEditorChanged.emit(t.code)},t.prototype.openDialog=function(){this.open||(this.modalEl.open(),this.open=!0)},t.prototype.closeDialog=function(){this.open&&(this.modalEl.close(),this.open=!1)},t.prototype.componentDidLoad=function(){var t=this,e=this.el.shadowRoot.querySelector(".mdc-dialog");this.modalEl=new p(e),this.modalEl.listen("MDCDialog:opened",function(){t.open=!0}),this.modalEl.listen("MDCDialog:closing",function(){t.open=!1})},t.prototype.componentDidUnload=function(){this.modalEl.destroy()},t.prototype.render=function(){return n("div",{class:"mdc-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"my-dialog-title","aria-describedby":"my-dialog-content"},n("div",{class:"mdc-dialog__container"},n("div",{class:"mdc-dialog__surface"},n("h2",{class:"mdc-dialog__title",id:"my-dialog-title"},"Code Editor"),n("div",{class:"mdc-dialog__content",id:"my-dialog-content"},"Hola ",n("div",{id:"id-modal"})),n("footer",{class:"mdc-dialog__actions"},n("button",{type:"button",class:"mdc-button mdc-dialog__button","data-mdc-dialog-action":"close"},"close")))),n("div",{class:"mdc-dialog__scrim"}))},Object.defineProperty(t,"is",{get:function(){return"o-demo-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{closeDialog:{method:!0},code:{type:"Any",attr:"code"},el:{elementRef:!0},open:{type:Boolean,attr:"open",reflectToAttr:!0,mutable:!0},openDialog:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"code-editor-changed",method:"codeEditorChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".mdc-dialog.sc-o-demo-modal, .mdc-dialog__scrim.sc-o-demo-modal{position:fixed;top:0;left:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}.mdc-dialog.sc-o-demo-modal{display:none;z-index:7}.mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-dialog.sc-o-demo-modal   .mdc-dialog__scrim.sc-o-demo-modal{background-color:rgba(0,0,0,.32)}.mdc-dialog.sc-o-demo-modal   .mdc-dialog__title.sc-o-demo-modal{color:rgba(0,0,0,.87)}.mdc-dialog.sc-o-demo-modal   .mdc-dialog__content.sc-o-demo-modal{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable.sc-o-demo-modal   .mdc-dialog__actions.sc-o-demo-modal, .mdc-dialog.mdc-dialog--scrollable.sc-o-demo-modal   .mdc-dialog__title.sc-o-demo-modal{border-color:rgba(0,0,0,.12)}.mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{min-width:280px}\@media (max-width:592px){.mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{max-width:calc(100vw - 32px)}}\@media (min-width:592px){.mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{max-width:560px}}.mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{max-height:calc(100vh - 32px);border-radius:4px}.mdc-dialog__scrim.sc-o-demo-modal{opacity:0;z-index:-1}.mdc-dialog__container.sc-o-demo-modal{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-transform:scale(.8);transform:scale(.8);opacity:0}.mdc-dialog__container.sc-o-demo-modal, .mdc-dialog__surface.sc-o-demo-modal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-sizing:border-box;box-sizing:border-box}.mdc-dialog__surface.sc-o-demo-modal{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;max-width:100%;max-height:100%}.mdc-dialog[dir=rtl].sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal, [dir=rtl].sc-o-demo-modal   .mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{text-align:right}.mdc-dialog__title.sc-o-demo-modal{margin-top:0;line-height:normal;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title.sc-o-demo-modal:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-dialog[dir=rtl].sc-o-demo-modal   .mdc-dialog__title.sc-o-demo-modal, [dir=rtl].sc-o-demo-modal   .mdc-dialog.sc-o-demo-modal   .mdc-dialog__title.sc-o-demo-modal{text-align:right}.mdc-dialog--scrollable.sc-o-demo-modal   .mdc-dialog__title.sc-o-demo-modal{padding-bottom:15px}.mdc-dialog__content.sc-o-demo-modal{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content.sc-o-demo-modal > .sc-o-demo-modal:first-child{margin-top:0}.mdc-dialog__content.sc-o-demo-modal > .sc-o-demo-modal:last-child{margin-bottom:0}.mdc-dialog__title.sc-o-demo-modal + .mdc-dialog__content.sc-o-demo-modal{padding-top:0}.mdc-dialog--scrollable.sc-o-demo-modal   .mdc-dialog__content.sc-o-demo-modal{padding-top:8px;padding-bottom:8px}.mdc-dialog__content.sc-o-demo-modal   .mdc-list.sc-o-demo-modal:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable.sc-o-demo-modal   .mdc-dialog__content.sc-o-demo-modal   .mdc-list.sc-o-demo-modal:first-child:last-child{padding:0}.mdc-dialog__actions.sc-o-demo-modal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked.sc-o-demo-modal   .mdc-dialog__actions.sc-o-demo-modal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.mdc-dialog__button.sc-o-demo-modal{margin-left:8px;margin-right:0;max-width:100%;text-align:right}.mdc-dialog__button[dir=rtl].sc-o-demo-modal, [dir=rtl].sc-o-demo-modal   .mdc-dialog__button.sc-o-demo-modal{margin-left:0;margin-right:8px}.mdc-dialog__button.sc-o-demo-modal:first-child, .mdc-dialog__button.sc-o-demo-modal:first-child[dir=rtl], [dir=rtl].sc-o-demo-modal   .mdc-dialog__button.sc-o-demo-modal:first-child{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl].sc-o-demo-modal   .mdc-dialog__button.sc-o-demo-modal, [dir=rtl].sc-o-demo-modal   .mdc-dialog.sc-o-demo-modal   .mdc-dialog__button.sc-o-demo-modal{text-align:left}.mdc-dialog--stacked.sc-o-demo-modal   .mdc-dialog__button.sc-o-demo-modal:not(:first-child){margin-top:12px}.mdc-dialog--closing.sc-o-demo-modal, .mdc-dialog--open.sc-o-demo-modal, .mdc-dialog--opening.sc-o-demo-modal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.mdc-dialog--opening.sc-o-demo-modal   .mdc-dialog__scrim.sc-o-demo-modal{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-dialog--opening.sc-o-demo-modal   .mdc-dialog__container.sc-o-demo-modal{-webkit-transition:opacity 75ms linear,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity 75ms linear,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity 75ms linear,transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity 75ms linear,transform .15s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-dialog--closing.sc-o-demo-modal   .mdc-dialog__container.sc-o-demo-modal, .mdc-dialog--closing.sc-o-demo-modal   .mdc-dialog__scrim.sc-o-demo-modal{-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear}.mdc-dialog--closing.sc-o-demo-modal   .mdc-dialog__container.sc-o-demo-modal{-webkit-transform:scale(1);transform:scale(1)}.mdc-dialog--open.sc-o-demo-modal   .mdc-dialog__scrim.sc-o-demo-modal{opacity:1}.mdc-dialog--open.sc-o-demo-modal   .mdc-dialog__container.sc-o-demo-modal{-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-dialog-scroll-lock.sc-o-demo-modal{overflow:hidden}.sc-o-demo-modal-h   .mdc-dialog.sc-o-demo-modal   .mdc-dialog__surface.sc-o-demo-modal{min-width:1024px}"},enumerable:!0,configurable:!0}),t}();t.ODemoModal=_,Object.defineProperty(t,"__esModule",{value:!0})});