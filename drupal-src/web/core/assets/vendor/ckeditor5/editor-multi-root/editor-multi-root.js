/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={782:(t,e,o)=>{t.exports=o(237)("./src/core.js")},783:(t,e,o)=>{t.exports=o(237)("./src/engine.js")},311:(t,e,o)=>{t.exports=o(237)("./src/ui.js")},584:(t,e,o)=>{t.exports=o(237)("./src/utils.js")},237:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,o),r.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{"use strict";o.r(i),o.d(i,{MultiRootEditor:()=>D});var t=o(782),e=o(584),s=o(311),r=o(783);class n extends s.EditorUI{constructor(t,e){super(t),this.view=e,this._lastFocusedEditableElement=null}init(){this.view.render(),this.focusTracker.on("change:focusedElement",((t,e,o)=>{for(const t of Object.values(this.view.editables))o===t.element&&(this._lastFocusedEditableElement=t.element)})),this.focusTracker.on("change:isFocused",((t,e,o)=>{o||(this._lastFocusedEditableElement=null)}));for(const t of Object.values(this.view.editables))this.addEditable(t);this._initToolbar(),this._initMenuBar(this.view.menuBarView),this.fire("ready")}addEditable(t,e){const o=t.element;this.editor.editing.view.attachDomRoot(o,t.name),this.setEditableElement(t.name,o),t.bind("isFocused").to(this.focusTracker,"isFocused",this.focusTracker,"focusedElement",((t,e)=>!!t&&(e===o||this._lastFocusedEditableElement===o))),this._initPlaceholder(t,e)}removeEditable(t){this.editor.editing.view.detachDomRoot(t.name),t.unbind("isFocused"),this.removeEditableElement(t.name)}destroy(){super.destroy();for(const t of Object.values(this.view.editables))this.removeEditable(t);this.view.destroy()}_initToolbar(){const t=this.editor,e=this.view;e.toolbar.fillFromConfig(t.config.get("toolbar"),this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(t,e){if(!e){const o=this.editor.config.get("placeholder");o&&(e="string"==typeof o?o:o[t.name])}const o=this.editor.editing.view,i=o.document.getRoot(t.name);e&&(i.placeholder=e),(0,r.enablePlaceholder)({view:o,element:i,isDirectHost:!1,keepOnFocus:!0})}}class a extends s.EditorUIView{constructor(t,e,o,i={}){super(t),this._editingView=e,this.toolbar=new s.ToolbarView(t,{shouldGroupWhenFull:i.shouldToolbarGroupWhenFull}),this.menuBarView=new s.MenuBarView(t),this.editables={};for(const t of o){const e=i.editableElements?i.editableElements[t]:void 0;let{label:o}=i;"object"==typeof o&&(o=o[t]),this.createEditable(t,e,o)}this.editable=Object.values(this.editables)[0],this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:t.uiLanguageDirection}}),this.menuBarView.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:t.uiLanguageDirection}})}createEditable(t,e,o){const i=new s.InlineEditableUIView(this.locale,this._editingView,e,{label:o});return this.editables[t]=i,i.name=t,this.isRendered&&this.registerChild(i),i}removeEditable(t){const e=this.editables[t];this.isRendered&&this.deregisterChild(e),delete this.editables[t],e.destroy()}render(){super.render(),this.registerChild(Object.values(this.editables)),this.registerChild(this.toolbar),this.registerChild(this.menuBarView)}}const d=function(t){return null!=t&&"object"==typeof t};const l="object"==typeof global&&global&&global.Object===Object&&global;var c="object"==typeof self&&self&&self.Object===Object&&self;const h=(l||c||Function("return this")()).Symbol;var u=Object.prototype,f=u.hasOwnProperty,b=u.toString,m=h?h.toStringTag:void 0;const g=function(t){var e=f.call(t,m),o=t[m];try{t[m]=void 0;var i=!0}catch(t){}var s=b.call(t);return i&&(e?t[m]=o:delete t[m]),s};var y=Object.prototype.toString;const R=function(t){return y.call(t)};var v=h?h.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?g(t):R(t)};const w=function(t,e){return function(o){return t(e(o))}}(Object.getPrototypeOf,Object);var p=Function.prototype,O=Object.prototype,j=p.toString,_=O.hasOwnProperty,k=j.call(Object);const A=function(t){if(!d(t)||"[object Object]"!=E(t))return!1;var e=w(t);if(null===e)return!0;var o=_.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&j.call(o)==k};const C=function(t){return d(t)&&1===t.nodeType&&!A(t)};class D extends t.Editor{constructor(o,i={}){const s=Object.keys(o),r=0===s.length||"string"==typeof o[s[0]];if(r&&void 0!==i.initialData&&Object.keys(i.initialData).length>0)throw new e.CKEditorError("editor-create-initial-data",null);if(super(i),this._registeredRootsAttributesKeys=new Set,this._readOnlyRootLocks=new Map,this.sourceElements=r?{}:o,void 0===this.config.get("initialData")){const t={};for(const i of s)t[i]=T(d=o[i])?(0,e.getDataFromElement)(d):d;this.config.set("initialData",t)}var d;if(!r)for(const e of s)(0,t.secureSourceElement)(this,o[e]);this.editing.view.document.roots.on("add",((t,e)=>{e.unbind("isReadOnly"),e.bind("isReadOnly").to(this.editing.view.document,"isReadOnly",(t=>t||this._readOnlyRootLocks.has(e.rootName))),e.on("change:isReadOnly",((t,o,i)=>{const s=this.editing.view.createRangeIn(e);for(const t of s.getItems())t.is("editableElement")&&(t.unbind("isReadOnly"),t.isReadOnly=i)}))}));for(const t of s)this.model.document.createRoot("$root",t);if(this.config.get("lazyRoots"))for(const t of this.config.get("lazyRoots")){this.model.document.createRoot("$root",t)._isLoaded=!1}if(this.config.get("rootsAttributes")){const t=this.config.get("rootsAttributes");for(const[o,i]of Object.entries(t)){if(!this.model.document.getRoot(o))throw new e.CKEditorError("multi-root-editor-root-attributes-no-root",null);for(const t of Object.keys(i))this.registerRootAttribute(t)}this.data.on("init",(()=>{this.model.enqueueChange({isUndoable:!1},(e=>{for(const[o,i]of Object.entries(t)){const t=this.model.document.getRoot(o);for(const[o,s]of Object.entries(i))null!==s&&e.setAttribute(o,s,t)}}))}))}const l={shouldToolbarGroupWhenFull:!this.config.get("toolbar.shouldNotGroupWhenFull"),editableElements:r?void 0:o,label:this.config.get("label")},c=new a(this.locale,this.editing.view,s,l);this.ui=new n(this,c),this.model.document.on("change:data",(()=>{const t=this.model.document.differ.getChangedRoots();for(const e of t){const t=this.model.document.getRoot(e.name);"detached"==e.state&&this.fire("detachRoot",t)}for(const e of t){const t=this.model.document.getRoot(e.name);"attached"==e.state&&this.fire("addRoot",t)}})),this.listenTo(this.model,"canEditAt",((t,[e])=>{if(!e)return;let o=!1;for(const t of e.getRanges()){const e=t.root;if(this._readOnlyRootLocks.has(e.rootName)){o=!0;break}}o&&(t.return=!1,t.stop())}),{priority:"high"}),this.decorate("loadRoot"),this.on("loadRoot",((t,[o])=>{const i=this.model.document.getRoot(o);if(!i)throw new e.CKEditorError("multi-root-editor-load-root-no-root",this,{rootName:o});i._isLoaded&&((0,e.logWarning)("multi-root-editor-load-root-already-loaded"),t.stop())}),{priority:"highest"})}destroy(){const t=this.config.get("updateSourceElementOnDestroy"),o={};for(const e of Object.keys(this.sourceElements))o[e]=t?this.getData({rootName:e}):"";return this.ui.destroy(),super.destroy().then((()=>{for(const t of Object.keys(this.sourceElements))(0,e.setDataInElement)(this.sourceElements[t],o[t])}))}addRoot(t,{data:e="",attributes:o={},elementName:i="$root",isUndoable:s=!1}={}){const r=s=>{const r=s.addRoot(t,i);e&&s.insert(this.data.parse(e,r),r,0);for(const t of Object.keys(o))this.registerRootAttribute(t),s.setAttribute(t,o[t],r)};s?this.model.change(r):this.model.enqueueChange({isUndoable:!1},r)}detachRoot(t,e=!1){e?this.model.change((e=>e.detachRoot(t))):this.model.enqueueChange({isUndoable:!1},(e=>e.detachRoot(t)))}createEditable(t,e,o){const i=this.ui.view.createEditable(t.rootName,void 0,o);return this.ui.addEditable(i,e),this.editing.view.forceRender(),i.element}detachEditable(t){const e=t.rootName,o=this.ui.view.editables[e];return this.ui.removeEditable(o),this.ui.view.removeEditable(e),o.element}loadRoot(t,{data:e="",attributes:o={}}={}){const i=this.model.document.getRoot(t);this.model.enqueueChange({isUndoable:!1},(t=>{e&&t.insert(this.data.parse(e,i),i,0);for(const e of Object.keys(o))this.registerRootAttribute(e),t.setAttribute(e,o[e],i);i._isLoaded=!0,this.model.document.differ._bufferRootLoad(i)}))}getFullData(t){const e={};for(const o of this.model.document.getRootNames())e[o]=this.data.get({...t,rootName:o});return e}getRootsAttributes(){const t={};for(const e of this.model.document.getRootNames())t[e]=this.getRootAttributes(e);return t}getRootAttributes(t){const e={},o=this.model.document.getRoot(t);for(const t of this._registeredRootsAttributesKeys)e[t]=o.hasAttribute(t)?o.getAttribute(t):null;return e}registerRootAttribute(t){this._registeredRootsAttributesKeys.has(t)||(this._registeredRootsAttributesKeys.add(t),this.editing.model.schema.extend("$root",{allowAttributes:t}))}disableRoot(t,o){if("$graveyard"==t)throw new e.CKEditorError("multi-root-editor-cannot-disable-graveyard-root",this);const i=this._readOnlyRootLocks.get(t);if(i)i.add(o);else{this._readOnlyRootLocks.set(t,new Set([o]));this.editing.view.document.getRoot(t).isReadOnly=!0,Array.from(this.commands.commands()).forEach((t=>t.affectsData&&t.refresh()))}}enableRoot(t,e){const o=this._readOnlyRootLocks.get(t);if(o&&o.has(e))if(1===o.size){this._readOnlyRootLocks.delete(t);this.editing.view.document.getRoot(t).isReadOnly=this.isReadOnly,Array.from(this.commands.commands()).forEach((t=>t.affectsData&&t.refresh()))}else o.delete(e)}static create(t,o={}){return new Promise((i=>{for(const o of Object.values(t))if(T(o)&&"TEXTAREA"===o.tagName)throw new e.CKEditorError("editor-wrong-element",null);const s=new this(t,o);i(s.initPlugins().then((()=>s.ui.init())).then((()=>(s._verifyRootsWithInitialData(),s.data.init(s.config.get("initialData"))))).then((()=>s.fire("ready"))).then((()=>s)))}))}_verifyRootsWithInitialData(){const t=this.config.get("initialData");for(const o of this.model.document.getRootNames())if(!(o in t))throw new e.CKEditorError("multi-root-editor-root-initial-data-mismatch",null);for(const o of Object.keys(t)){const t=this.model.document.getRoot(o);if(!t||!t.isAttached())throw new e.CKEditorError("multi-root-editor-root-initial-data-mismatch",null)}}}function T(t){return C(t)}})(),(window.CKEditor5=window.CKEditor5||{}).editorMultiRoot=i})();