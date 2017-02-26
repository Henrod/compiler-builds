var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _toArray(arr){return Array.isArray(arr)?arr:Array.from(arr);}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * @license Angular v4.0.0-rc.1-213e210
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */import{InjectionToken,Version,Inject,Optional,ɵConsole,ɵreflector,ViewEncapsulation,ChangeDetectionStrategy,isDevMode,ANALYZE_FOR_ENTRY_COMPONENTS,ɵViewUtils,ɵAppView,ɵDebugAppView,ɵViewContainer,ElementRef,ViewContainerRef,ChangeDetectorRef,RenderComponentType,QueryList,TemplateRef,ɵTemplateRef_,ɵCodegenComponentFactoryResolver,ComponentFactoryResolver,ComponentFactory,ɵComponentRef_,ComponentRef,NgModuleFactory,ɵNgModuleInjector,ɵregisterModuleFactory,ɵValueUnwrapper,Injector,ɵViewType,ɵStaticNodeDebugInfo,ɵDebugContext,Renderer,SimpleChange,ɵChangeDetectorStatus,ɵcheckBinding,ɵcheckBindingChange,ɵcheckRenderText,ɵcheckRenderProperty,ɵcheckRenderAttribute,ɵcheckRenderClass,ɵcheckRenderStyle,ɵdevModeEqual,ɵinlineInterpolate,ɵinterpolate,ɵcastByValue,ɵEMPTY_ARRAY,ɵEMPTY_MAP,ɵcreateRenderElement,ɵselectOrCreateRenderHostElement,ɵpureProxy10,ɵpureProxy9,ɵpureProxy8,ɵpureProxy7,ɵpureProxy6,ɵpureProxy5,ɵpureProxy4,ɵpureProxy3,ɵpureProxy2,ɵpureProxy1,SecurityContext,ɵAnimationKeyframe,ɵAnimationStyles,ɵNoOpAnimationPlayer,ɵAnimationGroupPlayer,ɵAnimationSequencePlayer,ɵprepareFinalAnimationStyles,ɵbalanceAnimationKeyframes,ɵclearStyles,ɵrenderStyles,ɵcollectAndResolveStyles,LOCALE_ID,TRANSLATIONS_FORMAT,ɵsetBindingDebugInfo,ɵsetBindingDebugInfoForChanges,ɵAnimationTransition,ɵInlineArray16,ɵInlineArray8,ɵInlineArray4,ɵInlineArray2,ɵEMPTY_INLINE_ARRAY,ɵInlineArrayDynamic,ɵsubscribeToRenderElement,ɵcreateRenderComponentType,ɵnoop,ɵviewDef,ɵelementDef,ɵanchorDef,ɵtextDef,ɵdirectiveDef,ɵproviderDef,ɵqueryDef,ɵpureArrayDef,ɵpureObjectDef,ɵpurePipeDef,ɵpipeDef,ɵnodeValue,ɵngContentDef,ɵunwrapValue,ɵcreateRendererTypeV2,ɵcreateComponentFactory,MissingTranslationStrategy,ɵANY_STATE,ɵFILL_STYLE_FLAG,PACKAGE_ROOT_URL,Directive,Component,Query,HostListener,HostBinding,Output,Input,resolveForwardRef,ɵReflectorReader,ɵLifecycleHooks,ɵEMPTY_STATE,Attribute,SkipSelf,Self,Host,ɵLIFECYCLE_HOOKS_VALUES,Injectable,Type,ɵERROR_COMPONENT_TYPE,NgModule,Pipe,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,ɵisDefaultChangeDetectionStrategy,ɵelementEventFullName,ɵNodeFlags,ɵQueryValueType,ɵQueryBindingType,ɵViewFlags,ɵProviderType,ɵDepFlags,ɵBindingType,ɵArgumentType,ɵDEFAULT_STATE,ɵReflectionCapabilities,group,sequence,keyframes,animate,style,transition,state,trigger,ViewChildren,ViewChild,ContentChildren,ContentChild,ɵgetComponentFactoryViewClass,Compiler,ModuleWithComponentFactories,TRANSLATIONS,ɵReflector,ReflectiveInjector,COMPILER_OPTIONS,PLATFORM_INITIALIZER,CompilerFactory,platformCore,createPlatformFactory}from'@angular/core';/**
 * @stable
 */var/** @type {?} */VERSION=new Version('4.0.0-rc.1-213e210');/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * A segment of text within the template.
 */var TextAst=function(){/**
     * @param {?} value
     * @param {?} ngContentIndex
     * @param {?} sourceSpan
     */function TextAst(value,ngContentIndex,sourceSpan){_classCallCheck(this,TextAst);this.value=value;this.ngContentIndex=ngContentIndex;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(TextAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitText(this,context);}}]);return TextAst;}();/**
 * A bound expression within the text of a template.
 */var BoundTextAst=function(){/**
     * @param {?} value
     * @param {?} ngContentIndex
     * @param {?} sourceSpan
     */function BoundTextAst(value,ngContentIndex,sourceSpan){_classCallCheck(this,BoundTextAst);this.value=value;this.ngContentIndex=ngContentIndex;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(BoundTextAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitBoundText(this,context);}}]);return BoundTextAst;}();/**
 * A plain attribute on an element.
 */var AttrAst=function(){/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     */function AttrAst(name,value,sourceSpan){_classCallCheck(this,AttrAst);this.name=name;this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AttrAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAttr(this,context);}}]);return AttrAst;}();/**
 * A binding for an element property (e.g. `[property]="expression"`) or an animation trigger (e.g.
 * `[\@trigger]="stateExp"`)
 */var BoundElementPropertyAst=function(){/**
     * @param {?} name
     * @param {?} type
     * @param {?} securityContext
     * @param {?} needsRuntimeSecurityContext
     * @param {?} value
     * @param {?} unit
     * @param {?} sourceSpan
     */function BoundElementPropertyAst(name,type,securityContext,needsRuntimeSecurityContext,value,unit,sourceSpan){_classCallCheck(this,BoundElementPropertyAst);this.name=name;this.type=type;this.securityContext=securityContext;this.needsRuntimeSecurityContext=needsRuntimeSecurityContext;this.value=value;this.unit=unit;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(BoundElementPropertyAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitElementProperty(this,context);}/**
     * @return {?}
     */},{key:'isAnimation',get:function get(){return this.type===PropertyBindingType.Animation;}}]);return BoundElementPropertyAst;}();/**
 * A binding for an element event (e.g. `(event)="handler()"`) or an animation trigger event (e.g.
 * `(\@trigger.phase)="callback($event)"`).
 */var BoundEventAst=function(){/**
     * @param {?} name
     * @param {?} target
     * @param {?} phase
     * @param {?} handler
     * @param {?} sourceSpan
     */function BoundEventAst(name,target,phase,handler,sourceSpan){_classCallCheck(this,BoundEventAst);this.name=name;this.target=target;this.phase=phase;this.handler=handler;this.sourceSpan=sourceSpan;}/**
     * @param {?} name
     * @param {?} target
     * @param {?} phase
     * @return {?}
     */_createClass(BoundEventAst,[{key:'visit',/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */value:function visit(visitor,context){return visitor.visitEvent(this,context);}/**
     * @return {?}
     */},{key:'fullName',get:function get(){return BoundEventAst.calcFullName(this.name,this.target,this.phase);}/**
     * @return {?}
     */},{key:'isAnimation',get:function get(){return!!this.phase;}}],[{key:'calcFullName',value:function calcFullName(name,target,phase){if(target){return target+':'+name;}else if(phase){return'@'+name+'.'+phase;}else{return name;}}}]);return BoundEventAst;}();/**
 * A reference declaration on an element (e.g. `let someName="expression"`).
 */var ReferenceAst=function(){/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     */function ReferenceAst(name,value,sourceSpan){_classCallCheck(this,ReferenceAst);this.name=name;this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ReferenceAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitReference(this,context);}}]);return ReferenceAst;}();/**
 * A variable declaration on a <ng-template> (e.g. `var-someName="someLocalName"`).
 */var VariableAst=function(){/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     */function VariableAst(name,value,sourceSpan){_classCallCheck(this,VariableAst);this.name=name;this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(VariableAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitVariable(this,context);}}]);return VariableAst;}();/**
 * An element declaration in a template.
 */var ElementAst=function(){/**
     * @param {?} name
     * @param {?} attrs
     * @param {?} inputs
     * @param {?} outputs
     * @param {?} references
     * @param {?} directives
     * @param {?} providers
     * @param {?} hasViewContainer
     * @param {?} queryMatches
     * @param {?} children
     * @param {?} ngContentIndex
     * @param {?} sourceSpan
     * @param {?} endSourceSpan
     */function ElementAst(name,attrs,inputs,outputs,references,directives,providers,hasViewContainer,queryMatches,children,ngContentIndex,sourceSpan,endSourceSpan){_classCallCheck(this,ElementAst);this.name=name;this.attrs=attrs;this.inputs=inputs;this.outputs=outputs;this.references=references;this.directives=directives;this.providers=providers;this.hasViewContainer=hasViewContainer;this.queryMatches=queryMatches;this.children=children;this.ngContentIndex=ngContentIndex;this.sourceSpan=sourceSpan;this.endSourceSpan=endSourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ElementAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitElement(this,context);}}]);return ElementAst;}();/**
 * A `<ng-template>` element included in an Angular template.
 */var EmbeddedTemplateAst=function(){/**
     * @param {?} attrs
     * @param {?} outputs
     * @param {?} references
     * @param {?} variables
     * @param {?} directives
     * @param {?} providers
     * @param {?} hasViewContainer
     * @param {?} queryMatches
     * @param {?} children
     * @param {?} ngContentIndex
     * @param {?} sourceSpan
     */function EmbeddedTemplateAst(attrs,outputs,references,variables,directives,providers,hasViewContainer,queryMatches,children,ngContentIndex,sourceSpan){_classCallCheck(this,EmbeddedTemplateAst);this.attrs=attrs;this.outputs=outputs;this.references=references;this.variables=variables;this.directives=directives;this.providers=providers;this.hasViewContainer=hasViewContainer;this.queryMatches=queryMatches;this.children=children;this.ngContentIndex=ngContentIndex;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(EmbeddedTemplateAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitEmbeddedTemplate(this,context);}}]);return EmbeddedTemplateAst;}();/**
 * A directive property with a bound value (e.g. `*ngIf="condition").
 */var BoundDirectivePropertyAst=function(){/**
     * @param {?} directiveName
     * @param {?} templateName
     * @param {?} value
     * @param {?} sourceSpan
     */function BoundDirectivePropertyAst(directiveName,templateName,value,sourceSpan){_classCallCheck(this,BoundDirectivePropertyAst);this.directiveName=directiveName;this.templateName=templateName;this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(BoundDirectivePropertyAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitDirectiveProperty(this,context);}}]);return BoundDirectivePropertyAst;}();/**
 * A directive declared on an element.
 */var DirectiveAst=function(){/**
     * @param {?} directive
     * @param {?} inputs
     * @param {?} hostProperties
     * @param {?} hostEvents
     * @param {?} contentQueryStartId
     * @param {?} sourceSpan
     */function DirectiveAst(directive,inputs,hostProperties,hostEvents,contentQueryStartId,sourceSpan){_classCallCheck(this,DirectiveAst);this.directive=directive;this.inputs=inputs;this.hostProperties=hostProperties;this.hostEvents=hostEvents;this.contentQueryStartId=contentQueryStartId;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(DirectiveAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitDirective(this,context);}}]);return DirectiveAst;}();/**
 * A provider declared on an element
 */var ProviderAst=function(){/**
     * @param {?} token
     * @param {?} multiProvider
     * @param {?} eager
     * @param {?} providers
     * @param {?} providerType
     * @param {?} lifecycleHooks
     * @param {?} sourceSpan
     */function ProviderAst(token,multiProvider,eager,providers,providerType,lifecycleHooks,sourceSpan){_classCallCheck(this,ProviderAst);this.token=token;this.multiProvider=multiProvider;this.eager=eager;this.providers=providers;this.providerType=providerType;this.lifecycleHooks=lifecycleHooks;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ProviderAst,[{key:'visit',value:function visit(visitor,context){// No visit method in the visitor for now...
return null;}}]);return ProviderAst;}();var ProviderAstType={};ProviderAstType.PublicService=0;ProviderAstType.PrivateService=1;ProviderAstType.Component=2;ProviderAstType.Directive=3;ProviderAstType.Builtin=4;ProviderAstType[ProviderAstType.PublicService]="PublicService";ProviderAstType[ProviderAstType.PrivateService]="PrivateService";ProviderAstType[ProviderAstType.Component]="Component";ProviderAstType[ProviderAstType.Directive]="Directive";ProviderAstType[ProviderAstType.Builtin]="Builtin";/**
 * Position where content is to be projected (instance of `<ng-content>` in a template).
 */var NgContentAst=function(){/**
     * @param {?} index
     * @param {?} ngContentIndex
     * @param {?} sourceSpan
     */function NgContentAst(index,ngContentIndex,sourceSpan){_classCallCheck(this,NgContentAst);this.index=index;this.ngContentIndex=ngContentIndex;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(NgContentAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitNgContent(this,context);}}]);return NgContentAst;}();var PropertyBindingType={};PropertyBindingType.Property=0;PropertyBindingType.Attribute=1;PropertyBindingType.Class=2;PropertyBindingType.Style=3;PropertyBindingType.Animation=4;PropertyBindingType[PropertyBindingType.Property]="Property";PropertyBindingType[PropertyBindingType.Attribute]="Attribute";PropertyBindingType[PropertyBindingType.Class]="Class";PropertyBindingType[PropertyBindingType.Style]="Style";PropertyBindingType[PropertyBindingType.Animation]="Animation";/**
 * Visit every node in a list of {\@link TemplateAst}s with the given {\@link TemplateAstVisitor}.
 * @param {?} visitor
 * @param {?} asts
 * @param {?=} context
 * @return {?}
 */function templateVisitAll(visitor,asts){var context=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var/** @type {?} */result=[];var/** @type {?} */visit=visitor.visit?function(ast){return visitor.visit(ast,context)||ast.visit(visitor,context);}:function(ast){return ast.visit(visitor,context);};asts.forEach(function(ast){var/** @type {?} */astResult=visit(ast);if(astResult){result.push(astResult);}});return result;}/**
 * A token representing the a reference to a static type.
 *
 * This token is unique for a filePath and name and can be used as a hash table key.
 */var StaticSymbol=function(){/**
     * @param {?} filePath
     * @param {?} name
     * @param {?} members
     */function StaticSymbol(filePath,name,members){_classCallCheck(this,StaticSymbol);this.filePath=filePath;this.name=name;this.members=members;}/**
     * @return {?}
     */_createClass(StaticSymbol,[{key:'assertNoMembers',value:function assertNoMembers(){if(this.members.length){throw new Error('Illegal state: symbol without members expected, but got '+JSON.stringify(this)+'.');}}}]);return StaticSymbol;}();/**
 * A cache of static symbol used by the StaticReflector to return the same symbol for the
 * same symbol values.
 */var StaticSymbolCache=function(){function StaticSymbolCache(){_classCallCheck(this,StaticSymbolCache);this.cache=new Map();}/**
     * @param {?} declarationFile
     * @param {?} name
     * @param {?=} members
     * @return {?}
     */_createClass(StaticSymbolCache,[{key:'get',value:function get(declarationFile,name,members){members=members||[];var/** @type {?} */memberSuffix=members.length?'.'+members.join('.'):'';var/** @type {?} */key='"'+declarationFile+'".'+name+memberSuffix;var/** @type {?} */result=this.cache.get(key);if(!result){result=new StaticSymbol(declarationFile,name,members);this.cache.set(key,result);}return result;}}]);return StaticSymbolCache;}();/**
 * @param {?} obj
 * @return {?}
 */function isPresent(obj){return obj!=null;}/**
 * @param {?} obj
 * @return {?}
 */function isBlank(obj){return obj==null;}var/** @type {?} */STRING_MAP_PROTO=Object.getPrototypeOf({});/**
 * @param {?} obj
 * @return {?}
 */function isStrictStringMap(obj){return(typeof obj==='undefined'?'undefined':_typeof(obj))==='object'&&obj!==null&&Object.getPrototypeOf(obj)===STRING_MAP_PROTO;}/**
 * @param {?} token
 * @return {?}
 */function stringify(token){if(typeof token==='string'){return token;}if(token==null){return''+token;}if(token.overriddenName){return''+token.overriddenName;}if(token.name){return''+token.name;}var/** @type {?} */res=token.toString();var/** @type {?} */newLineIndex=res.indexOf('\n');return newLineIndex===-1?res:res.substring(0,newLineIndex);}var NumberWrapper=function(){function NumberWrapper(){_classCallCheck(this,NumberWrapper);}_createClass(NumberWrapper,null,[{key:'parseIntAutoRadix',/**
     * @param {?} text
     * @return {?}
     */value:function parseIntAutoRadix(text){var/** @type {?} */result=parseInt(text);if(isNaN(result)){throw new Error('Invalid integer literal when parsing '+text);}return result;}/**
     * @param {?} value
     * @return {?}
     */},{key:'isNumeric',value:function isNumeric(value){return!isNaN(value-parseFloat(value));}}]);return NumberWrapper;}();/**
 * @param {?} o
 * @return {?}
 */function isJsObject(o){return o!==null&&(typeof o==='function'||(typeof o==='undefined'?'undefined':_typeof(o))==='object');}/**
 * @param {?} obj
 * @return {?}
 */function isPrimitive(obj){return!isJsObject(obj);}/**
 * @param {?} s
 * @return {?}
 */function escapeRegExp(s){return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1');}/**
 * Wraps Javascript Objects
 */var StringMapWrapper=function(){function StringMapWrapper(){_classCallCheck(this,StringMapWrapper);}_createClass(StringMapWrapper,null,[{key:'merge',/**
     * @param {?} m1
     * @param {?} m2
     * @return {?}
     */value:function merge(m1,m2){var/** @type {?} */m={};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=Object.keys(m1)[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var k=_step.value;m[k]=m1[k];}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=Object.keys(m2)[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _k=_step2.value;m[_k]=m2[_k];}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return m;}/**
     * @param {?} m1
     * @param {?} m2
     * @return {?}
     */},{key:'equals',value:function equals(m1,m2){var/** @type {?} */k1=Object.keys(m1);var/** @type {?} */k2=Object.keys(m2);if(k1.length!=k2.length){return false;}for(var/** @type {?} */i=0;i<k1.length;i++){var/** @type {?} */key=k1[i];if(m1[key]!==m2[key]){return false;}}return true;}}]);return StringMapWrapper;}();var ListWrapper=function(){function ListWrapper(){_classCallCheck(this,ListWrapper);}_createClass(ListWrapper,null,[{key:'findLast',/**
     * @param {?} arr
     * @param {?} condition
     * @return {?}
     */value:function findLast(arr,condition){for(var/** @type {?} */i=arr.length-1;i>=0;i--){if(condition(arr[i])){return arr[i];}}return null;}/**
     * @param {?} list
     * @param {?} items
     * @return {?}
     */},{key:'removeAll',value:function removeAll(list,items){for(var/** @type {?} */i=0;i<items.length;++i){var/** @type {?} */index=list.indexOf(items[i]);if(index>-1){list.splice(index,1);}}}/**
     * @param {?} list
     * @param {?} el
     * @return {?}
     */},{key:'remove',value:function remove(list,el){var/** @type {?} */index=list.indexOf(el);if(index>-1){list.splice(index,1);return true;}return false;}/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */},{key:'equals',value:function equals(a,b){if(a.length!=b.length)return false;for(var/** @type {?} */i=0;i<a.length;++i){if(a[i]!==b[i])return false;}return true;}/**
     * @param {?} list
     * @return {?}
     */},{key:'flatten',value:function flatten(list){return list.reduce(function(flat,item){var/** @type {?} */flatItem=Array.isArray(item)?ListWrapper.flatten(item):item;return flat.concat(flatItem);},[]);}}]);return ListWrapper;}();var TagContentType={};TagContentType.RAW_TEXT=0;TagContentType.ESCAPABLE_RAW_TEXT=1;TagContentType.PARSABLE_DATA=2;TagContentType[TagContentType.RAW_TEXT]="RAW_TEXT";TagContentType[TagContentType.ESCAPABLE_RAW_TEXT]="ESCAPABLE_RAW_TEXT";TagContentType[TagContentType.PARSABLE_DATA]="PARSABLE_DATA";/**
 * @param {?} elementName
 * @return {?}
 */function splitNsName(elementName){if(elementName[0]!=':'){return[null,elementName];}var/** @type {?} */colonIndex=elementName.indexOf(':',1);if(colonIndex==-1){throw new Error('Unsupported format "'+elementName+'" expecting ":namespace:name"');}return[elementName.slice(1,colonIndex),elementName.slice(colonIndex+1)];}/**
 * @param {?} fullName
 * @return {?}
 */function getNsPrefix(fullName){return fullName===null?null:splitNsName(fullName)[0];}/**
 * @param {?} prefix
 * @param {?} localName
 * @return {?}
 */function mergeNsAndName(prefix,localName){return prefix?':'+prefix+':'+localName:localName;}// see http://www.w3.org/TR/html51/syntax.html#named-character-references
// see https://html.spec.whatwg.org/multipage/entities.json
// This list is not exhaustive to keep the compiler footprint low.
// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not exist.
var/** @type {?} */NAMED_ENTITIES={'Aacute':'\xC1','aacute':'\xE1','Acirc':'\xC2','acirc':'\xE2','acute':'\xB4','AElig':'\xC6','aelig':'\xE6','Agrave':'\xC0','agrave':'\xE0','alefsym':'\u2135','Alpha':'\u0391','alpha':'\u03B1','amp':'&','and':'\u2227','ang':'\u2220','apos':'\'','Aring':'\xC5','aring':'\xE5','asymp':'\u2248','Atilde':'\xC3','atilde':'\xE3','Auml':'\xC4','auml':'\xE4','bdquo':'\u201E','Beta':'\u0392','beta':'\u03B2','brvbar':'\xA6','bull':'\u2022','cap':'\u2229','Ccedil':'\xC7','ccedil':'\xE7','cedil':'\xB8','cent':'\xA2','Chi':'\u03A7','chi':'\u03C7','circ':'\u02C6','clubs':'\u2663','cong':'\u2245','copy':'\xA9','crarr':'\u21B5','cup':'\u222A','curren':'\xA4','dagger':'\u2020','Dagger':'\u2021','darr':'\u2193','dArr':'\u21D3','deg':'\xB0','Delta':'\u0394','delta':'\u03B4','diams':'\u2666','divide':'\xF7','Eacute':'\xC9','eacute':'\xE9','Ecirc':'\xCA','ecirc':'\xEA','Egrave':'\xC8','egrave':'\xE8','empty':'\u2205','emsp':'\u2003','ensp':'\u2002','Epsilon':'\u0395','epsilon':'\u03B5','equiv':'\u2261','Eta':'\u0397','eta':'\u03B7','ETH':'\xD0','eth':'\xF0','Euml':'\xCB','euml':'\xEB','euro':'\u20AC','exist':'\u2203','fnof':'\u0192','forall':'\u2200','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','frasl':'\u2044','Gamma':'\u0393','gamma':'\u03B3','ge':'\u2265','gt':'>','harr':'\u2194','hArr':'\u21D4','hearts':'\u2665','hellip':'\u2026','Iacute':'\xCD','iacute':'\xED','Icirc':'\xCE','icirc':'\xEE','iexcl':'\xA1','Igrave':'\xCC','igrave':'\xEC','image':'\u2111','infin':'\u221E','int':'\u222B','Iota':'\u0399','iota':'\u03B9','iquest':'\xBF','isin':'\u2208','Iuml':'\xCF','iuml':'\xEF','Kappa':'\u039A','kappa':'\u03BA','Lambda':'\u039B','lambda':'\u03BB','lang':'\u27E8','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','lceil':'\u2308','ldquo':'\u201C','le':'\u2264','lfloor':'\u230A','lowast':'\u2217','loz':'\u25CA','lrm':'\u200E','lsaquo':'\u2039','lsquo':'\u2018','lt':'<','macr':'\xAF','mdash':'\u2014','micro':'\xB5','middot':'\xB7','minus':'\u2212','Mu':'\u039C','mu':'\u03BC','nabla':'\u2207','nbsp':'\xA0','ndash':'\u2013','ne':'\u2260','ni':'\u220B','not':'\xAC','notin':'\u2209','nsub':'\u2284','Ntilde':'\xD1','ntilde':'\xF1','Nu':'\u039D','nu':'\u03BD','Oacute':'\xD3','oacute':'\xF3','Ocirc':'\xD4','ocirc':'\xF4','OElig':'\u0152','oelig':'\u0153','Ograve':'\xD2','ograve':'\xF2','oline':'\u203E','Omega':'\u03A9','omega':'\u03C9','Omicron':'\u039F','omicron':'\u03BF','oplus':'\u2295','or':'\u2228','ordf':'\xAA','ordm':'\xBA','Oslash':'\xD8','oslash':'\xF8','Otilde':'\xD5','otilde':'\xF5','otimes':'\u2297','Ouml':'\xD6','ouml':'\xF6','para':'\xB6','permil':'\u2030','perp':'\u22A5','Phi':'\u03A6','phi':'\u03C6','Pi':'\u03A0','pi':'\u03C0','piv':'\u03D6','plusmn':'\xB1','pound':'\xA3','prime':'\u2032','Prime':'\u2033','prod':'\u220F','prop':'\u221D','Psi':'\u03A8','psi':'\u03C8','quot':'"','radic':'\u221A','rang':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','rceil':'\u2309','rdquo':'\u201D','real':'\u211C','reg':'\xAE','rfloor':'\u230B','Rho':'\u03A1','rho':'\u03C1','rlm':'\u200F','rsaquo':'\u203A','rsquo':'\u2019','sbquo':'\u201A','Scaron':'\u0160','scaron':'\u0161','sdot':'\u22C5','sect':'\xA7','shy':'\xAD','Sigma':'\u03A3','sigma':'\u03C3','sigmaf':'\u03C2','sim':'\u223C','spades':'\u2660','sub':'\u2282','sube':'\u2286','sum':'\u2211','sup':'\u2283','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supe':'\u2287','szlig':'\xDF','Tau':'\u03A4','tau':'\u03C4','there4':'\u2234','Theta':'\u0398','theta':'\u03B8','thetasym':'\u03D1','thinsp':'\u2009','THORN':'\xDE','thorn':'\xFE','tilde':'\u02DC','times':'\xD7','trade':'\u2122','Uacute':'\xDA','uacute':'\xFA','uarr':'\u2191','uArr':'\u21D1','Ucirc':'\xDB','ucirc':'\xFB','Ugrave':'\xD9','ugrave':'\xF9','uml':'\xA8','upsih':'\u03D2','Upsilon':'\u03A5','upsilon':'\u03C5','Uuml':'\xDC','uuml':'\xFC','weierp':'\u2118','Xi':'\u039E','xi':'\u03BE','Yacute':'\xDD','yacute':'\xFD','yen':'\xA5','yuml':'\xFF','Yuml':'\u0178','Zeta':'\u0396','zeta':'\u03B6','zwj':'\u200D','zwnj':'\u200C'};var HtmlTagDefinition=function(){/**
     * @param {?=} __0
     */function HtmlTagDefinition(){var _this=this;var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},closedByChildren=_ref.closedByChildren,requiredParents=_ref.requiredParents,implicitNamespacePrefix=_ref.implicitNamespacePrefix,_ref$contentType=_ref.contentType,contentType=_ref$contentType===undefined?TagContentType.PARSABLE_DATA:_ref$contentType,_ref$closedByParent=_ref.closedByParent,closedByParent=_ref$closedByParent===undefined?false:_ref$closedByParent,_ref$isVoid=_ref.isVoid,isVoid=_ref$isVoid===undefined?false:_ref$isVoid,_ref$ignoreFirstLf=_ref.ignoreFirstLf,ignoreFirstLf=_ref$ignoreFirstLf===undefined?false:_ref$ignoreFirstLf;_classCallCheck(this,HtmlTagDefinition);this.closedByChildren={};this.closedByParent=false;this.canSelfClose=false;if(closedByChildren&&closedByChildren.length>0){closedByChildren.forEach(function(tagName){return _this.closedByChildren[tagName]=true;});}this.isVoid=isVoid;this.closedByParent=closedByParent||isVoid;if(requiredParents&&requiredParents.length>0){this.requiredParents={};// The first parent is the list is automatically when none of the listed parents are present
this.parentToAdd=requiredParents[0];requiredParents.forEach(function(tagName){return _this.requiredParents[tagName]=true;});}this.implicitNamespacePrefix=implicitNamespacePrefix;this.contentType=contentType;this.ignoreFirstLf=ignoreFirstLf;}/**
     * @param {?} currentParent
     * @return {?}
     */_createClass(HtmlTagDefinition,[{key:'requireExtraParent',value:function requireExtraParent(currentParent){if(!this.requiredParents){return false;}if(!currentParent){return true;}var/** @type {?} */lcParent=currentParent.toLowerCase();var/** @type {?} */isParentTemplate=lcParent==='template'||currentParent==='ng-template';return!isParentTemplate&&this.requiredParents[lcParent]!=true;}/**
     * @param {?} name
     * @return {?}
     */},{key:'isClosedByChild',value:function isClosedByChild(name){return this.isVoid||name.toLowerCase()in this.closedByChildren;}}]);return HtmlTagDefinition;}();// see http://www.w3.org/TR/html51/syntax.html#optional-tags
// This implementation does not fully conform to the HTML5 spec.
var/** @type {?} */TAG_DEFINITIONS={'base':new HtmlTagDefinition({isVoid:true}),'meta':new HtmlTagDefinition({isVoid:true}),'area':new HtmlTagDefinition({isVoid:true}),'embed':new HtmlTagDefinition({isVoid:true}),'link':new HtmlTagDefinition({isVoid:true}),'img':new HtmlTagDefinition({isVoid:true}),'input':new HtmlTagDefinition({isVoid:true}),'param':new HtmlTagDefinition({isVoid:true}),'hr':new HtmlTagDefinition({isVoid:true}),'br':new HtmlTagDefinition({isVoid:true}),'source':new HtmlTagDefinition({isVoid:true}),'track':new HtmlTagDefinition({isVoid:true}),'wbr':new HtmlTagDefinition({isVoid:true}),'p':new HtmlTagDefinition({closedByChildren:['address','article','aside','blockquote','div','dl','fieldset','footer','form','h1','h2','h3','h4','h5','h6','header','hgroup','hr','main','nav','ol','p','pre','section','table','ul'],closedByParent:true}),'thead':new HtmlTagDefinition({closedByChildren:['tbody','tfoot']}),'tbody':new HtmlTagDefinition({closedByChildren:['tbody','tfoot'],closedByParent:true}),'tfoot':new HtmlTagDefinition({closedByChildren:['tbody'],closedByParent:true}),'tr':new HtmlTagDefinition({closedByChildren:['tr'],requiredParents:['tbody','tfoot','thead'],closedByParent:true}),'td':new HtmlTagDefinition({closedByChildren:['td','th'],closedByParent:true}),'th':new HtmlTagDefinition({closedByChildren:['td','th'],closedByParent:true}),'col':new HtmlTagDefinition({requiredParents:['colgroup'],isVoid:true}),'svg':new HtmlTagDefinition({implicitNamespacePrefix:'svg'}),'math':new HtmlTagDefinition({implicitNamespacePrefix:'math'}),'li':new HtmlTagDefinition({closedByChildren:['li'],closedByParent:true}),'dt':new HtmlTagDefinition({closedByChildren:['dt','dd']}),'dd':new HtmlTagDefinition({closedByChildren:['dt','dd'],closedByParent:true}),'rb':new HtmlTagDefinition({closedByChildren:['rb','rt','rtc','rp'],closedByParent:true}),'rt':new HtmlTagDefinition({closedByChildren:['rb','rt','rtc','rp'],closedByParent:true}),'rtc':new HtmlTagDefinition({closedByChildren:['rb','rtc','rp'],closedByParent:true}),'rp':new HtmlTagDefinition({closedByChildren:['rb','rt','rtc','rp'],closedByParent:true}),'optgroup':new HtmlTagDefinition({closedByChildren:['optgroup'],closedByParent:true}),'option':new HtmlTagDefinition({closedByChildren:['option','optgroup'],closedByParent:true}),'pre':new HtmlTagDefinition({ignoreFirstLf:true}),'listing':new HtmlTagDefinition({ignoreFirstLf:true}),'style':new HtmlTagDefinition({contentType:TagContentType.RAW_TEXT}),'script':new HtmlTagDefinition({contentType:TagContentType.RAW_TEXT}),'title':new HtmlTagDefinition({contentType:TagContentType.ESCAPABLE_RAW_TEXT}),'textarea':new HtmlTagDefinition({contentType:TagContentType.ESCAPABLE_RAW_TEXT,ignoreFirstLf:true})};var/** @type {?} */_DEFAULT_TAG_DEFINITION=new HtmlTagDefinition();/**
 * @param {?} tagName
 * @return {?}
 */function getHtmlTagDefinition(tagName){return TAG_DEFINITIONS[tagName.toLowerCase()]||_DEFAULT_TAG_DEFINITION;}var/** @type {?} */_SELECTOR_REGEXP=new RegExp('(\\:not\\()|'+'([-\\w]+)|'+'(?:\\.([-\\w]+))|'+// "-" should appear first in the regexp below as FF31 parses "[.-\w]" as a range
'(?:\\[([-.\\w*]+)(?:=([^\\]]*))?\\])|'+'(\\))|'+'(\\s*,\\s*)',// ","
'g');/**
 * A css selector contains an element name,
 * css classes and attribute/value pairs with the purpose
 * of selecting subsets out of them.
 */var CssSelector=function(){function CssSelector(){_classCallCheck(this,CssSelector);this.element=null;this.classNames=[];this.attrs=[];this.notSelectors=[];}/**
     * @param {?} selector
     * @return {?}
     */_createClass(CssSelector,[{key:'isElementSelector',/**
     * @return {?}
     */value:function isElementSelector(){return this.hasElementSelector()&&this.classNames.length==0&&this.attrs.length==0&&this.notSelectors.length===0;}/**
     * @return {?}
     */},{key:'hasElementSelector',value:function hasElementSelector(){return!!this.element;}/**
     * @param {?=} element
     * @return {?}
     */},{key:'setElement',value:function setElement(){var element=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;this.element=element;}/**
     * Gets a template string for an element that matches the selector.
     * @return {?}
     */},{key:'getMatchingElementTemplate',value:function getMatchingElementTemplate(){var/** @type {?} */tagName=this.element||'div';var/** @type {?} */classAttr=this.classNames.length>0?' class="'+this.classNames.join(' ')+'"':'';var/** @type {?} */attrs='';for(var/** @type {?} */i=0;i<this.attrs.length;i+=2){var/** @type {?} */attrName=this.attrs[i];var/** @type {?} */attrValue=this.attrs[i+1]!==''?'="'+this.attrs[i+1]+'"':'';attrs+=' '+attrName+attrValue;}return getHtmlTagDefinition(tagName).isVoid?'<'+tagName+classAttr+attrs+'/>':'<'+tagName+classAttr+attrs+'></'+tagName+'>';}/**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */},{key:'addAttribute',value:function addAttribute(name){var value=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';this.attrs.push(name,value&&value.toLowerCase()||'');}/**
     * @param {?} name
     * @return {?}
     */},{key:'addClassName',value:function addClassName(name){this.classNames.push(name.toLowerCase());}/**
     * @return {?}
     */},{key:'toString',value:function toString(){var/** @type {?} */res=this.element||'';if(this.classNames){this.classNames.forEach(function(klass){return res+='.'+klass;});}if(this.attrs){for(var/** @type {?} */i=0;i<this.attrs.length;i+=2){var/** @type {?} */name=this.attrs[i];var/** @type {?} */value=this.attrs[i+1];res+='['+name+(value?'='+value:'')+']';}}this.notSelectors.forEach(function(notSelector){return res+=':not('+notSelector+')';});return res;}}],[{key:'parse',value:function parse(selector){var/** @type {?} */results=[];var/** @type {?} */_addResult=function _addResult(res,cssSel){if(cssSel.notSelectors.length>0&&!cssSel.element&&cssSel.classNames.length==0&&cssSel.attrs.length==0){cssSel.element='*';}res.push(cssSel);};var/** @type {?} */cssSelector=new CssSelector();var/** @type {?} */match=void 0;var/** @type {?} */current=cssSelector;var/** @type {?} */inNot=false;_SELECTOR_REGEXP.lastIndex=0;while(match=_SELECTOR_REGEXP.exec(selector)){if(match[1]){if(inNot){throw new Error('Nesting :not is not allowed in a selector');}inNot=true;current=new CssSelector();cssSelector.notSelectors.push(current);}if(match[2]){current.setElement(match[2]);}if(match[3]){current.addClassName(match[3]);}if(match[4]){current.addAttribute(match[4],match[5]);}if(match[6]){inNot=false;current=cssSelector;}if(match[7]){if(inNot){throw new Error('Multiple selectors in :not are not supported');}_addResult(results,cssSelector);cssSelector=current=new CssSelector();}}_addResult(results,cssSelector);return results;}}]);return CssSelector;}();/**
 * Reads a list of CssSelectors and allows to calculate which ones
 * are contained in a given CssSelector.
 */var SelectorMatcher=function(){function SelectorMatcher(){_classCallCheck(this,SelectorMatcher);this._elementMap=new Map();this._elementPartialMap=new Map();this._classMap=new Map();this._classPartialMap=new Map();this._attrValueMap=new Map();this._attrValuePartialMap=new Map();this._listContexts=[];}/**
     * @param {?} notSelectors
     * @return {?}
     */_createClass(SelectorMatcher,[{key:'addSelectables',/**
     * @param {?} cssSelectors
     * @param {?=} callbackCtxt
     * @return {?}
     */value:function addSelectables(cssSelectors,callbackCtxt){var/** @type {?} */listContext=null;if(cssSelectors.length>1){listContext=new SelectorListContext(cssSelectors);this._listContexts.push(listContext);}for(var/** @type {?} */i=0;i<cssSelectors.length;i++){this._addSelectable(cssSelectors[i],callbackCtxt,listContext);}}/**
     * Add an object that can be found later on by calling `match`.
     * @param {?} cssSelector A css selector
     * @param {?} callbackCtxt An opaque object that will be given to the callback of the `match` function
     * @param {?} listContext
     * @return {?}
     */},{key:'_addSelectable',value:function _addSelectable(cssSelector,callbackCtxt,listContext){var/** @type {?} */matcher=this;var/** @type {?} */element=cssSelector.element;var/** @type {?} */classNames=cssSelector.classNames;var/** @type {?} */attrs=cssSelector.attrs;var/** @type {?} */selectable=new SelectorContext(cssSelector,callbackCtxt,listContext);if(element){var/** @type {?} */isTerminal=attrs.length===0&&classNames.length===0;if(isTerminal){this._addTerminal(matcher._elementMap,element,selectable);}else{matcher=this._addPartial(matcher._elementPartialMap,element);}}if(classNames){for(var/** @type {?} */i=0;i<classNames.length;i++){var/** @type {?} */_isTerminal=attrs.length===0&&i===classNames.length-1;var/** @type {?} */className=classNames[i];if(_isTerminal){this._addTerminal(matcher._classMap,className,selectable);}else{matcher=this._addPartial(matcher._classPartialMap,className);}}}if(attrs){for(var/** @type {?} */_i=0;_i<attrs.length;_i+=2){var/** @type {?} */_isTerminal2=_i===attrs.length-2;var/** @type {?} */name=attrs[_i];var/** @type {?} */value=attrs[_i+1];if(_isTerminal2){var/** @type {?} */terminalMap=matcher._attrValueMap;var/** @type {?} */terminalValuesMap=terminalMap.get(name);if(!terminalValuesMap){terminalValuesMap=new Map();terminalMap.set(name,terminalValuesMap);}this._addTerminal(terminalValuesMap,value,selectable);}else{var/** @type {?} */partialMap=matcher._attrValuePartialMap;var/** @type {?} */partialValuesMap=partialMap.get(name);if(!partialValuesMap){partialValuesMap=new Map();partialMap.set(name,partialValuesMap);}matcher=this._addPartial(partialValuesMap,value);}}}}/**
     * @param {?} map
     * @param {?} name
     * @param {?} selectable
     * @return {?}
     */},{key:'_addTerminal',value:function _addTerminal(map,name,selectable){var/** @type {?} */terminalList=map.get(name);if(!terminalList){terminalList=[];map.set(name,terminalList);}terminalList.push(selectable);}/**
     * @param {?} map
     * @param {?} name
     * @return {?}
     */},{key:'_addPartial',value:function _addPartial(map,name){var/** @type {?} */matcher=map.get(name);if(!matcher){matcher=new SelectorMatcher();map.set(name,matcher);}return matcher;}/**
     * Find the objects that have been added via `addSelectable`
     * whose css selector is contained in the given css selector.
     * @param {?} cssSelector A css selector
     * @param {?} matchedCallback This callback will be called with the object handed into `addSelectable`
     * @return {?} boolean true if a match was found
     */},{key:'match',value:function match(cssSelector,matchedCallback){var/** @type {?} */result=false;var/** @type {?} */element=cssSelector.element;var/** @type {?} */classNames=cssSelector.classNames;var/** @type {?} */attrs=cssSelector.attrs;for(var/** @type {?} */i=0;i<this._listContexts.length;i++){this._listContexts[i].alreadyMatched=false;}result=this._matchTerminal(this._elementMap,element,cssSelector,matchedCallback)||result;result=this._matchPartial(this._elementPartialMap,element,cssSelector,matchedCallback)||result;if(classNames){for(var/** @type {?} */_i2=0;_i2<classNames.length;_i2++){var/** @type {?} */className=classNames[_i2];result=this._matchTerminal(this._classMap,className,cssSelector,matchedCallback)||result;result=this._matchPartial(this._classPartialMap,className,cssSelector,matchedCallback)||result;}}if(attrs){for(var/** @type {?} */_i3=0;_i3<attrs.length;_i3+=2){var/** @type {?} */name=attrs[_i3];var/** @type {?} */value=attrs[_i3+1];var/** @type {?} */terminalValuesMap=this._attrValueMap.get(name);if(value){result=this._matchTerminal(terminalValuesMap,'',cssSelector,matchedCallback)||result;}result=this._matchTerminal(terminalValuesMap,value,cssSelector,matchedCallback)||result;var/** @type {?} */partialValuesMap=this._attrValuePartialMap.get(name);if(value){result=this._matchPartial(partialValuesMap,'',cssSelector,matchedCallback)||result;}result=this._matchPartial(partialValuesMap,value,cssSelector,matchedCallback)||result;}}return result;}/**
     * \@internal
     * @param {?} map
     * @param {?} name
     * @param {?} cssSelector
     * @param {?} matchedCallback
     * @return {?}
     */},{key:'_matchTerminal',value:function _matchTerminal(map,name,cssSelector,matchedCallback){if(!map||typeof name!=='string'){return false;}var/** @type {?} */selectables=map.get(name)||[];var/** @type {?} */starSelectables=map.get('*');if(starSelectables){selectables=selectables.concat(starSelectables);}if(selectables.length===0){return false;}var/** @type {?} */selectable=void 0;var/** @type {?} */result=false;for(var/** @type {?} */i=0;i<selectables.length;i++){selectable=selectables[i];result=selectable.finalize(cssSelector,matchedCallback)||result;}return result;}/**
     * \@internal
     * @param {?} map
     * @param {?} name
     * @param {?} cssSelector
     * @param {?} matchedCallback
     * @return {?}
     */},{key:'_matchPartial',value:function _matchPartial(map,name,cssSelector,matchedCallback){if(!map||typeof name!=='string'){return false;}var/** @type {?} */nestedSelector=map.get(name);if(!nestedSelector){return false;}// TODO(perf): get rid of recursion and measure again
// TODO(perf): don't pass the whole selector into the recursion,
// but only the not processed parts
return nestedSelector.match(cssSelector,matchedCallback);}}],[{key:'createNotMatcher',value:function createNotMatcher(notSelectors){var/** @type {?} */notMatcher=new SelectorMatcher();notMatcher.addSelectables(notSelectors,null);return notMatcher;}}]);return SelectorMatcher;}();var SelectorListContext=/**
     * @param {?} selectors
     */function SelectorListContext(selectors){_classCallCheck(this,SelectorListContext);this.selectors=selectors;this.alreadyMatched=false;};var SelectorContext=function(){/**
     * @param {?} selector
     * @param {?} cbContext
     * @param {?} listContext
     */function SelectorContext(selector,cbContext,listContext){_classCallCheck(this,SelectorContext);this.selector=selector;this.cbContext=cbContext;this.listContext=listContext;this.notSelectors=selector.notSelectors;}/**
     * @param {?} cssSelector
     * @param {?} callback
     * @return {?}
     */_createClass(SelectorContext,[{key:'finalize',value:function finalize(cssSelector,callback){var/** @type {?} */result=true;if(this.notSelectors.length>0&&(!this.listContext||!this.listContext.alreadyMatched)){var/** @type {?} */notMatcher=SelectorMatcher.createNotMatcher(this.notSelectors);result=!notMatcher.match(cssSelector,null);}if(result&&callback&&(!this.listContext||!this.listContext.alreadyMatched)){if(this.listContext){this.listContext.alreadyMatched=true;}callback(this.selector,this.cbContext);}return result;}}]);return SelectorContext;}();var/** @type {?} */MODULE_SUFFIX='';var/** @type {?} */DASH_CASE_REGEXP=/-+([a-z0-9])/g;/**
 * @param {?} input
 * @return {?}
 */function dashCaseToCamelCase(input){return input.replace(DASH_CASE_REGEXP,function(){for(var _len=arguments.length,m=Array(_len),_key=0;_key<_len;_key++){m[_key]=arguments[_key];}return m[1].toUpperCase();});}/**
 * @param {?} input
 * @param {?} defaultValues
 * @return {?}
 */function splitAtColon(input,defaultValues){return _splitAt(input,':',defaultValues);}/**
 * @param {?} input
 * @param {?} defaultValues
 * @return {?}
 */function splitAtPeriod(input,defaultValues){return _splitAt(input,'.',defaultValues);}/**
 * @param {?} input
 * @param {?} character
 * @param {?} defaultValues
 * @return {?}
 */function _splitAt(input,character,defaultValues){var/** @type {?} */characterIndex=input.indexOf(character);if(characterIndex==-1)return defaultValues;return[input.slice(0,characterIndex).trim(),input.slice(characterIndex+1).trim()];}/**
 * @param {?} value
 * @param {?} visitor
 * @param {?} context
 * @return {?}
 */function visitValue(value,visitor,context){if(Array.isArray(value)){return visitor.visitArray(/** @type {?} */value,context);}if(isStrictStringMap(value)){return visitor.visitStringMap(/** @type {?} */value,context);}if(value==null||isPrimitive(value)){return visitor.visitPrimitive(value,context);}return visitor.visitOther(value,context);}var ValueTransformer=function(){function ValueTransformer(){_classCallCheck(this,ValueTransformer);}_createClass(ValueTransformer,[{key:'visitArray',/**
     * @param {?} arr
     * @param {?} context
     * @return {?}
     */value:function visitArray(arr,context){var _this2=this;return arr.map(function(value){return visitValue(value,_this2,context);});}/**
     * @param {?} map
     * @param {?} context
     * @return {?}
     */},{key:'visitStringMap',value:function visitStringMap(map,context){var _this3=this;var/** @type {?} */result={};Object.keys(map).forEach(function(key){result[key]=visitValue(map[key],_this3,context);});return result;}/**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */},{key:'visitPrimitive',value:function visitPrimitive(value,context){return value;}/**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */},{key:'visitOther',value:function visitOther(value,context){return value;}}]);return ValueTransformer;}();var SyncAsyncResult=/**
     * @param {?} syncResult
     * @param {?=} asyncResult
     */function SyncAsyncResult(syncResult){var asyncResult=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,SyncAsyncResult);this.syncResult=syncResult;this.asyncResult=asyncResult;if(!asyncResult){this.asyncResult=Promise.resolve(syncResult);}};/**
 * @param {?} msg
 * @return {?}
 */function syntaxError(msg){var/** @type {?} */error=Error(msg);error[ERROR_SYNTAX_ERROR]=true;return error;}var/** @type {?} */ERROR_SYNTAX_ERROR='ngSyntaxError';/**
 * @param {?} error
 * @return {?}
 */function isSyntaxError(error){return error[ERROR_SYNTAX_ERROR];}// group 0: "[prop] or (event) or @trigger"
// group 1: "prop" from "[prop]"
// group 2: "event" from "(event)"
// group 3: "@trigger" from "@trigger"
var/** @type {?} */HOST_REG_EXP=/^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;var CompileAnimationEntryMetadata=/**
     * @param {?=} name
     * @param {?=} definitions
     */function CompileAnimationEntryMetadata(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var definitions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,CompileAnimationEntryMetadata);this.name=name;this.definitions=definitions;};/**
 * @abstract
 */var CompileAnimationStateMetadata=function CompileAnimationStateMetadata(){_classCallCheck(this,CompileAnimationStateMetadata);};var CompileAnimationStateDeclarationMetadata=function(_CompileAnimationStat){_inherits(CompileAnimationStateDeclarationMetadata,_CompileAnimationStat);/**
     * @param {?} stateNameExpr
     * @param {?} styles
     */function CompileAnimationStateDeclarationMetadata(stateNameExpr,styles){_classCallCheck(this,CompileAnimationStateDeclarationMetadata);var _this4=_possibleConstructorReturn(this,(CompileAnimationStateDeclarationMetadata.__proto__||Object.getPrototypeOf(CompileAnimationStateDeclarationMetadata)).call(this));_this4.stateNameExpr=stateNameExpr;_this4.styles=styles;return _this4;}return CompileAnimationStateDeclarationMetadata;}(CompileAnimationStateMetadata);var CompileAnimationStateTransitionMetadata=function(_CompileAnimationStat2){_inherits(CompileAnimationStateTransitionMetadata,_CompileAnimationStat2);/**
     * @param {?} stateChangeExpr
     * @param {?} steps
     */function CompileAnimationStateTransitionMetadata(stateChangeExpr,steps){_classCallCheck(this,CompileAnimationStateTransitionMetadata);var _this5=_possibleConstructorReturn(this,(CompileAnimationStateTransitionMetadata.__proto__||Object.getPrototypeOf(CompileAnimationStateTransitionMetadata)).call(this));_this5.stateChangeExpr=stateChangeExpr;_this5.steps=steps;return _this5;}return CompileAnimationStateTransitionMetadata;}(CompileAnimationStateMetadata);/**
 * @abstract
 */var CompileAnimationMetadata=function CompileAnimationMetadata(){_classCallCheck(this,CompileAnimationMetadata);};var CompileAnimationKeyframesSequenceMetadata=function(_CompileAnimationMeta){_inherits(CompileAnimationKeyframesSequenceMetadata,_CompileAnimationMeta);/**
     * @param {?=} steps
     */function CompileAnimationKeyframesSequenceMetadata(){var steps=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];_classCallCheck(this,CompileAnimationKeyframesSequenceMetadata);var _this6=_possibleConstructorReturn(this,(CompileAnimationKeyframesSequenceMetadata.__proto__||Object.getPrototypeOf(CompileAnimationKeyframesSequenceMetadata)).call(this));_this6.steps=steps;return _this6;}return CompileAnimationKeyframesSequenceMetadata;}(CompileAnimationMetadata);var CompileAnimationStyleMetadata=function(_CompileAnimationMeta2){_inherits(CompileAnimationStyleMetadata,_CompileAnimationMeta2);/**
     * @param {?} offset
     * @param {?=} styles
     */function CompileAnimationStyleMetadata(offset){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,CompileAnimationStyleMetadata);var _this7=_possibleConstructorReturn(this,(CompileAnimationStyleMetadata.__proto__||Object.getPrototypeOf(CompileAnimationStyleMetadata)).call(this));_this7.offset=offset;_this7.styles=styles;return _this7;}return CompileAnimationStyleMetadata;}(CompileAnimationMetadata);var CompileAnimationAnimateMetadata=function(_CompileAnimationMeta3){_inherits(CompileAnimationAnimateMetadata,_CompileAnimationMeta3);/**
     * @param {?=} timings
     * @param {?=} styles
     */function CompileAnimationAnimateMetadata(){var timings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,CompileAnimationAnimateMetadata);var _this8=_possibleConstructorReturn(this,(CompileAnimationAnimateMetadata.__proto__||Object.getPrototypeOf(CompileAnimationAnimateMetadata)).call(this));_this8.timings=timings;_this8.styles=styles;return _this8;}return CompileAnimationAnimateMetadata;}(CompileAnimationMetadata);/**
 * @abstract
 */var CompileAnimationWithStepsMetadata=function(_CompileAnimationMeta4){_inherits(CompileAnimationWithStepsMetadata,_CompileAnimationMeta4);/**
     * @param {?=} steps
     */function CompileAnimationWithStepsMetadata(){var steps=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_classCallCheck(this,CompileAnimationWithStepsMetadata);var _this9=_possibleConstructorReturn(this,(CompileAnimationWithStepsMetadata.__proto__||Object.getPrototypeOf(CompileAnimationWithStepsMetadata)).call(this));_this9.steps=steps;return _this9;}return CompileAnimationWithStepsMetadata;}(CompileAnimationMetadata);var CompileAnimationSequenceMetadata=function(_CompileAnimationWith){_inherits(CompileAnimationSequenceMetadata,_CompileAnimationWith);/**
     * @param {?=} steps
     */function CompileAnimationSequenceMetadata(){var steps=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_classCallCheck(this,CompileAnimationSequenceMetadata);return _possibleConstructorReturn(this,(CompileAnimationSequenceMetadata.__proto__||Object.getPrototypeOf(CompileAnimationSequenceMetadata)).call(this,steps));}return CompileAnimationSequenceMetadata;}(CompileAnimationWithStepsMetadata);var CompileAnimationGroupMetadata=function(_CompileAnimationWith2){_inherits(CompileAnimationGroupMetadata,_CompileAnimationWith2);/**
     * @param {?=} steps
     */function CompileAnimationGroupMetadata(){var steps=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_classCallCheck(this,CompileAnimationGroupMetadata);return _possibleConstructorReturn(this,(CompileAnimationGroupMetadata.__proto__||Object.getPrototypeOf(CompileAnimationGroupMetadata)).call(this,steps));}return CompileAnimationGroupMetadata;}(CompileAnimationWithStepsMetadata);/**
 * @param {?} name
 * @return {?}
 */function _sanitizeIdentifier(name){return name.replace(/\W/g,'_');}var/** @type {?} */_anonymousTypeIndex=0;/**
 * @param {?} compileIdentifier
 * @return {?}
 */function identifierName(compileIdentifier){if(!compileIdentifier||!compileIdentifier.reference){return null;}var/** @type {?} */ref=compileIdentifier.reference;if(ref instanceof StaticSymbol){return ref.name;}if(ref['__anonymousType']){return ref['__anonymousType'];}var/** @type {?} */identifier=stringify(ref);if(identifier.indexOf('(')>=0){// case: anonymous functions!
identifier='anonymous_'+_anonymousTypeIndex++;ref['__anonymousType']=identifier;}else{identifier=_sanitizeIdentifier(identifier);}return identifier;}/**
 * @param {?} compileIdentifier
 * @return {?}
 */function identifierModuleUrl(compileIdentifier){var/** @type {?} */ref=compileIdentifier.reference;if(ref instanceof StaticSymbol){return ref.filePath;}return ɵreflector.importUri(ref);}/**
 * @param {?} compType
 * @param {?} embeddedTemplateIndex
 * @return {?}
 */function viewClassName(compType,embeddedTemplateIndex){return'View_'+identifierName({reference:compType})+'_'+embeddedTemplateIndex;}/**
 * @param {?} compType
 * @return {?}
 */function rendererTypeName(compType){return'RenderType_'+identifierName({reference:compType});}/**
 * @param {?} compType
 * @return {?}
 */function hostViewClassName(compType){return'HostView_'+identifierName({reference:compType});}/**
 * @param {?} dirType
 * @return {?}
 */function dirWrapperClassName(dirType){return'Wrapper_'+identifierName({reference:dirType});}/**
 * @param {?} compType
 * @return {?}
 */function componentFactoryName(compType){return identifierName({reference:compType})+'NgFactory';}var CompileSummaryKind={};CompileSummaryKind.Pipe=0;CompileSummaryKind.Directive=1;CompileSummaryKind.NgModule=2;CompileSummaryKind.Injectable=3;CompileSummaryKind[CompileSummaryKind.Pipe]="Pipe";CompileSummaryKind[CompileSummaryKind.Directive]="Directive";CompileSummaryKind[CompileSummaryKind.NgModule]="NgModule";CompileSummaryKind[CompileSummaryKind.Injectable]="Injectable";/**
 * @param {?} token
 * @return {?}
 */function tokenName(token){return isPresent(token.value)?_sanitizeIdentifier(token.value):identifierName(token.identifier);}/**
 * @param {?} token
 * @return {?}
 */function tokenReference(token){if(isPresent(token.identifier)){return token.identifier.reference;}else{return token.value;}}/**
 * Metadata about a stylesheet
 */var CompileStylesheetMetadata=/**
     * @param {?=} __0
     */function CompileStylesheetMetadata(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},moduleUrl=_ref2.moduleUrl,styles=_ref2.styles,styleUrls=_ref2.styleUrls;_classCallCheck(this,CompileStylesheetMetadata);this.moduleUrl=moduleUrl;this.styles=_normalizeArray(styles);this.styleUrls=_normalizeArray(styleUrls);};/**
 * Metadata regarding compilation of a template.
 */var CompileTemplateMetadata=function(){/**
     * @param {?=} __0
     */function CompileTemplateMetadata(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},encapsulation=_ref3.encapsulation,template=_ref3.template,templateUrl=_ref3.templateUrl,styles=_ref3.styles,styleUrls=_ref3.styleUrls,externalStylesheets=_ref3.externalStylesheets,animations=_ref3.animations,ngContentSelectors=_ref3.ngContentSelectors,interpolation=_ref3.interpolation;_classCallCheck(this,CompileTemplateMetadata);this.encapsulation=encapsulation;this.template=template;this.templateUrl=templateUrl;this.styles=_normalizeArray(styles);this.styleUrls=_normalizeArray(styleUrls);this.externalStylesheets=_normalizeArray(externalStylesheets);this.animations=animations?ListWrapper.flatten(animations):[];this.ngContentSelectors=ngContentSelectors||[];if(interpolation&&interpolation.length!=2){throw new Error('\'interpolation\' should have a start and an end symbol.');}this.interpolation=interpolation;}/**
     * @return {?}
     */_createClass(CompileTemplateMetadata,[{key:'toSummary',value:function toSummary(){return{animations:this.animations.map(function(anim){return anim.name;}),ngContentSelectors:this.ngContentSelectors,encapsulation:this.encapsulation};}}]);return CompileTemplateMetadata;}();/**
 * Metadata regarding compilation of a directive.
 */var CompileDirectiveMetadata=function(){_createClass(CompileDirectiveMetadata,null,[{key:'create',/**
     * @param {?=} __0
     * @return {?}
     */value:function create(){var _ref4=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},isHost=_ref4.isHost,type=_ref4.type,isComponent=_ref4.isComponent,selector=_ref4.selector,exportAs=_ref4.exportAs,changeDetection=_ref4.changeDetection,inputs=_ref4.inputs,outputs=_ref4.outputs,host=_ref4.host,providers=_ref4.providers,viewProviders=_ref4.viewProviders,queries=_ref4.queries,viewQueries=_ref4.viewQueries,entryComponents=_ref4.entryComponents,template=_ref4.template,wrapperType=_ref4.wrapperType,componentViewType=_ref4.componentViewType,rendererType=_ref4.rendererType,componentFactory=_ref4.componentFactory;var/** @type {?} */hostListeners={};var/** @type {?} */hostProperties={};var/** @type {?} */hostAttributes={};if(isPresent(host)){Object.keys(host).forEach(function(key){var/** @type {?} */value=host[key];var/** @type {?} */matches=key.match(HOST_REG_EXP);if(matches===null){hostAttributes[key]=value;}else if(isPresent(matches[1])){hostProperties[matches[1]]=value;}else if(isPresent(matches[2])){hostListeners[matches[2]]=value;}});}var/** @type {?} */inputsMap={};if(isPresent(inputs)){inputs.forEach(function(bindConfig){// canonical syntax: `dirProp: elProp`
// if there is no `:`, use dirProp = elProp
var/** @type {?} */parts=splitAtColon(bindConfig,[bindConfig,bindConfig]);inputsMap[parts[0]]=parts[1];});}var/** @type {?} */outputsMap={};if(isPresent(outputs)){outputs.forEach(function(bindConfig){// canonical syntax: `dirProp: elProp`
// if there is no `:`, use dirProp = elProp
var/** @type {?} */parts=splitAtColon(bindConfig,[bindConfig,bindConfig]);outputsMap[parts[0]]=parts[1];});}return new CompileDirectiveMetadata({isHost:isHost,type:type,isComponent:!!isComponent,selector:selector,exportAs:exportAs,changeDetection:changeDetection,inputs:inputsMap,outputs:outputsMap,hostListeners:hostListeners,hostProperties:hostProperties,hostAttributes:hostAttributes,providers:providers,viewProviders:viewProviders,queries:queries,viewQueries:viewQueries,entryComponents:entryComponents,template:template,wrapperType:wrapperType,componentViewType:componentViewType,rendererType:rendererType,componentFactory:componentFactory});}/**
     * @param {?=} __0
     */}]);function CompileDirectiveMetadata(){var _ref5=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},isHost=_ref5.isHost,type=_ref5.type,isComponent=_ref5.isComponent,selector=_ref5.selector,exportAs=_ref5.exportAs,changeDetection=_ref5.changeDetection,inputs=_ref5.inputs,outputs=_ref5.outputs,hostListeners=_ref5.hostListeners,hostProperties=_ref5.hostProperties,hostAttributes=_ref5.hostAttributes,providers=_ref5.providers,viewProviders=_ref5.viewProviders,queries=_ref5.queries,viewQueries=_ref5.viewQueries,entryComponents=_ref5.entryComponents,template=_ref5.template,wrapperType=_ref5.wrapperType,componentViewType=_ref5.componentViewType,rendererType=_ref5.rendererType,componentFactory=_ref5.componentFactory;_classCallCheck(this,CompileDirectiveMetadata);this.isHost=!!isHost;this.type=type;this.isComponent=isComponent;this.selector=selector;this.exportAs=exportAs;this.changeDetection=changeDetection;this.inputs=inputs;this.outputs=outputs;this.hostListeners=hostListeners;this.hostProperties=hostProperties;this.hostAttributes=hostAttributes;this.providers=_normalizeArray(providers);this.viewProviders=_normalizeArray(viewProviders);this.queries=_normalizeArray(queries);this.viewQueries=_normalizeArray(viewQueries);this.entryComponents=_normalizeArray(entryComponents);this.template=template;this.wrapperType=wrapperType;this.componentViewType=componentViewType;this.rendererType=rendererType;this.componentFactory=componentFactory;}/**
     * @return {?}
     */_createClass(CompileDirectiveMetadata,[{key:'toSummary',value:function toSummary(){return{summaryKind:CompileSummaryKind.Directive,type:this.type,isComponent:this.isComponent,selector:this.selector,exportAs:this.exportAs,inputs:this.inputs,outputs:this.outputs,hostListeners:this.hostListeners,hostProperties:this.hostProperties,hostAttributes:this.hostAttributes,providers:this.providers,viewProviders:this.viewProviders,queries:this.queries,viewQueries:this.viewQueries,entryComponents:this.entryComponents,changeDetection:this.changeDetection,template:this.template&&this.template.toSummary(),wrapperType:this.wrapperType,componentViewType:this.componentViewType,rendererType:this.rendererType,componentFactory:this.componentFactory};}}]);return CompileDirectiveMetadata;}();/**
 * Construct {\@link CompileDirectiveMetadata} from {\@link ComponentTypeMetadata} and a selector.
 * @param {?} hostTypeReference
 * @param {?} compMeta
 * @param {?} hostViewType
 * @return {?}
 */function createHostComponentMeta(hostTypeReference,compMeta,hostViewType){var/** @type {?} */template=CssSelector.parse(compMeta.selector)[0].getMatchingElementTemplate();return CompileDirectiveMetadata.create({isHost:true,type:{reference:hostTypeReference,diDeps:[],lifecycleHooks:[]},template:new CompileTemplateMetadata({encapsulation:ViewEncapsulation.None,template:template,templateUrl:'',styles:[],styleUrls:[],ngContentSelectors:[],animations:[]}),changeDetection:ChangeDetectionStrategy.Default,inputs:[],outputs:[],host:{},isComponent:true,selector:'*',providers:[],viewProviders:[],queries:[],viewQueries:[],componentViewType:hostViewType,rendererType:{id:'__Host__',encapsulation:ViewEncapsulation.None,styles:[],data:{}}});}var CompilePipeMetadata=function(){/**
     * @param {?=} __0
     */function CompilePipeMetadata(){var _ref6=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},type=_ref6.type,name=_ref6.name,pure=_ref6.pure;_classCallCheck(this,CompilePipeMetadata);this.type=type;this.name=name;this.pure=!!pure;}/**
     * @return {?}
     */_createClass(CompilePipeMetadata,[{key:'toSummary',value:function toSummary(){return{summaryKind:CompileSummaryKind.Pipe,type:this.type,name:this.name,pure:this.pure};}}]);return CompilePipeMetadata;}();/**
 * Metadata regarding compilation of a module.
 */var CompileNgModuleMetadata=function(){/**
     * @param {?=} __0
     */function CompileNgModuleMetadata(){var _ref7=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},type=_ref7.type,providers=_ref7.providers,declaredDirectives=_ref7.declaredDirectives,exportedDirectives=_ref7.exportedDirectives,declaredPipes=_ref7.declaredPipes,exportedPipes=_ref7.exportedPipes,entryComponents=_ref7.entryComponents,bootstrapComponents=_ref7.bootstrapComponents,importedModules=_ref7.importedModules,exportedModules=_ref7.exportedModules,schemas=_ref7.schemas,transitiveModule=_ref7.transitiveModule,id=_ref7.id;_classCallCheck(this,CompileNgModuleMetadata);this.type=type;this.declaredDirectives=_normalizeArray(declaredDirectives);this.exportedDirectives=_normalizeArray(exportedDirectives);this.declaredPipes=_normalizeArray(declaredPipes);this.exportedPipes=_normalizeArray(exportedPipes);this.providers=_normalizeArray(providers);this.entryComponents=_normalizeArray(entryComponents);this.bootstrapComponents=_normalizeArray(bootstrapComponents);this.importedModules=_normalizeArray(importedModules);this.exportedModules=_normalizeArray(exportedModules);this.schemas=_normalizeArray(schemas);this.id=id;this.transitiveModule=transitiveModule;}/**
     * @return {?}
     */_createClass(CompileNgModuleMetadata,[{key:'toSummary',value:function toSummary(){return{summaryKind:CompileSummaryKind.NgModule,type:this.type,entryComponents:this.transitiveModule.entryComponents,providers:this.transitiveModule.providers,modules:this.transitiveModule.modules,exportedDirectives:this.transitiveModule.exportedDirectives,exportedPipes:this.transitiveModule.exportedPipes};}}]);return CompileNgModuleMetadata;}();var TransitiveCompileNgModuleMetadata=function(){function TransitiveCompileNgModuleMetadata(){_classCallCheck(this,TransitiveCompileNgModuleMetadata);this.directivesSet=new Set();this.directives=[];this.exportedDirectivesSet=new Set();this.exportedDirectives=[];this.pipesSet=new Set();this.pipes=[];this.exportedPipesSet=new Set();this.exportedPipes=[];this.modulesSet=new Set();this.modules=[];this.entryComponentsSet=new Set();this.entryComponents=[];this.providers=[];}/**
     * @param {?} provider
     * @param {?} module
     * @return {?}
     */_createClass(TransitiveCompileNgModuleMetadata,[{key:'addProvider',value:function addProvider(provider,module){this.providers.push({provider:provider,module:module});}/**
     * @param {?} id
     * @return {?}
     */},{key:'addDirective',value:function addDirective(id){if(!this.directivesSet.has(id.reference)){this.directivesSet.add(id.reference);this.directives.push(id);}}/**
     * @param {?} id
     * @return {?}
     */},{key:'addExportedDirective',value:function addExportedDirective(id){if(!this.exportedDirectivesSet.has(id.reference)){this.exportedDirectivesSet.add(id.reference);this.exportedDirectives.push(id);}}/**
     * @param {?} id
     * @return {?}
     */},{key:'addPipe',value:function addPipe(id){if(!this.pipesSet.has(id.reference)){this.pipesSet.add(id.reference);this.pipes.push(id);}}/**
     * @param {?} id
     * @return {?}
     */},{key:'addExportedPipe',value:function addExportedPipe(id){if(!this.exportedPipesSet.has(id.reference)){this.exportedPipesSet.add(id.reference);this.exportedPipes.push(id);}}/**
     * @param {?} id
     * @return {?}
     */},{key:'addModule',value:function addModule(id){if(!this.modulesSet.has(id.reference)){this.modulesSet.add(id.reference);this.modules.push(id);}}/**
     * @param {?} ec
     * @return {?}
     */},{key:'addEntryComponent',value:function addEntryComponent(ec){if(!this.entryComponentsSet.has(ec.componentType)){this.entryComponentsSet.add(ec.componentType);this.entryComponents.push(ec);}}}]);return TransitiveCompileNgModuleMetadata;}();/**
 * @param {?} obj
 * @return {?}
 */function _normalizeArray(obj){return obj||[];}var ProviderMeta=/**
     * @param {?} token
     * @param {?} __1
     */function ProviderMeta(token,_ref8){var useClass=_ref8.useClass,useValue=_ref8.useValue,useExisting=_ref8.useExisting,useFactory=_ref8.useFactory,deps=_ref8.deps,multi=_ref8.multi;_classCallCheck(this,ProviderMeta);this.token=token;this.useClass=useClass;this.useValue=useValue;this.useExisting=useExisting;this.useFactory=useFactory;this.dependencies=deps;this.multi=!!multi;};var/** @type {?} */CORE=assetUrl('core');var/** @type {?} */VIEW_UTILS_MODULE_URL=assetUrl('core','linker/view_utils');var Identifiers=function Identifiers(){_classCallCheck(this,Identifiers);};Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS={name:'ANALYZE_FOR_ENTRY_COMPONENTS',moduleUrl:CORE,runtime:ANALYZE_FOR_ENTRY_COMPONENTS};Identifiers.ViewUtils={name:'ɵViewUtils',moduleUrl:CORE,runtime:ɵViewUtils};Identifiers.AppView={name:'ɵAppView',moduleUrl:CORE,runtime:ɵAppView};Identifiers.DebugAppView={name:'ɵDebugAppView',moduleUrl:CORE,runtime:ɵDebugAppView};Identifiers.ViewContainer={name:'ɵViewContainer',moduleUrl:CORE,runtime:ɵViewContainer};Identifiers.ElementRef={name:'ElementRef',moduleUrl:CORE,runtime:ElementRef};Identifiers.ViewContainerRef={name:'ViewContainerRef',moduleUrl:CORE,runtime:ViewContainerRef};Identifiers.ChangeDetectorRef={name:'ChangeDetectorRef',moduleUrl:CORE,runtime:ChangeDetectorRef};Identifiers.RenderComponentType={name:'RenderComponentType',moduleUrl:CORE,runtime:RenderComponentType};Identifiers.QueryList={name:'QueryList',moduleUrl:CORE,runtime:QueryList};Identifiers.TemplateRef={name:'TemplateRef',moduleUrl:CORE,runtime:TemplateRef};Identifiers.TemplateRef_={name:'ɵTemplateRef_',moduleUrl:CORE,runtime:ɵTemplateRef_};Identifiers.CodegenComponentFactoryResolver={name:'ɵCodegenComponentFactoryResolver',moduleUrl:CORE,runtime:ɵCodegenComponentFactoryResolver};Identifiers.ComponentFactoryResolver={name:'ComponentFactoryResolver',moduleUrl:CORE,runtime:ComponentFactoryResolver};Identifiers.ComponentFactory={name:'ComponentFactory',moduleUrl:CORE,runtime:ComponentFactory};Identifiers.ComponentRef_={name:'ɵComponentRef_',moduleUrl:CORE,runtime:ɵComponentRef_};Identifiers.ComponentRef={name:'ComponentRef',moduleUrl:CORE,runtime:ComponentRef};Identifiers.NgModuleFactory={name:'NgModuleFactory',moduleUrl:CORE,runtime:NgModuleFactory};Identifiers.NgModuleInjector={name:'ɵNgModuleInjector',moduleUrl:CORE,runtime:ɵNgModuleInjector};Identifiers.RegisterModuleFactoryFn={name:'ɵregisterModuleFactory',moduleUrl:CORE,runtime:ɵregisterModuleFactory};Identifiers.ValueUnwrapper={name:'ɵValueUnwrapper',moduleUrl:CORE,runtime:ɵValueUnwrapper};Identifiers.Injector={name:'Injector',moduleUrl:CORE,runtime:Injector};Identifiers.ViewEncapsulation={name:'ViewEncapsulation',moduleUrl:CORE,runtime:ViewEncapsulation};Identifiers.ViewType={name:'ɵViewType',moduleUrl:CORE,runtime:ɵViewType};Identifiers.ChangeDetectionStrategy={name:'ChangeDetectionStrategy',moduleUrl:CORE,runtime:ChangeDetectionStrategy};Identifiers.StaticNodeDebugInfo={name:'ɵStaticNodeDebugInfo',moduleUrl:CORE,runtime:ɵStaticNodeDebugInfo};Identifiers.DebugContext={name:'ɵDebugContext',moduleUrl:CORE,runtime:ɵDebugContext};Identifiers.Renderer={name:'Renderer',moduleUrl:CORE,runtime:Renderer};Identifiers.SimpleChange={name:'SimpleChange',moduleUrl:CORE,runtime:SimpleChange};Identifiers.ChangeDetectorStatus={name:'ɵChangeDetectorStatus',moduleUrl:CORE,runtime:ɵChangeDetectorStatus};Identifiers.checkBinding={name:'ɵcheckBinding',moduleUrl:CORE,runtime:ɵcheckBinding};Identifiers.checkBindingChange={name:'ɵcheckBindingChange',moduleUrl:CORE,runtime:ɵcheckBindingChange};Identifiers.checkRenderText={name:'ɵcheckRenderText',moduleUrl:CORE,runtime:ɵcheckRenderText};Identifiers.checkRenderProperty={name:'ɵcheckRenderProperty',moduleUrl:CORE,runtime:ɵcheckRenderProperty};Identifiers.checkRenderAttribute={name:'ɵcheckRenderAttribute',moduleUrl:CORE,runtime:ɵcheckRenderAttribute};Identifiers.checkRenderClass={name:'ɵcheckRenderClass',moduleUrl:CORE,runtime:ɵcheckRenderClass};Identifiers.checkRenderStyle={name:'ɵcheckRenderStyle',moduleUrl:CORE,runtime:ɵcheckRenderStyle};Identifiers.devModeEqual={name:'ɵdevModeEqual',moduleUrl:CORE,runtime:ɵdevModeEqual};Identifiers.inlineInterpolate={name:'ɵinlineInterpolate',moduleUrl:CORE,runtime:ɵinlineInterpolate};Identifiers.interpolate={name:'ɵinterpolate',moduleUrl:CORE,runtime:ɵinterpolate};Identifiers.castByValue={name:'ɵcastByValue',moduleUrl:CORE,runtime:ɵcastByValue};Identifiers.EMPTY_ARRAY={name:'ɵEMPTY_ARRAY',moduleUrl:CORE,runtime:ɵEMPTY_ARRAY};Identifiers.EMPTY_MAP={name:'ɵEMPTY_MAP',moduleUrl:CORE,runtime:ɵEMPTY_MAP};Identifiers.createRenderElement={name:'ɵcreateRenderElement',moduleUrl:CORE,runtime:ɵcreateRenderElement};Identifiers.selectOrCreateRenderHostElement={name:'ɵselectOrCreateRenderHostElement',moduleUrl:CORE,runtime:ɵselectOrCreateRenderHostElement};Identifiers.pureProxies=[null,{name:'ɵpureProxy1',moduleUrl:CORE,runtime:ɵpureProxy1},{name:'ɵpureProxy2',moduleUrl:CORE,runtime:ɵpureProxy2},{name:'ɵpureProxy3',moduleUrl:CORE,runtime:ɵpureProxy3},{name:'ɵpureProxy4',moduleUrl:CORE,runtime:ɵpureProxy4},{name:'ɵpureProxy5',moduleUrl:CORE,runtime:ɵpureProxy5},{name:'ɵpureProxy6',moduleUrl:CORE,runtime:ɵpureProxy6},{name:'ɵpureProxy7',moduleUrl:CORE,runtime:ɵpureProxy7},{name:'ɵpureProxy8',moduleUrl:CORE,runtime:ɵpureProxy8},{name:'ɵpureProxy9',moduleUrl:CORE,runtime:ɵpureProxy9},{name:'ɵpureProxy10',moduleUrl:CORE,runtime:ɵpureProxy10}];Identifiers.SecurityContext={name:'SecurityContext',moduleUrl:CORE,runtime:SecurityContext};Identifiers.AnimationKeyframe={name:'ɵAnimationKeyframe',moduleUrl:CORE,runtime:ɵAnimationKeyframe};Identifiers.AnimationStyles={name:'ɵAnimationStyles',moduleUrl:CORE,runtime:ɵAnimationStyles};Identifiers.NoOpAnimationPlayer={name:'ɵNoOpAnimationPlayer',moduleUrl:CORE,runtime:ɵNoOpAnimationPlayer};Identifiers.AnimationGroupPlayer={name:'ɵAnimationGroupPlayer',moduleUrl:CORE,runtime:ɵAnimationGroupPlayer};Identifiers.AnimationSequencePlayer={name:'ɵAnimationSequencePlayer',moduleUrl:CORE,runtime:ɵAnimationSequencePlayer};Identifiers.prepareFinalAnimationStyles={name:'ɵprepareFinalAnimationStyles',moduleUrl:CORE,runtime:ɵprepareFinalAnimationStyles};Identifiers.balanceAnimationKeyframes={name:'ɵbalanceAnimationKeyframes',moduleUrl:CORE,runtime:ɵbalanceAnimationKeyframes};Identifiers.clearStyles={name:'ɵclearStyles',moduleUrl:CORE,runtime:ɵclearStyles};Identifiers.renderStyles={name:'ɵrenderStyles',moduleUrl:CORE,runtime:ɵrenderStyles};Identifiers.collectAndResolveStyles={name:'ɵcollectAndResolveStyles',moduleUrl:CORE,runtime:ɵcollectAndResolveStyles};Identifiers.LOCALE_ID={name:'LOCALE_ID',moduleUrl:CORE,runtime:LOCALE_ID};Identifiers.TRANSLATIONS_FORMAT={name:'TRANSLATIONS_FORMAT',moduleUrl:CORE,runtime:TRANSLATIONS_FORMAT};Identifiers.setBindingDebugInfo={name:'ɵsetBindingDebugInfo',moduleUrl:CORE,runtime:ɵsetBindingDebugInfo};Identifiers.setBindingDebugInfoForChanges={name:'ɵsetBindingDebugInfoForChanges',moduleUrl:CORE,runtime:ɵsetBindingDebugInfoForChanges};Identifiers.AnimationTransition={name:'ɵAnimationTransition',moduleUrl:CORE,runtime:ɵAnimationTransition};// This is just the interface!
Identifiers.InlineArray={name:'InlineArray',moduleUrl:VIEW_UTILS_MODULE_URL,runtime:null};Identifiers.inlineArrays=[{name:'ɵInlineArray2',moduleUrl:CORE,runtime:ɵInlineArray2},{name:'ɵInlineArray2',moduleUrl:CORE,runtime:ɵInlineArray2},{name:'ɵInlineArray4',moduleUrl:CORE,runtime:ɵInlineArray4},{name:'ɵInlineArray8',moduleUrl:CORE,runtime:ɵInlineArray8},{name:'ɵInlineArray16',moduleUrl:CORE,runtime:ɵInlineArray16}];Identifiers.EMPTY_INLINE_ARRAY={name:'ɵEMPTY_INLINE_ARRAY',moduleUrl:CORE,runtime:ɵEMPTY_INLINE_ARRAY};Identifiers.InlineArrayDynamic={name:'ɵInlineArrayDynamic',moduleUrl:CORE,runtime:ɵInlineArrayDynamic};Identifiers.subscribeToRenderElement={name:'ɵsubscribeToRenderElement',moduleUrl:CORE,runtime:ɵsubscribeToRenderElement};Identifiers.createRenderComponentType={name:'ɵcreateRenderComponentType',moduleUrl:CORE,runtime:ɵcreateRenderComponentType};Identifiers.noop={name:'ɵnoop',moduleUrl:CORE,runtime:ɵnoop};Identifiers.viewDef={name:'ɵviewDef',moduleUrl:CORE,runtime:ɵviewDef};Identifiers.elementDef={name:'ɵelementDef',moduleUrl:CORE,runtime:ɵelementDef};Identifiers.anchorDef={name:'ɵanchorDef',moduleUrl:CORE,runtime:ɵanchorDef};Identifiers.textDef={name:'ɵtextDef',moduleUrl:CORE,runtime:ɵtextDef};Identifiers.directiveDef={name:'ɵdirectiveDef',moduleUrl:CORE,runtime:ɵdirectiveDef};Identifiers.providerDef={name:'ɵproviderDef',moduleUrl:CORE,runtime:ɵproviderDef};Identifiers.queryDef={name:'ɵqueryDef',moduleUrl:CORE,runtime:ɵqueryDef};Identifiers.pureArrayDef={name:'ɵpureArrayDef',moduleUrl:CORE,runtime:ɵpureArrayDef};Identifiers.pureObjectDef={name:'ɵpureObjectDef',moduleUrl:CORE,runtime:ɵpureObjectDef};Identifiers.purePipeDef={name:'ɵpurePipeDef',moduleUrl:CORE,runtime:ɵpurePipeDef};Identifiers.pipeDef={name:'ɵpipeDef',moduleUrl:CORE,runtime:ɵpipeDef};Identifiers.nodeValue={name:'ɵnodeValue',moduleUrl:CORE,runtime:ɵnodeValue};Identifiers.ngContentDef={name:'ɵngContentDef',moduleUrl:CORE,runtime:ɵngContentDef};Identifiers.unwrapValue={name:'ɵunwrapValue',moduleUrl:CORE,runtime:ɵunwrapValue};Identifiers.createRendererTypeV2={name:'ɵcreateRendererTypeV2',moduleUrl:CORE,runtime:ɵcreateRendererTypeV2};Identifiers.RendererTypeV2={name:'RendererTypeV2',moduleUrl:CORE,// type only
runtime:null};Identifiers.ViewDefinition={name:'ɵViewDefinition',moduleUrl:CORE,// type only
runtime:null};Identifiers.createComponentFactory={name:'ɵcreateComponentFactory',moduleUrl:CORE,runtime:ɵcreateComponentFactory};/**
 * @param {?} pkg
 * @param {?=} path
 * @param {?=} type
 * @return {?}
 */function assetUrl(pkg){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'src';if(path==null){return'@angular/'+pkg;}else{return'@angular/'+pkg+'/'+type+'/'+path;}}/**
 * @param {?} identifier
 * @return {?}
 */function resolveIdentifier(identifier){var/** @type {?} */name=identifier.name;return ɵreflector.resolveIdentifier(name,identifier.moduleUrl,null,identifier.runtime);}/**
 * @param {?} identifier
 * @return {?}
 */function createIdentifier(identifier){return{reference:resolveIdentifier(identifier)};}/**
 * @param {?} identifier
 * @return {?}
 */function identifierToken(identifier){return{identifier:identifier};}/**
 * @param {?} identifier
 * @return {?}
 */function createIdentifierToken(identifier){return identifierToken(createIdentifier(identifier));}/**
 * @param {?} enumType
 * @param {?} name
 * @return {?}
 */function createEnumIdentifier(enumType,name){var/** @type {?} */resolvedEnum=ɵreflector.resolveEnum(resolveIdentifier(enumType),name);return{reference:resolvedEnum};}/**
 * Temporal switch for the compiler to use the new view engine,
 * until it is fully integrated.
 *
 * Only works in Jit for now.
 */var/** @type {?} */USE_VIEW_ENGINE=new InjectionToken('UseViewEngine');var CompilerConfig=function(){/**
     * @param {?=} __0
     */function CompilerConfig(){var _ref9=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref9$renderTypes=_ref9.renderTypes,renderTypes=_ref9$renderTypes===undefined?new DefaultRenderTypes():_ref9$renderTypes,_ref9$defaultEncapsul=_ref9.defaultEncapsulation,defaultEncapsulation=_ref9$defaultEncapsul===undefined?ViewEncapsulation.Emulated:_ref9$defaultEncapsul,genDebugInfo=_ref9.genDebugInfo,logBindingUpdate=_ref9.logBindingUpdate,_ref9$useJit=_ref9.useJit,useJit=_ref9$useJit===undefined?true:_ref9$useJit,missingTranslation=_ref9.missingTranslation,useViewEngine=_ref9.useViewEngine,enableLegacyTemplate=_ref9.enableLegacyTemplate;_classCallCheck(this,CompilerConfig);this.renderTypes=renderTypes;this.defaultEncapsulation=defaultEncapsulation;this._genDebugInfo=genDebugInfo;this._logBindingUpdate=logBindingUpdate;this.useJit=useJit;this.missingTranslation=missingTranslation;this.useViewEngine=true;this.enableLegacyTemplate=enableLegacyTemplate!==false;}/**
     * @return {?}
     */_createClass(CompilerConfig,[{key:'genDebugInfo',get:function get(){return this._genDebugInfo===void 0?isDevMode():this._genDebugInfo;}/**
     * @return {?}
     */},{key:'logBindingUpdate',get:function get(){return this._logBindingUpdate===void 0?isDevMode():this._logBindingUpdate;}}]);return CompilerConfig;}();/**
 * Types used for the renderer.
 * Can be replaced to specialize the generated output to a specific renderer
 * to help tree shaking.
 * @abstract
 */var RenderTypes=function(){function RenderTypes(){_classCallCheck(this,RenderTypes);}_createClass(RenderTypes,[{key:'renderer',/**
     * @abstract
     * @return {?}
     */value:function renderer(){}/**
     * @abstract
     * @return {?}
     */},{key:'renderText',value:function renderText(){}/**
     * @abstract
     * @return {?}
     */},{key:'renderElement',value:function renderElement(){}/**
     * @abstract
     * @return {?}
     */},{key:'renderComment',value:function renderComment(){}/**
     * @abstract
     * @return {?}
     */},{key:'renderNode',value:function renderNode(){}/**
     * @abstract
     * @return {?}
     */},{key:'renderEvent',value:function renderEvent(){}}]);return RenderTypes;}();var DefaultRenderTypes=function(){function DefaultRenderTypes(){_classCallCheck(this,DefaultRenderTypes);this.renderText=null;this.renderElement=null;this.renderComment=null;this.renderNode=null;this.renderEvent=null;}/**
     * @return {?}
     */_createClass(DefaultRenderTypes,[{key:'renderer',get:function get(){return createIdentifier(Identifiers.Renderer);}}]);return DefaultRenderTypes;}();var ParserError=/**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     */function ParserError(message,input,errLocation,ctxLocation){_classCallCheck(this,ParserError);this.input=input;this.errLocation=errLocation;this.ctxLocation=ctxLocation;this.message='Parser Error: '+message+' '+errLocation+' ['+input+'] in '+ctxLocation;};var ParseSpan=/**
     * @param {?} start
     * @param {?} end
     */function ParseSpan(start,end){_classCallCheck(this,ParseSpan);this.start=start;this.end=end;};var AST=function(){/**
     * @param {?} span
     */function AST(span){_classCallCheck(this,AST);this.span=span;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(AST,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return null;}/**
     * @return {?}
     */},{key:'toString',value:function toString(){return'AST';}}]);return AST;}();/**
 * Represents a quoted expression of the form:
 *
 * quote = prefix `:` uninterpretedExpression
 * prefix = identifier
 * uninterpretedExpression = arbitrary string
 *
 * A quoted expression is meant to be pre-processed by an AST transformer that
 * converts it into another AST that no longer contains quoted expressions.
 * It is meant to allow third-party developers to extend Angular template
 * expression language. The `uninterpretedExpression` part of the quote is
 * therefore not interpreted by the Angular's own expression parser.
 */var Quote=function(_AST){_inherits(Quote,_AST);/**
     * @param {?} span
     * @param {?} prefix
     * @param {?} uninterpretedExpression
     * @param {?} location
     */function Quote(span,prefix,uninterpretedExpression,location){_classCallCheck(this,Quote);var _this12=_possibleConstructorReturn(this,(Quote.__proto__||Object.getPrototypeOf(Quote)).call(this,span));_this12.prefix=prefix;_this12.uninterpretedExpression=uninterpretedExpression;_this12.location=location;return _this12;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Quote,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitQuote(this,context);}/**
     * @return {?}
     */},{key:'toString',value:function toString(){return'Quote';}}]);return Quote;}(AST);var EmptyExpr=function(_AST2){_inherits(EmptyExpr,_AST2);function EmptyExpr(){_classCallCheck(this,EmptyExpr);return _possibleConstructorReturn(this,(EmptyExpr.__proto__||Object.getPrototypeOf(EmptyExpr)).apply(this,arguments));}_createClass(EmptyExpr,[{key:'visit',/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */value:function visit(visitor){// do nothing
var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;}}]);return EmptyExpr;}(AST);var ImplicitReceiver=function(_AST3){_inherits(ImplicitReceiver,_AST3);function ImplicitReceiver(){_classCallCheck(this,ImplicitReceiver);return _possibleConstructorReturn(this,(ImplicitReceiver.__proto__||Object.getPrototypeOf(ImplicitReceiver)).apply(this,arguments));}_createClass(ImplicitReceiver,[{key:'visit',/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitImplicitReceiver(this,context);}}]);return ImplicitReceiver;}(AST);/**
 * Multiple expressions separated by a semicolon.
 */var Chain=function(_AST4){_inherits(Chain,_AST4);/**
     * @param {?} span
     * @param {?} expressions
     */function Chain(span,expressions){_classCallCheck(this,Chain);var _this15=_possibleConstructorReturn(this,(Chain.__proto__||Object.getPrototypeOf(Chain)).call(this,span));_this15.expressions=expressions;return _this15;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Chain,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitChain(this,context);}}]);return Chain;}(AST);var Conditional=function(_AST5){_inherits(Conditional,_AST5);/**
     * @param {?} span
     * @param {?} condition
     * @param {?} trueExp
     * @param {?} falseExp
     */function Conditional(span,condition,trueExp,falseExp){_classCallCheck(this,Conditional);var _this16=_possibleConstructorReturn(this,(Conditional.__proto__||Object.getPrototypeOf(Conditional)).call(this,span));_this16.condition=condition;_this16.trueExp=trueExp;_this16.falseExp=falseExp;return _this16;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Conditional,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitConditional(this,context);}}]);return Conditional;}(AST);var PropertyRead=function(_AST6){_inherits(PropertyRead,_AST6);/**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     */function PropertyRead(span,receiver,name){_classCallCheck(this,PropertyRead);var _this17=_possibleConstructorReturn(this,(PropertyRead.__proto__||Object.getPrototypeOf(PropertyRead)).call(this,span));_this17.receiver=receiver;_this17.name=name;return _this17;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(PropertyRead,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitPropertyRead(this,context);}}]);return PropertyRead;}(AST);var PropertyWrite=function(_AST7){_inherits(PropertyWrite,_AST7);/**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} value
     */function PropertyWrite(span,receiver,name,value){_classCallCheck(this,PropertyWrite);var _this18=_possibleConstructorReturn(this,(PropertyWrite.__proto__||Object.getPrototypeOf(PropertyWrite)).call(this,span));_this18.receiver=receiver;_this18.name=name;_this18.value=value;return _this18;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(PropertyWrite,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitPropertyWrite(this,context);}}]);return PropertyWrite;}(AST);var SafePropertyRead=function(_AST8){_inherits(SafePropertyRead,_AST8);/**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     */function SafePropertyRead(span,receiver,name){_classCallCheck(this,SafePropertyRead);var _this19=_possibleConstructorReturn(this,(SafePropertyRead.__proto__||Object.getPrototypeOf(SafePropertyRead)).call(this,span));_this19.receiver=receiver;_this19.name=name;return _this19;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(SafePropertyRead,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitSafePropertyRead(this,context);}}]);return SafePropertyRead;}(AST);var KeyedRead=function(_AST9){_inherits(KeyedRead,_AST9);/**
     * @param {?} span
     * @param {?} obj
     * @param {?} key
     */function KeyedRead(span,obj,key){_classCallCheck(this,KeyedRead);var _this20=_possibleConstructorReturn(this,(KeyedRead.__proto__||Object.getPrototypeOf(KeyedRead)).call(this,span));_this20.obj=obj;_this20.key=key;return _this20;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(KeyedRead,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitKeyedRead(this,context);}}]);return KeyedRead;}(AST);var KeyedWrite=function(_AST10){_inherits(KeyedWrite,_AST10);/**
     * @param {?} span
     * @param {?} obj
     * @param {?} key
     * @param {?} value
     */function KeyedWrite(span,obj,key,value){_classCallCheck(this,KeyedWrite);var _this21=_possibleConstructorReturn(this,(KeyedWrite.__proto__||Object.getPrototypeOf(KeyedWrite)).call(this,span));_this21.obj=obj;_this21.key=key;_this21.value=value;return _this21;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(KeyedWrite,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitKeyedWrite(this,context);}}]);return KeyedWrite;}(AST);var BindingPipe=function(_AST11){_inherits(BindingPipe,_AST11);/**
     * @param {?} span
     * @param {?} exp
     * @param {?} name
     * @param {?} args
     */function BindingPipe(span,exp,name,args){_classCallCheck(this,BindingPipe);var _this22=_possibleConstructorReturn(this,(BindingPipe.__proto__||Object.getPrototypeOf(BindingPipe)).call(this,span));_this22.exp=exp;_this22.name=name;_this22.args=args;return _this22;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(BindingPipe,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitPipe(this,context);}}]);return BindingPipe;}(AST);var LiteralPrimitive=function(_AST12){_inherits(LiteralPrimitive,_AST12);/**
     * @param {?} span
     * @param {?} value
     */function LiteralPrimitive(span,value){_classCallCheck(this,LiteralPrimitive);var _this23=_possibleConstructorReturn(this,(LiteralPrimitive.__proto__||Object.getPrototypeOf(LiteralPrimitive)).call(this,span));_this23.value=value;return _this23;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(LiteralPrimitive,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitLiteralPrimitive(this,context);}}]);return LiteralPrimitive;}(AST);var LiteralArray=function(_AST13){_inherits(LiteralArray,_AST13);/**
     * @param {?} span
     * @param {?} expressions
     */function LiteralArray(span,expressions){_classCallCheck(this,LiteralArray);var _this24=_possibleConstructorReturn(this,(LiteralArray.__proto__||Object.getPrototypeOf(LiteralArray)).call(this,span));_this24.expressions=expressions;return _this24;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(LiteralArray,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitLiteralArray(this,context);}}]);return LiteralArray;}(AST);var LiteralMap=function(_AST14){_inherits(LiteralMap,_AST14);/**
     * @param {?} span
     * @param {?} keys
     * @param {?} values
     */function LiteralMap(span,keys,values){_classCallCheck(this,LiteralMap);var _this25=_possibleConstructorReturn(this,(LiteralMap.__proto__||Object.getPrototypeOf(LiteralMap)).call(this,span));_this25.keys=keys;_this25.values=values;return _this25;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(LiteralMap,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitLiteralMap(this,context);}}]);return LiteralMap;}(AST);var Interpolation=function(_AST15){_inherits(Interpolation,_AST15);/**
     * @param {?} span
     * @param {?} strings
     * @param {?} expressions
     */function Interpolation(span,strings,expressions){_classCallCheck(this,Interpolation);var _this26=_possibleConstructorReturn(this,(Interpolation.__proto__||Object.getPrototypeOf(Interpolation)).call(this,span));_this26.strings=strings;_this26.expressions=expressions;return _this26;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Interpolation,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitInterpolation(this,context);}}]);return Interpolation;}(AST);var Binary=function(_AST16){_inherits(Binary,_AST16);/**
     * @param {?} span
     * @param {?} operation
     * @param {?} left
     * @param {?} right
     */function Binary(span,operation,left,right){_classCallCheck(this,Binary);var _this27=_possibleConstructorReturn(this,(Binary.__proto__||Object.getPrototypeOf(Binary)).call(this,span));_this27.operation=operation;_this27.left=left;_this27.right=right;return _this27;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Binary,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitBinary(this,context);}}]);return Binary;}(AST);var PrefixNot=function(_AST17){_inherits(PrefixNot,_AST17);/**
     * @param {?} span
     * @param {?} expression
     */function PrefixNot(span,expression){_classCallCheck(this,PrefixNot);var _this28=_possibleConstructorReturn(this,(PrefixNot.__proto__||Object.getPrototypeOf(PrefixNot)).call(this,span));_this28.expression=expression;return _this28;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(PrefixNot,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitPrefixNot(this,context);}}]);return PrefixNot;}(AST);var MethodCall=function(_AST18){_inherits(MethodCall,_AST18);/**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} args
     */function MethodCall(span,receiver,name,args){_classCallCheck(this,MethodCall);var _this29=_possibleConstructorReturn(this,(MethodCall.__proto__||Object.getPrototypeOf(MethodCall)).call(this,span));_this29.receiver=receiver;_this29.name=name;_this29.args=args;return _this29;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(MethodCall,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitMethodCall(this,context);}}]);return MethodCall;}(AST);var SafeMethodCall=function(_AST19){_inherits(SafeMethodCall,_AST19);/**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} args
     */function SafeMethodCall(span,receiver,name,args){_classCallCheck(this,SafeMethodCall);var _this30=_possibleConstructorReturn(this,(SafeMethodCall.__proto__||Object.getPrototypeOf(SafeMethodCall)).call(this,span));_this30.receiver=receiver;_this30.name=name;_this30.args=args;return _this30;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(SafeMethodCall,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitSafeMethodCall(this,context);}}]);return SafeMethodCall;}(AST);var FunctionCall=function(_AST20){_inherits(FunctionCall,_AST20);/**
     * @param {?} span
     * @param {?} target
     * @param {?} args
     */function FunctionCall(span,target,args){_classCallCheck(this,FunctionCall);var _this31=_possibleConstructorReturn(this,(FunctionCall.__proto__||Object.getPrototypeOf(FunctionCall)).call(this,span));_this31.target=target;_this31.args=args;return _this31;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(FunctionCall,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitor.visitFunctionCall(this,context);}}]);return FunctionCall;}(AST);var ASTWithSource=function(_AST21){_inherits(ASTWithSource,_AST21);/**
     * @param {?} ast
     * @param {?} source
     * @param {?} location
     * @param {?} errors
     */function ASTWithSource(ast,source,location,errors){_classCallCheck(this,ASTWithSource);var _this32=_possibleConstructorReturn(this,(ASTWithSource.__proto__||Object.getPrototypeOf(ASTWithSource)).call(this,new ParseSpan(0,isBlank(source)?0:source.length)));_this32.ast=ast;_this32.source=source;_this32.location=location;_this32.errors=errors;return _this32;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(ASTWithSource,[{key:'visit',value:function visit(visitor){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return this.ast.visit(visitor,context);}/**
     * @return {?}
     */},{key:'toString',value:function toString(){return this.source+' in '+this.location;}}]);return ASTWithSource;}(AST);var TemplateBinding=/**
     * @param {?} span
     * @param {?} key
     * @param {?} keyIsVar
     * @param {?} name
     * @param {?} expression
     */function TemplateBinding(span,key,keyIsVar,name,expression){_classCallCheck(this,TemplateBinding);this.span=span;this.key=key;this.keyIsVar=keyIsVar;this.name=name;this.expression=expression;};var RecursiveAstVisitor=function(){function RecursiveAstVisitor(){_classCallCheck(this,RecursiveAstVisitor);}_createClass(RecursiveAstVisitor,[{key:'visitBinary',/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */value:function visitBinary(ast,context){ast.left.visit(this);ast.right.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitChain',value:function visitChain(ast,context){return this.visitAll(ast.expressions,context);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitConditional',value:function visitConditional(ast,context){ast.condition.visit(this);ast.trueExp.visit(this);ast.falseExp.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPipe',value:function visitPipe(ast,context){ast.exp.visit(this);this.visitAll(ast.args,context);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitFunctionCall',value:function visitFunctionCall(ast,context){ast.target.visit(this);this.visitAll(ast.args,context);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitImplicitReceiver',value:function visitImplicitReceiver(ast,context){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInterpolation',value:function visitInterpolation(ast,context){return this.visitAll(ast.expressions,context);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitKeyedRead',value:function visitKeyedRead(ast,context){ast.obj.visit(this);ast.key.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitKeyedWrite',value:function visitKeyedWrite(ast,context){ast.obj.visit(this);ast.key.visit(this);ast.value.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralArray',value:function visitLiteralArray(ast,context){return this.visitAll(ast.expressions,context);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralMap',value:function visitLiteralMap(ast,context){return this.visitAll(ast.values,context);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralPrimitive',value:function visitLiteralPrimitive(ast,context){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitMethodCall',value:function visitMethodCall(ast,context){ast.receiver.visit(this);return this.visitAll(ast.args,context);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPrefixNot',value:function visitPrefixNot(ast,context){ast.expression.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPropertyRead',value:function visitPropertyRead(ast,context){ast.receiver.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPropertyWrite',value:function visitPropertyWrite(ast,context){ast.receiver.visit(this);ast.value.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitSafePropertyRead',value:function visitSafePropertyRead(ast,context){ast.receiver.visit(this);return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitSafeMethodCall',value:function visitSafeMethodCall(ast,context){ast.receiver.visit(this);return this.visitAll(ast.args,context);}/**
     * @param {?} asts
     * @param {?} context
     * @return {?}
     */},{key:'visitAll',value:function visitAll(asts,context){var _this33=this;asts.forEach(function(ast){return ast.visit(_this33,context);});return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitQuote',value:function visitQuote(ast,context){return null;}}]);return RecursiveAstVisitor;}();var AstTransformer=function(){function AstTransformer(){_classCallCheck(this,AstTransformer);}_createClass(AstTransformer,[{key:'visitImplicitReceiver',/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */value:function visitImplicitReceiver(ast,context){return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInterpolation',value:function visitInterpolation(ast,context){return new Interpolation(ast.span,ast.strings,this.visitAll(ast.expressions));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralPrimitive',value:function visitLiteralPrimitive(ast,context){return new LiteralPrimitive(ast.span,ast.value);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPropertyRead',value:function visitPropertyRead(ast,context){return new PropertyRead(ast.span,ast.receiver.visit(this),ast.name);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPropertyWrite',value:function visitPropertyWrite(ast,context){return new PropertyWrite(ast.span,ast.receiver.visit(this),ast.name,ast.value);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitSafePropertyRead',value:function visitSafePropertyRead(ast,context){return new SafePropertyRead(ast.span,ast.receiver.visit(this),ast.name);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitMethodCall',value:function visitMethodCall(ast,context){return new MethodCall(ast.span,ast.receiver.visit(this),ast.name,this.visitAll(ast.args));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitSafeMethodCall',value:function visitSafeMethodCall(ast,context){return new SafeMethodCall(ast.span,ast.receiver.visit(this),ast.name,this.visitAll(ast.args));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitFunctionCall',value:function visitFunctionCall(ast,context){return new FunctionCall(ast.span,ast.target.visit(this),this.visitAll(ast.args));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralArray',value:function visitLiteralArray(ast,context){return new LiteralArray(ast.span,this.visitAll(ast.expressions));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralMap',value:function visitLiteralMap(ast,context){return new LiteralMap(ast.span,ast.keys,this.visitAll(ast.values));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitBinary',value:function visitBinary(ast,context){return new Binary(ast.span,ast.operation,ast.left.visit(this),ast.right.visit(this));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPrefixNot',value:function visitPrefixNot(ast,context){return new PrefixNot(ast.span,ast.expression.visit(this));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitConditional',value:function visitConditional(ast,context){return new Conditional(ast.span,ast.condition.visit(this),ast.trueExp.visit(this),ast.falseExp.visit(this));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPipe',value:function visitPipe(ast,context){return new BindingPipe(ast.span,ast.exp.visit(this),ast.name,this.visitAll(ast.args));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitKeyedRead',value:function visitKeyedRead(ast,context){return new KeyedRead(ast.span,ast.obj.visit(this),ast.key.visit(this));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitKeyedWrite',value:function visitKeyedWrite(ast,context){return new KeyedWrite(ast.span,ast.obj.visit(this),ast.key.visit(this),ast.value.visit(this));}/**
     * @param {?} asts
     * @return {?}
     */},{key:'visitAll',value:function visitAll(asts){var/** @type {?} */res=new Array(asts.length);for(var/** @type {?} */i=0;i<asts.length;++i){res[i]=asts[i].visit(this);}return res;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitChain',value:function visitChain(ast,context){return new Chain(ast.span,this.visitAll(ast.expressions));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitQuote',value:function visitQuote(ast,context){return new Quote(ast.span,ast.prefix,ast.uninterpretedExpression,ast.location);}}]);return AstTransformer;}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var/** @type {?} */$EOF=0;var/** @type {?} */$TAB=9;var/** @type {?} */$LF=10;var/** @type {?} */$VTAB=11;var/** @type {?} */$FF=12;var/** @type {?} */$CR=13;var/** @type {?} */$SPACE=32;var/** @type {?} */$BANG=33;var/** @type {?} */$DQ=34;var/** @type {?} */$HASH=35;var/** @type {?} */$$=36;var/** @type {?} */$PERCENT=37;var/** @type {?} */$AMPERSAND=38;var/** @type {?} */$SQ=39;var/** @type {?} */$LPAREN=40;var/** @type {?} */$RPAREN=41;var/** @type {?} */$STAR=42;var/** @type {?} */$PLUS=43;var/** @type {?} */$COMMA=44;var/** @type {?} */$MINUS=45;var/** @type {?} */$PERIOD=46;var/** @type {?} */$SLASH=47;var/** @type {?} */$COLON=58;var/** @type {?} */$SEMICOLON=59;var/** @type {?} */$LT=60;var/** @type {?} */$EQ=61;var/** @type {?} */$GT=62;var/** @type {?} */$QUESTION=63;var/** @type {?} */$0=48;var/** @type {?} */$9=57;var/** @type {?} */$A=65;var/** @type {?} */$E=69;var/** @type {?} */$F=70;var/** @type {?} */$X=88;var/** @type {?} */$Z=90;var/** @type {?} */$LBRACKET=91;var/** @type {?} */$BACKSLASH=92;var/** @type {?} */$RBRACKET=93;var/** @type {?} */$CARET=94;var/** @type {?} */$_=95;var/** @type {?} */$a=97;var/** @type {?} */$e=101;var/** @type {?} */$f=102;var/** @type {?} */$n=110;var/** @type {?} */$r=114;var/** @type {?} */$t=116;var/** @type {?} */$u=117;var/** @type {?} */$v=118;var/** @type {?} */$x=120;var/** @type {?} */$z=122;var/** @type {?} */$LBRACE=123;var/** @type {?} */$BAR=124;var/** @type {?} */$RBRACE=125;var/** @type {?} */$NBSP=160;var/** @type {?} */$BT=96;/**
 * @param {?} code
 * @return {?}
 */function isWhitespace(code){return code>=$TAB&&code<=$SPACE||code==$NBSP;}/**
 * @param {?} code
 * @return {?}
 */function isDigit(code){return $0<=code&&code<=$9;}/**
 * @param {?} code
 * @return {?}
 */function isAsciiLetter(code){return code>=$a&&code<=$z||code>=$A&&code<=$Z;}/**
 * @param {?} code
 * @return {?}
 */function isAsciiHexDigit(code){return code>=$a&&code<=$f||code>=$A&&code<=$F||isDigit(code);}/**
 * A replacement for \@Injectable to be used in the compiler, so that
 * we don't try to evaluate the metadata in the compiler during AoT.
 * This decorator is enough to make the compiler work with the ReflectiveInjector though.
 * \@Annotation
 * @return {?}
 */function CompilerInjectable(){return function(x){return x;};}/**
 * @param {?} identifier
 * @param {?} value
 * @return {?}
 */function assertArrayOfStrings(identifier,value){if(!isDevMode()||isBlank(value)){return;}if(!Array.isArray(value)){throw new Error('Expected \''+identifier+'\' to be an array of strings.');}for(var/** @type {?} */i=0;i<value.length;i+=1){if(typeof value[i]!=='string'){throw new Error('Expected \''+identifier+'\' to be an array of strings.');}}}var/** @type {?} */INTERPOLATION_BLACKLIST_REGEXPS=[/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//];/**
 * @param {?} identifier
 * @param {?} value
 * @return {?}
 */function assertInterpolationSymbols(identifier,value){if(isPresent(value)&&!(Array.isArray(value)&&value.length==2)){throw new Error('Expected \''+identifier+'\' to be an array, [start, end].');}else if(isDevMode()&&!isBlank(value)){var/** @type {?} */start=value[0];var/** @type {?} */end=value[1];// black list checking
INTERPOLATION_BLACKLIST_REGEXPS.forEach(function(regexp){if(regexp.test(start)||regexp.test(end)){throw new Error('[\''+start+'\', \''+end+'\'] contains unusable interpolation symbol.');}});}}var InterpolationConfig=function(){/**
     * @param {?} start
     * @param {?} end
     */function InterpolationConfig(start,end){_classCallCheck(this,InterpolationConfig);this.start=start;this.end=end;}/**
     * @param {?} markers
     * @return {?}
     */_createClass(InterpolationConfig,null,[{key:'fromArray',value:function fromArray(markers){if(!markers){return DEFAULT_INTERPOLATION_CONFIG;}assertInterpolationSymbols('interpolation',markers);return new InterpolationConfig(markers[0],markers[1]);}}]);return InterpolationConfig;}();var/** @type {?} */DEFAULT_INTERPOLATION_CONFIG=new InterpolationConfig('{{','}}');var TokenType={};TokenType.Character=0;TokenType.Identifier=1;TokenType.Keyword=2;TokenType.String=3;TokenType.Operator=4;TokenType.Number=5;TokenType.Error=6;TokenType[TokenType.Character]="Character";TokenType[TokenType.Identifier]="Identifier";TokenType[TokenType.Keyword]="Keyword";TokenType[TokenType.String]="String";TokenType[TokenType.Operator]="Operator";TokenType[TokenType.Number]="Number";TokenType[TokenType.Error]="Error";var/** @type {?} */KEYWORDS=['var','let','null','undefined','true','false','if','else','this'];var Lexer=function(){function Lexer(){_classCallCheck(this,Lexer);}_createClass(Lexer,[{key:'tokenize',/**
     * @param {?} text
     * @return {?}
     */value:function tokenize(text){var/** @type {?} */scanner=new _Scanner(text);var/** @type {?} */tokens=[];var/** @type {?} */token=scanner.scanToken();while(token!=null){tokens.push(token);token=scanner.scanToken();}return tokens;}}]);return Lexer;}();Lexer.decorators=[{type:CompilerInjectable}];/** @nocollapse */Lexer.ctorParameters=function(){return[];};var Token=function(){/**
     * @param {?} index
     * @param {?} type
     * @param {?} numValue
     * @param {?} strValue
     */function Token(index,type,numValue,strValue){_classCallCheck(this,Token);this.index=index;this.type=type;this.numValue=numValue;this.strValue=strValue;}/**
     * @param {?} code
     * @return {?}
     */_createClass(Token,[{key:'isCharacter',value:function isCharacter(code){return this.type==TokenType.Character&&this.numValue==code;}/**
     * @return {?}
     */},{key:'isNumber',value:function isNumber(){return this.type==TokenType.Number;}/**
     * @return {?}
     */},{key:'isString',value:function isString(){return this.type==TokenType.String;}/**
     * @param {?} operater
     * @return {?}
     */},{key:'isOperator',value:function isOperator(operater){return this.type==TokenType.Operator&&this.strValue==operater;}/**
     * @return {?}
     */},{key:'isIdentifier',value:function isIdentifier(){return this.type==TokenType.Identifier;}/**
     * @return {?}
     */},{key:'isKeyword',value:function isKeyword(){return this.type==TokenType.Keyword;}/**
     * @return {?}
     */},{key:'isKeywordLet',value:function isKeywordLet(){return this.type==TokenType.Keyword&&this.strValue=='let';}/**
     * @return {?}
     */},{key:'isKeywordNull',value:function isKeywordNull(){return this.type==TokenType.Keyword&&this.strValue=='null';}/**
     * @return {?}
     */},{key:'isKeywordUndefined',value:function isKeywordUndefined(){return this.type==TokenType.Keyword&&this.strValue=='undefined';}/**
     * @return {?}
     */},{key:'isKeywordTrue',value:function isKeywordTrue(){return this.type==TokenType.Keyword&&this.strValue=='true';}/**
     * @return {?}
     */},{key:'isKeywordFalse',value:function isKeywordFalse(){return this.type==TokenType.Keyword&&this.strValue=='false';}/**
     * @return {?}
     */},{key:'isKeywordThis',value:function isKeywordThis(){return this.type==TokenType.Keyword&&this.strValue=='this';}/**
     * @return {?}
     */},{key:'isError',value:function isError(){return this.type==TokenType.Error;}/**
     * @return {?}
     */},{key:'toNumber',value:function toNumber(){return this.type==TokenType.Number?this.numValue:-1;}/**
     * @return {?}
     */},{key:'toString',value:function toString(){switch(this.type){case TokenType.Character:case TokenType.Identifier:case TokenType.Keyword:case TokenType.Operator:case TokenType.String:case TokenType.Error:return this.strValue;case TokenType.Number:return this.numValue.toString();default:return null;}}}]);return Token;}();/**
 * @param {?} index
 * @param {?} code
 * @return {?}
 */function newCharacterToken(index,code){return new Token(index,TokenType.Character,code,String.fromCharCode(code));}/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */function newIdentifierToken(index,text){return new Token(index,TokenType.Identifier,0,text);}/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */function newKeywordToken(index,text){return new Token(index,TokenType.Keyword,0,text);}/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */function newOperatorToken(index,text){return new Token(index,TokenType.Operator,0,text);}/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */function newStringToken(index,text){return new Token(index,TokenType.String,0,text);}/**
 * @param {?} index
 * @param {?} n
 * @return {?}
 */function newNumberToken(index,n){return new Token(index,TokenType.Number,n,'');}/**
 * @param {?} index
 * @param {?} message
 * @return {?}
 */function newErrorToken(index,message){return new Token(index,TokenType.Error,0,message);}var/** @type {?} */EOF=new Token(-1,TokenType.Character,0,'');var _Scanner=function(){/**
     * @param {?} input
     */function _Scanner(input){_classCallCheck(this,_Scanner);this.input=input;this.peek=0;this.index=-1;this.length=input.length;this.advance();}/**
     * @return {?}
     */_createClass(_Scanner,[{key:'advance',value:function advance(){this.peek=++this.index>=this.length?$EOF:this.input.charCodeAt(this.index);}/**
     * @return {?}
     */},{key:'scanToken',value:function scanToken(){var/** @type {?} */input=this.input,/** @type {?} */length=this.length;var/** @type {?} */peek=this.peek,/** @type {?} */index=this.index;// Skip whitespace.
while(peek<=$SPACE){if(++index>=length){peek=$EOF;break;}else{peek=input.charCodeAt(index);}}this.peek=peek;this.index=index;if(index>=length){return null;}// Handle identifiers and numbers.
if(isIdentifierStart(peek))return this.scanIdentifier();if(isDigit(peek))return this.scanNumber(index);var/** @type {?} */start=index;switch(peek){case $PERIOD:this.advance();return isDigit(this.peek)?this.scanNumber(start):newCharacterToken(start,$PERIOD);case $LPAREN:case $RPAREN:case $LBRACE:case $RBRACE:case $LBRACKET:case $RBRACKET:case $COMMA:case $COLON:case $SEMICOLON:return this.scanCharacter(start,peek);case $SQ:case $DQ:return this.scanString();case $HASH:case $PLUS:case $MINUS:case $STAR:case $SLASH:case $PERCENT:case $CARET:return this.scanOperator(start,String.fromCharCode(peek));case $QUESTION:return this.scanComplexOperator(start,'?',$PERIOD,'.');case $LT:case $GT:return this.scanComplexOperator(start,String.fromCharCode(peek),$EQ,'=');case $BANG:case $EQ:return this.scanComplexOperator(start,String.fromCharCode(peek),$EQ,'=',$EQ,'=');case $AMPERSAND:return this.scanComplexOperator(start,'&',$AMPERSAND,'&');case $BAR:return this.scanComplexOperator(start,'|',$BAR,'|');case $NBSP:while(isWhitespace(this.peek)){this.advance();}return this.scanToken();}this.advance();return this.error('Unexpected character ['+String.fromCharCode(peek)+']',0);}/**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */},{key:'scanCharacter',value:function scanCharacter(start,code){this.advance();return newCharacterToken(start,code);}/**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */},{key:'scanOperator',value:function scanOperator(start,str){this.advance();return newOperatorToken(start,str);}/**
     * Tokenize a 2/3 char long operator
     *
     * @param {?} start start index in the expression
     * @param {?} one first symbol (always part of the operator)
     * @param {?} twoCode code point for the second symbol
     * @param {?} two second symbol (part of the operator when the second code point matches)
     * @param {?=} threeCode code point for the third symbol
     * @param {?=} three third symbol (part of the operator when provided and matches source expression)
     * @return {?}
     */},{key:'scanComplexOperator',value:function scanComplexOperator(start,one,twoCode,two,threeCode,three){this.advance();var/** @type {?} */str=one;if(this.peek==twoCode){this.advance();str+=two;}if(threeCode!=null&&this.peek==threeCode){this.advance();str+=three;}return newOperatorToken(start,str);}/**
     * @return {?}
     */},{key:'scanIdentifier',value:function scanIdentifier(){var/** @type {?} */start=this.index;this.advance();while(isIdentifierPart(this.peek)){this.advance();}var/** @type {?} */str=this.input.substring(start,this.index);return KEYWORDS.indexOf(str)>-1?newKeywordToken(start,str):newIdentifierToken(start,str);}/**
     * @param {?} start
     * @return {?}
     */},{key:'scanNumber',value:function scanNumber(start){var/** @type {?} */simple=this.index===start;this.advance();// Skip initial digit.
while(true){if(isDigit(this.peek)){}else if(this.peek==$PERIOD){simple=false;}else if(isExponentStart(this.peek)){this.advance();if(isExponentSign(this.peek))this.advance();if(!isDigit(this.peek))return this.error('Invalid exponent',-1);simple=false;}else{break;}this.advance();}var/** @type {?} */str=this.input.substring(start,this.index);var/** @type {?} */value=simple?NumberWrapper.parseIntAutoRadix(str):parseFloat(str);return newNumberToken(start,value);}/**
     * @return {?}
     */},{key:'scanString',value:function scanString(){var/** @type {?} */start=this.index;var/** @type {?} */quote=this.peek;this.advance();// Skip initial quote.
var/** @type {?} */buffer='';var/** @type {?} */marker=this.index;var/** @type {?} */input=this.input;while(this.peek!=quote){if(this.peek==$BACKSLASH){buffer+=input.substring(marker,this.index);this.advance();var/** @type {?} */unescapedCode=void 0;// Workaround for TS2.1-introduced type strictness
this.peek=this.peek;if(this.peek==$u){// 4 character hex code for unicode character.
var/** @type {?} */hex=input.substring(this.index+1,this.index+5);if(/^[0-9a-f]+$/i.test(hex)){unescapedCode=parseInt(hex,16);}else{return this.error('Invalid unicode escape [\\u'+hex+']',0);}for(var/** @type {?} */i=0;i<5;i++){this.advance();}}else{unescapedCode=unescape(this.peek);this.advance();}buffer+=String.fromCharCode(unescapedCode);marker=this.index;}else if(this.peek==$EOF){return this.error('Unterminated quote',0);}else{this.advance();}}var/** @type {?} */last=input.substring(marker,this.index);this.advance();// Skip terminating quote.
return newStringToken(start,buffer+last);}/**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */},{key:'error',value:function error(message,offset){var/** @type {?} */position=this.index+offset;return newErrorToken(position,'Lexer Error: '+message+' at column '+position+' in expression ['+this.input+']');}}]);return _Scanner;}();/**
 * @param {?} code
 * @return {?}
 */function isIdentifierStart(code){return $a<=code&&code<=$z||$A<=code&&code<=$Z||code==$_||code==$$;}/**
 * @param {?} input
 * @return {?}
 */function isIdentifier(input){if(input.length==0)return false;var/** @type {?} */scanner=new _Scanner(input);if(!isIdentifierStart(scanner.peek))return false;scanner.advance();while(scanner.peek!==$EOF){if(!isIdentifierPart(scanner.peek))return false;scanner.advance();}return true;}/**
 * @param {?} code
 * @return {?}
 */function isIdentifierPart(code){return isAsciiLetter(code)||isDigit(code)||code==$_||code==$$;}/**
 * @param {?} code
 * @return {?}
 */function isExponentStart(code){return code==$e||code==$E;}/**
 * @param {?} code
 * @return {?}
 */function isExponentSign(code){return code==$MINUS||code==$PLUS;}/**
 * @param {?} code
 * @return {?}
 */function isQuote(code){return code===$SQ||code===$DQ||code===$BT;}/**
 * @param {?} code
 * @return {?}
 */function unescape(code){switch(code){case $n:return $LF;case $f:return $FF;case $r:return $CR;case $t:return $TAB;case $v:return $VTAB;default:return code;}}var SplitInterpolation=/**
     * @param {?} strings
     * @param {?} expressions
     * @param {?} offsets
     */function SplitInterpolation(strings,expressions,offsets){_classCallCheck(this,SplitInterpolation);this.strings=strings;this.expressions=expressions;this.offsets=offsets;};var TemplateBindingParseResult=/**
     * @param {?} templateBindings
     * @param {?} warnings
     * @param {?} errors
     */function TemplateBindingParseResult(templateBindings,warnings,errors){_classCallCheck(this,TemplateBindingParseResult);this.templateBindings=templateBindings;this.warnings=warnings;this.errors=errors;};/**
 * @param {?} config
 * @return {?}
 */function _createInterpolateRegExp(config){var/** @type {?} */pattern=escapeRegExp(config.start)+'([\\s\\S]*?)'+escapeRegExp(config.end);return new RegExp(pattern,'g');}var Parser=function(){/**
     * @param {?} _lexer
     */function Parser(_lexer){_classCallCheck(this,Parser);this._lexer=_lexer;this.errors=[];}/**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */_createClass(Parser,[{key:'parseAction',value:function parseAction(input,location){var interpolationConfig=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_INTERPOLATION_CONFIG;this._checkNoInterpolation(input,location,interpolationConfig);var/** @type {?} */sourceToLex=this._stripComments(input);var/** @type {?} */tokens=this._lexer.tokenize(this._stripComments(input));var/** @type {?} */ast=new _ParseAST(input,location,tokens,sourceToLex.length,true,this.errors,input.length-sourceToLex.length).parseChain();return new ASTWithSource(ast,input,location,this.errors);}/**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */},{key:'parseBinding',value:function parseBinding(input,location){var interpolationConfig=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_INTERPOLATION_CONFIG;var/** @type {?} */ast=this._parseBindingAst(input,location,interpolationConfig);return new ASTWithSource(ast,input,location,this.errors);}/**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */},{key:'parseSimpleBinding',value:function parseSimpleBinding(input,location){var interpolationConfig=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_INTERPOLATION_CONFIG;var/** @type {?} */ast=this._parseBindingAst(input,location,interpolationConfig);var/** @type {?} */errors=SimpleExpressionChecker.check(ast);if(errors.length>0){this._reportError('Host binding expression cannot contain '+errors.join(' '),input,location);}return new ASTWithSource(ast,input,location,this.errors);}/**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */},{key:'_reportError',value:function _reportError(message,input,errLocation,ctxLocation){this.errors.push(new ParserError(message,input,errLocation,ctxLocation));}/**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */},{key:'_parseBindingAst',value:function _parseBindingAst(input,location,interpolationConfig){// Quotes expressions use 3rd-party expression language. We don't want to use
// our lexer or parser for that, so we check for that ahead of time.
var/** @type {?} */quote=this._parseQuote(input,location);if(isPresent(quote)){return quote;}this._checkNoInterpolation(input,location,interpolationConfig);var/** @type {?} */sourceToLex=this._stripComments(input);var/** @type {?} */tokens=this._lexer.tokenize(sourceToLex);return new _ParseAST(input,location,tokens,sourceToLex.length,false,this.errors,input.length-sourceToLex.length).parseChain();}/**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */},{key:'_parseQuote',value:function _parseQuote(input,location){if(isBlank(input))return null;var/** @type {?} */prefixSeparatorIndex=input.indexOf(':');if(prefixSeparatorIndex==-1)return null;var/** @type {?} */prefix=input.substring(0,prefixSeparatorIndex).trim();if(!isIdentifier(prefix))return null;var/** @type {?} */uninterpretedExpression=input.substring(prefixSeparatorIndex+1);return new Quote(new ParseSpan(0,input.length),prefix,uninterpretedExpression,location);}/**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */},{key:'parseTemplateBindings',value:function parseTemplateBindings(prefixToken,input,location){var/** @type {?} */tokens=this._lexer.tokenize(input);if(prefixToken){// Prefix the tokens with the tokens from prefixToken but have them take no space (0 index).
var/** @type {?} */prefixTokens=this._lexer.tokenize(prefixToken).map(function(t){t.index=0;return t;});tokens.unshift.apply(tokens,_toConsumableArray(prefixTokens));}return new _ParseAST(input,location,tokens,input.length,false,this.errors,0).parseTemplateBindings();}/**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */},{key:'parseInterpolation',value:function parseInterpolation(input,location){var interpolationConfig=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_INTERPOLATION_CONFIG;var/** @type {?} */split=this.splitInterpolation(input,location,interpolationConfig);if(split==null)return null;var/** @type {?} */expressions=[];for(var/** @type {?} */i=0;i<split.expressions.length;++i){var/** @type {?} */expressionText=split.expressions[i];var/** @type {?} */sourceToLex=this._stripComments(expressionText);var/** @type {?} */tokens=this._lexer.tokenize(this._stripComments(split.expressions[i]));var/** @type {?} */ast=new _ParseAST(input,location,tokens,sourceToLex.length,false,this.errors,split.offsets[i]+(expressionText.length-sourceToLex.length)).parseChain();expressions.push(ast);}return new ASTWithSource(new Interpolation(new ParseSpan(0,isBlank(input)?0:input.length),split.strings,expressions),input,location,this.errors);}/**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */},{key:'splitInterpolation',value:function splitInterpolation(input,location){var interpolationConfig=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_INTERPOLATION_CONFIG;var/** @type {?} */regexp=_createInterpolateRegExp(interpolationConfig);var/** @type {?} */parts=input.split(regexp);if(parts.length<=1){return null;}var/** @type {?} */strings=[];var/** @type {?} */expressions=[];var/** @type {?} */offsets=[];var/** @type {?} */offset=0;for(var/** @type {?} */i=0;i<parts.length;i++){var/** @type {?} */part=parts[i];if(i%2===0){// fixed string
strings.push(part);offset+=part.length;}else if(part.trim().length>0){offset+=interpolationConfig.start.length;expressions.push(part);offsets.push(offset);offset+=part.length+interpolationConfig.end.length;}else{this._reportError('Blank expressions are not allowed in interpolated strings',input,'at column '+this._findInterpolationErrorColumn(parts,i,interpolationConfig)+' in',location);expressions.push('$implict');offsets.push(offset);}}return new SplitInterpolation(strings,expressions,offsets);}/**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */},{key:'wrapLiteralPrimitive',value:function wrapLiteralPrimitive(input,location){return new ASTWithSource(new LiteralPrimitive(new ParseSpan(0,isBlank(input)?0:input.length),input),input,location,this.errors);}/**
     * @param {?} input
     * @return {?}
     */},{key:'_stripComments',value:function _stripComments(input){var/** @type {?} */i=this._commentStart(input);return isPresent(i)?input.substring(0,i).trim():input;}/**
     * @param {?} input
     * @return {?}
     */},{key:'_commentStart',value:function _commentStart(input){var/** @type {?} */outerQuote=null;for(var/** @type {?} */i=0;i<input.length-1;i++){var/** @type {?} */char=input.charCodeAt(i);var/** @type {?} */nextChar=input.charCodeAt(i+1);if(char===$SLASH&&nextChar==$SLASH&&isBlank(outerQuote))return i;if(outerQuote===char){outerQuote=null;}else if(isBlank(outerQuote)&&isQuote(char)){outerQuote=char;}}return null;}/**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */},{key:'_checkNoInterpolation',value:function _checkNoInterpolation(input,location,interpolationConfig){var/** @type {?} */regexp=_createInterpolateRegExp(interpolationConfig);var/** @type {?} */parts=input.split(regexp);if(parts.length>1){this._reportError('Got interpolation ('+interpolationConfig.start+interpolationConfig.end+') where expression was expected',input,'at column '+this._findInterpolationErrorColumn(parts,1,interpolationConfig)+' in',location);}}/**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */},{key:'_findInterpolationErrorColumn',value:function _findInterpolationErrorColumn(parts,partInErrIdx,interpolationConfig){var/** @type {?} */errLocation='';for(var/** @type {?} */j=0;j<partInErrIdx;j++){errLocation+=j%2===0?parts[j]:''+interpolationConfig.start+parts[j]+interpolationConfig.end;}return errLocation.length;}}]);return Parser;}();Parser.decorators=[{type:CompilerInjectable}];/** @nocollapse */Parser.ctorParameters=function(){return[{type:Lexer}];};var _ParseAST=function(){/**
     * @param {?} input
     * @param {?} location
     * @param {?} tokens
     * @param {?} inputLength
     * @param {?} parseAction
     * @param {?} errors
     * @param {?} offset
     */function _ParseAST(input,location,tokens,inputLength,parseAction,errors,offset){_classCallCheck(this,_ParseAST);this.input=input;this.location=location;this.tokens=tokens;this.inputLength=inputLength;this.parseAction=parseAction;this.errors=errors;this.offset=offset;this.rparensExpected=0;this.rbracketsExpected=0;this.rbracesExpected=0;this.index=0;}/**
     * @param {?} offset
     * @return {?}
     */_createClass(_ParseAST,[{key:'peek',value:function peek(offset){var/** @type {?} */i=this.index+offset;return i<this.tokens.length?this.tokens[i]:EOF;}/**
     * @return {?}
     */},{key:'span',/**
     * @param {?} start
     * @return {?}
     */value:function span(start){return new ParseSpan(start,this.inputIndex);}/**
     * @return {?}
     */},{key:'advance',value:function advance(){this.index++;}/**
     * @param {?} code
     * @return {?}
     */},{key:'optionalCharacter',value:function optionalCharacter(code){if(this.next.isCharacter(code)){this.advance();return true;}else{return false;}}/**
     * @return {?}
     */},{key:'peekKeywordLet',value:function peekKeywordLet(){return this.next.isKeywordLet();}/**
     * @param {?} code
     * @return {?}
     */},{key:'expectCharacter',value:function expectCharacter(code){if(this.optionalCharacter(code))return;this.error('Missing expected '+String.fromCharCode(code));}/**
     * @param {?} op
     * @return {?}
     */},{key:'optionalOperator',value:function optionalOperator(op){if(this.next.isOperator(op)){this.advance();return true;}else{return false;}}/**
     * @param {?} operator
     * @return {?}
     */},{key:'expectOperator',value:function expectOperator(operator){if(this.optionalOperator(operator))return;this.error('Missing expected operator '+operator);}/**
     * @return {?}
     */},{key:'expectIdentifierOrKeyword',value:function expectIdentifierOrKeyword(){var/** @type {?} */n=this.next;if(!n.isIdentifier()&&!n.isKeyword()){this.error('Unexpected token '+n+', expected identifier or keyword');return'';}this.advance();return n.toString();}/**
     * @return {?}
     */},{key:'expectIdentifierOrKeywordOrString',value:function expectIdentifierOrKeywordOrString(){var/** @type {?} */n=this.next;if(!n.isIdentifier()&&!n.isKeyword()&&!n.isString()){this.error('Unexpected token '+n+', expected identifier, keyword, or string');return'';}this.advance();return n.toString();}/**
     * @return {?}
     */},{key:'parseChain',value:function parseChain(){var/** @type {?} */exprs=[];var/** @type {?} */start=this.inputIndex;while(this.index<this.tokens.length){var/** @type {?} */expr=this.parsePipe();exprs.push(expr);if(this.optionalCharacter($SEMICOLON)){if(!this.parseAction){this.error('Binding expression cannot contain chained expression');}while(this.optionalCharacter($SEMICOLON)){}// read all semicolons
}else if(this.index<this.tokens.length){this.error('Unexpected token \''+this.next+'\'');}}if(exprs.length==0)return new EmptyExpr(this.span(start));if(exprs.length==1)return exprs[0];return new Chain(this.span(start),exprs);}/**
     * @return {?}
     */},{key:'parsePipe',value:function parsePipe(){var/** @type {?} */result=this.parseExpression();if(this.optionalOperator('|')){if(this.parseAction){this.error('Cannot have a pipe in an action expression');}do{var/** @type {?} */name=this.expectIdentifierOrKeyword();var/** @type {?} */args=[];while(this.optionalCharacter($COLON)){args.push(this.parseExpression());}result=new BindingPipe(this.span(result.span.start),result,name,args);}while(this.optionalOperator('|'));}return result;}/**
     * @return {?}
     */},{key:'parseExpression',value:function parseExpression(){return this.parseConditional();}/**
     * @return {?}
     */},{key:'parseConditional',value:function parseConditional(){var/** @type {?} */start=this.inputIndex;var/** @type {?} */result=this.parseLogicalOr();if(this.optionalOperator('?')){var/** @type {?} */yes=this.parsePipe();var/** @type {?} */no=void 0;if(!this.optionalCharacter($COLON)){var/** @type {?} */end=this.inputIndex;var/** @type {?} */expression=this.input.substring(start,end);this.error('Conditional expression '+expression+' requires all 3 expressions');no=new EmptyExpr(this.span(start));}else{no=this.parsePipe();}return new Conditional(this.span(start),result,yes,no);}else{return result;}}/**
     * @return {?}
     */},{key:'parseLogicalOr',value:function parseLogicalOr(){// '||'
var/** @type {?} */result=this.parseLogicalAnd();while(this.optionalOperator('||')){var/** @type {?} */right=this.parseLogicalAnd();result=new Binary(this.span(result.span.start),'||',result,right);}return result;}/**
     * @return {?}
     */},{key:'parseLogicalAnd',value:function parseLogicalAnd(){// '&&'
var/** @type {?} */result=this.parseEquality();while(this.optionalOperator('&&')){var/** @type {?} */right=this.parseEquality();result=new Binary(this.span(result.span.start),'&&',result,right);}return result;}/**
     * @return {?}
     */},{key:'parseEquality',value:function parseEquality(){// '==','!=','===','!=='
var/** @type {?} */result=this.parseRelational();while(this.next.type==TokenType.Operator){var/** @type {?} */operator=this.next.strValue;switch(operator){case'==':case'===':case'!=':case'!==':this.advance();var/** @type {?} */right=this.parseRelational();result=new Binary(this.span(result.span.start),operator,result,right);continue;}break;}return result;}/**
     * @return {?}
     */},{key:'parseRelational',value:function parseRelational(){// '<', '>', '<=', '>='
var/** @type {?} */result=this.parseAdditive();while(this.next.type==TokenType.Operator){var/** @type {?} */operator=this.next.strValue;switch(operator){case'<':case'>':case'<=':case'>=':this.advance();var/** @type {?} */right=this.parseAdditive();result=new Binary(this.span(result.span.start),operator,result,right);continue;}break;}return result;}/**
     * @return {?}
     */},{key:'parseAdditive',value:function parseAdditive(){// '+', '-'
var/** @type {?} */result=this.parseMultiplicative();while(this.next.type==TokenType.Operator){var/** @type {?} */operator=this.next.strValue;switch(operator){case'+':case'-':this.advance();var/** @type {?} */right=this.parseMultiplicative();result=new Binary(this.span(result.span.start),operator,result,right);continue;}break;}return result;}/**
     * @return {?}
     */},{key:'parseMultiplicative',value:function parseMultiplicative(){// '*', '%', '/'
var/** @type {?} */result=this.parsePrefix();while(this.next.type==TokenType.Operator){var/** @type {?} */operator=this.next.strValue;switch(operator){case'*':case'%':case'/':this.advance();var/** @type {?} */right=this.parsePrefix();result=new Binary(this.span(result.span.start),operator,result,right);continue;}break;}return result;}/**
     * @return {?}
     */},{key:'parsePrefix',value:function parsePrefix(){if(this.next.type==TokenType.Operator){var/** @type {?} */start=this.inputIndex;var/** @type {?} */operator=this.next.strValue;var/** @type {?} */result=void 0;switch(operator){case'+':this.advance();return this.parsePrefix();case'-':this.advance();result=this.parsePrefix();return new Binary(this.span(start),operator,new LiteralPrimitive(new ParseSpan(start,start),0),result);case'!':this.advance();result=this.parsePrefix();return new PrefixNot(this.span(start),result);}}return this.parseCallChain();}/**
     * @return {?}
     */},{key:'parseCallChain',value:function parseCallChain(){var/** @type {?} */result=this.parsePrimary();while(true){if(this.optionalCharacter($PERIOD)){result=this.parseAccessMemberOrMethodCall(result,false);}else if(this.optionalOperator('?.')){result=this.parseAccessMemberOrMethodCall(result,true);}else if(this.optionalCharacter($LBRACKET)){this.rbracketsExpected++;var/** @type {?} */key=this.parsePipe();this.rbracketsExpected--;this.expectCharacter($RBRACKET);if(this.optionalOperator('=')){var/** @type {?} */value=this.parseConditional();result=new KeyedWrite(this.span(result.span.start),result,key,value);}else{result=new KeyedRead(this.span(result.span.start),result,key);}}else if(this.optionalCharacter($LPAREN)){this.rparensExpected++;var/** @type {?} */args=this.parseCallArguments();this.rparensExpected--;this.expectCharacter($RPAREN);result=new FunctionCall(this.span(result.span.start),result,args);}else{return result;}}}/**
     * @return {?}
     */},{key:'parsePrimary',value:function parsePrimary(){var/** @type {?} */start=this.inputIndex;if(this.optionalCharacter($LPAREN)){this.rparensExpected++;var/** @type {?} */result=this.parsePipe();this.rparensExpected--;this.expectCharacter($RPAREN);return result;}else if(this.next.isKeywordNull()){this.advance();return new LiteralPrimitive(this.span(start),null);}else if(this.next.isKeywordUndefined()){this.advance();return new LiteralPrimitive(this.span(start),void 0);}else if(this.next.isKeywordTrue()){this.advance();return new LiteralPrimitive(this.span(start),true);}else if(this.next.isKeywordFalse()){this.advance();return new LiteralPrimitive(this.span(start),false);}else if(this.next.isKeywordThis()){this.advance();return new ImplicitReceiver(this.span(start));}else if(this.optionalCharacter($LBRACKET)){this.rbracketsExpected++;var/** @type {?} */elements=this.parseExpressionList($RBRACKET);this.rbracketsExpected--;this.expectCharacter($RBRACKET);return new LiteralArray(this.span(start),elements);}else if(this.next.isCharacter($LBRACE)){return this.parseLiteralMap();}else if(this.next.isIdentifier()){return this.parseAccessMemberOrMethodCall(new ImplicitReceiver(this.span(start)),false);}else if(this.next.isNumber()){var/** @type {?} */value=this.next.toNumber();this.advance();return new LiteralPrimitive(this.span(start),value);}else if(this.next.isString()){var/** @type {?} */literalValue=this.next.toString();this.advance();return new LiteralPrimitive(this.span(start),literalValue);}else if(this.index>=this.tokens.length){this.error('Unexpected end of expression: '+this.input);return new EmptyExpr(this.span(start));}else{this.error('Unexpected token '+this.next);return new EmptyExpr(this.span(start));}}/**
     * @param {?} terminator
     * @return {?}
     */},{key:'parseExpressionList',value:function parseExpressionList(terminator){var/** @type {?} */result=[];if(!this.next.isCharacter(terminator)){do{result.push(this.parsePipe());}while(this.optionalCharacter($COMMA));}return result;}/**
     * @return {?}
     */},{key:'parseLiteralMap',value:function parseLiteralMap(){var/** @type {?} */keys=[];var/** @type {?} */values=[];var/** @type {?} */start=this.inputIndex;this.expectCharacter($LBRACE);if(!this.optionalCharacter($RBRACE)){this.rbracesExpected++;do{var/** @type {?} */key=this.expectIdentifierOrKeywordOrString();keys.push(key);this.expectCharacter($COLON);values.push(this.parsePipe());}while(this.optionalCharacter($COMMA));this.rbracesExpected--;this.expectCharacter($RBRACE);}return new LiteralMap(this.span(start),keys,values);}/**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */},{key:'parseAccessMemberOrMethodCall',value:function parseAccessMemberOrMethodCall(receiver){var isSafe=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var/** @type {?} */start=receiver.span.start;var/** @type {?} */id=this.expectIdentifierOrKeyword();if(this.optionalCharacter($LPAREN)){this.rparensExpected++;var/** @type {?} */args=this.parseCallArguments();this.expectCharacter($RPAREN);this.rparensExpected--;var/** @type {?} */span=this.span(start);return isSafe?new SafeMethodCall(span,receiver,id,args):new MethodCall(span,receiver,id,args);}else{if(isSafe){if(this.optionalOperator('=')){this.error('The \'?.\' operator cannot be used in the assignment');return new EmptyExpr(this.span(start));}else{return new SafePropertyRead(this.span(start),receiver,id);}}else{if(this.optionalOperator('=')){if(!this.parseAction){this.error('Bindings cannot contain assignments');return new EmptyExpr(this.span(start));}var/** @type {?} */value=this.parseConditional();return new PropertyWrite(this.span(start),receiver,id,value);}else{return new PropertyRead(this.span(start),receiver,id);}}}}/**
     * @return {?}
     */},{key:'parseCallArguments',value:function parseCallArguments(){if(this.next.isCharacter($RPAREN))return[];var/** @type {?} */positionals=[];do{positionals.push(this.parsePipe());}while(this.optionalCharacter($COMMA));return positionals;}/**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */},{key:'expectTemplateBindingKey',value:function expectTemplateBindingKey(){var/** @type {?} */result='';var/** @type {?} */operatorFound=false;do{result+=this.expectIdentifierOrKeywordOrString();operatorFound=this.optionalOperator('-');if(operatorFound){result+='-';}}while(operatorFound);return result.toString();}/**
     * @return {?}
     */},{key:'parseTemplateBindings',value:function parseTemplateBindings(){var/** @type {?} */bindings=[];var/** @type {?} */prefix=null;var/** @type {?} */warnings=[];while(this.index<this.tokens.length){var/** @type {?} */start=this.inputIndex;var/** @type {?} */keyIsVar=this.peekKeywordLet();if(keyIsVar){this.advance();}var/** @type {?} */key=this.expectTemplateBindingKey();if(!keyIsVar){if(prefix==null){prefix=key;}else{key=prefix+key[0].toUpperCase()+key.substring(1);}}this.optionalCharacter($COLON);var/** @type {?} */name=null;var/** @type {?} */expression=null;if(keyIsVar){if(this.optionalOperator('=')){name=this.expectTemplateBindingKey();}else{name='\$implicit';}}else if(this.next!==EOF&&!this.peekKeywordLet()){var/** @type {?} */_start=this.inputIndex;var/** @type {?} */ast=this.parsePipe();var/** @type {?} */source=this.input.substring(_start-this.offset,this.inputIndex-this.offset);expression=new ASTWithSource(ast,source,this.location,this.errors);}bindings.push(new TemplateBinding(this.span(start),key,keyIsVar,name,expression));if(!this.optionalCharacter($SEMICOLON)){this.optionalCharacter($COMMA);}}return new TemplateBindingParseResult(bindings,warnings,this.errors);}/**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */},{key:'error',value:function error(message){var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;this.errors.push(new ParserError(message,this.input,this.locationText(index),this.location));this.skip();}/**
     * @param {?=} index
     * @return {?}
     */},{key:'locationText',value:function locationText(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(isBlank(index))index=this.index;return index<this.tokens.length?'at column '+(this.tokens[index].index+1)+' in':'at the end of the expression';}/**
     * @return {?}
     */},{key:'skip',value:function skip(){var/** @type {?} */n=this.next;while(this.index<this.tokens.length&&!n.isCharacter($SEMICOLON)&&(this.rparensExpected<=0||!n.isCharacter($RPAREN))&&(this.rbracesExpected<=0||!n.isCharacter($RBRACE))&&(this.rbracketsExpected<=0||!n.isCharacter($RBRACKET))){if(this.next.isError()){this.errors.push(new ParserError(this.next.toString(),this.input,this.locationText(),this.location));}this.advance();n=this.next;}}},{key:'next',get:function get(){return this.peek(0);}/**
     * @return {?}
     */},{key:'inputIndex',get:function get(){return this.index<this.tokens.length?this.next.index+this.offset:this.inputLength+this.offset;}}]);return _ParseAST;}();var SimpleExpressionChecker=function(){function SimpleExpressionChecker(){_classCallCheck(this,SimpleExpressionChecker);this.errors=[];}/**
     * @param {?} ast
     * @return {?}
     */_createClass(SimpleExpressionChecker,[{key:'visitImplicitReceiver',/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */value:function visitImplicitReceiver(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInterpolation',value:function visitInterpolation(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralPrimitive',value:function visitLiteralPrimitive(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPropertyRead',value:function visitPropertyRead(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPropertyWrite',value:function visitPropertyWrite(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitSafePropertyRead',value:function visitSafePropertyRead(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitMethodCall',value:function visitMethodCall(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitSafeMethodCall',value:function visitSafeMethodCall(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitFunctionCall',value:function visitFunctionCall(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralArray',value:function visitLiteralArray(ast,context){this.visitAll(ast.expressions);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralMap',value:function visitLiteralMap(ast,context){this.visitAll(ast.values);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitBinary',value:function visitBinary(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPrefixNot',value:function visitPrefixNot(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitConditional',value:function visitConditional(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitPipe',value:function visitPipe(ast,context){this.errors.push('pipes');}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitKeyedRead',value:function visitKeyedRead(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitKeyedWrite',value:function visitKeyedWrite(ast,context){}/**
     * @param {?} asts
     * @return {?}
     */},{key:'visitAll',value:function visitAll(asts){var _this34=this;return asts.map(function(node){return node.visit(_this34);});}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitChain',value:function visitChain(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitQuote',value:function visitQuote(ast,context){}}],[{key:'check',value:function check(ast){var/** @type {?} */s=new SimpleExpressionChecker();ast.visit(s);return s.errors;}}]);return SimpleExpressionChecker;}();var ParseLocation=function(){/**
     * @param {?} file
     * @param {?} offset
     * @param {?} line
     * @param {?} col
     */function ParseLocation(file,offset,line,col){_classCallCheck(this,ParseLocation);this.file=file;this.offset=offset;this.line=line;this.col=col;}/**
     * @return {?}
     */_createClass(ParseLocation,[{key:'toString',value:function toString(){return isPresent(this.offset)?this.file.url+'@'+this.line+':'+this.col:this.file.url;}/**
     * @param {?} delta
     * @return {?}
     */},{key:'moveBy',value:function moveBy(delta){var/** @type {?} */source=this.file.content;var/** @type {?} */len=source.length;var/** @type {?} */offset=this.offset;var/** @type {?} */line=this.line;var/** @type {?} */col=this.col;while(offset>0&&delta<0){offset--;delta++;var/** @type {?} */ch=source.charCodeAt(offset);if(ch==$LF){line--;var/** @type {?} */priorLine=source.substr(0,offset-1).lastIndexOf(String.fromCharCode($LF));col=priorLine>0?offset-priorLine:offset;}else{col--;}}while(offset<len&&delta>0){var/** @type {?} */_ch=source.charCodeAt(offset);offset++;delta--;if(_ch==$LF){line++;col=0;}else{col++;}}return new ParseLocation(this.file,offset,line,col);}/**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */},{key:'getContext',value:function getContext(maxChars,maxLines){var/** @type {?} */content=this.file.content;var/** @type {?} */startOffset=this.offset;if(isPresent(startOffset)){if(startOffset>content.length-1){startOffset=content.length-1;}var/** @type {?} */endOffset=startOffset;var/** @type {?} */ctxChars=0;var/** @type {?} */ctxLines=0;while(ctxChars<maxChars&&startOffset>0){startOffset--;ctxChars++;if(content[startOffset]=='\n'){if(++ctxLines==maxLines){break;}}}ctxChars=0;ctxLines=0;while(ctxChars<maxChars&&endOffset<content.length-1){endOffset++;ctxChars++;if(content[endOffset]=='\n'){if(++ctxLines==maxLines){break;}}}return{before:content.substring(startOffset,this.offset),after:content.substring(this.offset,endOffset+1)};}return null;}}]);return ParseLocation;}();var ParseSourceFile=/**
     * @param {?} content
     * @param {?} url
     */function ParseSourceFile(content,url){_classCallCheck(this,ParseSourceFile);this.content=content;this.url=url;};var ParseSourceSpan=function(){/**
     * @param {?} start
     * @param {?} end
     * @param {?=} details
     */function ParseSourceSpan(start,end){var details=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;_classCallCheck(this,ParseSourceSpan);this.start=start;this.end=end;this.details=details;}/**
     * @return {?}
     */_createClass(ParseSourceSpan,[{key:'toString',value:function toString(){return this.start.file.content.substring(this.start.offset,this.end.offset);}}]);return ParseSourceSpan;}();var ParseErrorLevel={};ParseErrorLevel.WARNING=0;ParseErrorLevel.FATAL=1;ParseErrorLevel[ParseErrorLevel.WARNING]="WARNING";ParseErrorLevel[ParseErrorLevel.FATAL]="FATAL";var ParseError=function(){/**
     * @param {?} span
     * @param {?} msg
     * @param {?=} level
     */function ParseError(span,msg){var level=arguments.length>2&&arguments[2]!==undefined?arguments[2]:ParseErrorLevel.FATAL;_classCallCheck(this,ParseError);this.span=span;this.msg=msg;this.level=level;}/**
     * @return {?}
     */_createClass(ParseError,[{key:'toString',value:function toString(){var/** @type {?} */ctx=this.span.start.getContext(100,3);var/** @type {?} */contextStr=ctx?' ("'+ctx.before+'[ERROR ->]'+ctx.after+'")':'';var/** @type {?} */details=this.span.details?', '+this.span.details:'';return''+this.msg+contextStr+': '+this.span.start+details;}}]);return ParseError;}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Text=function(){/**
     * @param {?} value
     * @param {?} sourceSpan
     */function Text(value,sourceSpan){_classCallCheck(this,Text);this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Text,[{key:'visit',value:function visit(visitor,context){return visitor.visitText(this,context);}}]);return Text;}();var Expansion=function(){/**
     * @param {?} switchValue
     * @param {?} type
     * @param {?} cases
     * @param {?} sourceSpan
     * @param {?} switchValueSourceSpan
     */function Expansion(switchValue,type,cases,sourceSpan,switchValueSourceSpan){_classCallCheck(this,Expansion);this.switchValue=switchValue;this.type=type;this.cases=cases;this.sourceSpan=sourceSpan;this.switchValueSourceSpan=switchValueSourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Expansion,[{key:'visit',value:function visit(visitor,context){return visitor.visitExpansion(this,context);}}]);return Expansion;}();var ExpansionCase=function(){/**
     * @param {?} value
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} valueSourceSpan
     * @param {?} expSourceSpan
     */function ExpansionCase(value,expression,sourceSpan,valueSourceSpan,expSourceSpan){_classCallCheck(this,ExpansionCase);this.value=value;this.expression=expression;this.sourceSpan=sourceSpan;this.valueSourceSpan=valueSourceSpan;this.expSourceSpan=expSourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ExpansionCase,[{key:'visit',value:function visit(visitor,context){return visitor.visitExpansionCase(this,context);}}]);return ExpansionCase;}();var Attribute$1=function(){/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?=} valueSpan
     */function Attribute$1(name,value,sourceSpan,valueSpan){_classCallCheck(this,Attribute$1);this.name=name;this.value=value;this.sourceSpan=sourceSpan;this.valueSpan=valueSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Attribute$1,[{key:'visit',value:function visit(visitor,context){return visitor.visitAttribute(this,context);}}]);return Attribute$1;}();var Element=function(){/**
     * @param {?} name
     * @param {?} attrs
     * @param {?} children
     * @param {?} sourceSpan
     * @param {?} startSourceSpan
     * @param {?} endSourceSpan
     */function Element(name,attrs,children,sourceSpan,startSourceSpan,endSourceSpan){_classCallCheck(this,Element);this.name=name;this.attrs=attrs;this.children=children;this.sourceSpan=sourceSpan;this.startSourceSpan=startSourceSpan;this.endSourceSpan=endSourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Element,[{key:'visit',value:function visit(visitor,context){return visitor.visitElement(this,context);}}]);return Element;}();var Comment=function(){/**
     * @param {?} value
     * @param {?} sourceSpan
     */function Comment(value,sourceSpan){_classCallCheck(this,Comment);this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Comment,[{key:'visit',value:function visit(visitor,context){return visitor.visitComment(this,context);}}]);return Comment;}();/**
 * @param {?} visitor
 * @param {?} nodes
 * @param {?=} context
 * @return {?}
 */function visitAll(visitor,nodes){var context=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var/** @type {?} */result=[];var/** @type {?} */visit=visitor.visit?function(ast){return visitor.visit(ast,context)||ast.visit(visitor,context);}:function(ast){return ast.visit(visitor,context);};nodes.forEach(function(ast){var/** @type {?} */astResult=visit(ast);if(astResult){result.push(astResult);}});return result;}var TokenType$1={};TokenType$1.TAG_OPEN_START=0;TokenType$1.TAG_OPEN_END=1;TokenType$1.TAG_OPEN_END_VOID=2;TokenType$1.TAG_CLOSE=3;TokenType$1.TEXT=4;TokenType$1.ESCAPABLE_RAW_TEXT=5;TokenType$1.RAW_TEXT=6;TokenType$1.COMMENT_START=7;TokenType$1.COMMENT_END=8;TokenType$1.CDATA_START=9;TokenType$1.CDATA_END=10;TokenType$1.ATTR_NAME=11;TokenType$1.ATTR_VALUE=12;TokenType$1.DOC_TYPE=13;TokenType$1.EXPANSION_FORM_START=14;TokenType$1.EXPANSION_CASE_VALUE=15;TokenType$1.EXPANSION_CASE_EXP_START=16;TokenType$1.EXPANSION_CASE_EXP_END=17;TokenType$1.EXPANSION_FORM_END=18;TokenType$1.EOF=19;TokenType$1[TokenType$1.TAG_OPEN_START]="TAG_OPEN_START";TokenType$1[TokenType$1.TAG_OPEN_END]="TAG_OPEN_END";TokenType$1[TokenType$1.TAG_OPEN_END_VOID]="TAG_OPEN_END_VOID";TokenType$1[TokenType$1.TAG_CLOSE]="TAG_CLOSE";TokenType$1[TokenType$1.TEXT]="TEXT";TokenType$1[TokenType$1.ESCAPABLE_RAW_TEXT]="ESCAPABLE_RAW_TEXT";TokenType$1[TokenType$1.RAW_TEXT]="RAW_TEXT";TokenType$1[TokenType$1.COMMENT_START]="COMMENT_START";TokenType$1[TokenType$1.COMMENT_END]="COMMENT_END";TokenType$1[TokenType$1.CDATA_START]="CDATA_START";TokenType$1[TokenType$1.CDATA_END]="CDATA_END";TokenType$1[TokenType$1.ATTR_NAME]="ATTR_NAME";TokenType$1[TokenType$1.ATTR_VALUE]="ATTR_VALUE";TokenType$1[TokenType$1.DOC_TYPE]="DOC_TYPE";TokenType$1[TokenType$1.EXPANSION_FORM_START]="EXPANSION_FORM_START";TokenType$1[TokenType$1.EXPANSION_CASE_VALUE]="EXPANSION_CASE_VALUE";TokenType$1[TokenType$1.EXPANSION_CASE_EXP_START]="EXPANSION_CASE_EXP_START";TokenType$1[TokenType$1.EXPANSION_CASE_EXP_END]="EXPANSION_CASE_EXP_END";TokenType$1[TokenType$1.EXPANSION_FORM_END]="EXPANSION_FORM_END";TokenType$1[TokenType$1.EOF]="EOF";var Token$1=/**
     * @param {?} type
     * @param {?} parts
     * @param {?} sourceSpan
     */function Token$1(type,parts,sourceSpan){_classCallCheck(this,Token$1);this.type=type;this.parts=parts;this.sourceSpan=sourceSpan;};var TokenError=function(_ParseError){_inherits(TokenError,_ParseError);/**
     * @param {?} errorMsg
     * @param {?} tokenType
     * @param {?} span
     */function TokenError(errorMsg,tokenType,span){_classCallCheck(this,TokenError);var _this35=_possibleConstructorReturn(this,(TokenError.__proto__||Object.getPrototypeOf(TokenError)).call(this,span,errorMsg));_this35.tokenType=tokenType;return _this35;}return TokenError;}(ParseError);var TokenizeResult=/**
     * @param {?} tokens
     * @param {?} errors
     */function TokenizeResult(tokens,errors){_classCallCheck(this,TokenizeResult);this.tokens=tokens;this.errors=errors;};/**
 * @param {?} source
 * @param {?} url
 * @param {?} getTagDefinition
 * @param {?=} tokenizeExpansionForms
 * @param {?=} interpolationConfig
 * @return {?}
 */function tokenize(source,url,getTagDefinition){var tokenizeExpansionForms=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var interpolationConfig=arguments.length>4&&arguments[4]!==undefined?arguments[4]:DEFAULT_INTERPOLATION_CONFIG;return new _Tokenizer(new ParseSourceFile(source,url),getTagDefinition,tokenizeExpansionForms,interpolationConfig).tokenize();}var/** @type {?} */_CR_OR_CRLF_REGEXP=/\r\n?/g;/**
 * @param {?} charCode
 * @return {?}
 */function _unexpectedCharacterErrorMsg(charCode){var/** @type {?} */char=charCode===$EOF?'EOF':String.fromCharCode(charCode);return'Unexpected character "'+char+'"';}/**
 * @param {?} entitySrc
 * @return {?}
 */function _unknownEntityErrorMsg(entitySrc){return'Unknown entity "'+entitySrc+'" - use the "&#<decimal>;" or  "&#x<hex>;" syntax';}var _ControlFlowError=/**
     * @param {?} error
     */function _ControlFlowError(error){_classCallCheck(this,_ControlFlowError);this.error=error;};var _Tokenizer=function(){/**
     * @param {?} _file The html source
     * @param {?} _getTagDefinition
     * @param {?} _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
     * @param {?=} _interpolationConfig
     */function _Tokenizer(_file,_getTagDefinition,_tokenizeIcu){var _interpolationConfig=arguments.length>3&&arguments[3]!==undefined?arguments[3]:DEFAULT_INTERPOLATION_CONFIG;_classCallCheck(this,_Tokenizer);this._file=_file;this._getTagDefinition=_getTagDefinition;this._tokenizeIcu=_tokenizeIcu;this._interpolationConfig=_interpolationConfig;this._peek=-1;this._nextPeek=-1;this._index=-1;this._line=0;this._column=-1;this._expansionCaseStack=[];this._inInterpolation=false;this.tokens=[];this.errors=[];this._input=_file.content;this._length=_file.content.length;this._advance();}/**
     * @param {?} content
     * @return {?}
     */_createClass(_Tokenizer,[{key:'_processCarriageReturns',value:function _processCarriageReturns(content){// http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
// In order to keep the original position in the source, we can not
// pre-process it.
// Instead CRs are processed right before instantiating the tokens.
return content.replace(_CR_OR_CRLF_REGEXP,'\n');}/**
     * @return {?}
     */},{key:'tokenize',value:function tokenize(){while(this._peek!==$EOF){var/** @type {?} */start=this._getLocation();try{if(this._attemptCharCode($LT)){if(this._attemptCharCode($BANG)){if(this._attemptCharCode($LBRACKET)){this._consumeCdata(start);}else if(this._attemptCharCode($MINUS)){this._consumeComment(start);}else{this._consumeDocType(start);}}else if(this._attemptCharCode($SLASH)){this._consumeTagClose(start);}else{this._consumeTagOpen(start);}}else if(!(this._tokenizeIcu&&this._tokenizeExpansionForm())){this._consumeText();}}catch(e){if(e instanceof _ControlFlowError){this.errors.push(e.error);}else{throw e;}}}this._beginToken(TokenType$1.EOF);this._endToken([]);return new TokenizeResult(mergeTextTokens(this.tokens),this.errors);}/**
     * \@internal
     * @return {?}
     */},{key:'_tokenizeExpansionForm',value:function _tokenizeExpansionForm(){if(isExpansionFormStart(this._input,this._index,this._interpolationConfig)){this._consumeExpansionFormStart();return true;}if(isExpansionCaseStart(this._peek)&&this._isInExpansionForm()){this._consumeExpansionCaseStart();return true;}if(this._peek===$RBRACE){if(this._isInExpansionCase()){this._consumeExpansionCaseEnd();return true;}if(this._isInExpansionForm()){this._consumeExpansionFormEnd();return true;}}return false;}/**
     * @return {?}
     */},{key:'_getLocation',value:function _getLocation(){return new ParseLocation(this._file,this._index,this._line,this._column);}/**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */},{key:'_getSpan',value:function _getSpan(){var start=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._getLocation();var end=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this._getLocation();return new ParseSourceSpan(start,end);}/**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */},{key:'_beginToken',value:function _beginToken(type){var start=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this._getLocation();this._currentTokenStart=start;this._currentTokenType=type;}/**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */},{key:'_endToken',value:function _endToken(parts){var end=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this._getLocation();var/** @type {?} */token=new Token$1(this._currentTokenType,parts,new ParseSourceSpan(this._currentTokenStart,end));this.tokens.push(token);this._currentTokenStart=null;this._currentTokenType=null;return token;}/**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */},{key:'_createError',value:function _createError(msg,span){if(this._isInExpansionForm()){msg+=' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)';}var/** @type {?} */error=new TokenError(msg,this._currentTokenType,span);this._currentTokenStart=null;this._currentTokenType=null;return new _ControlFlowError(error);}/**
     * @return {?}
     */},{key:'_advance',value:function _advance(){if(this._index>=this._length){throw this._createError(_unexpectedCharacterErrorMsg($EOF),this._getSpan());}if(this._peek===$LF){this._line++;this._column=0;}else if(this._peek!==$LF&&this._peek!==$CR){this._column++;}this._index++;this._peek=this._index>=this._length?$EOF:this._input.charCodeAt(this._index);this._nextPeek=this._index+1>=this._length?$EOF:this._input.charCodeAt(this._index+1);}/**
     * @param {?} charCode
     * @return {?}
     */},{key:'_attemptCharCode',value:function _attemptCharCode(charCode){if(this._peek===charCode){this._advance();return true;}return false;}/**
     * @param {?} charCode
     * @return {?}
     */},{key:'_attemptCharCodeCaseInsensitive',value:function _attemptCharCodeCaseInsensitive(charCode){if(compareCharCodeCaseInsensitive(this._peek,charCode)){this._advance();return true;}return false;}/**
     * @param {?} charCode
     * @return {?}
     */},{key:'_requireCharCode',value:function _requireCharCode(charCode){var/** @type {?} */location=this._getLocation();if(!this._attemptCharCode(charCode)){throw this._createError(_unexpectedCharacterErrorMsg(this._peek),this._getSpan(location,location));}}/**
     * @param {?} chars
     * @return {?}
     */},{key:'_attemptStr',value:function _attemptStr(chars){var/** @type {?} */len=chars.length;if(this._index+len>this._length){return false;}var/** @type {?} */initialPosition=this._savePosition();for(var/** @type {?} */i=0;i<len;i++){if(!this._attemptCharCode(chars.charCodeAt(i))){// If attempting to parse the string fails, we want to reset the parser
// to where it was before the attempt
this._restorePosition(initialPosition);return false;}}return true;}/**
     * @param {?} chars
     * @return {?}
     */},{key:'_attemptStrCaseInsensitive',value:function _attemptStrCaseInsensitive(chars){for(var/** @type {?} */i=0;i<chars.length;i++){if(!this._attemptCharCodeCaseInsensitive(chars.charCodeAt(i))){return false;}}return true;}/**
     * @param {?} chars
     * @return {?}
     */},{key:'_requireStr',value:function _requireStr(chars){var/** @type {?} */location=this._getLocation();if(!this._attemptStr(chars)){throw this._createError(_unexpectedCharacterErrorMsg(this._peek),this._getSpan(location));}}/**
     * @param {?} predicate
     * @return {?}
     */},{key:'_attemptCharCodeUntilFn',value:function _attemptCharCodeUntilFn(predicate){while(!predicate(this._peek)){this._advance();}}/**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */},{key:'_requireCharCodeUntilFn',value:function _requireCharCodeUntilFn(predicate,len){var/** @type {?} */start=this._getLocation();this._attemptCharCodeUntilFn(predicate);if(this._index-start.offset<len){throw this._createError(_unexpectedCharacterErrorMsg(this._peek),this._getSpan(start,start));}}/**
     * @param {?} char
     * @return {?}
     */},{key:'_attemptUntilChar',value:function _attemptUntilChar(char){while(this._peek!==char){this._advance();}}/**
     * @param {?} decodeEntities
     * @return {?}
     */},{key:'_readChar',value:function _readChar(decodeEntities){if(decodeEntities&&this._peek===$AMPERSAND){return this._decodeEntity();}else{var/** @type {?} */index=this._index;this._advance();return this._input[index];}}/**
     * @return {?}
     */},{key:'_decodeEntity',value:function _decodeEntity(){var/** @type {?} */start=this._getLocation();this._advance();if(this._attemptCharCode($HASH)){var/** @type {?} */isHex=this._attemptCharCode($x)||this._attemptCharCode($X);var/** @type {?} */numberStart=this._getLocation().offset;this._attemptCharCodeUntilFn(isDigitEntityEnd);if(this._peek!=$SEMICOLON){throw this._createError(_unexpectedCharacterErrorMsg(this._peek),this._getSpan());}this._advance();var/** @type {?} */strNum=this._input.substring(numberStart,this._index-1);try{var/** @type {?} */charCode=parseInt(strNum,isHex?16:10);return String.fromCharCode(charCode);}catch(e){var/** @type {?} */entity=this._input.substring(start.offset+1,this._index-1);throw this._createError(_unknownEntityErrorMsg(entity),this._getSpan(start));}}else{var/** @type {?} */startPosition=this._savePosition();this._attemptCharCodeUntilFn(isNamedEntityEnd);if(this._peek!=$SEMICOLON){this._restorePosition(startPosition);return'&';}this._advance();var/** @type {?} */name=this._input.substring(start.offset+1,this._index-1);var/** @type {?} */char=NAMED_ENTITIES[name];if(!char){throw this._createError(_unknownEntityErrorMsg(name),this._getSpan(start));}return char;}}/**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */},{key:'_consumeRawText',value:function _consumeRawText(decodeEntities,firstCharOfEnd,attemptEndRest){var/** @type {?} */tagCloseStart=void 0;var/** @type {?} */textStart=this._getLocation();this._beginToken(decodeEntities?TokenType$1.ESCAPABLE_RAW_TEXT:TokenType$1.RAW_TEXT,textStart);var/** @type {?} */parts=[];while(true){tagCloseStart=this._getLocation();if(this._attemptCharCode(firstCharOfEnd)&&attemptEndRest()){break;}if(this._index>tagCloseStart.offset){// add the characters consumed by the previous if statement to the output
parts.push(this._input.substring(tagCloseStart.offset,this._index));}while(this._peek!==firstCharOfEnd){parts.push(this._readChar(decodeEntities));}}return this._endToken([this._processCarriageReturns(parts.join(''))],tagCloseStart);}/**
     * @param {?} start
     * @return {?}
     */},{key:'_consumeComment',value:function _consumeComment(start){var _this36=this;this._beginToken(TokenType$1.COMMENT_START,start);this._requireCharCode($MINUS);this._endToken([]);var/** @type {?} */textToken=this._consumeRawText(false,$MINUS,function(){return _this36._attemptStr('->');});this._beginToken(TokenType$1.COMMENT_END,textToken.sourceSpan.end);this._endToken([]);}/**
     * @param {?} start
     * @return {?}
     */},{key:'_consumeCdata',value:function _consumeCdata(start){var _this37=this;this._beginToken(TokenType$1.CDATA_START,start);this._requireStr('CDATA[');this._endToken([]);var/** @type {?} */textToken=this._consumeRawText(false,$RBRACKET,function(){return _this37._attemptStr(']>');});this._beginToken(TokenType$1.CDATA_END,textToken.sourceSpan.end);this._endToken([]);}/**
     * @param {?} start
     * @return {?}
     */},{key:'_consumeDocType',value:function _consumeDocType(start){this._beginToken(TokenType$1.DOC_TYPE,start);this._attemptUntilChar($GT);this._advance();this._endToken([this._input.substring(start.offset+2,this._index-1)]);}/**
     * @return {?}
     */},{key:'_consumePrefixAndName',value:function _consumePrefixAndName(){var/** @type {?} */nameOrPrefixStart=this._index;var/** @type {?} */prefix=null;while(this._peek!==$COLON&&!isPrefixEnd(this._peek)){this._advance();}var/** @type {?} */nameStart=void 0;if(this._peek===$COLON){this._advance();prefix=this._input.substring(nameOrPrefixStart,this._index-1);nameStart=this._index;}else{nameStart=nameOrPrefixStart;}this._requireCharCodeUntilFn(isNameEnd,this._index===nameStart?1:0);var/** @type {?} */name=this._input.substring(nameStart,this._index);return[prefix,name];}/**
     * @param {?} start
     * @return {?}
     */},{key:'_consumeTagOpen',value:function _consumeTagOpen(start){var/** @type {?} */savedPos=this._savePosition();var/** @type {?} */tagName=void 0;var/** @type {?} */lowercaseTagName=void 0;try{if(!isAsciiLetter(this._peek)){throw this._createError(_unexpectedCharacterErrorMsg(this._peek),this._getSpan());}var/** @type {?} */nameStart=this._index;this._consumeTagOpenStart(start);tagName=this._input.substring(nameStart,this._index);lowercaseTagName=tagName.toLowerCase();this._attemptCharCodeUntilFn(isNotWhitespace);while(this._peek!==$SLASH&&this._peek!==$GT){this._consumeAttributeName();this._attemptCharCodeUntilFn(isNotWhitespace);if(this._attemptCharCode($EQ)){this._attemptCharCodeUntilFn(isNotWhitespace);this._consumeAttributeValue();}this._attemptCharCodeUntilFn(isNotWhitespace);}this._consumeTagOpenEnd();}catch(e){if(e instanceof _ControlFlowError){// When the start tag is invalid, assume we want a "<"
this._restorePosition(savedPos);// Back to back text tokens are merged at the end
this._beginToken(TokenType$1.TEXT,start);this._endToken(['<']);return;}throw e;}var/** @type {?} */contentTokenType=this._getTagDefinition(tagName).contentType;if(contentTokenType===TagContentType.RAW_TEXT){this._consumeRawTextWithTagClose(lowercaseTagName,false);}else if(contentTokenType===TagContentType.ESCAPABLE_RAW_TEXT){this._consumeRawTextWithTagClose(lowercaseTagName,true);}}/**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */},{key:'_consumeRawTextWithTagClose',value:function _consumeRawTextWithTagClose(lowercaseTagName,decodeEntities){var _this38=this;var/** @type {?} */textToken=this._consumeRawText(decodeEntities,$LT,function(){if(!_this38._attemptCharCode($SLASH))return false;_this38._attemptCharCodeUntilFn(isNotWhitespace);if(!_this38._attemptStrCaseInsensitive(lowercaseTagName))return false;_this38._attemptCharCodeUntilFn(isNotWhitespace);return _this38._attemptCharCode($GT);});this._beginToken(TokenType$1.TAG_CLOSE,textToken.sourceSpan.end);this._endToken([null,lowercaseTagName]);}/**
     * @param {?} start
     * @return {?}
     */},{key:'_consumeTagOpenStart',value:function _consumeTagOpenStart(start){this._beginToken(TokenType$1.TAG_OPEN_START,start);var/** @type {?} */parts=this._consumePrefixAndName();this._endToken(parts);}/**
     * @return {?}
     */},{key:'_consumeAttributeName',value:function _consumeAttributeName(){this._beginToken(TokenType$1.ATTR_NAME);var/** @type {?} */prefixAndName=this._consumePrefixAndName();this._endToken(prefixAndName);}/**
     * @return {?}
     */},{key:'_consumeAttributeValue',value:function _consumeAttributeValue(){this._beginToken(TokenType$1.ATTR_VALUE);var/** @type {?} */value=void 0;if(this._peek===$SQ||this._peek===$DQ){var/** @type {?} */quoteChar=this._peek;this._advance();var/** @type {?} */parts=[];while(this._peek!==quoteChar){parts.push(this._readChar(true));}value=parts.join('');this._advance();}else{var/** @type {?} */valueStart=this._index;this._requireCharCodeUntilFn(isNameEnd,1);value=this._input.substring(valueStart,this._index);}this._endToken([this._processCarriageReturns(value)]);}/**
     * @return {?}
     */},{key:'_consumeTagOpenEnd',value:function _consumeTagOpenEnd(){var/** @type {?} */tokenType=this._attemptCharCode($SLASH)?TokenType$1.TAG_OPEN_END_VOID:TokenType$1.TAG_OPEN_END;this._beginToken(tokenType);this._requireCharCode($GT);this._endToken([]);}/**
     * @param {?} start
     * @return {?}
     */},{key:'_consumeTagClose',value:function _consumeTagClose(start){this._beginToken(TokenType$1.TAG_CLOSE,start);this._attemptCharCodeUntilFn(isNotWhitespace);var/** @type {?} */prefixAndName=this._consumePrefixAndName();this._attemptCharCodeUntilFn(isNotWhitespace);this._requireCharCode($GT);this._endToken(prefixAndName);}/**
     * @return {?}
     */},{key:'_consumeExpansionFormStart',value:function _consumeExpansionFormStart(){this._beginToken(TokenType$1.EXPANSION_FORM_START,this._getLocation());this._requireCharCode($LBRACE);this._endToken([]);this._expansionCaseStack.push(TokenType$1.EXPANSION_FORM_START);this._beginToken(TokenType$1.RAW_TEXT,this._getLocation());var/** @type {?} */condition=this._readUntil($COMMA);this._endToken([condition],this._getLocation());this._requireCharCode($COMMA);this._attemptCharCodeUntilFn(isNotWhitespace);this._beginToken(TokenType$1.RAW_TEXT,this._getLocation());var/** @type {?} */type=this._readUntil($COMMA);this._endToken([type],this._getLocation());this._requireCharCode($COMMA);this._attemptCharCodeUntilFn(isNotWhitespace);}/**
     * @return {?}
     */},{key:'_consumeExpansionCaseStart',value:function _consumeExpansionCaseStart(){this._beginToken(TokenType$1.EXPANSION_CASE_VALUE,this._getLocation());var/** @type {?} */value=this._readUntil($LBRACE).trim();this._endToken([value],this._getLocation());this._attemptCharCodeUntilFn(isNotWhitespace);this._beginToken(TokenType$1.EXPANSION_CASE_EXP_START,this._getLocation());this._requireCharCode($LBRACE);this._endToken([],this._getLocation());this._attemptCharCodeUntilFn(isNotWhitespace);this._expansionCaseStack.push(TokenType$1.EXPANSION_CASE_EXP_START);}/**
     * @return {?}
     */},{key:'_consumeExpansionCaseEnd',value:function _consumeExpansionCaseEnd(){this._beginToken(TokenType$1.EXPANSION_CASE_EXP_END,this._getLocation());this._requireCharCode($RBRACE);this._endToken([],this._getLocation());this._attemptCharCodeUntilFn(isNotWhitespace);this._expansionCaseStack.pop();}/**
     * @return {?}
     */},{key:'_consumeExpansionFormEnd',value:function _consumeExpansionFormEnd(){this._beginToken(TokenType$1.EXPANSION_FORM_END,this._getLocation());this._requireCharCode($RBRACE);this._endToken([]);this._expansionCaseStack.pop();}/**
     * @return {?}
     */},{key:'_consumeText',value:function _consumeText(){var/** @type {?} */start=this._getLocation();this._beginToken(TokenType$1.TEXT,start);var/** @type {?} */parts=[];do{if(this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)){parts.push(this._interpolationConfig.start);this._inInterpolation=true;}else if(this._interpolationConfig&&this._inInterpolation&&this._attemptStr(this._interpolationConfig.end)){parts.push(this._interpolationConfig.end);this._inInterpolation=false;}else{parts.push(this._readChar(true));}}while(!this._isTextEnd());this._endToken([this._processCarriageReturns(parts.join(''))]);}/**
     * @return {?}
     */},{key:'_isTextEnd',value:function _isTextEnd(){if(this._peek===$LT||this._peek===$EOF){return true;}if(this._tokenizeIcu&&!this._inInterpolation){if(isExpansionFormStart(this._input,this._index,this._interpolationConfig)){// start of an expansion form
return true;}if(this._peek===$RBRACE&&this._isInExpansionCase()){// end of and expansion case
return true;}}return false;}/**
     * @return {?}
     */},{key:'_savePosition',value:function _savePosition(){return[this._peek,this._index,this._column,this._line,this.tokens.length];}/**
     * @param {?} char
     * @return {?}
     */},{key:'_readUntil',value:function _readUntil(char){var/** @type {?} */start=this._index;this._attemptUntilChar(char);return this._input.substring(start,this._index);}/**
     * @param {?} position
     * @return {?}
     */},{key:'_restorePosition',value:function _restorePosition(position){this._peek=position[0];this._index=position[1];this._column=position[2];this._line=position[3];var/** @type {?} */nbTokens=position[4];if(nbTokens<this.tokens.length){// remove any extra tokens
this.tokens=this.tokens.slice(0,nbTokens);}}/**
     * @return {?}
     */},{key:'_isInExpansionCase',value:function _isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===TokenType$1.EXPANSION_CASE_EXP_START;}/**
     * @return {?}
     */},{key:'_isInExpansionForm',value:function _isInExpansionForm(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===TokenType$1.EXPANSION_FORM_START;}}]);return _Tokenizer;}();/**
 * @param {?} code
 * @return {?}
 */function isNotWhitespace(code){return!isWhitespace(code)||code===$EOF;}/**
 * @param {?} code
 * @return {?}
 */function isNameEnd(code){return isWhitespace(code)||code===$GT||code===$SLASH||code===$SQ||code===$DQ||code===$EQ;}/**
 * @param {?} code
 * @return {?}
 */function isPrefixEnd(code){return(code<$a||$z<code)&&(code<$A||$Z<code)&&(code<$0||code>$9);}/**
 * @param {?} code
 * @return {?}
 */function isDigitEntityEnd(code){return code==$SEMICOLON||code==$EOF||!isAsciiHexDigit(code);}/**
 * @param {?} code
 * @return {?}
 */function isNamedEntityEnd(code){return code==$SEMICOLON||code==$EOF||!isAsciiLetter(code);}/**
 * @param {?} input
 * @param {?} offset
 * @param {?} interpolationConfig
 * @return {?}
 */function isExpansionFormStart(input,offset,interpolationConfig){var/** @type {?} */isInterpolationStart=interpolationConfig?input.indexOf(interpolationConfig.start,offset)==offset:false;return input.charCodeAt(offset)==$LBRACE&&!isInterpolationStart;}/**
 * @param {?} peek
 * @return {?}
 */function isExpansionCaseStart(peek){return peek===$EQ||isAsciiLetter(peek);}/**
 * @param {?} code1
 * @param {?} code2
 * @return {?}
 */function compareCharCodeCaseInsensitive(code1,code2){return toUpperCaseCharCode(code1)==toUpperCaseCharCode(code2);}/**
 * @param {?} code
 * @return {?}
 */function toUpperCaseCharCode(code){return code>=$a&&code<=$z?code-$a+$A:code;}/**
 * @param {?} srcTokens
 * @return {?}
 */function mergeTextTokens(srcTokens){var/** @type {?} */dstTokens=[];var/** @type {?} */lastDstToken=void 0;for(var/** @type {?} */i=0;i<srcTokens.length;i++){var/** @type {?} */token=srcTokens[i];if(lastDstToken&&lastDstToken.type==TokenType$1.TEXT&&token.type==TokenType$1.TEXT){lastDstToken.parts[0]+=token.parts[0];lastDstToken.sourceSpan.end=token.sourceSpan.end;}else{lastDstToken=token;dstTokens.push(lastDstToken);}}return dstTokens;}var TreeError=function(_ParseError2){_inherits(TreeError,_ParseError2);/**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     */function TreeError(elementName,span,msg){_classCallCheck(this,TreeError);var _this39=_possibleConstructorReturn(this,(TreeError.__proto__||Object.getPrototypeOf(TreeError)).call(this,span,msg));_this39.elementName=elementName;return _this39;}/**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */_createClass(TreeError,null,[{key:'create',value:function create(elementName,span,msg){return new TreeError(elementName,span,msg);}}]);return TreeError;}(ParseError);var ParseTreeResult=/**
     * @param {?} rootNodes
     * @param {?} errors
     */function ParseTreeResult(rootNodes,errors){_classCallCheck(this,ParseTreeResult);this.rootNodes=rootNodes;this.errors=errors;};var Parser$1=function(){/**
     * @param {?} getTagDefinition
     */function Parser$1(getTagDefinition){_classCallCheck(this,Parser$1);this.getTagDefinition=getTagDefinition;}/**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */_createClass(Parser$1,[{key:'parse',value:function parse(source,url){var parseExpansionForms=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var interpolationConfig=arguments.length>3&&arguments[3]!==undefined?arguments[3]:DEFAULT_INTERPOLATION_CONFIG;var/** @type {?} */tokensAndErrors=tokenize(source,url,this.getTagDefinition,parseExpansionForms,interpolationConfig);var/** @type {?} */treeAndErrors=new _TreeBuilder(tokensAndErrors.tokens,this.getTagDefinition).build();return new ParseTreeResult(treeAndErrors.rootNodes,tokensAndErrors.errors.concat(treeAndErrors.errors));}}]);return Parser$1;}();var _TreeBuilder=function(){/**
     * @param {?} tokens
     * @param {?} getTagDefinition
     */function _TreeBuilder(tokens,getTagDefinition){_classCallCheck(this,_TreeBuilder);this.tokens=tokens;this.getTagDefinition=getTagDefinition;this._index=-1;this._rootNodes=[];this._errors=[];this._elementStack=[];this._advance();}/**
     * @return {?}
     */_createClass(_TreeBuilder,[{key:'build',value:function build(){while(this._peek.type!==TokenType$1.EOF){if(this._peek.type===TokenType$1.TAG_OPEN_START){this._consumeStartTag(this._advance());}else if(this._peek.type===TokenType$1.TAG_CLOSE){this._consumeEndTag(this._advance());}else if(this._peek.type===TokenType$1.CDATA_START){this._closeVoidElement();this._consumeCdata(this._advance());}else if(this._peek.type===TokenType$1.COMMENT_START){this._closeVoidElement();this._consumeComment(this._advance());}else if(this._peek.type===TokenType$1.TEXT||this._peek.type===TokenType$1.RAW_TEXT||this._peek.type===TokenType$1.ESCAPABLE_RAW_TEXT){this._closeVoidElement();this._consumeText(this._advance());}else if(this._peek.type===TokenType$1.EXPANSION_FORM_START){this._consumeExpansion(this._advance());}else{// Skip all other tokens...
this._advance();}}return new ParseTreeResult(this._rootNodes,this._errors);}/**
     * @return {?}
     */},{key:'_advance',value:function _advance(){var/** @type {?} */prev=this._peek;if(this._index<this.tokens.length-1){// Note: there is always an EOF token at the end
this._index++;}this._peek=this.tokens[this._index];return prev;}/**
     * @param {?} type
     * @return {?}
     */},{key:'_advanceIf',value:function _advanceIf(type){if(this._peek.type===type){return this._advance();}return null;}/**
     * @param {?} startToken
     * @return {?}
     */},{key:'_consumeCdata',value:function _consumeCdata(startToken){this._consumeText(this._advance());this._advanceIf(TokenType$1.CDATA_END);}/**
     * @param {?} token
     * @return {?}
     */},{key:'_consumeComment',value:function _consumeComment(token){var/** @type {?} */text=this._advanceIf(TokenType$1.RAW_TEXT);this._advanceIf(TokenType$1.COMMENT_END);var/** @type {?} */value=isPresent(text)?text.parts[0].trim():null;this._addToParent(new Comment(value,token.sourceSpan));}/**
     * @param {?} token
     * @return {?}
     */},{key:'_consumeExpansion',value:function _consumeExpansion(token){var/** @type {?} */switchValue=this._advance();var/** @type {?} */type=this._advance();var/** @type {?} */cases=[];// read =
while(this._peek.type===TokenType$1.EXPANSION_CASE_VALUE){var/** @type {?} */expCase=this._parseExpansionCase();if(!expCase)return;// error
cases.push(expCase);}// read the final }
if(this._peek.type!==TokenType$1.EXPANSION_FORM_END){this._errors.push(TreeError.create(null,this._peek.sourceSpan,'Invalid ICU message. Missing \'}\'.'));return;}var/** @type {?} */sourceSpan=new ParseSourceSpan(token.sourceSpan.start,this._peek.sourceSpan.end);this._addToParent(new Expansion(switchValue.parts[0],type.parts[0],cases,sourceSpan,switchValue.sourceSpan));this._advance();}/**
     * @return {?}
     */},{key:'_parseExpansionCase',value:function _parseExpansionCase(){var/** @type {?} */value=this._advance();// read {
if(this._peek.type!==TokenType$1.EXPANSION_CASE_EXP_START){this._errors.push(TreeError.create(null,this._peek.sourceSpan,'Invalid ICU message. Missing \'{\'.'));return null;}// read until }
var/** @type {?} */start=this._advance();var/** @type {?} */exp=this._collectExpansionExpTokens(start);if(!exp)return null;var/** @type {?} */end=this._advance();exp.push(new Token$1(TokenType$1.EOF,[],end.sourceSpan));// parse everything in between { and }
var/** @type {?} */parsedExp=new _TreeBuilder(exp,this.getTagDefinition).build();if(parsedExp.errors.length>0){this._errors=this._errors.concat(/** @type {?} */parsedExp.errors);return null;}var/** @type {?} */sourceSpan=new ParseSourceSpan(value.sourceSpan.start,end.sourceSpan.end);var/** @type {?} */expSourceSpan=new ParseSourceSpan(start.sourceSpan.start,end.sourceSpan.end);return new ExpansionCase(value.parts[0],parsedExp.rootNodes,sourceSpan,value.sourceSpan,expSourceSpan);}/**
     * @param {?} start
     * @return {?}
     */},{key:'_collectExpansionExpTokens',value:function _collectExpansionExpTokens(start){var/** @type {?} */exp=[];var/** @type {?} */expansionFormStack=[TokenType$1.EXPANSION_CASE_EXP_START];while(true){if(this._peek.type===TokenType$1.EXPANSION_FORM_START||this._peek.type===TokenType$1.EXPANSION_CASE_EXP_START){expansionFormStack.push(this._peek.type);}if(this._peek.type===TokenType$1.EXPANSION_CASE_EXP_END){if(lastOnStack(expansionFormStack,TokenType$1.EXPANSION_CASE_EXP_START)){expansionFormStack.pop();if(expansionFormStack.length==0)return exp;}else{this._errors.push(TreeError.create(null,start.sourceSpan,'Invalid ICU message. Missing \'}\'.'));return null;}}if(this._peek.type===TokenType$1.EXPANSION_FORM_END){if(lastOnStack(expansionFormStack,TokenType$1.EXPANSION_FORM_START)){expansionFormStack.pop();}else{this._errors.push(TreeError.create(null,start.sourceSpan,'Invalid ICU message. Missing \'}\'.'));return null;}}if(this._peek.type===TokenType$1.EOF){this._errors.push(TreeError.create(null,start.sourceSpan,'Invalid ICU message. Missing \'}\'.'));return null;}exp.push(this._advance());}}/**
     * @param {?} token
     * @return {?}
     */},{key:'_consumeText',value:function _consumeText(token){var/** @type {?} */text=token.parts[0];if(text.length>0&&text[0]=='\n'){var/** @type {?} */parent=this._getParentElement();if(isPresent(parent)&&parent.children.length==0&&this.getTagDefinition(parent.name).ignoreFirstLf){text=text.substring(1);}}if(text.length>0){this._addToParent(new Text(text,token.sourceSpan));}}/**
     * @return {?}
     */},{key:'_closeVoidElement',value:function _closeVoidElement(){if(this._elementStack.length>0){var/** @type {?} */el=this._elementStack[this._elementStack.length-1];if(this.getTagDefinition(el.name).isVoid){this._elementStack.pop();}}}/**
     * @param {?} startTagToken
     * @return {?}
     */},{key:'_consumeStartTag',value:function _consumeStartTag(startTagToken){var/** @type {?} */prefix=startTagToken.parts[0];var/** @type {?} */name=startTagToken.parts[1];var/** @type {?} */attrs=[];while(this._peek.type===TokenType$1.ATTR_NAME){attrs.push(this._consumeAttr(this._advance()));}var/** @type {?} */fullName=this._getElementFullName(prefix,name,this._getParentElement());var/** @type {?} */selfClosing=false;// Note: There could have been a tokenizer error
// so that we don't get a token for the end tag...
if(this._peek.type===TokenType$1.TAG_OPEN_END_VOID){this._advance();selfClosing=true;var/** @type {?} */tagDef=this.getTagDefinition(fullName);if(!(tagDef.canSelfClose||getNsPrefix(fullName)!==null||tagDef.isVoid)){this._errors.push(TreeError.create(fullName,startTagToken.sourceSpan,'Only void and foreign elements can be self closed "'+startTagToken.parts[1]+'"'));}}else if(this._peek.type===TokenType$1.TAG_OPEN_END){this._advance();selfClosing=false;}var/** @type {?} */end=this._peek.sourceSpan.start;var/** @type {?} */span=new ParseSourceSpan(startTagToken.sourceSpan.start,end);var/** @type {?} */el=new Element(fullName,attrs,[],span,span,null);this._pushElement(el);if(selfClosing){this._popElement(fullName);el.endSourceSpan=span;}}/**
     * @param {?} el
     * @return {?}
     */},{key:'_pushElement',value:function _pushElement(el){if(this._elementStack.length>0){var/** @type {?} */parentEl=this._elementStack[this._elementStack.length-1];if(this.getTagDefinition(parentEl.name).isClosedByChild(el.name)){this._elementStack.pop();}}var/** @type {?} */tagDef=this.getTagDefinition(el.name);var _getParentElementSkip=this._getParentElementSkippingContainers(),parent=_getParentElementSkip.parent,container=_getParentElementSkip.container;if(parent&&tagDef.requireExtraParent(parent.name)){var/** @type {?} */newParent=new Element(tagDef.parentToAdd,[],[],el.sourceSpan,el.startSourceSpan,el.endSourceSpan);this._insertBeforeContainer(parent,container,newParent);}this._addToParent(el);this._elementStack.push(el);}/**
     * @param {?} endTagToken
     * @return {?}
     */},{key:'_consumeEndTag',value:function _consumeEndTag(endTagToken){var/** @type {?} */fullName=this._getElementFullName(endTagToken.parts[0],endTagToken.parts[1],this._getParentElement());if(this._getParentElement()){this._getParentElement().endSourceSpan=endTagToken.sourceSpan;}if(this.getTagDefinition(fullName).isVoid){this._errors.push(TreeError.create(fullName,endTagToken.sourceSpan,'Void elements do not have end tags "'+endTagToken.parts[1]+'"'));}else if(!this._popElement(fullName)){this._errors.push(TreeError.create(fullName,endTagToken.sourceSpan,'Unexpected closing tag "'+endTagToken.parts[1]+'"'));}}/**
     * @param {?} fullName
     * @return {?}
     */},{key:'_popElement',value:function _popElement(fullName){for(var/** @type {?} */stackIndex=this._elementStack.length-1;stackIndex>=0;stackIndex--){var/** @type {?} */el=this._elementStack[stackIndex];if(el.name==fullName){this._elementStack.splice(stackIndex,this._elementStack.length-stackIndex);return true;}if(!this.getTagDefinition(el.name).closedByParent){return false;}}return false;}/**
     * @param {?} attrName
     * @return {?}
     */},{key:'_consumeAttr',value:function _consumeAttr(attrName){var/** @type {?} */fullName=mergeNsAndName(attrName.parts[0],attrName.parts[1]);var/** @type {?} */end=attrName.sourceSpan.end;var/** @type {?} */value='';var/** @type {?} */valueSpan=void 0;if(this._peek.type===TokenType$1.ATTR_VALUE){var/** @type {?} */valueToken=this._advance();value=valueToken.parts[0];end=valueToken.sourceSpan.end;valueSpan=valueToken.sourceSpan;}return new Attribute$1(fullName,value,new ParseSourceSpan(attrName.sourceSpan.start,end),valueSpan);}/**
     * @return {?}
     */},{key:'_getParentElement',value:function _getParentElement(){return this._elementStack.length>0?this._elementStack[this._elementStack.length-1]:null;}/**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */},{key:'_getParentElementSkippingContainers',value:function _getParentElementSkippingContainers(){var/** @type {?} */container=null;for(var/** @type {?} */i=this._elementStack.length-1;i>=0;i--){if(this._elementStack[i].name!=='ng-container'){return{parent:this._elementStack[i],container:container};}container=this._elementStack[i];}return{parent:this._elementStack[this._elementStack.length-1],container:container};}/**
     * @param {?} node
     * @return {?}
     */},{key:'_addToParent',value:function _addToParent(node){var/** @type {?} */parent=this._getParentElement();if(isPresent(parent)){parent.children.push(node);}else{this._rootNodes.push(node);}}/**
     * Insert a node between the parent and the container.
     * When no container is given, the node is appended as a child of the parent.
     * Also updates the element stack accordingly.
     *
     * \@internal
     * @param {?} parent
     * @param {?} container
     * @param {?} node
     * @return {?}
     */},{key:'_insertBeforeContainer',value:function _insertBeforeContainer(parent,container,node){if(!container){this._addToParent(node);this._elementStack.push(node);}else{if(parent){// replace the container with the new node in the children
var/** @type {?} */index=parent.children.indexOf(container);parent.children[index]=node;}else{this._rootNodes.push(node);}node.children.push(container);this._elementStack.splice(this._elementStack.indexOf(container),0,node);}}/**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */},{key:'_getElementFullName',value:function _getElementFullName(prefix,localName,parentElement){if(isBlank(prefix)){prefix=this.getTagDefinition(localName).implicitNamespacePrefix;if(isBlank(prefix)&&isPresent(parentElement)){prefix=getNsPrefix(parentElement.name);}}return mergeNsAndName(prefix,localName);}}]);return _TreeBuilder;}();/**
 * @param {?} stack
 * @param {?} element
 * @return {?}
 */function lastOnStack(stack,element){return stack.length>0&&stack[stack.length-1]===element;}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Message=/**
     * @param {?} nodes message AST
     * @param {?} placeholders maps placeholder names to static content
     * @param {?} placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     */function Message(nodes,placeholders,placeholderToMessage,meaning,description,id){_classCallCheck(this,Message);this.nodes=nodes;this.placeholders=placeholders;this.placeholderToMessage=placeholderToMessage;this.meaning=meaning;this.description=description;this.id=id;};var Text$1=function(){/**
     * @param {?} value
     * @param {?} sourceSpan
     */function Text$1(value,sourceSpan){_classCallCheck(this,Text$1);this.value=value;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Text$1,[{key:'visit',value:function visit(visitor,context){return visitor.visitText(this,context);}}]);return Text$1;}();var Container=function(){/**
     * @param {?} children
     * @param {?} sourceSpan
     */function Container(children,sourceSpan){_classCallCheck(this,Container);this.children=children;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Container,[{key:'visit',value:function visit(visitor,context){return visitor.visitContainer(this,context);}}]);return Container;}();var Icu=function(){/**
     * @param {?} expression
     * @param {?} type
     * @param {?} cases
     * @param {?} sourceSpan
     */function Icu(expression,type,cases,sourceSpan){_classCallCheck(this,Icu);this.expression=expression;this.type=type;this.cases=cases;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Icu,[{key:'visit',value:function visit(visitor,context){return visitor.visitIcu(this,context);}}]);return Icu;}();var TagPlaceholder=function(){/**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} startName
     * @param {?} closeName
     * @param {?} children
     * @param {?} isVoid
     * @param {?} sourceSpan
     */function TagPlaceholder(tag,attrs,startName,closeName,children,isVoid,sourceSpan){_classCallCheck(this,TagPlaceholder);this.tag=tag;this.attrs=attrs;this.startName=startName;this.closeName=closeName;this.children=children;this.isVoid=isVoid;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(TagPlaceholder,[{key:'visit',value:function visit(visitor,context){return visitor.visitTagPlaceholder(this,context);}}]);return TagPlaceholder;}();var Placeholder=function(){/**
     * @param {?} value
     * @param {?} name
     * @param {?} sourceSpan
     */function Placeholder(value,name,sourceSpan){_classCallCheck(this,Placeholder);this.value=value;this.name=name;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(Placeholder,[{key:'visit',value:function visit(visitor,context){return visitor.visitPlaceholder(this,context);}}]);return Placeholder;}();var IcuPlaceholder=function(){/**
     * @param {?} value
     * @param {?} name
     * @param {?} sourceSpan
     */function IcuPlaceholder(value,name,sourceSpan){_classCallCheck(this,IcuPlaceholder);this.value=value;this.name=name;this.sourceSpan=sourceSpan;}/**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */_createClass(IcuPlaceholder,[{key:'visit',value:function visit(visitor,context){return visitor.visitIcuPlaceholder(this,context);}}]);return IcuPlaceholder;}();var CloneVisitor=function(){function CloneVisitor(){_classCallCheck(this,CloneVisitor);}_createClass(CloneVisitor,[{key:'visitText',/**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */value:function visitText(text,context){return new Text$1(text.value,text.sourceSpan);}/**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */},{key:'visitContainer',value:function visitContainer(container,context){var _this40=this;var/** @type {?} */children=container.children.map(function(n){return n.visit(_this40,context);});return new Container(children,container.sourceSpan);}/**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcu',value:function visitIcu(icu,context){var _this41=this;var/** @type {?} */cases={};Object.keys(icu.cases).forEach(function(key){return cases[key]=icu.cases[key].visit(_this41,context);});var/** @type {?} */msg=new Icu(icu.expression,icu.type,cases,icu.sourceSpan);msg.expressionPlaceholder=icu.expressionPlaceholder;return msg;}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){var _this42=this;var/** @type {?} */children=ph.children.map(function(n){return n.visit(_this42,context);});return new TagPlaceholder(ph.tag,ph.attrs,ph.startName,ph.closeName,children,ph.isVoid,ph.sourceSpan);}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){return new Placeholder(ph.value,ph.name,ph.sourceSpan);}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,context){return new IcuPlaceholder(ph.value,ph.name,ph.sourceSpan);}}]);return CloneVisitor;}();var RecurseVisitor=function(){function RecurseVisitor(){_classCallCheck(this,RecurseVisitor);}_createClass(RecurseVisitor,[{key:'visitText',/**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */value:function visitText(text,context){}},{key:'visitContainer',/**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */value:function visitContainer(container,context){var _this43=this;container.children.forEach(function(child){return child.visit(_this43);});}/**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcu',value:function visitIcu(icu,context){var _this44=this;Object.keys(icu.cases).forEach(function(k){icu.cases[k].visit(_this44);});}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){var _this45=this;ph.children.forEach(function(child){return child.visit(_this45);});}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){}},{key:'visitIcuPlaceholder',/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */value:function visitIcuPlaceholder(ph,context){}}]);return RecurseVisitor;}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var/** @type {?} */TAG_TO_PLACEHOLDER_NAMES={'A':'LINK','B':'BOLD_TEXT','BR':'LINE_BREAK','EM':'EMPHASISED_TEXT','H1':'HEADING_LEVEL1','H2':'HEADING_LEVEL2','H3':'HEADING_LEVEL3','H4':'HEADING_LEVEL4','H5':'HEADING_LEVEL5','H6':'HEADING_LEVEL6','HR':'HORIZONTAL_RULE','I':'ITALIC_TEXT','LI':'LIST_ITEM','LINK':'MEDIA_LINK','OL':'ORDERED_LIST','P':'PARAGRAPH','Q':'QUOTATION','S':'STRIKETHROUGH_TEXT','SMALL':'SMALL_TEXT','SUB':'SUBSTRIPT','SUP':'SUPERSCRIPT','TBODY':'TABLE_BODY','TD':'TABLE_CELL','TFOOT':'TABLE_FOOTER','TH':'TABLE_HEADER_CELL','THEAD':'TABLE_HEADER','TR':'TABLE_ROW','TT':'MONOSPACED_TEXT','U':'UNDERLINED_TEXT','UL':'UNORDERED_LIST'};/**
 * Creates unique names for placeholder with different content.
 *
 * Returns the same placeholder name when the content is identical.
 *
 * \@internal
 */var PlaceholderRegistry=function(){function PlaceholderRegistry(){_classCallCheck(this,PlaceholderRegistry);this._placeHolderNameCounts={};this._signatureToName={};}/**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */_createClass(PlaceholderRegistry,[{key:'getStartTagPlaceholderName',value:function getStartTagPlaceholderName(tag,attrs,isVoid){var/** @type {?} */signature=this._hashTag(tag,attrs,isVoid);if(this._signatureToName[signature]){return this._signatureToName[signature];}var/** @type {?} */upperTag=tag.toUpperCase();var/** @type {?} */baseName=TAG_TO_PLACEHOLDER_NAMES[upperTag]||'TAG_'+upperTag;var/** @type {?} */name=this._generateUniqueName(isVoid?baseName:'START_'+baseName);this._signatureToName[signature]=name;return name;}/**
     * @param {?} tag
     * @return {?}
     */},{key:'getCloseTagPlaceholderName',value:function getCloseTagPlaceholderName(tag){var/** @type {?} */signature=this._hashClosingTag(tag);if(this._signatureToName[signature]){return this._signatureToName[signature];}var/** @type {?} */upperTag=tag.toUpperCase();var/** @type {?} */baseName=TAG_TO_PLACEHOLDER_NAMES[upperTag]||'TAG_'+upperTag;var/** @type {?} */name=this._generateUniqueName('CLOSE_'+baseName);this._signatureToName[signature]=name;return name;}/**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */},{key:'getPlaceholderName',value:function getPlaceholderName(name,content){var/** @type {?} */upperName=name.toUpperCase();var/** @type {?} */signature='PH: '+upperName+'='+content;if(this._signatureToName[signature]){return this._signatureToName[signature];}var/** @type {?} */uniqueName=this._generateUniqueName(upperName);this._signatureToName[signature]=uniqueName;return uniqueName;}/**
     * @param {?} name
     * @return {?}
     */},{key:'getUniquePlaceholder',value:function getUniquePlaceholder(name){return this._generateUniqueName(name.toUpperCase());}/**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */},{key:'_hashTag',value:function _hashTag(tag,attrs,isVoid){var/** @type {?} */start='<'+tag;var/** @type {?} */strAttrs=Object.keys(attrs).sort().map(function(name){return' '+name+'='+attrs[name];}).join('');var/** @type {?} */end=isVoid?'/>':'></'+tag+'>';return start+strAttrs+end;}/**
     * @param {?} tag
     * @return {?}
     */},{key:'_hashClosingTag',value:function _hashClosingTag(tag){return this._hashTag('/'+tag,{},false);}/**
     * @param {?} base
     * @return {?}
     */},{key:'_generateUniqueName',value:function _generateUniqueName(base){var/** @type {?} */seen=this._placeHolderNameCounts.hasOwnProperty(base);if(!seen){this._placeHolderNameCounts[base]=1;return base;}var/** @type {?} */id=this._placeHolderNameCounts[base];this._placeHolderNameCounts[base]=id+1;return base+'_'+id;}}]);return PlaceholderRegistry;}();var/** @type {?} */_expParser=new Parser(new Lexer());/**
 * Returns a function converting html nodes to an i18n Message given an interpolationConfig
 * @param {?} interpolationConfig
 * @return {?}
 */function createI18nMessageFactory(interpolationConfig){var/** @type {?} */visitor=new _I18nVisitor(_expParser,interpolationConfig);return function(nodes,meaning,description,id){return visitor.toI18nMessage(nodes,meaning,description,id);};}var _I18nVisitor=function(){/**
     * @param {?} _expressionParser
     * @param {?} _interpolationConfig
     */function _I18nVisitor(_expressionParser,_interpolationConfig){_classCallCheck(this,_I18nVisitor);this._expressionParser=_expressionParser;this._interpolationConfig=_interpolationConfig;}/**
     * @param {?} nodes
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     * @return {?}
     */_createClass(_I18nVisitor,[{key:'toI18nMessage',value:function toI18nMessage(nodes,meaning,description,id){this._isIcu=nodes.length==1&&nodes[0]instanceof Expansion;this._icuDepth=0;this._placeholderRegistry=new PlaceholderRegistry();this._placeholderToContent={};this._placeholderToMessage={};var/** @type {?} */i18nodes=visitAll(this,nodes,{});return new Message(i18nodes,this._placeholderToContent,this._placeholderToMessage,meaning,description,id);}/**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(el,context){var/** @type {?} */children=visitAll(this,el.children);var/** @type {?} */attrs={};el.attrs.forEach(function(attr){// Do not visit the attributes, translatable ones are top-level ASTs
attrs[attr.name]=attr.value;});var/** @type {?} */isVoid=getHtmlTagDefinition(el.name).isVoid;var/** @type {?} */startPhName=this._placeholderRegistry.getStartTagPlaceholderName(el.name,attrs,isVoid);this._placeholderToContent[startPhName]=el.sourceSpan.toString();var/** @type {?} */closePhName='';if(!isVoid){closePhName=this._placeholderRegistry.getCloseTagPlaceholderName(el.name);this._placeholderToContent[closePhName]='</'+el.name+'>';}return new TagPlaceholder(el.name,attrs,startPhName,closePhName,children,isVoid,el.sourceSpan);}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){return this._visitTextWithInterpolation(attribute.value,attribute.sourceSpan);}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){return this._visitTextWithInterpolation(text.value,text.sourceSpan);}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){return null;}/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(icu,context){var _this46=this;this._icuDepth++;var/** @type {?} */i18nIcuCases={};var/** @type {?} */i18nIcu=new Icu(icu.switchValue,icu.type,i18nIcuCases,icu.sourceSpan);icu.cases.forEach(function(caze){i18nIcuCases[caze.value]=new Container(caze.expression.map(function(node){return node.visit(_this46,{});}),caze.expSourceSpan);});this._icuDepth--;if(this._isIcu||this._icuDepth>0){// Returns an ICU node when:
// - the message (vs a part of the message) is an ICU message, or
// - the ICU message is nested.
var/** @type {?} */expPh=this._placeholderRegistry.getUniquePlaceholder('VAR_'+icu.type);i18nIcu.expressionPlaceholder=expPh;this._placeholderToContent[expPh]=icu.switchValue;return i18nIcu;}// Else returns a placeholder
// ICU placeholders should not be replaced with their original content but with the their
// translations. We need to create a new visitor (they are not re-entrant) to compute the
// message id.
// TODO(vicb): add a html.Node -> i18n.Message cache to avoid having to re-create the msg
var/** @type {?} */phName=this._placeholderRegistry.getPlaceholderName('ICU',icu.sourceSpan.toString());var/** @type {?} */visitor=new _I18nVisitor(this._expressionParser,this._interpolationConfig);this._placeholderToMessage[phName]=visitor.toI18nMessage([icu],'','','');return new IcuPlaceholder(i18nIcu,phName,icu.sourceSpan);}/**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(icuCase,context){throw new Error('Unreachable code');}/**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_visitTextWithInterpolation',value:function _visitTextWithInterpolation(text,sourceSpan){var/** @type {?} */splitInterpolation=this._expressionParser.splitInterpolation(text,sourceSpan.start.toString(),this._interpolationConfig);if(!splitInterpolation){// No expression, return a single text
return new Text$1(text,sourceSpan);}// Return a group of text + expressions
var/** @type {?} */nodes=[];var/** @type {?} */container=new Container(nodes,sourceSpan);var _interpolationConfig2=this._interpolationConfig,sDelimiter=_interpolationConfig2.start,eDelimiter=_interpolationConfig2.end;for(var/** @type {?} */i=0;i<splitInterpolation.strings.length-1;i++){var/** @type {?} */expression=splitInterpolation.expressions[i];var/** @type {?} */baseName=_extractPlaceholderName(expression)||'INTERPOLATION';var/** @type {?} */phName=this._placeholderRegistry.getPlaceholderName(baseName,expression);if(splitInterpolation.strings[i].length){// No need to add empty strings
nodes.push(new Text$1(splitInterpolation.strings[i],sourceSpan));}nodes.push(new Placeholder(expression,phName,sourceSpan));this._placeholderToContent[phName]=sDelimiter+expression+eDelimiter;}// The last index contains no expression
var/** @type {?} */lastStringIdx=splitInterpolation.strings.length-1;if(splitInterpolation.strings[lastStringIdx].length){nodes.push(new Text$1(splitInterpolation.strings[lastStringIdx],sourceSpan));}return container;}}]);return _I18nVisitor;}();var/** @type {?} */_CUSTOM_PH_EXP=/\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*"([\s\S]*?)"[\s\S]*\)/g;/**
 * @param {?} input
 * @return {?}
 */function _extractPlaceholderName(input){return input.split(_CUSTOM_PH_EXP)[1];}/**
 * An i18n error.
 */var I18nError=function(_ParseError3){_inherits(I18nError,_ParseError3);/**
     * @param {?} span
     * @param {?} msg
     */function I18nError(span,msg){_classCallCheck(this,I18nError);return _possibleConstructorReturn(this,(I18nError.__proto__||Object.getPrototypeOf(I18nError)).call(this,span,msg));}return I18nError;}(ParseError);var/** @type {?} */_I18N_ATTR='i18n';var/** @type {?} */_I18N_ATTR_PREFIX='i18n-';var/** @type {?} */_I18N_COMMENT_PREFIX_REGEXP=/^i18n:?/;var/** @type {?} */MEANING_SEPARATOR='|';var/** @type {?} */ID_SEPARATOR='@@';/**
 * Extract translatable messages from an html AST
 * @param {?} nodes
 * @param {?} interpolationConfig
 * @param {?} implicitTags
 * @param {?} implicitAttrs
 * @return {?}
 */function extractMessages(nodes,interpolationConfig,implicitTags,implicitAttrs){var/** @type {?} */visitor=new _Visitor(implicitTags,implicitAttrs);return visitor.extract(nodes,interpolationConfig);}/**
 * @param {?} nodes
 * @param {?} translations
 * @param {?} interpolationConfig
 * @param {?} implicitTags
 * @param {?} implicitAttrs
 * @return {?}
 */function mergeTranslations(nodes,translations,interpolationConfig,implicitTags,implicitAttrs){var/** @type {?} */visitor=new _Visitor(implicitTags,implicitAttrs);return visitor.merge(nodes,translations,interpolationConfig);}var ExtractionResult=/**
     * @param {?} messages
     * @param {?} errors
     */function ExtractionResult(messages,errors){_classCallCheck(this,ExtractionResult);this.messages=messages;this.errors=errors;};var _VisitorMode={};_VisitorMode.Extract=0;_VisitorMode.Merge=1;_VisitorMode[_VisitorMode.Extract]="Extract";_VisitorMode[_VisitorMode.Merge]="Merge";/**
 * This Visitor is used:
 * 1. to extract all the translatable strings from an html AST (see `extract()`),
 * 2. to replace the translatable strings with the actual translations (see `merge()`)
 *
 * \@internal
 */var _Visitor=function(){/**
     * @param {?} _implicitTags
     * @param {?} _implicitAttrs
     */function _Visitor(_implicitTags,_implicitAttrs){_classCallCheck(this,_Visitor);this._implicitTags=_implicitTags;this._implicitAttrs=_implicitAttrs;}/**
     * Extracts the messages from the tree
     * @param {?} nodes
     * @param {?} interpolationConfig
     * @return {?}
     */_createClass(_Visitor,[{key:'extract',value:function extract(nodes,interpolationConfig){var _this48=this;this._init(_VisitorMode.Extract,interpolationConfig);nodes.forEach(function(node){return node.visit(_this48,null);});if(this._inI18nBlock){this._reportError(nodes[nodes.length-1],'Unclosed block');}return new ExtractionResult(this._messages,this._errors);}/**
     * Returns a tree where all translatable nodes are translated
     * @param {?} nodes
     * @param {?} translations
     * @param {?} interpolationConfig
     * @return {?}
     */},{key:'merge',value:function merge(nodes,translations,interpolationConfig){this._init(_VisitorMode.Merge,interpolationConfig);this._translations=translations;// Construct a single fake root element
var/** @type {?} */wrapper=new Element('wrapper',[],nodes,null,null,null);var/** @type {?} */translatedNode=wrapper.visit(this,null);if(this._inI18nBlock){this._reportError(nodes[nodes.length-1],'Unclosed block');}return new ParseTreeResult(translatedNode.children,this._errors);}/**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(icuCase,context){// Parse cases for translatable html attributes
var/** @type {?} */expression=visitAll(this,icuCase.expression,context);if(this._mode===_VisitorMode.Merge){return new ExpansionCase(icuCase.value,expression,icuCase.sourceSpan,icuCase.valueSourceSpan,icuCase.expSourceSpan);}}/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(icu,context){this._mayBeAddBlockChildren(icu);var/** @type {?} */wasInIcu=this._inIcu;if(!this._inIcu){// nested ICU messages should not be extracted but top-level translated as a whole
if(this._isInTranslatableSection){this._addMessage([icu]);}this._inIcu=true;}var/** @type {?} */cases=visitAll(this,icu.cases,context);if(this._mode===_VisitorMode.Merge){icu=new Expansion(icu.switchValue,icu.type,cases,icu.sourceSpan,icu.switchValueSourceSpan);}this._inIcu=wasInIcu;return icu;}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){var/** @type {?} */isOpening=_isOpeningComment(comment);if(isOpening&&this._isInTranslatableSection){this._reportError(comment,'Could not start a block inside a translatable section');return;}var/** @type {?} */isClosing=_isClosingComment(comment);if(isClosing&&!this._inI18nBlock){this._reportError(comment,'Trying to close an unopened block');return;}if(!this._inI18nNode&&!this._inIcu){if(!this._inI18nBlock){if(isOpening){this._inI18nBlock=true;this._blockStartDepth=this._depth;this._blockChildren=[];this._blockMeaningAndDesc=comment.value.replace(_I18N_COMMENT_PREFIX_REGEXP,'').trim();this._openTranslatableSection(comment);}}else{if(isClosing){if(this._depth==this._blockStartDepth){this._closeTranslatableSection(comment,this._blockChildren);this._inI18nBlock=false;var/** @type {?} */message=this._addMessage(this._blockChildren,this._blockMeaningAndDesc);// merge attributes in sections
var/** @type {?} */nodes=this._translateMessage(comment,message);return visitAll(this,nodes);}else{this._reportError(comment,'I18N blocks should not cross element boundaries');return;}}}}}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){if(this._isInTranslatableSection){this._mayBeAddBlockChildren(text);}return text;}/**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(el,context){var _this49=this;this._mayBeAddBlockChildren(el);this._depth++;var/** @type {?} */wasInI18nNode=this._inI18nNode;var/** @type {?} */wasInImplicitNode=this._inImplicitNode;var/** @type {?} */childNodes=[];var/** @type {?} */translatedChildNodes=void 0;// Extract:
// - top level nodes with the (implicit) "i18n" attribute if not already in a section
// - ICU messages
var/** @type {?} */i18nAttr=_getI18nAttr(el);var/** @type {?} */i18nMeta=i18nAttr?i18nAttr.value:'';var/** @type {?} */isImplicit=this._implicitTags.some(function(tag){return el.name===tag;})&&!this._inIcu&&!this._isInTranslatableSection;var/** @type {?} */isTopLevelImplicit=!wasInImplicitNode&&isImplicit;this._inImplicitNode=wasInImplicitNode||isImplicit;if(!this._isInTranslatableSection&&!this._inIcu){if(i18nAttr||isTopLevelImplicit){this._inI18nNode=true;var/** @type {?} */message=this._addMessage(el.children,i18nMeta);translatedChildNodes=this._translateMessage(el,message);}if(this._mode==_VisitorMode.Extract){var/** @type {?} */isTranslatable=i18nAttr||isTopLevelImplicit;if(isTranslatable)this._openTranslatableSection(el);visitAll(this,el.children);if(isTranslatable)this._closeTranslatableSection(el,el.children);}}else{if(i18nAttr||isTopLevelImplicit){this._reportError(el,'Could not mark an element as translatable inside a translatable section');}if(this._mode==_VisitorMode.Extract){// Descend into child nodes for extraction
visitAll(this,el.children);}}if(this._mode===_VisitorMode.Merge){var/** @type {?} */visitNodes=translatedChildNodes||el.children;visitNodes.forEach(function(child){var/** @type {?} */visited=child.visit(_this49,context);if(visited&&!_this49._isInTranslatableSection){// Do not add the children from translatable sections (= i18n blocks here)
// They will be added later in this loop when the block closes (i.e. on `<!-- /i18n -->`)
childNodes=childNodes.concat(visited);}});}this._visitAttributesOf(el);this._depth--;this._inI18nNode=wasInI18nNode;this._inImplicitNode=wasInImplicitNode;if(this._mode===_VisitorMode.Merge){var/** @type {?} */translatedAttrs=this._translateAttributes(el);return new Element(el.name,translatedAttrs,childNodes,el.sourceSpan,el.startSourceSpan,el.endSourceSpan);}}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){throw new Error('unreachable code');}/**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @return {?}
     */},{key:'_init',value:function _init(mode,interpolationConfig){this._mode=mode;this._inI18nBlock=false;this._inI18nNode=false;this._depth=0;this._inIcu=false;this._msgCountAtSectionStart=void 0;this._errors=[];this._messages=[];this._inImplicitNode=false;this._createI18nMessage=createI18nMessageFactory(interpolationConfig);}/**
     * @param {?} el
     * @return {?}
     */},{key:'_visitAttributesOf',value:function _visitAttributesOf(el){var _this50=this;var/** @type {?} */explicitAttrNameToValue={};var/** @type {?} */implicitAttrNames=this._implicitAttrs[el.name]||[];el.attrs.filter(function(attr){return attr.name.startsWith(_I18N_ATTR_PREFIX);}).forEach(function(attr){return explicitAttrNameToValue[attr.name.slice(_I18N_ATTR_PREFIX.length)]=attr.value;});el.attrs.forEach(function(attr){if(attr.name in explicitAttrNameToValue){_this50._addMessage([attr],explicitAttrNameToValue[attr.name]);}else if(implicitAttrNames.some(function(name){return attr.name===name;})){_this50._addMessage([attr]);}});}/**
     * @param {?} ast
     * @param {?=} msgMeta
     * @return {?}
     */},{key:'_addMessage',value:function _addMessage(ast,msgMeta){if(ast.length==0||ast.length==1&&ast[0]instanceof Attribute$1&&!ast[0].value){// Do not create empty messages
return;}var _parseMessageMeta2=_parseMessageMeta(msgMeta),meaning=_parseMessageMeta2.meaning,description=_parseMessageMeta2.description,id=_parseMessageMeta2.id;var/** @type {?} */message=this._createI18nMessage(ast,meaning,description,id);this._messages.push(message);return message;}/**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */},{key:'_translateMessage',value:function _translateMessage(el,message){if(message&&this._mode===_VisitorMode.Merge){var/** @type {?} */nodes=this._translations.get(message);if(nodes){return nodes;}this._reportError(el,'Translation unavailable for message id="'+this._translations.digest(message)+'"');}return[];}/**
     * @param {?} el
     * @return {?}
     */},{key:'_translateAttributes',value:function _translateAttributes(el){var _this51=this;var/** @type {?} */attributes=el.attrs;var/** @type {?} */i18nAttributeMeanings={};attributes.forEach(function(attr){if(attr.name.startsWith(_I18N_ATTR_PREFIX)){i18nAttributeMeanings[attr.name.slice(_I18N_ATTR_PREFIX.length)]=_parseMessageMeta(attr.value).meaning;}});var/** @type {?} */translatedAttributes=[];attributes.forEach(function(attr){if(attr.name===_I18N_ATTR||attr.name.startsWith(_I18N_ATTR_PREFIX)){// strip i18n specific attributes
return;}if(attr.value&&attr.value!=''&&i18nAttributeMeanings.hasOwnProperty(attr.name)){var/** @type {?} */meaning=i18nAttributeMeanings[attr.name];var/** @type {?} */message=_this51._createI18nMessage([attr],meaning,'','');var/** @type {?} */nodes=_this51._translations.get(message);if(nodes){if(nodes.length==0){translatedAttributes.push(new Attribute$1(attr.name,'',attr.sourceSpan));}else if(nodes[0]instanceof Text){var/** @type {?} */value=nodes[0].value;translatedAttributes.push(new Attribute$1(attr.name,value,attr.sourceSpan));}else{_this51._reportError(el,'Unexpected translation for attribute "'+attr.name+'" (id="'+_this51._translations.digest(message)+'")');}}else{_this51._reportError(el,'Translation unavailable for attribute "'+attr.name+'" (id="'+_this51._translations.digest(message)+'")');}}else{translatedAttributes.push(attr);}});return translatedAttributes;}/**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */},{key:'_mayBeAddBlockChildren',value:function _mayBeAddBlockChildren(node){if(this._inI18nBlock&&!this._inIcu&&this._depth==this._blockStartDepth){this._blockChildren.push(node);}}/**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */},{key:'_openTranslatableSection',value:function _openTranslatableSection(node){if(this._isInTranslatableSection){this._reportError(node,'Unexpected section start');}else{this._msgCountAtSectionStart=this._messages.length;}}/**
     * A translatable section could be:
     * - the content of translatable element,
     * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
     * @return {?}
     */},{key:'_closeTranslatableSection',/**
     * Terminates a section.
     *
     * If a section has only one significant children (comments not significant) then we should not
     * keep the message from this children:
     *
     * `<p i18n="meaning|description">{ICU message}</p>` would produce two messages:
     * - one for the <p> content with meaning and description,
     * - another one for the ICU message.
     *
     * In this case the last message is discarded as it contains less information (the AST is
     * otherwise identical).
     *
     * Note that we should still keep messages extracted from attributes inside the section (ie in the
     * ICU message here)
     * @param {?} node
     * @param {?} directChildren
     * @return {?}
     */value:function _closeTranslatableSection(node,directChildren){if(!this._isInTranslatableSection){this._reportError(node,'Unexpected section end');return;}var/** @type {?} */startIndex=this._msgCountAtSectionStart;var/** @type {?} */significantChildren=directChildren.reduce(function(count,node){return count+(node instanceof Comment?0:1);},0);if(significantChildren==1){for(var/** @type {?} */i=this._messages.length-1;i>=startIndex;i--){var/** @type {?} */ast=this._messages[i].nodes;if(!(ast.length==1&&ast[0]instanceof Text$1)){this._messages.splice(i,1);break;}}}this._msgCountAtSectionStart=void 0;}/**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */},{key:'_reportError',value:function _reportError(node,msg){this._errors.push(new I18nError(node.sourceSpan,msg));}},{key:'_isInTranslatableSection',get:function get(){return this._msgCountAtSectionStart!==void 0;}}]);return _Visitor;}();/**
 * @param {?} n
 * @return {?}
 */function _isOpeningComment(n){return n instanceof Comment&&n.value&&n.value.startsWith('i18n');}/**
 * @param {?} n
 * @return {?}
 */function _isClosingComment(n){return n instanceof Comment&&n.value&&n.value==='/i18n';}/**
 * @param {?} p
 * @return {?}
 */function _getI18nAttr(p){return p.attrs.find(function(attr){return attr.name===_I18N_ATTR;})||null;}/**
 * @param {?} i18n
 * @return {?}
 */function _parseMessageMeta(i18n){if(!i18n)return{meaning:'',description:'',id:''};var/** @type {?} */idIndex=i18n.indexOf(ID_SEPARATOR);var/** @type {?} */descIndex=i18n.indexOf(MEANING_SEPARATOR);var _ref10=idIndex>-1?[i18n.slice(0,idIndex),i18n.slice(idIndex+2)]:[i18n,''],_ref11=_slicedToArray(_ref10,2),meaningAndDesc=_ref11[0],id=_ref11[1];var _ref12=descIndex>-1?[meaningAndDesc.slice(0,descIndex),meaningAndDesc.slice(descIndex+1)]:['',meaningAndDesc],_ref13=_slicedToArray(_ref12,2),meaning=_ref13[0],description=_ref13[1];return{meaning:meaning,description:description,id:id};}var XmlTagDefinition=function(){function XmlTagDefinition(){_classCallCheck(this,XmlTagDefinition);this.closedByParent=false;this.contentType=TagContentType.PARSABLE_DATA;this.isVoid=false;this.ignoreFirstLf=false;this.canSelfClose=true;}/**
     * @param {?} currentParent
     * @return {?}
     */_createClass(XmlTagDefinition,[{key:'requireExtraParent',value:function requireExtraParent(currentParent){return false;}/**
     * @param {?} name
     * @return {?}
     */},{key:'isClosedByChild',value:function isClosedByChild(name){return false;}}]);return XmlTagDefinition;}();var/** @type {?} */_TAG_DEFINITION=new XmlTagDefinition();/**
 * @param {?} tagName
 * @return {?}
 */function getXmlTagDefinition(tagName){return _TAG_DEFINITION;}var XmlParser=function(_Parser$){_inherits(XmlParser,_Parser$);function XmlParser(){_classCallCheck(this,XmlParser);return _possibleConstructorReturn(this,(XmlParser.__proto__||Object.getPrototypeOf(XmlParser)).call(this,getXmlTagDefinition));}/**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */_createClass(XmlParser,[{key:'parse',value:function parse(source,url){var parseExpansionForms=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return _get(XmlParser.prototype.__proto__||Object.getPrototypeOf(XmlParser.prototype),'parse',this).call(this,source,url,parseExpansionForms,null);}}]);return XmlParser;}(Parser$1);/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @param {?} message
 * @return {?}
 */function _digest2(message){return message.id||sha1(serializeNodes(message.nodes).join('')+('['+message.meaning+']'));}/**
 * @param {?} message
 * @return {?}
 */function decimalDigest(message){if(message.id){return message.id;}var/** @type {?} */visitor=new _SerializerIgnoreIcuExpVisitor();var/** @type {?} */parts=message.nodes.map(function(a){return a.visit(visitor,null);});return computeMsgId(parts.join(''),message.meaning);}/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */var _SerializerVisitor=function(){function _SerializerVisitor(){_classCallCheck(this,_SerializerVisitor);}_createClass(_SerializerVisitor,[{key:'visitText',/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */value:function visitText(text,context){return text.value;}/**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */},{key:'visitContainer',value:function visitContainer(container,context){var _this53=this;return'['+container.children.map(function(child){return child.visit(_this53);}).join(', ')+']';}/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */},{key:'visitIcu',value:function visitIcu(icu,context){var _this54=this;var/** @type {?} */strCases=Object.keys(icu.cases).map(function(k){return k+' {'+icu.cases[k].visit(_this54)+'}';});return'{'+icu.expression+', '+icu.type+', '+strCases.join(', ')+'}';}/**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){var _this55=this;return ph.isVoid?'<ph tag name="'+ph.startName+'"/>':'<ph tag name="'+ph.startName+'">'+ph.children.map(function(child){return child.visit(_this55);}).join(', ')+'</ph name="'+ph.closeName+'">';}/**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){return ph.value?'<ph name="'+ph.name+'">'+ph.value+'</ph>':'<ph name="'+ph.name+'"/>';}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,context){return'<ph icu name="'+ph.name+'">'+ph.value.visit(this)+'</ph>';}}]);return _SerializerVisitor;}();var/** @type {?} */serializerVisitor=new _SerializerVisitor();/**
 * @param {?} nodes
 * @return {?}
 */function serializeNodes(nodes){return nodes.map(function(a){return a.visit(serializerVisitor,null);});}/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */var _SerializerIgnoreIcuExpVisitor=function(_SerializerVisitor2){_inherits(_SerializerIgnoreIcuExpVisitor,_SerializerVisitor2);function _SerializerIgnoreIcuExpVisitor(){_classCallCheck(this,_SerializerIgnoreIcuExpVisitor);return _possibleConstructorReturn(this,(_SerializerIgnoreIcuExpVisitor.__proto__||Object.getPrototypeOf(_SerializerIgnoreIcuExpVisitor)).apply(this,arguments));}_createClass(_SerializerIgnoreIcuExpVisitor,[{key:'visitIcu',/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */value:function visitIcu(icu,context){var _this57=this;var/** @type {?} */strCases=Object.keys(icu.cases).map(function(k){return k+' {'+icu.cases[k].visit(_this57)+'}';});// Do not take the expression into account
return'{'+icu.type+', '+strCases.join(', ')+'}';}}]);return _SerializerIgnoreIcuExpVisitor;}(_SerializerVisitor);/**
 * Compute the SHA1 of the given string
 *
 * see http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *
 * WARNING: this function has not been designed not tested with security in mind.
 *          DO NOT USE IT IN A SECURITY SENSITIVE CONTEXT.
 * @param {?} str
 * @return {?}
 */function sha1(str){var/** @type {?} */utf8=utf8Encode(str);var/** @type {?} */words32=stringToWords32(utf8,Endian.Big);var/** @type {?} */len=utf8.length*8;var/** @type {?} */w=new Array(80);var a=0x67452301,b=0xefcdab89,c=0x98badcfe,d=0x10325476,e=0xc3d2e1f0;words32[len>>5]|=0x80<<24-len%32;words32[(len+64>>9<<4)+15]=len;for(var/** @type {?} */i=0;i<words32.length;i+=16){var h0=a,h1=b,h2=c,h3=d,h4=e;for(var/** @type {?} */j=0;j<80;j++){if(j<16){w[j]=words32[i+j];}else{w[j]=rol32(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);}var _fk=fk(j,b,c,d),_fk2=_slicedToArray(_fk,2),f=_fk2[0],k=_fk2[1];var/** @type {?} */temp=[rol32(a,5),f,e,k,w[j]].reduce(add32);var _ref14=[d,c,rol32(b,30),a,temp];e=_ref14[0];d=_ref14[1];c=_ref14[2];b=_ref14[3];a=_ref14[4];}var _ref15=[add32(a,h0),add32(b,h1),add32(c,h2),add32(d,h3),add32(e,h4)];a=_ref15[0];b=_ref15[1];c=_ref15[2];d=_ref15[3];e=_ref15[4];}return byteStringToHexString(words32ToByteString([a,b,c,d,e]));}/**
 * @param {?} index
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */function fk(index,b,c,d){if(index<20){return[b&c|~b&d,0x5a827999];}if(index<40){return[b^c^d,0x6ed9eba1];}if(index<60){return[b&c|b&d|c&d,0x8f1bbcdc];}return[b^c^d,0xca62c1d6];}/**
 * Compute the fingerprint of the given string
 *
 * The output is 64 bit number encoded as a decimal string
 *
 * based on:
 * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
 * @param {?} str
 * @return {?}
 */function fingerprint(str){var/** @type {?} */utf8=utf8Encode(str);var _ref16=[hash32(utf8,0),hash32(utf8,102072)],hi=_ref16[0],lo=_ref16[1];if(hi==0&&(lo==0||lo==1)){hi=hi^0x130f9bef;lo=lo^-0x6b5f56d8;}return[hi,lo];}/**
 * @param {?} msg
 * @param {?} meaning
 * @return {?}
 */function computeMsgId(msg,meaning){var _fingerprint=fingerprint(msg),_fingerprint2=_slicedToArray(_fingerprint,2),hi=_fingerprint2[0],lo=_fingerprint2[1];if(meaning){var _fingerprint3=fingerprint(meaning),_fingerprint4=_slicedToArray(_fingerprint3,2),him=_fingerprint4[0],lom=_fingerprint4[1];var _add=add64(rol64([hi,lo],1),[him,lom]);var _add2=_slicedToArray(_add,2);hi=_add2[0];lo=_add2[1];}return byteStringToDecString(words32ToByteString([hi&0x7fffffff,lo]));}/**
 * @param {?} str
 * @param {?} c
 * @return {?}
 */function hash32(str,c){var a=0x9e3779b9,b=0x9e3779b9;var/** @type {?} */i=void 0;var/** @type {?} */len=str.length;for(i=0;i+12<=len;i+=12){a=add32(a,wordAt(str,i,Endian.Little));b=add32(b,wordAt(str,i+4,Endian.Little));c=add32(c,wordAt(str,i+8,Endian.Little));var _mix=mix([a,b,c]);var _mix2=_slicedToArray(_mix,3);a=_mix2[0];b=_mix2[1];c=_mix2[2];}a=add32(a,wordAt(str,i,Endian.Little));b=add32(b,wordAt(str,i+4,Endian.Little));// the first byte of c is reserved for the length
c=add32(c,len);c=add32(c,wordAt(str,i+8,Endian.Little)<<8);return mix([a,b,c])[2];}/**
 * @param {?} __0
 * @return {?}
 */function mix(_ref17){var _ref18=_slicedToArray(_ref17,3),a=_ref18[0],b=_ref18[1],c=_ref18[2];a=sub32(a,b);a=sub32(a,c);a^=c>>>13;b=sub32(b,c);b=sub32(b,a);b^=a<<8;c=sub32(c,a);c=sub32(c,b);c^=b>>>13;a=sub32(a,b);a=sub32(a,c);a^=c>>>12;b=sub32(b,c);b=sub32(b,a);b^=a<<16;c=sub32(c,a);c=sub32(c,b);c^=b>>>5;a=sub32(a,b);a=sub32(a,c);a^=c>>>3;b=sub32(b,c);b=sub32(b,a);b^=a<<10;c=sub32(c,a);c=sub32(c,b);c^=b>>>15;return[a,b,c];}var Endian={};Endian.Little=0;Endian.Big=1;Endian[Endian.Little]="Little";Endian[Endian.Big]="Big";/**
 * @param {?} str
 * @return {?}
 */function utf8Encode(str){var/** @type {?} */encoded='';for(var/** @type {?} */index=0;index<str.length;index++){var/** @type {?} */codePoint=decodeSurrogatePairs(str,index);if(codePoint<=0x7f){encoded+=String.fromCharCode(codePoint);}else if(codePoint<=0x7ff){encoded+=String.fromCharCode(0xc0|codePoint>>>6,0x80|codePoint&0x3f);}else if(codePoint<=0xffff){encoded+=String.fromCharCode(0xe0|codePoint>>>12,0x80|codePoint>>>6&0x3f,0x80|codePoint&0x3f);}else if(codePoint<=0x1fffff){encoded+=String.fromCharCode(0xf0|codePoint>>>18,0x80|codePoint>>>12&0x3f,0x80|codePoint>>>6&0x3f,0x80|codePoint&0x3f);}}return encoded;}/**
 * @param {?} str
 * @param {?} index
 * @return {?}
 */function decodeSurrogatePairs(str,index){if(index<0||index>=str.length){throw new Error('index='+index+' is out of range in "'+str+'"');}var/** @type {?} */high=str.charCodeAt(index);if(high>=0xd800&&high<=0xdfff&&str.length>index+1){var/** @type {?} */low=byteAt(str,index+1);if(low>=0xdc00&&low<=0xdfff){return(high-0xd800)*0x400+low-0xdc00+0x10000;}}return high;}/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */function add32(a,b){return add32to64(a,b)[1];}/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */function add32to64(a,b){var/** @type {?} */low=(a&0xffff)+(b&0xffff);var/** @type {?} */high=(a>>>16)+(b>>>16)+(low>>>16);return[high>>>16,high<<16|low&0xffff];}/**
 * @param {?} __0
 * @param {?} __1
 * @return {?}
 */function add64(_ref19,_ref20){var _ref22=_slicedToArray(_ref19,2),ah=_ref22[0],al=_ref22[1];var _ref21=_slicedToArray(_ref20,2),bh=_ref21[0],bl=_ref21[1];var _add32to=add32to64(al,bl),_add32to2=_slicedToArray(_add32to,2),carry=_add32to2[0],l=_add32to2[1];var/** @type {?} */h=add32(add32(ah,bh),carry);return[h,l];}/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */function sub32(a,b){var/** @type {?} */low=(a&0xffff)-(b&0xffff);var/** @type {?} */high=(a>>16)-(b>>16)+(low>>16);return high<<16|low&0xffff;}/**
 * @param {?} a
 * @param {?} count
 * @return {?}
 */function rol32(a,count){return a<<count|a>>>32-count;}/**
 * @param {?} __0
 * @param {?} count
 * @return {?}
 */function rol64(_ref23,count){var _ref24=_slicedToArray(_ref23,2),hi=_ref24[0],lo=_ref24[1];var/** @type {?} */h=hi<<count|lo>>>32-count;var/** @type {?} */l=lo<<count|hi>>>32-count;return[h,l];}/**
 * @param {?} str
 * @param {?} endian
 * @return {?}
 */function stringToWords32(str,endian){var/** @type {?} */words32=Array(str.length+3>>>2);for(var/** @type {?} */i=0;i<words32.length;i++){words32[i]=wordAt(str,i*4,endian);}return words32;}/**
 * @param {?} str
 * @param {?} index
 * @return {?}
 */function byteAt(str,index){return index>=str.length?0:str.charCodeAt(index)&0xff;}/**
 * @param {?} str
 * @param {?} index
 * @param {?} endian
 * @return {?}
 */function wordAt(str,index,endian){var/** @type {?} */word=0;if(endian===Endian.Big){for(var/** @type {?} */i=0;i<4;i++){word+=byteAt(str,index+i)<<24-8*i;}}else{for(var/** @type {?} */_i4=0;_i4<4;_i4++){word+=byteAt(str,index+_i4)<<8*_i4;}}return word;}/**
 * @param {?} words32
 * @return {?}
 */function words32ToByteString(words32){return words32.reduce(function(str,word){return str+word32ToByteString(word);},'');}/**
 * @param {?} word
 * @return {?}
 */function word32ToByteString(word){var/** @type {?} */str='';for(var/** @type {?} */i=0;i<4;i++){str+=String.fromCharCode(word>>>8*(3-i)&0xff);}return str;}/**
 * @param {?} str
 * @return {?}
 */function byteStringToHexString(str){var/** @type {?} */hex='';for(var/** @type {?} */i=0;i<str.length;i++){var/** @type {?} */b=byteAt(str,i);hex+=(b>>>4).toString(16)+(b&0x0f).toString(16);}return hex.toLowerCase();}/**
 * @param {?} str
 * @return {?}
 */function byteStringToDecString(str){var/** @type {?} */decimal='';var/** @type {?} */toThePower='1';for(var/** @type {?} */i=str.length-1;i>=0;i--){decimal=addBigInt(decimal,numberTimesBigInt(byteAt(str,i),toThePower));toThePower=numberTimesBigInt(256,toThePower);}return decimal.split('').reverse().join('');}/**
 * @param {?} x
 * @param {?} y
 * @return {?}
 */function addBigInt(x,y){var/** @type {?} */sum='';var/** @type {?} */len=Math.max(x.length,y.length);for(var/** @type {?} */i=0,/** @type {?} */carry=0;i<len||carry;i++){var/** @type {?} */tmpSum=carry+ +(x[i]||0)+ +(y[i]||0);if(tmpSum>=10){carry=1;sum+=tmpSum-10;}else{carry=0;sum+=tmpSum;}}return sum;}/**
 * @param {?} num
 * @param {?} b
 * @return {?}
 */function numberTimesBigInt(num,b){var/** @type {?} */product='';var/** @type {?} */bToThePower=b;for(;num!==0;num=num>>>1){if(num&1)product=addBigInt(product,bToThePower);bToThePower=addBigInt(bToThePower,bToThePower);}return product;}/**
 * @abstract
 */var Serializer=function(){function Serializer(){_classCallCheck(this,Serializer);}_createClass(Serializer,[{key:'write',/**
     * @abstract
     * @param {?} messages
     * @param {?} locale
     * @return {?}
     */value:function write(messages,locale){}/**
     * @abstract
     * @param {?} content
     * @param {?} url
     * @return {?}
     */},{key:'load',value:function load(content,url){}/**
     * @abstract
     * @param {?} message
     * @return {?}
     */},{key:'digest',value:function digest(message){}/**
     * @param {?} message
     * @return {?}
     */},{key:'createNameMapper',value:function createNameMapper(message){return null;}}]);return Serializer;}();/**
 * A simple mapper that take a function to transform an internal name to a public name
 */var SimplePlaceholderMapper=function(_RecurseVisitor){_inherits(SimplePlaceholderMapper,_RecurseVisitor);/**
     * @param {?} message
     * @param {?} mapName
     */function SimplePlaceholderMapper(message,mapName){_classCallCheck(this,SimplePlaceholderMapper);var _this58=_possibleConstructorReturn(this,(SimplePlaceholderMapper.__proto__||Object.getPrototypeOf(SimplePlaceholderMapper)).call(this));_this58.mapName=mapName;_this58.internalToPublic={};_this58.publicToNextId={};_this58.publicToInternal={};message.nodes.forEach(function(node){return node.visit(_this58);});return _this58;}/**
     * @param {?} internalName
     * @return {?}
     */_createClass(SimplePlaceholderMapper,[{key:'toPublicName',value:function toPublicName(internalName){return this.internalToPublic.hasOwnProperty(internalName)?this.internalToPublic[internalName]:null;}/**
     * @param {?} publicName
     * @return {?}
     */},{key:'toInternalName',value:function toInternalName(publicName){return this.publicToInternal.hasOwnProperty(publicName)?this.publicToInternal[publicName]:null;}/**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){return null;}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){this.visitPlaceholderName(ph.startName);_get(SimplePlaceholderMapper.prototype.__proto__||Object.getPrototypeOf(SimplePlaceholderMapper.prototype),'visitTagPlaceholder',this).call(this,ph,context);this.visitPlaceholderName(ph.closeName);}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){this.visitPlaceholderName(ph.name);}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,context){this.visitPlaceholderName(ph.name);}/**
     * @param {?} internalName
     * @return {?}
     */},{key:'visitPlaceholderName',value:function visitPlaceholderName(internalName){if(!internalName||this.internalToPublic.hasOwnProperty(internalName)){return;}var/** @type {?} */publicName=this.mapName(internalName);if(this.publicToInternal.hasOwnProperty(publicName)){// Create a new XMB when it has already been used
var/** @type {?} */nextId=this.publicToNextId[publicName];this.publicToNextId[publicName]=nextId+1;publicName=publicName+'_'+nextId;}else{this.publicToNextId[publicName]=1;}this.internalToPublic[internalName]=publicName;this.publicToInternal[publicName]=internalName;}}]);return SimplePlaceholderMapper;}(RecurseVisitor);/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var _Visitor$1=function(){function _Visitor$1(){_classCallCheck(this,_Visitor$1);}_createClass(_Visitor$1,[{key:'visitTag',/**
     * @param {?} tag
     * @return {?}
     */value:function visitTag(tag){var _this59=this;var/** @type {?} */strAttrs=this._serializeAttributes(tag.attrs);if(tag.children.length==0){return'<'+tag.name+strAttrs+'/>';}var/** @type {?} */strChildren=tag.children.map(function(node){return node.visit(_this59);});return'<'+tag.name+strAttrs+'>'+strChildren.join('')+'</'+tag.name+'>';}/**
     * @param {?} text
     * @return {?}
     */},{key:'visitText',value:function visitText(text){return text.value;}/**
     * @param {?} decl
     * @return {?}
     */},{key:'visitDeclaration',value:function visitDeclaration(decl){return'<?xml'+this._serializeAttributes(decl.attrs)+' ?>';}/**
     * @param {?} attrs
     * @return {?}
     */},{key:'_serializeAttributes',value:function _serializeAttributes(attrs){var/** @type {?} */strAttrs=Object.keys(attrs).map(function(name){return name+'="'+attrs[name]+'"';}).join(' ');return strAttrs.length>0?' '+strAttrs:'';}/**
     * @param {?} doctype
     * @return {?}
     */},{key:'visitDoctype',value:function visitDoctype(doctype){return'<!DOCTYPE '+doctype.rootTag+' [\n'+doctype.dtd+'\n]>';}}]);return _Visitor$1;}();var/** @type {?} */_visitor=new _Visitor$1();/**
 * @param {?} nodes
 * @return {?}
 */function serialize(nodes){return nodes.map(function(node){return node.visit(_visitor);}).join('');}var Declaration=function(){/**
     * @param {?} unescapedAttrs
     */function Declaration(unescapedAttrs){var _this60=this;_classCallCheck(this,Declaration);this.attrs={};Object.keys(unescapedAttrs).forEach(function(k){_this60.attrs[k]=_escapeXml(unescapedAttrs[k]);});}/**
     * @param {?} visitor
     * @return {?}
     */_createClass(Declaration,[{key:'visit',value:function visit(visitor){return visitor.visitDeclaration(this);}}]);return Declaration;}();var Doctype=function(){/**
     * @param {?} rootTag
     * @param {?} dtd
     */function Doctype(rootTag,dtd){_classCallCheck(this,Doctype);this.rootTag=rootTag;this.dtd=dtd;}_createClass(Doctype,[{key:'visit',/**
     * @param {?} visitor
     * @return {?}
     */value:function visit(visitor){return visitor.visitDoctype(this);}}]);return Doctype;}();var Tag=function(){/**
     * @param {?} name
     * @param {?=} unescapedAttrs
     * @param {?=} children
     */function Tag(name){var _this61=this;var unescapedAttrs=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];_classCallCheck(this,Tag);this.name=name;this.children=children;this.attrs={};Object.keys(unescapedAttrs).forEach(function(k){_this61.attrs[k]=_escapeXml(unescapedAttrs[k]);});}/**
     * @param {?} visitor
     * @return {?}
     */_createClass(Tag,[{key:'visit',value:function visit(visitor){return visitor.visitTag(this);}}]);return Tag;}();var Text$2=function(){/**
     * @param {?} unescapedValue
     */function Text$2(unescapedValue){_classCallCheck(this,Text$2);this.value=_escapeXml(unescapedValue);}_createClass(Text$2,[{key:'visit',/**
     * @param {?} visitor
     * @return {?}
     */value:function visit(visitor){return visitor.visitText(this);}}]);return Text$2;}();var CR=function(_Text$){_inherits(CR,_Text$);/**
     * @param {?=} ws
     */function CR(){var ws=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;_classCallCheck(this,CR);return _possibleConstructorReturn(this,(CR.__proto__||Object.getPrototypeOf(CR)).call(this,'\n'+new Array(ws+1).join(' ')));}return CR;}(Text$2);var/** @type {?} */_ESCAPED_CHARS=[[/&/g,'&amp;'],[/"/g,'&quot;'],[/'/g,'&apos;'],[/</g,'&lt;'],[/>/g,'&gt;']];/**
 * @param {?} text
 * @return {?}
 */function _escapeXml(text){return _ESCAPED_CHARS.reduce(function(text,entry){return text.replace(entry[0],entry[1]);},text);}var/** @type {?} */_VERSION='1.2';var/** @type {?} */_XMLNS='urn:oasis:names:tc:xliff:document:1.2';// TODO(vicb): make this a param (s/_/-/)
var/** @type {?} */_DEFAULT_SOURCE_LANG='en';var/** @type {?} */_PLACEHOLDER_TAG='x';var/** @type {?} */_FILE_TAG='file';var/** @type {?} */_SOURCE_TAG='source';var/** @type {?} */_TARGET_TAG='target';var/** @type {?} */_UNIT_TAG='trans-unit';var Xliff=function(_Serializer){_inherits(Xliff,_Serializer);function Xliff(){_classCallCheck(this,Xliff);return _possibleConstructorReturn(this,(Xliff.__proto__||Object.getPrototypeOf(Xliff)).apply(this,arguments));}_createClass(Xliff,[{key:'write',/**
     * @param {?} messages
     * @param {?} locale
     * @return {?}
     */value:function write(messages,locale){var/** @type {?} */visitor=new _WriteVisitor();var/** @type {?} */transUnits=[];messages.forEach(function(message){var/** @type {?} */transUnit=new Tag(_UNIT_TAG,{id:message.id,datatype:'html'});transUnit.children.push(new CR(8),new Tag(_SOURCE_TAG,{},visitor.serialize(message.nodes)),new CR(8),new Tag(_TARGET_TAG));if(message.description){transUnit.children.push(new CR(8),new Tag('note',{priority:'1',from:'description'},[new Text$2(message.description)]));}if(message.meaning){transUnit.children.push(new CR(8),new Tag('note',{priority:'1',from:'meaning'},[new Text$2(message.meaning)]));}transUnit.children.push(new CR(6));transUnits.push(new CR(6),transUnit);});var/** @type {?} */body=new Tag('body',{},[].concat(transUnits,[new CR(4)]));var/** @type {?} */file=new Tag('file',{'source-language':locale||_DEFAULT_SOURCE_LANG,datatype:'plaintext',original:'ng2.template'},[new CR(4),body,new CR(2)]);var/** @type {?} */xliff=new Tag('xliff',{version:_VERSION,xmlns:_XMLNS},[new CR(2),file,new CR()]);return serialize([new Declaration({version:'1.0',encoding:'UTF-8'}),new CR(),xliff,new CR()]);}/**
     * @param {?} content
     * @param {?} url
     * @return {?}
     */},{key:'load',value:function load(content,url){// xliff to xml nodes
var/** @type {?} */xliffParser=new XliffParser();var _xliffParser$parse=xliffParser.parse(content,url),locale=_xliffParser$parse.locale,mlNodesByMsgId=_xliffParser$parse.mlNodesByMsgId,errors=_xliffParser$parse.errors;// xml nodes to i18n nodes
var/** @type {?} */i18nNodesByMsgId={};var/** @type {?} */converter=new XmlToI18n();Object.keys(mlNodesByMsgId).forEach(function(msgId){var _converter$convert=converter.convert(mlNodesByMsgId[msgId]),i18nNodes=_converter$convert.i18nNodes,e=_converter$convert.errors;errors.push.apply(errors,_toConsumableArray(e));i18nNodesByMsgId[msgId]=i18nNodes;});if(errors.length){throw new Error('xliff parse errors:\n'+errors.join('\n'));}return{locale:locale,i18nNodesByMsgId:i18nNodesByMsgId};}/**
     * @param {?} message
     * @return {?}
     */},{key:'digest',value:function digest(message){return _digest2(message);}}]);return Xliff;}(Serializer);var _WriteVisitor=function(){function _WriteVisitor(){_classCallCheck(this,_WriteVisitor);}_createClass(_WriteVisitor,[{key:'visitText',/**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */value:function visitText(text,context){return[new Text$2(text.value)];}/**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */},{key:'visitContainer',value:function visitContainer(container,context){var _this64=this;var/** @type {?} */nodes=[];container.children.forEach(function(node){return nodes.push.apply(nodes,_toConsumableArray(node.visit(_this64)));});return nodes;}/**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcu',value:function visitIcu(icu,context){if(this._isInIcu){// nested ICU is not supported
throw new Error('xliff does not support nested ICU messages');}this._isInIcu=true;// TODO(vicb): support ICU messages
// https://lists.oasis-open.org/archives/xliff/201201/msg00028.html
// http://docs.oasis-open.org/xliff/v1.2/xliff-profile-po/xliff-profile-po-1.2-cd02.html
var/** @type {?} */nodes=[];this._isInIcu=false;return nodes;}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){var/** @type {?} */ctype=getCtypeForTag(ph.tag);var/** @type {?} */startTagPh=new Tag(_PLACEHOLDER_TAG,{id:ph.startName,ctype:ctype});if(ph.isVoid){// void tags have no children nor closing tags
return[startTagPh];}var/** @type {?} */closeTagPh=new Tag(_PLACEHOLDER_TAG,{id:ph.closeName,ctype:ctype});return[startTagPh].concat(_toConsumableArray(this.serialize(ph.children)),[closeTagPh]);}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){return[new Tag(_PLACEHOLDER_TAG,{id:ph.name})];}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,context){return[new Tag(_PLACEHOLDER_TAG,{id:ph.name})];}/**
     * @param {?} nodes
     * @return {?}
     */},{key:'serialize',value:function serialize(nodes){var _ref25,_this65=this;this._isInIcu=false;return(_ref25=[]).concat.apply(_ref25,_toConsumableArray(nodes.map(function(node){return node.visit(_this65);})));}}]);return _WriteVisitor;}();var XliffParser=function(){function XliffParser(){_classCallCheck(this,XliffParser);this._locale=null;}/**
     * @param {?} xliff
     * @param {?} url
     * @return {?}
     */_createClass(XliffParser,[{key:'parse',value:function parse(xliff,url){this._unitMlNodes=[];this._mlNodesByMsgId={};var/** @type {?} */xml=new XmlParser().parse(xliff,url,false);this._errors=xml.errors;visitAll(this,xml.rootNodes,null);return{mlNodesByMsgId:this._mlNodesByMsgId,errors:this._errors,locale:this._locale};}/**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(element,context){switch(element.name){case _UNIT_TAG:this._unitMlNodes=null;var/** @type {?} */idAttr=element.attrs.find(function(attr){return attr.name==='id';});if(!idAttr){this._addError(element,'<'+_UNIT_TAG+'> misses the "id" attribute');}else{var/** @type {?} */id=idAttr.value;if(this._mlNodesByMsgId.hasOwnProperty(id)){this._addError(element,'Duplicated translations for msg '+id);}else{visitAll(this,element.children,null);if(this._unitMlNodes){this._mlNodesByMsgId[id]=this._unitMlNodes;}else{this._addError(element,'Message '+id+' misses a translation');}}}break;case _SOURCE_TAG:// ignore source message
break;case _TARGET_TAG:this._unitMlNodes=element.children;break;case _FILE_TAG:var/** @type {?} */localeAttr=element.attrs.find(function(attr){return attr.name==='target-language';});if(localeAttr){this._locale=localeAttr.value;}visitAll(this,element.children,null);break;default:// TODO(vicb): assert file structure, xliff version
// For now only recurse on unhandled nodes
visitAll(this,element.children,null);}}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){}/**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(expansion,context){}/**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(expansionCase,context){}/**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */},{key:'_addError',value:function _addError(node,message){this._errors.push(new I18nError(node.sourceSpan,message));}}]);return XliffParser;}();var XmlToI18n=function(){function XmlToI18n(){_classCallCheck(this,XmlToI18n);}_createClass(XmlToI18n,[{key:'convert',/**
     * @param {?} nodes
     * @return {?}
     */value:function convert(nodes){this._errors=[];return{i18nNodes:visitAll(this,nodes),errors:this._errors};}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){return new Text$1(text.value,text.sourceSpan);}/**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(el,context){if(el.name===_PLACEHOLDER_TAG){var/** @type {?} */nameAttr=el.attrs.find(function(attr){return attr.name==='id';});if(nameAttr){return new Placeholder('',nameAttr.value,el.sourceSpan);}this._addError(el,'<'+_PLACEHOLDER_TAG+'> misses the "id" attribute');}else{this._addError(el,'Unexpected tag');}}/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(icu,context){}/**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(icuCase,context){}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){}/**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */},{key:'_addError',value:function _addError(node,message){this._errors.push(new I18nError(node.sourceSpan,message));}}]);return XmlToI18n;}();/**
 * @param {?} tag
 * @return {?}
 */function getCtypeForTag(tag){switch(tag.toLowerCase()){case'br':return'lb';case'img':return'image';default:return'x-'+tag;}}var/** @type {?} */_MESSAGES_TAG='messagebundle';var/** @type {?} */_MESSAGE_TAG='msg';var/** @type {?} */_PLACEHOLDER_TAG$1='ph';var/** @type {?} */_EXEMPLE_TAG='ex';var/** @type {?} */_DOCTYPE='<!ELEMENT messagebundle (msg)*>\n<!ATTLIST messagebundle class CDATA #IMPLIED>\n\n<!ELEMENT msg (#PCDATA|ph|source)*>\n<!ATTLIST msg id CDATA #IMPLIED>\n<!ATTLIST msg seq CDATA #IMPLIED>\n<!ATTLIST msg name CDATA #IMPLIED>\n<!ATTLIST msg desc CDATA #IMPLIED>\n<!ATTLIST msg meaning CDATA #IMPLIED>\n<!ATTLIST msg obsolete (obsolete) #IMPLIED>\n<!ATTLIST msg xml:space (default|preserve) "default">\n<!ATTLIST msg is_hidden CDATA #IMPLIED>\n\n<!ELEMENT source (#PCDATA)>\n\n<!ELEMENT ph (#PCDATA|ex)*>\n<!ATTLIST ph name CDATA #REQUIRED>\n\n<!ELEMENT ex (#PCDATA)>';var Xmb=function(_Serializer2){_inherits(Xmb,_Serializer2);function Xmb(){_classCallCheck(this,Xmb);return _possibleConstructorReturn(this,(Xmb.__proto__||Object.getPrototypeOf(Xmb)).apply(this,arguments));}_createClass(Xmb,[{key:'write',/**
     * @param {?} messages
     * @param {?} locale
     * @return {?}
     */value:function write(messages,locale){var/** @type {?} */exampleVisitor=new ExampleVisitor();var/** @type {?} */visitor=new _Visitor$2();var/** @type {?} */rootNode=new Tag(_MESSAGES_TAG);messages.forEach(function(message){var/** @type {?} */attrs={id:message.id};if(message.description){attrs['desc']=message.description;}if(message.meaning){attrs['meaning']=message.meaning;}rootNode.children.push(new CR(2),new Tag(_MESSAGE_TAG,attrs,visitor.serialize(message.nodes)));});rootNode.children.push(new CR());return serialize([new Declaration({version:'1.0',encoding:'UTF-8'}),new CR(),new Doctype(_MESSAGES_TAG,_DOCTYPE),new CR(),exampleVisitor.addDefaultExamples(rootNode),new CR()]);}/**
     * @param {?} content
     * @param {?} url
     * @return {?}
     */},{key:'load',value:function load(content,url){throw new Error('Unsupported');}/**
     * @param {?} message
     * @return {?}
     */},{key:'digest',value:function digest(message){return digest$1(message);}/**
     * @param {?} message
     * @return {?}
     */},{key:'createNameMapper',value:function createNameMapper(message){return new SimplePlaceholderMapper(message,toPublicName);}}]);return Xmb;}(Serializer);var _Visitor$2=function(){function _Visitor$2(){_classCallCheck(this,_Visitor$2);}_createClass(_Visitor$2,[{key:'visitText',/**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */value:function visitText(text,context){return[new Text$2(text.value)];}/**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */},{key:'visitContainer',value:function visitContainer(container,context){var _this67=this;var/** @type {?} */nodes=[];container.children.forEach(function(node){return nodes.push.apply(nodes,_toConsumableArray(node.visit(_this67)));});return nodes;}/**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcu',value:function visitIcu(icu,context){var _this68=this;var/** @type {?} */nodes=[new Text$2('{'+icu.expressionPlaceholder+', '+icu.type+', ')];Object.keys(icu.cases).forEach(function(c){nodes.push.apply(nodes,[new Text$2(c+' {')].concat(_toConsumableArray(icu.cases[c].visit(_this68)),[new Text$2('} ')]));});nodes.push(new Text$2('}'));return nodes;}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){var/** @type {?} */startEx=new Tag(_EXEMPLE_TAG,{},[new Text$2('<'+ph.tag+'>')]);var/** @type {?} */startTagPh=new Tag(_PLACEHOLDER_TAG$1,{name:ph.startName},[startEx]);if(ph.isVoid){// void tags have no children nor closing tags
return[startTagPh];}var/** @type {?} */closeEx=new Tag(_EXEMPLE_TAG,{},[new Text$2('</'+ph.tag+'>')]);var/** @type {?} */closeTagPh=new Tag(_PLACEHOLDER_TAG$1,{name:ph.closeName},[closeEx]);return[startTagPh].concat(_toConsumableArray(this.serialize(ph.children)),[closeTagPh]);}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){return[new Tag(_PLACEHOLDER_TAG$1,{name:ph.name})];}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,context){return[new Tag(_PLACEHOLDER_TAG$1,{name:ph.name})];}/**
     * @param {?} nodes
     * @return {?}
     */},{key:'serialize',value:function serialize(nodes){var _ref26,_this69=this;return(_ref26=[]).concat.apply(_ref26,_toConsumableArray(nodes.map(function(node){return node.visit(_this69);})));}}]);return _Visitor$2;}();/**
 * @param {?} message
 * @return {?}
 */function digest$1(message){return decimalDigest(message);}var ExampleVisitor=function(){function ExampleVisitor(){_classCallCheck(this,ExampleVisitor);}_createClass(ExampleVisitor,[{key:'addDefaultExamples',/**
     * @param {?} node
     * @return {?}
     */value:function addDefaultExamples(node){node.visit(this);return node;}/**
     * @param {?} tag
     * @return {?}
     */},{key:'visitTag',value:function visitTag(tag){var _this70=this;if(tag.name===_PLACEHOLDER_TAG$1){if(!tag.children||tag.children.length==0){var/** @type {?} */exText=new Text$2(tag.attrs['name']||'...');tag.children=[new Tag(_EXEMPLE_TAG,{},[exText])];}}else if(tag.children){tag.children.forEach(function(node){return node.visit(_this70);});}}/**
     * @param {?} text
     * @return {?}
     */},{key:'visitText',value:function visitText(text){}/**
     * @param {?} decl
     * @return {?}
     */},{key:'visitDeclaration',value:function visitDeclaration(decl){}/**
     * @param {?} doctype
     * @return {?}
     */},{key:'visitDoctype',value:function visitDoctype(doctype){}}]);return ExampleVisitor;}();/**
 * @param {?} internalName
 * @return {?}
 */function toPublicName(internalName){return internalName.toUpperCase().replace(/[^A-Z0-9_]/g,'_');}var/** @type {?} */_TRANSLATIONS_TAG='translationbundle';var/** @type {?} */_TRANSLATION_TAG='translation';var/** @type {?} */_PLACEHOLDER_TAG$2='ph';var Xtb=function(_Serializer3){_inherits(Xtb,_Serializer3);function Xtb(){_classCallCheck(this,Xtb);return _possibleConstructorReturn(this,(Xtb.__proto__||Object.getPrototypeOf(Xtb)).apply(this,arguments));}_createClass(Xtb,[{key:'write',/**
     * @param {?} messages
     * @param {?} locale
     * @return {?}
     */value:function write(messages,locale){throw new Error('Unsupported');}/**
     * @param {?} content
     * @param {?} url
     * @return {?}
     */},{key:'load',value:function load(content,url){// xtb to xml nodes
var/** @type {?} */xtbParser=new XtbParser();var _xtbParser$parse=xtbParser.parse(content,url),locale=_xtbParser$parse.locale,msgIdToHtml=_xtbParser$parse.msgIdToHtml,errors=_xtbParser$parse.errors;// xml nodes to i18n nodes
var/** @type {?} */i18nNodesByMsgId={};var/** @type {?} */converter=new XmlToI18n$1();// Because we should be able to load xtb files that rely on features not supported by angular,
// we need to delay the conversion of html to i18n nodes so that non angular messages are not
// converted
Object.keys(msgIdToHtml).forEach(function(msgId){var/** @type {?} */valueFn=function valueFn(){var _converter$convert2=converter.convert(msgIdToHtml[msgId],url),i18nNodes=_converter$convert2.i18nNodes,errors=_converter$convert2.errors;if(errors.length){throw new Error('xtb parse errors:\n'+errors.join('\n'));}return i18nNodes;};createLazyProperty(i18nNodesByMsgId,msgId,valueFn);});if(errors.length){throw new Error('xtb parse errors:\n'+errors.join('\n'));}return{locale:locale,i18nNodesByMsgId:i18nNodesByMsgId};}/**
     * @param {?} message
     * @return {?}
     */},{key:'digest',value:function digest(message){return digest$1(message);}/**
     * @param {?} message
     * @return {?}
     */},{key:'createNameMapper',value:function createNameMapper(message){return new SimplePlaceholderMapper(message,toPublicName);}}]);return Xtb;}(Serializer);/**
 * @param {?} messages
 * @param {?} id
 * @param {?} valueFn
 * @return {?}
 */function createLazyProperty(messages,id,valueFn){Object.defineProperty(messages,id,{configurable:true,enumerable:true,get:function get(){var/** @type {?} */value=valueFn();Object.defineProperty(messages,id,{enumerable:true,value:value});return value;},set:function set(_){throw new Error('Could not overwrite an XTB translation');}});}var XtbParser=function(){function XtbParser(){_classCallCheck(this,XtbParser);this._locale=null;}/**
     * @param {?} xtb
     * @param {?} url
     * @return {?}
     */_createClass(XtbParser,[{key:'parse',value:function parse(xtb,url){this._bundleDepth=0;this._msgIdToHtml={};// We can not parse the ICU messages at this point as some messages might not originate
// from Angular that could not be lex'd.
var/** @type {?} */xml=new XmlParser().parse(xtb,url,false);this._errors=xml.errors;visitAll(this,xml.rootNodes);return{msgIdToHtml:this._msgIdToHtml,errors:this._errors,locale:this._locale};}/**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(element,context){switch(element.name){case _TRANSLATIONS_TAG:this._bundleDepth++;if(this._bundleDepth>1){this._addError(element,'<'+_TRANSLATIONS_TAG+'> elements can not be nested');}var/** @type {?} */langAttr=element.attrs.find(function(attr){return attr.name==='lang';});if(langAttr){this._locale=langAttr.value;}visitAll(this,element.children,null);this._bundleDepth--;break;case _TRANSLATION_TAG:var/** @type {?} */idAttr=element.attrs.find(function(attr){return attr.name==='id';});if(!idAttr){this._addError(element,'<'+_TRANSLATION_TAG+'> misses the "id" attribute');}else{var/** @type {?} */id=idAttr.value;if(this._msgIdToHtml.hasOwnProperty(id)){this._addError(element,'Duplicated translations for msg '+id);}else{var/** @type {?} */innerTextStart=element.startSourceSpan.end.offset;var/** @type {?} */innerTextEnd=element.endSourceSpan.start.offset;var/** @type {?} */content=element.startSourceSpan.start.file.content;var/** @type {?} */innerText=content.slice(innerTextStart,innerTextEnd);this._msgIdToHtml[id]=innerText;}}break;default:this._addError(element,'Unexpected tag');}}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){}/**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(expansion,context){}/**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(expansionCase,context){}/**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */},{key:'_addError',value:function _addError(node,message){this._errors.push(new I18nError(node.sourceSpan,message));}}]);return XtbParser;}();var XmlToI18n$1=function(){function XmlToI18n$1(){_classCallCheck(this,XmlToI18n$1);}_createClass(XmlToI18n$1,[{key:'convert',/**
     * @param {?} message
     * @param {?} url
     * @return {?}
     */value:function convert(message,url){var/** @type {?} */xmlIcu=new XmlParser().parse(message,url,true);this._errors=xmlIcu.errors;var/** @type {?} */i18nNodes=this._errors.length>0||xmlIcu.rootNodes.length==0?[]:visitAll(this,xmlIcu.rootNodes);return{i18nNodes:i18nNodes,errors:this._errors};}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){return new Text$1(text.value,text.sourceSpan);}/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(icu,context){var/** @type {?} */caseMap={};visitAll(this,icu.cases).forEach(function(c){caseMap[c.value]=new Container(c.nodes,icu.sourceSpan);});return new Icu(icu.switchValue,icu.type,caseMap,icu.sourceSpan);}/**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(icuCase,context){return{value:icuCase.value,nodes:visitAll(this,icuCase.expression)};}/**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(el,context){if(el.name===_PLACEHOLDER_TAG$2){var/** @type {?} */nameAttr=el.attrs.find(function(attr){return attr.name==='name';});if(nameAttr){return new Placeholder('',nameAttr.value,el.sourceSpan);}this._addError(el,'<'+_PLACEHOLDER_TAG$2+'> misses the "name" attribute');}else{this._addError(el,'Unexpected tag');}}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){}/**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */},{key:'_addError',value:function _addError(node,message){this._errors.push(new I18nError(node.sourceSpan,message));}}]);return XmlToI18n$1;}();var HtmlParser=function(_Parser$2){_inherits(HtmlParser,_Parser$2);function HtmlParser(){_classCallCheck(this,HtmlParser);return _possibleConstructorReturn(this,(HtmlParser.__proto__||Object.getPrototypeOf(HtmlParser)).call(this,getHtmlTagDefinition));}/**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */_createClass(HtmlParser,[{key:'parse',value:function parse(source,url){var parseExpansionForms=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var interpolationConfig=arguments.length>3&&arguments[3]!==undefined?arguments[3]:DEFAULT_INTERPOLATION_CONFIG;return _get(HtmlParser.prototype.__proto__||Object.getPrototypeOf(HtmlParser.prototype),'parse',this).call(this,source,url,parseExpansionForms,interpolationConfig);}}]);return HtmlParser;}(Parser$1);HtmlParser.decorators=[{type:CompilerInjectable}];/** @nocollapse */HtmlParser.ctorParameters=function(){return[];};/**
 * A container for translated messages
 */var TranslationBundle=function(){/**
     * @param {?=} _i18nNodesByMsgId
     * @param {?} locale
     * @param {?} digest
     * @param {?=} mapperFactory
     * @param {?=} missingTranslationStrategy
     * @param {?=} console
     */function TranslationBundle(){var _i18nNodesByMsgId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var locale=arguments[1];var digest=arguments[2];var mapperFactory=arguments[3];var missingTranslationStrategy=arguments.length>4&&arguments[4]!==undefined?arguments[4]:MissingTranslationStrategy.Warning;var console=arguments[5];_classCallCheck(this,TranslationBundle);this._i18nNodesByMsgId=_i18nNodesByMsgId;this.digest=digest;this.mapperFactory=mapperFactory;this._i18nToHtml=new I18nToHtmlVisitor(_i18nNodesByMsgId,locale,digest,mapperFactory,missingTranslationStrategy,console);}/**
     * @param {?} content
     * @param {?} url
     * @param {?} serializer
     * @param {?} missingTranslationStrategy
     * @param {?=} console
     * @return {?}
     */_createClass(TranslationBundle,[{key:'get',/**
     * @param {?} srcMsg
     * @return {?}
     */value:function get(srcMsg){var/** @type {?} */html=this._i18nToHtml.convert(srcMsg);if(html.errors.length){throw new Error(html.errors.join('\n'));}return html.nodes;}/**
     * @param {?} srcMsg
     * @return {?}
     */},{key:'has',value:function has(srcMsg){return this.digest(srcMsg)in this._i18nNodesByMsgId;}}],[{key:'load',value:function load(content,url,serializer,missingTranslationStrategy,console){var _serializer$load=serializer.load(content,url),locale=_serializer$load.locale,i18nNodesByMsgId=_serializer$load.i18nNodesByMsgId;var/** @type {?} */digestFn=function digestFn(m){return serializer.digest(m);};var/** @type {?} */mapperFactory=function mapperFactory(m){return serializer.createNameMapper(m);};return new TranslationBundle(i18nNodesByMsgId,locale,digestFn,mapperFactory,missingTranslationStrategy,console);}}]);return TranslationBundle;}();var I18nToHtmlVisitor=function(){/**
     * @param {?=} _i18nNodesByMsgId
     * @param {?} _locale
     * @param {?} _digest
     * @param {?} _mapperFactory
     * @param {?} _missingTranslationStrategy
     * @param {?=} _console
     */function I18nToHtmlVisitor(){var _i18nNodesByMsgId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _locale=arguments[1];var _digest=arguments[2];var _mapperFactory=arguments[3];var _missingTranslationStrategy=arguments[4];var _console=arguments[5];_classCallCheck(this,I18nToHtmlVisitor);this._i18nNodesByMsgId=_i18nNodesByMsgId;this._locale=_locale;this._digest=_digest;this._mapperFactory=_mapperFactory;this._missingTranslationStrategy=_missingTranslationStrategy;this._console=_console;this._contextStack=[];this._errors=[];}/**
     * @param {?} srcMsg
     * @return {?}
     */_createClass(I18nToHtmlVisitor,[{key:'convert',value:function convert(srcMsg){this._contextStack.length=0;this._errors.length=0;// i18n to text
var/** @type {?} */text=this._convertToText(srcMsg);// text to html
var/** @type {?} */url=srcMsg.nodes[0].sourceSpan.start.file.url;var/** @type {?} */html=new HtmlParser().parse(text,url,true);return{nodes:html.rootNodes,errors:[].concat(_toConsumableArray(this._errors),_toConsumableArray(html.errors))};}/**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){return text.value;}/**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */},{key:'visitContainer',value:function visitContainer(container,context){var _this73=this;return container.children.map(function(n){return n.visit(_this73);}).join('');}/**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcu',value:function visitIcu(icu,context){var _this74=this;var/** @type {?} */cases=Object.keys(icu.cases).map(function(k){return k+' {'+icu.cases[k].visit(_this74)+'}';});// TODO(vicb): Once all format switch to using expression placeholders
// we should throw when the placeholder is not in the source message
var/** @type {?} */exp=this._srcMsg.placeholders.hasOwnProperty(icu.expression)?this._srcMsg.placeholders[icu.expression]:icu.expression;return'{'+exp+', '+icu.type+', '+cases.join(' ')+'}';}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,context){var/** @type {?} */phName=this._mapper(ph.name);if(this._srcMsg.placeholders.hasOwnProperty(phName)){return this._srcMsg.placeholders[phName];}if(this._srcMsg.placeholderToMessage.hasOwnProperty(phName)){return this._convertToText(this._srcMsg.placeholderToMessage[phName]);}this._addError(ph,'Unknown placeholder "'+ph.name+'"');return'';}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,context){var _this75=this;var/** @type {?} */tag=''+ph.tag;var/** @type {?} */attrs=Object.keys(ph.attrs).map(function(name){return name+'="'+ph.attrs[name]+'"';}).join(' ');if(ph.isVoid){return'<'+tag+' '+attrs+'/>';}var/** @type {?} */children=ph.children.map(function(c){return c.visit(_this75);}).join('');return'<'+tag+' '+attrs+'>'+children+'</'+tag+'>';}/**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,context){// An ICU placeholder references the source message to be serialized
return this._convertToText(this._srcMsg.placeholderToMessage[ph.name]);}/**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */},{key:'_convertToText',value:function _convertToText(srcMsg){var _this76=this;var/** @type {?} */id=this._digest(srcMsg);var/** @type {?} */mapper=this._mapperFactory?this._mapperFactory(srcMsg):null;var/** @type {?} */nodes=void 0;this._contextStack.push({msg:this._srcMsg,mapper:this._mapper});this._srcMsg=srcMsg;if(this._i18nNodesByMsgId.hasOwnProperty(id)){// When there is a translation use its nodes as the source
// And create a mapper to convert serialized placeholder names to internal names
nodes=this._i18nNodesByMsgId[id];this._mapper=function(name){return mapper?mapper.toInternalName(name):name;};}else{// When no translation has been found
// - report an error / a warning / nothing,
// - use the nodes from the original message
// - placeholders are already internal and need no mapper
if(this._missingTranslationStrategy===MissingTranslationStrategy.Error){var/** @type {?} */ctx=this._locale?' for locale "'+this._locale+'"':'';this._addError(srcMsg.nodes[0],'Missing translation for message "'+id+'"'+ctx);}else if(this._console&&this._missingTranslationStrategy===MissingTranslationStrategy.Warning){var/** @type {?} */_ctx2=this._locale?' for locale "'+this._locale+'"':'';this._console.warn('Missing translation for message "'+id+'"'+_ctx2);}nodes=srcMsg.nodes;this._mapper=function(name){return name;};}var/** @type {?} */text=nodes.map(function(node){return node.visit(_this76);}).join('');var/** @type {?} */context=this._contextStack.pop();this._srcMsg=context.msg;this._mapper=context.mapper;return text;}/**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */},{key:'_addError',value:function _addError(el,msg){this._errors.push(new I18nError(el.sourceSpan,msg));}}]);return I18nToHtmlVisitor;}();var I18NHtmlParser=function(){/**
     * @param {?} _htmlParser
     * @param {?=} translations
     * @param {?=} translationsFormat
     * @param {?=} missingTranslation
     * @param {?=} console
     */function I18NHtmlParser(_htmlParser,translations,translationsFormat){var missingTranslation=arguments.length>3&&arguments[3]!==undefined?arguments[3]:MissingTranslationStrategy.Warning;var console=arguments[4];_classCallCheck(this,I18NHtmlParser);this._htmlParser=_htmlParser;if(translations){var serializer=createSerializer(translationsFormat);this._translationBundle=TranslationBundle.load(translations,'i18n',serializer,missingTranslation,console);}}/**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */_createClass(I18NHtmlParser,[{key:'parse',value:function parse(source,url){var parseExpansionForms=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var interpolationConfig=arguments.length>3&&arguments[3]!==undefined?arguments[3]:DEFAULT_INTERPOLATION_CONFIG;var/** @type {?} */parseResult=this._htmlParser.parse(source,url,parseExpansionForms,interpolationConfig);if(!this._translationBundle){// Do not enable i18n when no translation bundle is provided
return parseResult;}if(parseResult.errors.length){return new ParseTreeResult(parseResult.rootNodes,parseResult.errors);}return mergeTranslations(parseResult.rootNodes,this._translationBundle,interpolationConfig,[],{});}}]);return I18NHtmlParser;}();/**
 * @param {?=} format
 * @return {?}
 */function createSerializer(format){format=(format||'xlf').toLowerCase();switch(format){case'xmb':return new Xmb();case'xtb':return new Xtb();case'xliff':case'xlf':default:return new Xliff();}}// http://cldr.unicode.org/index/cldr-spec/plural-rules
var/** @type {?} */PLURAL_CASES=['zero','one','two','few','many','other'];/**
 * Expands special forms into elements.
 *
 * For example,
 *
 * ```
 * { messages.length, plural,
 *   =0 {zero}
 *   =1 {one}
 *   other {more than one}
 * }
 * ```
 *
 * will be expanded into
 *
 * ```
 * <ng-container [ngPlural]="messages.length">
 *   <ng-template ngPluralCase="=0">zero</ng-template>
 *   <ng-template ngPluralCase="=1">one</ng-template>
 *   <ng-template ngPluralCase="other">more than one</ng-template>
 * </ng-container>
 * ```
 * @param {?} nodes
 * @return {?}
 */function expandNodes(nodes){var/** @type {?} */expander=new _Expander();return new ExpansionResult(visitAll(expander,nodes),expander.isExpanded,expander.errors);}var ExpansionResult=/**
     * @param {?} nodes
     * @param {?} expanded
     * @param {?} errors
     */function ExpansionResult(nodes,expanded,errors){_classCallCheck(this,ExpansionResult);this.nodes=nodes;this.expanded=expanded;this.errors=errors;};var ExpansionError=function(_ParseError4){_inherits(ExpansionError,_ParseError4);/**
     * @param {?} span
     * @param {?} errorMsg
     */function ExpansionError(span,errorMsg){_classCallCheck(this,ExpansionError);return _possibleConstructorReturn(this,(ExpansionError.__proto__||Object.getPrototypeOf(ExpansionError)).call(this,span,errorMsg));}return ExpansionError;}(ParseError);/**
 * Expand expansion forms (plural, select) to directives
 *
 * \@internal
 */var _Expander=function(){function _Expander(){_classCallCheck(this,_Expander);this.isExpanded=false;this.errors=[];}/**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */_createClass(_Expander,[{key:'visitElement',value:function visitElement(element,context){return new Element(element.name,element.attrs,visitAll(this,element.children),element.sourceSpan,element.startSourceSpan,element.endSourceSpan);}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){return attribute;}/**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(text,context){return text;}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){return comment;}/**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(icu,context){this.isExpanded=true;return icu.type=='plural'?_expandPluralForm(icu,this.errors):_expandDefaultForm(icu,this.errors);}/**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(icuCase,context){throw new Error('Should not be reached');}}]);return _Expander;}();/**
 * @param {?} ast
 * @param {?} errors
 * @return {?}
 */function _expandPluralForm(ast,errors){var/** @type {?} */children=ast.cases.map(function(c){if(PLURAL_CASES.indexOf(c.value)==-1&&!c.value.match(/^=\d+$/)){errors.push(new ExpansionError(c.valueSourceSpan,'Plural cases should be "=<number>" or one of '+PLURAL_CASES.join(", ")));}var/** @type {?} */expansionResult=expandNodes(c.expression);errors.push.apply(errors,_toConsumableArray(expansionResult.errors));return new Element('ng-template',[new Attribute$1('ngPluralCase',''+c.value,c.valueSourceSpan)],expansionResult.nodes,c.sourceSpan,c.sourceSpan,c.sourceSpan);});var/** @type {?} */switchAttr=new Attribute$1('[ngPlural]',ast.switchValue,ast.switchValueSourceSpan);return new Element('ng-container',[switchAttr],children,ast.sourceSpan,ast.sourceSpan,ast.sourceSpan);}/**
 * @param {?} ast
 * @param {?} errors
 * @return {?}
 */function _expandDefaultForm(ast,errors){var/** @type {?} */children=ast.cases.map(function(c){var/** @type {?} */expansionResult=expandNodes(c.expression);errors.push.apply(errors,_toConsumableArray(expansionResult.errors));if(c.value==='other'){// other is the default case when no values match
return new Element('ng-template',[new Attribute$1('ngSwitchDefault','',c.valueSourceSpan)],expansionResult.nodes,c.sourceSpan,c.sourceSpan,c.sourceSpan);}return new Element('ng-template',[new Attribute$1('ngSwitchCase',''+c.value,c.valueSourceSpan)],expansionResult.nodes,c.sourceSpan,c.sourceSpan,c.sourceSpan);});var/** @type {?} */switchAttr=new Attribute$1('[ngSwitch]',ast.switchValue,ast.switchValueSourceSpan);return new Element('ng-container',[switchAttr],children,ast.sourceSpan,ast.sourceSpan,ast.sourceSpan);}var ProviderError=function(_ParseError5){_inherits(ProviderError,_ParseError5);/**
     * @param {?} message
     * @param {?} span
     */function ProviderError(message,span){_classCallCheck(this,ProviderError);return _possibleConstructorReturn(this,(ProviderError.__proto__||Object.getPrototypeOf(ProviderError)).call(this,span,message));}return ProviderError;}(ParseError);var ProviderViewContext=/**
     * @param {?} component
     * @param {?} sourceSpan
     */function ProviderViewContext(component,sourceSpan){var _this79=this;_classCallCheck(this,ProviderViewContext);this.component=component;this.sourceSpan=sourceSpan;this.errors=[];this.viewQueries=_getViewQueries(component);this.viewProviders=new Map();component.viewProviders.forEach(function(provider){if(isBlank(_this79.viewProviders.get(tokenReference(provider.token)))){_this79.viewProviders.set(tokenReference(provider.token),true);}});};var ProviderElementContext=function(){/**
     * @param {?} viewContext
     * @param {?} _parent
     * @param {?} _isViewRoot
     * @param {?} _directiveAsts
     * @param {?} attrs
     * @param {?} refs
     * @param {?} isTemplate
     * @param {?} contentQueryStartId
     * @param {?} _sourceSpan
     */function ProviderElementContext(viewContext,_parent,_isViewRoot,_directiveAsts,attrs,refs,isTemplate,contentQueryStartId,_sourceSpan){var _this80=this;_classCallCheck(this,ProviderElementContext);this.viewContext=viewContext;this._parent=_parent;this._isViewRoot=_isViewRoot;this._directiveAsts=_directiveAsts;this._sourceSpan=_sourceSpan;this._transformedProviders=new Map();this._seenProviders=new Map();this._hasViewContainer=false;this._queriedTokens=new Map();this._attrs={};attrs.forEach(function(attrAst){return _this80._attrs[attrAst.name]=attrAst.value;});var directivesMeta=_directiveAsts.map(function(directiveAst){return directiveAst.directive;});this._allProviders=_resolveProvidersFromDirectives(directivesMeta,_sourceSpan,viewContext.errors);this._contentQueries=_getContentQueries(contentQueryStartId,directivesMeta);Array.from(this._allProviders.values()).forEach(function(provider){_this80._addQueryReadsTo(provider.token,provider.token,_this80._queriedTokens);});if(isTemplate){var templateRefId=createIdentifierToken(Identifiers.TemplateRef);this._addQueryReadsTo(templateRefId,templateRefId,this._queriedTokens);}refs.forEach(function(refAst){var defaultQueryValue=refAst.value||createIdentifierToken(Identifiers.ElementRef);_this80._addQueryReadsTo({value:refAst.name},defaultQueryValue,_this80._queriedTokens);});if(this._queriedTokens.get(resolveIdentifier(Identifiers.ViewContainerRef))){this._hasViewContainer=true;}// create the providers that we know are eager first
Array.from(this._allProviders.values()).forEach(function(provider){var eager=provider.eager||_this80._queriedTokens.get(tokenReference(provider.token));if(eager){_this80._getOrCreateLocalProvider(provider.providerType,provider.token,true);}});}/**
     * @return {?}
     */_createClass(ProviderElementContext,[{key:'afterElement',value:function afterElement(){var _this81=this;// collect lazy providers
Array.from(this._allProviders.values()).forEach(function(provider){_this81._getOrCreateLocalProvider(provider.providerType,provider.token,false);});}/**
     * @return {?}
     */},{key:'_addQueryReadsTo',/**
     * @param {?} token
     * @param {?} defaultValue
     * @param {?} queryReadTokens
     * @return {?}
     */value:function _addQueryReadsTo(token,defaultValue,queryReadTokens){this._getQueriesFor(token).forEach(function(query){var/** @type {?} */queryValue=query.meta.read||defaultValue;var/** @type {?} */tokenRef=tokenReference(queryValue);var/** @type {?} */queryMatches=queryReadTokens.get(tokenRef);if(!queryMatches){queryMatches=[];queryReadTokens.set(tokenRef,queryMatches);}queryMatches.push({queryId:query.queryId,value:queryValue});});}/**
     * @param {?} token
     * @return {?}
     */},{key:'_getQueriesFor',value:function _getQueriesFor(token){var/** @type {?} */result=[];var/** @type {?} */currentEl=this;var/** @type {?} */distance=0;var/** @type {?} */queries=void 0;while(currentEl!==null){queries=currentEl._contentQueries.get(tokenReference(token));if(queries){result.push.apply(result,_toConsumableArray(queries.filter(function(query){return query.meta.descendants||distance<=1;})));}if(currentEl._directiveAsts.length>0){distance++;}currentEl=currentEl._parent;}queries=this.viewContext.viewQueries.get(tokenReference(token));if(queries){result.push.apply(result,_toConsumableArray(queries));}return result;}/**
     * @param {?} requestingProviderType
     * @param {?} token
     * @param {?} eager
     * @return {?}
     */},{key:'_getOrCreateLocalProvider',value:function _getOrCreateLocalProvider(requestingProviderType,token,eager){var _this82=this;var/** @type {?} */resolvedProvider=this._allProviders.get(tokenReference(token));if(!resolvedProvider||(requestingProviderType===ProviderAstType.Directive||requestingProviderType===ProviderAstType.PublicService)&&resolvedProvider.providerType===ProviderAstType.PrivateService||(requestingProviderType===ProviderAstType.PrivateService||requestingProviderType===ProviderAstType.PublicService)&&resolvedProvider.providerType===ProviderAstType.Builtin){return null;}var/** @type {?} */transformedProviderAst=this._transformedProviders.get(tokenReference(token));if(transformedProviderAst){return transformedProviderAst;}if(isPresent(this._seenProviders.get(tokenReference(token)))){this.viewContext.errors.push(new ProviderError('Cannot instantiate cyclic dependency! '+tokenName(token),this._sourceSpan));return null;}this._seenProviders.set(tokenReference(token),true);var/** @type {?} */transformedProviders=resolvedProvider.providers.map(function(provider){var/** @type {?} */transformedUseValue=provider.useValue;var/** @type {?} */transformedUseExisting=provider.useExisting;var/** @type {?} */transformedDeps=void 0;if(isPresent(provider.useExisting)){var/** @type {?} */existingDiDep=_this82._getDependency(resolvedProvider.providerType,{token:provider.useExisting},eager);if(isPresent(existingDiDep.token)){transformedUseExisting=existingDiDep.token;}else{transformedUseExisting=null;transformedUseValue=existingDiDep.value;}}else if(provider.useFactory){var/** @type {?} */deps=provider.deps||provider.useFactory.diDeps;transformedDeps=deps.map(function(dep){return _this82._getDependency(resolvedProvider.providerType,dep,eager);});}else if(provider.useClass){var/** @type {?} */_deps=provider.deps||provider.useClass.diDeps;transformedDeps=_deps.map(function(dep){return _this82._getDependency(resolvedProvider.providerType,dep,eager);});}return _transformProvider(provider,{useExisting:transformedUseExisting,useValue:transformedUseValue,deps:transformedDeps});});transformedProviderAst=_transformProviderAst(resolvedProvider,{eager:eager,providers:transformedProviders});this._transformedProviders.set(tokenReference(token),transformedProviderAst);return transformedProviderAst;}/**
     * @param {?} requestingProviderType
     * @param {?} dep
     * @param {?=} eager
     * @return {?}
     */},{key:'_getLocalDependency',value:function _getLocalDependency(requestingProviderType,dep){var eager=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(dep.isAttribute){var/** @type {?} */attrValue=this._attrs[dep.token.value];return{isValue:true,value:attrValue==null?null:attrValue};}if(isPresent(dep.token)){// access builtints
if(requestingProviderType===ProviderAstType.Directive||requestingProviderType===ProviderAstType.Component){if(tokenReference(dep.token)===resolveIdentifier(Identifiers.Renderer)||tokenReference(dep.token)===resolveIdentifier(Identifiers.ElementRef)||tokenReference(dep.token)===resolveIdentifier(Identifiers.ChangeDetectorRef)||tokenReference(dep.token)===resolveIdentifier(Identifiers.TemplateRef)){return dep;}if(tokenReference(dep.token)===resolveIdentifier(Identifiers.ViewContainerRef)){this._hasViewContainer=true;}}// access the injector
if(tokenReference(dep.token)===resolveIdentifier(Identifiers.Injector)){return dep;}// access providers
if(isPresent(this._getOrCreateLocalProvider(requestingProviderType,dep.token,eager))){return dep;}}return null;}/**
     * @param {?} requestingProviderType
     * @param {?} dep
     * @param {?=} eager
     * @return {?}
     */},{key:'_getDependency',value:function _getDependency(requestingProviderType,dep){var eager=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var/** @type {?} */currElement=this;var/** @type {?} */currEager=eager;var/** @type {?} */result=null;if(!dep.isSkipSelf){result=this._getLocalDependency(requestingProviderType,dep,eager);}if(dep.isSelf){if(!result&&dep.isOptional){result={isValue:true,value:null};}}else{// check parent elements
while(!result&&currElement._parent){var/** @type {?} */prevElement=currElement;currElement=currElement._parent;if(prevElement._isViewRoot){currEager=false;}result=currElement._getLocalDependency(ProviderAstType.PublicService,dep,currEager);}// check @Host restriction
if(!result){if(!dep.isHost||this.viewContext.component.isHost||this.viewContext.component.type.reference===tokenReference(dep.token)||isPresent(this.viewContext.viewProviders.get(tokenReference(dep.token)))){result=dep;}else{result=dep.isOptional?result={isValue:true,value:null}:null;}}}if(!result){this.viewContext.errors.push(new ProviderError('No provider for '+tokenName(dep.token),this._sourceSpan));}return result;}},{key:'transformProviders',get:function get(){return Array.from(this._transformedProviders.values());}/**
     * @return {?}
     */},{key:'transformedDirectiveAsts',get:function get(){var/** @type {?} */sortedProviderTypes=this.transformProviders.map(function(provider){return provider.token.identifier;});var/** @type {?} */sortedDirectives=this._directiveAsts.slice();sortedDirectives.sort(function(dir1,dir2){return sortedProviderTypes.indexOf(dir1.directive.type)-sortedProviderTypes.indexOf(dir2.directive.type);});return sortedDirectives;}/**
     * @return {?}
     */},{key:'transformedHasViewContainer',get:function get(){return this._hasViewContainer;}/**
     * @return {?}
     */},{key:'queryMatches',get:function get(){var/** @type {?} */allMatches=[];this._queriedTokens.forEach(function(matches){allMatches.push.apply(allMatches,_toConsumableArray(matches));});return allMatches;}}]);return ProviderElementContext;}();var NgModuleProviderAnalyzer=function(){/**
     * @param {?} ngModule
     * @param {?} extraProviders
     * @param {?} sourceSpan
     */function NgModuleProviderAnalyzer(ngModule,extraProviders,sourceSpan){var _this83=this;_classCallCheck(this,NgModuleProviderAnalyzer);this._transformedProviders=new Map();this._seenProviders=new Map();this._errors=[];this._allProviders=new Map();ngModule.transitiveModule.modules.forEach(function(ngModuleType){var ngModuleProvider={token:{identifier:ngModuleType},useClass:ngModuleType};_resolveProviders([ngModuleProvider],ProviderAstType.PublicService,true,sourceSpan,_this83._errors,_this83._allProviders);});_resolveProviders(ngModule.transitiveModule.providers.map(function(entry){return entry.provider;}).concat(extraProviders),ProviderAstType.PublicService,false,sourceSpan,this._errors,this._allProviders);}/**
     * @return {?}
     */_createClass(NgModuleProviderAnalyzer,[{key:'parse',value:function parse(){var _this84=this;Array.from(this._allProviders.values()).forEach(function(provider){_this84._getOrCreateLocalProvider(provider.token,provider.eager);});if(this._errors.length>0){var/** @type {?} */errorString=this._errors.join('\n');throw new Error('Provider parse errors:\n'+errorString);}return Array.from(this._transformedProviders.values());}/**
     * @param {?} token
     * @param {?} eager
     * @return {?}
     */},{key:'_getOrCreateLocalProvider',value:function _getOrCreateLocalProvider(token,eager){var _this85=this;var/** @type {?} */resolvedProvider=this._allProviders.get(tokenReference(token));if(!resolvedProvider){return null;}var/** @type {?} */transformedProviderAst=this._transformedProviders.get(tokenReference(token));if(transformedProviderAst){return transformedProviderAst;}if(isPresent(this._seenProviders.get(tokenReference(token)))){this._errors.push(new ProviderError('Cannot instantiate cyclic dependency! '+tokenName(token),resolvedProvider.sourceSpan));return null;}this._seenProviders.set(tokenReference(token),true);var/** @type {?} */transformedProviders=resolvedProvider.providers.map(function(provider){var/** @type {?} */transformedUseValue=provider.useValue;var/** @type {?} */transformedUseExisting=provider.useExisting;var/** @type {?} */transformedDeps=void 0;if(isPresent(provider.useExisting)){var/** @type {?} */existingDiDep=_this85._getDependency({token:provider.useExisting},eager,resolvedProvider.sourceSpan);if(isPresent(existingDiDep.token)){transformedUseExisting=existingDiDep.token;}else{transformedUseExisting=null;transformedUseValue=existingDiDep.value;}}else if(provider.useFactory){var/** @type {?} */deps=provider.deps||provider.useFactory.diDeps;transformedDeps=deps.map(function(dep){return _this85._getDependency(dep,eager,resolvedProvider.sourceSpan);});}else if(provider.useClass){var/** @type {?} */_deps2=provider.deps||provider.useClass.diDeps;transformedDeps=_deps2.map(function(dep){return _this85._getDependency(dep,eager,resolvedProvider.sourceSpan);});}return _transformProvider(provider,{useExisting:transformedUseExisting,useValue:transformedUseValue,deps:transformedDeps});});transformedProviderAst=_transformProviderAst(resolvedProvider,{eager:eager,providers:transformedProviders});this._transformedProviders.set(tokenReference(token),transformedProviderAst);return transformedProviderAst;}/**
     * @param {?} dep
     * @param {?=} eager
     * @param {?} requestorSourceSpan
     * @return {?}
     */},{key:'_getDependency',value:function _getDependency(dep){var eager=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var requestorSourceSpan=arguments[2];var/** @type {?} */foundLocal=false;if(!dep.isSkipSelf&&isPresent(dep.token)){// access the injector
if(tokenReference(dep.token)===resolveIdentifier(Identifiers.Injector)||tokenReference(dep.token)===resolveIdentifier(Identifiers.ComponentFactoryResolver)){foundLocal=true;}else if(isPresent(this._getOrCreateLocalProvider(dep.token,eager))){foundLocal=true;}}var/** @type {?} */result=dep;if(dep.isSelf&&!foundLocal){if(dep.isOptional){result={isValue:true,value:null};}else{this._errors.push(new ProviderError('No provider for '+tokenName(dep.token),requestorSourceSpan));}}return result;}}]);return NgModuleProviderAnalyzer;}();/**
 * @param {?} provider
 * @param {?} __1
 * @return {?}
 */function _transformProvider(provider,_ref27){var useExisting=_ref27.useExisting,useValue=_ref27.useValue,deps=_ref27.deps;return{token:provider.token,useClass:provider.useClass,useExisting:useExisting,useFactory:provider.useFactory,useValue:useValue,deps:deps,multi:provider.multi};}/**
 * @param {?} provider
 * @param {?} __1
 * @return {?}
 */function _transformProviderAst(provider,_ref28){var eager=_ref28.eager,providers=_ref28.providers;return new ProviderAst(provider.token,provider.multiProvider,provider.eager||eager,providers,provider.providerType,provider.lifecycleHooks,provider.sourceSpan);}/**
 * @param {?} directives
 * @param {?} sourceSpan
 * @param {?} targetErrors
 * @return {?}
 */function _resolveProvidersFromDirectives(directives,sourceSpan,targetErrors){var/** @type {?} */providersByToken=new Map();directives.forEach(function(directive){var/** @type {?} */dirProvider={token:{identifier:directive.type},useClass:directive.type};_resolveProviders([dirProvider],directive.isComponent?ProviderAstType.Component:ProviderAstType.Directive,true,sourceSpan,targetErrors,providersByToken);});// Note: directives need to be able to overwrite providers of a component!
var/** @type {?} */directivesWithComponentFirst=directives.filter(function(dir){return dir.isComponent;}).concat(directives.filter(function(dir){return!dir.isComponent;}));directivesWithComponentFirst.forEach(function(directive){_resolveProviders(directive.providers,ProviderAstType.PublicService,false,sourceSpan,targetErrors,providersByToken);_resolveProviders(directive.viewProviders,ProviderAstType.PrivateService,false,sourceSpan,targetErrors,providersByToken);});return providersByToken;}/**
 * @param {?} providers
 * @param {?} providerType
 * @param {?} eager
 * @param {?} sourceSpan
 * @param {?} targetErrors
 * @param {?} targetProvidersByToken
 * @return {?}
 */function _resolveProviders(providers,providerType,eager,sourceSpan,targetErrors,targetProvidersByToken){providers.forEach(function(provider){var/** @type {?} */resolvedProvider=targetProvidersByToken.get(tokenReference(provider.token));if(isPresent(resolvedProvider)&&!!resolvedProvider.multiProvider!==!!provider.multi){targetErrors.push(new ProviderError('Mixing multi and non multi provider is not possible for token '+tokenName(resolvedProvider.token),sourceSpan));}if(!resolvedProvider){var/** @type {?} */lifecycleHooks=provider.token.identifier&&provider.token.identifier.lifecycleHooks?provider.token.identifier.lifecycleHooks:[];resolvedProvider=new ProviderAst(provider.token,provider.multi,eager||lifecycleHooks.length>0,[provider],providerType,lifecycleHooks,sourceSpan);targetProvidersByToken.set(tokenReference(provider.token),resolvedProvider);}else{if(!provider.multi){resolvedProvider.providers.length=0;}resolvedProvider.providers.push(provider);}});}/**
 * @param {?} component
 * @return {?}
 */function _getViewQueries(component){// Note: queries start with id 1 so we can use the number in a Bloom filter!
var/** @type {?} */viewQueryId=1;var/** @type {?} */viewQueries=new Map();if(component.viewQueries){component.viewQueries.forEach(function(query){return _addQueryToTokenMap(viewQueries,{meta:query,queryId:viewQueryId++});});}return viewQueries;}/**
 * @param {?} contentQueryStartId
 * @param {?} directives
 * @return {?}
 */function _getContentQueries(contentQueryStartId,directives){var/** @type {?} */contentQueryId=contentQueryStartId;var/** @type {?} */contentQueries=new Map();directives.forEach(function(directive,directiveIndex){if(directive.queries){directive.queries.forEach(function(query){return _addQueryToTokenMap(contentQueries,{meta:query,queryId:contentQueryId++});});}});return contentQueries;}/**
 * @param {?} map
 * @param {?} query
 * @return {?}
 */function _addQueryToTokenMap(map,query){query.meta.selectors.forEach(function(token){var/** @type {?} */entry=map.get(tokenReference(token));if(!entry){entry=[];map.set(tokenReference(token),entry);}entry.push(query);});}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @abstract
 */var ElementSchemaRegistry=function(){function ElementSchemaRegistry(){_classCallCheck(this,ElementSchemaRegistry);}_createClass(ElementSchemaRegistry,[{key:'hasProperty',/**
     * @abstract
     * @param {?} tagName
     * @param {?} propName
     * @param {?} schemaMetas
     * @return {?}
     */value:function hasProperty(tagName,propName,schemaMetas){}/**
     * @abstract
     * @param {?} tagName
     * @param {?} schemaMetas
     * @return {?}
     */},{key:'hasElement',value:function hasElement(tagName,schemaMetas){}/**
     * @abstract
     * @param {?} elementName
     * @param {?} propName
     * @param {?} isAttribute
     * @return {?}
     */},{key:'securityContext',value:function securityContext(elementName,propName,isAttribute){}/**
     * @abstract
     * @return {?}
     */},{key:'allKnownElementNames',value:function allKnownElementNames(){}/**
     * @abstract
     * @param {?} propName
     * @return {?}
     */},{key:'getMappedPropName',value:function getMappedPropName(propName){}/**
     * @abstract
     * @return {?}
     */},{key:'getDefaultComponentElementName',value:function getDefaultComponentElementName(){}/**
     * @abstract
     * @param {?} name
     * @return {?}
     */},{key:'validateProperty',value:function validateProperty(name){}/**
     * @abstract
     * @param {?} name
     * @return {?}
     */},{key:'validateAttribute',value:function validateAttribute(name){}/**
     * @abstract
     * @param {?} propName
     * @return {?}
     */},{key:'normalizeAnimationStyleProperty',value:function normalizeAnimationStyleProperty(propName){}/**
     * @abstract
     * @param {?} camelCaseProp
     * @param {?} userProvidedProp
     * @param {?} val
     * @return {?}
     */},{key:'normalizeAnimationStyleValue',value:function normalizeAnimationStyleValue(camelCaseProp,userProvidedProp,val){}}]);return ElementSchemaRegistry;}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var StyleWithImports=/**
     * @param {?} style
     * @param {?} styleUrls
     */function StyleWithImports(style,styleUrls){_classCallCheck(this,StyleWithImports);this.style=style;this.styleUrls=styleUrls;};/**
 * @param {?} url
 * @return {?}
 */function isStyleUrlResolvable(url){if(url==null||url.length===0||url[0]=='/')return false;var/** @type {?} */schemeMatch=url.match(URL_WITH_SCHEMA_REGEXP);return schemeMatch===null||schemeMatch[1]=='package'||schemeMatch[1]=='asset';}/**
 * Rewrites stylesheets by resolving and removing the \@import urls that
 * are either relative or don't have a `package:` scheme
 * @param {?} resolver
 * @param {?} baseUrl
 * @param {?} cssText
 * @return {?}
 */function extractStyleUrls(resolver,baseUrl,cssText){var/** @type {?} */foundUrls=[];var/** @type {?} */modifiedCssText=cssText.replace(CSS_COMMENT_REGEXP,'').replace(CSS_IMPORT_REGEXP,function(){var/** @type {?} */url=(arguments.length<=1?undefined:arguments[1])||(arguments.length<=2?undefined:arguments[2]);if(!isStyleUrlResolvable(url)){// Do not attempt to resolve non-package absolute URLs with URI scheme
return arguments.length<=0?undefined:arguments[0];}foundUrls.push(resolver.resolve(baseUrl,url));return'';});return new StyleWithImports(modifiedCssText,foundUrls);}var/** @type {?} */CSS_IMPORT_REGEXP=/@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;var/** @type {?} */CSS_COMMENT_REGEXP=/\/\*.+?\*\//g;var/** @type {?} */URL_WITH_SCHEMA_REGEXP=/^([^:/?#]+):/;var/** @type {?} */PROPERTY_PARTS_SEPARATOR='.';var/** @type {?} */ATTRIBUTE_PREFIX='attr';var/** @type {?} */CLASS_PREFIX='class';var/** @type {?} */STYLE_PREFIX='style';var/** @type {?} */ANIMATE_PROP_PREFIX='animate-';var BoundPropertyType={};BoundPropertyType.DEFAULT=0;BoundPropertyType.LITERAL_ATTR=1;BoundPropertyType.ANIMATION=2;BoundPropertyType[BoundPropertyType.DEFAULT]="DEFAULT";BoundPropertyType[BoundPropertyType.LITERAL_ATTR]="LITERAL_ATTR";BoundPropertyType[BoundPropertyType.ANIMATION]="ANIMATION";/**
 * Represents a parsed property.
 */var BoundProperty=function(){/**
     * @param {?} name
     * @param {?} expression
     * @param {?} type
     * @param {?} sourceSpan
     */function BoundProperty(name,expression,type,sourceSpan){_classCallCheck(this,BoundProperty);this.name=name;this.expression=expression;this.type=type;this.sourceSpan=sourceSpan;}/**
     * @return {?}
     */_createClass(BoundProperty,[{key:'isLiteral',get:function get(){return this.type===BoundPropertyType.LITERAL_ATTR;}/**
     * @return {?}
     */},{key:'isAnimation',get:function get(){return this.type===BoundPropertyType.ANIMATION;}}]);return BoundProperty;}();/**
 * Parses bindings in templates and in the directive host area.
 */var BindingParser=function(){/**
     * @param {?} _exprParser
     * @param {?} _interpolationConfig
     * @param {?} _schemaRegistry
     * @param {?} pipes
     * @param {?} _targetErrors
     */function BindingParser(_exprParser,_interpolationConfig,_schemaRegistry,pipes,_targetErrors){var _this86=this;_classCallCheck(this,BindingParser);this._exprParser=_exprParser;this._interpolationConfig=_interpolationConfig;this._schemaRegistry=_schemaRegistry;this._targetErrors=_targetErrors;this.pipesByName=new Map();this._usedPipes=new Map();pipes.forEach(function(pipe){return _this86.pipesByName.set(pipe.name,pipe);});}/**
     * @return {?}
     */_createClass(BindingParser,[{key:'getUsedPipes',value:function getUsedPipes(){return Array.from(this._usedPipes.values());}/**
     * @param {?} dirMeta
     * @param {?} elementSelector
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'createDirectiveHostPropertyAsts',value:function createDirectiveHostPropertyAsts(dirMeta,elementSelector,sourceSpan){var _this87=this;if(dirMeta.hostProperties){var/** @type {?} */boundProps=[];Object.keys(dirMeta.hostProperties).forEach(function(propName){var/** @type {?} */expression=dirMeta.hostProperties[propName];if(typeof expression==='string'){_this87.parsePropertyBinding(propName,expression,true,sourceSpan,[],boundProps);}else{_this87._reportError('Value of the host property binding "'+propName+'" needs to be a string representing an expression but got "'+expression+'" ('+(typeof expression==='undefined'?'undefined':_typeof(expression))+')',sourceSpan);}});return boundProps.map(function(prop){return _this87.createElementPropertyAst(elementSelector,prop);});}}/**
     * @param {?} dirMeta
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'createDirectiveHostEventAsts',value:function createDirectiveHostEventAsts(dirMeta,sourceSpan){var _this88=this;if(dirMeta.hostListeners){var/** @type {?} */targetEventAsts=[];Object.keys(dirMeta.hostListeners).forEach(function(propName){var/** @type {?} */expression=dirMeta.hostListeners[propName];if(typeof expression==='string'){_this88.parseEvent(propName,expression,sourceSpan,[],targetEventAsts);}else{_this88._reportError('Value of the host listener "'+propName+'" needs to be a string representing an expression but got "'+expression+'" ('+(typeof expression==='undefined'?'undefined':_typeof(expression))+')',sourceSpan);}});return targetEventAsts;}}/**
     * @param {?} value
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'parseInterpolation',value:function parseInterpolation(value,sourceSpan){var/** @type {?} */sourceInfo=sourceSpan.start.toString();try{var/** @type {?} */ast=this._exprParser.parseInterpolation(value,sourceInfo,this._interpolationConfig);if(ast)this._reportExpressionParserErrors(ast.errors,sourceSpan);this._checkPipes(ast,sourceSpan);return ast;}catch(e){this._reportError(''+e,sourceSpan);return this._exprParser.wrapLiteralPrimitive('ERROR',sourceInfo);}}/**
     * @param {?} prefixToken
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @param {?} targetVars
     * @return {?}
     */},{key:'parseInlineTemplateBinding',value:function parseInlineTemplateBinding(prefixToken,value,sourceSpan,targetMatchableAttrs,targetProps,targetVars){var/** @type {?} */bindings=this._parseTemplateBindings(prefixToken,value,sourceSpan);for(var/** @type {?} */i=0;i<bindings.length;i++){var/** @type {?} */binding=bindings[i];if(binding.keyIsVar){targetVars.push(new VariableAst(binding.key,binding.name,sourceSpan));}else if(binding.expression){this._parsePropertyAst(binding.key,binding.expression,sourceSpan,targetMatchableAttrs,targetProps);}else{targetMatchableAttrs.push([binding.key,'']);this.parseLiteralAttr(binding.key,null,sourceSpan,targetMatchableAttrs,targetProps);}}}/**
     * @param {?} prefixToken
     * @param {?} value
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_parseTemplateBindings',value:function _parseTemplateBindings(prefixToken,value,sourceSpan){var _this89=this;var/** @type {?} */sourceInfo=sourceSpan.start.toString();try{var/** @type {?} */bindingsResult=this._exprParser.parseTemplateBindings(prefixToken,value,sourceInfo);this._reportExpressionParserErrors(bindingsResult.errors,sourceSpan);bindingsResult.templateBindings.forEach(function(binding){if(binding.expression){_this89._checkPipes(binding.expression,sourceSpan);}});bindingsResult.warnings.forEach(function(warning){_this89._reportError(warning,sourceSpan,ParseErrorLevel.WARNING);});return bindingsResult.templateBindings;}catch(e){this._reportError(''+e,sourceSpan);return[];}}/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @return {?}
     */},{key:'parseLiteralAttr',value:function parseLiteralAttr(name,value,sourceSpan,targetMatchableAttrs,targetProps){if(_isAnimationLabel(name)){name=name.substring(1);if(value){this._reportError('Assigning animation triggers via @prop="exp" attributes with an expression is invalid.'+' Use property bindings (e.g. [@prop]="exp") or use an attribute without a value (e.g. @prop) instead.',sourceSpan,ParseErrorLevel.FATAL);}this._parseAnimation(name,value,sourceSpan,targetMatchableAttrs,targetProps);}else{targetProps.push(new BoundProperty(name,this._exprParser.wrapLiteralPrimitive(value,''),BoundPropertyType.LITERAL_ATTR,sourceSpan));}}/**
     * @param {?} name
     * @param {?} expression
     * @param {?} isHost
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @return {?}
     */},{key:'parsePropertyBinding',value:function parsePropertyBinding(name,expression,isHost,sourceSpan,targetMatchableAttrs,targetProps){var/** @type {?} */isAnimationProp=false;if(name.startsWith(ANIMATE_PROP_PREFIX)){isAnimationProp=true;name=name.substring(ANIMATE_PROP_PREFIX.length);}else if(_isAnimationLabel(name)){isAnimationProp=true;name=name.substring(1);}if(isAnimationProp){this._parseAnimation(name,expression,sourceSpan,targetMatchableAttrs,targetProps);}else{this._parsePropertyAst(name,this._parseBinding(expression,isHost,sourceSpan),sourceSpan,targetMatchableAttrs,targetProps);}}/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @return {?}
     */},{key:'parsePropertyInterpolation',value:function parsePropertyInterpolation(name,value,sourceSpan,targetMatchableAttrs,targetProps){var/** @type {?} */expr=this.parseInterpolation(value,sourceSpan);if(expr){this._parsePropertyAst(name,expr,sourceSpan,targetMatchableAttrs,targetProps);return true;}return false;}/**
     * @param {?} name
     * @param {?} ast
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @return {?}
     */},{key:'_parsePropertyAst',value:function _parsePropertyAst(name,ast,sourceSpan,targetMatchableAttrs,targetProps){targetMatchableAttrs.push([name,ast.source]);targetProps.push(new BoundProperty(name,ast,BoundPropertyType.DEFAULT,sourceSpan));}/**
     * @param {?} name
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @return {?}
     */},{key:'_parseAnimation',value:function _parseAnimation(name,expression,sourceSpan,targetMatchableAttrs,targetProps){// This will occur when a @trigger is not paired with an expression.
// For animations it is valid to not have an expression since */void
// states will be applied by angular when the element is attached/detached
var/** @type {?} */ast=this._parseBinding(expression||'null',false,sourceSpan);targetMatchableAttrs.push([name,ast.source]);targetProps.push(new BoundProperty(name,ast,BoundPropertyType.ANIMATION,sourceSpan));}/**
     * @param {?} value
     * @param {?} isHostBinding
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_parseBinding',value:function _parseBinding(value,isHostBinding,sourceSpan){var/** @type {?} */sourceInfo=sourceSpan.start.toString();try{var/** @type {?} */ast=isHostBinding?this._exprParser.parseSimpleBinding(value,sourceInfo,this._interpolationConfig):this._exprParser.parseBinding(value,sourceInfo,this._interpolationConfig);if(ast)this._reportExpressionParserErrors(ast.errors,sourceSpan);this._checkPipes(ast,sourceSpan);return ast;}catch(e){this._reportError(''+e,sourceSpan);return this._exprParser.wrapLiteralPrimitive('ERROR',sourceInfo);}}/**
     * @param {?} elementSelector
     * @param {?} boundProp
     * @return {?}
     */},{key:'createElementPropertyAst',value:function createElementPropertyAst(elementSelector,boundProp){if(boundProp.isAnimation){return new BoundElementPropertyAst(boundProp.name,PropertyBindingType.Animation,SecurityContext.NONE,false,boundProp.expression,null,boundProp.sourceSpan);}var/** @type {?} */unit=null;var/** @type {?} */bindingType=void 0;var/** @type {?} */boundPropertyName=null;var/** @type {?} */parts=boundProp.name.split(PROPERTY_PARTS_SEPARATOR);var/** @type {?} */securityContexts=void 0;// Check check for special cases (prefix style, attr, class)
if(parts.length>1){if(parts[0]==ATTRIBUTE_PREFIX){boundPropertyName=parts[1];this._validatePropertyOrAttributeName(boundPropertyName,boundProp.sourceSpan,true);securityContexts=calcPossibleSecurityContexts(this._schemaRegistry,elementSelector,boundPropertyName,true);var/** @type {?} */nsSeparatorIdx=boundPropertyName.indexOf(':');if(nsSeparatorIdx>-1){var/** @type {?} */ns=boundPropertyName.substring(0,nsSeparatorIdx);var/** @type {?} */name=boundPropertyName.substring(nsSeparatorIdx+1);boundPropertyName=mergeNsAndName(ns,name);}bindingType=PropertyBindingType.Attribute;}else if(parts[0]==CLASS_PREFIX){boundPropertyName=parts[1];bindingType=PropertyBindingType.Class;securityContexts=[SecurityContext.NONE];}else if(parts[0]==STYLE_PREFIX){unit=parts.length>2?parts[2]:null;boundPropertyName=parts[1];bindingType=PropertyBindingType.Style;securityContexts=[SecurityContext.STYLE];}}// If not a special case, use the full property name
if(boundPropertyName===null){boundPropertyName=this._schemaRegistry.getMappedPropName(boundProp.name);securityContexts=calcPossibleSecurityContexts(this._schemaRegistry,elementSelector,boundPropertyName,false);bindingType=PropertyBindingType.Property;this._validatePropertyOrAttributeName(boundPropertyName,boundProp.sourceSpan,false);}return new BoundElementPropertyAst(boundPropertyName,bindingType,securityContexts.length===1?securityContexts[0]:null,securityContexts.length>1,boundProp.expression,unit,boundProp.sourceSpan);}/**
     * @param {?} name
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetEvents
     * @return {?}
     */},{key:'parseEvent',value:function parseEvent(name,expression,sourceSpan,targetMatchableAttrs,targetEvents){if(_isAnimationLabel(name)){name=name.substr(1);this._parseAnimationEvent(name,expression,sourceSpan,targetEvents);}else{this._parseEvent(name,expression,sourceSpan,targetMatchableAttrs,targetEvents);}}/**
     * @param {?} name
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} targetEvents
     * @return {?}
     */},{key:'_parseAnimationEvent',value:function _parseAnimationEvent(name,expression,sourceSpan,targetEvents){var/** @type {?} */matches=splitAtPeriod(name,[name,'']);var/** @type {?} */eventName=matches[0];var/** @type {?} */phase=matches[1].toLowerCase();if(phase){switch(phase){case'start':case'done':var/** @type {?} */ast=this._parseAction(expression,sourceSpan);targetEvents.push(new BoundEventAst(eventName,null,phase,ast,sourceSpan));break;default:this._reportError('The provided animation output phase value "'+phase+'" for "@'+eventName+'" is not supported (use start or done)',sourceSpan);break;}}else{this._reportError('The animation trigger output event (@'+eventName+') is missing its phase value name (start or done are currently supported)',sourceSpan);}}/**
     * @param {?} name
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetEvents
     * @return {?}
     */},{key:'_parseEvent',value:function _parseEvent(name,expression,sourceSpan,targetMatchableAttrs,targetEvents){// long format: 'target: eventName'
var _splitAtColon=splitAtColon(name,[null,name]),_splitAtColon2=_slicedToArray(_splitAtColon,2),target=_splitAtColon2[0],eventName=_splitAtColon2[1];var/** @type {?} */ast=this._parseAction(expression,sourceSpan);targetMatchableAttrs.push([name,ast.source]);targetEvents.push(new BoundEventAst(eventName,target,null,ast,sourceSpan));// Don't detect directives for event names for now,
// so don't add the event name to the matchableAttrs
}/**
     * @param {?} value
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_parseAction',value:function _parseAction(value,sourceSpan){var/** @type {?} */sourceInfo=sourceSpan.start.toString();try{var/** @type {?} */ast=this._exprParser.parseAction(value,sourceInfo,this._interpolationConfig);if(ast){this._reportExpressionParserErrors(ast.errors,sourceSpan);}if(!ast||ast.ast instanceof EmptyExpr){this._reportError('Empty expressions are not allowed',sourceSpan);return this._exprParser.wrapLiteralPrimitive('ERROR',sourceInfo);}this._checkPipes(ast,sourceSpan);return ast;}catch(e){this._reportError(''+e,sourceSpan);return this._exprParser.wrapLiteralPrimitive('ERROR',sourceInfo);}}/**
     * @param {?} message
     * @param {?} sourceSpan
     * @param {?=} level
     * @return {?}
     */},{key:'_reportError',value:function _reportError(message,sourceSpan){var level=arguments.length>2&&arguments[2]!==undefined?arguments[2]:ParseErrorLevel.FATAL;this._targetErrors.push(new ParseError(sourceSpan,message,level));}/**
     * @param {?} errors
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_reportExpressionParserErrors',value:function _reportExpressionParserErrors(errors,sourceSpan){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=errors[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var error=_step3.value;this._reportError(error.message,sourceSpan);}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}}/**
     * @param {?} ast
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_checkPipes',value:function _checkPipes(ast,sourceSpan){var _this90=this;if(ast){var/** @type {?} */collector=new PipeCollector();ast.visit(collector);collector.pipes.forEach(function(ast,pipeName){var/** @type {?} */pipeMeta=_this90.pipesByName.get(pipeName);if(!pipeMeta){_this90._reportError('The pipe \''+pipeName+'\' could not be found',new ParseSourceSpan(sourceSpan.start.moveBy(ast.span.start),sourceSpan.start.moveBy(ast.span.end)));}else{_this90._usedPipes.set(pipeName,pipeMeta);}});}}/**
     * @param {?} propName the name of the property / attribute
     * @param {?} sourceSpan
     * @param {?} isAttr true when binding to an attribute
     * @return {?}
     */},{key:'_validatePropertyOrAttributeName',value:function _validatePropertyOrAttributeName(propName,sourceSpan,isAttr){var/** @type {?} */report=isAttr?this._schemaRegistry.validateAttribute(propName):this._schemaRegistry.validateProperty(propName);if(report.error){this._reportError(report.msg,sourceSpan,ParseErrorLevel.FATAL);}}}]);return BindingParser;}();var PipeCollector=function(_RecursiveAstVisitor){_inherits(PipeCollector,_RecursiveAstVisitor);function PipeCollector(){_classCallCheck(this,PipeCollector);var _this91=_possibleConstructorReturn(this,(PipeCollector.__proto__||Object.getPrototypeOf(PipeCollector)).apply(this,arguments));_this91.pipes=new Map();return _this91;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */_createClass(PipeCollector,[{key:'visitPipe',value:function visitPipe(ast,context){this.pipes.set(ast.name,ast);ast.exp.visit(this);this.visitAll(ast.args,context);return null;}}]);return PipeCollector;}(RecursiveAstVisitor);/**
 * @param {?} name
 * @return {?}
 */function _isAnimationLabel(name){return name[0]=='@';}/**
 * @param {?} registry
 * @param {?} selector
 * @param {?} propName
 * @param {?} isAttribute
 * @return {?}
 */function calcPossibleSecurityContexts(registry,selector,propName,isAttribute){var/** @type {?} */ctxs=[];CssSelector.parse(selector).forEach(function(selector){var/** @type {?} */elementNames=selector.element?[selector.element]:registry.allKnownElementNames();var/** @type {?} */notElementNames=new Set(selector.notSelectors.filter(function(selector){return selector.isElementSelector();}).map(function(selector){return selector.element;}));var/** @type {?} */possibleElementNames=elementNames.filter(function(elementName){return!notElementNames.has(elementName);});ctxs.push.apply(ctxs,_toConsumableArray(possibleElementNames.map(function(elementName){return registry.securityContext(elementName,propName,isAttribute);})));});return ctxs.length===0?[SecurityContext.NONE]:Array.from(new Set(ctxs)).sort();}var/** @type {?} */NG_CONTENT_SELECT_ATTR='select';var/** @type {?} */NG_CONTENT_ELEMENT='ng-content';var/** @type {?} */LINK_ELEMENT='link';var/** @type {?} */LINK_STYLE_REL_ATTR='rel';var/** @type {?} */LINK_STYLE_HREF_ATTR='href';var/** @type {?} */LINK_STYLE_REL_VALUE='stylesheet';var/** @type {?} */STYLE_ELEMENT='style';var/** @type {?} */SCRIPT_ELEMENT='script';var/** @type {?} */NG_NON_BINDABLE_ATTR='ngNonBindable';var/** @type {?} */NG_PROJECT_AS='ngProjectAs';/**
 * @param {?} ast
 * @return {?}
 */function preparseElement(ast){var/** @type {?} */selectAttr=null;var/** @type {?} */hrefAttr=null;var/** @type {?} */relAttr=null;var/** @type {?} */nonBindable=false;var/** @type {?} */projectAs=null;ast.attrs.forEach(function(attr){var/** @type {?} */lcAttrName=attr.name.toLowerCase();if(lcAttrName==NG_CONTENT_SELECT_ATTR){selectAttr=attr.value;}else if(lcAttrName==LINK_STYLE_HREF_ATTR){hrefAttr=attr.value;}else if(lcAttrName==LINK_STYLE_REL_ATTR){relAttr=attr.value;}else if(attr.name==NG_NON_BINDABLE_ATTR){nonBindable=true;}else if(attr.name==NG_PROJECT_AS){if(attr.value.length>0){projectAs=attr.value;}}});selectAttr=normalizeNgContentSelect(selectAttr);var/** @type {?} */nodeName=ast.name.toLowerCase();var/** @type {?} */type=PreparsedElementType.OTHER;if(splitNsName(nodeName)[1]==NG_CONTENT_ELEMENT){type=PreparsedElementType.NG_CONTENT;}else if(nodeName==STYLE_ELEMENT){type=PreparsedElementType.STYLE;}else if(nodeName==SCRIPT_ELEMENT){type=PreparsedElementType.SCRIPT;}else if(nodeName==LINK_ELEMENT&&relAttr==LINK_STYLE_REL_VALUE){type=PreparsedElementType.STYLESHEET;}return new PreparsedElement(type,selectAttr,hrefAttr,nonBindable,projectAs);}var PreparsedElementType={};PreparsedElementType.NG_CONTENT=0;PreparsedElementType.STYLE=1;PreparsedElementType.STYLESHEET=2;PreparsedElementType.SCRIPT=3;PreparsedElementType.OTHER=4;PreparsedElementType[PreparsedElementType.NG_CONTENT]="NG_CONTENT";PreparsedElementType[PreparsedElementType.STYLE]="STYLE";PreparsedElementType[PreparsedElementType.STYLESHEET]="STYLESHEET";PreparsedElementType[PreparsedElementType.SCRIPT]="SCRIPT";PreparsedElementType[PreparsedElementType.OTHER]="OTHER";var PreparsedElement=/**
     * @param {?} type
     * @param {?} selectAttr
     * @param {?} hrefAttr
     * @param {?} nonBindable
     * @param {?} projectAs
     */function PreparsedElement(type,selectAttr,hrefAttr,nonBindable,projectAs){_classCallCheck(this,PreparsedElement);this.type=type;this.selectAttr=selectAttr;this.hrefAttr=hrefAttr;this.nonBindable=nonBindable;this.projectAs=projectAs;};/**
 * @param {?} selectAttr
 * @return {?}
 */function normalizeNgContentSelect(selectAttr){if(selectAttr===null||selectAttr.length===0){return'*';}return selectAttr;}var/** @type {?} */BIND_NAME_REGEXP=/^(?:(?:(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.+))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/;// Group 1 = "bind-"
var/** @type {?} */KW_BIND_IDX=1;// Group 2 = "let-"
var/** @type {?} */KW_LET_IDX=2;// Group 3 = "ref-/#"
var/** @type {?} */KW_REF_IDX=3;// Group 4 = "on-"
var/** @type {?} */KW_ON_IDX=4;// Group 5 = "bindon-"
var/** @type {?} */KW_BINDON_IDX=5;// Group 6 = "@"
var/** @type {?} */KW_AT_IDX=6;// Group 7 = the identifier after "bind-", "let-", "ref-/#", "on-", "bindon-" or "@"
var/** @type {?} */IDENT_KW_IDX=7;// Group 8 = identifier inside [()]
var/** @type {?} */IDENT_BANANA_BOX_IDX=8;// Group 9 = identifier inside []
var/** @type {?} */IDENT_PROPERTY_IDX=9;// Group 10 = identifier inside ()
var/** @type {?} */IDENT_EVENT_IDX=10;var/** @type {?} */NG_TEMPLATE_ELEMENT='ng-template';// deprecated in 4.x
var/** @type {?} */TEMPLATE_ELEMENT='template';// deprecated in 4.x
var/** @type {?} */TEMPLATE_ATTR='template';var/** @type {?} */TEMPLATE_ATTR_PREFIX='*';var/** @type {?} */CLASS_ATTR='class';var/** @type {?} */TEXT_CSS_SELECTOR=CssSelector.parse('*')[0];/**
 * Provides an array of {@link TemplateAstVisitor}s which will be used to transform
 * parsed templates before compilation is invoked, allowing custom expression syntax
 * and other advanced transformations.
 *
 * This is currently an internal-only feature and not meant for general use.
 */var/** @type {?} */TEMPLATE_TRANSFORMS=new InjectionToken('TemplateTransforms');var TemplateParseError=function(_ParseError6){_inherits(TemplateParseError,_ParseError6);/**
     * @param {?} message
     * @param {?} span
     * @param {?} level
     */function TemplateParseError(message,span,level){_classCallCheck(this,TemplateParseError);return _possibleConstructorReturn(this,(TemplateParseError.__proto__||Object.getPrototypeOf(TemplateParseError)).call(this,span,message,level));}return TemplateParseError;}(ParseError);var TemplateParseResult=/**
     * @param {?=} templateAst
     * @param {?=} usedPipes
     * @param {?=} errors
     */function TemplateParseResult(templateAst,usedPipes,errors){_classCallCheck(this,TemplateParseResult);this.templateAst=templateAst;this.usedPipes=usedPipes;this.errors=errors;};var TemplateParser=function(){/**
     * @param {?} _config
     * @param {?} _exprParser
     * @param {?} _schemaRegistry
     * @param {?} _htmlParser
     * @param {?} _console
     * @param {?} transforms
     */function TemplateParser(_config,_exprParser,_schemaRegistry,_htmlParser,_console,transforms){_classCallCheck(this,TemplateParser);this._config=_config;this._exprParser=_exprParser;this._schemaRegistry=_schemaRegistry;this._htmlParser=_htmlParser;this._console=_console;this.transforms=transforms;}/**
     * @param {?} component
     * @param {?} template
     * @param {?} directives
     * @param {?} pipes
     * @param {?} schemas
     * @param {?} templateUrl
     * @return {?}
     */_createClass(TemplateParser,[{key:'parse',value:function parse(component,template,directives,pipes,schemas,templateUrl){var/** @type {?} */result=this.tryParse(component,template,directives,pipes,schemas,templateUrl);var/** @type {?} */warnings=result.errors.filter(function(error){return error.level===ParseErrorLevel.WARNING;});var/** @type {?} */errors=result.errors.filter(function(error){return error.level===ParseErrorLevel.FATAL;});if(warnings.length>0){this._console.warn('Template parse warnings:\n'+warnings.join('\n'));}if(errors.length>0){var/** @type {?} */errorString=errors.join('\n');throw syntaxError('Template parse errors:\n'+errorString);}return{template:result.templateAst,pipes:result.usedPipes};}/**
     * @param {?} component
     * @param {?} template
     * @param {?} directives
     * @param {?} pipes
     * @param {?} schemas
     * @param {?} templateUrl
     * @return {?}
     */},{key:'tryParse',value:function tryParse(component,template,directives,pipes,schemas,templateUrl){return this.tryParseHtml(this.expandHtml(this._htmlParser.parse(template,templateUrl,true,this.getInterpolationConfig(component))),component,template,directives,pipes,schemas,templateUrl);}/**
     * @param {?} htmlAstWithErrors
     * @param {?} component
     * @param {?} template
     * @param {?} directives
     * @param {?} pipes
     * @param {?} schemas
     * @param {?} templateUrl
     * @return {?}
     */},{key:'tryParseHtml',value:function tryParseHtml(htmlAstWithErrors,component,template,directives,pipes,schemas,templateUrl){var/** @type {?} */result=void 0;var/** @type {?} */errors=htmlAstWithErrors.errors;var/** @type {?} */usedPipes=[];if(htmlAstWithErrors.rootNodes.length>0){var/** @type {?} */uniqDirectives=removeSummaryDuplicates(directives);var/** @type {?} */uniqPipes=removeSummaryDuplicates(pipes);var/** @type {?} */providerViewContext=new ProviderViewContext(component,htmlAstWithErrors.rootNodes[0].sourceSpan);var/** @type {?} */interpolationConfig=void 0;if(component.template&&component.template.interpolation){interpolationConfig={start:component.template.interpolation[0],end:component.template.interpolation[1]};}var/** @type {?} */bindingParser=new BindingParser(this._exprParser,interpolationConfig,this._schemaRegistry,uniqPipes,errors);var/** @type {?} */parseVisitor=new TemplateParseVisitor(this._config,providerViewContext,uniqDirectives,bindingParser,this._schemaRegistry,schemas,errors);result=visitAll(parseVisitor,htmlAstWithErrors.rootNodes,EMPTY_ELEMENT_CONTEXT);errors.push.apply(errors,_toConsumableArray(providerViewContext.errors));usedPipes.push.apply(usedPipes,_toConsumableArray(bindingParser.getUsedPipes()));}else{result=[];}this._assertNoReferenceDuplicationOnTemplate(result,errors);if(errors.length>0){return new TemplateParseResult(result,usedPipes,errors);}if(this.transforms){this.transforms.forEach(function(transform){result=templateVisitAll(transform,result);});}return new TemplateParseResult(result,usedPipes,errors);}/**
     * @param {?} htmlAstWithErrors
     * @param {?=} forced
     * @return {?}
     */},{key:'expandHtml',value:function expandHtml(htmlAstWithErrors){var forced=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var/** @type {?} */errors=htmlAstWithErrors.errors;if(errors.length==0||forced){// Transform ICU messages to angular directives
var/** @type {?} */expandedHtmlAst=expandNodes(htmlAstWithErrors.rootNodes);errors.push.apply(errors,_toConsumableArray(expandedHtmlAst.errors));htmlAstWithErrors=new ParseTreeResult(expandedHtmlAst.nodes,errors);}return htmlAstWithErrors;}/**
     * @param {?} component
     * @return {?}
     */},{key:'getInterpolationConfig',value:function getInterpolationConfig(component){if(component.template){return InterpolationConfig.fromArray(component.template.interpolation);}}/**
     * \@internal
     * @param {?} result
     * @param {?} errors
     * @return {?}
     */},{key:'_assertNoReferenceDuplicationOnTemplate',value:function _assertNoReferenceDuplicationOnTemplate(result,errors){var/** @type {?} */existingReferences=[];result.filter(function(element){return!!element.references;}).forEach(function(element){return element.references.forEach(function(reference){var/** @type {?} */name=reference.name;if(existingReferences.indexOf(name)<0){existingReferences.push(name);}else{var/** @type {?} */error=new TemplateParseError('Reference "#'+name+'" is defined several times',reference.sourceSpan,ParseErrorLevel.FATAL);errors.push(error);}});});}}]);return TemplateParser;}();TemplateParser.decorators=[{type:CompilerInjectable}];/** @nocollapse */TemplateParser.ctorParameters=function(){return[{type:CompilerConfig},{type:Parser},{type:ElementSchemaRegistry},{type:I18NHtmlParser},{type:ɵConsole},{type:Array,decorators:[{type:Optional},{type:Inject,args:[TEMPLATE_TRANSFORMS]}]}];};var TemplateParseVisitor=function(){/**
     * @param {?} config
     * @param {?} providerViewContext
     * @param {?} directives
     * @param {?} _bindingParser
     * @param {?} _schemaRegistry
     * @param {?} _schemas
     * @param {?} _targetErrors
     */function TemplateParseVisitor(config,providerViewContext,directives,_bindingParser,_schemaRegistry,_schemas,_targetErrors){var _this93=this;_classCallCheck(this,TemplateParseVisitor);this.config=config;this.providerViewContext=providerViewContext;this._bindingParser=_bindingParser;this._schemaRegistry=_schemaRegistry;this._schemas=_schemas;this._targetErrors=_targetErrors;this.selectorMatcher=new SelectorMatcher();this.directivesIndex=new Map();this.ngContentCount=0;// Note: queries start with id 1 so we can use the number in a Bloom filter!
this.contentQueryStartId=providerViewContext.component.viewQueries.length+1;directives.forEach(function(directive,index){var selector=CssSelector.parse(directive.selector);_this93.selectorMatcher.addSelectables(selector,directive);_this93.directivesIndex.set(directive,index);});}/**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */_createClass(TemplateParseVisitor,[{key:'visitExpansion',value:function visitExpansion(expansion,context){return null;}/**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(expansionCase,context){return null;}/**
     * @param {?} text
     * @param {?} parent
     * @return {?}
     */},{key:'visitText',value:function visitText(text,parent){var/** @type {?} */ngContentIndex=parent.findNgContentIndex(TEXT_CSS_SELECTOR);var/** @type {?} */expr=this._bindingParser.parseInterpolation(text.value,text.sourceSpan);return expr?new BoundTextAst(expr,ngContentIndex,text.sourceSpan):new TextAst(text.value,ngContentIndex,text.sourceSpan);}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){return new AttrAst(attribute.name,attribute.value,attribute.sourceSpan);}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){return null;}/**
     * @param {?} element
     * @param {?} parent
     * @return {?}
     */},{key:'visitElement',value:function visitElement(element,parent){var _this94=this;var/** @type {?} */queryStartIndex=this.contentQueryStartId;var/** @type {?} */nodeName=element.name;var/** @type {?} */preparsedElement=preparseElement(element);if(preparsedElement.type===PreparsedElementType.SCRIPT||preparsedElement.type===PreparsedElementType.STYLE){// Skipping <script> for security reasons
// Skipping <style> as we already processed them
// in the StyleCompiler
return null;}if(preparsedElement.type===PreparsedElementType.STYLESHEET&&isStyleUrlResolvable(preparsedElement.hrefAttr)){// Skipping stylesheets with either relative urls or package scheme as we already processed
// them in the StyleCompiler
return null;}var/** @type {?} */matchableAttrs=[];var/** @type {?} */elementOrDirectiveProps=[];var/** @type {?} */elementOrDirectiveRefs=[];var/** @type {?} */elementVars=[];var/** @type {?} */events=[];var/** @type {?} */templateElementOrDirectiveProps=[];var/** @type {?} */templateMatchableAttrs=[];var/** @type {?} */templateElementVars=[];var/** @type {?} */hasInlineTemplates=false;var/** @type {?} */attrs=[];var/** @type {?} */isTemplateElement=isTemplate(element,this.config.enableLegacyTemplate,function(m,span){return _this94._reportError(m,span,ParseErrorLevel.WARNING);});element.attrs.forEach(function(attr){var/** @type {?} */hasBinding=_this94._parseAttr(isTemplateElement,attr,matchableAttrs,elementOrDirectiveProps,events,elementOrDirectiveRefs,elementVars);var/** @type {?} */templateBindingsSource=void 0;var/** @type {?} */prefixToken=void 0;var/** @type {?} */normalizedName=_this94._normalizeAttributeName(attr.name);if(_this94.config.enableLegacyTemplate&&normalizedName==TEMPLATE_ATTR){_this94._reportError('The template attribute is deprecated. Use an ng-template element instead.',attr.sourceSpan,ParseErrorLevel.WARNING);templateBindingsSource=attr.value;}else if(normalizedName.startsWith(TEMPLATE_ATTR_PREFIX)){templateBindingsSource=attr.value;prefixToken=normalizedName.substring(TEMPLATE_ATTR_PREFIX.length)+':';}var/** @type {?} */hasTemplateBinding=isPresent(templateBindingsSource);if(hasTemplateBinding){if(hasInlineTemplates){_this94._reportError('Can\'t have multiple template bindings on one element. Use only one attribute named \'template\' or prefixed with *',attr.sourceSpan);}hasInlineTemplates=true;_this94._bindingParser.parseInlineTemplateBinding(prefixToken,templateBindingsSource,attr.sourceSpan,templateMatchableAttrs,templateElementOrDirectiveProps,templateElementVars);}if(!hasBinding&&!hasTemplateBinding){// don't include the bindings as attributes as well in the AST
attrs.push(_this94.visitAttribute(attr,null));matchableAttrs.push([attr.name,attr.value]);}});var/** @type {?} */elementCssSelector=createElementCssSelector(nodeName,matchableAttrs);var _parseDirectives2=this._parseDirectives(this.selectorMatcher,elementCssSelector),directiveMetas=_parseDirectives2.directives,matchElement=_parseDirectives2.matchElement;var/** @type {?} */references=[];var/** @type {?} */boundDirectivePropNames=new Set();var/** @type {?} */directiveAsts=this._createDirectiveAsts(isTemplateElement,element.name,directiveMetas,elementOrDirectiveProps,elementOrDirectiveRefs,element.sourceSpan,references,boundDirectivePropNames);var/** @type {?} */elementProps=this._createElementPropertyAsts(element.name,elementOrDirectiveProps,boundDirectivePropNames);var/** @type {?} */isViewRoot=parent.isTemplateElement||hasInlineTemplates;var/** @type {?} */providerContext=new ProviderElementContext(this.providerViewContext,parent.providerContext,isViewRoot,directiveAsts,attrs,references,isTemplateElement,queryStartIndex,element.sourceSpan);var/** @type {?} */children=visitAll(preparsedElement.nonBindable?NON_BINDABLE_VISITOR:this,element.children,ElementContext.create(isTemplateElement,directiveAsts,isTemplateElement?parent.providerContext:providerContext));providerContext.afterElement();// Override the actual selector when the `ngProjectAs` attribute is provided
var/** @type {?} */projectionSelector=isPresent(preparsedElement.projectAs)?CssSelector.parse(preparsedElement.projectAs)[0]:elementCssSelector;var/** @type {?} */ngContentIndex=parent.findNgContentIndex(projectionSelector);var/** @type {?} */parsedElement=void 0;if(preparsedElement.type===PreparsedElementType.NG_CONTENT){if(element.children&&!element.children.every(_isEmptyTextNode)){this._reportError('<ng-content> element cannot have content.',element.sourceSpan);}parsedElement=new NgContentAst(this.ngContentCount++,hasInlineTemplates?null:ngContentIndex,element.sourceSpan);}else if(isTemplateElement){this._assertAllEventsPublishedByDirectives(directiveAsts,events);this._assertNoComponentsNorElementBindingsOnTemplate(directiveAsts,elementProps,element.sourceSpan);parsedElement=new EmbeddedTemplateAst(attrs,events,references,elementVars,providerContext.transformedDirectiveAsts,providerContext.transformProviders,providerContext.transformedHasViewContainer,providerContext.queryMatches,children,hasInlineTemplates?null:ngContentIndex,element.sourceSpan);}else{this._assertElementExists(matchElement,element);this._assertOnlyOneComponent(directiveAsts,element.sourceSpan);var/** @type {?} */_ngContentIndex=hasInlineTemplates?null:parent.findNgContentIndex(projectionSelector);parsedElement=new ElementAst(nodeName,attrs,elementProps,events,references,providerContext.transformedDirectiveAsts,providerContext.transformProviders,providerContext.transformedHasViewContainer,providerContext.queryMatches,children,hasInlineTemplates?null:_ngContentIndex,element.sourceSpan,element.endSourceSpan);this._findComponentDirectives(directiveAsts).forEach(function(componentDirectiveAst){return _this94._validateElementAnimationInputOutputs(componentDirectiveAst.hostProperties,componentDirectiveAst.hostEvents,componentDirectiveAst.directive.template);});var/** @type {?} */componentTemplate=providerContext.viewContext.component.template;this._validateElementAnimationInputOutputs(elementProps,events,componentTemplate.toSummary());}if(hasInlineTemplates){var/** @type {?} */templateQueryStartIndex=this.contentQueryStartId;var/** @type {?} */templateSelector=createElementCssSelector(TEMPLATE_ELEMENT,templateMatchableAttrs);var _parseDirectives3=this._parseDirectives(this.selectorMatcher,templateSelector),templateDirectiveMetas=_parseDirectives3.directives;var/** @type {?} */templateBoundDirectivePropNames=new Set();var/** @type {?} */templateDirectiveAsts=this._createDirectiveAsts(true,element.name,templateDirectiveMetas,templateElementOrDirectiveProps,[],element.sourceSpan,[],templateBoundDirectivePropNames);var/** @type {?} */templateElementProps=this._createElementPropertyAsts(element.name,templateElementOrDirectiveProps,templateBoundDirectivePropNames);this._assertNoComponentsNorElementBindingsOnTemplate(templateDirectiveAsts,templateElementProps,element.sourceSpan);var/** @type {?} */templateProviderContext=new ProviderElementContext(this.providerViewContext,parent.providerContext,parent.isTemplateElement,templateDirectiveAsts,[],[],true,templateQueryStartIndex,element.sourceSpan);templateProviderContext.afterElement();parsedElement=new EmbeddedTemplateAst([],[],[],templateElementVars,templateProviderContext.transformedDirectiveAsts,templateProviderContext.transformProviders,templateProviderContext.transformedHasViewContainer,templateProviderContext.queryMatches,[parsedElement],ngContentIndex,element.sourceSpan);}return parsedElement;}/**
     * @param {?} inputs
     * @param {?} outputs
     * @param {?} template
     * @return {?}
     */},{key:'_validateElementAnimationInputOutputs',value:function _validateElementAnimationInputOutputs(inputs,outputs,template){var _this95=this;if(this.config.useViewEngine)return;var/** @type {?} */triggerLookup=new Set();template.animations.forEach(function(entry){triggerLookup.add(entry);});var/** @type {?} */animationInputs=inputs.filter(function(input){return input.isAnimation;});animationInputs.forEach(function(input){var/** @type {?} */name=input.name;if(!triggerLookup.has(name)){_this95._reportError('Couldn\'t find an animation entry for "'+name+'"',input.sourceSpan);}});outputs.forEach(function(output){if(output.isAnimation){var/** @type {?} */found=animationInputs.find(function(input){return input.name==output.name;});if(!found){_this95._reportError('Unable to listen on (@'+output.name+'.'+output.phase+') because the animation trigger [@'+output.name+'] isn\'t being used on the same element',output.sourceSpan);}}});}/**
     * @param {?} isTemplateElement
     * @param {?} attr
     * @param {?} targetMatchableAttrs
     * @param {?} targetProps
     * @param {?} targetEvents
     * @param {?} targetRefs
     * @param {?} targetVars
     * @return {?}
     */},{key:'_parseAttr',value:function _parseAttr(isTemplateElement,attr,targetMatchableAttrs,targetProps,targetEvents,targetRefs,targetVars){var/** @type {?} */name=this._normalizeAttributeName(attr.name);var/** @type {?} */value=attr.value;var/** @type {?} */srcSpan=attr.sourceSpan;var/** @type {?} */bindParts=name.match(BIND_NAME_REGEXP);var/** @type {?} */hasBinding=false;if(bindParts!==null){hasBinding=true;if(isPresent(bindParts[KW_BIND_IDX])){this._bindingParser.parsePropertyBinding(bindParts[IDENT_KW_IDX],value,false,srcSpan,targetMatchableAttrs,targetProps);}else if(bindParts[KW_LET_IDX]){if(isTemplateElement){var/** @type {?} */identifier=bindParts[IDENT_KW_IDX];this._parseVariable(identifier,value,srcSpan,targetVars);}else{this._reportError('"let-" is only supported on template elements.',srcSpan);}}else if(bindParts[KW_REF_IDX]){var/** @type {?} */_identifier=bindParts[IDENT_KW_IDX];this._parseReference(_identifier,value,srcSpan,targetRefs);}else if(bindParts[KW_ON_IDX]){this._bindingParser.parseEvent(bindParts[IDENT_KW_IDX],value,srcSpan,targetMatchableAttrs,targetEvents);}else if(bindParts[KW_BINDON_IDX]){this._bindingParser.parsePropertyBinding(bindParts[IDENT_KW_IDX],value,false,srcSpan,targetMatchableAttrs,targetProps);this._parseAssignmentEvent(bindParts[IDENT_KW_IDX],value,srcSpan,targetMatchableAttrs,targetEvents);}else if(bindParts[KW_AT_IDX]){this._bindingParser.parseLiteralAttr(name,value,srcSpan,targetMatchableAttrs,targetProps);}else if(bindParts[IDENT_BANANA_BOX_IDX]){this._bindingParser.parsePropertyBinding(bindParts[IDENT_BANANA_BOX_IDX],value,false,srcSpan,targetMatchableAttrs,targetProps);this._parseAssignmentEvent(bindParts[IDENT_BANANA_BOX_IDX],value,srcSpan,targetMatchableAttrs,targetEvents);}else if(bindParts[IDENT_PROPERTY_IDX]){this._bindingParser.parsePropertyBinding(bindParts[IDENT_PROPERTY_IDX],value,false,srcSpan,targetMatchableAttrs,targetProps);}else if(bindParts[IDENT_EVENT_IDX]){this._bindingParser.parseEvent(bindParts[IDENT_EVENT_IDX],value,srcSpan,targetMatchableAttrs,targetEvents);}}else{hasBinding=this._bindingParser.parsePropertyInterpolation(name,value,srcSpan,targetMatchableAttrs,targetProps);}if(!hasBinding){this._bindingParser.parseLiteralAttr(name,value,srcSpan,targetMatchableAttrs,targetProps);}return hasBinding;}/**
     * @param {?} attrName
     * @return {?}
     */},{key:'_normalizeAttributeName',value:function _normalizeAttributeName(attrName){return /^data-/i.test(attrName)?attrName.substring(5):attrName;}/**
     * @param {?} identifier
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?} targetVars
     * @return {?}
     */},{key:'_parseVariable',value:function _parseVariable(identifier,value,sourceSpan,targetVars){if(identifier.indexOf('-')>-1){this._reportError('"-" is not allowed in variable names',sourceSpan);}targetVars.push(new VariableAst(identifier,value,sourceSpan));}/**
     * @param {?} identifier
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?} targetRefs
     * @return {?}
     */},{key:'_parseReference',value:function _parseReference(identifier,value,sourceSpan,targetRefs){if(identifier.indexOf('-')>-1){this._reportError('"-" is not allowed in reference names',sourceSpan);}targetRefs.push(new ElementOrDirectiveRef(identifier,value,sourceSpan));}/**
     * @param {?} name
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} targetMatchableAttrs
     * @param {?} targetEvents
     * @return {?}
     */},{key:'_parseAssignmentEvent',value:function _parseAssignmentEvent(name,expression,sourceSpan,targetMatchableAttrs,targetEvents){this._bindingParser.parseEvent(name+'Change',expression+'=$event',sourceSpan,targetMatchableAttrs,targetEvents);}/**
     * @param {?} selectorMatcher
     * @param {?} elementCssSelector
     * @return {?}
     */},{key:'_parseDirectives',value:function _parseDirectives(selectorMatcher,elementCssSelector){var _this96=this;// Need to sort the directives so that we get consistent results throughout,
// as selectorMatcher uses Maps inside.
// Also deduplicate directives as they might match more than one time!
var/** @type {?} */directives=new Array(this.directivesIndex.size);// Whether any directive selector matches on the element name
var/** @type {?} */matchElement=false;selectorMatcher.match(elementCssSelector,function(selector,directive){directives[_this96.directivesIndex.get(directive)]=directive;matchElement=matchElement||selector.hasElementSelector();});return{directives:directives.filter(function(dir){return!!dir;}),matchElement:matchElement};}/**
     * @param {?} isTemplateElement
     * @param {?} elementName
     * @param {?} directives
     * @param {?} props
     * @param {?} elementOrDirectiveRefs
     * @param {?} elementSourceSpan
     * @param {?} targetReferences
     * @param {?} targetBoundDirectivePropNames
     * @return {?}
     */},{key:'_createDirectiveAsts',value:function _createDirectiveAsts(isTemplateElement,elementName,directives,props,elementOrDirectiveRefs,elementSourceSpan,targetReferences,targetBoundDirectivePropNames){var _this97=this;var/** @type {?} */matchedReferences=new Set();var/** @type {?} */component=null;var/** @type {?} */directiveAsts=directives.map(function(directive){var/** @type {?} */sourceSpan=new ParseSourceSpan(elementSourceSpan.start,elementSourceSpan.end,'Directive '+identifierName(directive.type));if(directive.isComponent){component=directive;}var/** @type {?} */directiveProperties=[];var/** @type {?} */hostProperties=_this97._bindingParser.createDirectiveHostPropertyAsts(directive,_this97.config.useViewEngine?elementName:directive.selector,sourceSpan);// Note: We need to check the host properties here as well,
// as we don't know the element name in the DirectiveWrapperCompiler yet.
hostProperties=_this97._checkPropertiesInSchema(elementName,hostProperties);var/** @type {?} */hostEvents=_this97._bindingParser.createDirectiveHostEventAsts(directive,sourceSpan);_this97._createDirectivePropertyAsts(directive.inputs,props,directiveProperties,targetBoundDirectivePropNames);elementOrDirectiveRefs.forEach(function(elOrDirRef){if(elOrDirRef.value.length===0&&directive.isComponent||directive.exportAs==elOrDirRef.value){targetReferences.push(new ReferenceAst(elOrDirRef.name,identifierToken(directive.type),elOrDirRef.sourceSpan));matchedReferences.add(elOrDirRef.name);}});var/** @type {?} */contentQueryStartId=_this97.contentQueryStartId;_this97.contentQueryStartId+=directive.queries.length;return new DirectiveAst(directive,directiveProperties,hostProperties,hostEvents,contentQueryStartId,sourceSpan);});elementOrDirectiveRefs.forEach(function(elOrDirRef){if(elOrDirRef.value.length>0){if(!matchedReferences.has(elOrDirRef.name)){_this97._reportError('There is no directive with "exportAs" set to "'+elOrDirRef.value+'"',elOrDirRef.sourceSpan);}}else if(!component){var/** @type {?} */refToken=null;if(isTemplateElement){refToken=createIdentifierToken(Identifiers.TemplateRef);}targetReferences.push(new ReferenceAst(elOrDirRef.name,refToken,elOrDirRef.sourceSpan));}});return directiveAsts;}/**
     * @param {?} directiveProperties
     * @param {?} boundProps
     * @param {?} targetBoundDirectiveProps
     * @param {?} targetBoundDirectivePropNames
     * @return {?}
     */},{key:'_createDirectivePropertyAsts',value:function _createDirectivePropertyAsts(directiveProperties,boundProps,targetBoundDirectiveProps,targetBoundDirectivePropNames){if(directiveProperties){var/** @type {?} */boundPropsByName=new Map();boundProps.forEach(function(boundProp){var/** @type {?} */prevValue=boundPropsByName.get(boundProp.name);if(!prevValue||prevValue.isLiteral){// give [a]="b" a higher precedence than a="b" on the same element
boundPropsByName.set(boundProp.name,boundProp);}});Object.keys(directiveProperties).forEach(function(dirProp){var/** @type {?} */elProp=directiveProperties[dirProp];var/** @type {?} */boundProp=boundPropsByName.get(elProp);// Bindings are optional, so this binding only needs to be set up if an expression is given.
if(boundProp){targetBoundDirectivePropNames.add(boundProp.name);if(!isEmptyExpression(boundProp.expression)){targetBoundDirectiveProps.push(new BoundDirectivePropertyAst(dirProp,boundProp.name,boundProp.expression,boundProp.sourceSpan));}}});}}/**
     * @param {?} elementName
     * @param {?} props
     * @param {?} boundDirectivePropNames
     * @return {?}
     */},{key:'_createElementPropertyAsts',value:function _createElementPropertyAsts(elementName,props,boundDirectivePropNames){var _this98=this;var/** @type {?} */boundElementProps=[];props.forEach(function(prop){if(!prop.isLiteral&&!boundDirectivePropNames.has(prop.name)){boundElementProps.push(_this98._bindingParser.createElementPropertyAst(elementName,prop));}});return this._checkPropertiesInSchema(elementName,boundElementProps);}/**
     * @param {?} directives
     * @return {?}
     */},{key:'_findComponentDirectives',value:function _findComponentDirectives(directives){return directives.filter(function(directive){return directive.directive.isComponent;});}/**
     * @param {?} directives
     * @return {?}
     */},{key:'_findComponentDirectiveNames',value:function _findComponentDirectiveNames(directives){return this._findComponentDirectives(directives).map(function(directive){return identifierName(directive.directive.type);});}/**
     * @param {?} directives
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_assertOnlyOneComponent',value:function _assertOnlyOneComponent(directives,sourceSpan){var/** @type {?} */componentTypeNames=this._findComponentDirectiveNames(directives);if(componentTypeNames.length>1){this._reportError('More than one component matched on this element.\n'+'Make sure that only one component\'s selector can match a given element.\n'+('Conflicting components: '+componentTypeNames.join(',')),sourceSpan);}}/**
     * Make sure that non-angular tags conform to the schemas.
     *
     * Note: An element is considered an angular tag when at least one directive selector matches the
     * tag name.
     *
     * @param {?} matchElement Whether any directive has matched on the tag name
     * @param {?} element the html element
     * @return {?}
     */},{key:'_assertElementExists',value:function _assertElementExists(matchElement,element){var/** @type {?} */elName=element.name.replace(/^:xhtml:/,'');if(!matchElement&&!this._schemaRegistry.hasElement(elName,this._schemas)){var/** @type {?} */errorMsg='\''+elName+'\' is not a known element:\n';errorMsg+='1. If \''+elName+'\' is an Angular component, then verify that it is part of this module.\n';if(elName.indexOf('-')>-1){errorMsg+='2. If \''+elName+'\' is a Web Component then add \'CUSTOM_ELEMENTS_SCHEMA\' to the \'@NgModule.schemas\' of this component to suppress this message.';}else{errorMsg+='2. To allow any element add \'NO_ERRORS_SCHEMA\' to the \'@NgModule.schemas\' of this component.';}this._reportError(errorMsg,element.sourceSpan);}}/**
     * @param {?} directives
     * @param {?} elementProps
     * @param {?} sourceSpan
     * @return {?}
     */},{key:'_assertNoComponentsNorElementBindingsOnTemplate',value:function _assertNoComponentsNorElementBindingsOnTemplate(directives,elementProps,sourceSpan){var _this99=this;var/** @type {?} */componentTypeNames=this._findComponentDirectiveNames(directives);if(componentTypeNames.length>0){this._reportError('Components on an embedded template: '+componentTypeNames.join(','),sourceSpan);}elementProps.forEach(function(prop){_this99._reportError('Property binding '+prop.name+' not used by any directive on an embedded template. Make sure that the property name is spelled correctly and all directives are listed in the "@NgModule.declarations".',sourceSpan);});}/**
     * @param {?} directives
     * @param {?} events
     * @return {?}
     */},{key:'_assertAllEventsPublishedByDirectives',value:function _assertAllEventsPublishedByDirectives(directives,events){var _this100=this;var/** @type {?} */allDirectiveEvents=new Set();directives.forEach(function(directive){Object.keys(directive.directive.outputs).forEach(function(k){var/** @type {?} */eventName=directive.directive.outputs[k];allDirectiveEvents.add(eventName);});});events.forEach(function(event){if(isPresent(event.target)||!allDirectiveEvents.has(event.name)){_this100._reportError('Event binding '+event.fullName+' not emitted by any directive on an embedded template. Make sure that the event name is spelled correctly and all directives are listed in the "@NgModule.declarations".',event.sourceSpan);}});}/**
     * @param {?} elementName
     * @param {?} boundProps
     * @return {?}
     */},{key:'_checkPropertiesInSchema',value:function _checkPropertiesInSchema(elementName,boundProps){var _this101=this;// Note: We can't filter out empty expressions before this method,
// as we still want to validate them!
return boundProps.filter(function(boundProp){if(boundProp.type===PropertyBindingType.Property&&!_this101._schemaRegistry.hasProperty(elementName,boundProp.name,_this101._schemas)){var/** @type {?} */errorMsg='Can\'t bind to \''+boundProp.name+'\' since it isn\'t a known property of \''+elementName+'\'.';if(elementName.startsWith('ng-')){errorMsg+='\n1. If \''+boundProp.name+'\' is an Angular directive, then add \'CommonModule\' to the \'@NgModule.imports\' of this component.'+'\n2. To allow any property add \'NO_ERRORS_SCHEMA\' to the \'@NgModule.schemas\' of this component.';}else if(elementName.indexOf('-')>-1){errorMsg+='\n1. If \''+elementName+'\' is an Angular component and it has \''+boundProp.name+'\' input, then verify that it is part of this module.'+('\n2. If \''+elementName+'\' is a Web Component then add \'CUSTOM_ELEMENTS_SCHEMA\' to the \'@NgModule.schemas\' of this component to suppress this message.')+'\n3. To allow any property add \'NO_ERRORS_SCHEMA\' to the \'@NgModule.schemas\' of this component.';}_this101._reportError(errorMsg,boundProp.sourceSpan);}return!isEmptyExpression(boundProp.value);});}/**
     * @param {?} message
     * @param {?} sourceSpan
     * @param {?=} level
     * @return {?}
     */},{key:'_reportError',value:function _reportError(message,sourceSpan){var level=arguments.length>2&&arguments[2]!==undefined?arguments[2]:ParseErrorLevel.FATAL;this._targetErrors.push(new ParseError(sourceSpan,message,level));}}]);return TemplateParseVisitor;}();var NonBindableVisitor=function(){function NonBindableVisitor(){_classCallCheck(this,NonBindableVisitor);}_createClass(NonBindableVisitor,[{key:'visitElement',/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */value:function visitElement(ast,parent){var/** @type {?} */preparsedElement=preparseElement(ast);if(preparsedElement.type===PreparsedElementType.SCRIPT||preparsedElement.type===PreparsedElementType.STYLE||preparsedElement.type===PreparsedElementType.STYLESHEET){// Skipping <script> for security reasons
// Skipping <style> and stylesheets as we already processed them
// in the StyleCompiler
return null;}var/** @type {?} */attrNameAndValues=ast.attrs.map(function(attr){return[attr.name,attr.value];});var/** @type {?} */selector=createElementCssSelector(ast.name,attrNameAndValues);var/** @type {?} */ngContentIndex=parent.findNgContentIndex(selector);var/** @type {?} */children=visitAll(this,ast.children,EMPTY_ELEMENT_CONTEXT);return new ElementAst(ast.name,visitAll(this,ast.attrs),[],[],[],[],[],false,[],children,ngContentIndex,ast.sourceSpan,ast.endSourceSpan);}/**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(comment,context){return null;}/**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(attribute,context){return new AttrAst(attribute.name,attribute.value,attribute.sourceSpan);}/**
     * @param {?} text
     * @param {?} parent
     * @return {?}
     */},{key:'visitText',value:function visitText(text,parent){var/** @type {?} */ngContentIndex=parent.findNgContentIndex(TEXT_CSS_SELECTOR);return new TextAst(text.value,ngContentIndex,text.sourceSpan);}/**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(expansion,context){return expansion;}/**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(expansionCase,context){return expansionCase;}}]);return NonBindableVisitor;}();var ElementOrDirectiveRef=/**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     */function ElementOrDirectiveRef(name,value,sourceSpan){_classCallCheck(this,ElementOrDirectiveRef);this.name=name;this.value=value;this.sourceSpan=sourceSpan;};/**
 * @param {?} classAttrValue
 * @return {?}
 */function splitClasses(classAttrValue){return classAttrValue.trim().split(/\s+/g);}var ElementContext=function(){/**
     * @param {?} isTemplateElement
     * @param {?} _ngContentIndexMatcher
     * @param {?} _wildcardNgContentIndex
     * @param {?} providerContext
     */function ElementContext(isTemplateElement,_ngContentIndexMatcher,_wildcardNgContentIndex,providerContext){_classCallCheck(this,ElementContext);this.isTemplateElement=isTemplateElement;this._ngContentIndexMatcher=_ngContentIndexMatcher;this._wildcardNgContentIndex=_wildcardNgContentIndex;this.providerContext=providerContext;}/**
     * @param {?} isTemplateElement
     * @param {?} directives
     * @param {?} providerContext
     * @return {?}
     */_createClass(ElementContext,[{key:'findNgContentIndex',/**
     * @param {?} selector
     * @return {?}
     */value:function findNgContentIndex(selector){var/** @type {?} */ngContentIndices=[];this._ngContentIndexMatcher.match(selector,function(selector,ngContentIndex){ngContentIndices.push(ngContentIndex);});ngContentIndices.sort();if(isPresent(this._wildcardNgContentIndex)){ngContentIndices.push(this._wildcardNgContentIndex);}return ngContentIndices.length>0?ngContentIndices[0]:null;}}],[{key:'create',value:function create(isTemplateElement,directives,providerContext){var/** @type {?} */matcher=new SelectorMatcher();var/** @type {?} */wildcardNgContentIndex=null;var/** @type {?} */component=directives.find(function(directive){return directive.directive.isComponent;});if(component){var/** @type {?} */ngContentSelectors=component.directive.template.ngContentSelectors;for(var/** @type {?} */i=0;i<ngContentSelectors.length;i++){var/** @type {?} */selector=ngContentSelectors[i];if(selector==='*'){wildcardNgContentIndex=i;}else{matcher.addSelectables(CssSelector.parse(ngContentSelectors[i]),i);}}}return new ElementContext(isTemplateElement,matcher,wildcardNgContentIndex,providerContext);}}]);return ElementContext;}();/**
 * @param {?} elementName
 * @param {?} attributes
 * @return {?}
 */function createElementCssSelector(elementName,attributes){var/** @type {?} */cssSelector=new CssSelector();var/** @type {?} */elNameNoNs=splitNsName(elementName)[1];cssSelector.setElement(elNameNoNs);for(var/** @type {?} */i=0;i<attributes.length;i++){var/** @type {?} */attrName=attributes[i][0];var/** @type {?} */attrNameNoNs=splitNsName(attrName)[1];var/** @type {?} */attrValue=attributes[i][1];cssSelector.addAttribute(attrNameNoNs,attrValue);if(attrName.toLowerCase()==CLASS_ATTR){var/** @type {?} */classes=splitClasses(attrValue);classes.forEach(function(className){return cssSelector.addClassName(className);});}}return cssSelector;}var/** @type {?} */EMPTY_ELEMENT_CONTEXT=new ElementContext(true,new SelectorMatcher(),null,null);var/** @type {?} */NON_BINDABLE_VISITOR=new NonBindableVisitor();/**
 * @param {?} node
 * @return {?}
 */function _isEmptyTextNode(node){return node instanceof Text&&node.value.trim().length==0;}/**
 * @param {?} items
 * @return {?}
 */function removeSummaryDuplicates(items){var/** @type {?} */map=new Map();items.forEach(function(item){if(!map.get(item.type.reference)){map.set(item.type.reference,item);}});return Array.from(map.values());}/**
 * @param {?} ast
 * @return {?}
 */function isEmptyExpression(ast){if(ast instanceof ASTWithSource){ast=ast.ast;}return ast instanceof EmptyExpr;}/**
 * @param {?} el
 * @param {?} enableLegacyTemplate
 * @param {?} reportDeprecation
 * @return {?}
 */function isTemplate(el,enableLegacyTemplate,reportDeprecation){var/** @type {?} */tagNoNs=splitNsName(el.name)[1];// `<ng-template>` is an angular construct and is lower case
if(tagNoNs===NG_TEMPLATE_ELEMENT)return true;// `<template>` is HTML and case insensitive
if(tagNoNs.toLowerCase()===TEMPLATE_ELEMENT){if(enableLegacyTemplate&&tagNoNs.toLowerCase()===TEMPLATE_ELEMENT){reportDeprecation('The <template> element is deprecated. Use <ng-template> instead',el.sourceSpan);return true;}return false;}}/**
 * @abstract
 */var AnimationAst=function(){function AnimationAst(){_classCallCheck(this,AnimationAst);this.startTime=0;this.playTime=0;}/**
     * @abstract
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationAst,[{key:'visit',value:function visit(visitor,context){}}]);return AnimationAst;}();/**
 * @abstract
 */var AnimationStateAst=function(_AnimationAst){_inherits(AnimationStateAst,_AnimationAst);function AnimationStateAst(){_classCallCheck(this,AnimationStateAst);return _possibleConstructorReturn(this,(AnimationStateAst.__proto__||Object.getPrototypeOf(AnimationStateAst)).apply(this,arguments));}_createClass(AnimationStateAst,[{key:'visit',/**
     * @abstract
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */value:function visit(visitor,context){}}]);return AnimationStateAst;}(AnimationAst);var AnimationEntryAst=function(_AnimationAst2){_inherits(AnimationEntryAst,_AnimationAst2);/**
     * @param {?} name
     * @param {?} stateDeclarations
     * @param {?} stateTransitions
     */function AnimationEntryAst(name,stateDeclarations,stateTransitions){_classCallCheck(this,AnimationEntryAst);var _this103=_possibleConstructorReturn(this,(AnimationEntryAst.__proto__||Object.getPrototypeOf(AnimationEntryAst)).call(this));_this103.name=name;_this103.stateDeclarations=stateDeclarations;_this103.stateTransitions=stateTransitions;return _this103;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationEntryAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationEntry(this,context);}}]);return AnimationEntryAst;}(AnimationAst);var AnimationStateDeclarationAst=function(_AnimationStateAst){_inherits(AnimationStateDeclarationAst,_AnimationStateAst);/**
     * @param {?} stateName
     * @param {?} styles
     */function AnimationStateDeclarationAst(stateName,styles){_classCallCheck(this,AnimationStateDeclarationAst);var _this104=_possibleConstructorReturn(this,(AnimationStateDeclarationAst.__proto__||Object.getPrototypeOf(AnimationStateDeclarationAst)).call(this));_this104.stateName=stateName;_this104.styles=styles;return _this104;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationStateDeclarationAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationStateDeclaration(this,context);}}]);return AnimationStateDeclarationAst;}(AnimationStateAst);var AnimationStateTransitionExpression=/**
     * @param {?} fromState
     * @param {?} toState
     */function AnimationStateTransitionExpression(fromState,toState){_classCallCheck(this,AnimationStateTransitionExpression);this.fromState=fromState;this.toState=toState;};var AnimationStateTransitionFnExpression=function(_AnimationStateTransi){_inherits(AnimationStateTransitionFnExpression,_AnimationStateTransi);/**
     * @param {?} fn
     */function AnimationStateTransitionFnExpression(fn){_classCallCheck(this,AnimationStateTransitionFnExpression);var _this105=_possibleConstructorReturn(this,(AnimationStateTransitionFnExpression.__proto__||Object.getPrototypeOf(AnimationStateTransitionFnExpression)).call(this,null,null));_this105.fn=fn;return _this105;}return AnimationStateTransitionFnExpression;}(AnimationStateTransitionExpression);var AnimationStateTransitionAst=function(_AnimationStateAst2){_inherits(AnimationStateTransitionAst,_AnimationStateAst2);/**
     * @param {?} stateChanges
     * @param {?} animation
     */function AnimationStateTransitionAst(stateChanges,animation){_classCallCheck(this,AnimationStateTransitionAst);var _this106=_possibleConstructorReturn(this,(AnimationStateTransitionAst.__proto__||Object.getPrototypeOf(AnimationStateTransitionAst)).call(this));_this106.stateChanges=stateChanges;_this106.animation=animation;return _this106;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationStateTransitionAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationStateTransition(this,context);}}]);return AnimationStateTransitionAst;}(AnimationStateAst);var AnimationStepAst=function(_AnimationAst3){_inherits(AnimationStepAst,_AnimationAst3);/**
     * @param {?} startingStyles
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     */function AnimationStepAst(startingStyles,keyframes,duration,delay,easing){_classCallCheck(this,AnimationStepAst);var _this107=_possibleConstructorReturn(this,(AnimationStepAst.__proto__||Object.getPrototypeOf(AnimationStepAst)).call(this));_this107.startingStyles=startingStyles;_this107.keyframes=keyframes;_this107.duration=duration;_this107.delay=delay;_this107.easing=easing;return _this107;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationStepAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationStep(this,context);}}]);return AnimationStepAst;}(AnimationAst);var AnimationStylesAst=function(_AnimationAst4){_inherits(AnimationStylesAst,_AnimationAst4);/**
     * @param {?} styles
     */function AnimationStylesAst(styles){_classCallCheck(this,AnimationStylesAst);var _this108=_possibleConstructorReturn(this,(AnimationStylesAst.__proto__||Object.getPrototypeOf(AnimationStylesAst)).call(this));_this108.styles=styles;return _this108;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationStylesAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationStyles(this,context);}}]);return AnimationStylesAst;}(AnimationAst);var AnimationKeyframeAst=function(_AnimationAst5){_inherits(AnimationKeyframeAst,_AnimationAst5);/**
     * @param {?} offset
     * @param {?} styles
     */function AnimationKeyframeAst(offset,styles){_classCallCheck(this,AnimationKeyframeAst);var _this109=_possibleConstructorReturn(this,(AnimationKeyframeAst.__proto__||Object.getPrototypeOf(AnimationKeyframeAst)).call(this));_this109.offset=offset;_this109.styles=styles;return _this109;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationKeyframeAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationKeyframe(this,context);}}]);return AnimationKeyframeAst;}(AnimationAst);/**
 * @abstract
 */var AnimationWithStepsAst=function(_AnimationAst6){_inherits(AnimationWithStepsAst,_AnimationAst6);/**
     * @param {?} steps
     */function AnimationWithStepsAst(steps){_classCallCheck(this,AnimationWithStepsAst);var _this110=_possibleConstructorReturn(this,(AnimationWithStepsAst.__proto__||Object.getPrototypeOf(AnimationWithStepsAst)).call(this));_this110.steps=steps;return _this110;}return AnimationWithStepsAst;}(AnimationAst);var AnimationGroupAst=function(_AnimationWithStepsAs){_inherits(AnimationGroupAst,_AnimationWithStepsAs);/**
     * @param {?} steps
     */function AnimationGroupAst(steps){_classCallCheck(this,AnimationGroupAst);return _possibleConstructorReturn(this,(AnimationGroupAst.__proto__||Object.getPrototypeOf(AnimationGroupAst)).call(this,steps));}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationGroupAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationGroup(this,context);}}]);return AnimationGroupAst;}(AnimationWithStepsAst);var AnimationSequenceAst=function(_AnimationWithStepsAs2){_inherits(AnimationSequenceAst,_AnimationWithStepsAs2);/**
     * @param {?} steps
     */function AnimationSequenceAst(steps){_classCallCheck(this,AnimationSequenceAst);return _possibleConstructorReturn(this,(AnimationSequenceAst.__proto__||Object.getPrototypeOf(AnimationSequenceAst)).call(this,steps));}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(AnimationSequenceAst,[{key:'visit',value:function visit(visitor,context){return visitor.visitAnimationSequence(this,context);}}]);return AnimationSequenceAst;}(AnimationWithStepsAst);var StylesCollectionEntry=function(){/**
     * @param {?} time
     * @param {?} value
     */function StylesCollectionEntry(time,value){_classCallCheck(this,StylesCollectionEntry);this.time=time;this.value=value;}/**
     * @param {?} time
     * @param {?} value
     * @return {?}
     */_createClass(StylesCollectionEntry,[{key:'matches',value:function matches(time,value){return time==this.time&&value==this.value;}}]);return StylesCollectionEntry;}();var StylesCollection=function(){function StylesCollection(){_classCallCheck(this,StylesCollection);this.styles={};}/**
     * @param {?} property
     * @param {?} time
     * @param {?} value
     * @return {?}
     */_createClass(StylesCollection,[{key:'insertAtTime',value:function insertAtTime(property,time,value){var/** @type {?} */tuple=new StylesCollectionEntry(time,value);var/** @type {?} */entries=this.styles[property];if(!isPresent(entries)){entries=this.styles[property]=[];}// insert this at the right stop in the array
// this way we can keep it sorted
var/** @type {?} */insertionIndex=0;for(var/** @type {?} */i=entries.length-1;i>=0;i--){if(entries[i].time<=time){insertionIndex=i+1;break;}}entries.splice(insertionIndex,0,tuple);}/**
     * @param {?} property
     * @param {?} index
     * @return {?}
     */},{key:'getByIndex',value:function getByIndex(property,index){var/** @type {?} */items=this.styles[property];if(isPresent(items)){return index>=items.length?null:items[index];}return null;}/**
     * @param {?} property
     * @param {?} time
     * @return {?}
     */},{key:'indexOfAtOrBeforeTime',value:function indexOfAtOrBeforeTime(property,time){var/** @type {?} */entries=this.styles[property];if(isPresent(entries)){for(var/** @type {?} */i=entries.length-1;i>=0;i--){if(entries[i].time<=time)return i;}}return null;}}]);return StylesCollection;}();var/** @type {?} */_INITIAL_KEYFRAME=0;var/** @type {?} */_TERMINAL_KEYFRAME=1;var/** @type {?} */_ONE_SECOND=1000;var AnimationParseError=function(_ParseError7){_inherits(AnimationParseError,_ParseError7);/**
     * @param {?} message
     */function AnimationParseError(message){_classCallCheck(this,AnimationParseError);return _possibleConstructorReturn(this,(AnimationParseError.__proto__||Object.getPrototypeOf(AnimationParseError)).call(this,null,message));}/**
     * @return {?}
     */_createClass(AnimationParseError,[{key:'toString',value:function toString(){return''+this.msg;}}]);return AnimationParseError;}(ParseError);var AnimationEntryParseResult=/**
     * @param {?} ast
     * @param {?} errors
     */function AnimationEntryParseResult(ast,errors){_classCallCheck(this,AnimationEntryParseResult);this.ast=ast;this.errors=errors;};var AnimationParser=function(){/**
     * @param {?} _schema
     */function AnimationParser(_schema){_classCallCheck(this,AnimationParser);this._schema=_schema;}/**
     * @param {?} component
     * @return {?}
     */_createClass(AnimationParser,[{key:'parseComponent',value:function parseComponent(component){var _this114=this;var/** @type {?} */errors=[];var/** @type {?} */componentName=identifierName(component.type);var/** @type {?} */animationTriggerNames=new Set();var/** @type {?} */asts=component.template.animations.map(function(entry){var/** @type {?} */result=_this114.parseEntry(entry);var/** @type {?} */ast=result.ast;var/** @type {?} */triggerName=ast.name;if(animationTriggerNames.has(triggerName)){result.errors.push(new AnimationParseError('The animation trigger "'+triggerName+'" has already been registered for the '+componentName+' component'));}else{animationTriggerNames.add(triggerName);}if(result.errors.length>0){var/** @type {?} */errorMessage='- Unable to parse the animation sequence for "'+triggerName+'" on the '+componentName+' component due to the following errors:';result.errors.forEach(function(error){errorMessage+='\n-- '+error.msg;});errors.push(errorMessage);}return ast;});if(errors.length>0){var/** @type {?} */errorString=errors.join('\n');throw new Error('Animation parse errors:\n'+errorString);}return asts;}/**
     * @param {?} entry
     * @return {?}
     */},{key:'parseEntry',value:function parseEntry(entry){var _this115=this;var/** @type {?} */errors=[];var/** @type {?} */stateStyles={};var/** @type {?} */transitions=[];var/** @type {?} */stateDeclarationAsts=[];entry.definitions.forEach(function(def){if(def instanceof CompileAnimationStateDeclarationMetadata){_parseAnimationDeclarationStates(def,_this115._schema,errors).forEach(function(ast){stateDeclarationAsts.push(ast);stateStyles[ast.stateName]=ast.styles;});}else{transitions.push(/** @type {?} */def);}});var/** @type {?} */stateTransitionAsts=transitions.map(function(transDef){return _parseAnimationStateTransition(transDef,stateStyles,_this115._schema,errors);});var/** @type {?} */ast=new AnimationEntryAst(entry.name,stateDeclarationAsts,stateTransitionAsts);return new AnimationEntryParseResult(ast,errors);}}]);return AnimationParser;}();AnimationParser.decorators=[{type:CompilerInjectable}];/** @nocollapse */AnimationParser.ctorParameters=function(){return[{type:ElementSchemaRegistry}];};/**
 * @param {?} stateMetadata
 * @param {?} schema
 * @param {?} errors
 * @return {?}
 */function _parseAnimationDeclarationStates(stateMetadata,schema,errors){var/** @type {?} */normalizedStyles=_normalizeStyleMetadata(stateMetadata.styles,{},schema,errors,false);var/** @type {?} */defStyles=new AnimationStylesAst(normalizedStyles);var/** @type {?} */states=stateMetadata.stateNameExpr.split(/\s*,\s*/);return states.map(function(state){return new AnimationStateDeclarationAst(state,defStyles);});}/**
 * @param {?} transitionStateMetadata
 * @param {?} stateStyles
 * @param {?} schema
 * @param {?} errors
 * @return {?}
 */function _parseAnimationStateTransition(transitionStateMetadata,stateStyles,schema,errors){var/** @type {?} */styles=new StylesCollection();var/** @type {?} */transitionExprs=[];var/** @type {?} */stateChangeExpr=transitionStateMetadata.stateChangeExpr;var/** @type {?} */transitionStates=typeof stateChangeExpr=='string'?stateChangeExpr.split(/\s*,\s*/):[/** @type {?} */stateChangeExpr];transitionStates.forEach(function(expr){return transitionExprs.push.apply(transitionExprs,_toConsumableArray(_parseAnimationTransitionExpr(expr,errors)));});var/** @type {?} */entry=_normalizeAnimationEntry(transitionStateMetadata.steps);var/** @type {?} */animation=_normalizeStyleSteps(entry,stateStyles,schema,errors);var/** @type {?} */animationAst=_parseTransitionAnimation(animation,0,styles,stateStyles,errors);if(errors.length==0){_fillAnimationAstStartingKeyframes(animationAst,styles,errors);}var/** @type {?} */stepsAst=animationAst instanceof AnimationWithStepsAst?animationAst:new AnimationSequenceAst([animationAst]);return new AnimationStateTransitionAst(transitionExprs,stepsAst);}/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */function _parseAnimationAlias(alias,errors){switch(alias){case':enter':return'void => *';case':leave':return'* => void';default:errors.push(new AnimationParseError('the transition alias value "'+alias+'" is not supported'));return'* => *';}}/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */function _parseAnimationTransitionExpr(transitionValue,errors){var/** @type {?} */expressions=[];if(typeof transitionValue=='string'){var/** @type {?} */eventStr=transitionValue;if(eventStr[0]==':'){eventStr=_parseAnimationAlias(eventStr,errors);}var/** @type {?} */match=eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(!isPresent(match)||match.length<4){errors.push(new AnimationParseError('the provided '+eventStr+' is not of a supported format'));return expressions;}var/** @type {?} */fromState=match[1];var/** @type {?} */separator=match[2];var/** @type {?} */toState=match[3];expressions.push(new AnimationStateTransitionExpression(fromState,toState));var/** @type {?} */isFullAnyStateExpr=fromState==ɵANY_STATE&&toState==ɵANY_STATE;if(separator[0]=='<'&&!isFullAnyStateExpr){expressions.push(new AnimationStateTransitionExpression(toState,fromState));}}else{expressions.push(new AnimationStateTransitionFnExpression(/** @type {?} */transitionValue));}return expressions;}/**
 * @param {?} entry
 * @return {?}
 */function _normalizeAnimationEntry(entry){return Array.isArray(entry)?new CompileAnimationSequenceMetadata(entry):entry;}/**
 * @param {?} entry
 * @param {?} stateStyles
 * @param {?} schema
 * @param {?} errors
 * @param {?} permitStateReferences
 * @return {?}
 */function _normalizeStyleMetadata(entry,stateStyles,schema,errors,permitStateReferences){var/** @type {?} */offset=entry.offset;if(offset>1||offset<0){errors.push(new AnimationParseError('Offset values for animations must be between 0 and 1'));}var/** @type {?} */normalizedStyles=[];entry.styles.forEach(function(styleEntry){if(typeof styleEntry==='string'){if(permitStateReferences){normalizedStyles.push.apply(normalizedStyles,_toConsumableArray(_resolveStylesFromState(/** @type {?} */styleEntry,stateStyles,errors)));}else{errors.push(new AnimationParseError('State based animations cannot contain references to other states'));}}else{var/** @type {?} */stylesObj=styleEntry;var/** @type {?} */normalizedStylesObj={};Object.keys(stylesObj).forEach(function(propName){var/** @type {?} */normalizedProp=schema.normalizeAnimationStyleProperty(propName);var/** @type {?} */normalizedOutput=schema.normalizeAnimationStyleValue(normalizedProp,propName,stylesObj[propName]);var/** @type {?} */normalizationError=normalizedOutput['error'];if(normalizationError){errors.push(new AnimationParseError(normalizationError));}normalizedStylesObj[normalizedProp]=normalizedOutput['value'];});normalizedStyles.push(normalizedStylesObj);}});return normalizedStyles;}/**
 * @param {?} entry
 * @param {?} stateStyles
 * @param {?} schema
 * @param {?} errors
 * @return {?}
 */function _normalizeStyleSteps(entry,stateStyles,schema,errors){var/** @type {?} */steps=_normalizeStyleStepEntry(entry,stateStyles,schema,errors);return entry instanceof CompileAnimationGroupMetadata?new CompileAnimationGroupMetadata(steps):new CompileAnimationSequenceMetadata(steps);}/**
 * @param {?} stylesList
 * @param {?} newItem
 * @return {?}
 */function _mergeAnimationStyles(stylesList,newItem){if((typeof newItem==='undefined'?'undefined':_typeof(newItem))==='object'&&newItem!==null&&stylesList.length>0){var/** @type {?} */lastIndex=stylesList.length-1;var/** @type {?} */lastItem=stylesList[lastIndex];if((typeof lastItem==='undefined'?'undefined':_typeof(lastItem))==='object'&&lastItem!==null){stylesList[lastIndex]=StringMapWrapper.merge(/** @type {?} */lastItem,/** @type {?} */newItem);return;}}stylesList.push(newItem);}/**
 * @param {?} entry
 * @param {?} stateStyles
 * @param {?} schema
 * @param {?} errors
 * @return {?}
 */function _normalizeStyleStepEntry(entry,stateStyles,schema,errors){var/** @type {?} */steps=void 0;if(entry instanceof CompileAnimationWithStepsMetadata){steps=entry.steps;}else{return[entry];}var/** @type {?} */newSteps=[];var/** @type {?} */combinedStyles=void 0;steps.forEach(function(step){if(step instanceof CompileAnimationStyleMetadata){// this occurs when a style step is followed by a previous style step
// or when the first style step is run. We want to concatenate all subsequent
// style steps together into a single style step such that we have the correct
// starting keyframe data to pass into the animation player.
if(!isPresent(combinedStyles)){combinedStyles=[];}_normalizeStyleMetadata(/** @type {?} */step,stateStyles,schema,errors,true).forEach(function(entry){_mergeAnimationStyles(combinedStyles,entry);});}else{// it is important that we create a metadata entry of the combined styles
// before we go on an process the animate, sequence or group metadata steps.
// This will ensure that the AST will have the previous styles painted on
// screen before any further animations that use the styles take place.
if(isPresent(combinedStyles)){newSteps.push(new CompileAnimationStyleMetadata(0,combinedStyles));combinedStyles=null;}if(step instanceof CompileAnimationAnimateMetadata){// we do not recurse into CompileAnimationAnimateMetadata since
// those style steps are not going to be squashed
var/** @type {?} */animateStyleValue=step.styles;if(animateStyleValue instanceof CompileAnimationStyleMetadata){animateStyleValue.styles=_normalizeStyleMetadata(animateStyleValue,stateStyles,schema,errors,true);}else if(animateStyleValue instanceof CompileAnimationKeyframesSequenceMetadata){animateStyleValue.steps.forEach(function(step){step.styles=_normalizeStyleMetadata(step,stateStyles,schema,errors,true);});}}else if(step instanceof CompileAnimationWithStepsMetadata){var/** @type {?} */innerSteps=_normalizeStyleStepEntry(step,stateStyles,schema,errors);step=step instanceof CompileAnimationGroupMetadata?new CompileAnimationGroupMetadata(innerSteps):new CompileAnimationSequenceMetadata(innerSteps);}newSteps.push(step);}});// this happens when only styles were animated within the sequence
if(isPresent(combinedStyles)){newSteps.push(new CompileAnimationStyleMetadata(0,combinedStyles));}return newSteps;}/**
 * @param {?} stateName
 * @param {?} stateStyles
 * @param {?} errors
 * @return {?}
 */function _resolveStylesFromState(stateName,stateStyles,errors){var/** @type {?} */styles=[];if(stateName[0]!=':'){errors.push(new AnimationParseError('Animation states via styles must be prefixed with a ":"'));}else{var/** @type {?} */normalizedStateName=stateName.substring(1);var/** @type {?} */value=stateStyles[normalizedStateName];if(!isPresent(value)){errors.push(new AnimationParseError('Unable to apply styles due to missing a state: "'+normalizedStateName+'"'));}else{value.styles.forEach(function(stylesEntry){if((typeof stylesEntry==='undefined'?'undefined':_typeof(stylesEntry))==='object'&&stylesEntry!==null){styles.push(/** @type {?} */stylesEntry);}});}}return styles;}var _AnimationTimings=/**
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     */function _AnimationTimings(duration,delay,easing){_classCallCheck(this,_AnimationTimings);this.duration=duration;this.delay=delay;this.easing=easing;};/**
 * @param {?} keyframeSequence
 * @param {?} currentTime
 * @param {?} collectedStyles
 * @param {?} stateStyles
 * @param {?} errors
 * @return {?}
 */function _parseAnimationKeyframes(keyframeSequence,currentTime,collectedStyles,stateStyles,errors){var/** @type {?} */totalEntries=keyframeSequence.steps.length;var/** @type {?} */totalOffsets=0;keyframeSequence.steps.forEach(function(step){return totalOffsets+=isPresent(step.offset)?1:0;});if(totalOffsets>0&&totalOffsets<totalEntries){errors.push(new AnimationParseError('Not all style() entries contain an offset for the provided keyframe()'));totalOffsets=totalEntries;}var/** @type {?} */limit=totalEntries-1;var/** @type {?} */margin=totalOffsets==0?1/limit:0;var/** @type {?} */rawKeyframes=[];var/** @type {?} */index=0;var/** @type {?} */doSortKeyframes=false;var/** @type {?} */lastOffset=0;keyframeSequence.steps.forEach(function(styleMetadata){var/** @type {?} */offset=styleMetadata.offset;var/** @type {?} */keyframeStyles={};styleMetadata.styles.forEach(function(entry){Object.keys(entry).forEach(function(prop){if(prop!='offset'){keyframeStyles[prop]=entry[prop];}});});if(isPresent(offset)){doSortKeyframes=doSortKeyframes||offset<lastOffset;}else{offset=index==limit?_TERMINAL_KEYFRAME:margin*index;}rawKeyframes.push([offset,keyframeStyles]);lastOffset=offset;index++;});if(doSortKeyframes){rawKeyframes.sort(function(a,b){return a[0]<=b[0]?-1:1;});}var/** @type {?} */firstKeyframe=rawKeyframes[0];if(firstKeyframe[0]!=_INITIAL_KEYFRAME){rawKeyframes.splice(0,0,firstKeyframe=[_INITIAL_KEYFRAME,{}]);}var/** @type {?} */firstKeyframeStyles=firstKeyframe[1];limit=rawKeyframes.length-1;var/** @type {?} */lastKeyframe=rawKeyframes[limit];if(lastKeyframe[0]!=_TERMINAL_KEYFRAME){rawKeyframes.push(lastKeyframe=[_TERMINAL_KEYFRAME,{}]);limit++;}var/** @type {?} */lastKeyframeStyles=lastKeyframe[1];for(var/** @type {?} */i=1;i<=limit;i++){var/** @type {?} */entry=rawKeyframes[i];var/** @type {?} */styles=entry[1];Object.keys(styles).forEach(function(prop){if(!isPresent(firstKeyframeStyles[prop])){firstKeyframeStyles[prop]=ɵFILL_STYLE_FLAG;}});}var _loop=function _loop(_i5){var/** @type {?} */entry=rawKeyframes[_i5];var/** @type {?} */styles=entry[1];Object.keys(styles).forEach(function(prop){if(!isPresent(lastKeyframeStyles[prop])){lastKeyframeStyles[prop]=styles[prop];}});};for(var/** @type {?} */_i5=limit-1;_i5>=0;_i5--){_loop(_i5);}return rawKeyframes.map(function(entry){return new AnimationKeyframeAst(entry[0],new AnimationStylesAst([entry[1]]));});}/**
 * @param {?} entry
 * @param {?} currentTime
 * @param {?} collectedStyles
 * @param {?} stateStyles
 * @param {?} errors
 * @return {?}
 */function _parseTransitionAnimation(entry,currentTime,collectedStyles,stateStyles,errors){var/** @type {?} */ast=void 0/** TODO #9100 */;var/** @type {?} */playTime=0;var/** @type {?} */startingTime=currentTime;if(entry instanceof CompileAnimationWithStepsMetadata){var/** @type {?} */maxDuration=0;var/** @type {?} */steps=[];var/** @type {?} */isGroup=entry instanceof CompileAnimationGroupMetadata;var/** @type {?} */previousStyles=void 0/** TODO #9100 */;entry.steps.forEach(function(entry){// these will get picked up by the next step...
var/** @type {?} */time=isGroup?startingTime:currentTime;if(entry instanceof CompileAnimationStyleMetadata){entry.styles.forEach(function(stylesEntry){// by this point we know that we only have stringmap values
var/** @type {?} */map=stylesEntry;Object.keys(map).forEach(function(prop){collectedStyles.insertAtTime(prop,time,map[prop]);});});previousStyles=entry.styles;return;}var/** @type {?} */innerAst=_parseTransitionAnimation(entry,time,collectedStyles,stateStyles,errors);if(isPresent(previousStyles)){if(entry instanceof CompileAnimationWithStepsMetadata){var/** @type {?} */startingStyles=new AnimationStylesAst(previousStyles);steps.push(new AnimationStepAst(startingStyles,[],0,0,''));}else{var _innerStep$startingSt;var/** @type {?} */innerStep=innerAst;(_innerStep$startingSt=innerStep.startingStyles.styles).push.apply(_innerStep$startingSt,_toConsumableArray(previousStyles));}previousStyles=null;}var/** @type {?} */astDuration=innerAst.playTime;currentTime+=astDuration;playTime+=astDuration;maxDuration=Math.max(astDuration,maxDuration);steps.push(innerAst);});if(isPresent(previousStyles)){var/** @type {?} */startingStyles=new AnimationStylesAst(previousStyles);steps.push(new AnimationStepAst(startingStyles,[],0,0,''));}if(isGroup){ast=new AnimationGroupAst(steps);playTime=maxDuration;currentTime=startingTime+playTime;}else{ast=new AnimationSequenceAst(steps);}}else if(entry instanceof CompileAnimationAnimateMetadata){var/** @type {?} */timings=_parseTimeExpression(entry.timings,errors);var/** @type {?} */styles=entry.styles;var/** @type {?} */_keyframes=void 0/** TODO #9100 */;if(styles instanceof CompileAnimationKeyframesSequenceMetadata){_keyframes=_parseAnimationKeyframes(styles,currentTime,collectedStyles,stateStyles,errors);}else{var/** @type {?} */styleData=styles;var/** @type {?} */offset=_TERMINAL_KEYFRAME;var/** @type {?} */styleAst=new AnimationStylesAst(/** @type {?} */styleData.styles);var/** @type {?} */keyframe=new AnimationKeyframeAst(offset,styleAst);_keyframes=[keyframe];}ast=new AnimationStepAst(new AnimationStylesAst([]),_keyframes,timings.duration,timings.delay,timings.easing);playTime=timings.duration+timings.delay;currentTime+=playTime;_keyframes.forEach(function(keyframe/** TODO #9100 */){return keyframe.styles.styles.forEach(function(entry/** TODO #9100 */){return Object.keys(entry).forEach(function(prop){collectedStyles.insertAtTime(prop,currentTime,entry[prop]);});});});}else{// if the code reaches this stage then an error
// has already been populated within the _normalizeStyleSteps()
// operation...
ast=new AnimationStepAst(null,[],0,0,'');}ast.playTime=playTime;ast.startTime=startingTime;return ast;}/**
 * @param {?} ast
 * @param {?} collectedStyles
 * @param {?} errors
 * @return {?}
 */function _fillAnimationAstStartingKeyframes(ast,collectedStyles,errors){// steps that only contain style will not be filled
if(ast instanceof AnimationStepAst&&ast.keyframes.length>0){var/** @type {?} */_keyframes2=ast.keyframes;if(_keyframes2.length==1){var/** @type {?} */endKeyframe=_keyframes2[0];var/** @type {?} */startKeyframe=_createStartKeyframeFromEndKeyframe(endKeyframe,ast.startTime,ast.playTime,collectedStyles,errors);ast.keyframes=[startKeyframe,endKeyframe];}}else if(ast instanceof AnimationWithStepsAst){ast.steps.forEach(function(entry){return _fillAnimationAstStartingKeyframes(entry,collectedStyles,errors);});}}/**
 * @param {?} exp
 * @param {?} errors
 * @return {?}
 */function _parseTimeExpression(exp,errors){var/** @type {?} */regex=/^([\.\d]+)(m?s)(?:\s+([\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?/i;var/** @type {?} */duration=void 0;var/** @type {?} */delay=0;var/** @type {?} */easing=null;if(typeof exp==='string'){var/** @type {?} */matches=exp.match(regex);if(matches===null){errors.push(new AnimationParseError('The provided timing value "'+exp+'" is invalid.'));return new _AnimationTimings(0,0,null);}var/** @type {?} */durationMatch=parseFloat(matches[1]);var/** @type {?} */durationUnit=matches[2];if(durationUnit=='s'){durationMatch*=_ONE_SECOND;}duration=Math.floor(durationMatch);var/** @type {?} */delayMatch=matches[3];var/** @type {?} */delayUnit=matches[4];if(isPresent(delayMatch)){var/** @type {?} */delayVal=parseFloat(delayMatch);if(isPresent(delayUnit)&&delayUnit=='s'){delayVal*=_ONE_SECOND;}delay=Math.floor(delayVal);}var/** @type {?} */easingVal=matches[5];if(!isBlank(easingVal)){easing=easingVal;}}else{duration=exp;}return new _AnimationTimings(duration,delay,easing);}/**
 * @param {?} endKeyframe
 * @param {?} startTime
 * @param {?} duration
 * @param {?} collectedStyles
 * @param {?} errors
 * @return {?}
 */function _createStartKeyframeFromEndKeyframe(endKeyframe,startTime,duration,collectedStyles,errors){var/** @type {?} */values={};var/** @type {?} */endTime=startTime+duration;endKeyframe.styles.styles.forEach(function(styleData){Object.keys(styleData).forEach(function(prop){var/** @type {?} */val=styleData[prop];if(prop=='offset')return;var/** @type {?} */resultIndex=collectedStyles.indexOfAtOrBeforeTime(prop,startTime);var/** @type {?} */resultEntry=void 0/** TODO #9100 */,/** @type {?} */nextEntry=void 0/** TODO #9100 */,/** @type {?} */value=void 0/** TODO #9100 */;if(isPresent(resultIndex)){resultEntry=collectedStyles.getByIndex(prop,resultIndex);value=resultEntry.value;nextEntry=collectedStyles.getByIndex(prop,resultIndex+1);}else{// this is a flag that the runtime code uses to pass
// in a value either from the state declaration styles
// or using the AUTO_STYLE value (e.g. getComputedStyle)
value=ɵFILL_STYLE_FLAG;}if(isPresent(nextEntry)&&!nextEntry.matches(endTime,val)){errors.push(new AnimationParseError('The animated CSS property "'+prop+'" unexpectedly changes between steps "'+resultEntry.time+'ms" and "'+endTime+'ms" at "'+nextEntry.time+'ms"'));}values[prop]=value;});});return new AnimationKeyframeAst(_INITIAL_KEYFRAME,new AnimationStylesAst([values]));}/**
 * An interface for retrieving documents by URL that the compiler uses
 * to load templates.
 */var ResourceLoader=function(){function ResourceLoader(){_classCallCheck(this,ResourceLoader);}_createClass(ResourceLoader,[{key:'get',/**
     * @param {?} url
     * @return {?}
     */value:function get(url){return null;}}]);return ResourceLoader;}();/**
 * Create a {\@link UrlResolver} with no package prefix.
 * @return {?}
 */function createUrlResolverWithoutPackagePrefix(){return new UrlResolver();}/**
 * @return {?}
 */function createOfflineCompileUrlResolver(){return new UrlResolver('.');}/**
 * A default provider for {@link PACKAGE_ROOT_URL} that maps to '/'.
 */var/** @type {?} */DEFAULT_PACKAGE_URL_PROVIDER={provide:PACKAGE_ROOT_URL,useValue:'/'};/**
 * Used by the {\@link Compiler} when resolving HTML and CSS template URLs.
 *
 * This class can be overridden by the application developer to create custom behavior.
 *
 * See {\@link Compiler}
 *
 * ## Example
 *
 * {\@example compiler/ts/url_resolver/url_resolver.ts region='url_resolver'}
 *
 * \@security When compiling templates at runtime, you must
 * ensure that the entire template comes from a trusted source.
 * Attacker-controlled data introduced by a template could expose your
 * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
 */var UrlResolver=function(){/**
     * @param {?=} _packagePrefix
     */function UrlResolver(){var _packagePrefix=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_classCallCheck(this,UrlResolver);this._packagePrefix=_packagePrefix;}/**
     * Resolves the `url` given the `baseUrl`:
     * - when the `url` is null, the `baseUrl` is returned,
     * - if `url` is relative ('path/to/here', './path/to/here'), the resolved url is a combination of
     * `baseUrl` and `url`,
     * - if `url` is absolute (it has a scheme: 'http://', 'https://' or start with '/'), the `url` is
     * returned as is (ignoring the `baseUrl`)
     * @param {?} baseUrl
     * @param {?} url
     * @return {?}
     */_createClass(UrlResolver,[{key:'resolve',value:function resolve(baseUrl,url){var/** @type {?} */resolvedUrl=url;if(isPresent(baseUrl)&&baseUrl.length>0){resolvedUrl=_resolveUrl(baseUrl,resolvedUrl);}var/** @type {?} */resolvedParts=_split(resolvedUrl);var/** @type {?} */prefix=this._packagePrefix;if(isPresent(prefix)&&isPresent(resolvedParts)&&resolvedParts[_ComponentIndex.Scheme]=='package'){var/** @type {?} */path=resolvedParts[_ComponentIndex.Path];prefix=prefix.replace(/\/+$/,'');path=path.replace(/^\/+/,'');return prefix+'/'+path;}return resolvedUrl;}}]);return UrlResolver;}();UrlResolver.decorators=[{type:CompilerInjectable}];/** @nocollapse */UrlResolver.ctorParameters=function(){return[{type:undefined,decorators:[{type:Inject,args:[PACKAGE_ROOT_URL]}]}];};/**
 * Extract the scheme of a URL.
 * @param {?} url
 * @return {?}
 */function getUrlScheme(url){var/** @type {?} */match=_split(url);return match&&match[_ComponentIndex.Scheme]||'';}/**
 * Builds a URI string from already-encoded parts.
 *
 * No encoding is performed.  Any component may be omitted as either null or
 * undefined.
 *
 * @param {?=} opt_scheme The scheme such as 'http'.
 * @param {?=} opt_userInfo The user name before the '\@'.
 * @param {?=} opt_domain The domain such as 'www.google.com', already
 *     URI-encoded.
 * @param {?=} opt_port The port number.
 * @param {?=} opt_path The path, already URI-encoded.  If it is not
 *     empty, it must begin with a slash.
 * @param {?=} opt_queryData The URI-encoded query data.
 * @param {?=} opt_fragment The URI-encoded fragment identifier.
 * @return {?} The fully combined URI.
 */function _buildFromEncodedParts(opt_scheme,opt_userInfo,opt_domain,opt_port,opt_path,opt_queryData,opt_fragment){var/** @type {?} */out=[];if(isPresent(opt_scheme)){out.push(opt_scheme+':');}if(isPresent(opt_domain)){out.push('//');if(isPresent(opt_userInfo)){out.push(opt_userInfo+'@');}out.push(opt_domain);if(isPresent(opt_port)){out.push(':'+opt_port);}}if(isPresent(opt_path)){out.push(opt_path);}if(isPresent(opt_queryData)){out.push('?'+opt_queryData);}if(isPresent(opt_fragment)){out.push('#'+opt_fragment);}return out.join('');}/**
 * A regular expression for breaking a URI into its component parts.
 *
 * {@link http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234} says
 * As the "first-match-wins" algorithm is identical to the "greedy"
 * disambiguation method used by POSIX regular expressions, it is natural and
 * commonplace to use a regular expression for parsing the potential five
 * components of a URI reference.
 *
 * The following line is the regular expression for breaking-down a
 * well-formed URI reference into its components.
 *
 * <pre>
 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
 *  12            3  4          5       6  7        8 9
 * </pre>
 *
 * The numbers in the second line above are only to assist readability; they
 * indicate the reference points for each subexpression (i.e., each paired
 * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
 * For example, matching the above expression to
 * <pre>
 *     http://www.ics.uci.edu/pub/ietf/uri/#Related
 * </pre>
 * results in the following subexpression matches:
 * <pre>
 *    $1 = http:
 *    $2 = http
 *    $3 = //www.ics.uci.edu
 *    $4 = www.ics.uci.edu
 *    $5 = /pub/ietf/uri/
 *    $6 = <undefined>
 *    $7 = <undefined>
 *    $8 = #Related
 *    $9 = Related
 * </pre>
 * where <undefined> indicates that the component is not present, as is the
 * case for the query component in the above example. Therefore, we can
 * determine the value of the five components as
 * <pre>
 *    scheme    = $2
 *    authority = $4
 *    path      = $5
 *    query     = $7
 *    fragment  = $9
 * </pre>
 *
 * The regular expression has been modified slightly to expose the
 * userInfo, domain, and port separately from the authority.
 * The modified version yields
 * <pre>
 *    $1 = http              scheme
 *    $2 = <undefined>       userInfo -\
 *    $3 = www.ics.uci.edu   domain     | authority
 *    $4 = <undefined>       port     -/
 *    $5 = /pub/ietf/uri/    path
 *    $6 = <undefined>       query without ?
 *    $7 = Related           fragment without #
 * </pre>
 * @type {!RegExp}
 * @internal
 */var/** @type {?} */_splitRe=new RegExp('^'+'(?:'+'([^:/?#.]+)'+// used by other URL parts such as :,
// ?, /, #, and .
':)?'+'(?://'+'(?:([^/?#]*)@)?'+'([\\w\\d\\-\\u0100-\\uffff.%]*)'+// digits, dashes, dots, percent
// escapes, and unicode characters.
'(?::([0-9]+))?'+')?'+'([^?#]+)?'+'(?:\\?([^#]*))?'+'(?:#(.*))?'+'$');var _ComponentIndex={};_ComponentIndex.Scheme=1;_ComponentIndex.UserInfo=2;_ComponentIndex.Domain=3;_ComponentIndex.Port=4;_ComponentIndex.Path=5;_ComponentIndex.QueryData=6;_ComponentIndex.Fragment=7;_ComponentIndex[_ComponentIndex.Scheme]="Scheme";_ComponentIndex[_ComponentIndex.UserInfo]="UserInfo";_ComponentIndex[_ComponentIndex.Domain]="Domain";_ComponentIndex[_ComponentIndex.Port]="Port";_ComponentIndex[_ComponentIndex.Path]="Path";_ComponentIndex[_ComponentIndex.QueryData]="QueryData";_ComponentIndex[_ComponentIndex.Fragment]="Fragment";/**
 * Splits a URI into its component parts.
 *
 * Each component can be accessed via the component indices; for example:
 * <pre>
 * goog.uri.utils.split(someStr)[goog.uri.utils.CompontentIndex.QUERY_DATA];
 * </pre>
 *
 * @param {?} uri The URI string to examine.
 * @return {?} Each component still URI-encoded.
 *     Each component that is present will contain the encoded value, whereas
 *     components that are not present will be undefined or empty, depending
 *     on the browser's regular expression implementation.  Never null, since
 *     arbitrary strings may still look like path names.
 */function _split(uri){return uri.match(_splitRe);}/**
 * Removes dot segments in given path component, as described in
 * RFC 3986, section 5.2.4.
 *
 * @param {?} path A non-empty path component.
 * @return {?} Path component with removed dot segments.
 */function _removeDotSegments(path){if(path=='/')return'/';var/** @type {?} */leadingSlash=path[0]=='/'?'/':'';var/** @type {?} */trailingSlash=path[path.length-1]==='/'?'/':'';var/** @type {?} */segments=path.split('/');var/** @type {?} */out=[];var/** @type {?} */up=0;for(var/** @type {?} */pos=0;pos<segments.length;pos++){var/** @type {?} */segment=segments[pos];switch(segment){case'':case'.':break;case'..':if(out.length>0){out.pop();}else{up++;}break;default:out.push(segment);}}if(leadingSlash==''){while(up-->0){out.unshift('..');}if(out.length===0)out.push('.');}return leadingSlash+out.join('/')+trailingSlash;}/**
 * Takes an array of the parts from split and canonicalizes the path part
 * and then joins all the parts.
 * @param {?} parts
 * @return {?}
 */function _joinAndCanonicalizePath(parts){var/** @type {?} */path=parts[_ComponentIndex.Path];path=isBlank(path)?'':_removeDotSegments(path);parts[_ComponentIndex.Path]=path;return _buildFromEncodedParts(parts[_ComponentIndex.Scheme],parts[_ComponentIndex.UserInfo],parts[_ComponentIndex.Domain],parts[_ComponentIndex.Port],path,parts[_ComponentIndex.QueryData],parts[_ComponentIndex.Fragment]);}/**
 * Resolves a URL.
 * @param {?} base The URL acting as the base URL.
 * @param {?} url
 * @return {?}
 */function _resolveUrl(base,url){var/** @type {?} */parts=_split(encodeURI(url));var/** @type {?} */baseParts=_split(base);if(isPresent(parts[_ComponentIndex.Scheme])){return _joinAndCanonicalizePath(parts);}else{parts[_ComponentIndex.Scheme]=baseParts[_ComponentIndex.Scheme];}for(var/** @type {?} */i=_ComponentIndex.Scheme;i<=_ComponentIndex.Port;i++){if(isBlank(parts[i])){parts[i]=baseParts[i];}}if(parts[_ComponentIndex.Path][0]=='/'){return _joinAndCanonicalizePath(parts);}var/** @type {?} */path=baseParts[_ComponentIndex.Path];if(isBlank(path))path='/';var/** @type {?} */index=path.lastIndexOf('/');path=path.substring(0,index+1)+parts[_ComponentIndex.Path];parts[_ComponentIndex.Path]=path;return _joinAndCanonicalizePath(parts);}var DirectiveNormalizer=function(){/**
     * @param {?} _resourceLoader
     * @param {?} _urlResolver
     * @param {?} _htmlParser
     * @param {?} _config
     */function DirectiveNormalizer(_resourceLoader,_urlResolver,_htmlParser,_config){_classCallCheck(this,DirectiveNormalizer);this._resourceLoader=_resourceLoader;this._urlResolver=_urlResolver;this._htmlParser=_htmlParser;this._config=_config;this._resourceLoaderCache=new Map();}/**
     * @return {?}
     */_createClass(DirectiveNormalizer,[{key:'clearCache',value:function clearCache(){this._resourceLoaderCache.clear();}/**
     * @param {?} normalizedDirective
     * @return {?}
     */},{key:'clearCacheFor',value:function clearCacheFor(normalizedDirective){var _this116=this;if(!normalizedDirective.isComponent){return;}this._resourceLoaderCache.delete(normalizedDirective.template.templateUrl);normalizedDirective.template.externalStylesheets.forEach(function(stylesheet){_this116._resourceLoaderCache.delete(stylesheet.moduleUrl);});}/**
     * @param {?} url
     * @return {?}
     */},{key:'_fetch',value:function _fetch(url){var/** @type {?} */result=this._resourceLoaderCache.get(url);if(!result){result=this._resourceLoader.get(url);this._resourceLoaderCache.set(url,result);}return result;}/**
     * @param {?} prenormData
     * @return {?}
     */},{key:'normalizeTemplate',value:function normalizeTemplate(prenormData){var _this117=this;var/** @type {?} */normalizedTemplateSync=null;var/** @type {?} */normalizedTemplateAsync=void 0;if(prenormData.template!=null){if(typeof prenormData.template!=='string'){throw syntaxError('The template specified for component '+stringify(prenormData.componentType)+' is not a string');}normalizedTemplateSync=this.normalizeTemplateSync(prenormData);normalizedTemplateAsync=Promise.resolve(normalizedTemplateSync);}else if(prenormData.templateUrl){if(typeof prenormData.templateUrl!=='string'){throw syntaxError('The templateUrl specified for component '+stringify(prenormData.componentType)+' is not a string');}normalizedTemplateAsync=this.normalizeTemplateAsync(prenormData);}else{throw syntaxError('No template specified for component '+stringify(prenormData.componentType));}if(normalizedTemplateSync&&normalizedTemplateSync.styleUrls.length===0){// sync case
return new SyncAsyncResult(normalizedTemplateSync);}else{// async case
return new SyncAsyncResult(null,normalizedTemplateAsync.then(function(normalizedTemplate){return _this117.normalizeExternalStylesheets(normalizedTemplate);}));}}/**
     * @param {?} prenomData
     * @return {?}
     */},{key:'normalizeTemplateSync',value:function normalizeTemplateSync(prenomData){return this.normalizeLoadedTemplate(prenomData,prenomData.template,prenomData.moduleUrl);}/**
     * @param {?} prenomData
     * @return {?}
     */},{key:'normalizeTemplateAsync',value:function normalizeTemplateAsync(prenomData){var _this118=this;var/** @type {?} */templateUrl=this._urlResolver.resolve(prenomData.moduleUrl,prenomData.templateUrl);return this._fetch(templateUrl).then(function(value){return _this118.normalizeLoadedTemplate(prenomData,value,templateUrl);});}/**
     * @param {?} prenomData
     * @param {?} template
     * @param {?} templateAbsUrl
     * @return {?}
     */},{key:'normalizeLoadedTemplate',value:function normalizeLoadedTemplate(prenomData,template,templateAbsUrl){var/** @type {?} */interpolationConfig=InterpolationConfig.fromArray(prenomData.interpolation);var/** @type {?} */rootNodesAndErrors=this._htmlParser.parse(template,stringify(prenomData.componentType),true,interpolationConfig);if(rootNodesAndErrors.errors.length>0){var/** @type {?} */errorString=rootNodesAndErrors.errors.join('\n');throw syntaxError('Template parse errors:\n'+errorString);}var/** @type {?} */templateMetadataStyles=this.normalizeStylesheet(new CompileStylesheetMetadata({styles:prenomData.styles,styleUrls:prenomData.styleUrls,moduleUrl:prenomData.moduleUrl}));var/** @type {?} */visitor=new TemplatePreparseVisitor();visitAll(visitor,rootNodesAndErrors.rootNodes);var/** @type {?} */templateStyles=this.normalizeStylesheet(new CompileStylesheetMetadata({styles:visitor.styles,styleUrls:visitor.styleUrls,moduleUrl:templateAbsUrl}));var/** @type {?} */encapsulation=prenomData.encapsulation;if(encapsulation==null){encapsulation=this._config.defaultEncapsulation;}var/** @type {?} */styles=templateMetadataStyles.styles.concat(templateStyles.styles);var/** @type {?} */styleUrls=templateMetadataStyles.styleUrls.concat(templateStyles.styleUrls);if(encapsulation===ViewEncapsulation.Emulated&&styles.length===0&&styleUrls.length===0){encapsulation=ViewEncapsulation.None;}return new CompileTemplateMetadata({encapsulation:encapsulation,template:template,templateUrl:templateAbsUrl,styles:styles,styleUrls:styleUrls,ngContentSelectors:visitor.ngContentSelectors,animations:prenomData.animations,interpolation:prenomData.interpolation});}/**
     * @param {?} templateMeta
     * @return {?}
     */},{key:'normalizeExternalStylesheets',value:function normalizeExternalStylesheets(templateMeta){return this._loadMissingExternalStylesheets(templateMeta.styleUrls).then(function(externalStylesheets){return new CompileTemplateMetadata({encapsulation:templateMeta.encapsulation,template:templateMeta.template,templateUrl:templateMeta.templateUrl,styles:templateMeta.styles,styleUrls:templateMeta.styleUrls,externalStylesheets:externalStylesheets,ngContentSelectors:templateMeta.ngContentSelectors,animations:templateMeta.animations,interpolation:templateMeta.interpolation});});}/**
     * @param {?} styleUrls
     * @param {?=} loadedStylesheets
     * @return {?}
     */},{key:'_loadMissingExternalStylesheets',value:function _loadMissingExternalStylesheets(styleUrls){var _this119=this;var loadedStylesheets=arguments.length>1&&arguments[1]!==undefined?arguments[1]:new Map();return Promise.all(styleUrls.filter(function(styleUrl){return!loadedStylesheets.has(styleUrl);}).map(function(styleUrl){return _this119._fetch(styleUrl).then(function(loadedStyle){var/** @type {?} */stylesheet=_this119.normalizeStylesheet(new CompileStylesheetMetadata({styles:[loadedStyle],moduleUrl:styleUrl}));loadedStylesheets.set(styleUrl,stylesheet);return _this119._loadMissingExternalStylesheets(stylesheet.styleUrls,loadedStylesheets);});})).then(function(_){return Array.from(loadedStylesheets.values());});}/**
     * @param {?} stylesheet
     * @return {?}
     */},{key:'normalizeStylesheet',value:function normalizeStylesheet(stylesheet){var _this120=this;var/** @type {?} */allStyleUrls=stylesheet.styleUrls.filter(isStyleUrlResolvable).map(function(url){return _this120._urlResolver.resolve(stylesheet.moduleUrl,url);});var/** @type {?} */allStyles=stylesheet.styles.map(function(style){var/** @type {?} */styleWithImports=extractStyleUrls(_this120._urlResolver,stylesheet.moduleUrl,style);allStyleUrls.push.apply(allStyleUrls,_toConsumableArray(styleWithImports.styleUrls));return styleWithImports.style;});return new CompileStylesheetMetadata({styles:allStyles,styleUrls:allStyleUrls,moduleUrl:stylesheet.moduleUrl});}}]);return DirectiveNormalizer;}();DirectiveNormalizer.decorators=[{type:CompilerInjectable}];/** @nocollapse */DirectiveNormalizer.ctorParameters=function(){return[{type:ResourceLoader},{type:UrlResolver},{type:HtmlParser},{type:CompilerConfig}];};var TemplatePreparseVisitor=function(){function TemplatePreparseVisitor(){_classCallCheck(this,TemplatePreparseVisitor);this.ngContentSelectors=[];this.styles=[];this.styleUrls=[];this.ngNonBindableStackCount=0;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */_createClass(TemplatePreparseVisitor,[{key:'visitElement',value:function visitElement(ast,context){var/** @type {?} */preparsedElement=preparseElement(ast);switch(preparsedElement.type){case PreparsedElementType.NG_CONTENT:if(this.ngNonBindableStackCount===0){this.ngContentSelectors.push(preparsedElement.selectAttr);}break;case PreparsedElementType.STYLE:var/** @type {?} */textContent='';ast.children.forEach(function(child){if(child instanceof Text){textContent+=child.value;}});this.styles.push(textContent);break;case PreparsedElementType.STYLESHEET:this.styleUrls.push(preparsedElement.hrefAttr);break;default:break;}if(preparsedElement.nonBindable){this.ngNonBindableStackCount++;}visitAll(this,ast.children);if(preparsedElement.nonBindable){this.ngNonBindableStackCount--;}return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansion',value:function visitExpansion(ast,context){visitAll(this,ast.cases);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitExpansionCase',value:function visitExpansionCase(ast,context){visitAll(this,ast.expression);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitComment',value:function visitComment(ast,context){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAttribute',value:function visitAttribute(ast,context){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(ast,context){return null;}}]);return TemplatePreparseVisitor;}();var DirectiveResolver=function(){/**
     * @param {?=} _reflector
     */function DirectiveResolver(){var _reflector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:ɵreflector;_classCallCheck(this,DirectiveResolver);this._reflector=_reflector;}/**
     * @param {?} type
     * @return {?}
     */_createClass(DirectiveResolver,[{key:'isDirective',value:function isDirective(type){var/** @type {?} */typeMetadata=this._reflector.annotations(resolveForwardRef(type));return typeMetadata&&typeMetadata.some(isDirectiveMetadata);}/**
     * Return {\@link Directive} for a given `Type`.
     * @param {?} type
     * @param {?=} throwIfNotFound
     * @return {?}
     */},{key:'resolve',value:function resolve(type){var throwIfNotFound=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var/** @type {?} */typeMetadata=this._reflector.annotations(resolveForwardRef(type));if(typeMetadata){var/** @type {?} */metadata=ListWrapper.findLast(typeMetadata,isDirectiveMetadata);if(metadata){var/** @type {?} */propertyMetadata=this._reflector.propMetadata(type);return this._mergeWithPropertyMetadata(metadata,propertyMetadata,type);}}if(throwIfNotFound){throw new Error('No Directive annotation found on '+stringify(type));}return null;}/**
     * @param {?} dm
     * @param {?} propertyMetadata
     * @param {?} directiveType
     * @return {?}
     */},{key:'_mergeWithPropertyMetadata',value:function _mergeWithPropertyMetadata(dm,propertyMetadata,directiveType){var/** @type {?} */inputs=[];var/** @type {?} */outputs=[];var/** @type {?} */host={};var/** @type {?} */queries={};Object.keys(propertyMetadata).forEach(function(propName){var/** @type {?} */input=ListWrapper.findLast(propertyMetadata[propName],function(a){return a instanceof Input;});if(input){if(input.bindingPropertyName){inputs.push(propName+': '+input.bindingPropertyName);}else{inputs.push(propName);}}var/** @type {?} */output=ListWrapper.findLast(propertyMetadata[propName],function(a){return a instanceof Output;});if(output){if(output.bindingPropertyName){outputs.push(propName+': '+output.bindingPropertyName);}else{outputs.push(propName);}}var/** @type {?} */hostBindings=propertyMetadata[propName].filter(function(a){return a&&a instanceof HostBinding;});hostBindings.forEach(function(hostBinding){if(hostBinding.hostPropertyName){var/** @type {?} */startWith=hostBinding.hostPropertyName[0];if(startWith==='('){throw new Error('@HostBinding can not bind to events. Use @HostListener instead.');}else if(startWith==='['){throw new Error('@HostBinding parameter should be a property name, \'class.<name>\', or \'attr.<name>\'.');}host['['+hostBinding.hostPropertyName+']']=propName;}else{host['['+propName+']']=propName;}});var/** @type {?} */hostListeners=propertyMetadata[propName].filter(function(a){return a&&a instanceof HostListener;});hostListeners.forEach(function(hostListener){var/** @type {?} */args=hostListener.args||[];host['('+hostListener.eventName+')']=propName+'('+args.join(',')+')';});var/** @type {?} */query=ListWrapper.findLast(propertyMetadata[propName],function(a){return a instanceof Query;});if(query){queries[propName]=query;}});return this._merge(dm,inputs,outputs,host,queries,directiveType);}/**
     * @param {?} def
     * @return {?}
     */},{key:'_extractPublicName',value:function _extractPublicName(def){return splitAtColon(def,[null,def])[1].trim();}/**
     * @param {?} bindings
     * @return {?}
     */},{key:'_dedupeBindings',value:function _dedupeBindings(bindings){var/** @type {?} */names=new Set();var/** @type {?} */reversedResult=[];// go last to first to allow later entries to overwrite previous entries
for(var/** @type {?} */i=bindings.length-1;i>=0;i--){var/** @type {?} */binding=bindings[i];var/** @type {?} */name=this._extractPublicName(binding);if(!names.has(name)){names.add(name);reversedResult.push(binding);}}return reversedResult.reverse();}/**
     * @param {?} directive
     * @param {?} inputs
     * @param {?} outputs
     * @param {?} host
     * @param {?} queries
     * @param {?} directiveType
     * @return {?}
     */},{key:'_merge',value:function _merge(directive,inputs,outputs,host,queries,directiveType){var/** @type {?} */mergedInputs=this._dedupeBindings(directive.inputs?directive.inputs.concat(inputs):inputs);var/** @type {?} */mergedOutputs=this._dedupeBindings(directive.outputs?directive.outputs.concat(outputs):outputs);var/** @type {?} */mergedHost=directive.host?StringMapWrapper.merge(directive.host,host):host;var/** @type {?} */mergedQueries=directive.queries?StringMapWrapper.merge(directive.queries,queries):queries;if(directive instanceof Component){return new Component({selector:directive.selector,inputs:mergedInputs,outputs:mergedOutputs,host:mergedHost,exportAs:directive.exportAs,moduleId:directive.moduleId,queries:mergedQueries,changeDetection:directive.changeDetection,providers:directive.providers,viewProviders:directive.viewProviders,entryComponents:directive.entryComponents,template:directive.template,templateUrl:directive.templateUrl,styles:directive.styles,styleUrls:directive.styleUrls,encapsulation:directive.encapsulation,animations:directive.animations,interpolation:directive.interpolation});}else{return new Directive({selector:directive.selector,inputs:mergedInputs,outputs:mergedOutputs,host:mergedHost,exportAs:directive.exportAs,queries:mergedQueries,providers:directive.providers});}}}]);return DirectiveResolver;}();DirectiveResolver.decorators=[{type:CompilerInjectable}];/** @nocollapse */DirectiveResolver.ctorParameters=function(){return[{type:ɵReflectorReader}];};/**
 * @param {?} type
 * @return {?}
 */function isDirectiveMetadata(type){return type instanceof Directive;}var TypeModifier={};TypeModifier.Const=0;TypeModifier[TypeModifier.Const]="Const";/**
 * @abstract
 */var Type$1=function(){/**
     * @param {?=} modifiers
     */function Type$1(){var modifiers=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_classCallCheck(this,Type$1);this.modifiers=modifiers;if(!modifiers){this.modifiers=[];}}/**
     * @abstract
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Type$1,[{key:'visitType',value:function visitType(visitor,context){}/**
     * @param {?} modifier
     * @return {?}
     */},{key:'hasModifier',value:function hasModifier(modifier){return this.modifiers.indexOf(modifier)!==-1;}}]);return Type$1;}();var BuiltinTypeName={};BuiltinTypeName.Dynamic=0;BuiltinTypeName.Bool=1;BuiltinTypeName.String=2;BuiltinTypeName.Int=3;BuiltinTypeName.Number=4;BuiltinTypeName.Function=5;BuiltinTypeName.Inferred=6;BuiltinTypeName[BuiltinTypeName.Dynamic]="Dynamic";BuiltinTypeName[BuiltinTypeName.Bool]="Bool";BuiltinTypeName[BuiltinTypeName.String]="String";BuiltinTypeName[BuiltinTypeName.Int]="Int";BuiltinTypeName[BuiltinTypeName.Number]="Number";BuiltinTypeName[BuiltinTypeName.Function]="Function";BuiltinTypeName[BuiltinTypeName.Inferred]="Inferred";var BuiltinType=function(_Type$){_inherits(BuiltinType,_Type$);/**
     * @param {?} name
     * @param {?=} modifiers
     */function BuiltinType(name){var modifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,BuiltinType);var _this121=_possibleConstructorReturn(this,(BuiltinType.__proto__||Object.getPrototypeOf(BuiltinType)).call(this,modifiers));_this121.name=name;return _this121;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(BuiltinType,[{key:'visitType',value:function visitType(visitor,context){return visitor.visitBuiltintType(this,context);}}]);return BuiltinType;}(Type$1);var ExpressionType=function(_Type$2){_inherits(ExpressionType,_Type$2);/**
     * @param {?} value
     * @param {?=} modifiers
     */function ExpressionType(value){var modifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,ExpressionType);var _this122=_possibleConstructorReturn(this,(ExpressionType.__proto__||Object.getPrototypeOf(ExpressionType)).call(this,modifiers));_this122.value=value;return _this122;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ExpressionType,[{key:'visitType',value:function visitType(visitor,context){return visitor.visitExpressionType(this,context);}}]);return ExpressionType;}(Type$1);var ArrayType=function(_Type$3){_inherits(ArrayType,_Type$3);/**
     * @param {?} of
     * @param {?=} modifiers
     */function ArrayType(of){var modifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,ArrayType);var _this123=_possibleConstructorReturn(this,(ArrayType.__proto__||Object.getPrototypeOf(ArrayType)).call(this,modifiers));_this123.of=of;return _this123;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ArrayType,[{key:'visitType',value:function visitType(visitor,context){return visitor.visitArrayType(this,context);}}]);return ArrayType;}(Type$1);var MapType=function(_Type$4){_inherits(MapType,_Type$4);/**
     * @param {?} valueType
     * @param {?=} modifiers
     */function MapType(valueType){var modifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,MapType);var _this124=_possibleConstructorReturn(this,(MapType.__proto__||Object.getPrototypeOf(MapType)).call(this,modifiers));_this124.valueType=valueType;return _this124;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(MapType,[{key:'visitType',value:function visitType(visitor,context){return visitor.visitMapType(this,context);}}]);return MapType;}(Type$1);var/** @type {?} */DYNAMIC_TYPE=new BuiltinType(BuiltinTypeName.Dynamic);var/** @type {?} */INFERRED_TYPE=new BuiltinType(BuiltinTypeName.Inferred);var/** @type {?} */BOOL_TYPE=new BuiltinType(BuiltinTypeName.Bool);var/** @type {?} */INT_TYPE=new BuiltinType(BuiltinTypeName.Int);var/** @type {?} */NUMBER_TYPE=new BuiltinType(BuiltinTypeName.Number);var/** @type {?} */STRING_TYPE=new BuiltinType(BuiltinTypeName.String);var/** @type {?} */FUNCTION_TYPE=new BuiltinType(BuiltinTypeName.Function);var BinaryOperator={};BinaryOperator.Equals=0;BinaryOperator.NotEquals=1;BinaryOperator.Identical=2;BinaryOperator.NotIdentical=3;BinaryOperator.Minus=4;BinaryOperator.Plus=5;BinaryOperator.Divide=6;BinaryOperator.Multiply=7;BinaryOperator.Modulo=8;BinaryOperator.And=9;BinaryOperator.Or=10;BinaryOperator.Lower=11;BinaryOperator.LowerEquals=12;BinaryOperator.Bigger=13;BinaryOperator.BiggerEquals=14;BinaryOperator[BinaryOperator.Equals]="Equals";BinaryOperator[BinaryOperator.NotEquals]="NotEquals";BinaryOperator[BinaryOperator.Identical]="Identical";BinaryOperator[BinaryOperator.NotIdentical]="NotIdentical";BinaryOperator[BinaryOperator.Minus]="Minus";BinaryOperator[BinaryOperator.Plus]="Plus";BinaryOperator[BinaryOperator.Divide]="Divide";BinaryOperator[BinaryOperator.Multiply]="Multiply";BinaryOperator[BinaryOperator.Modulo]="Modulo";BinaryOperator[BinaryOperator.And]="And";BinaryOperator[BinaryOperator.Or]="Or";BinaryOperator[BinaryOperator.Lower]="Lower";BinaryOperator[BinaryOperator.LowerEquals]="LowerEquals";BinaryOperator[BinaryOperator.Bigger]="Bigger";BinaryOperator[BinaryOperator.BiggerEquals]="BiggerEquals";/**
 * @abstract
 */var Expression=function(){/**
     * @param {?} type
     * @param {?=} sourceSpan
     */function Expression(type,sourceSpan){_classCallCheck(this,Expression);this.type=type;this.sourceSpan=sourceSpan;}/**
     * @abstract
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Expression,[{key:'visitExpression',value:function visitExpression(visitor,context){}/**
     * @param {?} name
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'prop',value:function prop(name,sourceSpan){return new ReadPropExpr(this,name,null,sourceSpan);}/**
     * @param {?} index
     * @param {?=} type
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'key',value:function key(index){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new ReadKeyExpr(this,index,type,sourceSpan);}/**
     * @param {?} name
     * @param {?} params
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'callMethod',value:function callMethod(name,params,sourceSpan){return new InvokeMethodExpr(this,name,params,null,sourceSpan);}/**
     * @param {?} params
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'callFn',value:function callFn(params,sourceSpan){return new InvokeFunctionExpr(this,params,null,sourceSpan);}/**
     * @param {?} params
     * @param {?=} type
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'instantiate',value:function instantiate(params){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new InstantiateExpr(this,params,type,sourceSpan);}/**
     * @param {?} trueCase
     * @param {?=} falseCase
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'conditional',value:function conditional(trueCase){var falseCase=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new ConditionalExpr(this,trueCase,falseCase,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'equals',value:function equals(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Equals,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'notEquals',value:function notEquals(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.NotEquals,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'identical',value:function identical(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Identical,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'notIdentical',value:function notIdentical(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.NotIdentical,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'minus',value:function minus(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Minus,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'plus',value:function plus(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Plus,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'divide',value:function divide(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Divide,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'multiply',value:function multiply(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Multiply,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'modulo',value:function modulo(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Modulo,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'and',value:function and(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.And,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'or',value:function or(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Or,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'lower',value:function lower(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Lower,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'lowerEquals',value:function lowerEquals(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.LowerEquals,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'bigger',value:function bigger(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.Bigger,this,rhs,null,sourceSpan);}/**
     * @param {?} rhs
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'biggerEquals',value:function biggerEquals(rhs,sourceSpan){return new BinaryOperatorExpr(BinaryOperator.BiggerEquals,this,rhs,null,sourceSpan);}/**
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'isBlank',value:function isBlank(sourceSpan){// Note: We use equals by purpose here to compare to null and undefined in JS.
// We use the typed null to allow strictNullChecks to narrow types.
return this.equals(TYPED_NULL_EXPR,sourceSpan);}/**
     * @param {?} type
     * @param {?=} sourceSpan
     * @return {?}
     */},{key:'cast',value:function cast(type,sourceSpan){return new CastExpr(this,type,sourceSpan);}/**
     * @return {?}
     */},{key:'toStmt',value:function toStmt(){return new ExpressionStatement(this);}}]);return Expression;}();var BuiltinVar={};BuiltinVar.This=0;BuiltinVar.Super=1;BuiltinVar.CatchError=2;BuiltinVar.CatchStack=3;BuiltinVar[BuiltinVar.This]="This";BuiltinVar[BuiltinVar.Super]="Super";BuiltinVar[BuiltinVar.CatchError]="CatchError";BuiltinVar[BuiltinVar.CatchStack]="CatchStack";var ReadVarExpr=function(_Expression){_inherits(ReadVarExpr,_Expression);/**
     * @param {?} name
     * @param {?=} type
     * @param {?=} sourceSpan
     */function ReadVarExpr(name){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];_classCallCheck(this,ReadVarExpr);var _this125=_possibleConstructorReturn(this,(ReadVarExpr.__proto__||Object.getPrototypeOf(ReadVarExpr)).call(this,type,sourceSpan));if(typeof name==='string'){_this125.name=name;_this125.builtin=null;}else{_this125.name=null;_this125.builtin=name;}return _this125;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ReadVarExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitReadVarExpr(this,context);}/**
     * @param {?} value
     * @return {?}
     */},{key:'set',value:function set(value){return new WriteVarExpr(this.name,value,null,this.sourceSpan);}}]);return ReadVarExpr;}(Expression);var WriteVarExpr=function(_Expression2){_inherits(WriteVarExpr,_Expression2);/**
     * @param {?} name
     * @param {?} value
     * @param {?=} type
     * @param {?=} sourceSpan
     */function WriteVarExpr(name,value){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];_classCallCheck(this,WriteVarExpr);var _this126=_possibleConstructorReturn(this,(WriteVarExpr.__proto__||Object.getPrototypeOf(WriteVarExpr)).call(this,type||value.type,sourceSpan));_this126.name=name;_this126.value=value;return _this126;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(WriteVarExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitWriteVarExpr(this,context);}/**
     * @param {?=} type
     * @param {?=} modifiers
     * @return {?}
     */},{key:'toDeclStmt',value:function toDeclStmt(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var modifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return new DeclareVarStmt(this.name,this.value,type,modifiers,this.sourceSpan);}}]);return WriteVarExpr;}(Expression);var WriteKeyExpr=function(_Expression3){_inherits(WriteKeyExpr,_Expression3);/**
     * @param {?} receiver
     * @param {?} index
     * @param {?} value
     * @param {?=} type
     * @param {?=} sourceSpan
     */function WriteKeyExpr(receiver,index,value){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var sourceSpan=arguments[4];_classCallCheck(this,WriteKeyExpr);var _this127=_possibleConstructorReturn(this,(WriteKeyExpr.__proto__||Object.getPrototypeOf(WriteKeyExpr)).call(this,type||value.type,sourceSpan));_this127.receiver=receiver;_this127.index=index;_this127.value=value;return _this127;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(WriteKeyExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitWriteKeyExpr(this,context);}}]);return WriteKeyExpr;}(Expression);var WritePropExpr=function(_Expression4){_inherits(WritePropExpr,_Expression4);/**
     * @param {?} receiver
     * @param {?} name
     * @param {?} value
     * @param {?=} type
     * @param {?=} sourceSpan
     */function WritePropExpr(receiver,name,value){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var sourceSpan=arguments[4];_classCallCheck(this,WritePropExpr);var _this128=_possibleConstructorReturn(this,(WritePropExpr.__proto__||Object.getPrototypeOf(WritePropExpr)).call(this,type||value.type,sourceSpan));_this128.receiver=receiver;_this128.name=name;_this128.value=value;return _this128;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(WritePropExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitWritePropExpr(this,context);}}]);return WritePropExpr;}(Expression);var BuiltinMethod={};BuiltinMethod.ConcatArray=0;BuiltinMethod.SubscribeObservable=1;BuiltinMethod.Bind=2;BuiltinMethod[BuiltinMethod.ConcatArray]="ConcatArray";BuiltinMethod[BuiltinMethod.SubscribeObservable]="SubscribeObservable";BuiltinMethod[BuiltinMethod.Bind]="Bind";var InvokeMethodExpr=function(_Expression5){_inherits(InvokeMethodExpr,_Expression5);/**
     * @param {?} receiver
     * @param {?} method
     * @param {?} args
     * @param {?=} type
     * @param {?=} sourceSpan
     */function InvokeMethodExpr(receiver,method,args){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var sourceSpan=arguments[4];_classCallCheck(this,InvokeMethodExpr);var _this129=_possibleConstructorReturn(this,(InvokeMethodExpr.__proto__||Object.getPrototypeOf(InvokeMethodExpr)).call(this,type,sourceSpan));_this129.receiver=receiver;_this129.args=args;if(typeof method==='string'){_this129.name=method;_this129.builtin=null;}else{_this129.name=null;_this129.builtin=method;}return _this129;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(InvokeMethodExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitInvokeMethodExpr(this,context);}}]);return InvokeMethodExpr;}(Expression);var InvokeFunctionExpr=function(_Expression6){_inherits(InvokeFunctionExpr,_Expression6);/**
     * @param {?} fn
     * @param {?} args
     * @param {?=} type
     * @param {?=} sourceSpan
     */function InvokeFunctionExpr(fn,args){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];_classCallCheck(this,InvokeFunctionExpr);var _this130=_possibleConstructorReturn(this,(InvokeFunctionExpr.__proto__||Object.getPrototypeOf(InvokeFunctionExpr)).call(this,type,sourceSpan));_this130.fn=fn;_this130.args=args;return _this130;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(InvokeFunctionExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitInvokeFunctionExpr(this,context);}}]);return InvokeFunctionExpr;}(Expression);var InstantiateExpr=function(_Expression7){_inherits(InstantiateExpr,_Expression7);/**
     * @param {?} classExpr
     * @param {?} args
     * @param {?=} type
     * @param {?=} sourceSpan
     */function InstantiateExpr(classExpr,args,type,sourceSpan){_classCallCheck(this,InstantiateExpr);var _this131=_possibleConstructorReturn(this,(InstantiateExpr.__proto__||Object.getPrototypeOf(InstantiateExpr)).call(this,type,sourceSpan));_this131.classExpr=classExpr;_this131.args=args;return _this131;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(InstantiateExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitInstantiateExpr(this,context);}}]);return InstantiateExpr;}(Expression);var LiteralExpr=function(_Expression8){_inherits(LiteralExpr,_Expression8);/**
     * @param {?} value
     * @param {?=} type
     * @param {?=} sourceSpan
     */function LiteralExpr(value){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];_classCallCheck(this,LiteralExpr);var _this132=_possibleConstructorReturn(this,(LiteralExpr.__proto__||Object.getPrototypeOf(LiteralExpr)).call(this,type,sourceSpan));_this132.value=value;return _this132;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(LiteralExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitLiteralExpr(this,context);}}]);return LiteralExpr;}(Expression);var ExternalExpr=function(_Expression9){_inherits(ExternalExpr,_Expression9);/**
     * @param {?} value
     * @param {?=} type
     * @param {?=} typeParams
     * @param {?=} sourceSpan
     */function ExternalExpr(value){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var typeParams=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];_classCallCheck(this,ExternalExpr);var _this133=_possibleConstructorReturn(this,(ExternalExpr.__proto__||Object.getPrototypeOf(ExternalExpr)).call(this,type,sourceSpan));_this133.value=value;_this133.typeParams=typeParams;return _this133;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ExternalExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitExternalExpr(this,context);}}]);return ExternalExpr;}(Expression);var ConditionalExpr=function(_Expression10){_inherits(ConditionalExpr,_Expression10);/**
     * @param {?} condition
     * @param {?} trueCase
     * @param {?=} falseCase
     * @param {?=} type
     * @param {?=} sourceSpan
     */function ConditionalExpr(condition,trueCase){var falseCase=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var sourceSpan=arguments[4];_classCallCheck(this,ConditionalExpr);var _this134=_possibleConstructorReturn(this,(ConditionalExpr.__proto__||Object.getPrototypeOf(ConditionalExpr)).call(this,type||trueCase.type,sourceSpan));_this134.condition=condition;_this134.falseCase=falseCase;_this134.trueCase=trueCase;return _this134;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ConditionalExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitConditionalExpr(this,context);}}]);return ConditionalExpr;}(Expression);var NotExpr=function(_Expression11){_inherits(NotExpr,_Expression11);/**
     * @param {?} condition
     * @param {?=} sourceSpan
     */function NotExpr(condition,sourceSpan){_classCallCheck(this,NotExpr);var _this135=_possibleConstructorReturn(this,(NotExpr.__proto__||Object.getPrototypeOf(NotExpr)).call(this,BOOL_TYPE,sourceSpan));_this135.condition=condition;return _this135;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(NotExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitNotExpr(this,context);}}]);return NotExpr;}(Expression);var CastExpr=function(_Expression12){_inherits(CastExpr,_Expression12);/**
     * @param {?} value
     * @param {?} type
     * @param {?=} sourceSpan
     */function CastExpr(value,type,sourceSpan){_classCallCheck(this,CastExpr);var _this136=_possibleConstructorReturn(this,(CastExpr.__proto__||Object.getPrototypeOf(CastExpr)).call(this,type,sourceSpan));_this136.value=value;return _this136;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(CastExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitCastExpr(this,context);}}]);return CastExpr;}(Expression);var FnParam=/**
     * @param {?} name
     * @param {?=} type
     */function FnParam(name){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,FnParam);this.name=name;this.type=type;};var FunctionExpr=function(_Expression13){_inherits(FunctionExpr,_Expression13);/**
     * @param {?} params
     * @param {?} statements
     * @param {?=} type
     * @param {?=} sourceSpan
     */function FunctionExpr(params,statements){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];_classCallCheck(this,FunctionExpr);var _this137=_possibleConstructorReturn(this,(FunctionExpr.__proto__||Object.getPrototypeOf(FunctionExpr)).call(this,type,sourceSpan));_this137.params=params;_this137.statements=statements;return _this137;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(FunctionExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitFunctionExpr(this,context);}/**
     * @param {?} name
     * @param {?=} modifiers
     * @return {?}
     */},{key:'toDeclStmt',value:function toDeclStmt(name){var modifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return new DeclareFunctionStmt(name,this.params,this.statements,this.type,modifiers,this.sourceSpan);}}]);return FunctionExpr;}(Expression);var BinaryOperatorExpr=function(_Expression14){_inherits(BinaryOperatorExpr,_Expression14);/**
     * @param {?} operator
     * @param {?} lhs
     * @param {?} rhs
     * @param {?=} type
     * @param {?=} sourceSpan
     */function BinaryOperatorExpr(operator,lhs,rhs){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var sourceSpan=arguments[4];_classCallCheck(this,BinaryOperatorExpr);var _this138=_possibleConstructorReturn(this,(BinaryOperatorExpr.__proto__||Object.getPrototypeOf(BinaryOperatorExpr)).call(this,type||lhs.type,sourceSpan));_this138.operator=operator;_this138.rhs=rhs;_this138.lhs=lhs;return _this138;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(BinaryOperatorExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitBinaryOperatorExpr(this,context);}}]);return BinaryOperatorExpr;}(Expression);var ReadPropExpr=function(_Expression15){_inherits(ReadPropExpr,_Expression15);/**
     * @param {?} receiver
     * @param {?} name
     * @param {?=} type
     * @param {?=} sourceSpan
     */function ReadPropExpr(receiver,name){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];_classCallCheck(this,ReadPropExpr);var _this139=_possibleConstructorReturn(this,(ReadPropExpr.__proto__||Object.getPrototypeOf(ReadPropExpr)).call(this,type,sourceSpan));_this139.receiver=receiver;_this139.name=name;return _this139;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ReadPropExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitReadPropExpr(this,context);}/**
     * @param {?} value
     * @return {?}
     */},{key:'set',value:function set(value){return new WritePropExpr(this.receiver,this.name,value,null,this.sourceSpan);}}]);return ReadPropExpr;}(Expression);var ReadKeyExpr=function(_Expression16){_inherits(ReadKeyExpr,_Expression16);/**
     * @param {?} receiver
     * @param {?} index
     * @param {?=} type
     * @param {?=} sourceSpan
     */function ReadKeyExpr(receiver,index){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];_classCallCheck(this,ReadKeyExpr);var _this140=_possibleConstructorReturn(this,(ReadKeyExpr.__proto__||Object.getPrototypeOf(ReadKeyExpr)).call(this,type,sourceSpan));_this140.receiver=receiver;_this140.index=index;return _this140;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ReadKeyExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitReadKeyExpr(this,context);}/**
     * @param {?} value
     * @return {?}
     */},{key:'set',value:function set(value){return new WriteKeyExpr(this.receiver,this.index,value,null,this.sourceSpan);}}]);return ReadKeyExpr;}(Expression);var LiteralArrayExpr=function(_Expression17){_inherits(LiteralArrayExpr,_Expression17);/**
     * @param {?} entries
     * @param {?=} type
     * @param {?=} sourceSpan
     */function LiteralArrayExpr(entries){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];_classCallCheck(this,LiteralArrayExpr);var _this141=_possibleConstructorReturn(this,(LiteralArrayExpr.__proto__||Object.getPrototypeOf(LiteralArrayExpr)).call(this,type,sourceSpan));_this141.entries=entries;return _this141;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(LiteralArrayExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitLiteralArrayExpr(this,context);}}]);return LiteralArrayExpr;}(Expression);var LiteralMapEntry=/**
     * @param {?} key
     * @param {?} value
     * @param {?=} quoted
     */function LiteralMapEntry(key,value){var quoted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;_classCallCheck(this,LiteralMapEntry);this.key=key;this.value=value;this.quoted=quoted;};var LiteralMapExpr=function(_Expression18){_inherits(LiteralMapExpr,_Expression18);/**
     * @param {?} entries
     * @param {?=} type
     * @param {?=} sourceSpan
     */function LiteralMapExpr(entries){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];_classCallCheck(this,LiteralMapExpr);var _this142=_possibleConstructorReturn(this,(LiteralMapExpr.__proto__||Object.getPrototypeOf(LiteralMapExpr)).call(this,type,sourceSpan));_this142.entries=entries;_this142.valueType=null;if(type){_this142.valueType=type.valueType;}return _this142;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(LiteralMapExpr,[{key:'visitExpression',value:function visitExpression(visitor,context){return visitor.visitLiteralMapExpr(this,context);}}]);return LiteralMapExpr;}(Expression);var/** @type {?} */THIS_EXPR=new ReadVarExpr(BuiltinVar.This);var/** @type {?} */SUPER_EXPR=new ReadVarExpr(BuiltinVar.Super);var/** @type {?} */CATCH_ERROR_VAR=new ReadVarExpr(BuiltinVar.CatchError);var/** @type {?} */CATCH_STACK_VAR=new ReadVarExpr(BuiltinVar.CatchStack);var/** @type {?} */NULL_EXPR=new LiteralExpr(null,null);var/** @type {?} */TYPED_NULL_EXPR=new LiteralExpr(null,INFERRED_TYPE);var StmtModifier={};StmtModifier.Final=0;StmtModifier.Private=1;StmtModifier[StmtModifier.Final]="Final";StmtModifier[StmtModifier.Private]="Private";/**
 * @abstract
 */var Statement=function(){/**
     * @param {?=} modifiers
     * @param {?=} sourceSpan
     */function Statement(){var modifiers=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var sourceSpan=arguments[1];_classCallCheck(this,Statement);this.modifiers=modifiers;this.sourceSpan=sourceSpan;if(!modifiers){this.modifiers=[];}}/**
     * @abstract
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(Statement,[{key:'visitStatement',value:function visitStatement(visitor,context){}/**
     * @param {?} modifier
     * @return {?}
     */},{key:'hasModifier',value:function hasModifier(modifier){return this.modifiers.indexOf(modifier)!==-1;}}]);return Statement;}();var DeclareVarStmt=function(_Statement){_inherits(DeclareVarStmt,_Statement);/**
     * @param {?} name
     * @param {?} value
     * @param {?=} type
     * @param {?=} modifiers
     * @param {?=} sourceSpan
     */function DeclareVarStmt(name,value){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var modifiers=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var sourceSpan=arguments[4];_classCallCheck(this,DeclareVarStmt);var _this143=_possibleConstructorReturn(this,(DeclareVarStmt.__proto__||Object.getPrototypeOf(DeclareVarStmt)).call(this,modifiers,sourceSpan));_this143.name=name;_this143.value=value;_this143.type=type||value.type;return _this143;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(DeclareVarStmt,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitDeclareVarStmt(this,context);}}]);return DeclareVarStmt;}(Statement);var DeclareFunctionStmt=function(_Statement2){_inherits(DeclareFunctionStmt,_Statement2);/**
     * @param {?} name
     * @param {?} params
     * @param {?} statements
     * @param {?=} type
     * @param {?=} modifiers
     * @param {?=} sourceSpan
     */function DeclareFunctionStmt(name,params,statements){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var modifiers=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var sourceSpan=arguments[5];_classCallCheck(this,DeclareFunctionStmt);var _this144=_possibleConstructorReturn(this,(DeclareFunctionStmt.__proto__||Object.getPrototypeOf(DeclareFunctionStmt)).call(this,modifiers,sourceSpan));_this144.name=name;_this144.params=params;_this144.statements=statements;_this144.type=type;return _this144;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(DeclareFunctionStmt,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitDeclareFunctionStmt(this,context);}}]);return DeclareFunctionStmt;}(Statement);var ExpressionStatement=function(_Statement3){_inherits(ExpressionStatement,_Statement3);/**
     * @param {?} expr
     * @param {?=} sourceSpan
     */function ExpressionStatement(expr,sourceSpan){_classCallCheck(this,ExpressionStatement);var _this145=_possibleConstructorReturn(this,(ExpressionStatement.__proto__||Object.getPrototypeOf(ExpressionStatement)).call(this,null,sourceSpan));_this145.expr=expr;return _this145;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ExpressionStatement,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitExpressionStmt(this,context);}}]);return ExpressionStatement;}(Statement);var ReturnStatement=function(_Statement4){_inherits(ReturnStatement,_Statement4);/**
     * @param {?} value
     * @param {?=} sourceSpan
     */function ReturnStatement(value,sourceSpan){_classCallCheck(this,ReturnStatement);var _this146=_possibleConstructorReturn(this,(ReturnStatement.__proto__||Object.getPrototypeOf(ReturnStatement)).call(this,null,sourceSpan));_this146.value=value;return _this146;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ReturnStatement,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitReturnStmt(this,context);}}]);return ReturnStatement;}(Statement);var AbstractClassPart=function(){/**
     * @param {?=} type
     * @param {?} modifiers
     */function AbstractClassPart(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var modifiers=arguments[1];_classCallCheck(this,AbstractClassPart);this.type=type;this.modifiers=modifiers;if(!modifiers){this.modifiers=[];}}/**
     * @param {?} modifier
     * @return {?}
     */_createClass(AbstractClassPart,[{key:'hasModifier',value:function hasModifier(modifier){return this.modifiers.indexOf(modifier)!==-1;}}]);return AbstractClassPart;}();var ClassField=function(_AbstractClassPart){_inherits(ClassField,_AbstractClassPart);/**
     * @param {?} name
     * @param {?=} type
     * @param {?=} modifiers
     */function ClassField(name){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var modifiers=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;_classCallCheck(this,ClassField);var _this147=_possibleConstructorReturn(this,(ClassField.__proto__||Object.getPrototypeOf(ClassField)).call(this,type,modifiers));_this147.name=name;return _this147;}return ClassField;}(AbstractClassPart);var ClassMethod=function(_AbstractClassPart2){_inherits(ClassMethod,_AbstractClassPart2);/**
     * @param {?} name
     * @param {?} params
     * @param {?} body
     * @param {?=} type
     * @param {?=} modifiers
     */function ClassMethod(name,params,body){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var modifiers=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;_classCallCheck(this,ClassMethod);var _this148=_possibleConstructorReturn(this,(ClassMethod.__proto__||Object.getPrototypeOf(ClassMethod)).call(this,type,modifiers));_this148.name=name;_this148.params=params;_this148.body=body;return _this148;}return ClassMethod;}(AbstractClassPart);var ClassGetter=function(_AbstractClassPart3){_inherits(ClassGetter,_AbstractClassPart3);/**
     * @param {?} name
     * @param {?} body
     * @param {?=} type
     * @param {?=} modifiers
     */function ClassGetter(name,body){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var modifiers=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;_classCallCheck(this,ClassGetter);var _this149=_possibleConstructorReturn(this,(ClassGetter.__proto__||Object.getPrototypeOf(ClassGetter)).call(this,type,modifiers));_this149.name=name;_this149.body=body;return _this149;}return ClassGetter;}(AbstractClassPart);var ClassStmt=function(_Statement5){_inherits(ClassStmt,_Statement5);/**
     * @param {?} name
     * @param {?} parent
     * @param {?} fields
     * @param {?} getters
     * @param {?} constructorMethod
     * @param {?} methods
     * @param {?=} modifiers
     * @param {?=} sourceSpan
     */function ClassStmt(name,parent,fields,getters,constructorMethod,methods){var modifiers=arguments.length>6&&arguments[6]!==undefined?arguments[6]:null;var sourceSpan=arguments[7];_classCallCheck(this,ClassStmt);var _this150=_possibleConstructorReturn(this,(ClassStmt.__proto__||Object.getPrototypeOf(ClassStmt)).call(this,modifiers,sourceSpan));_this150.name=name;_this150.parent=parent;_this150.fields=fields;_this150.getters=getters;_this150.constructorMethod=constructorMethod;_this150.methods=methods;return _this150;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ClassStmt,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitDeclareClassStmt(this,context);}}]);return ClassStmt;}(Statement);var IfStmt=function(_Statement6){_inherits(IfStmt,_Statement6);/**
     * @param {?} condition
     * @param {?} trueCase
     * @param {?=} falseCase
     * @param {?=} sourceSpan
     */function IfStmt(condition,trueCase){var falseCase=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var sourceSpan=arguments[3];_classCallCheck(this,IfStmt);var _this151=_possibleConstructorReturn(this,(IfStmt.__proto__||Object.getPrototypeOf(IfStmt)).call(this,null,sourceSpan));_this151.condition=condition;_this151.trueCase=trueCase;_this151.falseCase=falseCase;return _this151;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(IfStmt,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitIfStmt(this,context);}}]);return IfStmt;}(Statement);var TryCatchStmt=function(_Statement7){_inherits(TryCatchStmt,_Statement7);/**
     * @param {?} bodyStmts
     * @param {?} catchStmts
     * @param {?=} sourceSpan
     */function TryCatchStmt(bodyStmts,catchStmts,sourceSpan){_classCallCheck(this,TryCatchStmt);var _this152=_possibleConstructorReturn(this,(TryCatchStmt.__proto__||Object.getPrototypeOf(TryCatchStmt)).call(this,null,sourceSpan));_this152.bodyStmts=bodyStmts;_this152.catchStmts=catchStmts;return _this152;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(TryCatchStmt,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitTryCatchStmt(this,context);}}]);return TryCatchStmt;}(Statement);var ThrowStmt=function(_Statement8){_inherits(ThrowStmt,_Statement8);/**
     * @param {?} error
     * @param {?=} sourceSpan
     */function ThrowStmt(error,sourceSpan){_classCallCheck(this,ThrowStmt);var _this153=_possibleConstructorReturn(this,(ThrowStmt.__proto__||Object.getPrototypeOf(ThrowStmt)).call(this,null,sourceSpan));_this153.error=error;return _this153;}/**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */_createClass(ThrowStmt,[{key:'visitStatement',value:function visitStatement(visitor,context){return visitor.visitThrowStmt(this,context);}}]);return ThrowStmt;}(Statement);var ExpressionTransformer=function(){function ExpressionTransformer(){_classCallCheck(this,ExpressionTransformer);}_createClass(ExpressionTransformer,[{key:'visitReadVarExpr',/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */value:function visitReadVarExpr(ast,context){return ast;}/**
     * @param {?} expr
     * @param {?} context
     * @return {?}
     */},{key:'visitWriteVarExpr',value:function visitWriteVarExpr(expr,context){return new WriteVarExpr(expr.name,expr.value.visitExpression(this,context),expr.type,expr.sourceSpan);}/**
     * @param {?} expr
     * @param {?} context
     * @return {?}
     */},{key:'visitWriteKeyExpr',value:function visitWriteKeyExpr(expr,context){return new WriteKeyExpr(expr.receiver.visitExpression(this,context),expr.index.visitExpression(this,context),expr.value.visitExpression(this,context),expr.type,expr.sourceSpan);}/**
     * @param {?} expr
     * @param {?} context
     * @return {?}
     */},{key:'visitWritePropExpr',value:function visitWritePropExpr(expr,context){return new WritePropExpr(expr.receiver.visitExpression(this,context),expr.name,expr.value.visitExpression(this,context),expr.type,expr.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInvokeMethodExpr',value:function visitInvokeMethodExpr(ast,context){var/** @type {?} */method=ast.builtin||ast.name;return new InvokeMethodExpr(ast.receiver.visitExpression(this,context),method,this.visitAllExpressions(ast.args,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInvokeFunctionExpr',value:function visitInvokeFunctionExpr(ast,context){return new InvokeFunctionExpr(ast.fn.visitExpression(this,context),this.visitAllExpressions(ast.args,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInstantiateExpr',value:function visitInstantiateExpr(ast,context){return new InstantiateExpr(ast.classExpr.visitExpression(this,context),this.visitAllExpressions(ast.args,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralExpr',value:function visitLiteralExpr(ast,context){return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitExternalExpr',value:function visitExternalExpr(ast,context){return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitConditionalExpr',value:function visitConditionalExpr(ast,context){return new ConditionalExpr(ast.condition.visitExpression(this,context),ast.trueCase.visitExpression(this,context),ast.falseCase.visitExpression(this,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitNotExpr',value:function visitNotExpr(ast,context){return new NotExpr(ast.condition.visitExpression(this,context),ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitCastExpr',value:function visitCastExpr(ast,context){return new CastExpr(ast.value.visitExpression(this,context),context,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitFunctionExpr',value:function visitFunctionExpr(ast,context){// Don't descend into nested functions
return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitBinaryOperatorExpr',value:function visitBinaryOperatorExpr(ast,context){return new BinaryOperatorExpr(ast.operator,ast.lhs.visitExpression(this,context),ast.rhs.visitExpression(this,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReadPropExpr',value:function visitReadPropExpr(ast,context){return new ReadPropExpr(ast.receiver.visitExpression(this,context),ast.name,ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReadKeyExpr',value:function visitReadKeyExpr(ast,context){return new ReadKeyExpr(ast.receiver.visitExpression(this,context),ast.index.visitExpression(this,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralArrayExpr',value:function visitLiteralArrayExpr(ast,context){return new LiteralArrayExpr(this.visitAllExpressions(ast.entries,context),ast.type,ast.sourceSpan);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralMapExpr',value:function visitLiteralMapExpr(ast,context){var _this154=this;var/** @type {?} */entries=ast.entries.map(function(entry){return new LiteralMapEntry(entry.key,entry.value.visitExpression(_this154,context),entry.quoted);});var/** @type {?} */mapType=new MapType(ast.valueType);return new LiteralMapExpr(entries,mapType,ast.sourceSpan);}/**
     * @param {?} exprs
     * @param {?} context
     * @return {?}
     */},{key:'visitAllExpressions',value:function visitAllExpressions(exprs,context){var _this155=this;return exprs.map(function(expr){return expr.visitExpression(_this155,context);});}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareVarStmt',value:function visitDeclareVarStmt(stmt,context){return new DeclareVarStmt(stmt.name,stmt.value.visitExpression(this,context),stmt.type,stmt.modifiers,stmt.sourceSpan);}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareFunctionStmt',value:function visitDeclareFunctionStmt(stmt,context){// Don't descend into nested functions
return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitExpressionStmt',value:function visitExpressionStmt(stmt,context){return new ExpressionStatement(stmt.expr.visitExpression(this,context),stmt.sourceSpan);}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitReturnStmt',value:function visitReturnStmt(stmt,context){return new ReturnStatement(stmt.value.visitExpression(this,context),stmt.sourceSpan);}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareClassStmt',value:function visitDeclareClassStmt(stmt,context){// Don't descend into nested functions
return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitIfStmt',value:function visitIfStmt(stmt,context){return new IfStmt(stmt.condition.visitExpression(this,context),this.visitAllStatements(stmt.trueCase,context),this.visitAllStatements(stmt.falseCase,context),stmt.sourceSpan);}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitTryCatchStmt',value:function visitTryCatchStmt(stmt,context){return new TryCatchStmt(this.visitAllStatements(stmt.bodyStmts,context),this.visitAllStatements(stmt.catchStmts,context),stmt.sourceSpan);}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitThrowStmt',value:function visitThrowStmt(stmt,context){return new ThrowStmt(stmt.error.visitExpression(this,context),stmt.sourceSpan);}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitCommentStmt',value:function visitCommentStmt(stmt,context){return stmt;}/**
     * @param {?} stmts
     * @param {?} context
     * @return {?}
     */},{key:'visitAllStatements',value:function visitAllStatements(stmts,context){var _this156=this;return stmts.map(function(stmt){return stmt.visitStatement(_this156,context);});}}]);return ExpressionTransformer;}();var RecursiveExpressionVisitor=function(){function RecursiveExpressionVisitor(){_classCallCheck(this,RecursiveExpressionVisitor);}_createClass(RecursiveExpressionVisitor,[{key:'visitReadVarExpr',/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */value:function visitReadVarExpr(ast,context){return ast;}/**
     * @param {?} expr
     * @param {?} context
     * @return {?}
     */},{key:'visitWriteVarExpr',value:function visitWriteVarExpr(expr,context){expr.value.visitExpression(this,context);return expr;}/**
     * @param {?} expr
     * @param {?} context
     * @return {?}
     */},{key:'visitWriteKeyExpr',value:function visitWriteKeyExpr(expr,context){expr.receiver.visitExpression(this,context);expr.index.visitExpression(this,context);expr.value.visitExpression(this,context);return expr;}/**
     * @param {?} expr
     * @param {?} context
     * @return {?}
     */},{key:'visitWritePropExpr',value:function visitWritePropExpr(expr,context){expr.receiver.visitExpression(this,context);expr.value.visitExpression(this,context);return expr;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInvokeMethodExpr',value:function visitInvokeMethodExpr(ast,context){ast.receiver.visitExpression(this,context);this.visitAllExpressions(ast.args,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInvokeFunctionExpr',value:function visitInvokeFunctionExpr(ast,context){ast.fn.visitExpression(this,context);this.visitAllExpressions(ast.args,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitInstantiateExpr',value:function visitInstantiateExpr(ast,context){ast.classExpr.visitExpression(this,context);this.visitAllExpressions(ast.args,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralExpr',value:function visitLiteralExpr(ast,context){return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitExternalExpr',value:function visitExternalExpr(ast,context){return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitConditionalExpr',value:function visitConditionalExpr(ast,context){ast.condition.visitExpression(this,context);ast.trueCase.visitExpression(this,context);ast.falseCase.visitExpression(this,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitNotExpr',value:function visitNotExpr(ast,context){ast.condition.visitExpression(this,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitCastExpr',value:function visitCastExpr(ast,context){ast.value.visitExpression(this,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitFunctionExpr',value:function visitFunctionExpr(ast,context){return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitBinaryOperatorExpr',value:function visitBinaryOperatorExpr(ast,context){ast.lhs.visitExpression(this,context);ast.rhs.visitExpression(this,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReadPropExpr',value:function visitReadPropExpr(ast,context){ast.receiver.visitExpression(this,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReadKeyExpr',value:function visitReadKeyExpr(ast,context){ast.receiver.visitExpression(this,context);ast.index.visitExpression(this,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralArrayExpr',value:function visitLiteralArrayExpr(ast,context){this.visitAllExpressions(ast.entries,context);return ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralMapExpr',value:function visitLiteralMapExpr(ast,context){var _this157=this;ast.entries.forEach(function(entry){return entry.value.visitExpression(_this157,context);});return ast;}/**
     * @param {?} exprs
     * @param {?} context
     * @return {?}
     */},{key:'visitAllExpressions',value:function visitAllExpressions(exprs,context){var _this158=this;exprs.forEach(function(expr){return expr.visitExpression(_this158,context);});}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareVarStmt',value:function visitDeclareVarStmt(stmt,context){stmt.value.visitExpression(this,context);return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareFunctionStmt',value:function visitDeclareFunctionStmt(stmt,context){// Don't descend into nested functions
return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitExpressionStmt',value:function visitExpressionStmt(stmt,context){stmt.expr.visitExpression(this,context);return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitReturnStmt',value:function visitReturnStmt(stmt,context){stmt.value.visitExpression(this,context);return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareClassStmt',value:function visitDeclareClassStmt(stmt,context){// Don't descend into nested functions
return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitIfStmt',value:function visitIfStmt(stmt,context){stmt.condition.visitExpression(this,context);this.visitAllStatements(stmt.trueCase,context);this.visitAllStatements(stmt.falseCase,context);return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitTryCatchStmt',value:function visitTryCatchStmt(stmt,context){this.visitAllStatements(stmt.bodyStmts,context);this.visitAllStatements(stmt.catchStmts,context);return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitThrowStmt',value:function visitThrowStmt(stmt,context){stmt.error.visitExpression(this,context);return stmt;}/**
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitCommentStmt',value:function visitCommentStmt(stmt,context){return stmt;}/**
     * @param {?} stmts
     * @param {?} context
     * @return {?}
     */},{key:'visitAllStatements',value:function visitAllStatements(stmts,context){var _this159=this;stmts.forEach(function(stmt){return stmt.visitStatement(_this159,context);});}}]);return RecursiveExpressionVisitor;}();/**
 * @param {?} varName
 * @param {?} newValue
 * @param {?} expression
 * @return {?}
 */function replaceVarInExpression(varName,newValue,expression){var/** @type {?} */transformer=new _ReplaceVariableTransformer(varName,newValue);return expression.visitExpression(transformer,null);}var _ReplaceVariableTransformer=function(_ExpressionTransforme){_inherits(_ReplaceVariableTransformer,_ExpressionTransforme);/**
     * @param {?} _varName
     * @param {?} _newValue
     */function _ReplaceVariableTransformer(_varName,_newValue){_classCallCheck(this,_ReplaceVariableTransformer);var _this160=_possibleConstructorReturn(this,(_ReplaceVariableTransformer.__proto__||Object.getPrototypeOf(_ReplaceVariableTransformer)).call(this));_this160._varName=_varName;_this160._newValue=_newValue;return _this160;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */_createClass(_ReplaceVariableTransformer,[{key:'visitReadVarExpr',value:function visitReadVarExpr(ast,context){return ast.name==this._varName?this._newValue:ast;}}]);return _ReplaceVariableTransformer;}(ExpressionTransformer);/**
 * @param {?} stmts
 * @return {?}
 */function findReadVarNames(stmts){var/** @type {?} */finder=new _VariableFinder();finder.visitAllStatements(stmts,null);return finder.varNames;}var _VariableFinder=function(_RecursiveExpressionV){_inherits(_VariableFinder,_RecursiveExpressionV);function _VariableFinder(){_classCallCheck(this,_VariableFinder);var _this161=_possibleConstructorReturn(this,(_VariableFinder.__proto__||Object.getPrototypeOf(_VariableFinder)).apply(this,arguments));_this161.varNames=new Set();return _this161;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */_createClass(_VariableFinder,[{key:'visitReadVarExpr',value:function visitReadVarExpr(ast,context){this.varNames.add(ast.name);return null;}}]);return _VariableFinder;}(RecursiveExpressionVisitor);/**
 * @param {?} name
 * @param {?=} type
 * @param {?=} sourceSpan
 * @return {?}
 */function variable(name){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new ReadVarExpr(name,type,sourceSpan);}/**
 * @param {?} id
 * @param {?=} typeParams
 * @param {?=} sourceSpan
 * @return {?}
 */function importExpr(id){var typeParams=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new ExternalExpr(id,null,typeParams,sourceSpan);}/**
 * @param {?} id
 * @param {?=} typeParams
 * @param {?=} typeModifiers
 * @return {?}
 */function importType(id){var typeParams=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var typeModifiers=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;return isPresent(id)?expressionType(importExpr(id,typeParams),typeModifiers):null;}/**
 * @param {?} expr
 * @param {?=} typeModifiers
 * @return {?}
 */function expressionType(expr){var typeModifiers=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return isPresent(expr)?new ExpressionType(expr,typeModifiers):null;}/**
 * @param {?} values
 * @param {?=} type
 * @param {?=} sourceSpan
 * @return {?}
 */function literalArr(values){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new LiteralArrayExpr(values,type,sourceSpan);}/**
 * @param {?} values
 * @param {?=} type
 * @param {?=} quoted
 * @return {?}
 */function literalMap(values){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var quoted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return new LiteralMapExpr(values.map(function(entry){return new LiteralMapEntry(entry[0],entry[1],quoted);}),type);}/**
 * @param {?} expr
 * @param {?=} sourceSpan
 * @return {?}
 */function not(expr,sourceSpan){return new NotExpr(expr,sourceSpan);}/**
 * @param {?} params
 * @param {?} body
 * @param {?=} type
 * @param {?=} sourceSpan
 * @return {?}
 */function fn(params,body){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sourceSpan=arguments[3];return new FunctionExpr(params,body,type,sourceSpan);}/**
 * @param {?} value
 * @param {?=} type
 * @param {?=} sourceSpan
 * @return {?}
 */function literal(value){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var sourceSpan=arguments[2];return new LiteralExpr(value,type,sourceSpan);}var CheckBindingField=/**
     * @param {?} expression
     * @param {?} bindingId
     */function CheckBindingField(expression,bindingId){_classCallCheck(this,CheckBindingField);this.expression=expression;this.bindingId=bindingId;};/**
 * @param {?} builder
 * @return {?}
 */function createCheckBindingField(builder){var/** @type {?} */bindingId=''+builder.fields.length;var/** @type {?} */fieldExpr=createBindFieldExpr(bindingId);// private is fine here as no child view will reference the cached value...
builder.fields.push(new ClassField(fieldExpr.name,null,[StmtModifier.Private]));builder.ctorStmts.push(THIS_EXPR.prop(fieldExpr.name).set(literal(undefined)).toStmt());return new CheckBindingField(fieldExpr,bindingId);}/**
 * @param {?} bindingId
 * @return {?}
 */function createBindFieldExpr(bindingId){return THIS_EXPR.prop('_expr_'+bindingId);}/**
 * @param {?} view
 * @return {?}
 */function isFirstViewCheck(view){return not(view.prop('numberOfChecks'));}/**
 * @param {?} token
 * @return {?}
 */function createDiTokenExpression(token){if(isPresent(token.value)){return literal(token.value);}else{return importExpr(token.identifier);}}/**
 * @param {?} values
 * @return {?}
 */function createInlineArray(values){if(values.length===0){return importExpr(createIdentifier(Identifiers.EMPTY_INLINE_ARRAY));}var/** @type {?} */log2=Math.log(values.length)/Math.log(2);var/** @type {?} */index=Math.ceil(log2);var/** @type {?} */identifierSpec=index<Identifiers.inlineArrays.length?Identifiers.inlineArrays[index]:Identifiers.InlineArrayDynamic;var/** @type {?} */identifier=createIdentifier(identifierSpec);return importExpr(identifier).instantiate([/** @type {?} */literal(values.length)].concat(values));}/**
 * @param {?} fn
 * @param {?} argCount
 * @param {?} pureProxyProp
 * @param {?} builder
 * @return {?}
 */function createPureProxy(fn,argCount,pureProxyProp,builder){builder.fields.push(new ClassField(pureProxyProp.name,null));var/** @type {?} */pureProxyId=argCount<Identifiers.pureProxies.length?Identifiers.pureProxies[argCount]:null;if(!pureProxyId){throw new Error('Unsupported number of argument for pure functions: '+argCount);}builder.ctorStmts.push(THIS_EXPR.prop(pureProxyProp.name).set(importExpr(createIdentifier(pureProxyId)).callFn([fn])).toStmt());}/**
 * @param {?} enumType
 * @param {?} enumValue
 * @return {?}
 */function createEnumExpression(enumType,enumValue){var/** @type {?} */enumName=Object.keys(enumType.runtime).find(function(propName){return enumType.runtime[propName]===enumValue;});if(!enumName){throw new Error('Unknown enum value '+enumValue+' in '+enumType.name);}return importExpr(createEnumIdentifier(enumType,enumName));}var/** @type {?} */VAL_UNWRAPPER_VAR=variable('valUnwrapper');var EventHandlerVars=function EventHandlerVars(){_classCallCheck(this,EventHandlerVars);};EventHandlerVars.event=variable('$event');var ConvertActionBindingResult=/**
     * @param {?} stmts
     * @param {?} allowDefault
     */function ConvertActionBindingResult(stmts,allowDefault){_classCallCheck(this,ConvertActionBindingResult);this.stmts=stmts;this.allowDefault=allowDefault;};/**
 * Converts the given expression AST into an executable output AST, assuming the expression is
 * used in an action binding (e.g. an event handler).
 * @param {?} localResolver
 * @param {?} implicitReceiver
 * @param {?} action
 * @param {?} bindingId
 * @return {?}
 */function convertActionBinding(localResolver,implicitReceiver,action,bindingId){if(!localResolver){localResolver=new DefaultLocalResolver();}var/** @type {?} */actionWithoutBuiltins=convertPropertyBindingBuiltins({createLiteralArrayConverter:function createLiteralArrayConverter(argCount){// Note: no caching for literal arrays in actions.
return function(args){return literalArr(args);};},createLiteralMapConverter:function createLiteralMapConverter(keys){// Note: no caching for literal maps in actions.
return function(args){return literalMap(/** @type {?} */keys.map(function(key,i){return[key,args[i]];}));};},createPipeConverter:function createPipeConverter(name){throw new Error('Illegal State: Actions are not allowed to contain pipes. Pipe: '+name);}},action);var/** @type {?} */visitor=new _AstToIrVisitor(localResolver,implicitReceiver,bindingId);var/** @type {?} */actionStmts=[];flattenStatements(actionWithoutBuiltins.visit(visitor,_Mode.Statement),actionStmts);prependTemporaryDecls(visitor.temporaryCount,bindingId,actionStmts);var/** @type {?} */lastIndex=actionStmts.length-1;var/** @type {?} */preventDefaultVar=null;if(lastIndex>=0){var/** @type {?} */lastStatement=actionStmts[lastIndex];var/** @type {?} */returnExpr=convertStmtIntoExpression(lastStatement);if(returnExpr){// Note: We need to cast the result of the method call to dynamic,
// as it might be a void method!
preventDefaultVar=createPreventDefaultVar(bindingId);actionStmts[lastIndex]=preventDefaultVar.set(returnExpr.cast(DYNAMIC_TYPE).notIdentical(literal(false))).toDeclStmt(null,[StmtModifier.Final]);}}return new ConvertActionBindingResult(actionStmts,preventDefaultVar);}/**
 * @param {?} converterFactory
 * @param {?} ast
 * @return {?}
 */function convertPropertyBindingBuiltins(converterFactory,ast){return convertBuiltins(converterFactory,ast);}var ConvertPropertyBindingResult=/**
     * @param {?} stmts
     * @param {?} currValExpr
     */function ConvertPropertyBindingResult(stmts,currValExpr){_classCallCheck(this,ConvertPropertyBindingResult);this.stmts=stmts;this.currValExpr=currValExpr;};/**
 * Converts the given expression AST into an executable output AST, assuming the expression
 * is used in property binding. The expression has to be preprocessed via
 * `convertPropertyBindingBuiltins`.
 * @param {?} localResolver
 * @param {?} implicitReceiver
 * @param {?} expressionWithoutBuiltins
 * @param {?} bindingId
 * @return {?}
 */function convertPropertyBinding(localResolver,implicitReceiver,expressionWithoutBuiltins,bindingId){if(!localResolver){localResolver=new DefaultLocalResolver();}var/** @type {?} */currValExpr=createCurrValueExpr(bindingId);var/** @type {?} */stmts=[];var/** @type {?} */visitor=new _AstToIrVisitor(localResolver,implicitReceiver,bindingId);var/** @type {?} */outputExpr=expressionWithoutBuiltins.visit(visitor,_Mode.Expression);if(visitor.temporaryCount){for(var/** @type {?} */i=0;i<visitor.temporaryCount;i++){stmts.push(temporaryDeclaration(bindingId,i));}}stmts.push(currValExpr.set(outputExpr).toDeclStmt(null,[StmtModifier.Final]));return new ConvertPropertyBindingResult(stmts,currValExpr);}var LegacyConvertPropertyBindingResult=/**
     * @param {?} stmts
     * @param {?} currValExpr
     * @param {?} forceUpdate
     */function LegacyConvertPropertyBindingResult(stmts,currValExpr,forceUpdate){_classCallCheck(this,LegacyConvertPropertyBindingResult);this.stmts=stmts;this.currValExpr=currValExpr;this.forceUpdate=forceUpdate;};/**
 * Converts the given expression AST into an executable output AST, assuming the expression is
 * used in a property binding.
 * @param {?} builder
 * @param {?} nameResolver
 * @param {?} implicitReceiver
 * @param {?} expression
 * @param {?} bindingId
 * @return {?}
 */function legacyConvertPropertyBinding(builder,nameResolver,implicitReceiver,expression,bindingId){if(!nameResolver){nameResolver=new LegacyDefaultNameResolver();}var/** @type {?} */needsValueUnwrapper=false;var/** @type {?} */expressionWithoutBuiltins=convertBuiltins({createLiteralArrayConverter:function createLiteralArrayConverter(argCount){return function(args){return legacyCreateCachedLiteralArray(builder,args);};},createLiteralMapConverter:function createLiteralMapConverter(keys){return function(args){return legacyCreateCachedLiteralMap(builder,/** @type {?} */keys.map(function(key,i){return[key,args[i]];}));};},createPipeConverter:function createPipeConverter(name){needsValueUnwrapper=true;return function(args){return VAL_UNWRAPPER_VAR.callMethod('unwrap',[nameResolver.callPipe(name,args[0],args.slice(1))]);};}},expression);var _convertPropertyBindi=convertPropertyBinding(nameResolver,implicitReceiver,expressionWithoutBuiltins,bindingId),stmts=_convertPropertyBindi.stmts,currValExpr=_convertPropertyBindi.currValExpr;var/** @type {?} */forceUpdate=null;if(needsValueUnwrapper){var/** @type {?} */initValueUnwrapperStmt=VAL_UNWRAPPER_VAR.callMethod('reset',[]).toStmt();stmts.unshift(initValueUnwrapperStmt);forceUpdate=VAL_UNWRAPPER_VAR.prop('hasWrappedValue');}return new LegacyConvertPropertyBindingResult(stmts,currValExpr,forceUpdate);}/**
 * Creates variables that are shared by multiple calls to `convertActionBinding` /
 * `convertPropertyBinding`
 * @param {?} stmts
 * @return {?}
 */function legacyCreateSharedBindingVariablesIfNeeded(stmts){var/** @type {?} */unwrapperStmts=[];var/** @type {?} */readVars=findReadVarNames(stmts);if(readVars.has(VAL_UNWRAPPER_VAR.name)){unwrapperStmts.push(VAL_UNWRAPPER_VAR.set(importExpr(createIdentifier(Identifiers.ValueUnwrapper)).instantiate([])).toDeclStmt(null,[StmtModifier.Final]));}return unwrapperStmts;}/**
 * @param {?} converterFactory
 * @param {?} ast
 * @return {?}
 */function convertBuiltins(converterFactory,ast){var/** @type {?} */visitor=new _BuiltinAstConverter(converterFactory);return ast.visit(visitor);}/**
 * @param {?} bindingId
 * @param {?} temporaryNumber
 * @return {?}
 */function temporaryName(bindingId,temporaryNumber){return'tmp_'+bindingId+'_'+temporaryNumber;}/**
 * @param {?} bindingId
 * @param {?} temporaryNumber
 * @return {?}
 */function temporaryDeclaration(bindingId,temporaryNumber){return new DeclareVarStmt(temporaryName(bindingId,temporaryNumber),NULL_EXPR);}/**
 * @param {?} temporaryCount
 * @param {?} bindingId
 * @param {?} statements
 * @return {?}
 */function prependTemporaryDecls(temporaryCount,bindingId,statements){for(var/** @type {?} */i=temporaryCount-1;i>=0;i--){statements.unshift(temporaryDeclaration(bindingId,i));}}var _Mode={};_Mode.Statement=0;_Mode.Expression=1;_Mode[_Mode.Statement]="Statement";_Mode[_Mode.Expression]="Expression";/**
 * @param {?} mode
 * @param {?} ast
 * @return {?}
 */function ensureStatementMode(mode,ast){if(mode!==_Mode.Statement){throw new Error('Expected a statement, but saw '+ast);}}/**
 * @param {?} mode
 * @param {?} ast
 * @return {?}
 */function ensureExpressionMode(mode,ast){if(mode!==_Mode.Expression){throw new Error('Expected an expression, but saw '+ast);}}/**
 * @param {?} mode
 * @param {?} expr
 * @return {?}
 */function convertToStatementIfNeeded(mode,expr){if(mode===_Mode.Statement){return expr.toStmt();}else{return expr;}}var _BuiltinAstConverter=function(_AstTransformer){_inherits(_BuiltinAstConverter,_AstTransformer);/**
     * @param {?} _converterFactory
     */function _BuiltinAstConverter(_converterFactory){_classCallCheck(this,_BuiltinAstConverter);var _this162=_possibleConstructorReturn(this,(_BuiltinAstConverter.__proto__||Object.getPrototypeOf(_BuiltinAstConverter)).call(this));_this162._converterFactory=_converterFactory;return _this162;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */_createClass(_BuiltinAstConverter,[{key:'visitPipe',value:function visitPipe(ast,context){var _this163=this;var/** @type {?} */args=[ast.exp].concat(_toConsumableArray(ast.args)).map(function(ast){return ast.visit(_this163,context);});return new BuiltinFunctionCall(ast.span,args,this._converterFactory.createPipeConverter(ast.name,args.length));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralArray',value:function visitLiteralArray(ast,context){var _this164=this;var/** @type {?} */args=ast.expressions.map(function(ast){return ast.visit(_this164,context);});return new BuiltinFunctionCall(ast.span,args,this._converterFactory.createLiteralArrayConverter(ast.expressions.length));}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitLiteralMap',value:function visitLiteralMap(ast,context){var _this165=this;var/** @type {?} */args=ast.values.map(function(ast){return ast.visit(_this165,context);});return new BuiltinFunctionCall(ast.span,args,this._converterFactory.createLiteralMapConverter(ast.keys));}}]);return _BuiltinAstConverter;}(AstTransformer);var _AstToIrVisitor=function(){/**
     * @param {?} _localResolver
     * @param {?} _implicitReceiver
     * @param {?} bindingId
     */function _AstToIrVisitor(_localResolver,_implicitReceiver,bindingId){_classCallCheck(this,_AstToIrVisitor);this._localResolver=_localResolver;this._implicitReceiver=_implicitReceiver;this.bindingId=bindingId;this._nodeMap=new Map();this._resultMap=new Map();this._currentTemporary=0;this.temporaryCount=0;}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */_createClass(_AstToIrVisitor,[{key:'visitBinary',value:function visitBinary(ast,mode){var/** @type {?} */op=void 0;switch(ast.operation){case'+':op=BinaryOperator.Plus;break;case'-':op=BinaryOperator.Minus;break;case'*':op=BinaryOperator.Multiply;break;case'/':op=BinaryOperator.Divide;break;case'%':op=BinaryOperator.Modulo;break;case'&&':op=BinaryOperator.And;break;case'||':op=BinaryOperator.Or;break;case'==':op=BinaryOperator.Equals;break;case'!=':op=BinaryOperator.NotEquals;break;case'===':op=BinaryOperator.Identical;break;case'!==':op=BinaryOperator.NotIdentical;break;case'<':op=BinaryOperator.Lower;break;case'>':op=BinaryOperator.Bigger;break;case'<=':op=BinaryOperator.LowerEquals;break;case'>=':op=BinaryOperator.BiggerEquals;break;default:throw new Error('Unsupported operation '+ast.operation);}return convertToStatementIfNeeded(mode,new BinaryOperatorExpr(op,this.visit(ast.left,_Mode.Expression),this.visit(ast.right,_Mode.Expression)));}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitChain',value:function visitChain(ast,mode){ensureStatementMode(mode,ast);return this.visitAll(ast.expressions,mode);}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitConditional',value:function visitConditional(ast,mode){var/** @type {?} */value=this.visit(ast.condition,_Mode.Expression);return convertToStatementIfNeeded(mode,value.conditional(this.visit(ast.trueExp,_Mode.Expression),this.visit(ast.falseExp,_Mode.Expression)));}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitPipe',value:function visitPipe(ast,mode){throw new Error('Illegal state: Pipes should have been converted into functions. Pipe: '+ast.name);}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitFunctionCall',value:function visitFunctionCall(ast,mode){var/** @type {?} */convertedArgs=this.visitAll(ast.args,_Mode.Expression);var/** @type {?} */fnResult=void 0;if(ast instanceof BuiltinFunctionCall){fnResult=ast.converter(convertedArgs);}else{fnResult=this.visit(ast.target,_Mode.Expression).callFn(convertedArgs);}return convertToStatementIfNeeded(mode,fnResult);}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitImplicitReceiver',value:function visitImplicitReceiver(ast,mode){ensureExpressionMode(mode,ast);return this._implicitReceiver;}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitInterpolation',value:function visitInterpolation(ast,mode){ensureExpressionMode(mode,ast);var/** @type {?} */args=[literal(ast.expressions.length)];for(var/** @type {?} */i=0;i<ast.strings.length-1;i++){args.push(literal(ast.strings[i]));args.push(this.visit(ast.expressions[i],_Mode.Expression));}args.push(literal(ast.strings[ast.strings.length-1]));return ast.expressions.length<=9?importExpr(createIdentifier(Identifiers.inlineInterpolate)).callFn(args):importExpr(createIdentifier(Identifiers.interpolate)).callFn([args[0],literalArr(args.slice(1))]);}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitKeyedRead',value:function visitKeyedRead(ast,mode){var/** @type {?} */leftMostSafe=this.leftMostSafeNode(ast);if(leftMostSafe){return this.convertSafeAccess(ast,leftMostSafe,mode);}else{return convertToStatementIfNeeded(mode,this.visit(ast.obj,_Mode.Expression).key(this.visit(ast.key,_Mode.Expression)));}}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitKeyedWrite',value:function visitKeyedWrite(ast,mode){var/** @type {?} */obj=this.visit(ast.obj,_Mode.Expression);var/** @type {?} */key=this.visit(ast.key,_Mode.Expression);var/** @type {?} */value=this.visit(ast.value,_Mode.Expression);return convertToStatementIfNeeded(mode,obj.key(key).set(value));}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitLiteralArray',value:function visitLiteralArray(ast,mode){throw new Error('Illegal State: literal arrays should have been converted into functions');}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitLiteralMap',value:function visitLiteralMap(ast,mode){throw new Error('Illegal State: literal maps should have been converted into functions');}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitLiteralPrimitive',value:function visitLiteralPrimitive(ast,mode){return convertToStatementIfNeeded(mode,literal(ast.value));}/**
     * @param {?} name
     * @return {?}
     */},{key:'_getLocal',value:function _getLocal(name){return this._localResolver.getLocal(name);}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitMethodCall',value:function visitMethodCall(ast,mode){var/** @type {?} */leftMostSafe=this.leftMostSafeNode(ast);if(leftMostSafe){return this.convertSafeAccess(ast,leftMostSafe,mode);}else{var/** @type {?} */args=this.visitAll(ast.args,_Mode.Expression);var/** @type {?} */result=null;var/** @type {?} */receiver=this.visit(ast.receiver,_Mode.Expression);if(receiver===this._implicitReceiver){var/** @type {?} */varExpr=this._getLocal(ast.name);if(varExpr){result=varExpr.callFn(args);}}if(isBlank(result)){result=receiver.callMethod(ast.name,args);}return convertToStatementIfNeeded(mode,result);}}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitPrefixNot',value:function visitPrefixNot(ast,mode){return convertToStatementIfNeeded(mode,not(this.visit(ast.expression,_Mode.Expression)));}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitPropertyRead',value:function visitPropertyRead(ast,mode){var/** @type {?} */leftMostSafe=this.leftMostSafeNode(ast);if(leftMostSafe){return this.convertSafeAccess(ast,leftMostSafe,mode);}else{var/** @type {?} */result=null;var/** @type {?} */receiver=this.visit(ast.receiver,_Mode.Expression);if(receiver===this._implicitReceiver){result=this._getLocal(ast.name);}if(isBlank(result)){result=receiver.prop(ast.name);}return convertToStatementIfNeeded(mode,result);}}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitPropertyWrite',value:function visitPropertyWrite(ast,mode){var/** @type {?} */receiver=this.visit(ast.receiver,_Mode.Expression);if(receiver===this._implicitReceiver){var/** @type {?} */varExpr=this._getLocal(ast.name);if(varExpr){throw new Error('Cannot assign to a reference or variable!');}}return convertToStatementIfNeeded(mode,receiver.prop(ast.name).set(this.visit(ast.value,_Mode.Expression)));}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitSafePropertyRead',value:function visitSafePropertyRead(ast,mode){return this.convertSafeAccess(ast,this.leftMostSafeNode(ast),mode);}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitSafeMethodCall',value:function visitSafeMethodCall(ast,mode){return this.convertSafeAccess(ast,this.leftMostSafeNode(ast),mode);}/**
     * @param {?} asts
     * @param {?} mode
     * @return {?}
     */},{key:'visitAll',value:function visitAll(asts,mode){var _this166=this;return asts.map(function(ast){return _this166.visit(ast,mode);});}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visitQuote',value:function visitQuote(ast,mode){throw new Error('Quotes are not supported for evaluation!');}/**
     * @param {?} ast
     * @param {?} mode
     * @return {?}
     */},{key:'visit',value:function visit(ast,mode){var/** @type {?} */result=this._resultMap.get(ast);if(result)return result;return(this._nodeMap.get(ast)||ast).visit(this,mode);}/**
     * @param {?} ast
     * @param {?} leftMostSafe
     * @param {?} mode
     * @return {?}
     */},{key:'convertSafeAccess',value:function convertSafeAccess(ast,leftMostSafe,mode){// If the expression contains a safe access node on the left it needs to be converted to
// an expression that guards the access to the member by checking the receiver for blank. As
// execution proceeds from left to right, the left most part of the expression must be guarded
// first but, because member access is left associative, the right side of the expression is at
// the top of the AST. The desired result requires lifting a copy of the the left part of the
// expression up to test it for blank before generating the unguarded version.
// Consider, for example the following expression: a?.b.c?.d.e
// This results in the ast:
//         .
//        / \
//       ?.   e
//      /  \
//     .    d
//    / \
//   ?.  c
//  /  \
// a    b
// The following tree should be generated:
//
//        /---- ? ----\
//       /      |      \
//     a   /--- ? ---\  null
//        /     |     \
//       .      .     null
//      / \    / \
//     .  c   .   e
//    / \    / \
//   a   b  ,   d
//         / \
//        .   c
//       / \
//      a   b
//
// Notice that the first guard condition is the left hand of the left most safe access node
// which comes in as leftMostSafe to this routine.
var/** @type {?} */guardedExpression=this.visit(leftMostSafe.receiver,_Mode.Expression);var/** @type {?} */temporary=void 0;if(this.needsTemporary(leftMostSafe.receiver)){// If the expression has method calls or pipes then we need to save the result into a
// temporary variable to avoid calling stateful or impure code more than once.
temporary=this.allocateTemporary();// Preserve the result in the temporary variable
guardedExpression=temporary.set(guardedExpression);// Ensure all further references to the guarded expression refer to the temporary instead.
this._resultMap.set(leftMostSafe.receiver,temporary);}var/** @type {?} */condition=guardedExpression.isBlank();// Convert the ast to an unguarded access to the receiver's member. The map will substitute
// leftMostNode with its unguarded version in the call to `this.visit()`.
if(leftMostSafe instanceof SafeMethodCall){this._nodeMap.set(leftMostSafe,new MethodCall(leftMostSafe.span,leftMostSafe.receiver,leftMostSafe.name,leftMostSafe.args));}else{this._nodeMap.set(leftMostSafe,new PropertyRead(leftMostSafe.span,leftMostSafe.receiver,leftMostSafe.name));}// Recursively convert the node now without the guarded member access.
var/** @type {?} */access=this.visit(ast,_Mode.Expression);// Remove the mapping. This is not strictly required as the converter only traverses each node
// once but is safer if the conversion is changed to traverse the nodes more than once.
this._nodeMap.delete(leftMostSafe);// If we allcoated a temporary, release it.
if(temporary){this.releaseTemporary(temporary);}// Produce the conditional
return convertToStatementIfNeeded(mode,condition.conditional(literal(null),access));}/**
     * @param {?} ast
     * @return {?}
     */},{key:'leftMostSafeNode',value:function leftMostSafeNode(ast){var _this167=this;var/** @type {?} */visit=function visit(visitor,ast){return(_this167._nodeMap.get(ast)||ast).visit(visitor);};return ast.visit({/**
             * @param {?} ast
             * @return {?}
             */visitBinary:function visitBinary(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitChain:function visitChain(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitConditional:function visitConditional(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitFunctionCall:function visitFunctionCall(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitImplicitReceiver:function visitImplicitReceiver(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitInterpolation:function visitInterpolation(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitKeyedRead:function visitKeyedRead(ast){return visit(this,ast.obj);},/**
             * @param {?} ast
             * @return {?}
             */visitKeyedWrite:function visitKeyedWrite(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitLiteralArray:function visitLiteralArray(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitLiteralMap:function visitLiteralMap(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitLiteralPrimitive:function visitLiteralPrimitive(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitMethodCall:function visitMethodCall(ast){return visit(this,ast.receiver);},/**
             * @param {?} ast
             * @return {?}
             */visitPipe:function visitPipe(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitPrefixNot:function visitPrefixNot(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitPropertyRead:function visitPropertyRead(ast){return visit(this,ast.receiver);},/**
             * @param {?} ast
             * @return {?}
             */visitPropertyWrite:function visitPropertyWrite(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitQuote:function visitQuote(ast){return null;},/**
             * @param {?} ast
             * @return {?}
             */visitSafeMethodCall:function visitSafeMethodCall(ast){return visit(this,ast.receiver)||ast;},/**
             * @param {?} ast
             * @return {?}
             */visitSafePropertyRead:function visitSafePropertyRead(ast){return visit(this,ast.receiver)||ast;}});}/**
     * @param {?} ast
     * @return {?}
     */},{key:'needsTemporary',value:function needsTemporary(ast){var _this168=this;var/** @type {?} */visit=function visit(visitor,ast){return ast&&(_this168._nodeMap.get(ast)||ast).visit(visitor);};var/** @type {?} */visitSome=function visitSome(visitor,ast){return ast.some(function(ast){return visit(visitor,ast);});};return ast.visit({/**
             * @param {?} ast
             * @return {?}
             */visitBinary:function visitBinary(ast){return visit(this,ast.left)||visit(this,ast.right);},/**
             * @param {?} ast
             * @return {?}
             */visitChain:function visitChain(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitConditional:function visitConditional(ast){return visit(this,ast.condition)||visit(this,ast.trueExp)||visit(this,ast.falseExp);},/**
             * @param {?} ast
             * @return {?}
             */visitFunctionCall:function visitFunctionCall(ast){return true;},/**
             * @param {?} ast
             * @return {?}
             */visitImplicitReceiver:function visitImplicitReceiver(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitInterpolation:function visitInterpolation(ast){return visitSome(this,ast.expressions);},/**
             * @param {?} ast
             * @return {?}
             */visitKeyedRead:function visitKeyedRead(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitKeyedWrite:function visitKeyedWrite(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitLiteralArray:function visitLiteralArray(ast){return true;},/**
             * @param {?} ast
             * @return {?}
             */visitLiteralMap:function visitLiteralMap(ast){return true;},/**
             * @param {?} ast
             * @return {?}
             */visitLiteralPrimitive:function visitLiteralPrimitive(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitMethodCall:function visitMethodCall(ast){return true;},/**
             * @param {?} ast
             * @return {?}
             */visitPipe:function visitPipe(ast){return true;},/**
             * @param {?} ast
             * @return {?}
             */visitPrefixNot:function visitPrefixNot(ast){return visit(this,ast.expression);},/**
             * @param {?} ast
             * @return {?}
             */visitPropertyRead:function visitPropertyRead(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitPropertyWrite:function visitPropertyWrite(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitQuote:function visitQuote(ast){return false;},/**
             * @param {?} ast
             * @return {?}
             */visitSafeMethodCall:function visitSafeMethodCall(ast){return true;},/**
             * @param {?} ast
             * @return {?}
             */visitSafePropertyRead:function visitSafePropertyRead(ast){return false;}});}/**
     * @return {?}
     */},{key:'allocateTemporary',value:function allocateTemporary(){var/** @type {?} */tempNumber=this._currentTemporary++;this.temporaryCount=Math.max(this._currentTemporary,this.temporaryCount);return new ReadVarExpr(temporaryName(this.bindingId,tempNumber));}/**
     * @param {?} temporary
     * @return {?}
     */},{key:'releaseTemporary',value:function releaseTemporary(temporary){this._currentTemporary--;if(temporary.name!=temporaryName(this.bindingId,this._currentTemporary)){throw new Error('Temporary '+temporary.name+' released out of order');}}}]);return _AstToIrVisitor;}();/**
 * @param {?} arg
 * @param {?} output
 * @return {?}
 */function flattenStatements(arg,output){if(Array.isArray(arg)){arg.forEach(function(entry){return flattenStatements(entry,output);});}else{output.push(arg);}}/**
 * @param {?} builder
 * @param {?} values
 * @return {?}
 */function legacyCreateCachedLiteralArray(builder,values){if(values.length===0){return importExpr(createIdentifier(Identifiers.EMPTY_ARRAY));}var/** @type {?} */proxyExpr=THIS_EXPR.prop('_arr_'+builder.fields.length);var/** @type {?} */proxyParams=[];var/** @type {?} */proxyReturnEntries=[];for(var/** @type {?} */i=0;i<values.length;i++){var/** @type {?} */paramName='p'+i;proxyParams.push(new FnParam(paramName));proxyReturnEntries.push(variable(paramName));}createPureProxy(fn(proxyParams,[new ReturnStatement(literalArr(proxyReturnEntries))],new ArrayType(DYNAMIC_TYPE)),values.length,proxyExpr,builder);return proxyExpr.callFn(values);}/**
 * @param {?} builder
 * @param {?} entries
 * @return {?}
 */function legacyCreateCachedLiteralMap(builder,entries){if(entries.length===0){return importExpr(createIdentifier(Identifiers.EMPTY_MAP));}var/** @type {?} */proxyExpr=THIS_EXPR.prop('_map_'+builder.fields.length);var/** @type {?} */proxyParams=[];var/** @type {?} */proxyReturnEntries=[];var/** @type {?} */values=[];for(var/** @type {?} */i=0;i<entries.length;i++){var/** @type {?} */paramName='p'+i;proxyParams.push(new FnParam(paramName));proxyReturnEntries.push([entries[i][0],variable(paramName)]);values.push(/** @type {?} */entries[i][1]);}createPureProxy(fn(proxyParams,[new ReturnStatement(literalMap(proxyReturnEntries))],new MapType(DYNAMIC_TYPE)),entries.length,proxyExpr,builder);return proxyExpr.callFn(values);}var DefaultLocalResolver=function(){function DefaultLocalResolver(){_classCallCheck(this,DefaultLocalResolver);}_createClass(DefaultLocalResolver,[{key:'getLocal',/**
     * @param {?} name
     * @return {?}
     */value:function getLocal(name){if(name===EventHandlerVars.event.name){return EventHandlerVars.event;}return null;}}]);return DefaultLocalResolver;}();var LegacyDefaultNameResolver=function(){function LegacyDefaultNameResolver(){_classCallCheck(this,LegacyDefaultNameResolver);}_createClass(LegacyDefaultNameResolver,[{key:'callPipe',/**
     * @param {?} name
     * @param {?} input
     * @param {?} args
     * @return {?}
     */value:function callPipe(name,input,args){return null;}/**
     * @param {?} name
     * @return {?}
     */},{key:'getLocal',value:function getLocal(name){if(name===EventHandlerVars.event.name){return EventHandlerVars.event;}return null;}}]);return LegacyDefaultNameResolver;}();/**
 * @param {?} bindingId
 * @return {?}
 */function createCurrValueExpr(bindingId){return variable('currVal_'+bindingId);// fix syntax highlighting: `
}/**
 * @param {?} bindingId
 * @return {?}
 */function createPreventDefaultVar(bindingId){return variable('pd_'+bindingId);}/**
 * @param {?} stmt
 * @return {?}
 */function convertStmtIntoExpression(stmt){if(stmt instanceof ExpressionStatement){return stmt.expr;}else if(stmt instanceof ReturnStatement){return stmt.value;}return null;}var BuiltinFunctionCall=function(_FunctionCall){_inherits(BuiltinFunctionCall,_FunctionCall);/**
     * @param {?} span
     * @param {?} args
     * @param {?} converter
     */function BuiltinFunctionCall(span,args,converter){_classCallCheck(this,BuiltinFunctionCall);var _this169=_possibleConstructorReturn(this,(BuiltinFunctionCall.__proto__||Object.getPrototypeOf(BuiltinFunctionCall)).call(this,span,null,args));_this169.args=args;_this169.converter=converter;return _this169;}return BuiltinFunctionCall;}(FunctionCall);/**
 * @param {?} view
 * @param {?} renderElement
 * @param {?} boundProp
 * @param {?} oldValue
 * @param {?} evalResult
 * @param {?=} securityContextExpression
 * @return {?}
 */function createCheckRenderBindingStmt(view,renderElement,boundProp,oldValue,evalResult,securityContextExpression){var/** @type {?} */checkStmts=[].concat(_toConsumableArray(evalResult.stmts));var/** @type {?} */securityContext=calcSecurityContext(boundProp,securityContextExpression);switch(boundProp.type){case PropertyBindingType.Property:checkStmts.push(importExpr(createIdentifier(Identifiers.checkRenderProperty)).callFn([view,renderElement,literal(boundProp.name),oldValue,oldValue.set(evalResult.currValExpr),evalResult.forceUpdate||literal(false),securityContext]).toStmt());break;case PropertyBindingType.Attribute:checkStmts.push(importExpr(createIdentifier(Identifiers.checkRenderAttribute)).callFn([view,renderElement,literal(boundProp.name),oldValue,oldValue.set(evalResult.currValExpr),evalResult.forceUpdate||literal(false),securityContext]).toStmt());break;case PropertyBindingType.Class:checkStmts.push(importExpr(createIdentifier(Identifiers.checkRenderClass)).callFn([view,renderElement,literal(boundProp.name),oldValue,oldValue.set(evalResult.currValExpr),evalResult.forceUpdate||literal(false)]).toStmt());break;case PropertyBindingType.Style:checkStmts.push(importExpr(createIdentifier(Identifiers.checkRenderStyle)).callFn([view,renderElement,literal(boundProp.name),literal(boundProp.unit),oldValue,oldValue.set(evalResult.currValExpr),evalResult.forceUpdate||literal(false),securityContext]).toStmt());break;case PropertyBindingType.Animation:throw new Error('Illegal state: Should not come here!');}return checkStmts;}/**
 * @param {?} boundProp
 * @param {?=} securityContextExpression
 * @return {?}
 */function calcSecurityContext(boundProp,securityContextExpression){if(boundProp.securityContext===SecurityContext.NONE){return NULL_EXPR;// No sanitization needed.
}if(!boundProp.needsRuntimeSecurityContext){securityContextExpression=createEnumExpression(Identifiers.SecurityContext,boundProp.securityContext);}if(!securityContextExpression){throw new Error('internal error, no SecurityContext given '+boundProp.name);}return securityContextExpression;}/**
 * @param {?} view
 * @param {?} componentView
 * @param {?} boundProp
 * @param {?} boundOutputs
 * @param {?} eventListener
 * @param {?} renderElement
 * @param {?} oldValue
 * @param {?} evalResult
 * @return {?}
 */function createCheckAnimationBindingStmts(view,componentView,boundProp,boundOutputs,eventListener,renderElement,oldValue,evalResult){var/** @type {?} */detachStmts=[];var/** @type {?} */updateStmts=[];var/** @type {?} */animationName=boundProp.name;var/** @type {?} */animationFnExpr=componentView.prop('componentType').prop('animations').key(literal(animationName));// it's important to normalize the void value as `void` explicitly
// so that the styles data can be obtained from the stringmap
var/** @type {?} */emptyStateValue=literal(ɵEMPTY_STATE);var/** @type {?} */animationTransitionVar=variable('animationTransition_'+animationName);updateStmts.push(animationTransitionVar.set(animationFnExpr.callFn([view,renderElement,isFirstViewCheck(view).conditional(emptyStateValue,oldValue),evalResult.currValExpr])).toDeclStmt());updateStmts.push(oldValue.set(evalResult.currValExpr).toStmt());detachStmts.push(animationTransitionVar.set(animationFnExpr.callFn([view,renderElement,evalResult.currValExpr,emptyStateValue])).toDeclStmt());var/** @type {?} */registerStmts=[];var/** @type {?} */animationStartMethodExists=boundOutputs.find(function(event){return event.isAnimation&&event.name==animationName&&event.phase=='start';});if(animationStartMethodExists){registerStmts.push(animationTransitionVar.callMethod('onStart',[eventListener.callMethod(BuiltinMethod.Bind,[view,literal(BoundEventAst.calcFullName(animationName,null,'start'))])]).toStmt());}var/** @type {?} */animationDoneMethodExists=boundOutputs.find(function(event){return event.isAnimation&&event.name==animationName&&event.phase=='done';});if(animationDoneMethodExists){registerStmts.push(animationTransitionVar.callMethod('onDone',[eventListener.callMethod(BuiltinMethod.Bind,[view,literal(BoundEventAst.calcFullName(animationName,null,'done'))])]).toStmt());}updateStmts.push.apply(updateStmts,registerStmts);detachStmts.push.apply(detachStmts,registerStmts);var/** @type {?} */checkUpdateStmts=[].concat(_toConsumableArray(evalResult.stmts),[new IfStmt(importExpr(createIdentifier(Identifiers.checkBinding)).callFn([view,oldValue,evalResult.currValExpr,evalResult.forceUpdate||literal(false)]),updateStmts)]);var/** @type {?} */checkDetachStmts=[].concat(_toConsumableArray(evalResult.stmts),detachStmts);return{checkUpdateStmts:checkUpdateStmts,checkDetachStmts:checkDetachStmts};}/**
 * Create a new class stmts based on the given data.
 * @param {?} config
 * @return {?}
 */function createClassStmt(config){var/** @type {?} */parentArgs=config.parentArgs||[];var/** @type {?} */superCtorStmts=config.parent?[SUPER_EXPR.callFn(parentArgs).toStmt()]:[];var/** @type {?} */builder=concatClassBuilderParts(Array.isArray(config.builders)?config.builders:[config.builders]);var/** @type {?} */ctor=new ClassMethod(null,config.ctorParams||[],superCtorStmts.concat(builder.ctorStmts));return new ClassStmt(config.name,config.parent,builder.fields,builder.getters,ctor,builder.methods,config.modifiers||[],config.sourceSpan);}/**
 * @param {?} builders
 * @return {?}
 */function concatClassBuilderParts(builders){var _ref29,_ref30,_ref31,_ref32;return{fields:(_ref29=[]).concat.apply(_ref29,_toConsumableArray(builders.map(function(builder){return builder.fields||[];}))),methods:(_ref30=[]).concat.apply(_ref30,_toConsumableArray(builders.map(function(builder){return builder.methods||[];}))),getters:(_ref31=[]).concat.apply(_ref31,_toConsumableArray(builders.map(function(builder){return builder.getters||[];}))),ctorStmts:(_ref32=[]).concat.apply(_ref32,_toConsumableArray(builders.map(function(builder){return builder.ctorStmts||[];})))};}var DirectiveWrapperCompileResult=/**
     * @param {?} statements
     * @param {?} dirWrapperClassVar
     */function DirectiveWrapperCompileResult(statements,dirWrapperClassVar){_classCallCheck(this,DirectiveWrapperCompileResult);this.statements=statements;this.dirWrapperClassVar=dirWrapperClassVar;};var/** @type {?} */CONTEXT_FIELD_NAME='context';var/** @type {?} */CHANGES_FIELD_NAME='_changes';var/** @type {?} */CHANGED_FIELD_NAME='_changed';var/** @type {?} */EVENT_HANDLER_FIELD_NAME='_eventHandler';var/** @type {?} */CHANGE_VAR=variable('change');var/** @type {?} */CURR_VALUE_VAR=variable('currValue');var/** @type {?} */FORCE_UPDATE_VAR=variable('forceUpdate');var/** @type {?} */VIEW_VAR=variable('view');var/** @type {?} */COMPONENT_VIEW_VAR=variable('componentView');var/** @type {?} */RENDER_EL_VAR=variable('el');var/** @type {?} */EVENT_NAME_VAR=variable('eventName');var/** @type {?} */RESET_CHANGES_STMT=THIS_EXPR.prop(CHANGES_FIELD_NAME).set(literalMap([])).toStmt();/**
 * We generate directive wrappers to prevent code bloat when a directive is used.
 * A directive wrapper encapsulates
 * the dirty checking for `\@Input`, the handling of `\@HostListener` / `\@HostBinding`
 * and calling the lifecyclehooks `ngOnInit`, `ngOnChanges`, `ngDoCheck`.
 *
 * So far, only `\@Input` and the lifecycle hooks have been implemented.
 */var DirectiveWrapperCompiler=function(){/**
     * @param {?} compilerConfig
     * @param {?} _exprParser
     * @param {?} _schemaRegistry
     * @param {?} _console
     */function DirectiveWrapperCompiler(compilerConfig,_exprParser,_schemaRegistry,_console){_classCallCheck(this,DirectiveWrapperCompiler);this.compilerConfig=compilerConfig;this._exprParser=_exprParser;this._schemaRegistry=_schemaRegistry;this._console=_console;}/**
     * @param {?} dirMeta
     * @return {?}
     */_createClass(DirectiveWrapperCompiler,[{key:'compile',value:function compile(dirMeta){var/** @type {?} */hostParseResult=parseHostBindings(dirMeta,this._exprParser,this._schemaRegistry);reportParseErrors(hostParseResult.errors,this._console);var/** @type {?} */builder=new DirectiveWrapperBuilder(this.compilerConfig,dirMeta);Object.keys(dirMeta.inputs).forEach(function(inputFieldName){addCheckInputMethod(inputFieldName,builder);});addNgDoCheckMethod(builder);addCheckHostMethod(hostParseResult.hostProps,hostParseResult.hostListeners,builder);addHandleEventMethod(hostParseResult.hostListeners,builder);addSubscribeMethod(dirMeta,builder);var/** @type {?} */classStmt=builder.build();return new DirectiveWrapperCompileResult([classStmt],classStmt.name);}}]);return DirectiveWrapperCompiler;}();DirectiveWrapperCompiler.decorators=[{type:CompilerInjectable}];/** @nocollapse */DirectiveWrapperCompiler.ctorParameters=function(){return[{type:CompilerConfig},{type:Parser},{type:ElementSchemaRegistry},{type:ɵConsole}];};var DirectiveWrapperBuilder=function(){/**
     * @param {?} compilerConfig
     * @param {?} dirMeta
     */function DirectiveWrapperBuilder(compilerConfig,dirMeta){_classCallCheck(this,DirectiveWrapperBuilder);this.compilerConfig=compilerConfig;this.dirMeta=dirMeta;this.fields=[];this.getters=[];this.methods=[];this.ctorStmts=[];this.detachStmts=[];this.destroyStmts=[];var dirLifecycleHooks=dirMeta.type.lifecycleHooks;this.genChanges=dirLifecycleHooks.indexOf(ɵLifecycleHooks.OnChanges)!==-1||this.compilerConfig.logBindingUpdate;this.ngOnChanges=dirLifecycleHooks.indexOf(ɵLifecycleHooks.OnChanges)!==-1;this.ngOnInit=dirLifecycleHooks.indexOf(ɵLifecycleHooks.OnInit)!==-1;this.ngDoCheck=dirLifecycleHooks.indexOf(ɵLifecycleHooks.DoCheck)!==-1;this.ngOnDestroy=dirLifecycleHooks.indexOf(ɵLifecycleHooks.OnDestroy)!==-1;if(this.ngOnDestroy){this.destroyStmts.push(THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngOnDestroy',[]).toStmt());}}/**
     * @return {?}
     */_createClass(DirectiveWrapperBuilder,[{key:'build',value:function build(){var/** @type {?} */dirDepParamNames=[];for(var/** @type {?} */i=0;i<this.dirMeta.type.diDeps.length;i++){dirDepParamNames.push('p'+i);}var/** @type {?} */methods=[new ClassMethod('ngOnDetach',[new FnParam(VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(COMPONENT_VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(RENDER_EL_VAR.name,DYNAMIC_TYPE)],this.detachStmts),new ClassMethod('ngOnDestroy',[],this.destroyStmts)];var/** @type {?} */fields=[new ClassField(EVENT_HANDLER_FIELD_NAME,FUNCTION_TYPE,[StmtModifier.Private]),new ClassField(CONTEXT_FIELD_NAME,importType(this.dirMeta.type)),new ClassField(CHANGED_FIELD_NAME,BOOL_TYPE,[StmtModifier.Private])];var/** @type {?} */ctorStmts=[THIS_EXPR.prop(CHANGED_FIELD_NAME).set(literal(false)).toStmt()];if(this.genChanges){fields.push(new ClassField(CHANGES_FIELD_NAME,new MapType(DYNAMIC_TYPE),[StmtModifier.Private]));ctorStmts.push(RESET_CHANGES_STMT);}ctorStmts.push(THIS_EXPR.prop(CONTEXT_FIELD_NAME).set(importExpr(this.dirMeta.type).instantiate(dirDepParamNames.map(function(paramName){return variable(paramName);}))).toStmt());return createClassStmt({name:dirWrapperClassName(this.dirMeta.type.reference),ctorParams:dirDepParamNames.map(function(paramName){return new FnParam(paramName,DYNAMIC_TYPE);}),builders:[{fields:fields,ctorStmts:ctorStmts,methods:methods},this]});}}]);return DirectiveWrapperBuilder;}();/**
 * @param {?} builder
 * @return {?}
 */function addNgDoCheckMethod(builder){var/** @type {?} */changedVar=variable('changed');var/** @type {?} */stmts=[changedVar.set(THIS_EXPR.prop(CHANGED_FIELD_NAME)).toDeclStmt(),THIS_EXPR.prop(CHANGED_FIELD_NAME).set(literal(false)).toStmt()];var/** @type {?} */lifecycleStmts=[];if(builder.genChanges){var/** @type {?} */onChangesStmts=[];if(builder.ngOnChanges){onChangesStmts.push(THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngOnChanges',[THIS_EXPR.prop(CHANGES_FIELD_NAME)]).toStmt());}if(builder.compilerConfig.logBindingUpdate){onChangesStmts.push(importExpr(createIdentifier(Identifiers.setBindingDebugInfoForChanges)).callFn([VIEW_VAR.prop('renderer'),RENDER_EL_VAR,THIS_EXPR.prop(CHANGES_FIELD_NAME)]).toStmt());}onChangesStmts.push(RESET_CHANGES_STMT);lifecycleStmts.push(new IfStmt(changedVar,onChangesStmts));}if(builder.ngOnInit){lifecycleStmts.push(new IfStmt(isFirstViewCheck(VIEW_VAR),[THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngOnInit',[]).toStmt()]));}if(builder.ngDoCheck){lifecycleStmts.push(THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngDoCheck',[]).toStmt());}if(lifecycleStmts.length>0){stmts.push(new IfStmt(not(VIEW_VAR.prop('throwOnChange')),lifecycleStmts));}stmts.push(new ReturnStatement(changedVar));builder.methods.push(new ClassMethod('ngDoCheck',[new FnParam(VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(RENDER_EL_VAR.name,DYNAMIC_TYPE)],stmts,BOOL_TYPE));}/**
 * @param {?} input
 * @param {?} builder
 * @return {?}
 */function addCheckInputMethod(input,builder){var/** @type {?} */field=createCheckBindingField(builder);var/** @type {?} */onChangeStatements=[THIS_EXPR.prop(CHANGED_FIELD_NAME).set(literal(true)).toStmt(),THIS_EXPR.prop(CONTEXT_FIELD_NAME).prop(input).set(CURR_VALUE_VAR).toStmt(),field.expression.set(CURR_VALUE_VAR).toStmt()];var/** @type {?} */methodBody=void 0;if(builder.genChanges){onChangeStatements.push(THIS_EXPR.prop(CHANGES_FIELD_NAME).key(literal(input)).set(CHANGE_VAR).toStmt());methodBody=[CHANGE_VAR.set(importExpr(createIdentifier(Identifiers.checkBindingChange)).callFn([VIEW_VAR,field.expression,CURR_VALUE_VAR,FORCE_UPDATE_VAR])).toDeclStmt(),new IfStmt(CHANGE_VAR,onChangeStatements)];}else{methodBody=[new IfStmt(importExpr(createIdentifier(Identifiers.checkBinding)).callFn([VIEW_VAR,field.expression,CURR_VALUE_VAR,FORCE_UPDATE_VAR]),onChangeStatements)];}builder.methods.push(new ClassMethod('check_'+input,[new FnParam(VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(CURR_VALUE_VAR.name,DYNAMIC_TYPE),new FnParam(FORCE_UPDATE_VAR.name,BOOL_TYPE)],methodBody));}/**
 * @param {?} hostProps
 * @param {?} hostEvents
 * @param {?} builder
 * @return {?}
 */function addCheckHostMethod(hostProps,hostEvents,builder){var/** @type {?} */stmts=[];var/** @type {?} */methodParams=[new FnParam(VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(COMPONENT_VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(RENDER_EL_VAR.name,DYNAMIC_TYPE)];hostProps.forEach(function(hostProp,hostPropIdx){var/** @type {?} */field=createCheckBindingField(builder);var/** @type {?} */evalResult=legacyConvertPropertyBinding(builder,null,THIS_EXPR.prop(CONTEXT_FIELD_NAME),hostProp.value,field.bindingId);if(!evalResult){return;}var/** @type {?} */securityContextExpr=void 0;if(hostProp.needsRuntimeSecurityContext){securityContextExpr=variable('secCtx_'+methodParams.length);methodParams.push(new FnParam(securityContextExpr.name,importType(createIdentifier(Identifiers.SecurityContext))));}if(hostProp.isAnimation){var _builder$detachStmts;var _createCheckAnimation=createCheckAnimationBindingStmts(VIEW_VAR,COMPONENT_VIEW_VAR,hostProp,hostEvents,THIS_EXPR.prop(EVENT_HANDLER_FIELD_NAME).or(importExpr(createIdentifier(Identifiers.noop))),RENDER_EL_VAR,field.expression,evalResult),checkUpdateStmts=_createCheckAnimation.checkUpdateStmts,checkDetachStmts=_createCheckAnimation.checkDetachStmts;(_builder$detachStmts=builder.detachStmts).push.apply(_builder$detachStmts,_toConsumableArray(checkDetachStmts));stmts.push.apply(stmts,_toConsumableArray(checkUpdateStmts));}else{stmts.push.apply(stmts,_toConsumableArray(createCheckRenderBindingStmt(VIEW_VAR,RENDER_EL_VAR,hostProp,field.expression,evalResult,securityContextExpr)));}});builder.methods.push(new ClassMethod('checkHost',methodParams,stmts));}/**
 * @param {?} hostListeners
 * @param {?} builder
 * @return {?}
 */function addHandleEventMethod(hostListeners,builder){var/** @type {?} */resultVar=variable('result');var/** @type {?} */actionStmts=[resultVar.set(literal(true)).toDeclStmt(BOOL_TYPE)];hostListeners.forEach(function(hostListener,eventIdx){var/** @type {?} */evalResult=convertActionBinding(null,THIS_EXPR.prop(CONTEXT_FIELD_NAME),hostListener.handler,'sub_'+eventIdx);var/** @type {?} */trueStmts=evalResult.stmts;if(evalResult.allowDefault){trueStmts.push(resultVar.set(evalResult.allowDefault.and(resultVar)).toStmt());}// TODO(tbosch): convert this into a `switch` once our OutputAst supports it.
actionStmts.push(new IfStmt(EVENT_NAME_VAR.equals(literal(hostListener.fullName)),trueStmts));});actionStmts.push(new ReturnStatement(resultVar));builder.methods.push(new ClassMethod('handleEvent',[new FnParam(EVENT_NAME_VAR.name,STRING_TYPE),new FnParam(EventHandlerVars.event.name,DYNAMIC_TYPE)],actionStmts,BOOL_TYPE));}/**
 * @param {?} dirMeta
 * @param {?} builder
 * @return {?}
 */function addSubscribeMethod(dirMeta,builder){var/** @type {?} */methodParams=[new FnParam(VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(EVENT_HANDLER_FIELD_NAME,DYNAMIC_TYPE)];var/** @type {?} */stmts=[THIS_EXPR.prop(EVENT_HANDLER_FIELD_NAME).set(variable(EVENT_HANDLER_FIELD_NAME)).toStmt()];Object.keys(dirMeta.outputs).forEach(function(emitterPropName,emitterIdx){var/** @type {?} */eventName=dirMeta.outputs[emitterPropName];var/** @type {?} */paramName='emit'+emitterIdx;methodParams.push(new FnParam(paramName,BOOL_TYPE));var/** @type {?} */subscriptionFieldName='subscription'+emitterIdx;builder.fields.push(new ClassField(subscriptionFieldName,DYNAMIC_TYPE));stmts.push(new IfStmt(variable(paramName),[THIS_EXPR.prop(subscriptionFieldName).set(THIS_EXPR.prop(CONTEXT_FIELD_NAME).prop(emitterPropName).callMethod(BuiltinMethod.SubscribeObservable,[variable(EVENT_HANDLER_FIELD_NAME).callMethod(BuiltinMethod.Bind,[VIEW_VAR,literal(eventName)])])).toStmt()]));builder.destroyStmts.push(THIS_EXPR.prop(subscriptionFieldName).and(THIS_EXPR.prop(subscriptionFieldName).callMethod('unsubscribe',[])).toStmt());});builder.methods.push(new ClassMethod('subscribe',methodParams,stmts));}var ParseResult=/**
     * @param {?} hostProps
     * @param {?} hostListeners
     * @param {?} errors
     */function ParseResult(hostProps,hostListeners,errors){_classCallCheck(this,ParseResult);this.hostProps=hostProps;this.hostListeners=hostListeners;this.errors=errors;};/**
 * @param {?} dirMeta
 * @param {?} exprParser
 * @param {?} schemaRegistry
 * @return {?}
 */function parseHostBindings(dirMeta,exprParser,schemaRegistry){var/** @type {?} */errors=[];var/** @type {?} */parser=new BindingParser(exprParser,DEFAULT_INTERPOLATION_CONFIG,schemaRegistry,[],errors);var/** @type {?} */moduleUrl=identifierModuleUrl(dirMeta.type);var/** @type {?} */sourceFileName=moduleUrl?'in Directive '+identifierName(dirMeta.type)+' in '+moduleUrl:'in Directive '+identifierName(dirMeta.type);var/** @type {?} */sourceFile=new ParseSourceFile('',sourceFileName);var/** @type {?} */sourceSpan=new ParseSourceSpan(new ParseLocation(sourceFile,null,null,null),new ParseLocation(sourceFile,null,null,null));var/** @type {?} */parsedHostProps=parser.createDirectiveHostPropertyAsts(dirMeta.toSummary(),dirMeta.selector,sourceSpan);var/** @type {?} */parsedHostListeners=parser.createDirectiveHostEventAsts(dirMeta.toSummary(),sourceSpan);return new ParseResult(parsedHostProps,parsedHostListeners,errors);}/**
 * @param {?} parseErrors
 * @param {?} console
 * @return {?}
 */function reportParseErrors(parseErrors,console){var/** @type {?} */warnings=parseErrors.filter(function(error){return error.level===ParseErrorLevel.WARNING;});var/** @type {?} */errors=parseErrors.filter(function(error){return error.level===ParseErrorLevel.FATAL;});if(warnings.length>0){this._console.warn('Directive parse warnings:\n'+warnings.join('\n'));}if(errors.length>0){throw new Error('Directive parse errors:\n'+errors.join('\n'));}}var DirectiveWrapperExpressions=function(){function DirectiveWrapperExpressions(){_classCallCheck(this,DirectiveWrapperExpressions);}_createClass(DirectiveWrapperExpressions,null,[{key:'create',/**
     * @param {?} dir
     * @param {?} depsExpr
     * @return {?}
     */value:function create(dir,depsExpr){return importExpr(dir).instantiate(depsExpr,importType(dir));}/**
     * @param {?} dirWrapper
     * @return {?}
     */},{key:'context',value:function context(dirWrapper){return dirWrapper.prop(CONTEXT_FIELD_NAME);}/**
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} renderElement
     * @return {?}
     */},{key:'ngDoCheck',value:function ngDoCheck(dirWrapper,view,renderElement){return dirWrapper.callMethod('ngDoCheck',[view,renderElement]);}/**
     * @param {?} hostProps
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} componentView
     * @param {?} renderElement
     * @param {?} runtimeSecurityContexts
     * @return {?}
     */},{key:'checkHost',value:function checkHost(hostProps,dirWrapper,view,componentView,renderElement,runtimeSecurityContexts){if(hostProps.length){return[dirWrapper.callMethod('checkHost',[view,componentView,renderElement].concat(runtimeSecurityContexts)).toStmt()];}else{return[];}}/**
     * @param {?} hostProps
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} componentView
     * @param {?} renderEl
     * @return {?}
     */},{key:'ngOnDetach',value:function ngOnDetach(hostProps,dirWrapper,view,componentView,renderEl){if(hostProps.some(function(prop){return prop.isAnimation;})){return[dirWrapper.callMethod('ngOnDetach',[view,componentView,renderEl]).toStmt()];}else{return[];}}/**
     * @param {?} dir
     * @param {?} dirWrapper
     * @return {?}
     */},{key:'ngOnDestroy',value:function ngOnDestroy(dir,dirWrapper){if(dir.type.lifecycleHooks.indexOf(ɵLifecycleHooks.OnDestroy)!==-1||Object.keys(dir.outputs).length>0){return[dirWrapper.callMethod('ngOnDestroy',[]).toStmt()];}else{return[];}}/**
     * @param {?} dirMeta
     * @param {?} hostProps
     * @param {?} usedEvents
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} eventListener
     * @return {?}
     */},{key:'subscribe',value:function subscribe(dirMeta,hostProps,usedEvents,dirWrapper,view,eventListener){var/** @type {?} */needsSubscribe=false;var/** @type {?} */eventFlags=[];Object.keys(dirMeta.outputs).forEach(function(propName){var/** @type {?} */eventName=dirMeta.outputs[propName];var/** @type {?} */eventUsed=usedEvents.indexOf(eventName)>-1;needsSubscribe=needsSubscribe||eventUsed;eventFlags.push(literal(eventUsed));});hostProps.forEach(function(hostProp){if(hostProp.isAnimation&&usedEvents.length>0){needsSubscribe=true;}});if(needsSubscribe){return[dirWrapper.callMethod('subscribe',[view,eventListener].concat(eventFlags)).toStmt()];}else{return[];}}/**
     * @param {?} hostEvents
     * @param {?} dirWrapper
     * @param {?} eventName
     * @param {?} event
     * @return {?}
     */},{key:'handleEvent',value:function handleEvent(hostEvents,dirWrapper,eventName,event){return dirWrapper.callMethod('handleEvent',[eventName,event]);}}]);return DirectiveWrapperExpressions;}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var/** @type {?} */STRIP_SRC_FILE_SUFFIXES=/(\.ts|\.d\.ts|\.js|\.jsx|\.tsx)$/;var/** @type {?} */NG_FACTORY=/\.ngfactory\./;/**
 * @param {?} filePath
 * @return {?}
 */function ngfactoryFilePath(filePath){var/** @type {?} */urlWithSuffix=splitTypescriptSuffix(filePath);return urlWithSuffix[0]+'.ngfactory'+urlWithSuffix[1];}/**
 * @param {?} filePath
 * @return {?}
 */function stripNgFactory(filePath){return filePath.replace(NG_FACTORY,'.');}/**
 * @param {?} filePath
 * @return {?}
 */function isNgFactoryFile(filePath){return NG_FACTORY.test(filePath);}/**
 * @param {?} path
 * @return {?}
 */function splitTypescriptSuffix(path){if(path.endsWith('.d.ts')){return[path.slice(0,-5),'.ts'];}var/** @type {?} */lastDot=path.lastIndexOf('.');if(lastDot!==-1){return[path.substring(0,lastDot),path.substring(lastDot)];}return[path,''];}/**
 * @param {?} fileName
 * @return {?}
 */function summaryFileName(fileName){var/** @type {?} */fileNameWithoutSuffix=fileName.replace(STRIP_SRC_FILE_SUFFIXES,'');return fileNameWithoutSuffix+'.ngsummary.json';}/**
 * @param {?} hook
 * @param {?} token
 * @return {?}
 */function hasLifecycleHook(hook,token){return ɵreflector.hasLifecycleHook(token,getHookName(hook));}/**
 * @param {?} hook
 * @return {?}
 */function getHookName(hook){switch(hook){case ɵLifecycleHooks.OnInit:return'ngOnInit';case ɵLifecycleHooks.OnDestroy:return'ngOnDestroy';case ɵLifecycleHooks.DoCheck:return'ngDoCheck';case ɵLifecycleHooks.OnChanges:return'ngOnChanges';case ɵLifecycleHooks.AfterContentInit:return'ngAfterContentInit';case ɵLifecycleHooks.AfterContentChecked:return'ngAfterContentChecked';case ɵLifecycleHooks.AfterViewInit:return'ngAfterViewInit';case ɵLifecycleHooks.AfterViewChecked:return'ngAfterViewChecked';}}/**
 * @param {?} obj
 * @return {?}
 */function _isNgModuleMetadata(obj){return obj instanceof NgModule;}/**
 * Resolves types to {\@link NgModule}.
 */var NgModuleResolver=function(){/**
     * @param {?=} _reflector
     */function NgModuleResolver(){var _reflector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:ɵreflector;_classCallCheck(this,NgModuleResolver);this._reflector=_reflector;}/**
     * @param {?} type
     * @return {?}
     */_createClass(NgModuleResolver,[{key:'isNgModule',value:function isNgModule(type){return this._reflector.annotations(type).some(_isNgModuleMetadata);}/**
     * @param {?} type
     * @param {?=} throwIfNotFound
     * @return {?}
     */},{key:'resolve',value:function resolve(type){var throwIfNotFound=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var/** @type {?} */ngModuleMeta=ListWrapper.findLast(this._reflector.annotations(type),_isNgModuleMetadata);if(ngModuleMeta){return ngModuleMeta;}else{if(throwIfNotFound){throw new Error('No NgModule metadata found for \''+stringify(type)+'\'.');}return null;}}}]);return NgModuleResolver;}();NgModuleResolver.decorators=[{type:CompilerInjectable}];/** @nocollapse */NgModuleResolver.ctorParameters=function(){return[{type:ɵReflectorReader}];};/**
 * @param {?} type
 * @return {?}
 */function _isPipeMetadata(type){return type instanceof Pipe;}/**
 * Resolve a `Type` for {\@link Pipe}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {\@link Compiler}
 */var PipeResolver=function(){/**
     * @param {?=} _reflector
     */function PipeResolver(){var _reflector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:ɵreflector;_classCallCheck(this,PipeResolver);this._reflector=_reflector;}/**
     * @param {?} type
     * @return {?}
     */_createClass(PipeResolver,[{key:'isPipe',value:function isPipe(type){var/** @type {?} */typeMetadata=this._reflector.annotations(resolveForwardRef(type));return typeMetadata&&typeMetadata.some(_isPipeMetadata);}/**
     * Return {\@link Pipe} for a given `Type`.
     * @param {?} type
     * @param {?=} throwIfNotFound
     * @return {?}
     */},{key:'resolve',value:function resolve(type){var throwIfNotFound=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var/** @type {?} */metas=this._reflector.annotations(resolveForwardRef(type));if(metas){var/** @type {?} */annotation=ListWrapper.findLast(metas,_isPipeMetadata);if(annotation){return annotation;}}if(throwIfNotFound){throw new Error('No Pipe decorator found on '+stringify(type));}return null;}}]);return PipeResolver;}();PipeResolver.decorators=[{type:CompilerInjectable}];/** @nocollapse */PipeResolver.ctorParameters=function(){return[{type:ɵReflectorReader}];};var SummaryResolver=function(){function SummaryResolver(){_classCallCheck(this,SummaryResolver);}_createClass(SummaryResolver,[{key:'isLibraryFile',/**
     * @param {?} fileName
     * @return {?}
     */value:function isLibraryFile(fileName){return false;}},{key:'getLibraryFileName',/**
     * @param {?} fileName
     * @return {?}
     */value:function getLibraryFileName(fileName){return null;}/**
     * @param {?} reference
     * @return {?}
     */},{key:'resolveSummary',value:function resolveSummary(reference){return null;}},{key:'getSymbolsOf',/**
     * @param {?} filePath
     * @return {?}
     */value:function getSymbolsOf(filePath){return[];}/**
     * @param {?} reference
     * @return {?}
     */},{key:'getImportAs',value:function getImportAs(reference){return reference;}}]);return SummaryResolver;}();SummaryResolver.decorators=[{type:CompilerInjectable}];/** @nocollapse */SummaryResolver.ctorParameters=function(){return[];};var/** @type {?} */ERROR_COLLECTOR_TOKEN=new InjectionToken('ErrorCollector');var CompileMetadataResolver=function(){/**
     * @param {?} _config
     * @param {?} _ngModuleResolver
     * @param {?} _directiveResolver
     * @param {?} _pipeResolver
     * @param {?} _summaryResolver
     * @param {?} _schemaRegistry
     * @param {?} _directiveNormalizer
     * @param {?} _staticSymbolCache
     * @param {?=} _reflector
     * @param {?=} _errorCollector
     */function CompileMetadataResolver(_config,_ngModuleResolver,_directiveResolver,_pipeResolver,_summaryResolver,_schemaRegistry,_directiveNormalizer,_staticSymbolCache){var _reflector=arguments.length>8&&arguments[8]!==undefined?arguments[8]:ɵreflector;var _errorCollector=arguments[9];_classCallCheck(this,CompileMetadataResolver);this._config=_config;this._ngModuleResolver=_ngModuleResolver;this._directiveResolver=_directiveResolver;this._pipeResolver=_pipeResolver;this._summaryResolver=_summaryResolver;this._schemaRegistry=_schemaRegistry;this._directiveNormalizer=_directiveNormalizer;this._staticSymbolCache=_staticSymbolCache;this._reflector=_reflector;this._errorCollector=_errorCollector;this._nonNormalizedDirectiveCache=new Map();this._directiveCache=new Map();this._summaryCache=new Map();this._pipeCache=new Map();this._ngModuleCache=new Map();this._ngModuleOfTypes=new Map();}/**
     * @param {?} type
     * @return {?}
     */_createClass(CompileMetadataResolver,[{key:'clearCacheFor',value:function clearCacheFor(type){var/** @type {?} */dirMeta=this._directiveCache.get(type);this._directiveCache.delete(type);this._nonNormalizedDirectiveCache.delete(type);this._summaryCache.delete(type);this._pipeCache.delete(type);this._ngModuleOfTypes.delete(type);// Clear all of the NgModule as they contain transitive information!
this._ngModuleCache.clear();if(dirMeta){this._directiveNormalizer.clearCacheFor(dirMeta);}}/**
     * @return {?}
     */},{key:'clearCache',value:function clearCache(){this._directiveCache.clear();this._nonNormalizedDirectiveCache.clear();this._summaryCache.clear();this._pipeCache.clear();this._ngModuleCache.clear();this._ngModuleOfTypes.clear();this._directiveNormalizer.clearCache();}/**
     * @param {?} baseType
     * @param {?} name
     * @return {?}
     */},{key:'_createProxyClass',value:function _createProxyClass(baseType,name){var/** @type {?} */delegate=null;var/** @type {?} */proxyClass=function proxyClass(){if(!delegate){throw new Error('Illegal state: Class '+name+' for type '+stringify(baseType)+' is not compiled yet!');}return delegate.apply(this,arguments);};proxyClass.setDelegate=function(d){delegate=d;proxyClass.prototype=d.prototype;};// Make stringify work correctly
proxyClass.overriddenName=name;return proxyClass;}/**
     * @param {?} dirType
     * @param {?} name
     * @return {?}
     */},{key:'getGeneratedClass',value:function getGeneratedClass(dirType,name){if(dirType instanceof StaticSymbol){return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath),name);}else{return this._createProxyClass(dirType,name);}}/**
     * @param {?} dirType
     * @return {?}
     */},{key:'getDirectiveWrapperClass',value:function getDirectiveWrapperClass(dirType){if(!this._config.useViewEngine){return this.getGeneratedClass(dirType,dirWrapperClassName(dirType));}return null;}/**
     * @param {?} dirType
     * @return {?}
     */},{key:'getComponentViewClass',value:function getComponentViewClass(dirType){return this.getGeneratedClass(dirType,viewClassName(dirType,0));}/**
     * @param {?} dirType
     * @return {?}
     */},{key:'getHostComponentViewClass',value:function getHostComponentViewClass(dirType){return this.getGeneratedClass(dirType,hostViewClassName(dirType));}/**
     * @param {?} dirType
     * @return {?}
     */},{key:'getHostComponentType',value:function getHostComponentType(dirType){var/** @type {?} */name=identifierName({reference:dirType})+'_Host';if(dirType instanceof StaticSymbol){return this._staticSymbolCache.get(dirType.filePath,name);}else{var/** @type {?} */HostClass=function HostClass(){};HostClass.overriddenName=name;return HostClass;}}/**
     * @param {?} dirType
     * @return {?}
     */},{key:'getRendererType',value:function getRendererType(dirType){if(dirType instanceof StaticSymbol){return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath),rendererTypeName(dirType));}else{// returning an object as proxy,
// that we fill later during runtime compilation.
return{};}}/**
     * @param {?} selector
     * @param {?} dirType
     * @return {?}
     */},{key:'getComponentFactory',value:function getComponentFactory(selector,dirType){if(dirType instanceof StaticSymbol){return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath),componentFactoryName(dirType));}else{var/** @type {?} */hostView=this.getHostComponentViewClass(dirType);if(this._config.useViewEngine){return ɵcreateComponentFactory(selector,dirType,/** @type {?} */hostView);}else{return new ComponentFactory(selector,/** @type {?} */hostView,dirType);}}}/**
     * @param {?} type
     * @param {?} kind
     * @return {?}
     */},{key:'_loadSummary',value:function _loadSummary(type,kind){var/** @type {?} */typeSummary=this._summaryCache.get(type);if(!typeSummary){var/** @type {?} */summary=this._summaryResolver.resolveSummary(type);typeSummary=summary?summary.type:null;this._summaryCache.set(type,typeSummary);}return typeSummary&&typeSummary.summaryKind===kind?typeSummary:null;}/**
     * @param {?} directiveType
     * @param {?} isSync
     * @return {?}
     */},{key:'_loadDirectiveMetadata',value:function _loadDirectiveMetadata(directiveType,isSync){var _this170=this;if(this._directiveCache.has(directiveType)){return;}directiveType=resolveForwardRef(directiveType);var _getNonNormalizedDire=this.getNonNormalizedDirectiveMetadata(directiveType),annotation=_getNonNormalizedDire.annotation,metadata=_getNonNormalizedDire.metadata;var/** @type {?} */createDirectiveMetadata=function createDirectiveMetadata(templateMetadata){var/** @type {?} */normalizedDirMeta=new CompileDirectiveMetadata({type:metadata.type,isComponent:metadata.isComponent,selector:metadata.selector,exportAs:metadata.exportAs,changeDetection:metadata.changeDetection,inputs:metadata.inputs,outputs:metadata.outputs,hostListeners:metadata.hostListeners,hostProperties:metadata.hostProperties,hostAttributes:metadata.hostAttributes,providers:metadata.providers,viewProviders:metadata.viewProviders,queries:metadata.queries,viewQueries:metadata.viewQueries,entryComponents:metadata.entryComponents,wrapperType:metadata.wrapperType,componentViewType:metadata.componentViewType,rendererType:metadata.rendererType,componentFactory:metadata.componentFactory,template:templateMetadata});_this170._directiveCache.set(directiveType,normalizedDirMeta);_this170._summaryCache.set(directiveType,normalizedDirMeta.toSummary());return normalizedDirMeta;};if(metadata.isComponent){var/** @type {?} */templateMeta=this._directiveNormalizer.normalizeTemplate({componentType:directiveType,moduleUrl:componentModuleUrl(this._reflector,directiveType,annotation),encapsulation:metadata.template.encapsulation,template:metadata.template.template,templateUrl:metadata.template.templateUrl,styles:metadata.template.styles,styleUrls:metadata.template.styleUrls,animations:metadata.template.animations,interpolation:metadata.template.interpolation});if(templateMeta.syncResult){createDirectiveMetadata(templateMeta.syncResult);return null;}else{if(isSync){this._reportError(componentStillLoadingError(directiveType),directiveType);return null;}return templateMeta.asyncResult.then(createDirectiveMetadata);}}else{// directive
createDirectiveMetadata(null);return null;}}/**
     * @param {?} directiveType
     * @return {?}
     */},{key:'getNonNormalizedDirectiveMetadata',value:function getNonNormalizedDirectiveMetadata(directiveType){var _this171=this;directiveType=resolveForwardRef(directiveType);if(!directiveType){return null;}var/** @type {?} */cacheEntry=this._nonNormalizedDirectiveCache.get(directiveType);if(cacheEntry){return cacheEntry;}var/** @type {?} */dirMeta=this._directiveResolver.resolve(directiveType,false);if(!dirMeta){return null;}var/** @type {?} */nonNormalizedTemplateMetadata=void 0;if(dirMeta instanceof Component){// component
assertArrayOfStrings('styles',dirMeta.styles);assertArrayOfStrings('styleUrls',dirMeta.styleUrls);assertInterpolationSymbols('interpolation',dirMeta.interpolation);var/** @type {?} */animations=dirMeta.animations;nonNormalizedTemplateMetadata=new CompileTemplateMetadata({encapsulation:dirMeta.encapsulation,template:dirMeta.template,templateUrl:dirMeta.templateUrl,styles:dirMeta.styles,styleUrls:dirMeta.styleUrls,animations:animations,interpolation:dirMeta.interpolation});}var/** @type {?} */changeDetectionStrategy=null;var/** @type {?} */viewProviders=[];var/** @type {?} */entryComponentMetadata=[];var/** @type {?} */selector=dirMeta.selector;if(dirMeta instanceof Component){// Component
changeDetectionStrategy=dirMeta.changeDetection;if(dirMeta.viewProviders){viewProviders=this._getProvidersMetadata(dirMeta.viewProviders,entryComponentMetadata,'viewProviders for "'+stringifyType(directiveType)+'"',[],directiveType);}if(dirMeta.entryComponents){entryComponentMetadata=flattenAndDedupeArray(dirMeta.entryComponents).map(function(type){return _this171._getEntryComponentMetadata(type);}).concat(entryComponentMetadata);}if(!selector){selector=this._schemaRegistry.getDefaultComponentElementName();}}else{// Directive
if(!selector){this._reportError(syntaxError('Directive '+stringifyType(directiveType)+' has no selector, please add it!'),directiveType);selector='error';}}var/** @type {?} */providers=[];if(dirMeta.providers!=null){providers=this._getProvidersMetadata(dirMeta.providers,entryComponentMetadata,'providers for "'+stringifyType(directiveType)+'"',[],directiveType);}var/** @type {?} */queries=[];var/** @type {?} */viewQueries=[];if(dirMeta.queries!=null){queries=this._getQueriesMetadata(dirMeta.queries,false,directiveType);viewQueries=this._getQueriesMetadata(dirMeta.queries,true,directiveType);}var/** @type {?} */metadata=CompileDirectiveMetadata.create({selector:selector,exportAs:dirMeta.exportAs,isComponent:!!nonNormalizedTemplateMetadata,type:this._getTypeMetadata(directiveType),template:nonNormalizedTemplateMetadata,changeDetection:changeDetectionStrategy,inputs:dirMeta.inputs,outputs:dirMeta.outputs,host:dirMeta.host,providers:providers,viewProviders:viewProviders,queries:queries,viewQueries:viewQueries,entryComponents:entryComponentMetadata,wrapperType:this.getDirectiveWrapperClass(directiveType),componentViewType:nonNormalizedTemplateMetadata?this.getComponentViewClass(directiveType):undefined,rendererType:nonNormalizedTemplateMetadata?this.getRendererType(directiveType):undefined,componentFactory:nonNormalizedTemplateMetadata?this.getComponentFactory(selector,directiveType):undefined});cacheEntry={metadata:metadata,annotation:dirMeta};this._nonNormalizedDirectiveCache.set(directiveType,cacheEntry);return cacheEntry;}/**
     * Gets the metadata for the given directive.
     * This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.
     * @param {?} directiveType
     * @return {?}
     */},{key:'getDirectiveMetadata',value:function getDirectiveMetadata(directiveType){var/** @type {?} */dirMeta=this._directiveCache.get(directiveType);if(!dirMeta){this._reportError(syntaxError('Illegal state: getDirectiveMetadata can only be called after loadNgModuleDirectiveAndPipeMetadata for a module that declares it. Directive '+stringifyType(directiveType)+'.'),directiveType);}return dirMeta;}/**
     * @param {?} dirType
     * @return {?}
     */},{key:'getDirectiveSummary',value:function getDirectiveSummary(dirType){var/** @type {?} */dirSummary=this._loadSummary(dirType,CompileSummaryKind.Directive);if(!dirSummary){this._reportError(syntaxError('Illegal state: Could not load the summary for directive '+stringifyType(dirType)+'.'),dirType);}return dirSummary;}/**
     * @param {?} type
     * @return {?}
     */},{key:'isDirective',value:function isDirective(type){return this._directiveResolver.isDirective(type);}/**
     * @param {?} type
     * @return {?}
     */},{key:'isPipe',value:function isPipe(type){return this._pipeResolver.isPipe(type);}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'getNgModuleSummary',value:function getNgModuleSummary(moduleType){var/** @type {?} */moduleSummary=this._loadSummary(moduleType,CompileSummaryKind.NgModule);if(!moduleSummary){var/** @type {?} */moduleMeta=this.getNgModuleMetadata(moduleType,false);moduleSummary=moduleMeta?moduleMeta.toSummary():null;if(moduleSummary){this._summaryCache.set(moduleType,moduleSummary);}}return moduleSummary;}/**
     * Loads the declared directives and pipes of an NgModule.
     * @param {?} moduleType
     * @param {?} isSync
     * @param {?=} throwIfNotFound
     * @return {?}
     */},{key:'loadNgModuleDirectiveAndPipeMetadata',value:function loadNgModuleDirectiveAndPipeMetadata(moduleType,isSync){var _this172=this;var throwIfNotFound=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var/** @type {?} */ngModule=this.getNgModuleMetadata(moduleType,throwIfNotFound);var/** @type {?} */loading=[];if(ngModule){ngModule.declaredDirectives.forEach(function(id){var/** @type {?} */promise=_this172._loadDirectiveMetadata(id.reference,isSync);if(promise){loading.push(promise);}});ngModule.declaredPipes.forEach(function(id){return _this172._loadPipeMetadata(id.reference);});}return Promise.all(loading);}/**
     * @param {?} moduleType
     * @param {?=} throwIfNotFound
     * @return {?}
     */},{key:'getNgModuleMetadata',value:function getNgModuleMetadata(moduleType){var _this173=this;var throwIfNotFound=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;moduleType=resolveForwardRef(moduleType);var/** @type {?} */compileMeta=this._ngModuleCache.get(moduleType);if(compileMeta){return compileMeta;}var/** @type {?} */meta=this._ngModuleResolver.resolve(moduleType,throwIfNotFound);if(!meta){return null;}var/** @type {?} */declaredDirectives=[];var/** @type {?} */exportedNonModuleIdentifiers=[];var/** @type {?} */declaredPipes=[];var/** @type {?} */importedModules=[];var/** @type {?} */exportedModules=[];var/** @type {?} */providers=[];var/** @type {?} */entryComponents=[];var/** @type {?} */bootstrapComponents=[];var/** @type {?} */schemas=[];if(meta.imports){flattenAndDedupeArray(meta.imports).forEach(function(importedType){var/** @type {?} */importedModuleType=void 0;if(isValidType(importedType)){importedModuleType=importedType;}else if(importedType&&importedType.ngModule){var/** @type {?} */moduleWithProviders=importedType;importedModuleType=moduleWithProviders.ngModule;if(moduleWithProviders.providers){providers.push.apply(providers,_toConsumableArray(_this173._getProvidersMetadata(moduleWithProviders.providers,entryComponents,'provider for the NgModule \''+stringifyType(importedModuleType)+'\'',[],importedType)));}}if(importedModuleType){var/** @type {?} */importedModuleSummary=_this173.getNgModuleSummary(importedModuleType);if(!importedModuleSummary){_this173._reportError(syntaxError('Unexpected '+_this173._getTypeDescriptor(importedType)+' \''+stringifyType(importedType)+'\' imported by the module \''+stringifyType(moduleType)+'\''),moduleType);return;}importedModules.push(importedModuleSummary);}else{_this173._reportError(syntaxError('Unexpected value \''+stringifyType(importedType)+'\' imported by the module \''+stringifyType(moduleType)+'\''),moduleType);return;}});}if(meta.exports){flattenAndDedupeArray(meta.exports).forEach(function(exportedType){if(!isValidType(exportedType)){_this173._reportError(syntaxError('Unexpected value \''+stringifyType(exportedType)+'\' exported by the module \''+stringifyType(moduleType)+'\''),moduleType);return;}var/** @type {?} */exportedModuleSummary=_this173.getNgModuleSummary(exportedType);if(exportedModuleSummary){exportedModules.push(exportedModuleSummary);}else{exportedNonModuleIdentifiers.push(_this173._getIdentifierMetadata(exportedType));}});}// Note: This will be modified later, so we rely on
// getting a new instance every time!
var/** @type {?} */transitiveModule=this._getTransitiveNgModuleMetadata(importedModules,exportedModules);if(meta.declarations){flattenAndDedupeArray(meta.declarations).forEach(function(declaredType){if(!isValidType(declaredType)){_this173._reportError(syntaxError('Unexpected value \''+stringifyType(declaredType)+'\' declared by the module \''+stringifyType(moduleType)+'\''),moduleType);return;}var/** @type {?} */declaredIdentifier=_this173._getIdentifierMetadata(declaredType);if(_this173._directiveResolver.isDirective(declaredType)){transitiveModule.addDirective(declaredIdentifier);declaredDirectives.push(declaredIdentifier);_this173._addTypeToModule(declaredType,moduleType);}else if(_this173._pipeResolver.isPipe(declaredType)){transitiveModule.addPipe(declaredIdentifier);transitiveModule.pipes.push(declaredIdentifier);declaredPipes.push(declaredIdentifier);_this173._addTypeToModule(declaredType,moduleType);}else{_this173._reportError(syntaxError('Unexpected '+_this173._getTypeDescriptor(declaredType)+' \''+stringifyType(declaredType)+'\' declared by the module \''+stringifyType(moduleType)+'\''),moduleType);return;}});}var/** @type {?} */exportedDirectives=[];var/** @type {?} */exportedPipes=[];exportedNonModuleIdentifiers.forEach(function(exportedId){if(transitiveModule.directivesSet.has(exportedId.reference)){exportedDirectives.push(exportedId);transitiveModule.addExportedDirective(exportedId);}else if(transitiveModule.pipesSet.has(exportedId.reference)){exportedPipes.push(exportedId);transitiveModule.addExportedPipe(exportedId);}else{_this173._reportError(syntaxError('Can\'t export '+_this173._getTypeDescriptor(exportedId.reference)+' '+stringifyType(exportedId.reference)+' from '+stringifyType(moduleType)+' as it was neither declared nor imported!'),moduleType);}});// The providers of the module have to go last
// so that they overwrite any other provider we already added.
if(meta.providers){providers.push.apply(providers,_toConsumableArray(this._getProvidersMetadata(meta.providers,entryComponents,'provider for the NgModule \''+stringifyType(moduleType)+'\'',[],moduleType)));}if(meta.entryComponents){entryComponents.push.apply(entryComponents,_toConsumableArray(flattenAndDedupeArray(meta.entryComponents).map(function(type){return _this173._getEntryComponentMetadata(type);})));}if(meta.bootstrap){flattenAndDedupeArray(meta.bootstrap).forEach(function(type){if(!isValidType(type)){_this173._reportError(syntaxError('Unexpected value \''+stringifyType(type)+'\' used in the bootstrap property of module \''+stringifyType(moduleType)+'\''),moduleType);return;}bootstrapComponents.push(_this173._getIdentifierMetadata(type));});}entryComponents.push.apply(entryComponents,_toConsumableArray(bootstrapComponents.map(function(type){return _this173._getEntryComponentMetadata(type.reference);})));if(meta.schemas){schemas.push.apply(schemas,_toConsumableArray(flattenAndDedupeArray(meta.schemas)));}compileMeta=new CompileNgModuleMetadata({type:this._getTypeMetadata(moduleType),providers:providers,entryComponents:entryComponents,bootstrapComponents:bootstrapComponents,schemas:schemas,declaredDirectives:declaredDirectives,exportedDirectives:exportedDirectives,declaredPipes:declaredPipes,exportedPipes:exportedPipes,importedModules:importedModules,exportedModules:exportedModules,transitiveModule:transitiveModule,id:meta.id});entryComponents.forEach(function(id){return transitiveModule.addEntryComponent(id);});providers.forEach(function(provider){return transitiveModule.addProvider(provider,compileMeta.type);});transitiveModule.addModule(compileMeta.type);this._ngModuleCache.set(moduleType,compileMeta);return compileMeta;}/**
     * @param {?} type
     * @return {?}
     */},{key:'_getTypeDescriptor',value:function _getTypeDescriptor(type){if(this._directiveResolver.isDirective(type)){return'directive';}if(this._pipeResolver.isPipe(type)){return'pipe';}if(this._ngModuleResolver.isNgModule(type)){return'module';}if(type.provide){return'provider';}return'value';}/**
     * @param {?} type
     * @param {?} moduleType
     * @return {?}
     */},{key:'_addTypeToModule',value:function _addTypeToModule(type,moduleType){var/** @type {?} */oldModule=this._ngModuleOfTypes.get(type);if(oldModule&&oldModule!==moduleType){this._reportError(syntaxError('Type '+stringifyType(type)+' is part of the declarations of 2 modules: '+stringifyType(oldModule)+' and '+stringifyType(moduleType)+'! '+('Please consider moving '+stringifyType(type)+' to a higher module that imports '+stringifyType(oldModule)+' and '+stringifyType(moduleType)+'. ')+('You can also create a new NgModule that exports and includes '+stringifyType(type)+' then import that NgModule in '+stringifyType(oldModule)+' and '+stringifyType(moduleType)+'.')),moduleType);}this._ngModuleOfTypes.set(type,moduleType);}/**
     * @param {?} importedModules
     * @param {?} exportedModules
     * @return {?}
     */},{key:'_getTransitiveNgModuleMetadata',value:function _getTransitiveNgModuleMetadata(importedModules,exportedModules){// collect `providers` / `entryComponents` from all imported and all exported modules
var/** @type {?} */result=new TransitiveCompileNgModuleMetadata();var/** @type {?} */modulesByToken=new Map();importedModules.concat(exportedModules).forEach(function(modSummary){modSummary.modules.forEach(function(mod){return result.addModule(mod);});modSummary.entryComponents.forEach(function(comp){return result.addEntryComponent(comp);});var/** @type {?} */addedTokens=new Set();modSummary.providers.forEach(function(entry){var/** @type {?} */tokenRef=tokenReference(entry.provider.token);var/** @type {?} */prevModules=modulesByToken.get(tokenRef);if(!prevModules){prevModules=new Set();modulesByToken.set(tokenRef,prevModules);}var/** @type {?} */moduleRef=entry.module.reference;// Note: the providers of one module may still contain multiple providers
// per token (e.g. for multi providers), and we need to preserve these.
if(addedTokens.has(tokenRef)||!prevModules.has(moduleRef)){prevModules.add(moduleRef);addedTokens.add(tokenRef);result.addProvider(entry.provider,entry.module);}});});exportedModules.forEach(function(modSummary){modSummary.exportedDirectives.forEach(function(id){return result.addExportedDirective(id);});modSummary.exportedPipes.forEach(function(id){return result.addExportedPipe(id);});});importedModules.forEach(function(modSummary){modSummary.exportedDirectives.forEach(function(id){return result.addDirective(id);});modSummary.exportedPipes.forEach(function(id){return result.addPipe(id);});});return result;}/**
     * @param {?} type
     * @return {?}
     */},{key:'_getIdentifierMetadata',value:function _getIdentifierMetadata(type){type=resolveForwardRef(type);return{reference:type};}/**
     * @param {?} type
     * @return {?}
     */},{key:'isInjectable',value:function isInjectable(type){var/** @type {?} */annotations=this._reflector.annotations(type);// Note: We need an exact check here as @Component / @Directive / ... inherit
// from @CompilerInjectable!
return annotations.some(function(ann){return ann.constructor===Injectable;});}/**
     * @param {?} type
     * @return {?}
     */},{key:'getInjectableSummary',value:function getInjectableSummary(type){return{summaryKind:CompileSummaryKind.Injectable,type:this._getTypeMetadata(type)};}/**
     * @param {?} type
     * @param {?=} dependencies
     * @return {?}
     */},{key:'_getInjectableMetadata',value:function _getInjectableMetadata(type){var dependencies=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var/** @type {?} */typeSummary=this._loadSummary(type,CompileSummaryKind.Injectable);if(typeSummary){return typeSummary.type;}return this._getTypeMetadata(type,dependencies);}/**
     * @param {?} type
     * @param {?=} dependencies
     * @return {?}
     */},{key:'_getTypeMetadata',value:function _getTypeMetadata(type){var dependencies=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var/** @type {?} */identifier=this._getIdentifierMetadata(type);return{reference:identifier.reference,diDeps:this._getDependenciesMetadata(identifier.reference,dependencies),lifecycleHooks:ɵLIFECYCLE_HOOKS_VALUES.filter(function(hook){return hasLifecycleHook(hook,identifier.reference);})};}/**
     * @param {?} factory
     * @param {?=} dependencies
     * @return {?}
     */},{key:'_getFactoryMetadata',value:function _getFactoryMetadata(factory){var dependencies=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;factory=resolveForwardRef(factory);return{reference:factory,diDeps:this._getDependenciesMetadata(factory,dependencies)};}/**
     * Gets the metadata for the given pipe.
     * This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.
     * @param {?} pipeType
     * @return {?}
     */},{key:'getPipeMetadata',value:function getPipeMetadata(pipeType){var/** @type {?} */pipeMeta=this._pipeCache.get(pipeType);if(!pipeMeta){this._reportError(syntaxError('Illegal state: getPipeMetadata can only be called after loadNgModuleDirectiveAndPipeMetadata for a module that declares it. Pipe '+stringifyType(pipeType)+'.'),pipeType);}return pipeMeta;}/**
     * @param {?} pipeType
     * @return {?}
     */},{key:'getPipeSummary',value:function getPipeSummary(pipeType){var/** @type {?} */pipeSummary=this._loadSummary(pipeType,CompileSummaryKind.Pipe);if(!pipeSummary){this._reportError(syntaxError('Illegal state: Could not load the summary for pipe '+stringifyType(pipeType)+'.'),pipeType);}return pipeSummary;}/**
     * @param {?} pipeType
     * @return {?}
     */},{key:'getOrLoadPipeMetadata',value:function getOrLoadPipeMetadata(pipeType){var/** @type {?} */pipeMeta=this._pipeCache.get(pipeType);if(!pipeMeta){pipeMeta=this._loadPipeMetadata(pipeType);}return pipeMeta;}/**
     * @param {?} pipeType
     * @return {?}
     */},{key:'_loadPipeMetadata',value:function _loadPipeMetadata(pipeType){pipeType=resolveForwardRef(pipeType);var/** @type {?} */pipeAnnotation=this._pipeResolver.resolve(pipeType);var/** @type {?} */pipeMeta=new CompilePipeMetadata({type:this._getTypeMetadata(pipeType),name:pipeAnnotation.name,pure:pipeAnnotation.pure});this._pipeCache.set(pipeType,pipeMeta);this._summaryCache.set(pipeType,pipeMeta.toSummary());return pipeMeta;}/**
     * @param {?} typeOrFunc
     * @param {?} dependencies
     * @return {?}
     */},{key:'_getDependenciesMetadata',value:function _getDependenciesMetadata(typeOrFunc,dependencies){var _this174=this;var/** @type {?} */hasUnknownDeps=false;var/** @type {?} */params=dependencies||this._reflector.parameters(typeOrFunc)||[];var/** @type {?} */dependenciesMetadata=params.map(function(param){var/** @type {?} */isAttribute=false;var/** @type {?} */isHost=false;var/** @type {?} */isSelf=false;var/** @type {?} */isSkipSelf=false;var/** @type {?} */isOptional=false;var/** @type {?} */token=null;if(Array.isArray(param)){param.forEach(function(paramEntry){if(paramEntry instanceof Host){isHost=true;}else if(paramEntry instanceof Self){isSelf=true;}else if(paramEntry instanceof SkipSelf){isSkipSelf=true;}else if(paramEntry instanceof Optional){isOptional=true;}else if(paramEntry instanceof Attribute){isAttribute=true;token=paramEntry.attributeName;}else if(paramEntry instanceof Inject){token=paramEntry.token;}else if(paramEntry instanceof InjectionToken){token=paramEntry;}else if(isValidType(paramEntry)&&token==null){token=paramEntry;}});}else{token=param;}if(token==null){hasUnknownDeps=true;return null;}return{isAttribute:isAttribute,isHost:isHost,isSelf:isSelf,isSkipSelf:isSkipSelf,isOptional:isOptional,token:_this174._getTokenMetadata(token)};});if(hasUnknownDeps){var/** @type {?} */depsTokens=dependenciesMetadata.map(function(dep){return dep?stringifyType(dep.token):'?';}).join(', ');this._reportError(syntaxError('Can\'t resolve all parameters for '+stringifyType(typeOrFunc)+': ('+depsTokens+').'),typeOrFunc);}return dependenciesMetadata;}/**
     * @param {?} token
     * @return {?}
     */},{key:'_getTokenMetadata',value:function _getTokenMetadata(token){token=resolveForwardRef(token);var/** @type {?} */compileToken=void 0;if(typeof token==='string'){compileToken={value:token};}else{compileToken={identifier:{reference:token}};}return compileToken;}/**
     * @param {?} providers
     * @param {?} targetEntryComponents
     * @param {?=} debugInfo
     * @param {?=} compileProviders
     * @param {?=} type
     * @return {?}
     */},{key:'_getProvidersMetadata',value:function _getProvidersMetadata(providers,targetEntryComponents,debugInfo){var _this175=this;var compileProviders=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var type=arguments[4];providers.forEach(function(provider,providerIdx){if(Array.isArray(provider)){_this175._getProvidersMetadata(provider,targetEntryComponents,debugInfo,compileProviders);}else{provider=resolveForwardRef(provider);var/** @type {?} */providerMeta=void 0;if(provider&&(typeof provider==='undefined'?'undefined':_typeof(provider))==='object'&&provider.hasOwnProperty('provide')){_this175._validateProvider(provider);providerMeta=new ProviderMeta(provider.provide,provider);}else if(isValidType(provider)){providerMeta=new ProviderMeta(provider,{useClass:provider});}else if(provider===void 0){_this175._reportError(syntaxError('Encountered undefined provider! Usually this means you have a circular dependencies (might be caused by using \'barrel\' index.ts files.'));}else{var/** @type {?} */providersInfo=providers.reduce(function(soFar,seenProvider,seenProviderIdx){if(seenProviderIdx<providerIdx){soFar.push(''+stringifyType(seenProvider));}else if(seenProviderIdx==providerIdx){soFar.push('?'+stringifyType(seenProvider)+'?');}else if(seenProviderIdx==providerIdx+1){soFar.push('...');}return soFar;},[]).join(', ');_this175._reportError(syntaxError('Invalid '+(debugInfo?debugInfo:'provider')+' - only instances of Provider and Type are allowed, got: ['+providersInfo+']'),type);}if(providerMeta.token===resolveIdentifier(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS)){targetEntryComponents.push.apply(targetEntryComponents,_toConsumableArray(_this175._getEntryComponentsFromProvider(providerMeta,type)));}else{compileProviders.push(_this175.getProviderMetadata(providerMeta));}}});return compileProviders;}/**
     * @param {?} provider
     * @return {?}
     */},{key:'_validateProvider',value:function _validateProvider(provider){if(provider.hasOwnProperty('useClass')&&provider.useClass==null){this._reportError(syntaxError('Invalid provider for '+stringifyType(provider.provide)+'. useClass cannot be '+provider.useClass+'.\n           Usually it happens when:\n           1. There\'s a circular dependency (might be caused by using index.ts (barrel) files).\n           2. Class was used before it was declared. Use forwardRef in this case.'));}}/**
     * @param {?} provider
     * @param {?=} type
     * @return {?}
     */},{key:'_getEntryComponentsFromProvider',value:function _getEntryComponentsFromProvider(provider,type){var _this176=this;var/** @type {?} */components=[];var/** @type {?} */collectedIdentifiers=[];if(provider.useFactory||provider.useExisting||provider.useClass){this._reportError(syntaxError('The ANALYZE_FOR_ENTRY_COMPONENTS token only supports useValue!'),type);return[];}if(!provider.multi){this._reportError(syntaxError('The ANALYZE_FOR_ENTRY_COMPONENTS token only supports \'multi = true\'!'),type);return[];}extractIdentifiers(provider.useValue,collectedIdentifiers);collectedIdentifiers.forEach(function(identifier){var/** @type {?} */entry=_this176._getEntryComponentMetadata(identifier.reference,false);if(entry){components.push(entry);}});return components;}/**
     * @param {?} dirType
     * @param {?=} throwIfNotFound
     * @return {?}
     */},{key:'_getEntryComponentMetadata',value:function _getEntryComponentMetadata(dirType){var throwIfNotFound=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var/** @type {?} */dirMeta=this.getNonNormalizedDirectiveMetadata(dirType);if(dirMeta&&dirMeta.metadata.isComponent){return{componentType:dirType,componentFactory:dirMeta.metadata.componentFactory};}else{var/** @type {?} */dirSummary=this._loadSummary(dirType,CompileSummaryKind.Directive);if(dirSummary&&dirSummary.isComponent){return{componentType:dirType,componentFactory:dirSummary.componentFactory};}}if(throwIfNotFound){throw syntaxError(dirType.name+' cannot be used as an entry component.');}}/**
     * @param {?} provider
     * @return {?}
     */},{key:'getProviderMetadata',value:function getProviderMetadata(provider){var/** @type {?} */compileDeps=void 0;var/** @type {?} */compileTypeMetadata=null;var/** @type {?} */compileFactoryMetadata=null;var/** @type {?} */token=this._getTokenMetadata(provider.token);if(provider.useClass){compileTypeMetadata=this._getInjectableMetadata(provider.useClass,provider.dependencies);compileDeps=compileTypeMetadata.diDeps;if(provider.token===provider.useClass){// use the compileTypeMetadata as it contains information about lifecycleHooks...
token={identifier:compileTypeMetadata};}}else if(provider.useFactory){compileFactoryMetadata=this._getFactoryMetadata(provider.useFactory,provider.dependencies);compileDeps=compileFactoryMetadata.diDeps;}return{token:token,useClass:compileTypeMetadata,useValue:provider.useValue,useFactory:compileFactoryMetadata,useExisting:provider.useExisting?this._getTokenMetadata(provider.useExisting):null,deps:compileDeps,multi:provider.multi};}/**
     * @param {?} queries
     * @param {?} isViewQuery
     * @param {?} directiveType
     * @return {?}
     */},{key:'_getQueriesMetadata',value:function _getQueriesMetadata(queries,isViewQuery,directiveType){var _this177=this;var/** @type {?} */res=[];Object.keys(queries).forEach(function(propertyName){var/** @type {?} */query=queries[propertyName];if(query.isViewQuery===isViewQuery){res.push(_this177._getQueryMetadata(query,propertyName,directiveType));}});return res;}/**
     * @param {?} selector
     * @return {?}
     */},{key:'_queryVarBindings',value:function _queryVarBindings(selector){return selector.split(/\s*,\s*/);}/**
     * @param {?} q
     * @param {?} propertyName
     * @param {?} typeOrFunc
     * @return {?}
     */},{key:'_getQueryMetadata',value:function _getQueryMetadata(q,propertyName,typeOrFunc){var _this178=this;var/** @type {?} */selectors=void 0;if(typeof q.selector==='string'){selectors=this._queryVarBindings(q.selector).map(function(varName){return _this178._getTokenMetadata(varName);});}else{if(!q.selector){this._reportError(syntaxError('Can\'t construct a query for the property "'+propertyName+'" of "'+stringifyType(typeOrFunc)+'" since the query selector wasn\'t defined.'),typeOrFunc);}selectors=[this._getTokenMetadata(q.selector)];}return{selectors:selectors,first:q.first,descendants:q.descendants,propertyName:propertyName,read:q.read?this._getTokenMetadata(q.read):null};}/**
     * @param {?} error
     * @param {?=} type
     * @param {?=} otherType
     * @return {?}
     */},{key:'_reportError',value:function _reportError(error,type,otherType){if(this._errorCollector){this._errorCollector(error,type);if(otherType){this._errorCollector(error,otherType);}}else{throw error;}}}]);return CompileMetadataResolver;}();CompileMetadataResolver.decorators=[{type:CompilerInjectable}];/** @nocollapse */CompileMetadataResolver.ctorParameters=function(){return[{type:CompilerConfig},{type:NgModuleResolver},{type:DirectiveResolver},{type:PipeResolver},{type:SummaryResolver},{type:ElementSchemaRegistry},{type:DirectiveNormalizer},{type:StaticSymbolCache,decorators:[{type:Optional}]},{type:ɵReflectorReader},{type:undefined,decorators:[{type:Optional},{type:Inject,args:[ERROR_COLLECTOR_TOKEN]}]}];};/**
 * @param {?} tree
 * @param {?=} out
 * @return {?}
 */function flattenArray(tree){var out=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(tree){for(var/** @type {?} */i=0;i<tree.length;i++){var/** @type {?} */item=resolveForwardRef(tree[i]);if(Array.isArray(item)){flattenArray(item,out);}else{out.push(item);}}}return out;}/**
 * @param {?} array
 * @return {?}
 */function dedupeArray(array){if(array){return Array.from(new Set(array));}return[];}/**
 * @param {?} tree
 * @return {?}
 */function flattenAndDedupeArray(tree){return dedupeArray(flattenArray(tree));}/**
 * @param {?} value
 * @return {?}
 */function isValidType(value){return value instanceof StaticSymbol||value instanceof Type;}/**
 * @param {?} reflector
 * @param {?} type
 * @param {?} cmpMetadata
 * @return {?}
 */function componentModuleUrl(reflector,type,cmpMetadata){if(type instanceof StaticSymbol){return type.filePath;}var/** @type {?} */moduleId=cmpMetadata.moduleId;if(typeof moduleId==='string'){var/** @type {?} */scheme=getUrlScheme(moduleId);return scheme?moduleId:'package:'+moduleId+MODULE_SUFFIX;}else if(moduleId!==null&&moduleId!==void 0){throw syntaxError('moduleId should be a string in "'+stringifyType(type)+'". See https://goo.gl/wIDDiL for more information.\n'+'If you\'re using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.');}return reflector.importUri(type);}/**
 * @param {?} value
 * @param {?} targetIdentifiers
 * @return {?}
 */function extractIdentifiers(value,targetIdentifiers){visitValue(value,new _CompileValueConverter(),targetIdentifiers);}var _CompileValueConverter=function(_ValueTransformer){_inherits(_CompileValueConverter,_ValueTransformer);function _CompileValueConverter(){_classCallCheck(this,_CompileValueConverter);return _possibleConstructorReturn(this,(_CompileValueConverter.__proto__||Object.getPrototypeOf(_CompileValueConverter)).apply(this,arguments));}_createClass(_CompileValueConverter,[{key:'visitOther',/**
     * @param {?} value
     * @param {?} targetIdentifiers
     * @return {?}
     */value:function visitOther(value,targetIdentifiers){targetIdentifiers.push({reference:value});}}]);return _CompileValueConverter;}(ValueTransformer);/**
 * @param {?} type
 * @return {?}
 */function stringifyType(type){if(type instanceof StaticSymbol){return type.name+' in '+type.filePath;}else{return stringify(type);}}/**
 * Indicates that a component is still being loaded in a synchronous compile.
 * @param {?} compType
 * @return {?}
 */function componentStillLoadingError(compType){debugger;var/** @type {?} */error=Error('Can\'t compile synchronously as '+stringify(compType)+' is still being loaded!');error[ɵERROR_COMPONENT_TYPE]=compType;return error;}var/** @type {?} */QUOTED_KEYS='$quoted$';/**
 * @param {?} value
 * @param {?=} type
 * @return {?}
 */function convertValueToOutputAst(value){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return visitValue(value,new _ValueOutputAstTransformer(),type);}var _ValueOutputAstTransformer=function(){function _ValueOutputAstTransformer(){_classCallCheck(this,_ValueOutputAstTransformer);}_createClass(_ValueOutputAstTransformer,[{key:'visitArray',/**
     * @param {?} arr
     * @param {?} type
     * @return {?}
     */value:function visitArray(arr,type){var _this180=this;return literalArr(arr.map(function(value){return visitValue(value,_this180,null);}),type);}/**
     * @param {?} map
     * @param {?} type
     * @return {?}
     */},{key:'visitStringMap',value:function visitStringMap(map,type){var _this181=this;var/** @type {?} */entries=[];var/** @type {?} */quotedSet=new Set(map&&map[QUOTED_KEYS]);Object.keys(map).forEach(function(key){entries.push(new LiteralMapEntry(key,visitValue(map[key],_this181,null),quotedSet.has(key)));});return new LiteralMapExpr(entries,type);}/**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */},{key:'visitPrimitive',value:function visitPrimitive(value,type){return literal(value,type);}/**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */},{key:'visitOther',value:function visitOther(value,type){if(value instanceof Expression){return value;}else{return importExpr({reference:value});}}}]);return _ValueOutputAstTransformer;}();/**
 * This is currently not read, but will probably be used in the future.
 * We keep it as we already pass it through all the rigth places...
 */var ComponentFactoryDependency=/**
     * @param {?} compType
     */function ComponentFactoryDependency(compType){_classCallCheck(this,ComponentFactoryDependency);this.compType=compType;};var NgModuleCompileResult=/**
     * @param {?} statements
     * @param {?} ngModuleFactoryVar
     * @param {?} dependencies
     */function NgModuleCompileResult(statements,ngModuleFactoryVar,dependencies){_classCallCheck(this,NgModuleCompileResult);this.statements=statements;this.ngModuleFactoryVar=ngModuleFactoryVar;this.dependencies=dependencies;};var NgModuleCompiler=function(){function NgModuleCompiler(){_classCallCheck(this,NgModuleCompiler);}_createClass(NgModuleCompiler,[{key:'compile',/**
     * @param {?} ngModuleMeta
     * @param {?} extraProviders
     * @return {?}
     */value:function compile(ngModuleMeta,extraProviders){var/** @type {?} */moduleUrl=identifierModuleUrl(ngModuleMeta.type);var/** @type {?} */sourceFileName=isPresent(moduleUrl)?'in NgModule '+identifierName(ngModuleMeta.type)+' in '+moduleUrl:'in NgModule '+identifierName(ngModuleMeta.type);var/** @type {?} */sourceFile=new ParseSourceFile('',sourceFileName);var/** @type {?} */sourceSpan=new ParseSourceSpan(new ParseLocation(sourceFile,null,null,null),new ParseLocation(sourceFile,null,null,null));var/** @type {?} */deps=[];var/** @type {?} */bootstrapComponentFactories=[];var/** @type {?} */entryComponentFactories=ngModuleMeta.transitiveModule.entryComponents.map(function(entryComponent){if(ngModuleMeta.bootstrapComponents.some(function(id){return id.reference===entryComponent.componentType;})){bootstrapComponentFactories.push({reference:entryComponent.componentFactory});}deps.push(new ComponentFactoryDependency(entryComponent.componentType));return{reference:entryComponent.componentFactory};});var/** @type {?} */builder=new _InjectorBuilder(ngModuleMeta,entryComponentFactories,bootstrapComponentFactories,sourceSpan);var/** @type {?} */providerParser=new NgModuleProviderAnalyzer(ngModuleMeta,extraProviders,sourceSpan);providerParser.parse().forEach(function(provider){return builder.addProvider(provider);});var/** @type {?} */injectorClass=builder.build();var/** @type {?} */ngModuleFactoryVar=identifierName(ngModuleMeta.type)+'NgFactory';var/** @type {?} */ngModuleFactoryStmt=variable(ngModuleFactoryVar).set(importExpr(createIdentifier(Identifiers.NgModuleFactory)).instantiate([variable(injectorClass.name),importExpr(ngModuleMeta.type)],importType(createIdentifier(Identifiers.NgModuleFactory),[importType(ngModuleMeta.type)],[TypeModifier.Const]))).toDeclStmt(null,[StmtModifier.Final]);var/** @type {?} */stmts=[injectorClass,ngModuleFactoryStmt];if(ngModuleMeta.id){var/** @type {?} */registerFactoryStmt=importExpr(createIdentifier(Identifiers.RegisterModuleFactoryFn)).callFn([literal(ngModuleMeta.id),variable(ngModuleFactoryVar)]).toStmt();stmts.push(registerFactoryStmt);}return new NgModuleCompileResult(stmts,ngModuleFactoryVar,deps);}}]);return NgModuleCompiler;}();NgModuleCompiler.decorators=[{type:CompilerInjectable}];/** @nocollapse */NgModuleCompiler.ctorParameters=function(){return[];};var _InjectorBuilder=function(){/**
     * @param {?} _ngModuleMeta
     * @param {?} _entryComponentFactories
     * @param {?} _bootstrapComponentFactories
     * @param {?} _sourceSpan
     */function _InjectorBuilder(_ngModuleMeta,_entryComponentFactories,_bootstrapComponentFactories,_sourceSpan){_classCallCheck(this,_InjectorBuilder);this._ngModuleMeta=_ngModuleMeta;this._entryComponentFactories=_entryComponentFactories;this._bootstrapComponentFactories=_bootstrapComponentFactories;this._sourceSpan=_sourceSpan;this.fields=[];this.getters=[];this.methods=[];this.ctorStmts=[];this._tokens=[];this._instances=new Map();this._createStmts=[];this._destroyStmts=[];}/**
     * @param {?} resolvedProvider
     * @return {?}
     */_createClass(_InjectorBuilder,[{key:'addProvider',value:function addProvider(resolvedProvider){var _this182=this;var/** @type {?} */providerValueExpressions=resolvedProvider.providers.map(function(provider){return _this182._getProviderValue(provider);});var/** @type {?} */propName='_'+tokenName(resolvedProvider.token)+'_'+this._instances.size;var/** @type {?} */instance=this._createProviderProperty(propName,resolvedProvider,providerValueExpressions,resolvedProvider.multiProvider,resolvedProvider.eager);if(resolvedProvider.lifecycleHooks.indexOf(ɵLifecycleHooks.OnDestroy)!==-1){this._destroyStmts.push(instance.callMethod('ngOnDestroy',[]).toStmt());}this._tokens.push(resolvedProvider.token);this._instances.set(tokenReference(resolvedProvider.token),instance);}/**
     * @return {?}
     */},{key:'build',value:function build(){var _this183=this;var/** @type {?} */getMethodStmts=this._tokens.map(function(token){var/** @type {?} */providerExpr=_this183._instances.get(tokenReference(token));return new IfStmt(InjectMethodVars.token.identical(createDiTokenExpression(token)),[new ReturnStatement(providerExpr)]);});var/** @type {?} */methods=[new ClassMethod('createInternal',[],this._createStmts.concat(new ReturnStatement(this._instances.get(this._ngModuleMeta.type.reference))),importType(this._ngModuleMeta.type)),new ClassMethod('getInternal',[new FnParam(InjectMethodVars.token.name,DYNAMIC_TYPE),new FnParam(InjectMethodVars.notFoundResult.name,DYNAMIC_TYPE)],getMethodStmts.concat([new ReturnStatement(InjectMethodVars.notFoundResult)]),DYNAMIC_TYPE),new ClassMethod('destroyInternal',[],this._destroyStmts)];var/** @type {?} */parentArgs=[variable(InjectorProps.parent.name),literalArr(this._entryComponentFactories.map(function(componentFactory){return importExpr(componentFactory);})),literalArr(this._bootstrapComponentFactories.map(function(componentFactory){return importExpr(componentFactory);}))];var/** @type {?} */injClassName=identifierName(this._ngModuleMeta.type)+'Injector';return createClassStmt({name:injClassName,ctorParams:[new FnParam(InjectorProps.parent.name,importType(createIdentifier(Identifiers.Injector)))],parent:importExpr(createIdentifier(Identifiers.NgModuleInjector),[importType(this._ngModuleMeta.type)]),parentArgs:parentArgs,builders:[{methods:methods},this]});}/**
     * @param {?} provider
     * @return {?}
     */},{key:'_getProviderValue',value:function _getProviderValue(provider){var _this184=this;var/** @type {?} */result=void 0;if(isPresent(provider.useExisting)){result=this._getDependency({token:provider.useExisting});}else if(isPresent(provider.useFactory)){var/** @type {?} */deps=provider.deps||provider.useFactory.diDeps;var/** @type {?} */depsExpr=deps.map(function(dep){return _this184._getDependency(dep);});result=importExpr(provider.useFactory).callFn(depsExpr);}else if(isPresent(provider.useClass)){var/** @type {?} */_deps3=provider.deps||provider.useClass.diDeps;var/** @type {?} */_depsExpr=_deps3.map(function(dep){return _this184._getDependency(dep);});result=importExpr(provider.useClass).instantiate(_depsExpr,importType(provider.useClass));}else{result=convertValueToOutputAst(provider.useValue);}return result;}/**
     * @param {?} propName
     * @param {?} provider
     * @param {?} providerValueExpressions
     * @param {?} isMulti
     * @param {?} isEager
     * @return {?}
     */},{key:'_createProviderProperty',value:function _createProviderProperty(propName,provider,providerValueExpressions,isMulti,isEager){var/** @type {?} */resolvedProviderValueExpr=void 0;var/** @type {?} */type=void 0;if(isMulti){resolvedProviderValueExpr=literalArr(providerValueExpressions);type=new ArrayType(DYNAMIC_TYPE);}else{resolvedProviderValueExpr=providerValueExpressions[0];type=providerValueExpressions[0].type;}if(!type){type=DYNAMIC_TYPE;}if(isEager){this.fields.push(new ClassField(propName,type));this._createStmts.push(THIS_EXPR.prop(propName).set(resolvedProviderValueExpr).toStmt());}else{var/** @type {?} */internalField='_'+propName;this.fields.push(new ClassField(internalField,type));// Note: Equals is important for JS so that it also checks the undefined case!
var/** @type {?} */getterStmts=[new IfStmt(THIS_EXPR.prop(internalField).isBlank(),[THIS_EXPR.prop(internalField).set(resolvedProviderValueExpr).toStmt()]),new ReturnStatement(THIS_EXPR.prop(internalField))];this.getters.push(new ClassGetter(propName,getterStmts,type));}return THIS_EXPR.prop(propName);}/**
     * @param {?} dep
     * @return {?}
     */},{key:'_getDependency',value:function _getDependency(dep){var/** @type {?} */result=null;if(dep.isValue){result=literal(dep.value);}if(!dep.isSkipSelf){if(dep.token&&(tokenReference(dep.token)===resolveIdentifier(Identifiers.Injector)||tokenReference(dep.token)===resolveIdentifier(Identifiers.ComponentFactoryResolver))){result=THIS_EXPR;}if(!result){result=this._instances.get(tokenReference(dep.token));}}if(!result){var/** @type {?} */args=[createDiTokenExpression(dep.token)];if(dep.isOptional){args.push(NULL_EXPR);}result=InjectorProps.parent.callMethod('get',args);}return result;}}]);return _InjectorBuilder;}();var InjectorProps=function InjectorProps(){_classCallCheck(this,InjectorProps);};InjectorProps.parent=THIS_EXPR.prop('parent');var InjectMethodVars=function InjectMethodVars(){_classCallCheck(this,InjectMethodVars);};InjectMethodVars.token=variable('token');InjectMethodVars.notFoundResult=variable('notFoundResult');/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */// https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit
var/** @type {?} */VERSION$1=3;var/** @type {?} */JS_B64_PREFIX='# sourceMappingURL=data:application/json;base64,';var SourceMapGenerator=function(){/**
     * @param {?=} file
     */function SourceMapGenerator(){var file=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_classCallCheck(this,SourceMapGenerator);this.file=file;this.sourcesContent=new Map();this.lines=[];this.lastCol0=0;this.hasMappings=false;}/**
     * @param {?} url
     * @param {?=} content
     * @return {?}
     */_createClass(SourceMapGenerator,[{key:'addSource',value:function addSource(url){var content=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(!this.sourcesContent.has(url)){this.sourcesContent.set(url,content);}return this;}/**
     * @return {?}
     */},{key:'addLine',value:function addLine(){this.lines.push([]);this.lastCol0=0;return this;}/**
     * @param {?} col0
     * @param {?=} sourceUrl
     * @param {?=} sourceLine0
     * @param {?=} sourceCol0
     * @return {?}
     */},{key:'addMapping',value:function addMapping(col0,sourceUrl,sourceLine0,sourceCol0){if(!this.currentLine){throw new Error('A line must be added before mappings can be added');}if(sourceUrl!=null&&!this.sourcesContent.has(sourceUrl)){throw new Error('Unknown source file "'+sourceUrl+'"');}if(col0==null){throw new Error('The column in the generated code must be provided');}if(col0<this.lastCol0){throw new Error('Mapping should be added in output order');}if(sourceUrl&&(sourceLine0==null||sourceCol0==null)){throw new Error('The source location must be provided when a source url is provided');}this.hasMappings=true;this.lastCol0=col0;this.currentLine.push({col0:col0,sourceUrl:sourceUrl,sourceLine0:sourceLine0,sourceCol0:sourceCol0});return this;}/**
     * @return {?}
     */},{key:'toJSON',/**
     * @return {?}
     */value:function toJSON(){var _this185=this;if(!this.hasMappings){return null;}var/** @type {?} */sourcesIndex=new Map();var/** @type {?} */sources=[];var/** @type {?} */sourcesContent=[];Array.from(this.sourcesContent.keys()).forEach(function(url,i){sourcesIndex.set(url,i);sources.push(url);sourcesContent.push(_this185.sourcesContent.get(url)||null);});var/** @type {?} */mappings='';var/** @type {?} */lastCol0=0;var/** @type {?} */lastSourceIndex=0;var/** @type {?} */lastSourceLine0=0;var/** @type {?} */lastSourceCol0=0;this.lines.forEach(function(segments){lastCol0=0;mappings+=segments.map(function(segment){// zero-based starting column of the line in the generated code
var/** @type {?} */segAsStr=toBase64VLQ(segment.col0-lastCol0);lastCol0=segment.col0;if(segment.sourceUrl!=null){// zero-based index into the “sources” list
segAsStr+=toBase64VLQ(sourcesIndex.get(segment.sourceUrl)-lastSourceIndex);lastSourceIndex=sourcesIndex.get(segment.sourceUrl);// the zero-based starting line in the original source
segAsStr+=toBase64VLQ(segment.sourceLine0-lastSourceLine0);lastSourceLine0=segment.sourceLine0;// the zero-based starting column in the original source
segAsStr+=toBase64VLQ(segment.sourceCol0-lastSourceCol0);lastSourceCol0=segment.sourceCol0;}return segAsStr;}).join(',');mappings+=';';});mappings=mappings.slice(0,-1);return{'file':this.file||'','version':VERSION$1,'sourceRoot':'','sources':sources,'sourcesContent':sourcesContent,'mappings':mappings};}/**
     * @return {?}
     */},{key:'toJsComment',value:function toJsComment(){return this.hasMappings?'//'+JS_B64_PREFIX+toBase64String(JSON.stringify(this,null,0)):'';}},{key:'currentLine',get:function get(){return this.lines.slice(-1)[0];}}]);return SourceMapGenerator;}();/**
 * @param {?} value
 * @return {?}
 */function toBase64String(value){var/** @type {?} */b64='';for(var/** @type {?} */i=0;i<value.length;){var/** @type {?} */i1=value.charCodeAt(i++);var/** @type {?} */i2=value.charCodeAt(i++);var/** @type {?} */i3=value.charCodeAt(i++);b64+=toBase64Digit(i1>>2);b64+=toBase64Digit((i1&3)<<4|(isNaN(i2)?0:i2>>4));b64+=isNaN(i2)?'=':toBase64Digit((i2&15)<<2|i3>>6);b64+=isNaN(i2)||isNaN(i3)?'=':toBase64Digit(i3&63);}return b64;}/**
 * @param {?} value
 * @return {?}
 */function toBase64VLQ(value){value=value<0?(-value<<1)+1:value<<1;var/** @type {?} */out='';do{var/** @type {?} */digit=value&31;value=value>>5;if(value>0){digit=digit|32;}out+=toBase64Digit(digit);}while(value>0);return out;}var/** @type {?} */B64_DIGITS='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';/**
 * @param {?} value
 * @return {?}
 */function toBase64Digit(value){if(value<0||value>=64){throw new Error('Can only encode value in the range [0, 63]');}return B64_DIGITS[value];}var/** @type {?} */_SINGLE_QUOTE_ESCAPE_STRING_RE=/'|\\|\n|\r|\$/g;var/** @type {?} */_LEGAL_IDENTIFIER_RE=/^[$A-Z_][0-9A-Z_$]*$/i;var/** @type {?} */_INDENT_WITH='  ';var/** @type {?} */CATCH_ERROR_VAR$1=variable('error');var/** @type {?} */CATCH_STACK_VAR$1=variable('stack');var _EmittedLine=/**
     * @param {?} indent
     */function _EmittedLine(indent){_classCallCheck(this,_EmittedLine);this.indent=indent;this.parts=[];this.srcSpans=[];};var EmitterVisitorContext=function(){/**
     * @param {?} _exportedVars
     * @param {?} _indent
     */function EmitterVisitorContext(_exportedVars,_indent){_classCallCheck(this,EmitterVisitorContext);this._exportedVars=_exportedVars;this._indent=_indent;this._classes=[];this._lines=[new _EmittedLine(_indent)];}/**
     * @param {?} exportedVars
     * @return {?}
     */_createClass(EmitterVisitorContext,[{key:'isExportedVar',/**
     * @param {?} varName
     * @return {?}
     */value:function isExportedVar(varName){return this._exportedVars.indexOf(varName)!==-1;}/**
     * @param {?=} from
     * @param {?=} lastPart
     * @return {?}
     */},{key:'println',value:function println(from){var lastPart=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';this.print(from,lastPart,true);}/**
     * @return {?}
     */},{key:'lineIsEmpty',value:function lineIsEmpty(){return this._currentLine.parts.length===0;}/**
     * @param {?} from
     * @param {?} part
     * @param {?=} newLine
     * @return {?}
     */},{key:'print',value:function print(from,part){var newLine=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(part.length>0){this._currentLine.parts.push(part);this._currentLine.srcSpans.push(from&&from.sourceSpan||null);}if(newLine){this._lines.push(new _EmittedLine(this._indent));}}/**
     * @return {?}
     */},{key:'removeEmptyLastLine',value:function removeEmptyLastLine(){if(this.lineIsEmpty()){this._lines.pop();}}/**
     * @return {?}
     */},{key:'incIndent',value:function incIndent(){this._indent++;this._currentLine.indent=this._indent;}/**
     * @return {?}
     */},{key:'decIndent',value:function decIndent(){this._indent--;this._currentLine.indent=this._indent;}/**
     * @param {?} clazz
     * @return {?}
     */},{key:'pushClass',value:function pushClass(clazz){this._classes.push(clazz);}/**
     * @return {?}
     */},{key:'popClass',value:function popClass(){return this._classes.pop();}/**
     * @return {?}
     */},{key:'toSource',/**
     * @return {?}
     */value:function toSource(){return this.sourceLines.map(function(l){return l.parts.length>0?_createIndent(l.indent)+l.parts.join(''):'';}).join('\n');}/**
     * @param {?=} file
     * @param {?=} startsAtLine
     * @return {?}
     */},{key:'toSourceMapGenerator',value:function toSourceMapGenerator(){var file=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var startsAtLine=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var/** @type {?} */map=new SourceMapGenerator(file);for(var/** @type {?} */i=0;i<startsAtLine;i++){map.addLine();}this.sourceLines.forEach(function(line){map.addLine();var/** @type {?} */spans=line.srcSpans;var/** @type {?} */parts=line.parts;var/** @type {?} */col0=line.indent*_INDENT_WITH.length;var/** @type {?} */spanIdx=0;// skip leading parts without source spans
while(spanIdx<spans.length&&!spans[spanIdx]){col0+=parts[spanIdx].length;spanIdx++;}while(spanIdx<spans.length){var/** @type {?} */span=spans[spanIdx];var/** @type {?} */source=span.start.file;var/** @type {?} */sourceLine=span.start.line;var/** @type {?} */sourceCol=span.start.col;map.addSource(source.url,source.content).addMapping(col0,source.url,sourceLine,sourceCol);col0+=parts[spanIdx].length;spanIdx++;// assign parts without span or the same span to the previous segment
while(spanIdx<spans.length&&(span===spans[spanIdx]||!spans[spanIdx])){col0+=parts[spanIdx].length;spanIdx++;}}});return map;}/**
     * @return {?}
     */},{key:'_currentLine',/**
     * @return {?}
     */get:function get(){return this._lines[this._lines.length-1];}},{key:'currentClass',get:function get(){return this._classes.length>0?this._classes[this._classes.length-1]:null;}},{key:'sourceLines',get:function get(){if(this._lines.length&&this._lines[this._lines.length-1].parts.length===0){return this._lines.slice(0,-1);}return this._lines;}}],[{key:'createRoot',value:function createRoot(exportedVars){return new EmitterVisitorContext(exportedVars,0);}}]);return EmitterVisitorContext;}();/**
 * @abstract
 */var AbstractEmitterVisitor=function(){/**
     * @param {?} _escapeDollarInStrings
     */function AbstractEmitterVisitor(_escapeDollarInStrings){_classCallCheck(this,AbstractEmitterVisitor);this._escapeDollarInStrings=_escapeDollarInStrings;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */_createClass(AbstractEmitterVisitor,[{key:'visitExpressionStmt',value:function visitExpressionStmt(stmt,ctx){stmt.expr.visitExpression(this,ctx);ctx.println(stmt,';');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReturnStmt',value:function visitReturnStmt(stmt,ctx){ctx.print(stmt,'return ');stmt.value.visitExpression(this,ctx);ctx.println(stmt,';');return null;}/**
     * @abstract
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitCastExpr',value:function visitCastExpr(ast,context){}/**
     * @abstract
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareClassStmt',value:function visitDeclareClassStmt(stmt,ctx){}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitIfStmt',value:function visitIfStmt(stmt,ctx){ctx.print(stmt,'if (');stmt.condition.visitExpression(this,ctx);ctx.print(stmt,') {');var/** @type {?} */hasElseCase=isPresent(stmt.falseCase)&&stmt.falseCase.length>0;if(stmt.trueCase.length<=1&&!hasElseCase){ctx.print(stmt,' ');this.visitAllStatements(stmt.trueCase,ctx);ctx.removeEmptyLastLine();ctx.print(stmt,' ');}else{ctx.println();ctx.incIndent();this.visitAllStatements(stmt.trueCase,ctx);ctx.decIndent();if(hasElseCase){ctx.println(stmt,'} else {');ctx.incIndent();this.visitAllStatements(stmt.falseCase,ctx);ctx.decIndent();}}ctx.println(stmt,'}');return null;}/**
     * @abstract
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitTryCatchStmt',value:function visitTryCatchStmt(stmt,ctx){}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitThrowStmt',value:function visitThrowStmt(stmt,ctx){ctx.print(stmt,'throw ');stmt.error.visitExpression(this,ctx);ctx.println(stmt,';');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitCommentStmt',value:function visitCommentStmt(stmt,ctx){var/** @type {?} */lines=stmt.comment.split('\n');lines.forEach(function(line){ctx.println(stmt,'// '+line);});return null;}/**
     * @abstract
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareVarStmt',value:function visitDeclareVarStmt(stmt,ctx){}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitWriteVarExpr',value:function visitWriteVarExpr(expr,ctx){var/** @type {?} */lineWasEmpty=ctx.lineIsEmpty();if(!lineWasEmpty){ctx.print(expr,'(');}ctx.print(expr,expr.name+' = ');expr.value.visitExpression(this,ctx);if(!lineWasEmpty){ctx.print(expr,')');}return null;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitWriteKeyExpr',value:function visitWriteKeyExpr(expr,ctx){var/** @type {?} */lineWasEmpty=ctx.lineIsEmpty();if(!lineWasEmpty){ctx.print(expr,'(');}expr.receiver.visitExpression(this,ctx);ctx.print(expr,'[');expr.index.visitExpression(this,ctx);ctx.print(expr,'] = ');expr.value.visitExpression(this,ctx);if(!lineWasEmpty){ctx.print(expr,')');}return null;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitWritePropExpr',value:function visitWritePropExpr(expr,ctx){var/** @type {?} */lineWasEmpty=ctx.lineIsEmpty();if(!lineWasEmpty){ctx.print(expr,'(');}expr.receiver.visitExpression(this,ctx);ctx.print(expr,'.'+expr.name+' = ');expr.value.visitExpression(this,ctx);if(!lineWasEmpty){ctx.print(expr,')');}return null;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInvokeMethodExpr',value:function visitInvokeMethodExpr(expr,ctx){expr.receiver.visitExpression(this,ctx);var/** @type {?} */name=expr.name;if(isPresent(expr.builtin)){name=this.getBuiltinMethodName(expr.builtin);if(isBlank(name)){// some builtins just mean to skip the call.
return null;}}ctx.print(expr,'.'+name+'(');this.visitAllExpressions(expr.args,ctx,',');ctx.print(expr,')');return null;}/**
     * @abstract
     * @param {?} method
     * @return {?}
     */},{key:'getBuiltinMethodName',value:function getBuiltinMethodName(method){}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInvokeFunctionExpr',value:function visitInvokeFunctionExpr(expr,ctx){expr.fn.visitExpression(this,ctx);ctx.print(expr,'(');this.visitAllExpressions(expr.args,ctx,',');ctx.print(expr,')');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadVarExpr',value:function visitReadVarExpr(ast,ctx){var/** @type {?} */varName=ast.name;if(isPresent(ast.builtin)){switch(ast.builtin){case BuiltinVar.Super:varName='super';break;case BuiltinVar.This:varName='this';break;case BuiltinVar.CatchError:varName=CATCH_ERROR_VAR$1.name;break;case BuiltinVar.CatchStack:varName=CATCH_STACK_VAR$1.name;break;default:throw new Error('Unknown builtin variable '+ast.builtin);}}ctx.print(ast,varName);return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInstantiateExpr',value:function visitInstantiateExpr(ast,ctx){ctx.print(ast,'new ');ast.classExpr.visitExpression(this,ctx);ctx.print(ast,'(');this.visitAllExpressions(ast.args,ctx,',');ctx.print(ast,')');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralExpr',value:function visitLiteralExpr(ast,ctx){var/** @type {?} */value=ast.value;if(typeof value==='string'){ctx.print(ast,escapeIdentifier(value,this._escapeDollarInStrings));}else{ctx.print(ast,''+value);}return null;}/**
     * @abstract
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitExternalExpr',value:function visitExternalExpr(ast,ctx){}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitConditionalExpr',value:function visitConditionalExpr(ast,ctx){ctx.print(ast,'(');ast.condition.visitExpression(this,ctx);ctx.print(ast,'? ');ast.trueCase.visitExpression(this,ctx);ctx.print(ast,': ');ast.falseCase.visitExpression(this,ctx);ctx.print(ast,')');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitNotExpr',value:function visitNotExpr(ast,ctx){ctx.print(ast,'!');ast.condition.visitExpression(this,ctx);return null;}/**
     * @abstract
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitFunctionExpr',value:function visitFunctionExpr(ast,ctx){}/**
     * @abstract
     * @param {?} stmt
     * @param {?} context
     * @return {?}
     */},{key:'visitDeclareFunctionStmt',value:function visitDeclareFunctionStmt(stmt,context){}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitBinaryOperatorExpr',value:function visitBinaryOperatorExpr(ast,ctx){var/** @type {?} */opStr=void 0;switch(ast.operator){case BinaryOperator.Equals:opStr='==';break;case BinaryOperator.Identical:opStr='===';break;case BinaryOperator.NotEquals:opStr='!=';break;case BinaryOperator.NotIdentical:opStr='!==';break;case BinaryOperator.And:opStr='&&';break;case BinaryOperator.Or:opStr='||';break;case BinaryOperator.Plus:opStr='+';break;case BinaryOperator.Minus:opStr='-';break;case BinaryOperator.Divide:opStr='/';break;case BinaryOperator.Multiply:opStr='*';break;case BinaryOperator.Modulo:opStr='%';break;case BinaryOperator.Lower:opStr='<';break;case BinaryOperator.LowerEquals:opStr='<=';break;case BinaryOperator.Bigger:opStr='>';break;case BinaryOperator.BiggerEquals:opStr='>=';break;default:throw new Error('Unknown operator '+ast.operator);}ctx.print(ast,'(');ast.lhs.visitExpression(this,ctx);ctx.print(ast,' '+opStr+' ');ast.rhs.visitExpression(this,ctx);ctx.print(ast,')');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadPropExpr',value:function visitReadPropExpr(ast,ctx){ast.receiver.visitExpression(this,ctx);ctx.print(ast,'.');ctx.print(ast,ast.name);return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadKeyExpr',value:function visitReadKeyExpr(ast,ctx){ast.receiver.visitExpression(this,ctx);ctx.print(ast,'[');ast.index.visitExpression(this,ctx);ctx.print(ast,']');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralArrayExpr',value:function visitLiteralArrayExpr(ast,ctx){var/** @type {?} */useNewLine=ast.entries.length>1;ctx.print(ast,'[',useNewLine);ctx.incIndent();this.visitAllExpressions(ast.entries,ctx,',',useNewLine);ctx.decIndent();ctx.print(ast,']',useNewLine);return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralMapExpr',value:function visitLiteralMapExpr(ast,ctx){var _this186=this;var/** @type {?} */useNewLine=ast.entries.length>1;ctx.print(ast,'{',useNewLine);ctx.incIndent();this.visitAllObjects(function(entry){ctx.print(ast,escapeIdentifier(entry.key,_this186._escapeDollarInStrings,entry.quoted)+': ');entry.value.visitExpression(_this186,ctx);},ast.entries,ctx,',',useNewLine);ctx.decIndent();ctx.print(ast,'}',useNewLine);return null;}/**
     * @param {?} expressions
     * @param {?} ctx
     * @param {?} separator
     * @param {?=} newLine
     * @return {?}
     */},{key:'visitAllExpressions',value:function visitAllExpressions(expressions,ctx,separator){var _this187=this;var newLine=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;this.visitAllObjects(function(expr){return expr.visitExpression(_this187,ctx);},expressions,ctx,separator,newLine);}/**
     * @param {?} handler
     * @param {?} expressions
     * @param {?} ctx
     * @param {?} separator
     * @param {?=} newLine
     * @return {?}
     */},{key:'visitAllObjects',value:function visitAllObjects(handler,expressions,ctx,separator){var newLine=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;for(var/** @type {?} */i=0;i<expressions.length;i++){if(i>0){ctx.print(null,separator,newLine);}handler(expressions[i]);}if(newLine){ctx.println();}}/**
     * @param {?} statements
     * @param {?} ctx
     * @return {?}
     */},{key:'visitAllStatements',value:function visitAllStatements(statements,ctx){var _this188=this;statements.forEach(function(stmt){return stmt.visitStatement(_this188,ctx);});}}]);return AbstractEmitterVisitor;}();/**
 * @param {?} input
 * @param {?} escapeDollar
 * @param {?=} alwaysQuote
 * @return {?}
 */function escapeIdentifier(input,escapeDollar){var alwaysQuote=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(isBlank(input)){return null;}var/** @type {?} */body=input.replace(_SINGLE_QUOTE_ESCAPE_STRING_RE,function(){if((arguments.length<=0?undefined:arguments[0])=='$'){return escapeDollar?'\\$':'$';}else if((arguments.length<=0?undefined:arguments[0])=='\n'){return'\\n';}else if((arguments.length<=0?undefined:arguments[0])=='\r'){return'\\r';}else{return'\\'+(arguments.length<=0?undefined:arguments[0]);}});var/** @type {?} */requiresQuotes=alwaysQuote||!_LEGAL_IDENTIFIER_RE.test(body);return requiresQuotes?'\''+body+'\'':body;}/**
 * @param {?} count
 * @return {?}
 */function _createIndent(count){var/** @type {?} */res='';for(var/** @type {?} */i=0;i<count;i++){res+=_INDENT_WITH;}return res;}var/** @type {?} */_debugFilePath='/debug/lib';/**
 * @param {?} ast
 * @return {?}
 */function debugOutputAstAsTypeScript(ast){var/** @type {?} */converter=new _TsEmitterVisitor(_debugFilePath,{/**
         * @param {?} filePath
         * @param {?} containingFilePath
         * @return {?}
         */fileNameToModuleName:function fileNameToModuleName(filePath,containingFilePath){return filePath;},/**
         * @param {?} symbol
         * @return {?}
         */getImportAs:function getImportAs(symbol){return null;},getTypeArity:function getTypeArity(symbol){return null;}});var/** @type {?} */ctx=EmitterVisitorContext.createRoot([]);var/** @type {?} */asts=Array.isArray(ast)?ast:[ast];asts.forEach(function(ast){if(ast instanceof Statement){ast.visitStatement(converter,ctx);}else if(ast instanceof Expression){ast.visitExpression(converter,ctx);}else if(ast instanceof Type$1){ast.visitType(converter,ctx);}else{throw new Error('Don\'t know how to print debug info for '+ast);}});return ctx.toSource();}var TypeScriptEmitter=function(){/**
     * @param {?} _importResolver
     */function TypeScriptEmitter(_importResolver){_classCallCheck(this,TypeScriptEmitter);this._importResolver=_importResolver;}/**
     * @param {?} genFilePath
     * @param {?} stmts
     * @param {?} exportedVars
     * @return {?}
     */_createClass(TypeScriptEmitter,[{key:'emitStatements',value:function emitStatements(genFilePath,stmts,exportedVars){var _this189=this;var/** @type {?} */converter=new _TsEmitterVisitor(genFilePath,this._importResolver);var/** @type {?} */ctx=EmitterVisitorContext.createRoot(exportedVars);converter.visitAllStatements(stmts,ctx);var/** @type {?} */srcParts=[];converter.reexports.forEach(function(reexports,exportedFilePath){var/** @type {?} */reexportsCode=reexports.map(function(reexport){return reexport.name+' as '+reexport.as;}).join(',');srcParts.push('export {'+reexportsCode+'} from \''+_this189._importResolver.fileNameToModuleName(exportedFilePath,genFilePath)+'\';');});converter.importsWithPrefixes.forEach(function(prefix,importedFilePath){// Note: can't write the real word for import as it screws up system.js auto detection...
srcParts.push('imp'+('ort * as '+prefix+' from \''+_this189._importResolver.fileNameToModuleName(importedFilePath,genFilePath)+'\';'));});srcParts.push(ctx.toSource());var/** @type {?} */prefixLines=converter.reexports.size+converter.importsWithPrefixes.size;var/** @type {?} */sm=ctx.toSourceMapGenerator(null,prefixLines).toJsComment();if(sm){srcParts.push(sm);}return srcParts.join('\n');}}]);return TypeScriptEmitter;}();var _TsEmitterVisitor=function(_AbstractEmitterVisit){_inherits(_TsEmitterVisitor,_AbstractEmitterVisit);/**
     * @param {?} _genFilePath
     * @param {?} _importResolver
     */function _TsEmitterVisitor(_genFilePath,_importResolver){_classCallCheck(this,_TsEmitterVisitor);var _this190=_possibleConstructorReturn(this,(_TsEmitterVisitor.__proto__||Object.getPrototypeOf(_TsEmitterVisitor)).call(this,false));_this190._genFilePath=_genFilePath;_this190._importResolver=_importResolver;_this190.typeExpression=0;_this190.importsWithPrefixes=new Map();_this190.reexports=new Map();return _this190;}/**
     * @param {?} t
     * @param {?} ctx
     * @param {?=} defaultType
     * @return {?}
     */_createClass(_TsEmitterVisitor,[{key:'visitType',value:function visitType(t,ctx){var defaultType=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'any';if(isPresent(t)){this.typeExpression++;t.visitType(this,ctx);this.typeExpression--;}else{ctx.print(null,defaultType);}}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralExpr',value:function visitLiteralExpr(ast,ctx){var/** @type {?} */value=ast.value;if(isBlank(value)&&ast.type!=INFERRED_TYPE){ctx.print(ast,'('+value+' as any)');return null;}return _get(_TsEmitterVisitor.prototype.__proto__||Object.getPrototypeOf(_TsEmitterVisitor.prototype),'visitLiteralExpr',this).call(this,ast,ctx);}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralArrayExpr',value:function visitLiteralArrayExpr(ast,ctx){if(ast.entries.length===0){ctx.print(ast,'(');}var/** @type {?} */result=_get(_TsEmitterVisitor.prototype.__proto__||Object.getPrototypeOf(_TsEmitterVisitor.prototype),'visitLiteralArrayExpr',this).call(this,ast,ctx);if(ast.entries.length===0){ctx.print(ast,' as any[])');}return result;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitExternalExpr',value:function visitExternalExpr(ast,ctx){this._visitIdentifier(ast.value,ast.typeParams,ctx);return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareVarStmt',value:function visitDeclareVarStmt(stmt,ctx){if(ctx.isExportedVar(stmt.name)&&stmt.value instanceof ExternalExpr&&!stmt.type){// check for a reexport
var _resolveStaticSymbol2=this._resolveStaticSymbol(stmt.value.value),name=_resolveStaticSymbol2.name,filePath=_resolveStaticSymbol2.filePath,members=_resolveStaticSymbol2.members;if(members.length===0&&filePath!==this._genFilePath){var/** @type {?} */reexports=this.reexports.get(filePath);if(!reexports){reexports=[];this.reexports.set(filePath,reexports);}reexports.push({name:name,as:stmt.name});return null;}}if(ctx.isExportedVar(stmt.name)){ctx.print(stmt,'export ');}if(stmt.hasModifier(StmtModifier.Final)){ctx.print(stmt,'const');}else{ctx.print(stmt,'var');}ctx.print(stmt,' '+stmt.name);this._printColonType(stmt.type,ctx);ctx.print(stmt,' = ');stmt.value.visitExpression(this,ctx);ctx.println(stmt,';');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitCastExpr',value:function visitCastExpr(ast,ctx){ctx.print(ast,'(<');ast.type.visitType(this,ctx);ctx.print(ast,'>');ast.value.visitExpression(this,ctx);ctx.print(ast,')');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInstantiateExpr',value:function visitInstantiateExpr(ast,ctx){ctx.print(ast,'new ');this.typeExpression++;ast.classExpr.visitExpression(this,ctx);this.typeExpression--;ctx.print(ast,'(');this.visitAllExpressions(ast.args,ctx,',');ctx.print(ast,')');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareClassStmt',value:function visitDeclareClassStmt(stmt,ctx){var _this191=this;ctx.pushClass(stmt);if(ctx.isExportedVar(stmt.name)){ctx.print(stmt,'export ');}ctx.print(stmt,'class '+stmt.name);if(isPresent(stmt.parent)){ctx.print(stmt,' extends ');this.typeExpression++;stmt.parent.visitExpression(this,ctx);this.typeExpression--;}ctx.println(stmt,' {');ctx.incIndent();stmt.fields.forEach(function(field){return _this191._visitClassField(field,ctx);});if(isPresent(stmt.constructorMethod)){this._visitClassConstructor(stmt,ctx);}stmt.getters.forEach(function(getter){return _this191._visitClassGetter(getter,ctx);});stmt.methods.forEach(function(method){return _this191._visitClassMethod(method,ctx);});ctx.decIndent();ctx.println(stmt,'}');ctx.popClass();return null;}/**
     * @param {?} field
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassField',value:function _visitClassField(field,ctx){if(field.hasModifier(StmtModifier.Private)){// comment out as a workaround for #10967
ctx.print(null,'/*private*/ ');}ctx.print(null,field.name);this._printColonType(field.type,ctx);ctx.println(null,';');}/**
     * @param {?} getter
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassGetter',value:function _visitClassGetter(getter,ctx){if(getter.hasModifier(StmtModifier.Private)){ctx.print(null,'private ');}ctx.print(null,'get '+getter.name+'()');this._printColonType(getter.type,ctx);ctx.println(null,' {');ctx.incIndent();this.visitAllStatements(getter.body,ctx);ctx.decIndent();ctx.println(null,'}');}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassConstructor',value:function _visitClassConstructor(stmt,ctx){ctx.print(stmt,'constructor(');this._visitParams(stmt.constructorMethod.params,ctx);ctx.println(stmt,') {');ctx.incIndent();this.visitAllStatements(stmt.constructorMethod.body,ctx);ctx.decIndent();ctx.println(stmt,'}');}/**
     * @param {?} method
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassMethod',value:function _visitClassMethod(method,ctx){if(method.hasModifier(StmtModifier.Private)){ctx.print(null,'private ');}ctx.print(null,method.name+'(');this._visitParams(method.params,ctx);ctx.print(null,')');this._printColonType(method.type,ctx,'void');ctx.println(null,' {');ctx.incIndent();this.visitAllStatements(method.body,ctx);ctx.decIndent();ctx.println(null,'}');}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitFunctionExpr',value:function visitFunctionExpr(ast,ctx){ctx.print(ast,'(');this._visitParams(ast.params,ctx);ctx.print(ast,')');this._printColonType(ast.type,ctx,'void');ctx.println(ast,' => {');ctx.incIndent();this.visitAllStatements(ast.statements,ctx);ctx.decIndent();ctx.print(ast,'}');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareFunctionStmt',value:function visitDeclareFunctionStmt(stmt,ctx){if(ctx.isExportedVar(stmt.name)){ctx.print(stmt,'export ');}ctx.print(stmt,'function '+stmt.name+'(');this._visitParams(stmt.params,ctx);ctx.print(stmt,')');this._printColonType(stmt.type,ctx,'void');ctx.println(stmt,' {');ctx.incIndent();this.visitAllStatements(stmt.statements,ctx);ctx.decIndent();ctx.println(stmt,'}');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitTryCatchStmt',value:function visitTryCatchStmt(stmt,ctx){ctx.println(stmt,'try {');ctx.incIndent();this.visitAllStatements(stmt.bodyStmts,ctx);ctx.decIndent();ctx.println(stmt,'} catch ('+CATCH_ERROR_VAR$1.name+') {');ctx.incIndent();var/** @type {?} */catchStmts=[/** @type {?} */CATCH_STACK_VAR$1.set(CATCH_ERROR_VAR$1.prop('stack')).toDeclStmt(null,[StmtModifier.Final])].concat(stmt.catchStmts);this.visitAllStatements(catchStmts,ctx);ctx.decIndent();ctx.println(stmt,'}');return null;}/**
     * @param {?} type
     * @param {?} ctx
     * @return {?}
     */},{key:'visitBuiltintType',value:function visitBuiltintType(type,ctx){var/** @type {?} */typeStr=void 0;switch(type.name){case BuiltinTypeName.Bool:typeStr='boolean';break;case BuiltinTypeName.Dynamic:typeStr='any';break;case BuiltinTypeName.Function:typeStr='Function';break;case BuiltinTypeName.Number:typeStr='number';break;case BuiltinTypeName.Int:typeStr='number';break;case BuiltinTypeName.String:typeStr='string';break;default:throw new Error('Unsupported builtin type '+type.name);}ctx.print(null,typeStr);return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitExpressionType',value:function visitExpressionType(ast,ctx){ast.value.visitExpression(this,ctx);return null;}/**
     * @param {?} type
     * @param {?} ctx
     * @return {?}
     */},{key:'visitArrayType',value:function visitArrayType(type,ctx){this.visitType(type.of,ctx);ctx.print(null,'[]');return null;}/**
     * @param {?} type
     * @param {?} ctx
     * @return {?}
     */},{key:'visitMapType',value:function visitMapType(type,ctx){ctx.print(null,'{[key: string]:');this.visitType(type.valueType,ctx);ctx.print(null,'}');return null;}/**
     * @param {?} method
     * @return {?}
     */},{key:'getBuiltinMethodName',value:function getBuiltinMethodName(method){var/** @type {?} */name=void 0;switch(method){case BuiltinMethod.ConcatArray:name='concat';break;case BuiltinMethod.SubscribeObservable:name='subscribe';break;case BuiltinMethod.Bind:name='bind';break;default:throw new Error('Unknown builtin method: '+method);}return name;}/**
     * @param {?} params
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitParams',value:function _visitParams(params,ctx){var _this192=this;this.visitAllObjects(function(param){ctx.print(null,param.name);_this192._printColonType(param.type,ctx);},params,ctx,',');}/**
     * @param {?} value
     * @return {?}
     */},{key:'_resolveStaticSymbol',value:function _resolveStaticSymbol(value){var/** @type {?} */reference=value.reference;if(!(reference instanceof StaticSymbol)){throw new Error('Internal error: unknown identifier '+JSON.stringify(value));}var/** @type {?} */arity=this._importResolver.getTypeArity(reference)||undefined;var/** @type {?} */importReference=this._importResolver.getImportAs(reference)||reference;return{name:importReference.name,filePath:importReference.filePath,members:importReference.members,arity:arity};}/**
     * @param {?} value
     * @param {?} typeParams
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitIdentifier',value:function _visitIdentifier(value,typeParams,ctx){var _this193=this;var _resolveStaticSymbol3=this._resolveStaticSymbol(value),name=_resolveStaticSymbol3.name,filePath=_resolveStaticSymbol3.filePath,members=_resolveStaticSymbol3.members,arity=_resolveStaticSymbol3.arity;if(filePath!=this._genFilePath){var/** @type {?} */prefix=this.importsWithPrefixes.get(filePath);if(isBlank(prefix)){prefix='import'+this.importsWithPrefixes.size;this.importsWithPrefixes.set(filePath,prefix);}ctx.print(null,prefix+'.');}if(members.length){ctx.print(null,name);ctx.print(null,'.');ctx.print(null,members.join('.'));}else{ctx.print(null,name);}if(this.typeExpression>0){// If we are in a type expression that refers to a generic type then supply
// the required type parameters. If there were not enough type parameters
// supplied, supply any as the type. Outside a type expression the reference
// should not supply type parameters and be treated as a simple value reference
// to the constructor function itself.
var/** @type {?} */suppliedParameters=typeParams&&typeParams.length||0;var/** @type {?} */additionalParameters=(arity||0)-suppliedParameters;if(suppliedParameters>0||additionalParameters>0){ctx.print(null,'<');if(suppliedParameters>0){this.visitAllObjects(function(type){return type.visitType(_this193,ctx);},typeParams,ctx,',');}if(additionalParameters>0){for(var/** @type {?} */i=0;i<additionalParameters;i++){if(i>0||suppliedParameters>0)ctx.print(null,',');ctx.print(null,'any');}}ctx.print(null,'>');}}}/**
     * @param {?} type
     * @param {?} ctx
     * @param {?=} defaultType
     * @return {?}
     */},{key:'_printColonType',value:function _printColonType(type,ctx,defaultType){if(type!==INFERRED_TYPE){ctx.print(null,':');this.visitType(type,ctx,defaultType);}}}]);return _TsEmitterVisitor;}(AbstractEmitterVisitor);// =================================================================================================
// =================================================================================================
// =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
// =================================================================================================
// =================================================================================================
//
//        DO NOT EDIT THIS LIST OF SECURITY SENSITIVE PROPERTIES WITHOUT A SECURITY REVIEW!
//                               Reach out to mprobst for details.
//
// =================================================================================================
/** Map from tagName|propertyName SecurityContext. Properties applying to all tags use '*'. */var/** @type {?} */SECURITY_SCHEMA={};/**
 * @param {?} ctx
 * @param {?} specs
 * @return {?}
 */function registerContext(ctx,specs){var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=specs[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var spec=_step4.value;SECURITY_SCHEMA[spec.toLowerCase()]=ctx;}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}}// Case is insignificant below, all element and attribute names are lower-cased for lookup.
registerContext(SecurityContext.HTML,['iframe|srcdoc','*|innerHTML','*|outerHTML']);registerContext(SecurityContext.STYLE,['*|style']);// NB: no SCRIPT contexts here, they are never allowed due to the parser stripping them.
registerContext(SecurityContext.URL,['*|formAction','area|href','area|ping','audio|src','a|href','a|ping','blockquote|cite','body|background','del|cite','form|action','img|src','img|srcset','input|src','ins|cite','q|cite','source|src','source|srcset','track|src','video|poster','video|src']);registerContext(SecurityContext.RESOURCE_URL,['applet|code','applet|codebase','base|href','embed|src','frame|src','head|profile','html|manifest','iframe|src','link|href','media|src','object|codebase','object|data','script|src']);var/** @type {?} */BOOLEAN='boolean';var/** @type {?} */NUMBER='number';var/** @type {?} */STRING='string';var/** @type {?} */OBJECT='object';/**
 * This array represents the DOM schema. It encodes inheritance, properties, and events.
 *
 * ## Overview
 *
 * Each line represents one kind of element. The `element_inheritance` and properties are joined
 * using `element_inheritance|properties` syntax.
 *
 * ## Element Inheritance
 *
 * The `element_inheritance` can be further subdivided as `element1,element2,...^parentElement`.
 * Here the individual elements are separated by `,` (commas). Every element in the list
 * has identical properties.
 *
 * An `element` may inherit additional properties from `parentElement` If no `^parentElement` is
 * specified then `""` (blank) element is assumed.
 *
 * NOTE: The blank element inherits from root `[Element]` element, the super element of all
 * elements.
 *
 * NOTE an element prefix such as `:svg:` has no special meaning to the schema.
 *
 * ## Properties
 *
 * Each element has a set of properties separated by `,` (commas). Each property can be prefixed
 * by a special character designating its type:
 *
 * - (no prefix): property is a string.
 * - `*`: property represents an event.
 * - `!`: property is a boolean.
 * - `#`: property is a number.
 * - `%`: property is an object.
 *
 * ## Query
 *
 * The class creates an internal squas representation which allows to easily answer the query of
 * if a given property exist on a given element.
 *
 * NOTE: We don't yet support querying for types or events.
 * NOTE: This schema is auto extracted from `schema_extractor.ts` located in the test folder,
 *       see dom_element_schema_registry_spec.ts
 */// =================================================================================================
// =================================================================================================
// =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
// =================================================================================================
// =================================================================================================
//
//                       DO NOT EDIT THIS DOM SCHEMA WITHOUT A SECURITY REVIEW!
//
// Newly added properties must be security reviewed and assigned an appropriate SecurityContext in
// dom_security_schema.ts. Reach out to mprobst & rjamet for details.
//
// =================================================================================================
var/** @type {?} */SCHEMA=['[Element]|textContent,%classList,className,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*copy,*cut,*paste,*search,*selectstart,*webkitfullscreenchange,*webkitfullscreenerror,*wheel,outerHTML,#scrollLeft,#scrollTop','[HTMLElement]^[Element]|accessKey,contentEditable,dir,!draggable,!hidden,innerText,lang,*abort,*beforecopy,*beforecut,*beforepaste,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*message,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*paste,*pause,*play,*playing,*progress,*ratechange,*reset,*resize,*scroll,*search,*seeked,*seeking,*select,*selectstart,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored,*webkitfullscreenchange,*webkitfullscreenerror,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate','abbr,address,article,aside,b,bdi,bdo,cite,code,dd,dfn,dt,em,figcaption,figure,footer,header,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,contentEditable,dir,!draggable,!hidden,innerText,lang,*abort,*beforecopy,*beforecut,*beforepaste,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*message,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*paste,*pause,*play,*playing,*progress,*ratechange,*reset,*resize,*scroll,*search,*seeked,*seeking,*select,*selectstart,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored,*webkitfullscreenchange,*webkitfullscreenerror,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate','media^[HTMLElement]|!autoplay,!controls,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,#playbackRate,preload,src,%srcObject,#volume',':svg:^[HTMLElement]|*abort,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,%style,#tabIndex',':svg:graphics^:svg:|',':svg:animation^:svg:|*begin,*end,*repeat',':svg:geometry^:svg:|',':svg:componentTransferFunction^:svg:|',':svg:gradient^:svg:|',':svg:textContent^:svg:graphics|',':svg:textPositioning^:svg:textContent|','a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,rev,search,shape,target,text,type,username','area^[HTMLElement]|alt,coords,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,search,shape,target,username','audio^media|','br^[HTMLElement]|clear','base^[HTMLElement]|href,target','body^[HTMLElement]|aLink,background,bgColor,link,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink','button^[HTMLElement]|!autofocus,!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value','canvas^[HTMLElement]|#height,#width','content^[HTMLElement]|select','dl^[HTMLElement]|!compact','datalist^[HTMLElement]|','details^[HTMLElement]|!open','dialog^[HTMLElement]|!open,returnValue','dir^[HTMLElement]|!compact','div^[HTMLElement]|align','embed^[HTMLElement]|align,height,name,src,type,width','fieldset^[HTMLElement]|!disabled,name','font^[HTMLElement]|color,face,size','form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target','frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src','frameset^[HTMLElement]|cols,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows','hr^[HTMLElement]|align,color,!noShade,size,width','head^[HTMLElement]|','h1,h2,h3,h4,h5,h6^[HTMLElement]|align','html^[HTMLElement]|version','iframe^[HTMLElement]|align,!allowFullscreen,frameBorder,height,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width','img^[HTMLElement]|align,alt,border,%crossOrigin,#height,#hspace,!isMap,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width','input^[HTMLElement]|accept,align,alt,autocapitalize,autocomplete,!autofocus,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width','keygen^[HTMLElement]|!autofocus,challenge,!disabled,keytype,name','li^[HTMLElement]|type,#value','label^[HTMLElement]|htmlFor','legend^[HTMLElement]|align','link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,integrity,media,rel,%relList,rev,%sizes,target,type','map^[HTMLElement]|name','marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width','menu^[HTMLElement]|!compact','meta^[HTMLElement]|content,httpEquiv,name,scheme','meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value','ins,del^[HTMLElement]|cite,dateTime','ol^[HTMLElement]|!compact,!reversed,#start,type','object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width','optgroup^[HTMLElement]|!disabled,label','option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value','output^[HTMLElement]|defaultValue,%htmlFor,name,value','p^[HTMLElement]|align','param^[HTMLElement]|name,type,value,valueType','picture^[HTMLElement]|','pre^[HTMLElement]|#width','progress^[HTMLElement]|#max,#value','q,blockquote,cite^[HTMLElement]|','script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,src,text,type','select^[HTMLElement]|!autofocus,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value','shadow^[HTMLElement]|','source^[HTMLElement]|media,sizes,src,srcset,type','span^[HTMLElement]|','style^[HTMLElement]|!disabled,media,type','caption^[HTMLElement]|align','th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width','col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width','table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width','tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign','tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign','template^[HTMLElement]|','textarea^[HTMLElement]|autocapitalize,!autofocus,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap','title^[HTMLElement]|text','track^[HTMLElement]|!default,kind,label,src,srclang','ul^[HTMLElement]|!compact,type','unknown^[HTMLElement]|','video^media|#height,poster,#width',':svg:a^:svg:graphics|',':svg:animate^:svg:animation|',':svg:animateMotion^:svg:animation|',':svg:animateTransform^:svg:animation|',':svg:circle^:svg:geometry|',':svg:clipPath^:svg:graphics|',':svg:cursor^:svg:|',':svg:defs^:svg:graphics|',':svg:desc^:svg:|',':svg:discard^:svg:|',':svg:ellipse^:svg:geometry|',':svg:feBlend^:svg:|',':svg:feColorMatrix^:svg:|',':svg:feComponentTransfer^:svg:|',':svg:feComposite^:svg:|',':svg:feConvolveMatrix^:svg:|',':svg:feDiffuseLighting^:svg:|',':svg:feDisplacementMap^:svg:|',':svg:feDistantLight^:svg:|',':svg:feDropShadow^:svg:|',':svg:feFlood^:svg:|',':svg:feFuncA^:svg:componentTransferFunction|',':svg:feFuncB^:svg:componentTransferFunction|',':svg:feFuncG^:svg:componentTransferFunction|',':svg:feFuncR^:svg:componentTransferFunction|',':svg:feGaussianBlur^:svg:|',':svg:feImage^:svg:|',':svg:feMerge^:svg:|',':svg:feMergeNode^:svg:|',':svg:feMorphology^:svg:|',':svg:feOffset^:svg:|',':svg:fePointLight^:svg:|',':svg:feSpecularLighting^:svg:|',':svg:feSpotLight^:svg:|',':svg:feTile^:svg:|',':svg:feTurbulence^:svg:|',':svg:filter^:svg:|',':svg:foreignObject^:svg:graphics|',':svg:g^:svg:graphics|',':svg:image^:svg:graphics|',':svg:line^:svg:geometry|',':svg:linearGradient^:svg:gradient|',':svg:mpath^:svg:|',':svg:marker^:svg:|',':svg:mask^:svg:|',':svg:metadata^:svg:|',':svg:path^:svg:geometry|',':svg:pattern^:svg:|',':svg:polygon^:svg:geometry|',':svg:polyline^:svg:geometry|',':svg:radialGradient^:svg:gradient|',':svg:rect^:svg:geometry|',':svg:svg^:svg:graphics|#currentScale,#zoomAndPan',':svg:script^:svg:|type',':svg:set^:svg:animation|',':svg:stop^:svg:|',':svg:style^:svg:|!disabled,media,title,type',':svg:switch^:svg:graphics|',':svg:symbol^:svg:|',':svg:tspan^:svg:textPositioning|',':svg:text^:svg:textPositioning|',':svg:textPath^:svg:textContent|',':svg:title^:svg:|',':svg:use^:svg:graphics|',':svg:view^:svg:|#zoomAndPan','data^[HTMLElement]|value','menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default','summary^[HTMLElement]|','time^[HTMLElement]|dateTime'];var/** @type {?} */_ATTR_TO_PROP={'class':'className','for':'htmlFor','formaction':'formAction','innerHtml':'innerHTML','readonly':'readOnly','tabindex':'tabIndex'};var DomElementSchemaRegistry=function(_ElementSchemaRegistr){_inherits(DomElementSchemaRegistry,_ElementSchemaRegistr);function DomElementSchemaRegistry(){_classCallCheck(this,DomElementSchemaRegistry);var _this194=_possibleConstructorReturn(this,(DomElementSchemaRegistry.__proto__||Object.getPrototypeOf(DomElementSchemaRegistry)).call(this));_this194._schema={};SCHEMA.forEach(function(encodedType){var type={};var _encodedType$split=encodedType.split('|'),_encodedType$split2=_slicedToArray(_encodedType$split,2),strType=_encodedType$split2[0],strProperties=_encodedType$split2[1];var properties=strProperties.split(',');var _strType$split=strType.split('^'),_strType$split2=_slicedToArray(_strType$split,2),typeNames=_strType$split2[0],superName=_strType$split2[1];typeNames.split(',').forEach(function(tag){return _this194._schema[tag.toLowerCase()]=type;});var superType=superName&&_this194._schema[superName.toLowerCase()];if(superType){Object.keys(superType).forEach(function(prop){type[prop]=superType[prop];});}properties.forEach(function(property){if(property.length>0){switch(property[0]){case'*':// We don't yet support events.
// If ever allowing to bind to events, GO THROUGH A SECURITY REVIEW, allowing events
// will
// almost certainly introduce bad XSS vulnerabilities.
// type[property.substring(1)] = EVENT;
break;case'!':type[property.substring(1)]=BOOLEAN;break;case'#':type[property.substring(1)]=NUMBER;break;case'%':type[property.substring(1)]=OBJECT;break;default:type[property]=STRING;}}});});return _this194;}/**
     * @param {?} tagName
     * @param {?} propName
     * @param {?} schemaMetas
     * @return {?}
     */_createClass(DomElementSchemaRegistry,[{key:'hasProperty',value:function hasProperty(tagName,propName,schemaMetas){if(schemaMetas.some(function(schema){return schema.name===NO_ERRORS_SCHEMA.name;})){return true;}if(tagName.indexOf('-')>-1){if(tagName==='ng-container'||tagName==='ng-content'){return false;}if(schemaMetas.some(function(schema){return schema.name===CUSTOM_ELEMENTS_SCHEMA.name;})){// Can't tell now as we don't know which properties a custom element will get
// once it is instantiated
return true;}}var/** @type {?} */elementProperties=this._schema[tagName.toLowerCase()]||this._schema['unknown'];return!!elementProperties[propName];}/**
     * @param {?} tagName
     * @param {?} schemaMetas
     * @return {?}
     */},{key:'hasElement',value:function hasElement(tagName,schemaMetas){if(schemaMetas.some(function(schema){return schema.name===NO_ERRORS_SCHEMA.name;})){return true;}if(tagName.indexOf('-')>-1){if(tagName==='ng-container'||tagName==='ng-content'){return true;}if(schemaMetas.some(function(schema){return schema.name===CUSTOM_ELEMENTS_SCHEMA.name;})){// Allow any custom elements
return true;}}return!!this._schema[tagName.toLowerCase()];}/**
     * securityContext returns the security context for the given property on the given DOM tag.
     *
     * Tag and property name are statically known and cannot change at runtime, i.e. it is not
     * possible to bind a value into a changing attribute or tag name.
     *
     * The filtering is white list based. All attributes in the schema above are assumed to have the
     * 'NONE' security context, i.e. that they are safe inert string values. Only specific well known
     * attack vectors are assigned their appropriate context.
     * @param {?} tagName
     * @param {?} propName
     * @param {?} isAttribute
     * @return {?}
     */},{key:'securityContext',value:function securityContext(tagName,propName,isAttribute){if(isAttribute){// NB: For security purposes, use the mapped property name, not the attribute name.
propName=this.getMappedPropName(propName);}// Make sure comparisons are case insensitive, so that case differences between attribute and
// property names do not have a security impact.
tagName=tagName.toLowerCase();propName=propName.toLowerCase();var/** @type {?} */ctx=SECURITY_SCHEMA[tagName+'|'+propName];if(ctx){return ctx;}ctx=SECURITY_SCHEMA['*|'+propName];return ctx?ctx:SecurityContext.NONE;}/**
     * @param {?} propName
     * @return {?}
     */},{key:'getMappedPropName',value:function getMappedPropName(propName){return _ATTR_TO_PROP[propName]||propName;}/**
     * @return {?}
     */},{key:'getDefaultComponentElementName',value:function getDefaultComponentElementName(){return'ng-component';}/**
     * @param {?} name
     * @return {?}
     */},{key:'validateProperty',value:function validateProperty(name){if(name.toLowerCase().startsWith('on')){var/** @type {?} */msg='Binding to event property \''+name+'\' is disallowed for security reasons, '+('please use ('+name.slice(2)+')=...')+('\nIf \''+name+'\' is a directive input, make sure the directive is imported by the')+' current module.';return{error:true,msg:msg};}else{return{error:false};}}/**
     * @param {?} name
     * @return {?}
     */},{key:'validateAttribute',value:function validateAttribute(name){if(name.toLowerCase().startsWith('on')){var/** @type {?} */msg='Binding to event attribute \''+name+'\' is disallowed for security reasons, '+('please use ('+name.slice(2)+')=...');return{error:true,msg:msg};}else{return{error:false};}}/**
     * @return {?}
     */},{key:'allKnownElementNames',value:function allKnownElementNames(){return Object.keys(this._schema);}/**
     * @param {?} propName
     * @return {?}
     */},{key:'normalizeAnimationStyleProperty',value:function normalizeAnimationStyleProperty(propName){return dashCaseToCamelCase(propName);}/**
     * @param {?} camelCaseProp
     * @param {?} userProvidedProp
     * @param {?} val
     * @return {?}
     */},{key:'normalizeAnimationStyleValue',value:function normalizeAnimationStyleValue(camelCaseProp,userProvidedProp,val){var/** @type {?} */unit='';var/** @type {?} */strVal=val.toString().trim();var/** @type {?} */errorMsg=null;if(_isPixelDimensionStyle(camelCaseProp)&&val!==0&&val!=='0'){if(typeof val==='number'){unit='px';}else{var/** @type {?} */valAndSuffixMatch=val.match(/^[+-]?[\d\.]+([a-z]*)$/);if(valAndSuffixMatch&&valAndSuffixMatch[1].length==0){errorMsg='Please provide a CSS unit value for '+userProvidedProp+':'+val;}}}return{error:errorMsg,value:strVal+unit};}}]);return DomElementSchemaRegistry;}(ElementSchemaRegistry);DomElementSchemaRegistry.decorators=[{type:CompilerInjectable}];/** @nocollapse */DomElementSchemaRegistry.ctorParameters=function(){return[];};/**
 * @param {?} prop
 * @return {?}
 */function _isPixelDimensionStyle(prop){switch(prop){case'width':case'height':case'minWidth':case'minHeight':case'maxWidth':case'maxHeight':case'left':case'top':case'bottom':case'right':case'fontSize':case'outlineWidth':case'outlineOffset':case'paddingTop':case'paddingLeft':case'paddingBottom':case'paddingRight':case'marginTop':case'marginLeft':case'marginBottom':case'marginRight':case'borderRadius':case'borderWidth':case'borderTopWidth':case'borderLeftWidth':case'borderRightWidth':case'borderBottomWidth':case'textIndent':return true;default:return false;}}var ShadowCss=function(){function ShadowCss(){_classCallCheck(this,ShadowCss);this.strictStyling=true;}/**
     * @param {?} cssText
     * @param {?} selector
     * @param {?=} hostSelector
     * @return {?}
     */_createClass(ShadowCss,[{key:'shimCssText',value:function shimCssText(cssText,selector){var hostSelector=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var/** @type {?} */sourceMappingUrl=extractSourceMappingUrl(cssText);cssText=stripComments(cssText);cssText=this._insertDirectives(cssText);return this._scopeCssText(cssText,selector,hostSelector)+sourceMappingUrl;}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_insertDirectives',value:function _insertDirectives(cssText){cssText=this._insertPolyfillDirectivesInCssText(cssText);return this._insertPolyfillRulesInCssText(cssText);}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_insertPolyfillDirectivesInCssText',value:function _insertPolyfillDirectivesInCssText(cssText){// Difference with webcomponents.js: does not handle comments
return cssText.replace(_cssContentNextSelectorRe,function(){return(arguments.length<=2?undefined:arguments[2])+'{';});}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_insertPolyfillRulesInCssText',value:function _insertPolyfillRulesInCssText(cssText){// Difference with webcomponents.js: does not handle comments
return cssText.replace(_cssContentRuleRe,function(){for(var _len2=arguments.length,m=Array(_len2),_key2=0;_key2<_len2;_key2++){m[_key2]=arguments[_key2];}var/** @type {?} */rule=m[0].replace(m[1],'').replace(m[2],'');return m[4]+rule;});}/**
     * @param {?} cssText
     * @param {?} scopeSelector
     * @param {?} hostSelector
     * @return {?}
     */},{key:'_scopeCssText',value:function _scopeCssText(cssText,scopeSelector,hostSelector){var/** @type {?} */unscopedRules=this._extractUnscopedRulesFromCssText(cssText);// replace :host and :host-context -shadowcsshost and -shadowcsshost respectively
cssText=this._insertPolyfillHostInCssText(cssText);cssText=this._convertColonHost(cssText);cssText=this._convertColonHostContext(cssText);cssText=this._convertShadowDOMSelectors(cssText);if(scopeSelector){cssText=this._scopeSelectors(cssText,scopeSelector,hostSelector);}cssText=cssText+'\n'+unscopedRules;return cssText.trim();}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_extractUnscopedRulesFromCssText',value:function _extractUnscopedRulesFromCssText(cssText){// Difference with webcomponents.js: does not handle comments
var/** @type {?} */r='';var/** @type {?} */m=void 0;_cssContentUnscopedRuleRe.lastIndex=0;while((m=_cssContentUnscopedRuleRe.exec(cssText))!==null){var/** @type {?} */rule=m[0].replace(m[2],'').replace(m[1],m[4]);r+=rule+'\n\n';}return r;}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_convertColonHost',value:function _convertColonHost(cssText){return this._convertColonRule(cssText,_cssColonHostRe,this._colonHostPartReplacer);}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_convertColonHostContext',value:function _convertColonHostContext(cssText){return this._convertColonRule(cssText,_cssColonHostContextRe,this._colonHostContextPartReplacer);}/**
     * @param {?} cssText
     * @param {?} regExp
     * @param {?} partReplacer
     * @return {?}
     */},{key:'_convertColonRule',value:function _convertColonRule(cssText,regExp,partReplacer){// m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
return cssText.replace(regExp,function(){for(var _len3=arguments.length,m=Array(_len3),_key3=0;_key3<_len3;_key3++){m[_key3]=arguments[_key3];}if(m[2]){var/** @type {?} */parts=m[2].split(',');var/** @type {?} */r=[];for(var/** @type {?} */i=0;i<parts.length;i++){var/** @type {?} */p=parts[i].trim();if(!p)break;r.push(partReplacer(_polyfillHostNoCombinator,p,m[3]));}return r.join(',');}else{return _polyfillHostNoCombinator+m[3];}});}/**
     * @param {?} host
     * @param {?} part
     * @param {?} suffix
     * @return {?}
     */},{key:'_colonHostContextPartReplacer',value:function _colonHostContextPartReplacer(host,part,suffix){if(part.indexOf(_polyfillHost)>-1){return this._colonHostPartReplacer(host,part,suffix);}else{return host+part+suffix+', '+part+' '+host+suffix;}}/**
     * @param {?} host
     * @param {?} part
     * @param {?} suffix
     * @return {?}
     */},{key:'_colonHostPartReplacer',value:function _colonHostPartReplacer(host,part,suffix){return host+part.replace(_polyfillHost,'')+suffix;}/**
     * @param {?} cssText
     * @return {?}
     */},{key:'_convertShadowDOMSelectors',value:function _convertShadowDOMSelectors(cssText){return _shadowDOMSelectorsRe.reduce(function(result,pattern){return result.replace(pattern,' ');},cssText);}/**
     * @param {?} cssText
     * @param {?} scopeSelector
     * @param {?} hostSelector
     * @return {?}
     */},{key:'_scopeSelectors',value:function _scopeSelectors(cssText,scopeSelector,hostSelector){var _this195=this;return processRules(cssText,function(rule){var/** @type {?} */selector=rule.selector;var/** @type {?} */content=rule.content;if(rule.selector[0]!='@'){selector=_this195._scopeSelector(rule.selector,scopeSelector,hostSelector,_this195.strictStyling);}else if(rule.selector.startsWith('@media')||rule.selector.startsWith('@supports')||rule.selector.startsWith('@page')||rule.selector.startsWith('@document')){content=_this195._scopeSelectors(rule.content,scopeSelector,hostSelector);}return new CssRule(selector,content);});}/**
     * @param {?} selector
     * @param {?} scopeSelector
     * @param {?} hostSelector
     * @param {?} strict
     * @return {?}
     */},{key:'_scopeSelector',value:function _scopeSelector(selector,scopeSelector,hostSelector,strict){var _this196=this;return selector.split(',').map(function(part){return part.trim().split(_shadowDeepSelectors);}).map(function(deepParts){var _deepParts=_toArray(deepParts),shallowPart=_deepParts[0],otherParts=_deepParts.slice(1);var/** @type {?} */applyScope=function applyScope(shallowPart){if(_this196._selectorNeedsScoping(shallowPart,scopeSelector)){return strict?_this196._applyStrictSelectorScope(shallowPart,scopeSelector,hostSelector):_this196._applySelectorScope(shallowPart,scopeSelector,hostSelector);}else{return shallowPart;}};return[applyScope(shallowPart)].concat(_toConsumableArray(otherParts)).join(' ');}).join(', ');}/**
     * @param {?} selector
     * @param {?} scopeSelector
     * @return {?}
     */},{key:'_selectorNeedsScoping',value:function _selectorNeedsScoping(selector,scopeSelector){var/** @type {?} */re=this._makeScopeMatcher(scopeSelector);return!re.test(selector);}/**
     * @param {?} scopeSelector
     * @return {?}
     */},{key:'_makeScopeMatcher',value:function _makeScopeMatcher(scopeSelector){var/** @type {?} */lre=/\[/g;var/** @type {?} */rre=/\]/g;scopeSelector=scopeSelector.replace(lre,'\\[').replace(rre,'\\]');return new RegExp('^('+scopeSelector+')'+_selectorReSuffix,'m');}/**
     * @param {?} selector
     * @param {?} scopeSelector
     * @param {?} hostSelector
     * @return {?}
     */},{key:'_applySelectorScope',value:function _applySelectorScope(selector,scopeSelector,hostSelector){// Difference from webcomponents.js: scopeSelector could not be an array
return this._applySimpleSelectorScope(selector,scopeSelector,hostSelector);}/**
     * @param {?} selector
     * @param {?} scopeSelector
     * @param {?} hostSelector
     * @return {?}
     */},{key:'_applySimpleSelectorScope',value:function _applySimpleSelectorScope(selector,scopeSelector,hostSelector){// In Android browser, the lastIndex is not reset when the regex is used in String.replace()
_polyfillHostRe.lastIndex=0;if(_polyfillHostRe.test(selector)){var/** @type {?} */replaceBy=this.strictStyling?'['+hostSelector+']':scopeSelector;return selector.replace(_polyfillHostNoCombinatorRe,function(hnc,selector){return selector.replace(/([^:]*)(:*)(.*)/,function(_,before,colon,after){return before+replaceBy+colon+after;});}).replace(_polyfillHostRe,replaceBy+' ');}return scopeSelector+' '+selector;}/**
     * @param {?} selector
     * @param {?} scopeSelector
     * @param {?} hostSelector
     * @return {?}
     */},{key:'_applyStrictSelectorScope',value:function _applyStrictSelectorScope(selector,scopeSelector,hostSelector){var _this197=this;var/** @type {?} */isRe=/\[is=([^\]]*)\]/g;scopeSelector=scopeSelector.replace(isRe,function(_){return arguments.length<=1?undefined:arguments[1];});var/** @type {?} */attrName='['+scopeSelector+']';var/** @type {?} */_scopeSelectorPart=function _scopeSelectorPart(p){var/** @type {?} */scopedP=p.trim();if(!scopedP){return'';}if(p.indexOf(_polyfillHostNoCombinator)>-1){scopedP=_this197._applySimpleSelectorScope(p,scopeSelector,hostSelector);}else{// remove :host since it should be unnecessary
var/** @type {?} */t=p.replace(_polyfillHostRe,'');if(t.length>0){var/** @type {?} */matches=t.match(/([^:]*)(:*)(.*)/);if(matches){scopedP=matches[1]+attrName+matches[2]+matches[3];}}}return scopedP;};var/** @type {?} */safeContent=new SafeSelector(selector);selector=safeContent.content();var/** @type {?} */scopedSelector='';var/** @type {?} */startIndex=0;var/** @type {?} */res=void 0;var/** @type {?} */sep=/( |>|\+|~(?!=))\s*/g;var/** @type {?} */scopeAfter=selector.indexOf(_polyfillHostNoCombinator);while((res=sep.exec(selector))!==null){var/** @type {?} */separator=res[1];var/** @type {?} */part=selector.slice(startIndex,res.index).trim();// if a selector appears before :host-context it should not be shimmed as it
// matches on ancestor elements and not on elements in the host's shadow
var/** @type {?} */scopedPart=startIndex>=scopeAfter?_scopeSelectorPart(part):part;scopedSelector+=scopedPart+' '+separator+' ';startIndex=sep.lastIndex;}scopedSelector+=_scopeSelectorPart(selector.substring(startIndex));// replace the placeholders with their original values
return safeContent.restore(scopedSelector);}/**
     * @param {?} selector
     * @return {?}
     */},{key:'_insertPolyfillHostInCssText',value:function _insertPolyfillHostInCssText(selector){return selector.replace(_colonHostContextRe,_polyfillHostContext).replace(_colonHostRe,_polyfillHost);}}]);return ShadowCss;}();var SafeSelector=function(){/**
     * @param {?} selector
     */function SafeSelector(selector){var _this198=this;_classCallCheck(this,SafeSelector);this.placeholders=[];this.index=0;// Replaces attribute selectors with placeholders.
// The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.
selector=selector.replace(/(\[[^\]]*\])/g,function(_,keep){var replaceBy='__ph-'+_this198.index+'__';_this198.placeholders.push(keep);_this198.index++;return replaceBy;});// Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
// WS and "+" would otherwise be interpreted as selector separators.
this._content=selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(_,pseudo,exp){var replaceBy='__ph-'+_this198.index+'__';_this198.placeholders.push(exp);_this198.index++;return pseudo+replaceBy;});}_createClass(SafeSelector,[{key:'restore',/**
     * @param {?} content
     * @return {?}
     */value:function restore(content){var _this199=this;return content.replace(/__ph-(\d+)__/g,function(ph,index){return _this199.placeholders[+index];});}/**
     * @return {?}
     */},{key:'content',value:function content(){return this._content;}}]);return SafeSelector;}();var/** @type {?} */_cssContentNextSelectorRe=/polyfill-next-selector[^}]*content:[\s]*?(['"])(.*?)\1[;\s]*}([^{]*?){/gim;var/** @type {?} */_cssContentRuleRe=/(polyfill-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim;var/** @type {?} */_cssContentUnscopedRuleRe=/(polyfill-unscoped-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim;var/** @type {?} */_polyfillHost='-shadowcsshost';// note: :host-context pre-processed to -shadowcsshostcontext.
var/** @type {?} */_polyfillHostContext='-shadowcsscontext';var/** @type {?} */_parenSuffix=')(?:\\(('+'(?:\\([^)(]*\\)|[^)(]*)+?'+')\\))?([^,{]*)';var/** @type {?} */_cssColonHostRe=new RegExp('('+_polyfillHost+_parenSuffix,'gim');var/** @type {?} */_cssColonHostContextRe=new RegExp('('+_polyfillHostContext+_parenSuffix,'gim');var/** @type {?} */_polyfillHostNoCombinator=_polyfillHost+'-no-combinator';var/** @type {?} */_polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/;var/** @type {?} */_shadowDOMSelectorsRe=[/::shadow/g,/::content/g,// Deprecated selectors
/\/shadow-deep\//g,/\/shadow\//g];var/** @type {?} */_shadowDeepSelectors=/(?:>>>)|(?:\/deep\/)/g;var/** @type {?} */_selectorReSuffix='([>\\s~+\[.,{:][\\s\\S]*)?$';var/** @type {?} */_polyfillHostRe=/-shadowcsshost/gim;var/** @type {?} */_colonHostRe=/:host/gim;var/** @type {?} */_colonHostContextRe=/:host-context/gim;var/** @type {?} */_commentRe=/\/\*\s*[\s\S]*?\*\//g;/**
 * @param {?} input
 * @return {?}
 */function stripComments(input){return input.replace(_commentRe,'');}// all comments except inline source mapping
var/** @type {?} */_sourceMappingUrlRe=/\/\*\s*#\s*sourceMappingURL=[\s\S]+?\*\//;/**
 * @param {?} input
 * @return {?}
 */function extractSourceMappingUrl(input){var/** @type {?} */matcher=input.match(_sourceMappingUrlRe);return matcher?matcher[0]:'';}var/** @type {?} */_ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;var/** @type {?} */_curlyRe=/([{}])/g;var/** @type {?} */OPEN_CURLY='{';var/** @type {?} */CLOSE_CURLY='}';var/** @type {?} */BLOCK_PLACEHOLDER='%BLOCK%';var CssRule=/**
     * @param {?} selector
     * @param {?} content
     */function CssRule(selector,content){_classCallCheck(this,CssRule);this.selector=selector;this.content=content;};/**
 * @param {?} input
 * @param {?} ruleCallback
 * @return {?}
 */function processRules(input,ruleCallback){var/** @type {?} */inputWithEscapedBlocks=escapeBlocks(input);var/** @type {?} */nextBlockIndex=0;return inputWithEscapedBlocks.escapedString.replace(_ruleRe,function(){var/** @type {?} */selector=arguments.length<=2?undefined:arguments[2];var/** @type {?} */content='';var/** @type {?} */suffix=arguments.length<=4?undefined:arguments[4];var/** @type {?} */contentPrefix='';if(suffix&&suffix.startsWith('{'+BLOCK_PLACEHOLDER)){content=inputWithEscapedBlocks.blocks[nextBlockIndex++];suffix=suffix.substring(BLOCK_PLACEHOLDER.length+1);contentPrefix='{';}var/** @type {?} */rule=ruleCallback(new CssRule(selector,content));return''+(arguments.length<=1?undefined:arguments[1])+rule.selector+(arguments.length<=3?undefined:arguments[3])+contentPrefix+rule.content+suffix;});}var StringWithEscapedBlocks=/**
     * @param {?} escapedString
     * @param {?} blocks
     */function StringWithEscapedBlocks(escapedString,blocks){_classCallCheck(this,StringWithEscapedBlocks);this.escapedString=escapedString;this.blocks=blocks;};/**
 * @param {?} input
 * @return {?}
 */function escapeBlocks(input){var/** @type {?} */inputParts=input.split(_curlyRe);var/** @type {?} */resultParts=[];var/** @type {?} */escapedBlocks=[];var/** @type {?} */bracketCount=0;var/** @type {?} */currentBlockParts=[];for(var/** @type {?} */partIndex=0;partIndex<inputParts.length;partIndex++){var/** @type {?} */part=inputParts[partIndex];if(part==CLOSE_CURLY){bracketCount--;}if(bracketCount>0){currentBlockParts.push(part);}else{if(currentBlockParts.length>0){escapedBlocks.push(currentBlockParts.join(''));resultParts.push(BLOCK_PLACEHOLDER);currentBlockParts=[];}resultParts.push(part);}if(part==OPEN_CURLY){bracketCount++;}}if(currentBlockParts.length>0){escapedBlocks.push(currentBlockParts.join(''));resultParts.push(BLOCK_PLACEHOLDER);}return new StringWithEscapedBlocks(resultParts.join(''),escapedBlocks);}var/** @type {?} */COMPONENT_VARIABLE='%COMP%';var/** @type {?} */HOST_ATTR='_nghost-'+COMPONENT_VARIABLE;var/** @type {?} */CONTENT_ATTR='_ngcontent-'+COMPONENT_VARIABLE;var StylesCompileDependency=/**
     * @param {?} name
     * @param {?} moduleUrl
     * @param {?} isShimmed
     * @param {?} valuePlaceholder
     */function StylesCompileDependency(name,moduleUrl,isShimmed,valuePlaceholder){_classCallCheck(this,StylesCompileDependency);this.name=name;this.moduleUrl=moduleUrl;this.isShimmed=isShimmed;this.valuePlaceholder=valuePlaceholder;};var StylesCompileResult=/**
     * @param {?} componentStylesheet
     * @param {?} externalStylesheets
     */function StylesCompileResult(componentStylesheet,externalStylesheets){_classCallCheck(this,StylesCompileResult);this.componentStylesheet=componentStylesheet;this.externalStylesheets=externalStylesheets;};var CompiledStylesheet=/**
     * @param {?} statements
     * @param {?} stylesVar
     * @param {?} dependencies
     * @param {?} isShimmed
     * @param {?} meta
     */function CompiledStylesheet(statements,stylesVar,dependencies,isShimmed,meta){_classCallCheck(this,CompiledStylesheet);this.statements=statements;this.stylesVar=stylesVar;this.dependencies=dependencies;this.isShimmed=isShimmed;this.meta=meta;};var StyleCompiler=function(){/**
     * @param {?} _urlResolver
     */function StyleCompiler(_urlResolver){_classCallCheck(this,StyleCompiler);this._urlResolver=_urlResolver;this._shadowCss=new ShadowCss();}/**
     * @param {?} comp
     * @return {?}
     */_createClass(StyleCompiler,[{key:'compileComponent',value:function compileComponent(comp){var _this200=this;var/** @type {?} */externalStylesheets=[];var/** @type {?} */componentStylesheet=this._compileStyles(comp,new CompileStylesheetMetadata({styles:comp.template.styles,styleUrls:comp.template.styleUrls,moduleUrl:identifierModuleUrl(comp.type)}),true);comp.template.externalStylesheets.forEach(function(stylesheetMeta){var/** @type {?} */compiledStylesheet=_this200._compileStyles(comp,stylesheetMeta,false);externalStylesheets.push(compiledStylesheet);});return new StylesCompileResult(componentStylesheet,externalStylesheets);}/**
     * @param {?} comp
     * @param {?} stylesheet
     * @param {?} isComponentStylesheet
     * @return {?}
     */},{key:'_compileStyles',value:function _compileStyles(comp,stylesheet,isComponentStylesheet){var _this201=this;var/** @type {?} */shim=comp.template.encapsulation===ViewEncapsulation.Emulated;var/** @type {?} */styleExpressions=stylesheet.styles.map(function(plainStyle){return literal(_this201._shimIfNeeded(plainStyle,shim));});var/** @type {?} */dependencies=[];for(var/** @type {?} */i=0;i<stylesheet.styleUrls.length;i++){var/** @type {?} */identifier={reference:null};dependencies.push(new StylesCompileDependency(getStylesVarName(null),stylesheet.styleUrls[i],shim,identifier));styleExpressions.push(new ExternalExpr(identifier));}// styles variable contains plain strings and arrays of other styles arrays (recursive),
// so we set its type to dynamic.
var/** @type {?} */stylesVar=getStylesVarName(isComponentStylesheet?comp:null);var/** @type {?} */stmt=variable(stylesVar).set(literalArr(styleExpressions,new ArrayType(DYNAMIC_TYPE,[TypeModifier.Const]))).toDeclStmt(null,[StmtModifier.Final]);return new CompiledStylesheet([stmt],stylesVar,dependencies,shim,stylesheet);}/**
     * @param {?} style
     * @param {?} shim
     * @return {?}
     */},{key:'_shimIfNeeded',value:function _shimIfNeeded(style,shim){return shim?this._shadowCss.shimCssText(style,CONTENT_ATTR,HOST_ATTR):style;}}]);return StyleCompiler;}();StyleCompiler.decorators=[{type:CompilerInjectable}];/** @nocollapse */StyleCompiler.ctorParameters=function(){return[{type:UrlResolver}];};/**
 * @param {?} component
 * @return {?}
 */function getStylesVarName(component){var/** @type {?} */result='styles';if(component){result+='_'+identifierName(component.type);}return result;}var _DebugState=/**
     * @param {?} nodeIndex
     * @param {?} sourceAst
     */function _DebugState(nodeIndex,sourceAst){_classCallCheck(this,_DebugState);this.nodeIndex=nodeIndex;this.sourceAst=sourceAst;};var/** @type {?} */NULL_DEBUG_STATE=new _DebugState(null,null);var CompileMethod=function(){/**
     * @param {?} _view
     */function CompileMethod(_view){_classCallCheck(this,CompileMethod);this._view=_view;this._newState=NULL_DEBUG_STATE;this._currState=NULL_DEBUG_STATE;this._bodyStatements=[];this._debugEnabled=this._view.genConfig.genDebugInfo;}/**
     * @return {?}
     */_createClass(CompileMethod,[{key:'_updateDebugContextIfNeeded',value:function _updateDebugContextIfNeeded(){if(this._newState.nodeIndex!==this._currState.nodeIndex||this._newState.sourceAst!==this._currState.sourceAst){var/** @type {?} */expr=this._updateDebugContext(this._newState);if(expr){this._bodyStatements.push(expr.toStmt());}}}/**
     * @param {?} newState
     * @return {?}
     */},{key:'_updateDebugContext',value:function _updateDebugContext(newState){this._currState=this._newState=newState;if(this._debugEnabled){var/** @type {?} */sourceLocation=newState.sourceAst?newState.sourceAst.sourceSpan.start:null;return THIS_EXPR.callMethod('debug',[literal(newState.nodeIndex),sourceLocation?literal(sourceLocation.line):NULL_EXPR,sourceLocation?literal(sourceLocation.col):NULL_EXPR]);}else{return null;}}/**
     * @param {?} nodeIndex
     * @param {?} templateAst
     * @return {?}
     */},{key:'resetDebugInfoExpr',value:function resetDebugInfoExpr(nodeIndex,templateAst){var/** @type {?} */res=this._updateDebugContext(new _DebugState(nodeIndex,templateAst));return res||NULL_EXPR;}/**
     * @param {?} nodeIndex
     * @param {?} templateAst
     * @return {?}
     */},{key:'resetDebugInfo',value:function resetDebugInfo(nodeIndex,templateAst){this._newState=new _DebugState(nodeIndex,templateAst);}/**
     * @param {...?} stmts
     * @return {?}
     */},{key:'push',value:function push(){for(var _len4=arguments.length,stmts=Array(_len4),_key4=0;_key4<_len4;_key4++){stmts[_key4]=arguments[_key4];}this.addStmts(stmts);}/**
     * @param {?} stmt
     * @return {?}
     */},{key:'addStmt',value:function addStmt(stmt){this._updateDebugContextIfNeeded();this._bodyStatements.push(stmt);}/**
     * @param {?} stmts
     * @return {?}
     */},{key:'addStmts',value:function addStmts(stmts){var _bodyStatements;this._updateDebugContextIfNeeded();(_bodyStatements=this._bodyStatements).push.apply(_bodyStatements,_toConsumableArray(stmts));}/**
     * @return {?}
     */},{key:'finish',value:function finish(){return this._bodyStatements;}/**
     * @return {?}
     */},{key:'isEmpty',value:function isEmpty(){return this._bodyStatements.length===0;}}]);return CompileMethod;}();/**
 * @param {?} property
 * @param {?} callingView
 * @param {?} definedView
 * @return {?}
 */function getPropertyInView(property,callingView,definedView){if(callingView===definedView){return property;}else{var/** @type {?} */viewProp=THIS_EXPR;var/** @type {?} */currView=callingView;while(currView!==definedView&&currView.declarationElement.view){currView=currView.declarationElement.view;viewProp=viewProp.prop('parentView');}if(currView!==definedView){throw new Error('Internal error: Could not calculate a property in a parent view: '+property);}return property.visitExpression(new _ReplaceViewTransformer(viewProp,definedView),null);}}var _ReplaceViewTransformer=function(_ExpressionTransforme2){_inherits(_ReplaceViewTransformer,_ExpressionTransforme2);/**
     * @param {?} _viewExpr
     * @param {?} _view
     */function _ReplaceViewTransformer(_viewExpr,_view){_classCallCheck(this,_ReplaceViewTransformer);var _this202=_possibleConstructorReturn(this,(_ReplaceViewTransformer.__proto__||Object.getPrototypeOf(_ReplaceViewTransformer)).call(this));_this202._viewExpr=_viewExpr;_this202._view=_view;return _this202;}/**
     * @param {?} expr
     * @return {?}
     */_createClass(_ReplaceViewTransformer,[{key:'_isThis',value:function _isThis(expr){return expr instanceof ReadVarExpr&&expr.builtin===BuiltinVar.This;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReadVarExpr',value:function visitReadVarExpr(ast,context){return this._isThis(ast)?this._viewExpr:ast;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReadPropExpr',value:function visitReadPropExpr(ast,context){if(this._isThis(ast.receiver)){// Note: Don't cast for members of the AppView base class...
if(this._view.fields.some(function(field){return field.name==ast.name;})||this._view.getters.some(function(field){return field.name==ast.name;})){return this._viewExpr.cast(this._view.classType).prop(ast.name);}}return _get(_ReplaceViewTransformer.prototype.__proto__||Object.getPrototypeOf(_ReplaceViewTransformer.prototype),'visitReadPropExpr',this).call(this,ast,context);}}]);return _ReplaceViewTransformer;}(ExpressionTransformer);/**
 * @param {?} view
 * @param {?} token
 * @param {?} optional
 * @return {?}
 */function injectFromViewParentInjector(view,token,optional){var/** @type {?} */viewExpr=void 0;if(view.viewType===ɵViewType.HOST){viewExpr=THIS_EXPR;}else{viewExpr=THIS_EXPR.prop('parentView');}var/** @type {?} */args=[createDiTokenExpression(token),THIS_EXPR.prop('parentIndex')];if(optional){args.push(NULL_EXPR);}return viewExpr.callMethod('injectorGet',args);}/**
 * @param {?} elementIndex
 * @return {?}
 */function getHandleEventMethodName(elementIndex){return'handleEvent_'+elementIndex;}var ViewQueryValues=/**
     * @param {?} view
     * @param {?} values
     */function ViewQueryValues(view,values){_classCallCheck(this,ViewQueryValues);this.view=view;this.values=values;};var CompileQuery=function(){/**
     * @param {?} meta
     * @param {?} queryList
     * @param {?} ownerDirectiveExpression
     * @param {?} view
     */function CompileQuery(meta,queryList,ownerDirectiveExpression,view){_classCallCheck(this,CompileQuery);this.meta=meta;this.queryList=queryList;this.ownerDirectiveExpression=ownerDirectiveExpression;this.view=view;this._values=new ViewQueryValues(view,[]);}/**
     * @param {?} value
     * @param {?} view
     * @return {?}
     */_createClass(CompileQuery,[{key:'addValue',value:function addValue(value,view){var/** @type {?} */currentView=view;var/** @type {?} */elPath=[];while(currentView&&currentView!==this.view){var/** @type {?} */parentEl=currentView.declarationElement;elPath.unshift(parentEl);currentView=parentEl.view;}var/** @type {?} */queryListForDirtyExpr=getPropertyInView(this.queryList,view,this.view);var/** @type {?} */viewValues=this._values;elPath.forEach(function(el){var/** @type {?} */last=viewValues.values.length>0?viewValues.values[viewValues.values.length-1]:null;if(last instanceof ViewQueryValues&&last.view===el.embeddedView){viewValues=last;}else{var/** @type {?} */newViewValues=new ViewQueryValues(el.embeddedView,[]);viewValues.values.push(newViewValues);viewValues=newViewValues;}});viewValues.values.push(value);if(elPath.length>0){view.dirtyParentQueriesMethod.addStmt(queryListForDirtyExpr.callMethod('setDirty',[]).toStmt());}}/**
     * @return {?}
     */},{key:'_isStatic',value:function _isStatic(){return!this._values.values.some(function(value){return value instanceof ViewQueryValues;});}/**
     * @param {?} targetStaticMethod
     * @param {?} targetDynamicMethod
     * @return {?}
     */},{key:'generateStatements',value:function generateStatements(targetStaticMethod,targetDynamicMethod){var/** @type {?} */values=createQueryValues(this._values);var/** @type {?} */updateStmts=[this.queryList.callMethod('reset',[literalArr(values)]).toStmt()];if(this.ownerDirectiveExpression){var/** @type {?} */valueExpr=this.meta.first?this.queryList.prop('first'):this.queryList;updateStmts.push(this.ownerDirectiveExpression.prop(this.meta.propertyName).set(valueExpr).toStmt());}if(!this.meta.first){updateStmts.push(this.queryList.callMethod('notifyOnChanges',[]).toStmt());}if(this.meta.first&&this._isStatic()){// for queries that don't change and the user asked for a single element,
// set it immediately. That is e.g. needed for querying for ViewContainerRefs, ...
// we don't do this for QueryLists for now as this would break the timing when
// we call QueryList listeners...
targetStaticMethod.addStmts(updateStmts);}else{targetDynamicMethod.addStmt(new IfStmt(this.queryList.prop('dirty'),updateStmts));}}}]);return CompileQuery;}();/**
 * @param {?} viewValues
 * @return {?}
 */function createQueryValues(viewValues){return ListWrapper.flatten(viewValues.values.map(function(entry){if(entry instanceof ViewQueryValues){return mapNestedViews(entry.view.declarationElement.viewContainer,entry.view,createQueryValues(entry));}else{return entry;}}));}/**
 * @param {?} viewContainer
 * @param {?} view
 * @param {?} expressions
 * @return {?}
 */function mapNestedViews(viewContainer,view,expressions){var/** @type {?} */adjustedExpressions=expressions.map(function(expr){return replaceVarInExpression(THIS_EXPR.name,variable('nestedView'),expr);});return viewContainer.callMethod('mapNestedViews',[variable(view.className),fn([new FnParam('nestedView',view.classType)],[new ReturnStatement(literalArr(adjustedExpressions))],DYNAMIC_TYPE)]);}/**
 * @param {?} propertyName
 * @param {?} compileView
 * @return {?}
 */function createQueryList(propertyName,compileView){compileView.fields.push(new ClassField(propertyName,importType(createIdentifier(Identifiers.QueryList),[DYNAMIC_TYPE])));var/** @type {?} */expr=THIS_EXPR.prop(propertyName);compileView.createMethod.addStmt(THIS_EXPR.prop(propertyName).set(importExpr(createIdentifier(Identifiers.QueryList),[DYNAMIC_TYPE]).instantiate([])).toStmt());return expr;}/**
 * @param {?} map
 * @param {?} query
 * @return {?}
 */function addQueryToTokenMap(map,query){query.meta.selectors.forEach(function(selector){var/** @type {?} */entry=map.get(tokenReference(selector));if(!entry){entry=[];map.set(tokenReference(selector),entry);}entry.push(query);});}var ViewTypeEnum=function(){function ViewTypeEnum(){_classCallCheck(this,ViewTypeEnum);}_createClass(ViewTypeEnum,null,[{key:'fromValue',/**
     * @param {?} value
     * @return {?}
     */value:function fromValue(value){return createEnumExpression(Identifiers.ViewType,value);}}]);return ViewTypeEnum;}();var ViewEncapsulationEnum=function(){function ViewEncapsulationEnum(){_classCallCheck(this,ViewEncapsulationEnum);}_createClass(ViewEncapsulationEnum,null,[{key:'fromValue',/**
     * @param {?} value
     * @return {?}
     */value:function fromValue(value){return createEnumExpression(Identifiers.ViewEncapsulation,value);}}]);return ViewEncapsulationEnum;}();var ChangeDetectorStatusEnum=function(){function ChangeDetectorStatusEnum(){_classCallCheck(this,ChangeDetectorStatusEnum);}_createClass(ChangeDetectorStatusEnum,null,[{key:'fromValue',/**
     * @param {?} value
     * @return {?}
     */value:function fromValue(value){return createEnumExpression(Identifiers.ChangeDetectorStatus,value);}}]);return ChangeDetectorStatusEnum;}();var ViewConstructorVars=function ViewConstructorVars(){_classCallCheck(this,ViewConstructorVars);};ViewConstructorVars.viewUtils=variable('viewUtils');ViewConstructorVars.parentView=variable('parentView');ViewConstructorVars.parentIndex=variable('parentIndex');ViewConstructorVars.parentElement=variable('parentElement');var ViewProperties=function ViewProperties(){_classCallCheck(this,ViewProperties);};ViewProperties.renderer=THIS_EXPR.prop('renderer');ViewProperties.viewUtils=THIS_EXPR.prop('viewUtils');ViewProperties.throwOnChange=THIS_EXPR.prop('throwOnChange');var InjectMethodVars$1=function InjectMethodVars$1(){_classCallCheck(this,InjectMethodVars$1);};InjectMethodVars$1.token=variable('token');InjectMethodVars$1.requestNodeIndex=variable('requestNodeIndex');InjectMethodVars$1.notFoundResult=variable('notFoundResult');/**
 * This is currently not read, but will probably be used in the future.
 * We keep it as we already pass it through all the right places...
 */var ComponentViewDependency=/**
     * @param {?} compType
     */function ComponentViewDependency(compType){_classCallCheck(this,ComponentViewDependency);this.compType=compType;};/**
 * This is currently not read, but will probably be used in the future.
 * We keep it as we already pass it through all the right places...
 */var ComponentFactoryDependency$1=/**
     * @param {?} compType
     */function ComponentFactoryDependency$1(compType){_classCallCheck(this,ComponentFactoryDependency$1);this.compType=compType;};/**
 * This is currently not read, but will probably be used in the future.
 * We keep it as we already pass it through all the right places...
 */var DirectiveWrapperDependency=/**
     * @param {?} dirType
     */function DirectiveWrapperDependency(dirType){_classCallCheck(this,DirectiveWrapperDependency);this.dirType=dirType;};var CompileNode=function(){/**
     * @param {?} parent
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} renderNode
     * @param {?} sourceAst
     */function CompileNode(parent,view,nodeIndex,renderNode,sourceAst){_classCallCheck(this,CompileNode);this.parent=parent;this.view=view;this.nodeIndex=nodeIndex;this.renderNode=renderNode;this.sourceAst=sourceAst;}/**
     * @return {?}
     */_createClass(CompileNode,[{key:'isNull',value:function isNull(){return!this.renderNode;}/**
     * @return {?}
     */},{key:'isRootElement',value:function isRootElement(){return this.view!=this.parent.view;}}]);return CompileNode;}();var CompileElement=function(_CompileNode){_inherits(CompileElement,_CompileNode);/**
     * @param {?} parent
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} renderNode
     * @param {?} sourceAst
     * @param {?} component
     * @param {?} _directives
     * @param {?} _resolvedProvidersArray
     * @param {?} hasViewContainer
     * @param {?} hasEmbeddedView
     * @param {?} references
     */function CompileElement(parent,view,nodeIndex,renderNode,sourceAst,component,_directives,_resolvedProvidersArray,hasViewContainer,hasEmbeddedView,references){_classCallCheck(this,CompileElement);var _this203=_possibleConstructorReturn(this,(CompileElement.__proto__||Object.getPrototypeOf(CompileElement)).call(this,parent,view,nodeIndex,renderNode,sourceAst));_this203.component=component;_this203._directives=_directives;_this203._resolvedProvidersArray=_resolvedProvidersArray;_this203.hasViewContainer=hasViewContainer;_this203.hasEmbeddedView=hasEmbeddedView;_this203.compViewExpr=null;_this203.instances=new Map();_this203.directiveWrapperInstance=new Map();_this203._queryCount=0;_this203._queries=new Map();_this203.contentNodesByNgContentIndex=null;_this203.referenceTokens={};references.forEach(function(ref){return _this203.referenceTokens[ref.name]=ref.value;});_this203.elementRef=importExpr(createIdentifier(Identifiers.ElementRef)).instantiate([_this203.renderNode]);_this203.instances.set(resolveIdentifier(Identifiers.ElementRef),_this203.elementRef);_this203.instances.set(resolveIdentifier(Identifiers.Injector),THIS_EXPR.callMethod('injector',[literal(_this203.nodeIndex)]));_this203.instances.set(resolveIdentifier(Identifiers.Renderer),THIS_EXPR.prop('renderer'));if(_this203.hasViewContainer||_this203.hasEmbeddedView){_this203._createViewContainer();}if(_this203.component){_this203._createComponentFactoryResolver();}return _this203;}/**
     * @return {?}
     */_createClass(CompileElement,[{key:'_createViewContainer',/**
     * @return {?}
     */value:function _createViewContainer(){var/** @type {?} */fieldName='_vc_'+this.nodeIndex;var/** @type {?} */parentNodeIndex=this.isRootElement()?null:this.parent.nodeIndex;// private is fine here as no child view will reference a ViewContainer
this.view.fields.push(new ClassField(fieldName,importType(createIdentifier(Identifiers.ViewContainer)),[StmtModifier.Private]));var/** @type {?} */statement=THIS_EXPR.prop(fieldName).set(importExpr(createIdentifier(Identifiers.ViewContainer)).instantiate([literal(this.nodeIndex),literal(parentNodeIndex),THIS_EXPR,this.renderNode])).toStmt();this.view.createMethod.addStmt(statement);this.viewContainer=THIS_EXPR.prop(fieldName);this.instances.set(resolveIdentifier(Identifiers.ViewContainer),this.viewContainer);this.view.viewContainers.push(this.viewContainer);}/**
     * @return {?}
     */},{key:'_createComponentFactoryResolver',value:function _createComponentFactoryResolver(){var _this204=this;var/** @type {?} */entryComponents=this.component.entryComponents.map(function(entryComponent){_this204.view.targetDependencies.push(new ComponentFactoryDependency$1(entryComponent.componentType));return{reference:entryComponent.componentFactory};});if(!entryComponents||entryComponents.length===0){return;}var/** @type {?} */createComponentFactoryResolverExpr=importExpr(createIdentifier(Identifiers.CodegenComponentFactoryResolver)).instantiate([literalArr(entryComponents.map(function(entryComponent){return importExpr(entryComponent);})),injectFromViewParentInjector(this.view,createIdentifierToken(Identifiers.ComponentFactoryResolver),false)]);var/** @type {?} */provider={token:createIdentifierToken(Identifiers.ComponentFactoryResolver),useValue:createComponentFactoryResolverExpr};// Add ComponentFactoryResolver as first provider as it does not have deps on other providers
// ProviderAstType.PrivateService as only the component and its view can see it,
// but nobody else
this._resolvedProvidersArray.unshift(new ProviderAst(provider.token,false,true,[provider],ProviderAstType.PrivateService,[],this.sourceAst.sourceSpan));}/**
     * @param {?} compViewExpr
     * @return {?}
     */},{key:'setComponentView',value:function setComponentView(compViewExpr){this.compViewExpr=compViewExpr;this.contentNodesByNgContentIndex=new Array(this.component.template.ngContentSelectors.length);for(var/** @type {?} */i=0;i<this.contentNodesByNgContentIndex.length;i++){this.contentNodesByNgContentIndex[i]=[];}}/**
     * @param {?} embeddedView
     * @return {?}
     */},{key:'setEmbeddedView',value:function setEmbeddedView(embeddedView){this.embeddedView=embeddedView;if(isPresent(embeddedView)){var/** @type {?} */createTemplateRefExpr=importExpr(createIdentifier(Identifiers.TemplateRef_)).instantiate([THIS_EXPR,literal(this.nodeIndex),this.renderNode]);var/** @type {?} */provider={token:createIdentifierToken(Identifiers.TemplateRef),useValue:createTemplateRefExpr};// Add TemplateRef as first provider as it does not have deps on other providers
this._resolvedProvidersArray.unshift(new ProviderAst(provider.token,false,true,[provider],ProviderAstType.Builtin,[],this.sourceAst.sourceSpan));}}/**
     * @return {?}
     */},{key:'beforeChildren',value:function beforeChildren(){var _this205=this;if(this.hasViewContainer){this.instances.set(resolveIdentifier(Identifiers.ViewContainerRef),this.viewContainer.prop('vcRef'));}this._resolvedProviders=new Map();this._resolvedProvidersArray.forEach(function(provider){return _this205._resolvedProviders.set(tokenReference(provider.token),provider);});// create all the provider instances, some in the view constructor,
// some as getters. We rely on the fact that they are already sorted topologically.
Array.from(this._resolvedProviders.values()).forEach(function(resolvedProvider){var/** @type {?} */isDirectiveWrapper=resolvedProvider.providerType===ProviderAstType.Component||resolvedProvider.providerType===ProviderAstType.Directive;var/** @type {?} */providerValueExpressions=resolvedProvider.providers.map(function(provider){if(provider.useExisting){return _this205._getDependency(resolvedProvider.providerType,{token:provider.useExisting});}else if(provider.useFactory){var/** @type {?} */deps=provider.deps||provider.useFactory.diDeps;var/** @type {?} */depsExpr=deps.map(function(dep){return _this205._getDependency(resolvedProvider.providerType,dep);});return importExpr(provider.useFactory).callFn(depsExpr);}else if(provider.useClass){var/** @type {?} */_deps4=provider.deps||provider.useClass.diDeps;var/** @type {?} */_depsExpr2=_deps4.map(function(dep){return _this205._getDependency(resolvedProvider.providerType,dep);});if(isDirectiveWrapper){var/** @type {?} */dirMeta=_this205._directives.find(function(dir){return dir.type.reference===provider.useClass.reference;});_this205.view.targetDependencies.push(new DirectiveWrapperDependency(dirMeta.type.reference));return DirectiveWrapperExpressions.create({reference:dirMeta.wrapperType},_depsExpr2);}else{return importExpr(provider.useClass).instantiate(_depsExpr2,importType(provider.useClass));}}else{return convertValueToOutputAst(provider.useValue);}});var/** @type {?} */propName='_'+tokenName(resolvedProvider.token)+'_'+_this205.nodeIndex+'_'+_this205.instances.size;var/** @type {?} */instance=createProviderProperty(propName,providerValueExpressions,resolvedProvider.multiProvider,resolvedProvider.eager,_this205);if(isDirectiveWrapper){_this205.directiveWrapperInstance.set(tokenReference(resolvedProvider.token),instance);_this205.instances.set(tokenReference(resolvedProvider.token),DirectiveWrapperExpressions.context(instance));}else{_this205.instances.set(tokenReference(resolvedProvider.token),instance);}});var _loop2=function _loop2(i){var/** @type {?} */directive=_this205._directives[i];var/** @type {?} */directiveInstance=_this205.instances.get(tokenReference(identifierToken(directive.type)));directive.queries.forEach(function(queryMeta){_this205._addQuery(queryMeta,directiveInstance);});};for(var/** @type {?} */i=0;i<this._directives.length;i++){_loop2(i);}Object.keys(this.referenceTokens).forEach(function(varName){var/** @type {?} */token=_this205.referenceTokens[varName];var/** @type {?} */varValue=void 0;if(token){varValue=_this205.instances.get(tokenReference(token));}else{varValue=_this205.renderNode;}_this205.view.locals.set(varName,varValue);});}/**
     * @param {?} childNodeCount
     * @return {?}
     */},{key:'afterChildren',value:function afterChildren(childNodeCount){var _this206=this;Array.from(this._resolvedProviders.values()).forEach(function(resolvedProvider){// Note: afterChildren is called after recursing into children.
// This is good so that an injector match in an element that is closer to a requesting element
// matches first.
var/** @type {?} */providerExpr=_this206.instances.get(tokenReference(resolvedProvider.token));// Note: view providers are only visible on the injector of that element.
// This is not fully correct as the rules during codegen don't allow a directive
// to get hold of a view provdier on the same element. We still do this semantic
// as it simplifies our model to having only one runtime injector per element.
var/** @type {?} */providerChildNodeCount=resolvedProvider.providerType===ProviderAstType.PrivateService?0:childNodeCount;_this206.view.injectorGetMethod.addStmt(createInjectInternalCondition(_this206.nodeIndex,providerChildNodeCount,resolvedProvider,providerExpr));});}/**
     * @return {?}
     */},{key:'finish',value:function finish(){var _this207=this;Array.from(this._queries.values()).forEach(function(queries){return queries.forEach(function(q){return q.generateStatements(_this207.view.createMethod,_this207.view.updateContentQueriesMethod);});});}/**
     * @param {?} ngContentIndex
     * @param {?} nodeExpr
     * @return {?}
     */},{key:'addContentNode',value:function addContentNode(ngContentIndex,nodeExpr){this.contentNodesByNgContentIndex[ngContentIndex].push(nodeExpr);}/**
     * @return {?}
     */},{key:'getComponent',value:function getComponent(){return isPresent(this.component)?this.instances.get(tokenReference(identifierToken(this.component.type))):null;}/**
     * @return {?}
     */},{key:'getProviderTokens',value:function getProviderTokens(){return Array.from(this._resolvedProviders.values()).map(function(provider){return provider.token;});}/**
     * @param {?} token
     * @return {?}
     */},{key:'getQueriesFor',value:function getQueriesFor(token){var/** @type {?} */result=[];var/** @type {?} */currentEl=this;var/** @type {?} */distance=0;var/** @type {?} */queries=void 0;while(!currentEl.isNull()){queries=currentEl._queries.get(tokenReference(token));if(isPresent(queries)){result.push.apply(result,_toConsumableArray(queries.filter(function(query){return query.meta.descendants||distance<=1;})));}if(currentEl._directives.length>0){distance++;}currentEl=currentEl.parent;}queries=this.view.componentView.viewQueries.get(tokenReference(token));if(isPresent(queries)){result.push.apply(result,_toConsumableArray(queries));}return result;}/**
     * @param {?} queryMeta
     * @param {?} directiveInstance
     * @return {?}
     */},{key:'_addQuery',value:function _addQuery(queryMeta,directiveInstance){var/** @type {?} */propName='_query_'+tokenName(queryMeta.selectors[0])+'_'+this.nodeIndex+'_'+this._queryCount++;var/** @type {?} */queryList=createQueryList(propName,this.view);var/** @type {?} */query=new CompileQuery(queryMeta,queryList,directiveInstance,this.view);addQueryToTokenMap(this._queries,query);return query;}/**
     * @param {?} requestingProviderType
     * @param {?} dep
     * @return {?}
     */},{key:'_getLocalDependency',value:function _getLocalDependency(requestingProviderType,dep){var/** @type {?} */result=null;if(isPresent(dep.token)){// access builtins with special visibility
if(!result){if(tokenReference(dep.token)===resolveIdentifier(Identifiers.ChangeDetectorRef)){if(requestingProviderType===ProviderAstType.Component){return this.compViewExpr.prop('ref');}else{return getPropertyInView(THIS_EXPR.prop('ref'),this.view,this.view.componentView);}}}// access regular providers on the element
if(!result){var/** @type {?} */resolvedProvider=this._resolvedProviders.get(tokenReference(dep.token));// don't allow directives / public services to access private services.
// only components and private services can access private services.
if(resolvedProvider&&(requestingProviderType===ProviderAstType.Directive||requestingProviderType===ProviderAstType.PublicService)&&resolvedProvider.providerType===ProviderAstType.PrivateService){return null;}result=this.instances.get(tokenReference(dep.token));}}return result;}/**
     * @param {?} requestingProviderType
     * @param {?} dep
     * @return {?}
     */},{key:'_getDependency',value:function _getDependency(requestingProviderType,dep){var/** @type {?} */currElement=this;var/** @type {?} */result=null;if(dep.isValue){result=literal(dep.value);}if(!result&&!dep.isSkipSelf){result=this._getLocalDependency(requestingProviderType,dep);}// check parent elements
while(!result&&!currElement.parent.isNull()){currElement=currElement.parent;result=currElement._getLocalDependency(ProviderAstType.PublicService,{token:dep.token});}if(!result){result=injectFromViewParentInjector(this.view,dep.token,dep.isOptional);}if(!result){result=NULL_EXPR;}return getPropertyInView(result,this.view,currElement.view);}}],[{key:'createNull',value:function createNull(){return new CompileElement(null,null,null,null,null,null,[],[],false,false,[]);}}]);return CompileElement;}(CompileNode);/**
 * @param {?} nodeIndex
 * @param {?} childNodeCount
 * @param {?} provider
 * @param {?} providerExpr
 * @return {?}
 */function createInjectInternalCondition(nodeIndex,childNodeCount,provider,providerExpr){var/** @type {?} */indexCondition=void 0;if(childNodeCount>0){indexCondition=literal(nodeIndex).lowerEquals(InjectMethodVars$1.requestNodeIndex).and(InjectMethodVars$1.requestNodeIndex.lowerEquals(literal(nodeIndex+childNodeCount)));}else{indexCondition=literal(nodeIndex).identical(InjectMethodVars$1.requestNodeIndex);}return new IfStmt(InjectMethodVars$1.token.identical(createDiTokenExpression(provider.token)).and(indexCondition),[new ReturnStatement(providerExpr)]);}/**
 * @param {?} propName
 * @param {?} providerValueExpressions
 * @param {?} isMulti
 * @param {?} isEager
 * @param {?} compileElement
 * @return {?}
 */function createProviderProperty(propName,providerValueExpressions,isMulti,isEager,compileElement){var/** @type {?} */view=compileElement.view;var/** @type {?} */resolvedProviderValueExpr=void 0;var/** @type {?} */type=void 0;if(isMulti){resolvedProviderValueExpr=literalArr(providerValueExpressions);type=new ArrayType(DYNAMIC_TYPE);}else{resolvedProviderValueExpr=providerValueExpressions[0];type=providerValueExpressions[0].type;}if(!type){type=DYNAMIC_TYPE;}if(isEager){view.fields.push(new ClassField(propName,type));view.createMethod.addStmt(THIS_EXPR.prop(propName).set(resolvedProviderValueExpr).toStmt());}else{var/** @type {?} */internalField='_'+propName;view.fields.push(new ClassField(internalField,type));var/** @type {?} */getter=new CompileMethod(view);getter.resetDebugInfo(compileElement.nodeIndex,compileElement.sourceAst);// Note: Equals is important for JS so that it also checks the undefined case!
getter.addStmt(new IfStmt(THIS_EXPR.prop(internalField).isBlank(),[THIS_EXPR.prop(internalField).set(resolvedProviderValueExpr).toStmt()]));getter.addStmt(new ReturnStatement(THIS_EXPR.prop(internalField)));view.getters.push(new ClassGetter(propName,getter.finish(),type));}return THIS_EXPR.prop(propName);}var CompilePipe=function(){/**
     * @param {?} view
     * @param {?} meta
     */function CompilePipe(view,meta){var _this208=this;_classCallCheck(this,CompilePipe);this.view=view;this.meta=meta;this._purePipeProxyCount=0;this.instance=THIS_EXPR.prop('_pipe_'+meta.name+'_'+view.pipeCount++);var deps=this.meta.type.diDeps.map(function(diDep){if(tokenReference(diDep.token)===resolveIdentifier(Identifiers.ChangeDetectorRef)){return getPropertyInView(THIS_EXPR.prop('ref'),_this208.view,_this208.view.componentView);}return injectFromViewParentInjector(view,diDep.token,false);});this.view.fields.push(new ClassField(this.instance.name,importType(this.meta.type)));this.view.createMethod.resetDebugInfo(null,null);this.view.createMethod.addStmt(THIS_EXPR.prop(this.instance.name).set(importExpr(this.meta.type).instantiate(deps)).toStmt());}/**
     * @param {?} view
     * @param {?} name
     * @param {?} args
     * @return {?}
     */_createClass(CompilePipe,[{key:'_call',/**
     * @param {?} callingView
     * @param {?} args
     * @return {?}
     */value:function _call(callingView,args){if(this.meta.pure){// PurePipeProxies live on the view that called them.
var/** @type {?} */purePipeProxyInstance=THIS_EXPR.prop(this.instance.name+'_'+this._purePipeProxyCount++);var/** @type {?} */pipeInstanceSeenFromPureProxy=getPropertyInView(this.instance,callingView,this.view);createPureProxy(pipeInstanceSeenFromPureProxy.prop('transform').callMethod(BuiltinMethod.Bind,[pipeInstanceSeenFromPureProxy]),args.length,purePipeProxyInstance,{fields:callingView.fields,ctorStmts:callingView.createMethod});return importExpr(createIdentifier(Identifiers.castByValue)).callFn([purePipeProxyInstance,pipeInstanceSeenFromPureProxy.prop('transform')]).callFn(args);}else{return getPropertyInView(this.instance,callingView,this.view).callMethod('transform',args);}}},{key:'pure',/**
     * @return {?}
     */get:function get(){return this.meta.pure;}}],[{key:'call',value:function call(view,name,args){var/** @type {?} */compView=view.componentView;var/** @type {?} */meta=_findPipeMeta(compView,name);var/** @type {?} */pipe=void 0;if(meta.pure){// pure pipes live on the component view
pipe=compView.purePipes.get(name);if(!pipe){pipe=new CompilePipe(compView,meta);compView.purePipes.set(name,pipe);compView.pipes.push(pipe);}}else{// Non pure pipes live on the view that called it
pipe=new CompilePipe(view,meta);view.pipes.push(pipe);}return pipe._call(view,args);}}]);return CompilePipe;}();/**
 * @param {?} view
 * @param {?} name
 * @return {?}
 */function _findPipeMeta(view,name){var/** @type {?} */pipeMeta=null;for(var/** @type {?} */i=view.pipeMetas.length-1;i>=0;i--){var/** @type {?} */localPipeMeta=view.pipeMetas[i];if(localPipeMeta.name==name){pipeMeta=localPipeMeta;break;}}if(!pipeMeta){throw new Error('Illegal state: Could not find pipe '+name+' although the parser should have detected this error!');}return pipeMeta;}var CompileViewRootNodeType={};CompileViewRootNodeType.Node=0;CompileViewRootNodeType.ViewContainer=1;CompileViewRootNodeType.NgContent=2;CompileViewRootNodeType[CompileViewRootNodeType.Node]="Node";CompileViewRootNodeType[CompileViewRootNodeType.ViewContainer]="ViewContainer";CompileViewRootNodeType[CompileViewRootNodeType.NgContent]="NgContent";var CompileViewRootNode=/**
     * @param {?} type
     * @param {?} expr
     * @param {?=} ngContentIndex
     */function CompileViewRootNode(type,expr,ngContentIndex){_classCallCheck(this,CompileViewRootNode);this.type=type;this.expr=expr;this.ngContentIndex=ngContentIndex;};var CompileView=function(){/**
     * @param {?} component
     * @param {?} genConfig
     * @param {?} pipeMetas
     * @param {?} styles
     * @param {?} animations
     * @param {?} viewIndex
     * @param {?} declarationElement
     * @param {?} templateVariableBindings
     * @param {?} targetDependencies
     */function CompileView(component,genConfig,pipeMetas,styles,animations,viewIndex,declarationElement,templateVariableBindings,targetDependencies){var _this209=this;_classCallCheck(this,CompileView);this.component=component;this.genConfig=genConfig;this.pipeMetas=pipeMetas;this.styles=styles;this.animations=animations;this.viewIndex=viewIndex;this.declarationElement=declarationElement;this.templateVariableBindings=templateVariableBindings;this.targetDependencies=targetDependencies;this.viewChildren=[];this.nodes=[];this.rootNodes=[];this.lastRenderNode=NULL_EXPR;this.viewContainers=[];this.methods=[];this.ctorStmts=[];this.fields=[];this.getters=[];this.disposables=[];this.purePipes=new Map();this.pipes=[];this.locals=new Map();this.literalArrayCount=0;this.literalMapCount=0;this.pipeCount=0;this.createMethod=new CompileMethod(this);this.animationBindingsMethod=new CompileMethod(this);this.injectorGetMethod=new CompileMethod(this);this.updateContentQueriesMethod=new CompileMethod(this);this.dirtyParentQueriesMethod=new CompileMethod(this);this.updateViewQueriesMethod=new CompileMethod(this);this.detectChangesInInputsMethod=new CompileMethod(this);this.detectChangesRenderPropertiesMethod=new CompileMethod(this);this.afterContentLifecycleCallbacksMethod=new CompileMethod(this);this.afterViewLifecycleCallbacksMethod=new CompileMethod(this);this.destroyMethod=new CompileMethod(this);this.detachMethod=new CompileMethod(this);this.viewType=getViewType(component,viewIndex);this.className=viewClassName(component.type.reference,viewIndex);this.rendererTypeName=rendererTypeName(component.type.reference);this.classType=expressionType(variable(this.className));this.classExpr=variable(this.className);if(this.viewType===ɵViewType.COMPONENT||this.viewType===ɵViewType.HOST){this.componentView=this;}else{this.componentView=this.declarationElement.view.componentView;}this.componentContext=getPropertyInView(THIS_EXPR.prop('context'),this,this.componentView);var viewQueries=new Map();if(this.viewType===ɵViewType.COMPONENT){var _directiveInstance=THIS_EXPR.prop('context');this.component.viewQueries.forEach(function(queryMeta,queryIndex){var propName='_viewQuery_'+tokenName(queryMeta.selectors[0])+'_'+queryIndex;var queryList=createQueryList(propName,_this209);var query=new CompileQuery(queryMeta,queryList,_directiveInstance,_this209);addQueryToTokenMap(viewQueries,query);});}this.viewQueries=viewQueries;templateVariableBindings.forEach(function(entry){_this209.locals.set(entry[1],THIS_EXPR.prop('context').prop(entry[0]));});if(!this.declarationElement.isNull()){this.declarationElement.setEmbeddedView(this);}}/**
     * @param {?} name
     * @param {?} input
     * @param {?} args
     * @return {?}
     */_createClass(CompileView,[{key:'callPipe',value:function callPipe(name,input,args){return CompilePipe.call(this,name,[input].concat(args));}/**
     * @param {?} name
     * @return {?}
     */},{key:'getLocal',value:function getLocal(name){if(name==EventHandlerVars.event.name){return EventHandlerVars.event;}var/** @type {?} */currView=this;var/** @type {?} */result=currView.locals.get(name);while(!result&&isPresent(currView.declarationElement.view)){currView=currView.declarationElement.view;result=currView.locals.get(name);}if(isPresent(result)){return getPropertyInView(result,this,currView);}else{return null;}}/**
     * @return {?}
     */},{key:'finish',value:function finish(){var _this210=this;Array.from(this.viewQueries.values()).forEach(function(queries){return queries.forEach(function(q){return q.generateStatements(_this210.createMethod,_this210.updateViewQueriesMethod);});});}}]);return CompileView;}();/**
 * @param {?} component
 * @param {?} embeddedTemplateIndex
 * @return {?}
 */function getViewType(component,embeddedTemplateIndex){if(embeddedTemplateIndex>0){return ɵViewType.EMBEDDED;}if(component.isHost){return ɵViewType.HOST;}return ɵViewType.COMPONENT;}/**
 * @param {?} boundEvents
 * @param {?} directives
 * @param {?} compileElement
 * @param {?} bindToRenderer
 * @return {?}
 */function bindOutputs(boundEvents,directives,compileElement,bindToRenderer){var/** @type {?} */usedEvents=collectEvents(boundEvents,directives);if(!usedEvents.size){return false;}if(bindToRenderer){subscribeToRenderEvents(usedEvents,compileElement);}subscribeToDirectiveEvents(usedEvents,directives,compileElement);generateHandleEventMethod(boundEvents,directives,compileElement);return true;}/**
 * @param {?} boundEvents
 * @param {?} directives
 * @return {?}
 */function collectEvents(boundEvents,directives){var/** @type {?} */usedEvents=new Map();boundEvents.forEach(function(event){usedEvents.set(event.fullName,event);});directives.forEach(function(dirAst){dirAst.hostEvents.forEach(function(event){usedEvents.set(event.fullName,event);});});return usedEvents;}/**
 * @param {?} usedEvents
 * @param {?} compileElement
 * @return {?}
 */function subscribeToRenderEvents(usedEvents,compileElement){var/** @type {?} */eventAndTargetExprs=[];usedEvents.forEach(function(event){if(!event.phase){eventAndTargetExprs.push(literal(event.name),literal(event.target));}});if(eventAndTargetExprs.length){var/** @type {?} */disposableVar=variable('disposable_'+compileElement.view.disposables.length);compileElement.view.disposables.push(disposableVar);compileElement.view.createMethod.addStmt(disposableVar.set(importExpr(createIdentifier(Identifiers.subscribeToRenderElement)).callFn([THIS_EXPR,compileElement.renderNode,createInlineArray(eventAndTargetExprs),handleEventExpr(compileElement)])).toDeclStmt(FUNCTION_TYPE,[StmtModifier.Private]));}}/**
 * @param {?} usedEvents
 * @param {?} directives
 * @param {?} compileElement
 * @return {?}
 */function subscribeToDirectiveEvents(usedEvents,directives,compileElement){var/** @type {?} */usedEventNames=Array.from(usedEvents.keys());directives.forEach(function(dirAst){var/** @type {?} */dirWrapper=compileElement.directiveWrapperInstance.get(dirAst.directive.type.reference);compileElement.view.createMethod.addStmts(DirectiveWrapperExpressions.subscribe(dirAst.directive,dirAst.hostProperties,usedEventNames,dirWrapper,THIS_EXPR,handleEventExpr(compileElement)));});}/**
 * @param {?} boundEvents
 * @param {?} directives
 * @param {?} compileElement
 * @return {?}
 */function generateHandleEventMethod(boundEvents,directives,compileElement){var/** @type {?} */hasComponentHostListener=directives.some(function(dirAst){return dirAst.hostEvents.some(function(event){return dirAst.directive.isComponent;});});var/** @type {?} */markPathToRootStart=hasComponentHostListener?compileElement.compViewExpr:THIS_EXPR;var/** @type {?} */handleEventStmts=new CompileMethod(compileElement.view);handleEventStmts.resetDebugInfo(compileElement.nodeIndex,compileElement.sourceAst);handleEventStmts.push(markPathToRootStart.callMethod('markPathToRootAsCheckOnce',[]).toStmt());var/** @type {?} */eventNameVar=variable('eventName');var/** @type {?} */resultVar=variable('result');handleEventStmts.push(resultVar.set(literal(true)).toDeclStmt(BOOL_TYPE));directives.forEach(function(dirAst,dirIdx){var/** @type {?} */dirWrapper=compileElement.directiveWrapperInstance.get(dirAst.directive.type.reference);if(dirAst.hostEvents.length>0){handleEventStmts.push(resultVar.set(DirectiveWrapperExpressions.handleEvent(dirAst.hostEvents,dirWrapper,eventNameVar,EventHandlerVars.event).and(resultVar)).toStmt());}});boundEvents.forEach(function(renderEvent,renderEventIdx){var/** @type {?} */evalResult=convertActionBinding(compileElement.view,compileElement.view.componentContext,renderEvent.handler,'sub_'+renderEventIdx);var/** @type {?} */trueStmts=evalResult.stmts;if(evalResult.allowDefault){trueStmts.push(resultVar.set(evalResult.allowDefault.and(resultVar)).toStmt());}// TODO(tbosch): convert this into a `switch` once our OutputAst supports it.
handleEventStmts.push(new IfStmt(eventNameVar.equals(literal(renderEvent.fullName)),trueStmts));});handleEventStmts.push(new ReturnStatement(resultVar));compileElement.view.methods.push(new ClassMethod(getHandleEventMethodName(compileElement.nodeIndex),[new FnParam(eventNameVar.name,STRING_TYPE),new FnParam(EventHandlerVars.event.name,DYNAMIC_TYPE)],handleEventStmts.finish(),BOOL_TYPE));}/**
 * @param {?} compileElement
 * @return {?}
 */function handleEventExpr(compileElement){var/** @type {?} */handleEventMethodName=getHandleEventMethodName(compileElement.nodeIndex);return THIS_EXPR.callMethod('eventHandler',[THIS_EXPR.prop(handleEventMethodName)]);}/**
 * @param {?} directiveMeta
 * @param {?} directiveInstance
 * @param {?} compileElement
 * @return {?}
 */function bindDirectiveAfterContentLifecycleCallbacks(directiveMeta,directiveInstance,compileElement){var/** @type {?} */view=compileElement.view;var/** @type {?} */lifecycleHooks=directiveMeta.type.lifecycleHooks;var/** @type {?} */afterContentLifecycleCallbacksMethod=view.afterContentLifecycleCallbacksMethod;afterContentLifecycleCallbacksMethod.resetDebugInfo(compileElement.nodeIndex,compileElement.sourceAst);if(lifecycleHooks.indexOf(ɵLifecycleHooks.AfterContentInit)!==-1){afterContentLifecycleCallbacksMethod.addStmt(new IfStmt(isFirstViewCheck(THIS_EXPR),[directiveInstance.callMethod('ngAfterContentInit',[]).toStmt()]));}if(lifecycleHooks.indexOf(ɵLifecycleHooks.AfterContentChecked)!==-1){afterContentLifecycleCallbacksMethod.addStmt(directiveInstance.callMethod('ngAfterContentChecked',[]).toStmt());}}/**
 * @param {?} directiveMeta
 * @param {?} directiveInstance
 * @param {?} compileElement
 * @return {?}
 */function bindDirectiveAfterViewLifecycleCallbacks(directiveMeta,directiveInstance,compileElement){var/** @type {?} */view=compileElement.view;var/** @type {?} */lifecycleHooks=directiveMeta.type.lifecycleHooks;var/** @type {?} */afterViewLifecycleCallbacksMethod=view.afterViewLifecycleCallbacksMethod;afterViewLifecycleCallbacksMethod.resetDebugInfo(compileElement.nodeIndex,compileElement.sourceAst);if(lifecycleHooks.indexOf(ɵLifecycleHooks.AfterViewInit)!==-1){afterViewLifecycleCallbacksMethod.addStmt(new IfStmt(isFirstViewCheck(THIS_EXPR),[directiveInstance.callMethod('ngAfterViewInit',[]).toStmt()]));}if(lifecycleHooks.indexOf(ɵLifecycleHooks.AfterViewChecked)!==-1){afterViewLifecycleCallbacksMethod.addStmt(directiveInstance.callMethod('ngAfterViewChecked',[]).toStmt());}}/**
 * @param {?} dir
 * @param {?} directiveWrapperIntance
 * @param {?} compileElement
 * @return {?}
 */function bindDirectiveWrapperLifecycleCallbacks(dir,directiveWrapperIntance,compileElement){compileElement.view.destroyMethod.addStmts(DirectiveWrapperExpressions.ngOnDestroy(dir.directive,directiveWrapperIntance));compileElement.view.detachMethod.addStmts(DirectiveWrapperExpressions.ngOnDetach(dir.hostProperties,directiveWrapperIntance,THIS_EXPR,compileElement.compViewExpr||THIS_EXPR,compileElement.renderNode));}/**
 * @param {?} provider
 * @param {?} providerInstance
 * @param {?} compileElement
 * @return {?}
 */function bindInjectableDestroyLifecycleCallbacks(provider,providerInstance,compileElement){var/** @type {?} */onDestroyMethod=compileElement.view.destroyMethod;onDestroyMethod.resetDebugInfo(compileElement.nodeIndex,compileElement.sourceAst);if(provider.providerType!==ProviderAstType.Directive&&provider.providerType!==ProviderAstType.Component&&provider.lifecycleHooks.indexOf(ɵLifecycleHooks.OnDestroy)!==-1){onDestroyMethod.addStmt(providerInstance.callMethod('ngOnDestroy',[]).toStmt());}}/**
 * @param {?} pipeMeta
 * @param {?} pipeInstance
 * @param {?} view
 * @return {?}
 */function bindPipeDestroyLifecycleCallbacks(pipeMeta,pipeInstance,view){var/** @type {?} */onDestroyMethod=view.destroyMethod;if(pipeMeta.type.lifecycleHooks.indexOf(ɵLifecycleHooks.OnDestroy)!==-1){onDestroyMethod.addStmt(pipeInstance.callMethod('ngOnDestroy',[]).toStmt());}}/**
 * @param {?} boundText
 * @param {?} compileNode
 * @param {?} view
 * @return {?}
 */function bindRenderText(boundText,compileNode,view){var/** @type {?} */valueField=createCheckBindingField(view);var/** @type {?} */evalResult=legacyConvertPropertyBinding(view,view,view.componentContext,boundText.value,valueField.bindingId);if(!evalResult){return null;}view.detectChangesRenderPropertiesMethod.resetDebugInfo(compileNode.nodeIndex,boundText);view.detectChangesRenderPropertiesMethod.addStmts(evalResult.stmts);view.detectChangesRenderPropertiesMethod.addStmt(importExpr(createIdentifier(Identifiers.checkRenderText)).callFn([THIS_EXPR,compileNode.renderNode,valueField.expression,valueField.expression.set(evalResult.currValExpr),evalResult.forceUpdate||literal(false)]).toStmt());}/**
 * @param {?} boundProps
 * @param {?} boundOutputs
 * @param {?} hasEvents
 * @param {?} compileElement
 * @return {?}
 */function bindRenderInputs(boundProps,boundOutputs,hasEvents,compileElement){var/** @type {?} */view=compileElement.view;var/** @type {?} */renderNode=compileElement.renderNode;boundProps.forEach(function(boundProp){var/** @type {?} */bindingField=createCheckBindingField(view);view.detectChangesRenderPropertiesMethod.resetDebugInfo(compileElement.nodeIndex,boundProp);var/** @type {?} */evalResult=legacyConvertPropertyBinding(view,view,compileElement.view.componentContext,boundProp.value,bindingField.bindingId);if(!evalResult){return;}var/** @type {?} */compileMethod=view.detectChangesRenderPropertiesMethod;switch(boundProp.type){case PropertyBindingType.Property:case PropertyBindingType.Attribute:case PropertyBindingType.Class:case PropertyBindingType.Style:compileMethod.addStmts(createCheckRenderBindingStmt(THIS_EXPR,renderNode,boundProp,bindingField.expression,evalResult));break;case PropertyBindingType.Animation:compileMethod=view.animationBindingsMethod;var _createCheckAnimation2=createCheckAnimationBindingStmts(THIS_EXPR,THIS_EXPR,boundProp,boundOutputs,(hasEvents?THIS_EXPR.prop(getHandleEventMethodName(compileElement.nodeIndex)):importExpr(createIdentifier(Identifiers.noop))).callMethod(BuiltinMethod.Bind,[THIS_EXPR]),compileElement.renderNode,bindingField.expression,evalResult),checkUpdateStmts=_createCheckAnimation2.checkUpdateStmts,checkDetachStmts=_createCheckAnimation2.checkDetachStmts;view.detachMethod.addStmts(checkDetachStmts);compileMethod.addStmts(checkUpdateStmts);break;}});}/**
 * @param {?} directiveAst
 * @param {?} directiveWrapperInstance
 * @param {?} compileElement
 * @param {?} elementName
 * @param {?} schemaRegistry
 * @return {?}
 */function bindDirectiveHostProps(directiveAst,directiveWrapperInstance,compileElement,elementName,schemaRegistry){// We need to provide the SecurityContext for properties that could need sanitization.
var/** @type {?} */runtimeSecurityCtxExprs=directiveAst.hostProperties.filter(function(boundProp){return boundProp.needsRuntimeSecurityContext;}).map(function(boundProp){var/** @type {?} */ctx=void 0;switch(boundProp.type){case PropertyBindingType.Property:ctx=schemaRegistry.securityContext(elementName,boundProp.name,false);break;case PropertyBindingType.Attribute:ctx=schemaRegistry.securityContext(elementName,boundProp.name,true);break;default:throw new Error('Illegal state: Only property / attribute bindings can have an unknown security context! Binding '+boundProp.name);}return createEnumExpression(Identifiers.SecurityContext,ctx);});compileElement.view.detectChangesRenderPropertiesMethod.addStmts(DirectiveWrapperExpressions.checkHost(directiveAst.hostProperties,directiveWrapperInstance,THIS_EXPR,compileElement.compViewExpr||THIS_EXPR,compileElement.renderNode,runtimeSecurityCtxExprs));}/**
 * @param {?} directiveAst
 * @param {?} directiveWrapperInstance
 * @param {?} dirIndex
 * @param {?} compileElement
 * @return {?}
 */function bindDirectiveInputs(directiveAst,directiveWrapperInstance,dirIndex,compileElement){var/** @type {?} */view=compileElement.view;var/** @type {?} */detectChangesInInputsMethod=view.detectChangesInInputsMethod;detectChangesInInputsMethod.resetDebugInfo(compileElement.nodeIndex,compileElement.sourceAst);directiveAst.inputs.forEach(function(input,inputIdx){// Note: We can't use `fields.length` here, as we are not adding a field!
var/** @type {?} */bindingId=compileElement.nodeIndex+'_'+dirIndex+'_'+inputIdx;detectChangesInInputsMethod.resetDebugInfo(compileElement.nodeIndex,input);var/** @type {?} */evalResult=legacyConvertPropertyBinding(view,view,view.componentContext,input.value,bindingId);if(!evalResult){return;}detectChangesInInputsMethod.addStmts(evalResult.stmts);detectChangesInInputsMethod.addStmt(directiveWrapperInstance.callMethod('check_'+input.directiveName,[THIS_EXPR,evalResult.currValExpr,evalResult.forceUpdate||literal(false)]).toStmt());});var/** @type {?} */isOnPushComp=directiveAst.directive.isComponent&&!ɵisDefaultChangeDetectionStrategy(directiveAst.directive.changeDetection);var/** @type {?} */directiveDetectChangesExpr=DirectiveWrapperExpressions.ngDoCheck(directiveWrapperInstance,THIS_EXPR,compileElement.renderNode);var/** @type {?} */directiveDetectChangesStmt=isOnPushComp?new IfStmt(directiveDetectChangesExpr,[compileElement.compViewExpr.callMethod('markAsCheckOnce',[]).toStmt()]):directiveDetectChangesExpr.toStmt();detectChangesInInputsMethod.addStmt(directiveDetectChangesStmt);}/**
 * @param {?} ce
 * @return {?}
 */function bindQueryValues(ce){var/** @type {?} */queriesWithReads=[];ce.getProviderTokens().forEach(function(token){var/** @type {?} */queriesForProvider=ce.getQueriesFor(token);queriesWithReads.push.apply(queriesWithReads,_toConsumableArray(queriesForProvider.map(function(query){return new _QueryWithRead(query,token);})));});Object.keys(ce.referenceTokens).forEach(function(varName){var/** @type {?} */varToken={value:varName};queriesWithReads.push.apply(queriesWithReads,_toConsumableArray(ce.getQueriesFor(varToken).map(function(query){return new _QueryWithRead(query,varToken);})));});queriesWithReads.forEach(function(queryWithRead){var/** @type {?} */value=void 0;if(queryWithRead.read.identifier){// query for an identifier
value=ce.instances.get(tokenReference(queryWithRead.read));}else{// query for a reference
var/** @type {?} */token=ce.referenceTokens[queryWithRead.read.value];if(token){value=ce.instances.get(tokenReference(token));}else{value=ce.elementRef;}}if(value){queryWithRead.query.addValue(value,ce.view);}});}var _QueryWithRead=/**
     * @param {?} query
     * @param {?} match
     */function _QueryWithRead(query,match){_classCallCheck(this,_QueryWithRead);this.query=query;this.read=query.meta.read||match;};/**
 * @param {?} view
 * @param {?} parsedTemplate
 * @param {?} schemaRegistry
 * @return {?}
 */function bindView(view,parsedTemplate,schemaRegistry){var/** @type {?} */visitor=new ViewBinderVisitor(view,schemaRegistry);templateVisitAll(visitor,parsedTemplate);view.pipes.forEach(function(pipe){bindPipeDestroyLifecycleCallbacks(pipe.meta,pipe.instance,pipe.view);});}var ViewBinderVisitor=function(){/**
     * @param {?} view
     * @param {?} _schemaRegistry
     */function ViewBinderVisitor(view,_schemaRegistry){_classCallCheck(this,ViewBinderVisitor);this.view=view;this._schemaRegistry=_schemaRegistry;this._nodeIndex=0;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */_createClass(ViewBinderVisitor,[{key:'visitBoundText',value:function visitBoundText(ast,parent){var/** @type {?} */node=this.view.nodes[this._nodeIndex++];bindRenderText(ast,node,this.view);return null;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitText',value:function visitText(ast,parent){this._nodeIndex++;return null;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitNgContent',value:function visitNgContent(ast,parent){return null;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitElement',value:function visitElement(ast,parent){var _this211=this;var/** @type {?} */compileElement=this.view.nodes[this._nodeIndex++];bindQueryValues(compileElement);var/** @type {?} */hasEvents=bindOutputs(ast.outputs,ast.directives,compileElement,true);bindRenderInputs(ast.inputs,ast.outputs,hasEvents,compileElement);ast.directives.forEach(function(directiveAst,dirIndex){var/** @type {?} */directiveWrapperInstance=compileElement.directiveWrapperInstance.get(directiveAst.directive.type.reference);bindDirectiveInputs(directiveAst,directiveWrapperInstance,dirIndex,compileElement);bindDirectiveHostProps(directiveAst,directiveWrapperInstance,compileElement,ast.name,_this211._schemaRegistry);});templateVisitAll(this,ast.children,compileElement);// afterContent and afterView lifecycles need to be called bottom up
// so that children are notified before parents
ast.directives.forEach(function(directiveAst){var/** @type {?} */directiveInstance=compileElement.instances.get(directiveAst.directive.type.reference);var/** @type {?} */directiveWrapperInstance=compileElement.directiveWrapperInstance.get(directiveAst.directive.type.reference);bindDirectiveAfterContentLifecycleCallbacks(directiveAst.directive,directiveInstance,compileElement);bindDirectiveAfterViewLifecycleCallbacks(directiveAst.directive,directiveInstance,compileElement);bindDirectiveWrapperLifecycleCallbacks(directiveAst,directiveWrapperInstance,compileElement);});ast.providers.forEach(function(providerAst){var/** @type {?} */providerInstance=compileElement.instances.get(tokenReference(providerAst.token));bindInjectableDestroyLifecycleCallbacks(providerAst,providerInstance,compileElement);});return null;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitEmbeddedTemplate',value:function visitEmbeddedTemplate(ast,parent){var/** @type {?} */compileElement=this.view.nodes[this._nodeIndex++];bindQueryValues(compileElement);bindOutputs(ast.outputs,ast.directives,compileElement,false);ast.directives.forEach(function(directiveAst,dirIndex){var/** @type {?} */directiveInstance=compileElement.instances.get(directiveAst.directive.type.reference);var/** @type {?} */directiveWrapperInstance=compileElement.directiveWrapperInstance.get(directiveAst.directive.type.reference);bindDirectiveInputs(directiveAst,directiveWrapperInstance,dirIndex,compileElement);bindDirectiveAfterContentLifecycleCallbacks(directiveAst.directive,directiveInstance,compileElement);bindDirectiveAfterViewLifecycleCallbacks(directiveAst.directive,directiveInstance,compileElement);bindDirectiveWrapperLifecycleCallbacks(directiveAst,directiveWrapperInstance,compileElement);});ast.providers.forEach(function(providerAst){var/** @type {?} */providerInstance=compileElement.instances.get(tokenReference(providerAst.token));bindInjectableDestroyLifecycleCallbacks(providerAst,providerInstance,compileElement);});bindView(compileElement.embeddedView,ast.children,this._schemaRegistry);return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitAttr',value:function visitAttr(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDirective',value:function visitDirective(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} eventTargetAndNames
     * @return {?}
     */},{key:'visitEvent',value:function visitEvent(ast,eventTargetAndNames){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReference',value:function visitReference(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitVariable',value:function visitVariable(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitDirectiveProperty',value:function visitDirectiveProperty(ast,context){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitElementProperty',value:function visitElementProperty(ast,context){return null;}}]);return ViewBinderVisitor;}();var/** @type {?} */IMPLICIT_TEMPLATE_VAR='\$implicit';var/** @type {?} */CLASS_ATTR$1='class';var/** @type {?} */STYLE_ATTR='style';var/** @type {?} */NG_CONTAINER_TAG='ng-container';var/** @type {?} */parentRenderNodeVar=variable('parentRenderNode');var/** @type {?} */rootSelectorVar=variable('rootSelector');/**
 * @param {?} view
 * @param {?} template
 * @param {?} targetDependencies
 * @return {?}
 */function buildView(view,template,targetDependencies){var/** @type {?} */builderVisitor=new ViewBuilderVisitor(view,targetDependencies);var/** @type {?} */parentEl=view.declarationElement.isNull()?view.declarationElement:view.declarationElement.parent;templateVisitAll(builderVisitor,template,parentEl);if(view.viewType===ɵViewType.EMBEDDED||view.viewType===ɵViewType.HOST){view.lastRenderNode=builderVisitor.getOrCreateLastRenderNode();}return builderVisitor.nestedViewCount;}/**
 * @param {?} view
 * @param {?} targetStatements
 * @return {?}
 */function finishView(view,targetStatements){view.nodes.forEach(function(node){if(node instanceof CompileElement){node.finish();if(node.hasEmbeddedView){finishView(node.embeddedView,targetStatements);}}});view.finish();createViewTopLevelStmts(view,targetStatements);}var ViewBuilderVisitor=function(){/**
     * @param {?} view
     * @param {?} targetDependencies
     */function ViewBuilderVisitor(view,targetDependencies){_classCallCheck(this,ViewBuilderVisitor);this.view=view;this.targetDependencies=targetDependencies;this.nestedViewCount=0;}/**
     * @param {?} parent
     * @return {?}
     */_createClass(ViewBuilderVisitor,[{key:'_isRootNode',value:function _isRootNode(parent){return parent.view!==this.view;}/**
     * @param {?} node
     * @return {?}
     */},{key:'_addRootNodeAndProject',value:function _addRootNodeAndProject(node){var/** @type {?} */projectedNode=_getOuterContainerOrSelf(node);var/** @type {?} */parent=projectedNode.parent;var/** @type {?} */ngContentIndex=projectedNode.sourceAst.ngContentIndex;var/** @type {?} */viewContainer=node instanceof CompileElement&&node.hasViewContainer?node.viewContainer:null;if(this._isRootNode(parent)){if(this.view.viewType!==ɵViewType.COMPONENT){this.view.rootNodes.push(new CompileViewRootNode(viewContainer?CompileViewRootNodeType.ViewContainer:CompileViewRootNodeType.Node,viewContainer||node.renderNode));}}else if(isPresent(parent.component)&&isPresent(ngContentIndex)){parent.addContentNode(ngContentIndex,new CompileViewRootNode(viewContainer?CompileViewRootNodeType.ViewContainer:CompileViewRootNodeType.Node,viewContainer||node.renderNode));}}/**
     * @param {?} parent
     * @return {?}
     */},{key:'_getParentRenderNode',value:function _getParentRenderNode(parent){parent=_getOuterContainerParentOrSelf(parent);if(this._isRootNode(parent)){if(this.view.viewType===ɵViewType.COMPONENT){return parentRenderNodeVar;}else{// root node of an embedded/host view
return NULL_EXPR;}}else{return isPresent(parent.component)&&parent.component.template.encapsulation!==ViewEncapsulation.Native?NULL_EXPR:parent.renderNode;}}/**
     * @return {?}
     */},{key:'getOrCreateLastRenderNode',value:function getOrCreateLastRenderNode(){var/** @type {?} */view=this.view;if(view.rootNodes.length===0||view.rootNodes[view.rootNodes.length-1].type!==CompileViewRootNodeType.Node){var/** @type {?} */fieldName='_el_'+view.nodes.length;view.fields.push(new ClassField(fieldName,importType(view.genConfig.renderTypes.renderElement)));view.createMethod.addStmt(THIS_EXPR.prop(fieldName).set(ViewProperties.renderer.callMethod('createTemplateAnchor',[NULL_EXPR,NULL_EXPR])).toStmt());view.rootNodes.push(new CompileViewRootNode(CompileViewRootNodeType.Node,THIS_EXPR.prop(fieldName)));}return view.rootNodes[view.rootNodes.length-1].expr;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitBoundText',value:function visitBoundText(ast,parent){return this._visitText(ast,'',parent);}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitText',value:function visitText(ast,parent){return this._visitText(ast,ast.value,parent);}/**
     * @param {?} ast
     * @param {?} value
     * @param {?} parent
     * @return {?}
     */},{key:'_visitText',value:function _visitText(ast,value,parent){var/** @type {?} */fieldName='_text_'+this.view.nodes.length;this.view.fields.push(new ClassField(fieldName,importType(this.view.genConfig.renderTypes.renderText)));var/** @type {?} */renderNode=THIS_EXPR.prop(fieldName);var/** @type {?} */compileNode=new CompileNode(parent,this.view,this.view.nodes.length,renderNode,ast);var/** @type {?} */createRenderNode=THIS_EXPR.prop(fieldName).set(ViewProperties.renderer.callMethod('createText',[this._getParentRenderNode(parent),literal(value),this.view.createMethod.resetDebugInfoExpr(this.view.nodes.length,ast)])).toStmt();this.view.nodes.push(compileNode);this.view.createMethod.addStmt(createRenderNode);this._addRootNodeAndProject(compileNode);return renderNode;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitNgContent',value:function visitNgContent(ast,parent){// the projected nodes originate from a different view, so we don't
// have debug information for them...
this.view.createMethod.resetDebugInfo(null,ast);var/** @type {?} */parentRenderNode=this._getParentRenderNode(parent);if(parentRenderNode!==NULL_EXPR){this.view.createMethod.addStmt(THIS_EXPR.callMethod('projectNodes',[parentRenderNode,literal(ast.index)]).toStmt());}else if(this._isRootNode(parent)){if(this.view.viewType!==ɵViewType.COMPONENT){// store root nodes only for embedded/host views
this.view.rootNodes.push(new CompileViewRootNode(CompileViewRootNodeType.NgContent,null,ast.index));}}else{if(isPresent(parent.component)&&isPresent(ast.ngContentIndex)){parent.addContentNode(ast.ngContentIndex,new CompileViewRootNode(CompileViewRootNodeType.NgContent,null,ast.index));}}return null;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitElement',value:function visitElement(ast,parent){var/** @type {?} */nodeIndex=this.view.nodes.length;var/** @type {?} */createRenderNodeExpr=void 0;var/** @type {?} */debugContextExpr=this.view.createMethod.resetDebugInfoExpr(nodeIndex,ast);var/** @type {?} */directives=ast.directives.map(function(directiveAst){return directiveAst.directive;});var/** @type {?} */component=directives.find(function(directive){return directive.isComponent;});if(ast.name===NG_CONTAINER_TAG){createRenderNodeExpr=ViewProperties.renderer.callMethod('createTemplateAnchor',[this._getParentRenderNode(parent),debugContextExpr]);}else{var/** @type {?} */htmlAttrs=_readHtmlAttrs(ast.attrs);var/** @type {?} */attrNameAndValues=createInlineArray(_mergeHtmlAndDirectiveAttrs(htmlAttrs,directives).map(function(v){return literal(v);}));if(nodeIndex===0&&this.view.viewType===ɵViewType.HOST){createRenderNodeExpr=importExpr(createIdentifier(Identifiers.selectOrCreateRenderHostElement)).callFn([ViewProperties.renderer,literal(ast.name),attrNameAndValues,rootSelectorVar,debugContextExpr]);}else{createRenderNodeExpr=importExpr(createIdentifier(Identifiers.createRenderElement)).callFn([ViewProperties.renderer,this._getParentRenderNode(parent),literal(ast.name),attrNameAndValues,debugContextExpr]);}}var/** @type {?} */fieldName='_el_'+nodeIndex;this.view.fields.push(new ClassField(fieldName,importType(this.view.genConfig.renderTypes.renderElement)));this.view.createMethod.addStmt(THIS_EXPR.prop(fieldName).set(createRenderNodeExpr).toStmt());var/** @type {?} */renderNode=THIS_EXPR.prop(fieldName);var/** @type {?} */compileElement=new CompileElement(parent,this.view,nodeIndex,renderNode,ast,component,directives,ast.providers,ast.hasViewContainer,false,ast.references);this.view.nodes.push(compileElement);var/** @type {?} */compViewExpr=null;if(isPresent(component)){this.targetDependencies.push(new ComponentViewDependency(component.type.reference));compViewExpr=THIS_EXPR.prop('compView_'+nodeIndex);// fix highlighting: `
this.view.fields.push(new ClassField(compViewExpr.name,importType(createIdentifier(Identifiers.AppView),[importType(component.type)])));this.view.viewChildren.push(compViewExpr);compileElement.setComponentView(compViewExpr);this.view.createMethod.addStmt(compViewExpr.set(importExpr({reference:component.componentViewType}).instantiate([ViewProperties.viewUtils,THIS_EXPR,literal(nodeIndex),renderNode])).toStmt());}compileElement.beforeChildren();this._addRootNodeAndProject(compileElement);templateVisitAll(this,ast.children,compileElement);compileElement.afterChildren(this.view.nodes.length-nodeIndex-1);if(isPresent(compViewExpr)){this.view.createMethod.addStmt(compViewExpr.callMethod('create',[compileElement.getComponent()]).toStmt());}return null;}/**
     * @param {?} ast
     * @param {?} parent
     * @return {?}
     */},{key:'visitEmbeddedTemplate',value:function visitEmbeddedTemplate(ast,parent){var/** @type {?} */nodeIndex=this.view.nodes.length;var/** @type {?} */fieldName='_anchor_'+nodeIndex;this.view.fields.push(new ClassField(fieldName,importType(this.view.genConfig.renderTypes.renderComment)));this.view.createMethod.addStmt(THIS_EXPR.prop(fieldName).set(ViewProperties.renderer.callMethod('createTemplateAnchor',[this._getParentRenderNode(parent),this.view.createMethod.resetDebugInfoExpr(nodeIndex,ast)])).toStmt());var/** @type {?} */renderNode=THIS_EXPR.prop(fieldName);var/** @type {?} */templateVariableBindings=ast.variables.map(function(varAst){return[varAst.value.length>0?varAst.value:IMPLICIT_TEMPLATE_VAR,varAst.name];});var/** @type {?} */directives=ast.directives.map(function(directiveAst){return directiveAst.directive;});var/** @type {?} */compileElement=new CompileElement(parent,this.view,nodeIndex,renderNode,ast,null,directives,ast.providers,ast.hasViewContainer,true,ast.references);this.view.nodes.push(compileElement);this.nestedViewCount++;var/** @type {?} */embeddedView=new CompileView(this.view.component,this.view.genConfig,this.view.pipeMetas,NULL_EXPR,this.view.animations,this.view.viewIndex+this.nestedViewCount,compileElement,templateVariableBindings,this.targetDependencies);this.nestedViewCount+=buildView(embeddedView,ast.children,this.targetDependencies);compileElement.beforeChildren();this._addRootNodeAndProject(compileElement);compileElement.afterChildren(0);return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitAttr',value:function visitAttr(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDirective',value:function visitDirective(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} eventTargetAndNames
     * @return {?}
     */},{key:'visitEvent',value:function visitEvent(ast,eventTargetAndNames){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReference',value:function visitReference(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitVariable',value:function visitVariable(ast,ctx){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitDirectiveProperty',value:function visitDirectiveProperty(ast,context){return null;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitElementProperty',value:function visitElementProperty(ast,context){return null;}}]);return ViewBuilderVisitor;}();/**
 * Walks up the nodes while the direct parent is a container.
 *
 * Returns the outer container or the node itself when it is not a direct child of a container.
 *
 * \@internal
 * @param {?} node
 * @return {?}
 */function _getOuterContainerOrSelf(node){var/** @type {?} */view=node.view;while(_isNgContainer(node.parent,view)){node=node.parent;}return node;}/**
 * Walks up the nodes while they are container and returns the first parent which is not.
 *
 * Returns the parent of the outer container or the node itself when it is not a container.
 *
 * \@internal
 * @param {?} el
 * @return {?}
 */function _getOuterContainerParentOrSelf(el){var/** @type {?} */view=el.view;while(_isNgContainer(el,view)){el=el.parent;}return el;}/**
 * @param {?} node
 * @param {?} view
 * @return {?}
 */function _isNgContainer(node,view){return!node.isNull()&&node.sourceAst.name===NG_CONTAINER_TAG&&node.view===view;}/**
 * @param {?} declaredHtmlAttrs
 * @param {?} directives
 * @return {?}
 */function _mergeHtmlAndDirectiveAttrs(declaredHtmlAttrs,directives){var/** @type {?} */mapResult={};Object.keys(declaredHtmlAttrs).forEach(function(key){mapResult[key]=declaredHtmlAttrs[key];});directives.forEach(function(directiveMeta){Object.keys(directiveMeta.hostAttributes).forEach(function(name){var/** @type {?} */value=directiveMeta.hostAttributes[name];var/** @type {?} */prevValue=mapResult[name];mapResult[name]=isPresent(prevValue)?mergeAttributeValue(name,prevValue,value):value;});});var/** @type {?} */arrResult=[];// Note: We need to sort to get a defined output order
// for tests and for caching generated artifacts...
Object.keys(mapResult).sort().forEach(function(attrName){arrResult.push(attrName,mapResult[attrName]);});return arrResult;}/**
 * @param {?} attrs
 * @return {?}
 */function _readHtmlAttrs(attrs){var/** @type {?} */htmlAttrs={};attrs.forEach(function(ast){htmlAttrs[ast.name]=ast.value;});return htmlAttrs;}/**
 * @param {?} attrName
 * @param {?} attrValue1
 * @param {?} attrValue2
 * @return {?}
 */function mergeAttributeValue(attrName,attrValue1,attrValue2){if(attrName==CLASS_ATTR$1||attrName==STYLE_ATTR){return attrValue1+' '+attrValue2;}else{return attrValue2;}}/**
 * @param {?} view
 * @param {?} targetStatements
 * @return {?}
 */function createViewTopLevelStmts(view,targetStatements){var/** @type {?} */nodeDebugInfosVar=NULL_EXPR;if(view.genConfig.genDebugInfo){nodeDebugInfosVar=variable('nodeDebugInfos_'+identifierName(view.component.type)+view.viewIndex);// fix
// highlighting:
// `
targetStatements.push(nodeDebugInfosVar.set(literalArr(view.nodes.map(createStaticNodeDebugInfo),new ArrayType(importType(createIdentifier(Identifiers.StaticNodeDebugInfo)),[TypeModifier.Const]))).toDeclStmt(null,[StmtModifier.Final]));}var/** @type {?} */renderCompTypeVar=variable(view.rendererTypeName);// fix highlighting: `
if(view.viewIndex===0){var/** @type {?} */templateUrlInfo=void 0;if(view.component.template.templateUrl==identifierModuleUrl(view.component.type)){templateUrlInfo=identifierModuleUrl(view.component.type)+' class '+identifierName(view.component.type)+' - inline template';}else{templateUrlInfo=view.component.template.templateUrl;}targetStatements.push(renderCompTypeVar.set(importExpr(createIdentifier(Identifiers.createRenderComponentType)).callFn([view.genConfig.genDebugInfo?literal(templateUrlInfo):literal(''),literal(view.component.template.ngContentSelectors.length),ViewEncapsulationEnum.fromValue(view.component.template.encapsulation),view.styles,literalMap(view.animations.map(function(entry){return[entry.name,entry.fnExp];}),null,true)])).toDeclStmt(importType(createIdentifier(Identifiers.RenderComponentType))));}var/** @type {?} */viewClass=createViewClass(view,renderCompTypeVar,nodeDebugInfosVar);targetStatements.push(viewClass);}/**
 * @param {?} node
 * @return {?}
 */function createStaticNodeDebugInfo(node){var/** @type {?} */compileElement=node instanceof CompileElement?node:null;var/** @type {?} */providerTokens=[];var/** @type {?} */componentToken=NULL_EXPR;var/** @type {?} */varTokenEntries=[];if(isPresent(compileElement)){providerTokens=compileElement.getProviderTokens().map(function(token){return createDiTokenExpression(token);});if(isPresent(compileElement.component)){componentToken=createDiTokenExpression(identifierToken(compileElement.component.type));}Object.keys(compileElement.referenceTokens).forEach(function(varName){var/** @type {?} */token=compileElement.referenceTokens[varName];varTokenEntries.push([varName,isPresent(token)?createDiTokenExpression(token):NULL_EXPR]);});}return importExpr(createIdentifier(Identifiers.StaticNodeDebugInfo)).instantiate([literalArr(providerTokens,new ArrayType(DYNAMIC_TYPE,[TypeModifier.Const])),componentToken,literalMap(varTokenEntries,new MapType(DYNAMIC_TYPE,[TypeModifier.Const]))],importType(createIdentifier(Identifiers.StaticNodeDebugInfo),null,[TypeModifier.Const]));}/**
 * @param {?} view
 * @param {?} renderCompTypeVar
 * @param {?} nodeDebugInfosVar
 * @return {?}
 */function createViewClass(view,renderCompTypeVar,nodeDebugInfosVar){var/** @type {?} */viewConstructorArgs=[new FnParam(ViewConstructorVars.viewUtils.name,importType(createIdentifier(Identifiers.ViewUtils))),new FnParam(ViewConstructorVars.parentView.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(ViewConstructorVars.parentIndex.name,NUMBER_TYPE),new FnParam(ViewConstructorVars.parentElement.name,DYNAMIC_TYPE)];var/** @type {?} */superConstructorArgs=[variable(view.className),renderCompTypeVar,ViewTypeEnum.fromValue(view.viewType),ViewConstructorVars.viewUtils,ViewConstructorVars.parentView,ViewConstructorVars.parentIndex,ViewConstructorVars.parentElement,ChangeDetectorStatusEnum.fromValue(getChangeDetectionMode(view))];if(view.genConfig.genDebugInfo){superConstructorArgs.push(nodeDebugInfosVar);}if(view.viewType===ɵViewType.EMBEDDED){viewConstructorArgs.push(new FnParam('declaredViewContainer',importType(createIdentifier(Identifiers.ViewContainer))));superConstructorArgs.push(variable('declaredViewContainer'));}var/** @type {?} */viewMethods=[new ClassMethod('createInternal',[new FnParam(rootSelectorVar.name,STRING_TYPE)],generateCreateMethod(view),importType(createIdentifier(Identifiers.ComponentRef),[DYNAMIC_TYPE])),new ClassMethod('injectorGetInternal',[new FnParam(InjectMethodVars$1.token.name,DYNAMIC_TYPE),// Note: Can't use o.INT_TYPE here as the method in AppView uses number
new FnParam(InjectMethodVars$1.requestNodeIndex.name,NUMBER_TYPE),new FnParam(InjectMethodVars$1.notFoundResult.name,DYNAMIC_TYPE)],addReturnValuefNotEmpty(view.injectorGetMethod.finish(),InjectMethodVars$1.notFoundResult),DYNAMIC_TYPE),new ClassMethod('detectChangesInternal',[],generateDetectChangesMethod(view)),new ClassMethod('dirtyParentQueriesInternal',[],view.dirtyParentQueriesMethod.finish()),new ClassMethod('destroyInternal',[],generateDestroyMethod(view)),new ClassMethod('detachInternal',[],view.detachMethod.finish()),generateVisitRootNodesMethod(view),generateVisitProjectableNodesMethod(view),generateCreateEmbeddedViewsMethod(view)].filter(function(method){return method.body.length>0;});var/** @type {?} */superClass=view.genConfig.genDebugInfo?Identifiers.DebugAppView:Identifiers.AppView;var/** @type {?} */viewClass=createClassStmt({name:view.className,parent:importExpr(createIdentifier(superClass),[getContextType(view)]),parentArgs:superConstructorArgs,ctorParams:viewConstructorArgs,builders:[{methods:viewMethods},view]});return viewClass;}/**
 * @param {?} view
 * @return {?}
 */function generateDestroyMethod(view){var/** @type {?} */stmts=[];view.viewContainers.forEach(function(viewContainer){stmts.push(viewContainer.callMethod('destroyNestedViews',[]).toStmt());});view.viewChildren.forEach(function(viewChild){stmts.push(viewChild.callMethod('destroy',[]).toStmt());});stmts.push.apply(stmts,_toConsumableArray(view.destroyMethod.finish()));return stmts;}/**
 * @param {?} view
 * @return {?}
 */function generateCreateMethod(view){var/** @type {?} */parentRenderNodeExpr=NULL_EXPR;var/** @type {?} */parentRenderNodeStmts=[];if(view.viewType===ɵViewType.COMPONENT){parentRenderNodeExpr=ViewProperties.renderer.callMethod('createViewRoot',[THIS_EXPR.prop('parentElement')]);parentRenderNodeStmts=[parentRenderNodeVar.set(parentRenderNodeExpr).toDeclStmt(importType(view.genConfig.renderTypes.renderNode),[StmtModifier.Final])];}var/** @type {?} */resultExpr=void 0;if(view.viewType===ɵViewType.HOST){var/** @type {?} */hostEl=view.nodes[0];resultExpr=importExpr(createIdentifier(Identifiers.ComponentRef_),[DYNAMIC_TYPE]).instantiate([literal(hostEl.nodeIndex),THIS_EXPR,hostEl.renderNode,hostEl.getComponent()]);}else{resultExpr=NULL_EXPR;}var/** @type {?} */allNodesExpr=ViewProperties.renderer.cast(DYNAMIC_TYPE).prop('directRenderer').conditional(NULL_EXPR,literalArr(view.nodes.map(function(node){return node.renderNode;})));return parentRenderNodeStmts.concat(view.createMethod.finish(),[THIS_EXPR.callMethod('init',[view.lastRenderNode,allNodesExpr,view.disposables.length?literalArr(view.disposables):NULL_EXPR]).toStmt(),new ReturnStatement(resultExpr)]);}/**
 * @param {?} view
 * @return {?}
 */function generateDetectChangesMethod(view){var/** @type {?} */stmts=[];if(view.animationBindingsMethod.isEmpty()&&view.detectChangesInInputsMethod.isEmpty()&&view.updateContentQueriesMethod.isEmpty()&&view.afterContentLifecycleCallbacksMethod.isEmpty()&&view.detectChangesRenderPropertiesMethod.isEmpty()&&view.updateViewQueriesMethod.isEmpty()&&view.afterViewLifecycleCallbacksMethod.isEmpty()&&view.viewContainers.length===0&&view.viewChildren.length===0){return stmts;}stmts.push.apply(stmts,_toConsumableArray(view.animationBindingsMethod.finish()));stmts.push.apply(stmts,_toConsumableArray(view.detectChangesInInputsMethod.finish()));view.viewContainers.forEach(function(viewContainer){stmts.push(viewContainer.callMethod('detectChangesInNestedViews',[ViewProperties.throwOnChange]).toStmt());});var/** @type {?} */afterContentStmts=view.updateContentQueriesMethod.finish().concat(view.afterContentLifecycleCallbacksMethod.finish());if(afterContentStmts.length>0){stmts.push(new IfStmt(not(ViewProperties.throwOnChange),afterContentStmts));}stmts.push.apply(stmts,_toConsumableArray(view.detectChangesRenderPropertiesMethod.finish()));view.viewChildren.forEach(function(viewChild){stmts.push(viewChild.callMethod('internalDetectChanges',[ViewProperties.throwOnChange]).toStmt());});var/** @type {?} */afterViewStmts=view.updateViewQueriesMethod.finish().concat(view.afterViewLifecycleCallbacksMethod.finish());if(afterViewStmts.length>0){stmts.push(new IfStmt(not(ViewProperties.throwOnChange),afterViewStmts));}var/** @type {?} */varStmts=legacyCreateSharedBindingVariablesIfNeeded(stmts);return varStmts.concat(stmts);}/**
 * @param {?} statements
 * @param {?} value
 * @return {?}
 */function addReturnValuefNotEmpty(statements,value){if(statements.length>0){return statements.concat([new ReturnStatement(value)]);}else{return statements;}}/**
 * @param {?} view
 * @return {?}
 */function getContextType(view){if(view.viewType===ɵViewType.COMPONENT){return importType(view.component.type);}return DYNAMIC_TYPE;}/**
 * @param {?} view
 * @return {?}
 */function getChangeDetectionMode(view){var/** @type {?} */mode=void 0;if(view.viewType===ɵViewType.COMPONENT){mode=ɵisDefaultChangeDetectionStrategy(view.component.changeDetection)?ɵChangeDetectorStatus.CheckAlways:ɵChangeDetectorStatus.CheckOnce;}else{mode=ɵChangeDetectorStatus.CheckAlways;}return mode;}/**
 * @param {?} view
 * @return {?}
 */function generateVisitRootNodesMethod(view){var/** @type {?} */cbVar=variable('cb');var/** @type {?} */ctxVar=variable('ctx');var/** @type {?} */stmts=generateVisitNodesStmts(view.rootNodes,cbVar,ctxVar);return new ClassMethod('visitRootNodesInternal',[new FnParam(cbVar.name,DYNAMIC_TYPE),new FnParam(ctxVar.name,DYNAMIC_TYPE)],stmts);}/**
 * @param {?} view
 * @return {?}
 */function generateVisitProjectableNodesMethod(view){var/** @type {?} */nodeIndexVar=variable('nodeIndex');var/** @type {?} */ngContentIndexVar=variable('ngContentIndex');var/** @type {?} */cbVar=variable('cb');var/** @type {?} */ctxVar=variable('ctx');var/** @type {?} */stmts=[];view.nodes.forEach(function(node){if(node instanceof CompileElement&&node.component){node.contentNodesByNgContentIndex.forEach(function(projectedNodes,ngContentIndex){stmts.push(new IfStmt(nodeIndexVar.equals(literal(node.nodeIndex)).and(ngContentIndexVar.equals(literal(ngContentIndex))),generateVisitNodesStmts(projectedNodes,cbVar,ctxVar)));});}});return new ClassMethod('visitProjectableNodesInternal',[new FnParam(nodeIndexVar.name,NUMBER_TYPE),new FnParam(ngContentIndexVar.name,NUMBER_TYPE),new FnParam(cbVar.name,DYNAMIC_TYPE),new FnParam(ctxVar.name,DYNAMIC_TYPE)],stmts);}/**
 * @param {?} nodes
 * @param {?} cb
 * @param {?} ctx
 * @return {?}
 */function generateVisitNodesStmts(nodes,cb,ctx){var/** @type {?} */stmts=[];nodes.forEach(function(node){switch(node.type){case CompileViewRootNodeType.Node:stmts.push(cb.callFn([node.expr,ctx]).toStmt());break;case CompileViewRootNodeType.ViewContainer:stmts.push(cb.callFn([node.expr.prop('nativeElement'),ctx]).toStmt());stmts.push(node.expr.callMethod('visitNestedViewRootNodes',[cb,ctx]).toStmt());break;case CompileViewRootNodeType.NgContent:stmts.push(THIS_EXPR.callMethod('visitProjectedNodes',[literal(node.ngContentIndex),cb,ctx]).toStmt());break;}});return stmts;}/**
 * @param {?} view
 * @return {?}
 */function generateCreateEmbeddedViewsMethod(view){var/** @type {?} */nodeIndexVar=variable('nodeIndex');var/** @type {?} */stmts=[];view.nodes.forEach(function(node){if(node instanceof CompileElement){if(node.embeddedView){stmts.push(new IfStmt(nodeIndexVar.equals(literal(node.nodeIndex)),[new ReturnStatement(node.embeddedView.classExpr.instantiate([ViewProperties.viewUtils,THIS_EXPR,literal(node.nodeIndex),node.renderNode,node.viewContainer]))]));}}});if(stmts.length>0){stmts.push(new ReturnStatement(NULL_EXPR));}return new ClassMethod('createEmbeddedViewInternal',[new FnParam(nodeIndexVar.name,NUMBER_TYPE)],stmts,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE]));}var ViewCompileResult=/**
     * @param {?} statements
     * @param {?} viewClassVar
     * @param {?} rendererTypeVar
     * @param {?} dependencies
     */function ViewCompileResult(statements,viewClassVar,rendererTypeVar,dependencies){_classCallCheck(this,ViewCompileResult);this.statements=statements;this.viewClassVar=viewClassVar;this.rendererTypeVar=rendererTypeVar;this.dependencies=dependencies;};var ViewCompiler=function(){/**
     * @param {?} _genConfig
     * @param {?} _schemaRegistry
     */function ViewCompiler(_genConfig,_schemaRegistry){_classCallCheck(this,ViewCompiler);this._genConfig=_genConfig;this._schemaRegistry=_schemaRegistry;}/**
     * @param {?} component
     * @param {?} template
     * @param {?} styles
     * @param {?} pipes
     * @param {?} compiledAnimations
     * @return {?}
     */_createClass(ViewCompiler,[{key:'compileComponent',value:function compileComponent(component,template,styles,pipes,compiledAnimations){var/** @type {?} */dependencies=[];var/** @type {?} */view=new CompileView(component,this._genConfig,pipes,styles,compiledAnimations,0,CompileElement.createNull(),[],dependencies);var/** @type {?} */statements=[];buildView(view,template,dependencies);// Need to separate binding from creation to be able to refer to
// variables that have been declared after usage.
bindView(view,template,this._schemaRegistry);finishView(view,statements);return new ViewCompileResult(statements,view.classExpr.name,view.rendererTypeName,dependencies);}}]);return ViewCompiler;}();ViewCompiler.decorators=[{type:CompilerInjectable}];/** @nocollapse */ViewCompiler.ctorParameters=function(){return[{type:CompilerConfig},{type:ElementSchemaRegistry}];};var/** @type {?} */CLASS_ATTR$2='class';var/** @type {?} */STYLE_ATTR$1='style';var/** @type {?} */IMPLICIT_TEMPLATE_VAR$1='\$implicit';var/** @type {?} */NG_CONTAINER_TAG$1='ng-container';var ViewCompilerNext=function(_ViewCompiler){_inherits(ViewCompilerNext,_ViewCompiler);/**
     * @param {?} _genConfigNext
     * @param {?} _schemaRegistryNext
     */function ViewCompilerNext(_genConfigNext,_schemaRegistryNext){_classCallCheck(this,ViewCompilerNext);var _this212=_possibleConstructorReturn(this,(ViewCompilerNext.__proto__||Object.getPrototypeOf(ViewCompilerNext)).call(this,_genConfigNext,_schemaRegistryNext));_this212._genConfigNext=_genConfigNext;_this212._schemaRegistryNext=_schemaRegistryNext;return _this212;}/**
     * @param {?} component
     * @param {?} template
     * @param {?} styles
     * @param {?} usedPipes
     * @param {?} compiledAnimations
     * @return {?}
     */_createClass(ViewCompilerNext,[{key:'compileComponent',value:function compileComponent(component,template,styles,usedPipes,compiledAnimations){var/** @type {?} */embeddedViewCount=0;var/** @type {?} */staticQueryIds=findStaticQueryIds(template);var/** @type {?} */statements=[];var/** @type {?} */renderComponentVar=variable(rendererTypeName(component.type.reference));statements.push(renderComponentVar.set(importExpr(createIdentifier(Identifiers.createRendererTypeV2)).callFn([new LiteralMapExpr([new LiteralMapEntry('encapsulation',literal(component.template.encapsulation)),new LiteralMapEntry('styles',styles),new LiteralMapEntry('data',literalMap([['animation',convertValueToOutputAst(component.template.animations)]]))])])).toDeclStmt(importType(createIdentifier(Identifiers.RendererTypeV2)),[StmtModifier.Final]));var/** @type {?} */viewBuilderFactory=function viewBuilderFactory(parent){var/** @type {?} */embeddedViewIndex=embeddedViewCount++;return new ViewBuilder(parent,component,embeddedViewIndex,usedPipes,staticQueryIds,viewBuilderFactory);};var/** @type {?} */visitor=viewBuilderFactory(null);visitor.visitAll([],template);statements.push.apply(statements,_toConsumableArray(visitor.build()));return new ViewCompileResult(statements,visitor.viewName,renderComponentVar.name,[]);}}]);return ViewCompilerNext;}(ViewCompiler);ViewCompilerNext.decorators=[{type:CompilerInjectable}];/** @nocollapse */ViewCompilerNext.ctorParameters=function(){return[{type:CompilerConfig},{type:ElementSchemaRegistry}];};var/** @type {?} */VIEW_VAR$1=variable('view');var/** @type {?} */CHECK_VAR=variable('check');var/** @type {?} */COMP_VAR=variable('comp');var/** @type {?} */NODE_INDEX_VAR=variable('nodeIndex');var/** @type {?} */EVENT_NAME_VAR$1=variable('eventName');var/** @type {?} */ALLOW_DEFAULT_VAR=variable('allowDefault');var ViewBuilder=function(){/**
     * @param {?} parent
     * @param {?} component
     * @param {?} embeddedViewIndex
     * @param {?} usedPipes
     * @param {?} staticQueryIds
     * @param {?} viewBuilderFactory
     */function ViewBuilder(parent,component,embeddedViewIndex,usedPipes,staticQueryIds,viewBuilderFactory){_classCallCheck(this,ViewBuilder);this.parent=parent;this.component=component;this.embeddedViewIndex=embeddedViewIndex;this.usedPipes=usedPipes;this.staticQueryIds=staticQueryIds;this.viewBuilderFactory=viewBuilderFactory;this.nodeDefs=[];this.purePipeNodeIndices=Object.create(null);this.refNodeIndices=Object.create(null);this.variables=[];this.children=[];this.updateDirectivesExpressions=[];this.updateRendererExpressions=[];// TODO(tbosch): The old view compiler used to use an `any` type
// for the context in any embedded view. We keep this behaivor for now
// to be able to introduce the new view compiler without too many errors.
this.compType=this.embeddedViewIndex>0?DYNAMIC_TYPE:importType(this.component.type);}/**
     * @return {?}
     */_createClass(ViewBuilder,[{key:'visitAll',/**
     * @param {?} variables
     * @param {?} astNodes
     * @return {?}
     */value:function visitAll(variables,astNodes){var _this213=this;this.variables=variables;// create the pipes for the pure pipes immediately, so that we know their indices.
if(!this.parent){this.usedPipes.forEach(function(pipe){if(pipe.pure){_this213.purePipeNodeIndices[pipe.name]=_this213._createPipe(pipe);}});}if(!this.parent){var/** @type {?} */queryIds=staticViewQueryIds(this.staticQueryIds);this.component.viewQueries.forEach(function(query,queryIndex){// Note: queries start with id 1 so we can use the number in a Bloom filter!
var/** @type {?} */queryId=queryIndex+1;var/** @type {?} */bindingType=query.first?ɵQueryBindingType.First:ɵQueryBindingType.All;var/** @type {?} */flags=ɵNodeFlags.HasViewQuery;if(queryIds.staticQueryIds.has(queryId)){flags|=ɵNodeFlags.HasStaticQuery;}else{flags|=ɵNodeFlags.HasDynamicQuery;}_this213.nodeDefs.push(function(){return importExpr(createIdentifier(Identifiers.queryDef)).callFn([literal(flags),literal(queryId),new LiteralMapExpr([new LiteralMapEntry(query.propertyName,literal(bindingType))])]);});});}templateVisitAll(this,astNodes);if(astNodes.length===0||this.parent&&needsAdditionalRootNode(astNodes[astNodes.length-1])){// if the view is empty, or an embedded view has a view container as last root nde,
// create an additional root node.
this.nodeDefs.push(function(){return importExpr(createIdentifier(Identifiers.anchorDef)).callFn([literal(ɵNodeFlags.None),NULL_EXPR,NULL_EXPR,literal(0)]);});}}/**
     * @param {?=} targetStatements
     * @return {?}
     */},{key:'build',value:function build(){var targetStatements=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];this.children.forEach(function(child){return child.build(targetStatements);});var/** @type {?} */updateDirectivesFn=this._createUpdateFn(this.updateDirectivesExpressions);var/** @type {?} */updateRendererFn=this._createUpdateFn(this.updateRendererExpressions);var/** @type {?} */viewFlags=ɵViewFlags.None;if(!this.parent&&this.component.changeDetection===ChangeDetectionStrategy.OnPush){viewFlags|=ɵViewFlags.OnPush;}var/** @type {?} */viewFactory=new DeclareFunctionStmt(this.viewName,[],[new ReturnStatement(importExpr(createIdentifier(Identifiers.viewDef)).callFn([literal(viewFlags),literalArr(this.nodeDefs.map(function(nd){return nd();})),updateDirectivesFn,updateRendererFn]))],importType(createIdentifier(Identifiers.ViewDefinition)));targetStatements.push(viewFactory);return targetStatements;}/**
     * @param {?} expressions
     * @return {?}
     */},{key:'_createUpdateFn',value:function _createUpdateFn(expressions){var _this214=this;var/** @type {?} */updateStmts=[];var/** @type {?} */updateBindingCount=0;expressions.forEach(function(_ref33){var expressions=_ref33.expressions,nodeIndex=_ref33.nodeIndex;var/** @type {?} */exprs=expressions.map(function(_ref34){var context=_ref34.context,value=_ref34.value;var/** @type {?} */bindingId=''+updateBindingCount++;var/** @type {?} */nameResolver=context===COMP_VAR?_this214:null;var _convertPropertyBindi2=convertPropertyBinding(nameResolver,context,value,bindingId),stmts=_convertPropertyBindi2.stmts,currValExpr=_convertPropertyBindi2.currValExpr;updateStmts.push.apply(updateStmts,_toConsumableArray(stmts));return currValExpr;});updateStmts.push(callCheckStmt(nodeIndex,exprs).toStmt());});var/** @type {?} */updateFn=void 0;if(updateStmts.length>0){var/** @type {?} */preStmts=[];if(!this.component.isHost){preStmts.push(COMP_VAR.set(VIEW_VAR$1.prop('component')).toDeclStmt(this.compType));}updateFn=fn([new FnParam(CHECK_VAR.name,INFERRED_TYPE),new FnParam(VIEW_VAR$1.name,INFERRED_TYPE)],[].concat(preStmts,updateStmts),INFERRED_TYPE);}else{updateFn=NULL_EXPR;}return updateFn;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitNgContent',value:function visitNgContent(ast,context){// ngContentDef(ngContentIndex: number, index: number): NodeDef;
this.nodeDefs.push(function(){return importExpr(createIdentifier(Identifiers.ngContentDef)).callFn([literal(ast.ngContentIndex),literal(ast.index)]);});}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitText',value:function visitText(ast,context){// textDef(ngContentIndex: number, constants: string[]): NodeDef;
this.nodeDefs.push(function(){return importExpr(createIdentifier(Identifiers.textDef)).callFn([literal(ast.ngContentIndex),literalArr([literal(ast.value)])]);});}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitBoundText',value:function visitBoundText(ast,context){var/** @type {?} */nodeIndex=this.nodeDefs.length;// reserve the space in the nodeDefs array
this.nodeDefs.push(null);var/** @type {?} */astWithSource=ast.value;var/** @type {?} */inter=astWithSource.ast;this._addUpdateExpressions(nodeIndex,inter.expressions.map(function(expr){return{context:COMP_VAR,value:expr};}),this.updateRendererExpressions);// textDef(ngContentIndex: number, constants: string[]): NodeDef;
this.nodeDefs[nodeIndex]=function(){return importExpr(createIdentifier(Identifiers.textDef)).callFn([literal(ast.ngContentIndex),literalArr(inter.strings.map(function(s){return literal(s);}))]);};}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitEmbeddedTemplate',value:function visitEmbeddedTemplate(ast,context){var _this215=this;var/** @type {?} */nodeIndex=this.nodeDefs.length;// reserve the space in the nodeDefs array
this.nodeDefs.push(null);var _visitElementOrTempla=this._visitElementOrTemplate(nodeIndex,ast),flags=_visitElementOrTempla.flags,queryMatchesExpr=_visitElementOrTempla.queryMatchesExpr,hostEvents=_visitElementOrTempla.hostEvents;var/** @type {?} */childVisitor=this.viewBuilderFactory(this);this.children.push(childVisitor);childVisitor.visitAll(ast.variables,ast.children);var/** @type {?} */childCount=this.nodeDefs.length-nodeIndex-1;// anchorDef(
//   flags: NodeFlags, matchedQueries: [string, QueryValueType][], ngContentIndex: number,
//   childCount: number, handleEventFn?: ElementHandleEventFn, templateFactory?:
//   ViewDefinitionFactory): NodeDef;
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.anchorDef)).callFn([literal(flags),queryMatchesExpr,literal(ast.ngContentIndex),literal(childCount),_this215._createElementHandleEventFn(nodeIndex,hostEvents),variable(childVisitor.viewName)]);};this.nodeDefs[nodeIndex]=nodeDef;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitElement',value:function visitElement(ast,context){var _this216=this;var/** @type {?} */nodeIndex=this.nodeDefs.length;// reserve the space in the nodeDefs array so we can add children
this.nodeDefs.push(null);var/** @type {?} */elName=ast.name;if(ast.name===NG_CONTAINER_TAG$1){// Using a null element name creates an anchor.
elName=null;}var _visitElementOrTempla2=this._visitElementOrTemplate(nodeIndex,ast),flags=_visitElementOrTempla2.flags,usedEvents=_visitElementOrTempla2.usedEvents,queryMatchesExpr=_visitElementOrTempla2.queryMatchesExpr,hostBindings=_visitElementOrTempla2.hostBindings,hostEvents=_visitElementOrTempla2.hostEvents;var/** @type {?} */inputDefs=[];var/** @type {?} */outputDefs=[];if(elName){ast.inputs.forEach(function(inputAst){return hostBindings.push({context:COMP_VAR,value:inputAst.value});});if(hostBindings.length){this._addUpdateExpressions(nodeIndex,hostBindings,this.updateRendererExpressions);}// Note: inputDefs have to be in the same order as hostBindings:
// - first the entries from the directives, then the ones from the element.
ast.directives.forEach(function(dirAst,dirIndex){return inputDefs.push.apply(inputDefs,_toConsumableArray(elementBindingDefs(dirAst.hostProperties,dirAst)));});inputDefs.push.apply(inputDefs,_toConsumableArray(elementBindingDefs(ast.inputs,null)));outputDefs=usedEvents.map(function(_ref35){var _ref36=_slicedToArray(_ref35,2),target=_ref36[0],eventName=_ref36[1];return literalArr([literal(target),literal(eventName)]);});}templateVisitAll(this,ast.children);var/** @type {?} */childCount=this.nodeDefs.length-nodeIndex-1;var/** @type {?} */compAst=ast.directives.find(function(dirAst){return dirAst.directive.isComponent;});var/** @type {?} */compRendererType=NULL_EXPR;var/** @type {?} */compView=NULL_EXPR;if(compAst){compView=importExpr({reference:compAst.directive.componentViewType});compRendererType=importExpr({reference:compAst.directive.rendererType});}// elementDef(
//   flags: NodeFlags, matchedQueriesDsl: [string | number, QueryValueType][],
//   ngContentIndex: number, childCount: number, namespaceAndName: string,
//   fixedAttrs: [string, string][] = [],
//   bindings?:
//       ([BindingType.ElementClass, string] | [BindingType.ElementStyle, string, string] |
//        [BindingType.ElementAttribute | BindingType.ElementProperty |
//        BindingType.DirectiveHostProperty, string, SecurityContext])[],
//   outputs?: ([OutputType.ElementOutput | OutputType.DirectiveHostOutput, string, string])[],
//   handleEvent?: ElementHandleEventFn,
//   componentView?: () => ViewDefinition, componentRendererType?: RendererTypeV2): NodeDef;
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.elementDef)).callFn([literal(flags),queryMatchesExpr,literal(ast.ngContentIndex),literal(childCount),literal(elName),elName?fixedAttrsDef(ast):NULL_EXPR,inputDefs.length?literalArr(inputDefs):NULL_EXPR,outputDefs.length?literalArr(outputDefs):NULL_EXPR,_this216._createElementHandleEventFn(nodeIndex,hostEvents),compView,compRendererType]);};this.nodeDefs[nodeIndex]=nodeDef;}/**
     * @param {?} nodeIndex
     * @param {?} ast
     * @return {?}
     */},{key:'_visitElementOrTemplate',value:function _visitElementOrTemplate(nodeIndex,ast){var _this217=this;var/** @type {?} */flags=ɵNodeFlags.None;if(ast.hasViewContainer){flags|=ɵNodeFlags.HasEmbeddedViews;}var/** @type {?} */usedEvents=new Map();ast.outputs.forEach(function(event){var _elementEventNameAndT=elementEventNameAndTarget(event,null),name=_elementEventNameAndT.name,target=_elementEventNameAndT.target;usedEvents.set(ɵelementEventFullName(target,name),[target,name]);});ast.directives.forEach(function(dirAst){dirAst.hostEvents.forEach(function(event){var _elementEventNameAndT2=elementEventNameAndTarget(event,dirAst),name=_elementEventNameAndT2.name,target=_elementEventNameAndT2.target;usedEvents.set(ɵelementEventFullName(target,name),[target,name]);});});var/** @type {?} */hostBindings=[];var/** @type {?} */hostEvents=[];var/** @type {?} */componentFactoryResolverProvider=createComponentFactoryResolver(ast.directives);if(componentFactoryResolverProvider){this._visitProvider(componentFactoryResolverProvider,ast.queryMatches);}ast.providers.forEach(function(providerAst,providerIndex){var/** @type {?} */dirAst=void 0;var/** @type {?} */dirIndex=void 0;ast.directives.forEach(function(localDirAst,i){if(localDirAst.directive.type.reference===tokenReference(providerAst.token)){dirAst=localDirAst;dirIndex=i;}});if(dirAst){var _visitDirective2=_this217._visitDirective(providerAst,dirAst,dirIndex,nodeIndex,ast.references,ast.queryMatches,usedEvents,_this217.staticQueryIds.get(/** @type {?} */ast)),dirHostBindings=_visitDirective2.hostBindings,dirHostEvents=_visitDirective2.hostEvents;hostBindings.push.apply(hostBindings,_toConsumableArray(dirHostBindings));hostEvents.push.apply(hostEvents,_toConsumableArray(dirHostEvents));}else{_this217._visitProvider(providerAst,ast.queryMatches);}});var/** @type {?} */queryMatchExprs=[];ast.queryMatches.forEach(function(match){var/** @type {?} */valueType=void 0;if(tokenReference(match.value)===resolveIdentifier(Identifiers.ElementRef)){valueType=ɵQueryValueType.ElementRef;}else if(tokenReference(match.value)===resolveIdentifier(Identifiers.ViewContainerRef)){valueType=ɵQueryValueType.ViewContainerRef;}else if(tokenReference(match.value)===resolveIdentifier(Identifiers.TemplateRef)){valueType=ɵQueryValueType.TemplateRef;}if(valueType!=null){queryMatchExprs.push(literalArr([literal(match.queryId),literal(valueType)]));}});ast.references.forEach(function(ref){var/** @type {?} */valueType=void 0;if(!ref.value){valueType=ɵQueryValueType.RenderElement;}else if(tokenReference(ref.value)===resolveIdentifier(Identifiers.TemplateRef)){valueType=ɵQueryValueType.TemplateRef;}if(valueType!=null){_this217.refNodeIndices[ref.name]=nodeIndex;queryMatchExprs.push(literalArr([literal(ref.name),literal(valueType)]));}});ast.outputs.forEach(function(outputAst){hostEvents.push({context:COMP_VAR,eventAst:outputAst,dirAst:null});});return{flags:flags,usedEvents:Array.from(usedEvents.values()),queryMatchesExpr:queryMatchExprs.length?literalArr(queryMatchExprs):NULL_EXPR,hostBindings:hostBindings,hostEvents:hostEvents};}/**
     * @param {?} providerAst
     * @param {?} dirAst
     * @param {?} directiveIndex
     * @param {?} elementNodeIndex
     * @param {?} refs
     * @param {?} queryMatches
     * @param {?} usedEvents
     * @param {?} queryIds
     * @return {?}
     */},{key:'_visitDirective',value:function _visitDirective(providerAst,dirAst,directiveIndex,elementNodeIndex,refs,queryMatches,usedEvents,queryIds){var _this218=this;var/** @type {?} */nodeIndex=this.nodeDefs.length;// reserve the space in the nodeDefs array so we can add children
this.nodeDefs.push(null);dirAst.directive.queries.forEach(function(query,queryIndex){var/** @type {?} */flags=ɵNodeFlags.HasContentQuery;var/** @type {?} */queryId=dirAst.contentQueryStartId+queryIndex;// Note: We only make queries static that query for a single item.
// This is because of backwards compatibility with the old view compiler...
if(queryIds.staticQueryIds.has(queryId)&&query.first){flags|=ɵNodeFlags.HasStaticQuery;}else{flags|=ɵNodeFlags.HasDynamicQuery;}var/** @type {?} */bindingType=query.first?ɵQueryBindingType.First:ɵQueryBindingType.All;_this218.nodeDefs.push(function(){return importExpr(createIdentifier(Identifiers.queryDef)).callFn([literal(flags),literal(queryId),new LiteralMapExpr([new LiteralMapEntry(query.propertyName,literal(bindingType))])]);});});// Note: the operation below might also create new nodeDefs,
// but we don't want them to be a child of a directive,
// as they might be a provider/pipe on their own.
// I.e. we only allow queries as children of directives nodes.
var/** @type {?} */childCount=this.nodeDefs.length-nodeIndex-1;var _visitProviderOrDirec=this._visitProviderOrDirective(providerAst,queryMatches),flags=_visitProviderOrDirec.flags,queryMatchExprs=_visitProviderOrDirec.queryMatchExprs,providerExpr=_visitProviderOrDirec.providerExpr,providerType=_visitProviderOrDirec.providerType,depsExpr=_visitProviderOrDirec.depsExpr;refs.forEach(function(ref){if(ref.value&&tokenReference(ref.value)===tokenReference(providerAst.token)){_this218.refNodeIndices[ref.name]=nodeIndex;queryMatchExprs.push(literalArr([literal(ref.name),literal(ɵQueryValueType.Provider)]));}});if(dirAst.directive.isComponent){flags|=ɵNodeFlags.IsComponent;}var/** @type {?} */inputDefs=dirAst.inputs.map(function(inputAst,inputIndex){var/** @type {?} */mapValue=literalArr([literal(inputIndex),literal(inputAst.directiveName)]);// Note: it's important to not quote the key so that we can capture renames by minifiers!
return new LiteralMapEntry(inputAst.directiveName,mapValue,false);});var/** @type {?} */outputDefs=[];var/** @type {?} */dirMeta=dirAst.directive;Object.keys(dirMeta.outputs).forEach(function(propName){var/** @type {?} */eventName=dirMeta.outputs[propName];if(usedEvents.has(eventName)){// Note: it's important to not quote the key so that we can capture renames by minifiers!
outputDefs.push(new LiteralMapEntry(propName,literal(eventName),false));}});if(dirAst.inputs.length||(flags&(ɵNodeFlags.DoCheck|ɵNodeFlags.OnInit))>0){this._addUpdateExpressions(nodeIndex,dirAst.inputs.map(function(input){return{context:COMP_VAR,value:input.value};}),this.updateDirectivesExpressions);}var/** @type {?} */dirContextExpr=importExpr(createIdentifier(Identifiers.nodeValue)).callFn([VIEW_VAR$1,literal(nodeIndex)]);var/** @type {?} */hostBindings=dirAst.hostProperties.map(function(hostBindingAst){return{value:hostBindingAst.value.ast,context:dirContextExpr};});var/** @type {?} */hostEvents=dirAst.hostEvents.map(function(hostEventAst){return{context:dirContextExpr,eventAst:hostEventAst,dirAst:dirAst};});// directiveDef(
//   flags: NodeFlags, matchedQueries: [string, QueryValueType][], childCount: number, ctor:
//   any,
//   deps: ([DepFlags, any] | any)[], props?: {[name: string]: [number, string]},
//   outputs?: {[name: string]: string}, component?: () => ViewDefinition): NodeDef;
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.directiveDef)).callFn([literal(flags),queryMatchExprs.length?literalArr(queryMatchExprs):NULL_EXPR,literal(childCount),providerExpr,depsExpr,inputDefs.length?new LiteralMapExpr(inputDefs):NULL_EXPR,outputDefs.length?new LiteralMapExpr(outputDefs):NULL_EXPR]);};this.nodeDefs[nodeIndex]=nodeDef;return{hostBindings:hostBindings,hostEvents:hostEvents};}/**
     * @param {?} providerAst
     * @param {?} queryMatches
     * @return {?}
     */},{key:'_visitProvider',value:function _visitProvider(providerAst,queryMatches){var/** @type {?} */nodeIndex=this.nodeDefs.length;// reserve the space in the nodeDefs array so we can add children
this.nodeDefs.push(null);var _visitProviderOrDirec2=this._visitProviderOrDirective(providerAst,queryMatches),flags=_visitProviderOrDirec2.flags,queryMatchExprs=_visitProviderOrDirec2.queryMatchExprs,providerExpr=_visitProviderOrDirec2.providerExpr,providerType=_visitProviderOrDirec2.providerType,depsExpr=_visitProviderOrDirec2.depsExpr;// providerDef(
//   flags: NodeFlags, matchedQueries: [string, QueryValueType][], type: ProviderType, token:
//   any,
//   value: any, deps: ([DepFlags, any] | any)[]): NodeDef;
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.providerDef)).callFn([literal(flags),queryMatchExprs.length?literalArr(queryMatchExprs):NULL_EXPR,literal(providerType),tokenExpr(providerAst.token),providerExpr,depsExpr]);};this.nodeDefs[nodeIndex]=nodeDef;}/**
     * @param {?} providerAst
     * @param {?} queryMatches
     * @return {?}
     */},{key:'_visitProviderOrDirective',value:function _visitProviderOrDirective(providerAst,queryMatches){var/** @type {?} */flags=ɵNodeFlags.None;if(!providerAst.eager){flags|=ɵNodeFlags.LazyProvider;}if(providerAst.providerType===ProviderAstType.PrivateService){flags|=ɵNodeFlags.PrivateProvider;}providerAst.lifecycleHooks.forEach(function(lifecycleHook){// for regular providers, we only support ngOnDestroy
if(lifecycleHook===ɵLifecycleHooks.OnDestroy||providerAst.providerType===ProviderAstType.Directive||providerAst.providerType===ProviderAstType.Component){flags|=lifecycleHookToNodeFlag(lifecycleHook);}});var/** @type {?} */queryMatchExprs=[];queryMatches.forEach(function(match){if(tokenReference(match.value)===tokenReference(providerAst.token)){queryMatchExprs.push(literalArr([literal(match.queryId),literal(ɵQueryValueType.Provider)]));}});var _providerDef=providerDef(providerAst),providerExpr=_providerDef.providerExpr,providerType=_providerDef.providerType,depsExpr=_providerDef.depsExpr;return{flags:flags,queryMatchExprs:queryMatchExprs,providerExpr:providerExpr,providerType:providerType,depsExpr:depsExpr};}/**
     * @param {?} name
     * @return {?}
     */},{key:'getLocal',value:function getLocal(name){if(name==EventHandlerVars.event.name){return EventHandlerVars.event;}var/** @type {?} */currViewExpr=VIEW_VAR$1;for(var/** @type {?} */currBuilder=this;currBuilder;currBuilder=currBuilder.parent,currViewExpr=currViewExpr.prop('parent')){// check references
var/** @type {?} */refNodeIndex=currBuilder.refNodeIndices[name];if(refNodeIndex!=null){return importExpr(createIdentifier(Identifiers.nodeValue)).callFn([currViewExpr,literal(refNodeIndex)]);}// check variables
var/** @type {?} */varAst=currBuilder.variables.find(function(varAst){return varAst.name===name;});if(varAst){var/** @type {?} */varValue=varAst.value||IMPLICIT_TEMPLATE_VAR$1;return currViewExpr.prop('context').prop(varValue);}}return null;}/**
     * @param {?} argCount
     * @return {?}
     */},{key:'createLiteralArrayConverter',value:function createLiteralArrayConverter(argCount){if(argCount===0){var/** @type {?} */valueExpr=importExpr(createIdentifier(Identifiers.EMPTY_ARRAY));return function(){return valueExpr;};}var/** @type {?} */nodeIndex=this.nodeDefs.length;// pureArrayDef(argCount: number): NodeDef;
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.pureArrayDef)).callFn([literal(argCount)]);};this.nodeDefs.push(nodeDef);return function(args){return callCheckStmt(nodeIndex,args);};}/**
     * @param {?} keys
     * @return {?}
     */},{key:'createLiteralMapConverter',value:function createLiteralMapConverter(keys){if(keys.length===0){var/** @type {?} */valueExpr=importExpr(createIdentifier(Identifiers.EMPTY_MAP));return function(){return valueExpr;};}var/** @type {?} */nodeIndex=this.nodeDefs.length;// function pureObjectDef(propertyNames: string[]): NodeDef
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.pureObjectDef)).callFn([literalArr(keys.map(function(key){return literal(key);}))]);};this.nodeDefs.push(nodeDef);return function(args){return callCheckStmt(nodeIndex,args);};}/**
     * @param {?} name
     * @param {?} argCount
     * @return {?}
     */},{key:'createPipeConverter',value:function createPipeConverter(name,argCount){var/** @type {?} */pipe=this._findPipe(name);if(pipe.pure){var/** @type {?} */nodeIndex=this.nodeDefs.length;// function purePipeDef(argCount: number): NodeDef;
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.purePipeDef)).callFn([literal(argCount)]);};this.nodeDefs.push(nodeDef);// find underlying pipe in the component view
var/** @type {?} */compViewExpr=VIEW_VAR$1;var/** @type {?} */compBuilder=this;while(compBuilder.parent){compBuilder=compBuilder.parent;compViewExpr=compViewExpr.prop('parent');}var/** @type {?} */pipeNodeIndex=compBuilder.purePipeNodeIndices[name];var/** @type {?} */pipeValueExpr=importExpr(createIdentifier(Identifiers.nodeValue)).callFn([compViewExpr,literal(pipeNodeIndex)]);return function(args){return callUnwrapValue(callCheckStmt(nodeIndex,[pipeValueExpr].concat(args)));};}else{var/** @type {?} */_nodeIndex=this._createPipe(pipe);var/** @type {?} */nodeValueExpr=importExpr(createIdentifier(Identifiers.nodeValue)).callFn([VIEW_VAR$1,literal(_nodeIndex)]);return function(args){return callUnwrapValue(nodeValueExpr.callMethod('transform',args));};}}/**
     * @param {?} name
     * @return {?}
     */},{key:'_findPipe',value:function _findPipe(name){return this.usedPipes.find(function(pipeSummary){return pipeSummary.name===name;});}/**
     * @param {?} pipe
     * @return {?}
     */},{key:'_createPipe',value:function _createPipe(pipe){var/** @type {?} */nodeIndex=this.nodeDefs.length;var/** @type {?} */flags=ɵNodeFlags.None;pipe.type.lifecycleHooks.forEach(function(lifecycleHook){// for pipes, we only support ngOnDestroy
if(lifecycleHook===ɵLifecycleHooks.OnDestroy){flags|=lifecycleHookToNodeFlag(lifecycleHook);}});var/** @type {?} */depExprs=pipe.type.diDeps.map(depDef);// function pipeDef(
//   flags: NodeFlags, ctor: any, deps: ([DepFlags, any] | any)[]): NodeDef
var/** @type {?} */nodeDef=function nodeDef(){return importExpr(createIdentifier(Identifiers.pipeDef)).callFn([literal(flags),importExpr(pipe.type),literalArr(depExprs)]);};this.nodeDefs.push(nodeDef);return nodeIndex;}/**
     * @param {?} nodeIndex
     * @param {?} expressions
     * @param {?} target
     * @return {?}
     */},{key:'_addUpdateExpressions',value:function _addUpdateExpressions(nodeIndex,expressions,target){var _this219=this;var/** @type {?} */transformedExpressions=expressions.map(function(_ref37){var context=_ref37.context,value=_ref37.value;if(value instanceof ASTWithSource){value=value.ast;}return{context:context,value:convertPropertyBindingBuiltins(_this219,value)};});target.push({nodeIndex:nodeIndex,expressions:transformedExpressions});}/**
     * @param {?} nodeIndex
     * @param {?} handlers
     * @return {?}
     */},{key:'_createElementHandleEventFn',value:function _createElementHandleEventFn(nodeIndex,handlers){var _this220=this;var/** @type {?} */handleEventStmts=[];var/** @type {?} */handleEventBindingCount=0;handlers.forEach(function(_ref38){var context=_ref38.context,eventAst=_ref38.eventAst,dirAst=_ref38.dirAst;var/** @type {?} */bindingId=''+handleEventBindingCount++;var/** @type {?} */nameResolver=context===COMP_VAR?_this220:null;var/** @type {?} */expression=eventAst.handler instanceof ASTWithSource?eventAst.handler.ast:eventAst.handler;var _convertActionBinding=convertActionBinding(nameResolver,context,expression,bindingId),stmts=_convertActionBinding.stmts,allowDefault=_convertActionBinding.allowDefault;var/** @type {?} */trueStmts=stmts;if(allowDefault){trueStmts.push(ALLOW_DEFAULT_VAR.set(allowDefault.and(ALLOW_DEFAULT_VAR)).toStmt());}var _elementEventNameAndT3=elementEventNameAndTarget(eventAst,dirAst),eventTarget=_elementEventNameAndT3.target,eventName=_elementEventNameAndT3.name;var/** @type {?} */fullEventName=ɵelementEventFullName(eventTarget,eventName);handleEventStmts.push(new IfStmt(literal(fullEventName).identical(EVENT_NAME_VAR$1),trueStmts));});var/** @type {?} */handleEventFn=void 0;if(handleEventStmts.length>0){var/** @type {?} */preStmts=[ALLOW_DEFAULT_VAR.set(literal(true)).toDeclStmt(BOOL_TYPE)];if(!this.component.isHost){preStmts.push(COMP_VAR.set(VIEW_VAR$1.prop('component')).toDeclStmt(this.compType));}handleEventFn=fn([new FnParam(VIEW_VAR$1.name,INFERRED_TYPE),new FnParam(EVENT_NAME_VAR$1.name,INFERRED_TYPE),new FnParam(EventHandlerVars.event.name,INFERRED_TYPE)],[].concat(preStmts,handleEventStmts,[new ReturnStatement(ALLOW_DEFAULT_VAR)]),INFERRED_TYPE);}else{handleEventFn=NULL_EXPR;}return handleEventFn;}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitDirective',value:function visitDirective(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitDirectiveProperty',value:function visitDirectiveProperty(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitReference',value:function visitReference(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitVariable',value:function visitVariable(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitEvent',value:function visitEvent(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitElementProperty',value:function visitElementProperty(ast,context){}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAttr',value:function visitAttr(ast,context){}},{key:'viewName',get:function get(){return viewClassName(this.component.type.reference,this.embeddedViewIndex);}}]);return ViewBuilder;}();/**
 * @param {?} providerAst
 * @return {?}
 */function providerDef(providerAst){return providerAst.multiProvider?multiProviderDef(providerAst.providers):singleProviderDef(providerAst.providers[0]);}/**
 * @param {?} providers
 * @return {?}
 */function multiProviderDef(providers){var/** @type {?} */allDepDefs=[];var/** @type {?} */allParams=[];var/** @type {?} */exprs=providers.map(function(provider,providerIndex){var/** @type {?} */expr=void 0;if(provider.useClass){var/** @type {?} */depExprs=convertDeps(providerIndex,provider.deps||provider.useClass.diDeps);expr=importExpr(provider.useClass).instantiate(depExprs);}else if(provider.useFactory){var/** @type {?} */_depExprs=convertDeps(providerIndex,provider.deps||provider.useFactory.diDeps);expr=importExpr(provider.useFactory).callFn(_depExprs);}else if(provider.useExisting){var/** @type {?} */_depExprs2=convertDeps(providerIndex,[{token:provider.useExisting}]);expr=_depExprs2[0];}else{expr=convertValueToOutputAst(provider.useValue);}return expr;});var/** @type {?} */providerExpr=fn(allParams,[new ReturnStatement(literalArr(exprs))],INFERRED_TYPE);return{providerExpr:providerExpr,providerType:ɵProviderType.Factory,depsExpr:literalArr(allDepDefs)};/**
     * @param {?} providerIndex
     * @param {?} deps
     * @return {?}
     */function convertDeps(providerIndex,deps){return deps.map(function(dep,depIndex){var/** @type {?} */paramName='p'+providerIndex+'_'+depIndex;allParams.push(new FnParam(paramName,DYNAMIC_TYPE));allDepDefs.push(depDef(dep));return variable(paramName);});}}/**
 * @param {?} providerMeta
 * @return {?}
 */function singleProviderDef(providerMeta){var/** @type {?} */providerExpr=void 0;var/** @type {?} */providerType=void 0;var/** @type {?} */deps=void 0;if(providerMeta.useClass){providerExpr=importExpr(providerMeta.useClass);providerType=ɵProviderType.Class;deps=providerMeta.deps||providerMeta.useClass.diDeps;}else if(providerMeta.useFactory){providerExpr=importExpr(providerMeta.useFactory);providerType=ɵProviderType.Factory;deps=providerMeta.deps||providerMeta.useFactory.diDeps;}else if(providerMeta.useExisting){providerExpr=NULL_EXPR;providerType=ɵProviderType.UseExisting;deps=[{token:providerMeta.useExisting}];}else{providerExpr=convertValueToOutputAst(providerMeta.useValue);providerType=ɵProviderType.Value;deps=[];}var/** @type {?} */depsExpr=literalArr(deps.map(function(dep){return depDef(dep);}));return{providerExpr:providerExpr,providerType:providerType,depsExpr:depsExpr};}/**
 * @param {?} tokenMeta
 * @return {?}
 */function tokenExpr(tokenMeta){return tokenMeta.identifier?importExpr(tokenMeta.identifier):literal(tokenMeta.value);}/**
 * @param {?} dep
 * @return {?}
 */function depDef(dep){// Note: the following fields have already been normalized out by provider_analyzer:
// - isAttribute, isSelf, isHost
var/** @type {?} */expr=dep.isValue?convertValueToOutputAst(dep.value):tokenExpr(dep.token);var/** @type {?} */flags=ɵDepFlags.None;if(dep.isSkipSelf){flags|=ɵDepFlags.SkipSelf;}if(dep.isOptional){flags|=ɵDepFlags.Optional;}if(dep.isValue){flags|=ɵDepFlags.Value;}return flags===ɵDepFlags.None?expr:literalArr([literal(flags),expr]);}/**
 * @param {?} ast
 * @return {?}
 */function needsAdditionalRootNode(ast){if(ast instanceof EmbeddedTemplateAst){return ast.hasViewContainer;}if(ast instanceof ElementAst){if(ast.name===NG_CONTAINER_TAG$1&&ast.children.length){return needsAdditionalRootNode(ast.children[ast.children.length-1]);}return ast.hasViewContainer;}return ast instanceof NgContentAst;}/**
 * @param {?} lifecycleHook
 * @return {?}
 */function lifecycleHookToNodeFlag(lifecycleHook){var/** @type {?} */nodeFlag=ɵNodeFlags.None;switch(lifecycleHook){case ɵLifecycleHooks.AfterContentChecked:nodeFlag=ɵNodeFlags.AfterContentChecked;break;case ɵLifecycleHooks.AfterContentInit:nodeFlag=ɵNodeFlags.AfterContentInit;break;case ɵLifecycleHooks.AfterViewChecked:nodeFlag=ɵNodeFlags.AfterViewChecked;break;case ɵLifecycleHooks.AfterViewInit:nodeFlag=ɵNodeFlags.AfterViewInit;break;case ɵLifecycleHooks.DoCheck:nodeFlag=ɵNodeFlags.DoCheck;break;case ɵLifecycleHooks.OnChanges:nodeFlag=ɵNodeFlags.OnChanges;break;case ɵLifecycleHooks.OnDestroy:nodeFlag=ɵNodeFlags.OnDestroy;break;case ɵLifecycleHooks.OnInit:nodeFlag=ɵNodeFlags.OnInit;break;}return nodeFlag;}/**
 * @param {?} inputAsts
 * @param {?} dirAst
 * @return {?}
 */function elementBindingDefs(inputAsts,dirAst){return inputAsts.map(function(inputAst){switch(inputAst.type){case PropertyBindingType.Attribute:return literalArr([literal(ɵBindingType.ElementAttribute),literal(inputAst.name),literal(inputAst.securityContext)]);case PropertyBindingType.Property:return literalArr([literal(ɵBindingType.ElementProperty),literal(inputAst.name),literal(inputAst.securityContext)]);case PropertyBindingType.Animation:var/** @type {?} */bindingType=dirAst&&dirAst.directive.isComponent?ɵBindingType.ComponentHostProperty:ɵBindingType.ElementProperty;return literalArr([literal(bindingType),literal('@'+inputAst.name),literal(inputAst.securityContext)]);case PropertyBindingType.Class:return literalArr([literal(ɵBindingType.ElementClass),literal(inputAst.name)]);case PropertyBindingType.Style:return literalArr([literal(ɵBindingType.ElementStyle),literal(inputAst.name),literal(inputAst.unit)]);}});}/**
 * @param {?} elementAst
 * @return {?}
 */function fixedAttrsDef(elementAst){var/** @type {?} */mapResult=Object.create(null);elementAst.attrs.forEach(function(attrAst){mapResult[attrAst.name]=attrAst.value;});elementAst.directives.forEach(function(dirAst){Object.keys(dirAst.directive.hostAttributes).forEach(function(name){var/** @type {?} */value=dirAst.directive.hostAttributes[name];var/** @type {?} */prevValue=mapResult[name];mapResult[name]=prevValue!=null?mergeAttributeValue$1(name,prevValue,value):value;});});var/** @type {?} */mapEntries=[];// Note: We need to sort to get a defined output order
// for tests and for caching generated artifacts...
return literalArr(Object.keys(mapResult).sort().map(function(attrName){return literalArr([literal(attrName),literal(mapResult[attrName])]);}));}/**
 * @param {?} attrName
 * @param {?} attrValue1
 * @param {?} attrValue2
 * @return {?}
 */function mergeAttributeValue$1(attrName,attrValue1,attrValue2){if(attrName==CLASS_ATTR$2||attrName==STYLE_ATTR$1){return attrValue1+' '+attrValue2;}else{return attrValue2;}}/**
 * @param {?} nodeIndex
 * @param {?} exprs
 * @return {?}
 */function callCheckStmt(nodeIndex,exprs){if(exprs.length>10){return CHECK_VAR.callFn([VIEW_VAR$1,literal(nodeIndex),literal(ɵArgumentType.Dynamic),literalArr(exprs)]);}else{return CHECK_VAR.callFn([VIEW_VAR$1,literal(nodeIndex),literal(ɵArgumentType.Inline)].concat(_toConsumableArray(exprs)));}}/**
 * @param {?} expr
 * @return {?}
 */function callUnwrapValue(expr){return importExpr(createIdentifier(Identifiers.unwrapValue)).callFn([expr]);}/**
 * @param {?} nodes
 * @param {?=} result
 * @return {?}
 */function findStaticQueryIds(nodes){var result=arguments.length>1&&arguments[1]!==undefined?arguments[1]:new Map();nodes.forEach(function(node){var/** @type {?} */staticQueryIds=new Set();var/** @type {?} */dynamicQueryIds=new Set();var/** @type {?} */queryMatches=void 0;if(node instanceof ElementAst){findStaticQueryIds(node.children,result);node.children.forEach(function(child){var/** @type {?} */childData=result.get(child);childData.staticQueryIds.forEach(function(queryId){return staticQueryIds.add(queryId);});childData.dynamicQueryIds.forEach(function(queryId){return dynamicQueryIds.add(queryId);});});queryMatches=node.queryMatches;}else if(node instanceof EmbeddedTemplateAst){findStaticQueryIds(node.children,result);node.children.forEach(function(child){var/** @type {?} */childData=result.get(child);childData.staticQueryIds.forEach(function(queryId){return dynamicQueryIds.add(queryId);});childData.dynamicQueryIds.forEach(function(queryId){return dynamicQueryIds.add(queryId);});});queryMatches=node.queryMatches;}if(queryMatches){queryMatches.forEach(function(match){return staticQueryIds.add(match.queryId);});}dynamicQueryIds.forEach(function(queryId){return staticQueryIds.delete(queryId);});result.set(node,{staticQueryIds:staticQueryIds,dynamicQueryIds:dynamicQueryIds});});return result;}/**
 * @param {?} nodeStaticQueryIds
 * @return {?}
 */function staticViewQueryIds(nodeStaticQueryIds){var/** @type {?} */staticQueryIds=new Set();var/** @type {?} */dynamicQueryIds=new Set();Array.from(nodeStaticQueryIds.values()).forEach(function(entry){entry.staticQueryIds.forEach(function(queryId){return staticQueryIds.add(queryId);});entry.dynamicQueryIds.forEach(function(queryId){return dynamicQueryIds.add(queryId);});});dynamicQueryIds.forEach(function(queryId){return staticQueryIds.delete(queryId);});return{staticQueryIds:staticQueryIds,dynamicQueryIds:dynamicQueryIds};}/**
 * @param {?} directives
 * @return {?}
 */function createComponentFactoryResolver(directives){var/** @type {?} */componentDirMeta=directives.find(function(dirAst){return dirAst.directive.isComponent;});if(componentDirMeta&&componentDirMeta.directive.entryComponents.length){var/** @type {?} */entryComponentFactories=componentDirMeta.directive.entryComponents.map(function(entryComponent){return importExpr({reference:entryComponent.componentFactory});});var/** @type {?} */cfrExpr=importExpr(createIdentifier(Identifiers.CodegenComponentFactoryResolver)).instantiate([literalArr(entryComponentFactories)]);var/** @type {?} */token=createIdentifierToken(Identifiers.ComponentFactoryResolver);var/** @type {?} */classMeta={diDeps:[{isValue:true,value:literalArr(entryComponentFactories)},{token:token,isSkipSelf:true,isOptional:true}],lifecycleHooks:[],reference:resolveIdentifier(Identifiers.CodegenComponentFactoryResolver)};return new ProviderAst(token,false,true,[{token:token,multi:false,useClass:classMeta}],ProviderAstType.PrivateService,[],componentDirMeta.sourceSpan);}return null;}/**
 * @param {?} eventAst
 * @param {?} dirAst
 * @return {?}
 */function elementEventNameAndTarget(eventAst,dirAst){if(eventAst.isAnimation){return{name:'@'+eventAst.name+'.'+eventAst.phase,target:dirAst&&dirAst.directive.isComponent?'component':null};}else{return eventAst;}}var AnimationEntryCompileResult=/**
     * @param {?} name
     * @param {?} statements
     * @param {?} fnExp
     */function AnimationEntryCompileResult(name,statements,fnExp){_classCallCheck(this,AnimationEntryCompileResult);this.name=name;this.statements=statements;this.fnExp=fnExp;};var AnimationCompiler=function(){function AnimationCompiler(){_classCallCheck(this,AnimationCompiler);}_createClass(AnimationCompiler,[{key:'compile',/**
     * @param {?} factoryNamePrefix
     * @param {?} parsedAnimations
     * @return {?}
     */value:function compile(factoryNamePrefix,parsedAnimations){return parsedAnimations.map(function(entry){var/** @type {?} */factoryName=factoryNamePrefix+'_'+entry.name;var/** @type {?} */visitor=new _AnimationBuilder(entry.name,factoryName);return visitor.build(entry);});}}]);return AnimationCompiler;}();var/** @type {?} */_ANIMATION_FACTORY_ELEMENT_VAR=variable('element');var/** @type {?} */_ANIMATION_DEFAULT_STATE_VAR=variable('defaultStateStyles');var/** @type {?} */_ANIMATION_FACTORY_VIEW_VAR=variable('view');var/** @type {?} */_ANIMATION_FACTORY_VIEW_CONTEXT=_ANIMATION_FACTORY_VIEW_VAR.prop('animationContext');var/** @type {?} */_ANIMATION_FACTORY_RENDERER_VAR=_ANIMATION_FACTORY_VIEW_VAR.prop('renderer');var/** @type {?} */_ANIMATION_CURRENT_STATE_VAR=variable('currentState');var/** @type {?} */_ANIMATION_NEXT_STATE_VAR=variable('nextState');var/** @type {?} */_ANIMATION_PLAYER_VAR=variable('player');var/** @type {?} */_ANIMATION_TIME_VAR=variable('totalTime');var/** @type {?} */_ANIMATION_START_STATE_STYLES_VAR=variable('startStateStyles');var/** @type {?} */_ANIMATION_END_STATE_STYLES_VAR=variable('endStateStyles');var/** @type {?} */_ANIMATION_COLLECTED_STYLES=variable('collectedStyles');var/** @type {?} */_PREVIOUS_ANIMATION_PLAYERS=variable('previousPlayers');var/** @type {?} */_EMPTY_MAP=literalMap([]);var/** @type {?} */_EMPTY_ARRAY=literalArr([]);var _AnimationBuilder=function(){/**
     * @param {?} animationName
     * @param {?} factoryName
     */function _AnimationBuilder(animationName,factoryName){_classCallCheck(this,_AnimationBuilder);this.animationName=animationName;this._fnVarName=factoryName+'_factory';this._statesMapVarName=factoryName+'_states';this._statesMapVar=variable(this._statesMapVarName);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */_createClass(_AnimationBuilder,[{key:'visitAnimationStyles',value:function visitAnimationStyles(ast,context){var/** @type {?} */stylesArr=[];if(context.isExpectingFirstStyleStep){stylesArr.push(_ANIMATION_START_STATE_STYLES_VAR);context.isExpectingFirstStyleStep=false;}ast.styles.forEach(function(entry){var/** @type {?} */entries=Object.keys(entry).map(function(key){return[key,literal(entry[key])];});stylesArr.push(literalMap(entries,null,true));});return importExpr(createIdentifier(Identifiers.AnimationStyles)).instantiate([importExpr(createIdentifier(Identifiers.collectAndResolveStyles)).callFn([_ANIMATION_COLLECTED_STYLES,literalArr(stylesArr)])]);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationKeyframe',value:function visitAnimationKeyframe(ast,context){return importExpr(createIdentifier(Identifiers.AnimationKeyframe)).instantiate([literal(ast.offset),ast.styles.visit(this,context)]);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationStep',value:function visitAnimationStep(ast,context){var _this221=this;if(context.endStateAnimateStep===ast){return this._visitEndStateAnimation(ast,context);}var/** @type {?} */startingStylesExpr=ast.startingStyles.visit(this,context);var/** @type {?} */keyframeExpressions=ast.keyframes.map(function(keyframeEntry){return keyframeEntry.visit(_this221,context);});return this._callAnimateMethod(ast,startingStylesExpr,literalArr(keyframeExpressions),context);}/**
     * \@internal
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'_visitEndStateAnimation',value:function _visitEndStateAnimation(ast,context){var _this222=this;var/** @type {?} */startingStylesExpr=ast.startingStyles.visit(this,context);var/** @type {?} */keyframeExpressions=ast.keyframes.map(function(keyframe){return keyframe.visit(_this222,context);});var/** @type {?} */keyframesExpr=importExpr(createIdentifier(Identifiers.balanceAnimationKeyframes)).callFn([_ANIMATION_COLLECTED_STYLES,_ANIMATION_END_STATE_STYLES_VAR,literalArr(keyframeExpressions)]);return this._callAnimateMethod(ast,startingStylesExpr,keyframesExpr,context);}/**
     * \@internal
     * @param {?} ast
     * @param {?} startingStylesExpr
     * @param {?} keyframesExpr
     * @param {?} context
     * @return {?}
     */},{key:'_callAnimateMethod',value:function _callAnimateMethod(ast,startingStylesExpr,keyframesExpr,context){var/** @type {?} */previousStylesValue=_EMPTY_ARRAY;if(context.isExpectingFirstAnimateStep){previousStylesValue=_PREVIOUS_ANIMATION_PLAYERS;context.isExpectingFirstAnimateStep=false;}context.totalTransitionTime+=ast.duration+ast.delay;return _ANIMATION_FACTORY_RENDERER_VAR.callMethod('animate',[_ANIMATION_FACTORY_ELEMENT_VAR,startingStylesExpr,keyframesExpr,literal(ast.duration),literal(ast.delay),literal(ast.easing),previousStylesValue]);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationSequence',value:function visitAnimationSequence(ast,context){var _this223=this;var/** @type {?} */playerExprs=ast.steps.map(function(step){return step.visit(_this223,context);});return importExpr(createIdentifier(Identifiers.AnimationSequencePlayer)).instantiate([literalArr(playerExprs)]);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationGroup',value:function visitAnimationGroup(ast,context){var _this224=this;var/** @type {?} */playerExprs=ast.steps.map(function(step){return step.visit(_this224,context);});return importExpr(createIdentifier(Identifiers.AnimationGroupPlayer)).instantiate([literalArr(playerExprs)]);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationStateDeclaration',value:function visitAnimationStateDeclaration(ast,context){var/** @type {?} */flatStyles={};_getStylesArray(ast).forEach(function(entry){Object.keys(entry).forEach(function(key){flatStyles[key]=entry[key];});});context.stateMap.registerState(ast.stateName,flatStyles);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationStateTransition',value:function visitAnimationStateTransition(ast,context){var/** @type {?} */steps=ast.animation.steps;var/** @type {?} */lastStep=steps[steps.length-1];if(_isEndStateAnimateStep(lastStep)){context.endStateAnimateStep=lastStep;}context.totalTransitionTime=0;context.isExpectingFirstStyleStep=true;context.isExpectingFirstAnimateStep=true;var/** @type {?} */stateChangePreconditions=[];ast.stateChanges.forEach(function(stateChange){if(stateChange instanceof AnimationStateTransitionFnExpression){stateChangePreconditions.push(importExpr({reference:stateChange.fn}).callFn([_ANIMATION_CURRENT_STATE_VAR,_ANIMATION_NEXT_STATE_VAR]));}else{stateChangePreconditions.push(_compareToAnimationStateExpr(_ANIMATION_CURRENT_STATE_VAR,stateChange.fromState).and(_compareToAnimationStateExpr(_ANIMATION_NEXT_STATE_VAR,stateChange.toState)));if(stateChange.fromState!=ɵANY_STATE){context.stateMap.registerState(stateChange.fromState);}if(stateChange.toState!=ɵANY_STATE){context.stateMap.registerState(stateChange.toState);}}});var/** @type {?} */animationPlayerExpr=ast.animation.visit(this,context);var/** @type {?} */reducedStateChangesPrecondition=stateChangePreconditions.reduce(function(a,b){return a.or(b);});var/** @type {?} */precondition=_ANIMATION_PLAYER_VAR.equals(NULL_EXPR).and(reducedStateChangesPrecondition);var/** @type {?} */animationStmt=_ANIMATION_PLAYER_VAR.set(animationPlayerExpr).toStmt();var/** @type {?} */totalTimeStmt=_ANIMATION_TIME_VAR.set(literal(context.totalTransitionTime)).toStmt();return new IfStmt(precondition,[animationStmt,totalTimeStmt]);}/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */},{key:'visitAnimationEntry',value:function visitAnimationEntry(ast,context){var _this225=this;// visit each of the declarations first to build the context state map
ast.stateDeclarations.forEach(function(def){return def.visit(_this225,context);});// this should always be defined even if the user overrides it
context.stateMap.registerState(ɵDEFAULT_STATE,{});var/** @type {?} */statements=[];statements.push(_PREVIOUS_ANIMATION_PLAYERS.set(_ANIMATION_FACTORY_VIEW_CONTEXT.callMethod('getAnimationPlayers',[_ANIMATION_FACTORY_ELEMENT_VAR,_ANIMATION_NEXT_STATE_VAR.equals(literal(ɵEMPTY_STATE)).conditional(NULL_EXPR,literal(this.animationName))])).toDeclStmt());statements.push(_ANIMATION_COLLECTED_STYLES.set(_EMPTY_MAP).toDeclStmt());statements.push(_ANIMATION_PLAYER_VAR.set(NULL_EXPR).toDeclStmt());statements.push(_ANIMATION_TIME_VAR.set(literal(0)).toDeclStmt());statements.push(_ANIMATION_DEFAULT_STATE_VAR.set(this._statesMapVar.key(literal(ɵDEFAULT_STATE))).toDeclStmt());statements.push(_ANIMATION_START_STATE_STYLES_VAR.set(this._statesMapVar.key(_ANIMATION_CURRENT_STATE_VAR)).toDeclStmt());statements.push(new IfStmt(_ANIMATION_START_STATE_STYLES_VAR.equals(NULL_EXPR),[_ANIMATION_START_STATE_STYLES_VAR.set(_ANIMATION_DEFAULT_STATE_VAR).toStmt()]));statements.push(_ANIMATION_END_STATE_STYLES_VAR.set(this._statesMapVar.key(_ANIMATION_NEXT_STATE_VAR)).toDeclStmt());statements.push(new IfStmt(_ANIMATION_END_STATE_STYLES_VAR.equals(NULL_EXPR),[_ANIMATION_END_STATE_STYLES_VAR.set(_ANIMATION_DEFAULT_STATE_VAR).toStmt()]));var/** @type {?} */RENDER_STYLES_FN=importExpr(createIdentifier(Identifiers.renderStyles));ast.stateTransitions.forEach(function(transAst){return statements.push(transAst.visit(_this225,context));});// this check ensures that the animation factory always returns a player
// so that the onDone callback can be used for tracking
statements.push(new IfStmt(_ANIMATION_PLAYER_VAR.equals(NULL_EXPR),[_ANIMATION_PLAYER_VAR.set(importExpr(createIdentifier(Identifiers.NoOpAnimationPlayer)).instantiate([])).toStmt()]));// once complete we want to apply the styles on the element
// since the destination state's values should persist once
// the animation sequence has completed.
statements.push(_ANIMATION_PLAYER_VAR.callMethod('onDone',[fn([],[_ANIMATION_PLAYER_VAR.callMethod('destroy',[]).toStmt(),RENDER_STYLES_FN.callFn([_ANIMATION_FACTORY_ELEMENT_VAR,_ANIMATION_FACTORY_RENDERER_VAR,importExpr(createIdentifier(Identifiers.prepareFinalAnimationStyles)).callFn([_ANIMATION_START_STATE_STYLES_VAR,_ANIMATION_END_STATE_STYLES_VAR])]).toStmt()])]).toStmt());statements.push(importExpr(createIdentifier(Identifiers.AnimationSequencePlayer)).instantiate([_PREVIOUS_ANIMATION_PLAYERS]).callMethod('destroy',[]).toStmt());// before we start any animation we want to clear out the starting
// styles from the element's style property (since they were placed
// there at the end of the last animation
statements.push(RENDER_STYLES_FN.callFn([_ANIMATION_FACTORY_ELEMENT_VAR,_ANIMATION_FACTORY_RENDERER_VAR,importExpr(createIdentifier(Identifiers.clearStyles)).callFn([_ANIMATION_START_STATE_STYLES_VAR])]).toStmt());statements.push(_ANIMATION_FACTORY_VIEW_CONTEXT.callMethod('queueAnimation',[_ANIMATION_FACTORY_ELEMENT_VAR,literal(this.animationName),_ANIMATION_PLAYER_VAR]).toStmt());statements.push(new ReturnStatement(importExpr(createIdentifier(Identifiers.AnimationTransition)).instantiate([_ANIMATION_PLAYER_VAR,_ANIMATION_FACTORY_ELEMENT_VAR,literal(this.animationName),_ANIMATION_CURRENT_STATE_VAR,_ANIMATION_NEXT_STATE_VAR,_ANIMATION_TIME_VAR])));return fn([new FnParam(_ANIMATION_FACTORY_VIEW_VAR.name,importType(createIdentifier(Identifiers.AppView),[DYNAMIC_TYPE])),new FnParam(_ANIMATION_FACTORY_ELEMENT_VAR.name,DYNAMIC_TYPE),new FnParam(_ANIMATION_CURRENT_STATE_VAR.name,DYNAMIC_TYPE),new FnParam(_ANIMATION_NEXT_STATE_VAR.name,DYNAMIC_TYPE)],statements,importType(createIdentifier(Identifiers.AnimationTransition)));}/**
     * @param {?} ast
     * @return {?}
     */},{key:'build',value:function build(ast){var/** @type {?} */context=new _AnimationBuilderContext();var/** @type {?} */fnStatement=ast.visit(this,context).toDeclStmt(this._fnVarName);var/** @type {?} */fnVariable=variable(this._fnVarName);var/** @type {?} */lookupMap=[];Object.keys(context.stateMap.states).forEach(function(stateName){var/** @type {?} */value=context.stateMap.states[stateName];var/** @type {?} */variableValue=_EMPTY_MAP;if(isPresent(value)){var/** @type {?} */styleMap=[];Object.keys(value).forEach(function(key){styleMap.push([key,literal(value[key])]);});variableValue=literalMap(styleMap,null,true);}lookupMap.push([stateName,variableValue]);});var/** @type {?} */compiledStatesMapStmt=this._statesMapVar.set(literalMap(lookupMap,null,true)).toDeclStmt();var/** @type {?} */statements=[compiledStatesMapStmt,fnStatement];return new AnimationEntryCompileResult(this.animationName,statements,fnVariable);}}]);return _AnimationBuilder;}();var _AnimationBuilderContext=function _AnimationBuilderContext(){_classCallCheck(this,_AnimationBuilderContext);this.stateMap=new _AnimationBuilderStateMap();this.endStateAnimateStep=null;this.isExpectingFirstStyleStep=false;this.isExpectingFirstAnimateStep=false;this.totalTransitionTime=0;};var _AnimationBuilderStateMap=function(){function _AnimationBuilderStateMap(){_classCallCheck(this,_AnimationBuilderStateMap);this._states={};}/**
     * @return {?}
     */_createClass(_AnimationBuilderStateMap,[{key:'registerState',/**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */value:function registerState(name){var value=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var/** @type {?} */existingEntry=this._states[name];if(!existingEntry){this._states[name]=value;}}},{key:'states',get:function get(){return this._states;}}]);return _AnimationBuilderStateMap;}();/**
 * @param {?} value
 * @param {?} animationState
 * @return {?}
 */function _compareToAnimationStateExpr(value,animationState){var/** @type {?} */emptyStateLiteral=literal(ɵEMPTY_STATE);switch(animationState){case ɵEMPTY_STATE:return value.equals(emptyStateLiteral);case ɵANY_STATE:return literal(true);default:return value.equals(literal(animationState));}}/**
 * @param {?} step
 * @return {?}
 */function _isEndStateAnimateStep(step){// the final animation step is characterized by having only TWO
// keyframe values and it must have zero styles for both keyframes
if(step instanceof AnimationStepAst&&step.duration>0&&step.keyframes.length==2){var/** @type {?} */styles1=_getStylesArray(step.keyframes[0])[0];var/** @type {?} */styles2=_getStylesArray(step.keyframes[1])[0];return Object.keys(styles1).length===0&&Object.keys(styles2).length===0;}return false;}/**
 * @param {?} obj
 * @return {?}
 */function _getStylesArray(obj){return obj.styles.styles;}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var GeneratedFile=/**
     * @param {?} srcFileUrl
     * @param {?} genFileUrl
     * @param {?} source
     */function GeneratedFile(srcFileUrl,genFileUrl,source){_classCallCheck(this,GeneratedFile);this.srcFileUrl=srcFileUrl;this.genFileUrl=genFileUrl;this.source=source;};/**
 * @param {?} summaryResolver
 * @param {?} symbolResolver
 * @param {?} symbols
 * @param {?} types
 * @return {?}
 */function serializeSummaries(summaryResolver,symbolResolver,symbols,types){var/** @type {?} */serializer=new Serializer$1(symbolResolver,summaryResolver);// for symbols, we use everything except for the class metadata itself
// (we keep the statics though), as the class metadata is contained in the
// CompileTypeSummary.
symbols.forEach(function(resolvedSymbol){return serializer.addOrMergeSummary({symbol:resolvedSymbol.symbol,metadata:resolvedSymbol.metadata});});// Add summaries that are referenced by the given symbols (transitively)
// Note: the serializer.symbols array might be growing while
// we execute the loop!
for(var/** @type {?} */processedIndex=0;processedIndex<serializer.symbols.length;processedIndex++){var/** @type {?} */symbol=serializer.symbols[processedIndex];if(summaryResolver.isLibraryFile(symbol.filePath)){var/** @type {?} */summary=summaryResolver.resolveSummary(symbol);if(!summary){// some symbols might originate from a plain typescript library
// that just exported .d.ts and .metadata.json files, i.e. where no summary
// files were created.
var/** @type {?} */resolvedSymbol=symbolResolver.resolveSymbol(symbol);if(resolvedSymbol){summary={symbol:resolvedSymbol.symbol,metadata:resolvedSymbol.metadata};}}if(summary){serializer.addOrMergeSummary(summary);}}}// Add type summaries.
// Note: We don't add the summaries of all referenced symbols as for the ResolvedSymbols,
// as the type summaries already contain the transitive data that they require
// (in a minimal way).
types.forEach(function(typeSummary){serializer.addOrMergeSummary({symbol:typeSummary.type.reference,metadata:{__symbolic:'class'},type:typeSummary});if(typeSummary.summaryKind===CompileSummaryKind.NgModule){var/** @type {?} */ngModuleSummary=typeSummary;ngModuleSummary.exportedDirectives.concat(ngModuleSummary.exportedPipes).forEach(function(id){var/** @type {?} */symbol=id.reference;if(summaryResolver.isLibraryFile(symbol.filePath)){var/** @type {?} */_summary=summaryResolver.resolveSummary(symbol);if(_summary){serializer.addOrMergeSummary(_summary);}}});}});return serializer.serialize();}/**
 * @param {?} symbolCache
 * @param {?} json
 * @return {?}
 */function deserializeSummaries(symbolCache,json){var/** @type {?} */deserializer=new Deserializer(symbolCache);return deserializer.deserialize(json);}var Serializer$1=function(_ValueTransformer2){_inherits(Serializer$1,_ValueTransformer2);/**
     * @param {?} symbolResolver
     * @param {?} summaryResolver
     */function Serializer$1(symbolResolver,summaryResolver){_classCallCheck(this,Serializer$1);var _this226=_possibleConstructorReturn(this,(Serializer$1.__proto__||Object.getPrototypeOf(Serializer$1)).call(this));_this226.symbolResolver=symbolResolver;_this226.summaryResolver=summaryResolver;// Note: This only contains symbols without members.
_this226.symbols=[];_this226.indexBySymbol=new Map();_this226.processedSummaryBySymbol=new Map();_this226.processedSummaries=[];return _this226;}/**
     * @param {?} summary
     * @return {?}
     */_createClass(Serializer$1,[{key:'addOrMergeSummary',value:function addOrMergeSummary(summary){var/** @type {?} */symbolMeta=summary.metadata;if(symbolMeta&&symbolMeta.__symbolic==='class'){// For classes, we only keep their statics and arity, but not the metadata
// of the class itself as that has been captured already via other summaries
// (e.g. DirectiveSummary, ...).
symbolMeta={__symbolic:'class',statics:symbolMeta.statics,arity:symbolMeta.arity};}var/** @type {?} */processedSummary=this.processedSummaryBySymbol.get(summary.symbol);if(!processedSummary){processedSummary=this.processValue({symbol:summary.symbol});this.processedSummaries.push(processedSummary);this.processedSummaryBySymbol.set(summary.symbol,processedSummary);}// Note: == on purpose to compare with undefined!
if(processedSummary.metadata==null&&symbolMeta!=null){processedSummary.metadata=this.processValue(symbolMeta);}// Note: == on purpose to compare with undefined!
if(processedSummary.type==null&&summary.type!=null){processedSummary.type=this.processValue(summary.type);}}/**
     * @return {?}
     */},{key:'serialize',value:function serialize(){var _this227=this;var/** @type {?} */exportAs=[];var/** @type {?} */json=JSON.stringify({summaries:this.processedSummaries,symbols:this.symbols.map(function(symbol,index){symbol.assertNoMembers();var/** @type {?} */importAs=void 0;if(_this227.summaryResolver.isLibraryFile(symbol.filePath)){importAs=symbol.name+'_'+index;exportAs.push({symbol:symbol,exportAs:importAs});}return{__symbol:index,name:symbol.name,// We convert the source filenames tinto output filenames,
// as the generated summary file will be used when teh current
// compilation unit is used as a library
filePath:_this227.summaryResolver.getLibraryFileName(symbol.filePath),importAs:importAs};})});return{json:json,exportAs:exportAs};}/**
     * @param {?} value
     * @return {?}
     */},{key:'processValue',value:function processValue(value){return visitValue(value,this,null);}/**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */},{key:'visitOther',value:function visitOther(value,context){if(value instanceof StaticSymbol){var/** @type {?} */baseSymbol=this.symbolResolver.getStaticSymbol(value.filePath,value.name);var/** @type {?} */index=this.indexBySymbol.get(baseSymbol);// Note: == on purpose to compare with undefined!
if(index==null){index=this.indexBySymbol.size;this.indexBySymbol.set(baseSymbol,index);this.symbols.push(baseSymbol);}return{__symbol:index,members:value.members};}}}]);return Serializer$1;}(ValueTransformer);var Deserializer=function(_ValueTransformer3){_inherits(Deserializer,_ValueTransformer3);/**
     * @param {?} symbolCache
     */function Deserializer(symbolCache){_classCallCheck(this,Deserializer);var _this228=_possibleConstructorReturn(this,(Deserializer.__proto__||Object.getPrototypeOf(Deserializer)).call(this));_this228.symbolCache=symbolCache;return _this228;}/**
     * @param {?} json
     * @return {?}
     */_createClass(Deserializer,[{key:'deserialize',value:function deserialize(json){var _this229=this;var/** @type {?} */data=JSON.parse(json);var/** @type {?} */importAs=[];this.symbols=[];data.symbols.forEach(function(serializedSymbol){var/** @type {?} */symbol=_this229.symbolCache.get(serializedSymbol.filePath,serializedSymbol.name);_this229.symbols.push(symbol);if(serializedSymbol.importAs){importAs.push({symbol:symbol,importAs:serializedSymbol.importAs});}});var/** @type {?} */summaries=visitValue(data.summaries,this,null);return{summaries:summaries,importAs:importAs};}/**
     * @param {?} map
     * @param {?} context
     * @return {?}
     */},{key:'visitStringMap',value:function visitStringMap(map,context){if('__symbol'in map){var/** @type {?} */baseSymbol=this.symbols[map['__symbol']];var/** @type {?} */members=map['members'];return members.length?this.symbolCache.get(baseSymbol.filePath,baseSymbol.name,members):baseSymbol;}else{return _get(Deserializer.prototype.__proto__||Object.getPrototypeOf(Deserializer.prototype),'visitStringMap',this).call(this,map,context);}}}]);return Deserializer;}(ValueTransformer);var AotCompiler=function(){/**
     * @param {?} _config
     * @param {?} _host
     * @param {?} _metadataResolver
     * @param {?} _templateParser
     * @param {?} _styleCompiler
     * @param {?} _viewCompiler
     * @param {?} _dirWrapperCompiler
     * @param {?} _ngModuleCompiler
     * @param {?} _outputEmitter
     * @param {?} _summaryResolver
     * @param {?} _localeId
     * @param {?} _translationFormat
     * @param {?} _animationParser
     * @param {?} _symbolResolver
     */function AotCompiler(_config,_host,_metadataResolver,_templateParser,_styleCompiler,_viewCompiler,_dirWrapperCompiler,_ngModuleCompiler,_outputEmitter,_summaryResolver,_localeId,_translationFormat,_animationParser,_symbolResolver){_classCallCheck(this,AotCompiler);this._config=_config;this._host=_host;this._metadataResolver=_metadataResolver;this._templateParser=_templateParser;this._styleCompiler=_styleCompiler;this._viewCompiler=_viewCompiler;this._dirWrapperCompiler=_dirWrapperCompiler;this._ngModuleCompiler=_ngModuleCompiler;this._outputEmitter=_outputEmitter;this._summaryResolver=_summaryResolver;this._localeId=_localeId;this._translationFormat=_translationFormat;this._animationParser=_animationParser;this._symbolResolver=_symbolResolver;this._animationCompiler=new AnimationCompiler();}/**
     * @return {?}
     */_createClass(AotCompiler,[{key:'clearCache',value:function clearCache(){this._metadataResolver.clearCache();}/**
     * @param {?} rootFiles
     * @return {?}
     */},{key:'compileAll',value:function compileAll(rootFiles){var _this230=this;var/** @type {?} */programSymbols=extractProgramSymbols(this._symbolResolver,rootFiles,this._host);var _analyzeAndValidateNg=analyzeAndValidateNgModules(programSymbols,this._host,this._metadataResolver),ngModuleByPipeOrDirective=_analyzeAndValidateNg.ngModuleByPipeOrDirective,files=_analyzeAndValidateNg.files,ngModules=_analyzeAndValidateNg.ngModules;return Promise.all(ngModules.map(function(ngModule){return _this230._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference,false);})).then(function(){var/** @type {?} */sourceModules=files.map(function(file){return _this230._compileSrcFile(file.srcUrl,ngModuleByPipeOrDirective,file.directives,file.pipes,file.ngModules,file.injectables);});return ListWrapper.flatten(sourceModules);});}/**
     * @param {?} srcFileUrl
     * @param {?} ngModuleByPipeOrDirective
     * @param {?} directives
     * @param {?} pipes
     * @param {?} ngModules
     * @param {?} injectables
     * @return {?}
     */},{key:'_compileSrcFile',value:function _compileSrcFile(srcFileUrl,ngModuleByPipeOrDirective,directives,pipes,ngModules,injectables){var _this231=this;var/** @type {?} */fileSuffix=splitTypescriptSuffix(srcFileUrl)[1];var/** @type {?} */statements=[];var/** @type {?} */exportedVars=[];var/** @type {?} */generatedFiles=[];generatedFiles.push(this._createSummary(srcFileUrl,directives,pipes,ngModules,injectables,statements,exportedVars));// compile all ng modules
exportedVars.push.apply(exportedVars,_toConsumableArray(ngModules.map(function(ngModuleType){return _this231._compileModule(ngModuleType,statements);})));// compile directive wrappers
if(!this._config.useViewEngine){exportedVars.push.apply(exportedVars,_toConsumableArray(directives.map(function(directiveType){return _this231._compileDirectiveWrapper(directiveType,statements);})));}// compile components
directives.forEach(function(dirType){var/** @type {?} */compMeta=_this231._metadataResolver.getDirectiveMetadata(/** @type {?} */dirType);if(!compMeta.isComponent){return Promise.resolve(null);}var/** @type {?} */ngModule=ngModuleByPipeOrDirective.get(dirType);if(!ngModule){throw new Error('Internal Error: cannot determine the module for component '+identifierName(compMeta.type)+'!');}_assertComponent(compMeta);// compile styles
var/** @type {?} */stylesCompileResults=_this231._styleCompiler.compileComponent(compMeta);stylesCompileResults.externalStylesheets.forEach(function(compiledStyleSheet){generatedFiles.push(_this231._codgenStyles(srcFileUrl,compiledStyleSheet,fileSuffix));});// compile components
var/** @type {?} */compViewVars=_this231._compileComponent(compMeta,ngModule,ngModule.transitiveModule.directives,stylesCompileResults.componentStylesheet,fileSuffix,statements);exportedVars.push(_this231._compileComponentFactory(compMeta,ngModule,fileSuffix,statements),compViewVars.viewClassVar,compViewVars.compRenderTypeVar);});if(statements.length>0){var/** @type {?} */srcModule=this._codegenSourceModule(srcFileUrl,ngfactoryFilePath(srcFileUrl),statements,exportedVars);generatedFiles.unshift(srcModule);}return generatedFiles;}/**
     * @param {?} srcFileUrl
     * @param {?} directives
     * @param {?} pipes
     * @param {?} ngModules
     * @param {?} injectables
     * @param {?} targetStatements
     * @param {?} targetExportedVars
     * @return {?}
     */},{key:'_createSummary',value:function _createSummary(srcFileUrl,directives,pipes,ngModules,injectables,targetStatements,targetExportedVars){var _this232=this;var/** @type {?} */symbolSummaries=this._symbolResolver.getSymbolsOf(srcFileUrl).map(function(symbol){return _this232._symbolResolver.resolveSymbol(symbol);});var/** @type {?} */typeSummaries=[].concat(_toConsumableArray(ngModules.map(function(ref){return _this232._metadataResolver.getNgModuleSummary(ref);})),_toConsumableArray(directives.map(function(ref){return _this232._metadataResolver.getDirectiveSummary(ref);})),_toConsumableArray(pipes.map(function(ref){return _this232._metadataResolver.getPipeSummary(ref);})),_toConsumableArray(injectables.map(function(ref){return _this232._metadataResolver.getInjectableSummary(ref);})));var _serializeSummaries=serializeSummaries(this._summaryResolver,this._symbolResolver,symbolSummaries,typeSummaries),json=_serializeSummaries.json,exportAs=_serializeSummaries.exportAs;exportAs.forEach(function(entry){targetStatements.push(variable(entry.exportAs).set(importExpr({reference:entry.symbol})).toDeclStmt());targetExportedVars.push(entry.exportAs);});return new GeneratedFile(srcFileUrl,summaryFileName(srcFileUrl),json);}/**
     * @param {?} ngModuleType
     * @param {?} targetStatements
     * @return {?}
     */},{key:'_compileModule',value:function _compileModule(ngModuleType,targetStatements){var/** @type {?} */ngModule=this._metadataResolver.getNgModuleMetadata(ngModuleType);var/** @type {?} */providers=[];if(this._localeId){providers.push({token:createIdentifierToken(Identifiers.LOCALE_ID),useValue:this._localeId});}if(this._translationFormat){providers.push({token:createIdentifierToken(Identifiers.TRANSLATIONS_FORMAT),useValue:this._translationFormat});}var/** @type {?} */appCompileResult=this._ngModuleCompiler.compile(ngModule,providers);targetStatements.push.apply(targetStatements,_toConsumableArray(appCompileResult.statements));return appCompileResult.ngModuleFactoryVar;}/**
     * @param {?} directiveType
     * @param {?} targetStatements
     * @return {?}
     */},{key:'_compileDirectiveWrapper',value:function _compileDirectiveWrapper(directiveType,targetStatements){var/** @type {?} */dirMeta=this._metadataResolver.getDirectiveMetadata(directiveType);var/** @type {?} */dirCompileResult=this._dirWrapperCompiler.compile(dirMeta);targetStatements.push.apply(targetStatements,_toConsumableArray(dirCompileResult.statements));return dirCompileResult.dirWrapperClassVar;}/**
     * @param {?} compMeta
     * @param {?} ngModule
     * @param {?} fileSuffix
     * @param {?} targetStatements
     * @return {?}
     */},{key:'_compileComponentFactory',value:function _compileComponentFactory(compMeta,ngModule,fileSuffix,targetStatements){var/** @type {?} */hostType=this._metadataResolver.getHostComponentType(compMeta.type.reference);var/** @type {?} */hostMeta=createHostComponentMeta(hostType,compMeta,this._metadataResolver.getHostComponentViewClass(hostType));var/** @type {?} */hostViewFactoryVar=this._compileComponent(hostMeta,ngModule,[compMeta.type],null,fileSuffix,targetStatements).viewClassVar;var/** @type {?} */compFactoryVar=componentFactoryName(compMeta.type.reference);if(this._config.useViewEngine){targetStatements.push(variable(compFactoryVar).set(importExpr(createIdentifier(Identifiers.createComponentFactory)).callFn([literal(compMeta.selector),importExpr(compMeta.type),variable(hostViewFactoryVar)])).toDeclStmt(importType(createIdentifier(Identifiers.ComponentFactory),[importType(compMeta.type)],[TypeModifier.Const]),[StmtModifier.Final]));}else{targetStatements.push(variable(compFactoryVar).set(importExpr(createIdentifier(Identifiers.ComponentFactory),[importType(compMeta.type)]).instantiate([literal(compMeta.selector),variable(hostViewFactoryVar),importExpr(compMeta.type)],importType(createIdentifier(Identifiers.ComponentFactory),[importType(compMeta.type)],[TypeModifier.Const]))).toDeclStmt(null,[StmtModifier.Final]));}return compFactoryVar;}/**
     * @param {?} compMeta
     * @param {?} ngModule
     * @param {?} directiveIdentifiers
     * @param {?} componentStyles
     * @param {?} fileSuffix
     * @param {?} targetStatements
     * @return {?}
     */},{key:'_compileComponent',value:function _compileComponent(compMeta,ngModule,directiveIdentifiers,componentStyles,fileSuffix,targetStatements){var _this233=this;var/** @type {?} */directives=directiveIdentifiers.map(function(dir){return _this233._metadataResolver.getDirectiveSummary(dir.reference);});var/** @type {?} */pipes=ngModule.transitiveModule.pipes.map(function(pipe){return _this233._metadataResolver.getPipeSummary(pipe.reference);});var _templateParser$parse=this._templateParser.parse(compMeta,compMeta.template.template,directives,pipes,ngModule.schemas,identifierName(compMeta.type)),parsedTemplate=_templateParser$parse.template,usedPipes=_templateParser$parse.pipes;var/** @type {?} */stylesExpr=componentStyles?variable(componentStyles.stylesVar):literalArr([]);var/** @type {?} */viewResult=this._viewCompiler.compileComponent(compMeta,parsedTemplate,stylesExpr,usedPipes,null);if(componentStyles){targetStatements.push.apply(targetStatements,_toConsumableArray(_resolveStyleStatements(this._symbolResolver,componentStyles,fileSuffix)));}targetStatements.push.apply(targetStatements,_toConsumableArray(viewResult.statements));return{viewClassVar:viewResult.viewClassVar,compRenderTypeVar:viewResult.rendererTypeVar};}/**
     * @param {?} fileUrl
     * @param {?} stylesCompileResult
     * @param {?} fileSuffix
     * @return {?}
     */},{key:'_codgenStyles',value:function _codgenStyles(fileUrl,stylesCompileResult,fileSuffix){_resolveStyleStatements(this._symbolResolver,stylesCompileResult,fileSuffix);return this._codegenSourceModule(fileUrl,_stylesModuleUrl(stylesCompileResult.meta.moduleUrl,stylesCompileResult.isShimmed,fileSuffix),stylesCompileResult.statements,[stylesCompileResult.stylesVar]);}/**
     * @param {?} srcFileUrl
     * @param {?} genFileUrl
     * @param {?} statements
     * @param {?} exportedVars
     * @return {?}
     */},{key:'_codegenSourceModule',value:function _codegenSourceModule(srcFileUrl,genFileUrl,statements,exportedVars){return new GeneratedFile(srcFileUrl,genFileUrl,this._outputEmitter.emitStatements(genFileUrl,statements,exportedVars));}}]);return AotCompiler;}();/**
 * @param {?} reflector
 * @param {?} compileResult
 * @param {?} fileSuffix
 * @return {?}
 */function _resolveStyleStatements(reflector,compileResult,fileSuffix){compileResult.dependencies.forEach(function(dep){dep.valuePlaceholder.reference=reflector.getStaticSymbol(_stylesModuleUrl(dep.moduleUrl,dep.isShimmed,fileSuffix),dep.name);});return compileResult.statements;}/**
 * @param {?} stylesheetUrl
 * @param {?} shim
 * @param {?} suffix
 * @return {?}
 */function _stylesModuleUrl(stylesheetUrl,shim,suffix){return''+stylesheetUrl+(shim?'.shim':'')+'.ngstyle'+suffix;}/**
 * @param {?} meta
 * @return {?}
 */function _assertComponent(meta){if(!meta.isComponent){throw new Error('Could not compile \''+identifierName(meta.type)+'\' because it is not a component.');}}/**
 * @param {?} programStaticSymbols
 * @param {?} host
 * @param {?} metadataResolver
 * @return {?}
 */function analyzeNgModules(programStaticSymbols,host,metadataResolver){var _createNgModules2=_createNgModules(programStaticSymbols,host,metadataResolver),ngModules=_createNgModules2.ngModules,symbolsMissingModule=_createNgModules2.symbolsMissingModule;return _analyzeNgModules(programStaticSymbols,ngModules,symbolsMissingModule,metadataResolver);}/**
 * @param {?} programStaticSymbols
 * @param {?} host
 * @param {?} metadataResolver
 * @return {?}
 */function analyzeAndValidateNgModules(programStaticSymbols,host,metadataResolver){var/** @type {?} */result=analyzeNgModules(programStaticSymbols,host,metadataResolver);if(result.symbolsMissingModule&&result.symbolsMissingModule.length){var/** @type {?} */messages=result.symbolsMissingModule.map(function(s){return'Cannot determine the module for class '+s.name+' in '+s.filePath+'! Add '+s.name+' to the NgModule to fix it.';});throw syntaxError(messages.join('\n'));}return result;}/**
 * @param {?} programSymbols
 * @param {?} ngModuleMetas
 * @param {?} symbolsMissingModule
 * @param {?} metadataResolver
 * @return {?}
 */function _analyzeNgModules(programSymbols,ngModuleMetas,symbolsMissingModule,metadataResolver){var/** @type {?} */moduleMetasByRef=new Map();ngModuleMetas.forEach(function(ngModule){return moduleMetasByRef.set(ngModule.type.reference,ngModule);});var/** @type {?} */ngModuleByPipeOrDirective=new Map();var/** @type {?} */ngModulesByFile=new Map();var/** @type {?} */ngDirectivesByFile=new Map();var/** @type {?} */ngPipesByFile=new Map();var/** @type {?} */ngInjectablesByFile=new Map();var/** @type {?} */filePaths=new Set();// Make sure we produce an analyzed file for each input file
programSymbols.forEach(function(symbol){var/** @type {?} */filePath=symbol.filePath;filePaths.add(filePath);if(metadataResolver.isInjectable(symbol)){ngInjectablesByFile.set(filePath,(ngInjectablesByFile.get(filePath)||[]).concat(symbol));}});// Looping over all modules to construct:
// - a map from file to modules `ngModulesByFile`,
// - a map from file to directives `ngDirectivesByFile`,
// - a map from file to pipes `ngPipesByFile`,
// - a map from directive/pipe to module `ngModuleByPipeOrDirective`.
ngModuleMetas.forEach(function(ngModuleMeta){var/** @type {?} */srcFileUrl=ngModuleMeta.type.reference.filePath;filePaths.add(srcFileUrl);ngModulesByFile.set(srcFileUrl,(ngModulesByFile.get(srcFileUrl)||[]).concat(ngModuleMeta.type.reference));ngModuleMeta.declaredDirectives.forEach(function(dirIdentifier){var/** @type {?} */fileUrl=dirIdentifier.reference.filePath;filePaths.add(fileUrl);ngDirectivesByFile.set(fileUrl,(ngDirectivesByFile.get(fileUrl)||[]).concat(dirIdentifier.reference));ngModuleByPipeOrDirective.set(dirIdentifier.reference,ngModuleMeta);});ngModuleMeta.declaredPipes.forEach(function(pipeIdentifier){var/** @type {?} */fileUrl=pipeIdentifier.reference.filePath;filePaths.add(fileUrl);ngPipesByFile.set(fileUrl,(ngPipesByFile.get(fileUrl)||[]).concat(pipeIdentifier.reference));ngModuleByPipeOrDirective.set(pipeIdentifier.reference,ngModuleMeta);});});var/** @type {?} */files=[];filePaths.forEach(function(srcUrl){var/** @type {?} */directives=ngDirectivesByFile.get(srcUrl)||[];var/** @type {?} */pipes=ngPipesByFile.get(srcUrl)||[];var/** @type {?} */ngModules=ngModulesByFile.get(srcUrl)||[];var/** @type {?} */injectables=ngInjectablesByFile.get(srcUrl)||[];files.push({srcUrl:srcUrl,directives:directives,pipes:pipes,ngModules:ngModules,injectables:injectables});});return{// map directive/pipe to module
ngModuleByPipeOrDirective:ngModuleByPipeOrDirective,// list modules and directives for every source file
files:files,ngModules:ngModuleMetas,symbolsMissingModule:symbolsMissingModule};}/**
 * @param {?} staticSymbolResolver
 * @param {?} files
 * @param {?} host
 * @return {?}
 */function extractProgramSymbols(staticSymbolResolver,files,host){var/** @type {?} */staticSymbols=[];files.filter(function(fileName){return host.isSourceFile(fileName);}).forEach(function(sourceFile){staticSymbolResolver.getSymbolsOf(sourceFile).forEach(function(symbol){var/** @type {?} */resolvedSymbol=staticSymbolResolver.resolveSymbol(symbol);var/** @type {?} */symbolMeta=resolvedSymbol.metadata;if(symbolMeta){if(symbolMeta.__symbolic!='error'){// Ignore symbols that are only included to record error information.
staticSymbols.push(resolvedSymbol.symbol);}}});});return staticSymbols;}/**
 * @param {?} programStaticSymbols
 * @param {?} host
 * @param {?} metadataResolver
 * @return {?}
 */function _createNgModules(programStaticSymbols,host,metadataResolver){var/** @type {?} */ngModules=new Map();var/** @type {?} */programPipesAndDirectives=[];var/** @type {?} */ngModulePipesAndDirective=new Set();var/** @type {?} */addNgModule=function addNgModule(staticSymbol){if(ngModules.has(staticSymbol)||!host.isSourceFile(staticSymbol.filePath)){return false;}var/** @type {?} */ngModule=metadataResolver.getNgModuleMetadata(staticSymbol,false);if(ngModule){ngModules.set(ngModule.type.reference,ngModule);ngModule.declaredDirectives.forEach(function(dir){return ngModulePipesAndDirective.add(dir.reference);});ngModule.declaredPipes.forEach(function(pipe){return ngModulePipesAndDirective.add(pipe.reference);});// For every input module add the list of transitively included modules
ngModule.transitiveModule.modules.forEach(function(modMeta){return addNgModule(modMeta.reference);});}return!!ngModule;};programStaticSymbols.forEach(function(staticSymbol){if(!addNgModule(staticSymbol)&&(metadataResolver.isDirective(staticSymbol)||metadataResolver.isPipe(staticSymbol))){programPipesAndDirectives.push(staticSymbol);}});// Throw an error if any of the program pipe or directives is not declared by a module
var/** @type {?} */symbolsMissingModule=programPipesAndDirectives.filter(function(s){return!ngModulePipesAndDirective.has(s);});return{ngModules:Array.from(ngModules.values()),symbolsMissingModule:symbolsMissingModule};}var StaticAndDynamicReflectionCapabilities=function(){/**
     * @param {?} staticDelegate
     */function StaticAndDynamicReflectionCapabilities(staticDelegate){_classCallCheck(this,StaticAndDynamicReflectionCapabilities);this.staticDelegate=staticDelegate;this.dynamicDelegate=new ɵReflectionCapabilities();}/**
     * @param {?} staticDelegate
     * @return {?}
     */_createClass(StaticAndDynamicReflectionCapabilities,[{key:'isReflectionEnabled',/**
     * @return {?}
     */value:function isReflectionEnabled(){return true;}/**
     * @param {?} type
     * @return {?}
     */},{key:'factory',value:function factory(type){return this.dynamicDelegate.factory(type);}/**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */},{key:'hasLifecycleHook',value:function hasLifecycleHook(type,lcProperty){return isStaticType(type)?this.staticDelegate.hasLifecycleHook(type,lcProperty):this.dynamicDelegate.hasLifecycleHook(type,lcProperty);}/**
     * @param {?} type
     * @return {?}
     */},{key:'parameters',value:function parameters(type){return isStaticType(type)?this.staticDelegate.parameters(type):this.dynamicDelegate.parameters(type);}/**
     * @param {?} type
     * @return {?}
     */},{key:'annotations',value:function annotations(type){return isStaticType(type)?this.staticDelegate.annotations(type):this.dynamicDelegate.annotations(type);}/**
     * @param {?} typeOrFunc
     * @return {?}
     */},{key:'propMetadata',value:function propMetadata(typeOrFunc){return isStaticType(typeOrFunc)?this.staticDelegate.propMetadata(typeOrFunc):this.dynamicDelegate.propMetadata(typeOrFunc);}/**
     * @param {?} name
     * @return {?}
     */},{key:'getter',value:function getter(name){return this.dynamicDelegate.getter(name);}/**
     * @param {?} name
     * @return {?}
     */},{key:'setter',value:function setter(name){return this.dynamicDelegate.setter(name);}/**
     * @param {?} name
     * @return {?}
     */},{key:'method',value:function method(name){return this.dynamicDelegate.method(name);}/**
     * @param {?} type
     * @return {?}
     */},{key:'importUri',value:function importUri(type){return this.staticDelegate.importUri(type);}/**
     * @param {?} name
     * @param {?} moduleUrl
     * @param {?} members
     * @param {?} runtime
     * @return {?}
     */},{key:'resolveIdentifier',value:function resolveIdentifier(name,moduleUrl,members,runtime){return this.staticDelegate.resolveIdentifier(name,moduleUrl,members);}/**
     * @param {?} enumIdentifier
     * @param {?} name
     * @return {?}
     */},{key:'resolveEnum',value:function resolveEnum(enumIdentifier,name){if(isStaticType(enumIdentifier)){return this.staticDelegate.resolveEnum(enumIdentifier,name);}else{return null;}}}],[{key:'install',value:function install(staticDelegate){ɵreflector.updateCapabilities(new StaticAndDynamicReflectionCapabilities(staticDelegate));}}]);return StaticAndDynamicReflectionCapabilities;}();/**
 * @param {?} type
 * @return {?}
 */function isStaticType(type){return(typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type.name&&type.filePath;}var/** @type {?} */ANGULAR_CORE='@angular/core';var/** @type {?} */HIDDEN_KEY=/^\$.*\$$/;/**
 * A static reflector implements enough of the Reflector API that is necessary to compile
 * templates statically.
 */var StaticReflector=function(){/**
     * @param {?} symbolResolver
     * @param {?=} knownMetadataClasses
     * @param {?=} knownMetadataFunctions
     * @param {?=} errorRecorder
     */function StaticReflector(symbolResolver){var knownMetadataClasses=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var _this234=this;var knownMetadataFunctions=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var errorRecorder=arguments[3];_classCallCheck(this,StaticReflector);this.symbolResolver=symbolResolver;this.errorRecorder=errorRecorder;this.annotationCache=new Map();this.propertyCache=new Map();this.parameterCache=new Map();this.methodCache=new Map();this.conversionMap=new Map();this.initializeConversionMap();knownMetadataClasses.forEach(function(kc){return _this234._registerDecoratorOrConstructor(_this234.getStaticSymbol(kc.filePath,kc.name),kc.ctor);});knownMetadataFunctions.forEach(function(kf){return _this234._registerFunction(_this234.getStaticSymbol(kf.filePath,kf.name),kf.fn);});}/**
     * @param {?} typeOrFunc
     * @return {?}
     */_createClass(StaticReflector,[{key:'importUri',value:function importUri(typeOrFunc){var/** @type {?} */staticSymbol=this.findSymbolDeclaration(typeOrFunc);return staticSymbol?staticSymbol.filePath:null;}/**
     * @param {?} name
     * @param {?} moduleUrl
     * @param {?} members
     * @return {?}
     */},{key:'resolveIdentifier',value:function resolveIdentifier(name,moduleUrl,members){var/** @type {?} */importSymbol=this.getStaticSymbol(moduleUrl,name);var/** @type {?} */rootSymbol=this.findDeclaration(moduleUrl,name);if(importSymbol!=rootSymbol){this.symbolResolver.recordImportAs(rootSymbol,importSymbol);}if(members&&members.length){return this.getStaticSymbol(rootSymbol.filePath,rootSymbol.name,members);}return rootSymbol;}/**
     * @param {?} moduleUrl
     * @param {?} name
     * @param {?=} containingFile
     * @return {?}
     */},{key:'findDeclaration',value:function findDeclaration(moduleUrl,name,containingFile){return this.findSymbolDeclaration(this.symbolResolver.getSymbolByModule(moduleUrl,name,containingFile));}/**
     * @param {?} symbol
     * @return {?}
     */},{key:'findSymbolDeclaration',value:function findSymbolDeclaration(symbol){var/** @type {?} */resolvedSymbol=this.symbolResolver.resolveSymbol(symbol);if(resolvedSymbol&&resolvedSymbol.metadata instanceof StaticSymbol){return this.findSymbolDeclaration(resolvedSymbol.metadata);}else{return symbol;}}/**
     * @param {?} enumIdentifier
     * @param {?} name
     * @return {?}
     */},{key:'resolveEnum',value:function resolveEnum(enumIdentifier,name){var/** @type {?} */staticSymbol=enumIdentifier;var/** @type {?} */members=(staticSymbol.members||[]).concat(name);return this.getStaticSymbol(staticSymbol.filePath,staticSymbol.name,members);}/**
     * @param {?} type
     * @return {?}
     */},{key:'annotations',value:function annotations(type){var/** @type {?} */annotations=this.annotationCache.get(type);if(!annotations){annotations=[];var/** @type {?} */classMetadata=this.getTypeMetadata(type);if(classMetadata['extends']){var/** @type {?} */parentType=this.trySimplify(type,classMetadata['extends']);if(parentType&&parentType instanceof StaticSymbol){var _annotations;var/** @type {?} */parentAnnotations=this.annotations(parentType);(_annotations=annotations).push.apply(_annotations,_toConsumableArray(parentAnnotations));}}if(classMetadata['decorators']){var _annotations2;var/** @type {?} */ownAnnotations=this.simplify(type,classMetadata['decorators']);(_annotations2=annotations).push.apply(_annotations2,_toConsumableArray(ownAnnotations));}this.annotationCache.set(type,annotations.filter(function(ann){return!!ann;}));}return annotations;}/**
     * @param {?} type
     * @return {?}
     */},{key:'propMetadata',value:function propMetadata(type){var _this235=this;var/** @type {?} */propMetadata=this.propertyCache.get(type);if(!propMetadata){var/** @type {?} */classMetadata=this.getTypeMetadata(type);propMetadata={};if(classMetadata['extends']){var/** @type {?} */parentType=this.simplify(type,classMetadata['extends']);if(parentType instanceof StaticSymbol){var/** @type {?} */parentPropMetadata=this.propMetadata(parentType);Object.keys(parentPropMetadata).forEach(function(parentProp){propMetadata[parentProp]=parentPropMetadata[parentProp];});}}var/** @type {?} */members=classMetadata['members']||{};Object.keys(members).forEach(function(propName){var/** @type {?} */propData=members[propName];var/** @type {?} */prop=propData.find(function(a){return a['__symbolic']=='property'||a['__symbolic']=='method';});var/** @type {?} */decorators=[];if(propMetadata[propName]){decorators.push.apply(decorators,_toConsumableArray(propMetadata[propName]));}propMetadata[propName]=decorators;if(prop&&prop['decorators']){decorators.push.apply(decorators,_toConsumableArray(_this235.simplify(type,prop['decorators'])));}});this.propertyCache.set(type,propMetadata);}return propMetadata;}/**
     * @param {?} type
     * @return {?}
     */},{key:'parameters',value:function parameters(type){if(!(type instanceof StaticSymbol)){this.reportError(new Error('parameters received '+JSON.stringify(type)+' which is not a StaticSymbol'),type);return[];}try{var/** @type {?} */parameters=this.parameterCache.get(type);if(!parameters){var/** @type {?} */classMetadata=this.getTypeMetadata(type);var/** @type {?} */members=classMetadata?classMetadata['members']:null;var/** @type {?} */ctorData=members?members['__ctor__']:null;if(ctorData){var/** @type {?} */ctor=ctorData.find(function(a){return a['__symbolic']=='constructor';});var/** @type {?} */parameterTypes=this.simplify(type,ctor['parameters']||[]);var/** @type {?} */parameterDecorators=this.simplify(type,ctor['parameterDecorators']||[]);parameters=[];parameterTypes.forEach(function(paramType,index){var/** @type {?} */nestedResult=[];if(paramType){nestedResult.push(paramType);}var/** @type {?} */decorators=parameterDecorators?parameterDecorators[index]:null;if(decorators){nestedResult.push.apply(nestedResult,_toConsumableArray(decorators));}parameters.push(nestedResult);});}else if(classMetadata['extends']){var/** @type {?} */parentType=this.simplify(type,classMetadata['extends']);if(parentType instanceof StaticSymbol){parameters=this.parameters(parentType);}}if(!parameters){parameters=[];}this.parameterCache.set(type,parameters);}return parameters;}catch(e){console.error('Failed on type '+JSON.stringify(type)+' with error '+e);throw e;}}/**
     * @param {?} type
     * @return {?}
     */},{key:'_methodNames',value:function _methodNames(type){var/** @type {?} */methodNames=this.methodCache.get(type);if(!methodNames){var/** @type {?} */classMetadata=this.getTypeMetadata(type);methodNames={};if(classMetadata['extends']){var/** @type {?} */parentType=this.simplify(type,classMetadata['extends']);if(parentType instanceof StaticSymbol){var/** @type {?} */parentMethodNames=this._methodNames(parentType);Object.keys(parentMethodNames).forEach(function(parentProp){methodNames[parentProp]=parentMethodNames[parentProp];});}}var/** @type {?} */members=classMetadata['members']||{};Object.keys(members).forEach(function(propName){var/** @type {?} */propData=members[propName];var/** @type {?} */isMethod=propData.some(function(a){return a['__symbolic']=='method';});methodNames[propName]=methodNames[propName]||isMethod;});this.methodCache.set(type,methodNames);}return methodNames;}/**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */},{key:'hasLifecycleHook',value:function hasLifecycleHook(type,lcProperty){if(!(type instanceof StaticSymbol)){this.reportError(new Error('hasLifecycleHook received '+JSON.stringify(type)+' which is not a StaticSymbol'),type);}try{return!!this._methodNames(type)[lcProperty];}catch(e){console.error('Failed on type '+JSON.stringify(type)+' with error '+e);throw e;}}/**
     * @param {?} type
     * @param {?} ctor
     * @return {?}
     */},{key:'_registerDecoratorOrConstructor',value:function _registerDecoratorOrConstructor(type,ctor){this.conversionMap.set(type,function(context,args){return new(Function.prototype.bind.apply(ctor,[null].concat(_toConsumableArray(args))))();});}/**
     * @param {?} type
     * @param {?} fn
     * @return {?}
     */},{key:'_registerFunction',value:function _registerFunction(type,fn){this.conversionMap.set(type,function(context,args){return fn.apply(undefined,args);});}/**
     * @return {?}
     */},{key:'initializeConversionMap',value:function initializeConversionMap(){this.injectionToken=this.findDeclaration(ANGULAR_CORE,'InjectionToken');this.opaqueToken=this.findDeclaration(ANGULAR_CORE,'OpaqueToken');this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Host'),Host);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Injectable'),Injectable);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Self'),Self);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'SkipSelf'),SkipSelf);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Inject'),Inject);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Optional'),Optional);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Attribute'),Attribute);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'ContentChild'),ContentChild);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'ContentChildren'),ContentChildren);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'ViewChild'),ViewChild);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'ViewChildren'),ViewChildren);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Input'),Input);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Output'),Output);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Pipe'),Pipe);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'HostBinding'),HostBinding);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'HostListener'),HostListener);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Directive'),Directive);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Component'),Component);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'NgModule'),NgModule);// Note: Some metadata classes can be used directly with Provider.deps.
this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Host'),Host);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Self'),Self);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'SkipSelf'),SkipSelf);this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE,'Optional'),Optional);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'trigger'),trigger);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'state'),state);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'transition'),transition);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'style'),style);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'animate'),animate);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'keyframes'),keyframes);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'sequence'),sequence);this._registerFunction(this.findDeclaration(ANGULAR_CORE,'group'),group);}/**
     * getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
     * All types passed to the StaticResolver should be pseudo-types returned by this method.
     *
     * @param {?} declarationFile the absolute path of the file where the symbol is declared
     * @param {?} name the name of the type.
     * @param {?=} members
     * @return {?}
     */},{key:'getStaticSymbol',value:function getStaticSymbol(declarationFile,name,members){return this.symbolResolver.getStaticSymbol(declarationFile,name,members);}/**
     * @param {?} error
     * @param {?} context
     * @param {?=} path
     * @return {?}
     */},{key:'reportError',value:function reportError(error,context,path){if(this.errorRecorder){this.errorRecorder(error,context&&context.filePath||path);}else{throw error;}}/**
     * Simplify but discard any errors
     * @param {?} context
     * @param {?} value
     * @return {?}
     */},{key:'trySimplify',value:function trySimplify(context,value){var/** @type {?} */originalRecorder=this.errorRecorder;this.errorRecorder=function(error,fileName){};var/** @type {?} */result=this.simplify(context,value);this.errorRecorder=originalRecorder;return result;}/**
     * \@internal
     * @param {?} context
     * @param {?} value
     * @return {?}
     */},{key:'simplify',value:function simplify(context,value){var _this236=this;var/** @type {?} */self=this;var/** @type {?} */scope=BindingScope.empty;var/** @type {?} */calling=new Map();/**
         * @param {?} context
         * @param {?} value
         * @param {?} depth
         * @return {?}
         */function simplifyInContext(context,value,depth){/**
             * @param {?} staticSymbol
             * @return {?}
             */function resolveReferenceValue(staticSymbol){var/** @type {?} */resolvedSymbol=self.symbolResolver.resolveSymbol(staticSymbol);return resolvedSymbol?resolvedSymbol.metadata:null;}/**
             * @param {?} functionSymbol
             * @param {?} targetFunction
             * @param {?} args
             * @return {?}
             */function simplifyCall(functionSymbol,targetFunction,args){if(targetFunction&&targetFunction['__symbolic']=='function'){if(calling.get(functionSymbol)){throw new Error('Recursion not supported');}calling.set(functionSymbol,true);try{var/** @type {?} */_value=targetFunction['value'];if(_value&&(depth!=0||_value.__symbolic!='error')){var/** @type {?} */parameters=targetFunction['parameters'];var/** @type {?} */defaults=targetFunction.defaults;args=args.map(function(arg){return simplifyInContext(context,arg,depth+1);});if(defaults&&defaults.length>args.length){var _args;(_args=args).push.apply(_args,_toConsumableArray(defaults.slice(args.length).map(function(value){return simplify(value);})));}var/** @type {?} */functionScope=BindingScope.build();for(var/** @type {?} */i=0;i<parameters.length;i++){functionScope.define(parameters[i],args[i]);}var/** @type {?} */oldScope=scope;var/** @type {?} */_result=void 0;try{scope=functionScope.done();_result=simplifyInContext(functionSymbol,_value,depth+1);}finally{scope=oldScope;}return _result;}}finally{calling.delete(functionSymbol);}}if(depth===0){// If depth is 0 we are evaluating the top level expression that is describing element
// decorator. In this case, it is a decorator we don't understand, such as a custom
// non-angular decorator, and we should just ignore it.
return{__symbolic:'ignore'};}return simplify({__symbolic:'error',message:'Function call not supported',context:functionSymbol});}/**
             * @param {?} expression
             * @return {?}
             */function simplify(expression){if(isPrimitive$1(expression)){return expression;}if(expression instanceof Array){var/** @type {?} */_result2=[];var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=expression[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var item=_step5.value;// Check for a spread expression
if(item&&item.__symbolic==='spread'){var/** @type {?} */spreadArray=simplify(item.expression);if(Array.isArray(spreadArray)){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=spreadArray[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var spreadItem=_step6.value;_result2.push(spreadItem);}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}continue;}}var/** @type {?} */_value2=simplify(item);if(shouldIgnore(_value2)){continue;}_result2.push(_value2);}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}return _result2;}if(expression instanceof StaticSymbol){// Stop simplification at builtin symbols
if(expression===self.injectionToken||expression===self.opaqueToken||self.conversionMap.has(expression)){return expression;}else{var/** @type {?} */staticSymbol=expression;var/** @type {?} */declarationValue=resolveReferenceValue(staticSymbol);if(declarationValue){return simplifyInContext(staticSymbol,declarationValue,depth+1);}else{return staticSymbol;}}}if(expression){if(expression['__symbolic']){var/** @type {?} */_staticSymbol=void 0;switch(expression['__symbolic']){case'binop':var/** @type {?} */left=simplify(expression['left']);if(shouldIgnore(left))return left;var/** @type {?} */right=simplify(expression['right']);if(shouldIgnore(right))return right;switch(expression['operator']){case'&&':return left&&right;case'||':return left||right;case'|':return left|right;case'^':return left^right;case'&':return left&right;case'==':return left==right;case'!=':return left!=right;case'===':return left===right;case'!==':return left!==right;case'<':return left<right;case'>':return left>right;case'<=':return left<=right;case'>=':return left>=right;case'<<':return left<<right;case'>>':return left>>right;case'+':return left+right;case'-':return left-right;case'*':return left*right;case'/':return left/right;case'%':return left%right;}return null;case'if':var/** @type {?} */condition=simplify(expression['condition']);return condition?simplify(expression['thenExpression']):simplify(expression['elseExpression']);case'pre':var/** @type {?} */operand=simplify(expression['operand']);if(shouldIgnore(operand))return operand;switch(expression['operator']){case'+':return operand;case'-':return-operand;case'!':return!operand;case'~':return~operand;}return null;case'index':var/** @type {?} */indexTarget=simplify(expression['expression']);var/** @type {?} */index=simplify(expression['index']);if(indexTarget&&isPrimitive$1(index))return indexTarget[index];return null;case'select':var/** @type {?} */member=expression['member'];var/** @type {?} */selectContext=context;var/** @type {?} */selectTarget=simplify(expression['expression']);if(selectTarget instanceof StaticSymbol){var/** @type {?} */members=selectTarget.members.concat(member);selectContext=self.getStaticSymbol(selectTarget.filePath,selectTarget.name,members);var/** @type {?} */_declarationValue=resolveReferenceValue(selectContext);if(_declarationValue){return simplifyInContext(selectContext,_declarationValue,depth+1);}else{return selectContext;}}if(selectTarget&&isPrimitive$1(member))return simplifyInContext(selectContext,selectTarget[member],depth+1);return null;case'reference':// Note: This only has to deal with variable references,
// as symbol references have been converted into StaticSymbols already
// in the StaticSymbolResolver!
var/** @type {?} */name=expression['name'];var/** @type {?} */localValue=scope.resolve(name);if(localValue!=BindingScope.missing){return localValue;}break;case'class':return context;case'function':return context;case'new':case'call':// Determine if the function is a built-in conversion
_staticSymbol=simplifyInContext(context,expression['expression'],depth+1);if(_staticSymbol instanceof StaticSymbol){if(_staticSymbol===self.injectionToken||_staticSymbol===self.opaqueToken){// if somebody calls new InjectionToken, don't create an InjectionToken,
// but rather return the symbol to which the InjectionToken is assigned to.
return context;}var/** @type {?} */argExpressions=expression['arguments']||[];var/** @type {?} */converter=self.conversionMap.get(_staticSymbol);if(converter){var/** @type {?} */args=argExpressions.map(function(arg){return simplifyInContext(context,arg,depth+1);});return converter(context,args);}else{// Determine if the function is one we can simplify.
var/** @type {?} */targetFunction=resolveReferenceValue(_staticSymbol);return simplifyCall(_staticSymbol,targetFunction,argExpressions);}}break;case'error':var/** @type {?} */message=produceErrorMessage(expression);if(expression['line']){message=message+' (position '+(expression['line']+1)+':'+(expression['character']+1)+' in the original .ts file)';throw positionalError(message,context.filePath,expression['line'],expression['character']);}throw new Error(message);}return null;}return mapStringMap(expression,function(value,name){return simplify(value);});}return null;}try{return simplify(value);}catch(e){var/** @type {?} */members=context.members.length?'.'+context.members.join('.'):'';var/** @type {?} */message=e.message+', resolving symbol '+context.name+members+' in '+context.filePath;if(e.fileName){throw positionalError(message,e.fileName,e.line,e.column);}throw syntaxError(message);}}var/** @type {?} */recordedSimplifyInContext=function recordedSimplifyInContext(context,value,depth){try{return simplifyInContext(context,value,depth);}catch(e){_this236.reportError(e,context);}};var/** @type {?} */result=this.errorRecorder?recordedSimplifyInContext(context,value,0):simplifyInContext(context,value,0);if(shouldIgnore(result)){return undefined;}return result;}/**
     * @param {?} type
     * @return {?}
     */},{key:'getTypeMetadata',value:function getTypeMetadata(type){var/** @type {?} */resolvedSymbol=this.symbolResolver.resolveSymbol(type);return resolvedSymbol&&resolvedSymbol.metadata?resolvedSymbol.metadata:{__symbolic:'class'};}}]);return StaticReflector;}();/**
 * @param {?} error
 * @return {?}
 */function expandedMessage(error){switch(error.message){case'Reference to non-exported class':if(error.context&&error.context.className){return'Reference to a non-exported class '+error.context.className+'. Consider exporting the class';}break;case'Variable not initialized':return'Only initialized variables and constants can be referenced because the value of this variable is needed by the template compiler';case'Destructuring not supported':return'Referencing an exported destructured variable or constant is not supported by the template compiler. Consider simplifying this to avoid destructuring';case'Could not resolve type':if(error.context&&error.context.typeName){return'Could not resolve type '+error.context.typeName;}break;case'Function call not supported':var/** @type {?} */prefix=error.context&&error.context.name?'Calling function \''+error.context.name+'\', f':'F';return prefix+'unction calls are not supported. Consider replacing the function or lambda with a reference to an exported function';case'Reference to a local symbol':if(error.context&&error.context.name){return'Reference to a local (non-exported) symbol \''+error.context.name+'\'. Consider exporting the symbol';}break;}return error.message;}/**
 * @param {?} error
 * @return {?}
 */function produceErrorMessage(error){return'Error encountered resolving symbol values statically. '+expandedMessage(error);}/**
 * @param {?} input
 * @param {?} transform
 * @return {?}
 */function mapStringMap(input,transform){if(!input)return{};var/** @type {?} */result={};Object.keys(input).forEach(function(key){var/** @type {?} */value=transform(input[key],key);if(!shouldIgnore(value)){if(HIDDEN_KEY.test(key)){Object.defineProperty(result,key,{enumerable:false,configurable:true,value:value});}else{result[key]=value;}}});return result;}/**
 * @param {?} o
 * @return {?}
 */function isPrimitive$1(o){return o===null||typeof o!=='function'&&(typeof o==='undefined'?'undefined':_typeof(o))!=='object';}/**
 * @abstract
 */var BindingScope=function(){function BindingScope(){_classCallCheck(this,BindingScope);}_createClass(BindingScope,[{key:'resolve',/**
     * @abstract
     * @param {?} name
     * @return {?}
     */value:function resolve(name){}/**
     * @return {?}
     */}],[{key:'build',value:function build(){var/** @type {?} */current=new Map();return{define:function define(name,value){current.set(name,value);return this;},done:function done(){return current.size>0?new PopulatedScope(current):BindingScope.empty;}};}}]);return BindingScope;}();BindingScope.missing={};BindingScope.empty={resolve:function resolve(name){return BindingScope.missing;}};var PopulatedScope=function(_BindingScope){_inherits(PopulatedScope,_BindingScope);/**
     * @param {?} bindings
     */function PopulatedScope(bindings){_classCallCheck(this,PopulatedScope);var _this237=_possibleConstructorReturn(this,(PopulatedScope.__proto__||Object.getPrototypeOf(PopulatedScope)).call(this));_this237.bindings=bindings;return _this237;}/**
     * @param {?} name
     * @return {?}
     */_createClass(PopulatedScope,[{key:'resolve',value:function resolve(name){return this.bindings.has(name)?this.bindings.get(name):BindingScope.missing;}}]);return PopulatedScope;}(BindingScope);/**
 * @param {?} value
 * @return {?}
 */function shouldIgnore(value){return value&&value.__symbolic=='ignore';}/**
 * @param {?} message
 * @param {?} fileName
 * @param {?} line
 * @param {?} column
 * @return {?}
 */function positionalError(message,fileName,line,column){var/** @type {?} */result=new Error(message);result.fileName=fileName;result.line=line;result.column=column;return result;}var ResolvedStaticSymbol=/**
     * @param {?} symbol
     * @param {?} metadata
     */function ResolvedStaticSymbol(symbol,metadata){_classCallCheck(this,ResolvedStaticSymbol);this.symbol=symbol;this.metadata=metadata;};var/** @type {?} */SUPPORTED_SCHEMA_VERSION=3;/**
 * This class is responsible for loading metadata per symbol,
 * and normalizing references between symbols.
 *
 * Internally, it only uses symbols without members,
 * and deduces the values for symbols with members based
 * on these symbols.
 */var StaticSymbolResolver=function(){/**
     * @param {?} host
     * @param {?} staticSymbolCache
     * @param {?} summaryResolver
     * @param {?=} errorRecorder
     */function StaticSymbolResolver(host,staticSymbolCache,summaryResolver,errorRecorder){_classCallCheck(this,StaticSymbolResolver);this.host=host;this.staticSymbolCache=staticSymbolCache;this.summaryResolver=summaryResolver;this.errorRecorder=errorRecorder;this.metadataCache=new Map();this.resolvedSymbols=new Map();this.resolvedFilePaths=new Set();this.importAs=new Map();}/**
     * @param {?} staticSymbol
     * @return {?}
     */_createClass(StaticSymbolResolver,[{key:'resolveSymbol',value:function resolveSymbol(staticSymbol){if(staticSymbol.members.length>0){return this._resolveSymbolMembers(staticSymbol);}var/** @type {?} */result=this.resolvedSymbols.get(staticSymbol);if(result){return result;}result=this._resolveSymbolFromSummary(staticSymbol);if(result){return result;}// Note: Some users use libraries that were not compiled with ngc, i.e. they don't
// have summaries, only .d.ts files. So we always need to check both, the summary
// and metadata.
this._createSymbolsOf(staticSymbol.filePath);result=this.resolvedSymbols.get(staticSymbol);return result;}/**
     * getImportAs produces a symbol that can be used to import the given symbol.
     * The import might be different than the symbol if the symbol is exported from
     * a library with a summary; in which case we want to import the symbol from the
     * ngfactory re-export instead of directly to avoid introducing a direct dependency
     * on an otherwise indirect dependency.
     *
     * @param {?} staticSymbol the symbol for which to generate a import symbol
     * @return {?}
     */},{key:'getImportAs',value:function getImportAs(staticSymbol){if(staticSymbol.members.length){var/** @type {?} */baseSymbol=this.getStaticSymbol(staticSymbol.filePath,staticSymbol.name);var/** @type {?} */baseImportAs=this.getImportAs(baseSymbol);return baseImportAs?this.getStaticSymbol(baseImportAs.filePath,baseImportAs.name,staticSymbol.members):null;}var/** @type {?} */result=this.summaryResolver.getImportAs(staticSymbol);if(!result){result=this.importAs.get(staticSymbol);}return result;}/**
     * getTypeArity returns the number of generic type parameters the given symbol
     * has. If the symbol is not a type the result is null.
     * @param {?} staticSymbol
     * @return {?}
     */},{key:'getTypeArity',value:function getTypeArity(staticSymbol){// If the file is a factory file, don't resolve the symbol as doing so would
// cause the metadata for an factory file to be loaded which doesn't exist.
// All references to generated classes must include the correct arity whenever
// generating code.
if(isNgFactoryFile(staticSymbol.filePath)){return null;}var/** @type {?} */resolvedSymbol=this.resolveSymbol(staticSymbol);while(resolvedSymbol&&resolvedSymbol.metadata instanceof StaticSymbol){resolvedSymbol=this.resolveSymbol(resolvedSymbol.metadata);}return resolvedSymbol&&resolvedSymbol.metadata&&resolvedSymbol.metadata.arity||null;}/**
     * @param {?} sourceSymbol
     * @param {?} targetSymbol
     * @return {?}
     */},{key:'recordImportAs',value:function recordImportAs(sourceSymbol,targetSymbol){sourceSymbol.assertNoMembers();targetSymbol.assertNoMembers();this.importAs.set(sourceSymbol,targetSymbol);}/**
     * @param {?} staticSymbol
     * @return {?}
     */},{key:'_resolveSymbolMembers',value:function _resolveSymbolMembers(staticSymbol){var/** @type {?} */members=staticSymbol.members;var/** @type {?} */baseResolvedSymbol=this.resolveSymbol(this.getStaticSymbol(staticSymbol.filePath,staticSymbol.name));if(!baseResolvedSymbol){return null;}var/** @type {?} */baseMetadata=baseResolvedSymbol.metadata;if(baseMetadata instanceof StaticSymbol){return new ResolvedStaticSymbol(staticSymbol,this.getStaticSymbol(baseMetadata.filePath,baseMetadata.name,members));}else if(baseMetadata&&baseMetadata.__symbolic==='class'){if(baseMetadata.statics&&members.length===1){return new ResolvedStaticSymbol(staticSymbol,baseMetadata.statics[members[0]]);}}else{var/** @type {?} */value=baseMetadata;for(var/** @type {?} */i=0;i<members.length&&value;i++){value=value[members[i]];}return new ResolvedStaticSymbol(staticSymbol,value);}return null;}/**
     * @param {?} staticSymbol
     * @return {?}
     */},{key:'_resolveSymbolFromSummary',value:function _resolveSymbolFromSummary(staticSymbol){var/** @type {?} */summary=this.summaryResolver.resolveSummary(staticSymbol);return summary?new ResolvedStaticSymbol(staticSymbol,summary.metadata):null;}/**
     * getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
     * All types passed to the StaticResolver should be pseudo-types returned by this method.
     *
     * @param {?} declarationFile the absolute path of the file where the symbol is declared
     * @param {?} name the name of the type.
     * @param {?=} members a symbol for a static member of the named type
     * @return {?}
     */},{key:'getStaticSymbol',value:function getStaticSymbol(declarationFile,name,members){return this.staticSymbolCache.get(declarationFile,name,members);}/**
     * @param {?} filePath
     * @return {?}
     */},{key:'getSymbolsOf',value:function getSymbolsOf(filePath){// Note: Some users use libraries that were not compiled with ngc, i.e. they don't
// have summaries, only .d.ts files. So we always need to check both, the summary
// and metadata.
var/** @type {?} */symbols=new Set(this.summaryResolver.getSymbolsOf(filePath));this._createSymbolsOf(filePath);this.resolvedSymbols.forEach(function(resolvedSymbol){if(resolvedSymbol.symbol.filePath===filePath){symbols.add(resolvedSymbol.symbol);}});return Array.from(symbols);}/**
     * @param {?} filePath
     * @return {?}
     */},{key:'_createSymbolsOf',value:function _createSymbolsOf(filePath){var _this238=this;if(this.resolvedFilePaths.has(filePath)){return;}this.resolvedFilePaths.add(filePath);var/** @type {?} */resolvedSymbols=[];var/** @type {?} */metadata=this.getModuleMetadata(filePath);if(metadata['metadata']){// handle direct declarations of the symbol
var/** @type {?} */topLevelSymbolNames=new Set(Object.keys(metadata['metadata']).map(unescapeIdentifier));Object.keys(metadata['metadata']).forEach(function(metadataKey){var/** @type {?} */symbolMeta=metadata['metadata'][metadataKey];var/** @type {?} */name=unescapeIdentifier(metadataKey);var/** @type {?} */canonicalSymbol=_this238.getStaticSymbol(filePath,name);if(metadata['importAs']){// Index bundle indexes should use the importAs module name instead of a reference
// to the .d.ts file directly.
var/** @type {?} */importSymbol=_this238.getStaticSymbol(metadata['importAs'],name);_this238.recordImportAs(canonicalSymbol,importSymbol);}resolvedSymbols.push(_this238.createResolvedSymbol(canonicalSymbol,topLevelSymbolNames,symbolMeta));});}// handle the symbols in one of the re-export location
if(metadata['exports']){var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{var _loop3=function _loop3(){var moduleExport=_step7.value;// handle the symbols in the list of explicitly re-exported symbols.
if(moduleExport.export){moduleExport.export.forEach(function(exportSymbol){var/** @type {?} */symbolName=void 0;if(typeof exportSymbol==='string'){symbolName=exportSymbol;}else{symbolName=exportSymbol.as;}symbolName=unescapeIdentifier(symbolName);var/** @type {?} */symName=symbolName;if(typeof exportSymbol!=='string'){symName=unescapeIdentifier(exportSymbol.name);}var/** @type {?} */resolvedModule=_this238.resolveModule(moduleExport.from,filePath);if(resolvedModule){var/** @type {?} */targetSymbol=_this238.getStaticSymbol(resolvedModule,symName);var/** @type {?} */sourceSymbol=_this238.getStaticSymbol(filePath,symbolName);resolvedSymbols.push(_this238.createExport(sourceSymbol,targetSymbol));}});}else{// handle the symbols via export * directives.
var/** @type {?} */resolvedModule=_this238.resolveModule(moduleExport.from,filePath);if(resolvedModule){var/** @type {?} */nestedExports=_this238.getSymbolsOf(resolvedModule);nestedExports.forEach(function(targetSymbol){var/** @type {?} */sourceSymbol=_this238.getStaticSymbol(filePath,targetSymbol.name);resolvedSymbols.push(_this238.createExport(sourceSymbol,targetSymbol));});}}};for(var _iterator7=metadata['exports'][Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){_loop3();}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}}resolvedSymbols.forEach(function(resolvedSymbol){return _this238.resolvedSymbols.set(resolvedSymbol.symbol,resolvedSymbol);});}/**
     * @param {?} sourceSymbol
     * @param {?} topLevelSymbolNames
     * @param {?} metadata
     * @return {?}
     */},{key:'createResolvedSymbol',value:function createResolvedSymbol(sourceSymbol,topLevelSymbolNames,metadata){var/** @type {?} */self=this;var ReferenceTransformer=function(_ValueTransformer4){_inherits(ReferenceTransformer,_ValueTransformer4);function ReferenceTransformer(){_classCallCheck(this,ReferenceTransformer);return _possibleConstructorReturn(this,(ReferenceTransformer.__proto__||Object.getPrototypeOf(ReferenceTransformer)).apply(this,arguments));}_createClass(ReferenceTransformer,[{key:'visitStringMap',/**
             * @param {?} map
             * @param {?} functionParams
             * @return {?}
             */value:function visitStringMap(map,functionParams){var/** @type {?} */symbolic=map['__symbolic'];if(symbolic==='function'){var/** @type {?} */oldLen=functionParams.length;functionParams.push.apply(functionParams,_toConsumableArray(map['parameters']||[]));var/** @type {?} */result=_get(ReferenceTransformer.prototype.__proto__||Object.getPrototypeOf(ReferenceTransformer.prototype),'visitStringMap',this).call(this,map,functionParams);functionParams.length=oldLen;return result;}else if(symbolic==='reference'){var/** @type {?} */module=map['module'];var/** @type {?} */name=map['name']?unescapeIdentifier(map['name']):map['name'];if(!name){return null;}var/** @type {?} */filePath=void 0;if(module){filePath=self.resolveModule(module,sourceSymbol.filePath);if(!filePath){return{__symbolic:'error',message:'Could not resolve '+module+' relative to '+sourceSymbol.filePath+'.'};}return self.getStaticSymbol(filePath,name);}else if(functionParams.indexOf(name)>=0){// reference to a function parameter
return{__symbolic:'reference',name:name};}else{if(topLevelSymbolNames.has(name)){return self.getStaticSymbol(sourceSymbol.filePath,name);}// ambient value
null;}}else{return _get(ReferenceTransformer.prototype.__proto__||Object.getPrototypeOf(ReferenceTransformer.prototype),'visitStringMap',this).call(this,map,functionParams);}}}]);return ReferenceTransformer;}(ValueTransformer);var/** @type {?} */transformedMeta=visitValue(metadata,new ReferenceTransformer(),[]);if(transformedMeta instanceof StaticSymbol){return this.createExport(sourceSymbol,transformedMeta);}return new ResolvedStaticSymbol(sourceSymbol,transformedMeta);}/**
     * @param {?} sourceSymbol
     * @param {?} targetSymbol
     * @return {?}
     */},{key:'createExport',value:function createExport(sourceSymbol,targetSymbol){sourceSymbol.assertNoMembers();targetSymbol.assertNoMembers();if(this.summaryResolver.isLibraryFile(sourceSymbol.filePath)){// This case is for an ng library importing symbols from a plain ts library
// transitively.
// Note: We rely on the fact that we discover symbols in the direction
// from source files to library files
this.importAs.set(targetSymbol,this.getImportAs(sourceSymbol)||sourceSymbol);}return new ResolvedStaticSymbol(sourceSymbol,targetSymbol);}/**
     * @param {?} error
     * @param {?} context
     * @param {?=} path
     * @return {?}
     */},{key:'reportError',value:function reportError(error,context,path){if(this.errorRecorder){this.errorRecorder(error,context&&context.filePath||path);}else{throw error;}}/**
     * @param {?} module an absolute path to a module file.
     * @return {?}
     */},{key:'getModuleMetadata',value:function getModuleMetadata(module){var/** @type {?} */moduleMetadata=this.metadataCache.get(module);if(!moduleMetadata){var/** @type {?} */moduleMetadatas=this.host.getMetadataFor(module);if(moduleMetadatas){var/** @type {?} */maxVersion=-1;moduleMetadatas.forEach(function(md){if(md['version']>maxVersion){maxVersion=md['version'];moduleMetadata=md;}});}if(!moduleMetadata){moduleMetadata={__symbolic:'module',version:SUPPORTED_SCHEMA_VERSION,module:module,metadata:{}};}if(moduleMetadata['version']!=SUPPORTED_SCHEMA_VERSION){var/** @type {?} */errorMessage=moduleMetadata['version']==2?'Unsupported metadata version '+moduleMetadata['version']+' for module '+module+'. This module should be compiled with a newer version of ngc':'Metadata version mismatch for module '+module+', found version '+moduleMetadata['version']+', expected '+SUPPORTED_SCHEMA_VERSION;this.reportError(new Error(errorMessage),null);}this.metadataCache.set(module,moduleMetadata);}return moduleMetadata;}/**
     * @param {?} module
     * @param {?} symbolName
     * @param {?=} containingFile
     * @return {?}
     */},{key:'getSymbolByModule',value:function getSymbolByModule(module,symbolName,containingFile){var/** @type {?} */filePath=this.resolveModule(module,containingFile);if(!filePath){this.reportError(new Error('Could not resolve module '+module+(containingFile?' relative to $ {\n            containingFile\n          } ':'')),null);return this.getStaticSymbol('ERROR:'+module,symbolName);}return this.getStaticSymbol(filePath,symbolName);}/**
     * @param {?} module
     * @param {?} containingFile
     * @return {?}
     */},{key:'resolveModule',value:function resolveModule(module,containingFile){try{return this.host.moduleNameToFileName(module,containingFile);}catch(e){console.error('Could not resolve module \''+module+'\' relative to file '+containingFile);this.reportError(e,null,containingFile);}}}]);return StaticSymbolResolver;}();/**
 * @param {?} identifier
 * @return {?}
 */function unescapeIdentifier(identifier){return identifier.startsWith('___')?identifier.substr(1):identifier;}var AotSummaryResolver=function(){/**
     * @param {?} host
     * @param {?} staticSymbolCache
     */function AotSummaryResolver(host,staticSymbolCache){_classCallCheck(this,AotSummaryResolver);this.host=host;this.staticSymbolCache=staticSymbolCache;this.summaryCache=new Map();this.loadedFilePaths=new Set();this.importAs=new Map();}/**
     * @param {?} filePath
     * @return {?}
     */_createClass(AotSummaryResolver,[{key:'isLibraryFile',value:function isLibraryFile(filePath){// Note: We need to strip the .ngfactory. file path,
// so this method also works for generated files
// (for which host.isSourceFile will always return false).
return!this.host.isSourceFile(stripNgFactory(filePath));}/**
     * @param {?} filePath
     * @return {?}
     */},{key:'getLibraryFileName',value:function getLibraryFileName(filePath){return this.host.getOutputFileName(filePath);}/**
     * @param {?} staticSymbol
     * @return {?}
     */},{key:'resolveSummary',value:function resolveSummary(staticSymbol){staticSymbol.assertNoMembers();var/** @type {?} */summary=this.summaryCache.get(staticSymbol);if(!summary){this._loadSummaryFile(staticSymbol.filePath);summary=this.summaryCache.get(staticSymbol);}return summary;}/**
     * @param {?} filePath
     * @return {?}
     */},{key:'getSymbolsOf',value:function getSymbolsOf(filePath){this._loadSummaryFile(filePath);return Array.from(this.summaryCache.keys()).filter(function(symbol){return symbol.filePath===filePath;});}/**
     * @param {?} staticSymbol
     * @return {?}
     */},{key:'getImportAs',value:function getImportAs(staticSymbol){staticSymbol.assertNoMembers();return this.importAs.get(staticSymbol);}/**
     * @param {?} filePath
     * @return {?}
     */},{key:'_loadSummaryFile',value:function _loadSummaryFile(filePath){var _this240=this;if(this.loadedFilePaths.has(filePath)){return;}this.loadedFilePaths.add(filePath);if(this.isLibraryFile(filePath)){var/** @type {?} */summaryFilePath=summaryFileName(filePath);var/** @type {?} */json=void 0;try{json=this.host.loadSummary(summaryFilePath);}catch(e){console.error('Error loading summary file '+summaryFilePath);throw e;}if(json){var _deserializeSummaries=deserializeSummaries(this.staticSymbolCache,json),summaries=_deserializeSummaries.summaries,importAs=_deserializeSummaries.importAs;summaries.forEach(function(summary){return _this240.summaryCache.set(summary.symbol,summary);});importAs.forEach(function(importAs){_this240.importAs.set(importAs.symbol,_this240.staticSymbolCache.get(ngfactoryFilePath(filePath),importAs.importAs));});}}}}]);return AotSummaryResolver;}();/**
 * Creates a new AotCompiler based on options and a host.
 * @param {?} compilerHost
 * @param {?} options
 * @return {?}
 */function createAotCompiler(compilerHost,options){var/** @type {?} */translations=options.translations||'';var/** @type {?} */urlResolver=createOfflineCompileUrlResolver();var/** @type {?} */symbolCache=new StaticSymbolCache();var/** @type {?} */summaryResolver=new AotSummaryResolver(compilerHost,symbolCache);var/** @type {?} */symbolResolver=new StaticSymbolResolver(compilerHost,symbolCache,summaryResolver);var/** @type {?} */staticReflector=new StaticReflector(symbolResolver);StaticAndDynamicReflectionCapabilities.install(staticReflector);var/** @type {?} */console=new ɵConsole();var/** @type {?} */htmlParser=new I18NHtmlParser(new HtmlParser(),translations,options.i18nFormat,MissingTranslationStrategy.Warning,console);var/** @type {?} */config=new CompilerConfig({genDebugInfo:options.debug===true,defaultEncapsulation:ViewEncapsulation.Emulated,logBindingUpdate:false,useJit:false,useViewEngine:options.useViewEngine,enableLegacyTemplate:options.enableLegacyTemplate!==false});var/** @type {?} */normalizer=new DirectiveNormalizer({get:function get(url){return compilerHost.loadResource(url);}},urlResolver,htmlParser,config);var/** @type {?} */expressionParser=new Parser(new Lexer());var/** @type {?} */elementSchemaRegistry=new DomElementSchemaRegistry();var/** @type {?} */tmplParser=new TemplateParser(config,expressionParser,elementSchemaRegistry,htmlParser,console,[]);var/** @type {?} */resolver=new CompileMetadataResolver(config,new NgModuleResolver(staticReflector),new DirectiveResolver(staticReflector),new PipeResolver(staticReflector),summaryResolver,elementSchemaRegistry,normalizer,symbolCache,staticReflector);// TODO(vicb): do not pass options.i18nFormat here
var/** @type {?} */importResolver={getImportAs:function getImportAs(symbol){return symbolResolver.getImportAs(symbol);},fileNameToModuleName:function fileNameToModuleName(fileName,containingFilePath){return compilerHost.fileNameToModuleName(fileName,containingFilePath);},getTypeArity:function getTypeArity(symbol){return symbolResolver.getTypeArity(symbol);}};var/** @type {?} */viewCompiler=config.useViewEngine?new ViewCompilerNext(config,elementSchemaRegistry):new ViewCompiler(config,elementSchemaRegistry);var/** @type {?} */compiler=new AotCompiler(config,compilerHost,resolver,tmplParser,new StyleCompiler(urlResolver),viewCompiler,new DirectiveWrapperCompiler(config,expressionParser,elementSchemaRegistry,console),new NgModuleCompiler(),new TypeScriptEmitter(importResolver),summaryResolver,options.locale,options.i18nFormat,new AnimationParser(elementSchemaRegistry),symbolResolver);return{compiler:compiler,reflector:staticReflector};}/**
 * @param {?} statements
 * @param {?} resultVars
 * @return {?}
 */function interpretStatements(statements,resultVars){var/** @type {?} */stmtsWithReturn=statements.concat([new ReturnStatement(literalArr(resultVars.map(function(resultVar){return variable(resultVar);})))]);var/** @type {?} */ctx=new _ExecutionContext(null,null,null,new Map());var/** @type {?} */visitor=new StatementInterpreter();var/** @type {?} */result=visitor.visitAllStatements(stmtsWithReturn,ctx);return isPresent(result)?result.value:null;}/**
 * @param {?} varNames
 * @param {?} varValues
 * @param {?} statements
 * @param {?} ctx
 * @param {?} visitor
 * @return {?}
 */function _executeFunctionStatements(varNames,varValues,statements,ctx,visitor){var/** @type {?} */childCtx=ctx.createChildWihtLocalVars();for(var/** @type {?} */i=0;i<varNames.length;i++){childCtx.vars.set(varNames[i],varValues[i]);}var/** @type {?} */result=visitor.visitAllStatements(statements,childCtx);return result?result.value:null;}var _ExecutionContext=function(){/**
     * @param {?} parent
     * @param {?} instance
     * @param {?} className
     * @param {?} vars
     */function _ExecutionContext(parent,instance,className,vars){_classCallCheck(this,_ExecutionContext);this.parent=parent;this.instance=instance;this.className=className;this.vars=vars;}/**
     * @return {?}
     */_createClass(_ExecutionContext,[{key:'createChildWihtLocalVars',value:function createChildWihtLocalVars(){return new _ExecutionContext(this,this.instance,this.className,new Map());}}]);return _ExecutionContext;}();var ReturnValue=/**
     * @param {?} value
     */function ReturnValue(value){_classCallCheck(this,ReturnValue);this.value=value;};/**
 * @param {?} _classStmt
 * @param {?} _ctx
 * @param {?} _visitor
 * @return {?}
 */function createDynamicClass(_classStmt,_ctx,_visitor){var/** @type {?} */propertyDescriptors={};_classStmt.getters.forEach(function(getter){// Note: use `function` instead of arrow function to capture `this`
propertyDescriptors[getter.name]={configurable:false,get:function get(){var/** @type {?} */instanceCtx=new _ExecutionContext(_ctx,this,_classStmt.name,_ctx.vars);return _executeFunctionStatements([],[],getter.body,instanceCtx,_visitor);}};});_classStmt.methods.forEach(function(method){var/** @type {?} */paramNames=method.params.map(function(param){return param.name;});// Note: use `function` instead of arrow function to capture `this`
propertyDescriptors[method.name]={writable:false,configurable:false,value:function value(){var/** @type {?} */instanceCtx=new _ExecutionContext(_ctx,this,_classStmt.name,_ctx.vars);for(var _len5=arguments.length,args=Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}return _executeFunctionStatements(paramNames,args,method.body,instanceCtx,_visitor);}};});var/** @type {?} */ctorParamNames=_classStmt.constructorMethod.params.map(function(param){return param.name;});// Note: use `function` instead of arrow function to capture `this`
var/** @type {?} */ctor=function ctor(){var _this241=this;var/** @type {?} */instanceCtx=new _ExecutionContext(_ctx,this,_classStmt.name,_ctx.vars);_classStmt.fields.forEach(function(field){_this241[field.name]=undefined;});for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}_executeFunctionStatements(ctorParamNames,args,_classStmt.constructorMethod.body,instanceCtx,_visitor);};var/** @type {?} */superClass=_classStmt.parent?_classStmt.parent.visitExpression(_visitor,_ctx):Object;ctor.prototype=Object.create(superClass.prototype,propertyDescriptors);return ctor;}var StatementInterpreter=function(){function StatementInterpreter(){_classCallCheck(this,StatementInterpreter);}_createClass(StatementInterpreter,[{key:'debugAst',/**
     * @param {?} ast
     * @return {?}
     */value:function debugAst(ast){return debugOutputAstAsTypeScript(ast);}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareVarStmt',value:function visitDeclareVarStmt(stmt,ctx){ctx.vars.set(stmt.name,stmt.value.visitExpression(this,ctx));return null;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitWriteVarExpr',value:function visitWriteVarExpr(expr,ctx){var/** @type {?} */value=expr.value.visitExpression(this,ctx);var/** @type {?} */currCtx=ctx;while(currCtx!=null){if(currCtx.vars.has(expr.name)){currCtx.vars.set(expr.name,value);return value;}currCtx=currCtx.parent;}throw new Error('Not declared variable '+expr.name);}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadVarExpr',value:function visitReadVarExpr(ast,ctx){var/** @type {?} */varName=ast.name;if(isPresent(ast.builtin)){switch(ast.builtin){case BuiltinVar.Super:return ctx.instance.__proto__;case BuiltinVar.This:return ctx.instance;case BuiltinVar.CatchError:varName=CATCH_ERROR_VAR$2;break;case BuiltinVar.CatchStack:varName=CATCH_STACK_VAR$2;break;default:throw new Error('Unknown builtin variable '+ast.builtin);}}var/** @type {?} */currCtx=ctx;while(currCtx!=null){if(currCtx.vars.has(varName)){return currCtx.vars.get(varName);}currCtx=currCtx.parent;}throw new Error('Not declared variable '+varName);}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitWriteKeyExpr',value:function visitWriteKeyExpr(expr,ctx){var/** @type {?} */receiver=expr.receiver.visitExpression(this,ctx);var/** @type {?} */index=expr.index.visitExpression(this,ctx);var/** @type {?} */value=expr.value.visitExpression(this,ctx);receiver[index]=value;return value;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitWritePropExpr',value:function visitWritePropExpr(expr,ctx){var/** @type {?} */receiver=expr.receiver.visitExpression(this,ctx);var/** @type {?} */value=expr.value.visitExpression(this,ctx);receiver[expr.name]=value;return value;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInvokeMethodExpr',value:function visitInvokeMethodExpr(expr,ctx){var/** @type {?} */receiver=expr.receiver.visitExpression(this,ctx);var/** @type {?} */args=this.visitAllExpressions(expr.args,ctx);var/** @type {?} */result=void 0;if(isPresent(expr.builtin)){switch(expr.builtin){case BuiltinMethod.ConcatArray:result=receiver.concat.apply(receiver,_toConsumableArray(args));break;case BuiltinMethod.SubscribeObservable:result=receiver.subscribe({next:args[0]});break;case BuiltinMethod.Bind:result=receiver.bind.apply(receiver,_toConsumableArray(args));break;default:throw new Error('Unknown builtin method '+expr.builtin);}}else{result=receiver[expr.name].apply(receiver,args);}return result;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInvokeFunctionExpr',value:function visitInvokeFunctionExpr(stmt,ctx){var/** @type {?} */args=this.visitAllExpressions(stmt.args,ctx);var/** @type {?} */fnExpr=stmt.fn;if(fnExpr instanceof ReadVarExpr&&fnExpr.builtin===BuiltinVar.Super){ctx.instance.constructor.prototype.constructor.apply(ctx.instance,args);return null;}else{var/** @type {?} */_fn=stmt.fn.visitExpression(this,ctx);return _fn.apply(null,args);}}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReturnStmt',value:function visitReturnStmt(stmt,ctx){return new ReturnValue(stmt.value.visitExpression(this,ctx));}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareClassStmt',value:function visitDeclareClassStmt(stmt,ctx){var/** @type {?} */clazz=createDynamicClass(stmt,ctx,this);ctx.vars.set(stmt.name,clazz);return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitExpressionStmt',value:function visitExpressionStmt(stmt,ctx){return stmt.expr.visitExpression(this,ctx);}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitIfStmt',value:function visitIfStmt(stmt,ctx){var/** @type {?} */condition=stmt.condition.visitExpression(this,ctx);if(condition){return this.visitAllStatements(stmt.trueCase,ctx);}else if(isPresent(stmt.falseCase)){return this.visitAllStatements(stmt.falseCase,ctx);}return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitTryCatchStmt',value:function visitTryCatchStmt(stmt,ctx){try{return this.visitAllStatements(stmt.bodyStmts,ctx);}catch(e){var/** @type {?} */childCtx=ctx.createChildWihtLocalVars();childCtx.vars.set(CATCH_ERROR_VAR$2,e);childCtx.vars.set(CATCH_STACK_VAR$2,e.stack);return this.visitAllStatements(stmt.catchStmts,childCtx);}}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitThrowStmt',value:function visitThrowStmt(stmt,ctx){throw stmt.error.visitExpression(this,ctx);}/**
     * @param {?} stmt
     * @param {?=} context
     * @return {?}
     */},{key:'visitCommentStmt',value:function visitCommentStmt(stmt,context){return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInstantiateExpr',value:function visitInstantiateExpr(ast,ctx){var/** @type {?} */args=this.visitAllExpressions(ast.args,ctx);var/** @type {?} */clazz=ast.classExpr.visitExpression(this,ctx);return new(Function.prototype.bind.apply(clazz,[null].concat(_toConsumableArray(args))))();}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralExpr',value:function visitLiteralExpr(ast,ctx){return ast.value;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitExternalExpr',value:function visitExternalExpr(ast,ctx){return ast.value.reference;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitConditionalExpr',value:function visitConditionalExpr(ast,ctx){if(ast.condition.visitExpression(this,ctx)){return ast.trueCase.visitExpression(this,ctx);}else if(isPresent(ast.falseCase)){return ast.falseCase.visitExpression(this,ctx);}return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitNotExpr',value:function visitNotExpr(ast,ctx){return!ast.condition.visitExpression(this,ctx);}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitCastExpr',value:function visitCastExpr(ast,ctx){return ast.value.visitExpression(this,ctx);}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitFunctionExpr',value:function visitFunctionExpr(ast,ctx){var/** @type {?} */paramNames=ast.params.map(function(param){return param.name;});return _declareFn(paramNames,ast.statements,ctx,this);}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareFunctionStmt',value:function visitDeclareFunctionStmt(stmt,ctx){var/** @type {?} */paramNames=stmt.params.map(function(param){return param.name;});ctx.vars.set(stmt.name,_declareFn(paramNames,stmt.statements,ctx,this));return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitBinaryOperatorExpr',value:function visitBinaryOperatorExpr(ast,ctx){var _this242=this;var/** @type {?} */lhs=function lhs(){return ast.lhs.visitExpression(_this242,ctx);};var/** @type {?} */rhs=function rhs(){return ast.rhs.visitExpression(_this242,ctx);};switch(ast.operator){case BinaryOperator.Equals:return lhs()==rhs();case BinaryOperator.Identical:return lhs()===rhs();case BinaryOperator.NotEquals:return lhs()!=rhs();case BinaryOperator.NotIdentical:return lhs()!==rhs();case BinaryOperator.And:return lhs()&&rhs();case BinaryOperator.Or:return lhs()||rhs();case BinaryOperator.Plus:return lhs()+rhs();case BinaryOperator.Minus:return lhs()-rhs();case BinaryOperator.Divide:return lhs()/rhs();case BinaryOperator.Multiply:return lhs()*rhs();case BinaryOperator.Modulo:return lhs()%rhs();case BinaryOperator.Lower:return lhs()<rhs();case BinaryOperator.LowerEquals:return lhs()<=rhs();case BinaryOperator.Bigger:return lhs()>rhs();case BinaryOperator.BiggerEquals:return lhs()>=rhs();default:throw new Error('Unknown operator '+ast.operator);}}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadPropExpr',value:function visitReadPropExpr(ast,ctx){var/** @type {?} */result=void 0;var/** @type {?} */receiver=ast.receiver.visitExpression(this,ctx);result=receiver[ast.name];return result;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadKeyExpr',value:function visitReadKeyExpr(ast,ctx){var/** @type {?} */receiver=ast.receiver.visitExpression(this,ctx);var/** @type {?} */prop=ast.index.visitExpression(this,ctx);return receiver[prop];}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralArrayExpr',value:function visitLiteralArrayExpr(ast,ctx){return this.visitAllExpressions(ast.entries,ctx);}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitLiteralMapExpr',value:function visitLiteralMapExpr(ast,ctx){var _this243=this;var/** @type {?} */result={};ast.entries.forEach(function(entry){return result[entry.key]=entry.value.visitExpression(_this243,ctx);});return result;}/**
     * @param {?} expressions
     * @param {?} ctx
     * @return {?}
     */},{key:'visitAllExpressions',value:function visitAllExpressions(expressions,ctx){var _this244=this;return expressions.map(function(expr){return expr.visitExpression(_this244,ctx);});}/**
     * @param {?} statements
     * @param {?} ctx
     * @return {?}
     */},{key:'visitAllStatements',value:function visitAllStatements(statements,ctx){for(var/** @type {?} */i=0;i<statements.length;i++){var/** @type {?} */stmt=statements[i];var/** @type {?} */val=stmt.visitStatement(this,ctx);if(val instanceof ReturnValue){return val;}}return null;}}]);return StatementInterpreter;}();/**
 * @param {?} varNames
 * @param {?} statements
 * @param {?} ctx
 * @param {?} visitor
 * @return {?}
 */function _declareFn(varNames,statements,ctx,visitor){return function(){for(var _len7=arguments.length,args=Array(_len7),_key7=0;_key7<_len7;_key7++){args[_key7]=arguments[_key7];}return _executeFunctionStatements(varNames,args,statements,ctx,visitor);};}var/** @type {?} */CATCH_ERROR_VAR$2='error';var/** @type {?} */CATCH_STACK_VAR$2='stack';/**
 * @abstract
 */var AbstractJsEmitterVisitor=function(_AbstractEmitterVisit2){_inherits(AbstractJsEmitterVisitor,_AbstractEmitterVisit2);function AbstractJsEmitterVisitor(){_classCallCheck(this,AbstractJsEmitterVisitor);return _possibleConstructorReturn(this,(AbstractJsEmitterVisitor.__proto__||Object.getPrototypeOf(AbstractJsEmitterVisitor)).call(this,false));}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */_createClass(AbstractJsEmitterVisitor,[{key:'visitDeclareClassStmt',value:function visitDeclareClassStmt(stmt,ctx){var _this246=this;ctx.pushClass(stmt);this._visitClassConstructor(stmt,ctx);if(isPresent(stmt.parent)){ctx.print(stmt,stmt.name+'.prototype = Object.create(');stmt.parent.visitExpression(this,ctx);ctx.println(stmt,'.prototype);');}stmt.getters.forEach(function(getter){return _this246._visitClassGetter(stmt,getter,ctx);});stmt.methods.forEach(function(method){return _this246._visitClassMethod(stmt,method,ctx);});ctx.popClass();return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassConstructor',value:function _visitClassConstructor(stmt,ctx){ctx.print(stmt,'function '+stmt.name+'(');if(isPresent(stmt.constructorMethod)){this._visitParams(stmt.constructorMethod.params,ctx);}ctx.println(stmt,') {');ctx.incIndent();if(isPresent(stmt.constructorMethod)){if(stmt.constructorMethod.body.length>0){ctx.println(stmt,'var self = this;');this.visitAllStatements(stmt.constructorMethod.body,ctx);}}ctx.decIndent();ctx.println(stmt,'}');}/**
     * @param {?} stmt
     * @param {?} getter
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassGetter',value:function _visitClassGetter(stmt,getter,ctx){ctx.println(stmt,'Object.defineProperty('+stmt.name+'.prototype, \''+getter.name+'\', { get: function() {');ctx.incIndent();if(getter.body.length>0){ctx.println(stmt,'var self = this;');this.visitAllStatements(getter.body,ctx);}ctx.decIndent();ctx.println(stmt,'}});');}/**
     * @param {?} stmt
     * @param {?} method
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitClassMethod',value:function _visitClassMethod(stmt,method,ctx){ctx.print(stmt,stmt.name+'.prototype.'+method.name+' = function(');this._visitParams(method.params,ctx);ctx.println(stmt,') {');ctx.incIndent();if(method.body.length>0){ctx.println(stmt,'var self = this;');this.visitAllStatements(method.body,ctx);}ctx.decIndent();ctx.println(stmt,'};');}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitReadVarExpr',value:function visitReadVarExpr(ast,ctx){if(ast.builtin===BuiltinVar.This){ctx.print(ast,'self');}else if(ast.builtin===BuiltinVar.Super){throw new Error('\'super\' needs to be handled at a parent ast node, not at the variable level!');}else{_get(AbstractJsEmitterVisitor.prototype.__proto__||Object.getPrototypeOf(AbstractJsEmitterVisitor.prototype),'visitReadVarExpr',this).call(this,ast,ctx);}return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareVarStmt',value:function visitDeclareVarStmt(stmt,ctx){ctx.print(stmt,'var '+stmt.name+' = ');stmt.value.visitExpression(this,ctx);ctx.println(stmt,';');return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitCastExpr',value:function visitCastExpr(ast,ctx){ast.value.visitExpression(this,ctx);return null;}/**
     * @param {?} expr
     * @param {?} ctx
     * @return {?}
     */},{key:'visitInvokeFunctionExpr',value:function visitInvokeFunctionExpr(expr,ctx){var/** @type {?} */fnExpr=expr.fn;if(fnExpr instanceof ReadVarExpr&&fnExpr.builtin===BuiltinVar.Super){ctx.currentClass.parent.visitExpression(this,ctx);ctx.print(expr,'.call(this');if(expr.args.length>0){ctx.print(expr,', ');this.visitAllExpressions(expr.args,ctx,',');}ctx.print(expr,')');}else{_get(AbstractJsEmitterVisitor.prototype.__proto__||Object.getPrototypeOf(AbstractJsEmitterVisitor.prototype),'visitInvokeFunctionExpr',this).call(this,expr,ctx);}return null;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitFunctionExpr',value:function visitFunctionExpr(ast,ctx){ctx.print(ast,'function(');this._visitParams(ast.params,ctx);ctx.println(ast,') {');ctx.incIndent();this.visitAllStatements(ast.statements,ctx);ctx.decIndent();ctx.print(ast,'}');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitDeclareFunctionStmt',value:function visitDeclareFunctionStmt(stmt,ctx){ctx.print(stmt,'function '+stmt.name+'(');this._visitParams(stmt.params,ctx);ctx.println(stmt,') {');ctx.incIndent();this.visitAllStatements(stmt.statements,ctx);ctx.decIndent();ctx.println(stmt,'}');return null;}/**
     * @param {?} stmt
     * @param {?} ctx
     * @return {?}
     */},{key:'visitTryCatchStmt',value:function visitTryCatchStmt(stmt,ctx){ctx.println(stmt,'try {');ctx.incIndent();this.visitAllStatements(stmt.bodyStmts,ctx);ctx.decIndent();ctx.println(stmt,'} catch ('+CATCH_ERROR_VAR$1.name+') {');ctx.incIndent();var/** @type {?} */catchStmts=[/** @type {?} */CATCH_STACK_VAR$1.set(CATCH_ERROR_VAR$1.prop('stack')).toDeclStmt(null,[StmtModifier.Final])].concat(stmt.catchStmts);this.visitAllStatements(catchStmts,ctx);ctx.decIndent();ctx.println(stmt,'}');return null;}/**
     * @param {?} params
     * @param {?} ctx
     * @return {?}
     */},{key:'_visitParams',value:function _visitParams(params,ctx){this.visitAllObjects(function(param){return ctx.print(null,param.name);},params,ctx,',');}/**
     * @param {?} method
     * @return {?}
     */},{key:'getBuiltinMethodName',value:function getBuiltinMethodName(method){var/** @type {?} */name=void 0;switch(method){case BuiltinMethod.ConcatArray:name='concat';break;case BuiltinMethod.SubscribeObservable:name='subscribe';break;case BuiltinMethod.Bind:name='bind';break;default:throw new Error('Unknown builtin method: '+method);}return name;}}]);return AbstractJsEmitterVisitor;}(AbstractEmitterVisitor);/**
 * @param {?} sourceUrl
 * @param {?} ctx
 * @param {?} vars
 * @return {?}
 */function evalExpression(sourceUrl,ctx,vars){var/** @type {?} */fnBody=ctx.toSource()+'\n//# sourceURL='+sourceUrl+'\n'+ctx.toSourceMapGenerator().toJsComment();var/** @type {?} */fnArgNames=[];var/** @type {?} */fnArgValues=[];for(var/** @type {?} */argName in vars){fnArgNames.push(argName);fnArgValues.push(vars[argName]);}return new(Function.prototype.bind.apply(Function,[null].concat(_toConsumableArray(fnArgNames.concat(fnBody)))))().apply(undefined,fnArgValues);}/**
 * @param {?} sourceUrl
 * @param {?} statements
 * @param {?} resultVars
 * @return {?}
 */function jitStatements(sourceUrl,statements,resultVars){var/** @type {?} */converter=new JitEmitterVisitor();var/** @type {?} */ctx=EmitterVisitorContext.createRoot(resultVars);var/** @type {?} */returnStmt=new ReturnStatement(literalArr(resultVars.map(function(resultVar){return variable(resultVar);})));converter.visitAllStatements(statements.concat([returnStmt]),ctx);return evalExpression(sourceUrl,ctx,converter.getArgs());}var JitEmitterVisitor=function(_AbstractJsEmitterVis){_inherits(JitEmitterVisitor,_AbstractJsEmitterVis);function JitEmitterVisitor(){_classCallCheck(this,JitEmitterVisitor);var _this247=_possibleConstructorReturn(this,(JitEmitterVisitor.__proto__||Object.getPrototypeOf(JitEmitterVisitor)).apply(this,arguments));_this247._evalArgNames=[];_this247._evalArgValues=[];return _this247;}/**
     * @return {?}
     */_createClass(JitEmitterVisitor,[{key:'getArgs',value:function getArgs(){var/** @type {?} */result={};for(var/** @type {?} */i=0;i<this._evalArgNames.length;i++){result[this._evalArgNames[i]]=this._evalArgValues[i];}return result;}/**
     * @param {?} ast
     * @param {?} ctx
     * @return {?}
     */},{key:'visitExternalExpr',value:function visitExternalExpr(ast,ctx){var/** @type {?} */value=ast.value.reference;var/** @type {?} */id=this._evalArgValues.indexOf(value);if(id===-1){id=this._evalArgValues.length;this._evalArgValues.push(value);var/** @type {?} */name=identifierName(ast.value)||'val';this._evalArgNames.push('jit_'+name+id);}ctx.print(ast,this._evalArgNames[id]);return null;}}]);return JitEmitterVisitor;}(AbstractJsEmitterVisitor);/**
 * An internal module of the Angular compiler that begins with component types,
 * extracts templates, and eventually produces a compiled version of the component
 * ready for linking into an application.
 *
 * \@security When compiling templates at runtime, you must ensure that the entire template comes
 * from a trusted source. Attacker-controlled data introduced by a template could expose your
 * application to XSS risks.  For more detail, see the [Security Guide](http://g.co/ng/security).
 */var JitCompiler=function(){/**
     * @param {?} _injector
     * @param {?} _metadataResolver
     * @param {?} _templateParser
     * @param {?} _styleCompiler
     * @param {?} _viewCompiler
     * @param {?} _ngModuleCompiler
     * @param {?} _directiveWrapperCompiler
     * @param {?} _compilerConfig
     * @param {?} _animationParser
     */function JitCompiler(_injector,_metadataResolver,_templateParser,_styleCompiler,_viewCompiler,_ngModuleCompiler,_directiveWrapperCompiler,_compilerConfig,_animationParser){_classCallCheck(this,JitCompiler);this._injector=_injector;this._metadataResolver=_metadataResolver;this._templateParser=_templateParser;this._styleCompiler=_styleCompiler;this._viewCompiler=_viewCompiler;this._ngModuleCompiler=_ngModuleCompiler;this._directiveWrapperCompiler=_directiveWrapperCompiler;this._compilerConfig=_compilerConfig;this._animationParser=_animationParser;this._compiledTemplateCache=new Map();this._compiledHostTemplateCache=new Map();this._compiledDirectiveWrapperCache=new Map();this._compiledNgModuleCache=new Map();this._animationCompiler=new AnimationCompiler();}/**
     * @return {?}
     */_createClass(JitCompiler,[{key:'compileModuleSync',/**
     * @param {?} moduleType
     * @return {?}
     */value:function compileModuleSync(moduleType){return this._compileModuleAndComponents(moduleType,true).syncResult;}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'compileModuleAsync',value:function compileModuleAsync(moduleType){return this._compileModuleAndComponents(moduleType,false).asyncResult;}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'compileModuleAndAllComponentsSync',value:function compileModuleAndAllComponentsSync(moduleType){return this._compileModuleAndAllComponents(moduleType,true).syncResult;}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'compileModuleAndAllComponentsAsync',value:function compileModuleAndAllComponentsAsync(moduleType){return this._compileModuleAndAllComponents(moduleType,false).asyncResult;}/**
     * @param {?} component
     * @return {?}
     */},{key:'getNgContentSelectors',value:function getNgContentSelectors(component){var/** @type {?} */template=this._compiledTemplateCache.get(component);if(!template){throw new Error('The component '+stringify(component)+' is not yet compiled!');}return template.compMeta.template.ngContentSelectors;}/**
     * @param {?} moduleType
     * @param {?} isSync
     * @return {?}
     */},{key:'_compileModuleAndComponents',value:function _compileModuleAndComponents(moduleType,isSync){var _this248=this;var/** @type {?} */loadingPromise=this._loadModules(moduleType,isSync);var/** @type {?} */createResult=function createResult(){_this248._compileComponents(moduleType,null);return _this248._compileModule(moduleType);};if(isSync){return new SyncAsyncResult(createResult());}else{return new SyncAsyncResult(null,loadingPromise.then(createResult));}}/**
     * @param {?} moduleType
     * @param {?} isSync
     * @return {?}
     */},{key:'_compileModuleAndAllComponents',value:function _compileModuleAndAllComponents(moduleType,isSync){var _this249=this;var/** @type {?} */loadingPromise=this._loadModules(moduleType,isSync);var/** @type {?} */createResult=function createResult(){var/** @type {?} */componentFactories=[];_this249._compileComponents(moduleType,componentFactories);return new ModuleWithComponentFactories(_this249._compileModule(moduleType),componentFactories);};if(isSync){return new SyncAsyncResult(createResult());}else{return new SyncAsyncResult(null,loadingPromise.then(createResult));}}/**
     * @param {?} mainModule
     * @param {?} isSync
     * @return {?}
     */},{key:'_loadModules',value:function _loadModules(mainModule,isSync){var _this250=this;var/** @type {?} */loadingPromises=[];var/** @type {?} */ngModule=this._metadataResolver.getNgModuleMetadata(mainModule);// Note: the loadingPromise for a module only includes the loading of the exported directives
// of imported modules.
// However, for runtime compilation, we want to transitively compile all modules,
// so we also need to call loadNgModuleDirectiveAndPipeMetadata for all nested modules.
ngModule.transitiveModule.modules.forEach(function(localModuleMeta){loadingPromises.push(_this250._metadataResolver.loadNgModuleDirectiveAndPipeMetadata(localModuleMeta.reference,isSync));});return Promise.all(loadingPromises);}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'_compileModule',value:function _compileModule(moduleType){var _this251=this;var/** @type {?} */ngModuleFactory=this._compiledNgModuleCache.get(moduleType);if(!ngModuleFactory){var/** @type {?} */moduleMeta=this._metadataResolver.getNgModuleMetadata(moduleType);// Always provide a bound Compiler
var/** @type {?} */extraProviders=[this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler,{useFactory:function useFactory(){return new ModuleBoundCompiler(_this251,moduleMeta.type.reference);}}))];var/** @type {?} */compileResult=this._ngModuleCompiler.compile(moduleMeta,extraProviders);if(!this._compilerConfig.useJit){ngModuleFactory=interpretStatements(compileResult.statements,[compileResult.ngModuleFactoryVar])[0];}else{ngModuleFactory=jitStatements('/'+identifierName(moduleMeta.type)+'/module.ngfactory.js',compileResult.statements,[compileResult.ngModuleFactoryVar])[0];}this._compiledNgModuleCache.set(moduleMeta.type.reference,ngModuleFactory);}return ngModuleFactory;}/**
     * \@internal
     * @param {?} mainModule
     * @param {?} allComponentFactories
     * @return {?}
     */},{key:'_compileComponents',value:function _compileComponents(mainModule,allComponentFactories){var _this252=this;var/** @type {?} */ngModule=this._metadataResolver.getNgModuleMetadata(mainModule);var/** @type {?} */moduleByDirective=new Map();var/** @type {?} */templates=new Set();ngModule.transitiveModule.modules.forEach(function(localModuleSummary){var/** @type {?} */localModuleMeta=_this252._metadataResolver.getNgModuleMetadata(localModuleSummary.reference);localModuleMeta.declaredDirectives.forEach(function(dirIdentifier){moduleByDirective.set(dirIdentifier.reference,localModuleMeta);var/** @type {?} */dirMeta=_this252._metadataResolver.getDirectiveMetadata(dirIdentifier.reference);_this252._compileDirectiveWrapper(dirMeta,localModuleMeta);if(dirMeta.isComponent){templates.add(_this252._createCompiledTemplate(dirMeta,localModuleMeta));if(allComponentFactories){var/** @type {?} */template=_this252._createCompiledHostTemplate(dirMeta.type.reference,localModuleMeta);templates.add(template);allComponentFactories.push(/** @type {?} */dirMeta.componentFactory);}}});});ngModule.transitiveModule.modules.forEach(function(localModuleSummary){var/** @type {?} */localModuleMeta=_this252._metadataResolver.getNgModuleMetadata(localModuleSummary.reference);localModuleMeta.declaredDirectives.forEach(function(dirIdentifier){var/** @type {?} */dirMeta=_this252._metadataResolver.getDirectiveMetadata(dirIdentifier.reference);if(dirMeta.isComponent){dirMeta.entryComponents.forEach(function(entryComponentType){var/** @type {?} */moduleMeta=moduleByDirective.get(entryComponentType.componentType);templates.add(_this252._createCompiledHostTemplate(entryComponentType.componentType,moduleMeta));});}});localModuleMeta.entryComponents.forEach(function(entryComponentType){var/** @type {?} */moduleMeta=moduleByDirective.get(entryComponentType.componentType);templates.add(_this252._createCompiledHostTemplate(entryComponentType.componentType,moduleMeta));});});templates.forEach(function(template){return _this252._compileTemplate(template);});}/**
     * @param {?} type
     * @return {?}
     */},{key:'clearCacheFor',value:function clearCacheFor(type){this._compiledNgModuleCache.delete(type);this._metadataResolver.clearCacheFor(type);this._compiledHostTemplateCache.delete(type);var/** @type {?} */compiledTemplate=this._compiledTemplateCache.get(type);if(compiledTemplate){this._compiledTemplateCache.delete(type);}}/**
     * @return {?}
     */},{key:'clearCache',value:function clearCache(){this._metadataResolver.clearCache();this._compiledTemplateCache.clear();this._compiledHostTemplateCache.clear();this._compiledNgModuleCache.clear();}/**
     * @param {?} compType
     * @param {?} ngModule
     * @return {?}
     */},{key:'_createCompiledHostTemplate',value:function _createCompiledHostTemplate(compType,ngModule){if(!ngModule){throw new Error('Component '+stringify(compType)+' is not part of any NgModule or the module has not been imported into your module.');}var/** @type {?} */compiledTemplate=this._compiledHostTemplateCache.get(compType);if(!compiledTemplate){var/** @type {?} */compMeta=this._metadataResolver.getDirectiveMetadata(compType);assertComponent(compMeta);var/** @type {?} */componentFactory=compMeta.componentFactory;var/** @type {?} */hostClass=this._metadataResolver.getHostComponentType(compType);var/** @type {?} */hostMeta=createHostComponentMeta(hostClass,compMeta,/** @type {?} */ɵgetComponentFactoryViewClass(componentFactory));compiledTemplate=new CompiledTemplate(true,compMeta.type,hostMeta,ngModule,[compMeta.type]);this._compiledHostTemplateCache.set(compType,compiledTemplate);}return compiledTemplate;}/**
     * @param {?} compMeta
     * @param {?} ngModule
     * @return {?}
     */},{key:'_createCompiledTemplate',value:function _createCompiledTemplate(compMeta,ngModule){var/** @type {?} */compiledTemplate=this._compiledTemplateCache.get(compMeta.type.reference);if(!compiledTemplate){assertComponent(compMeta);compiledTemplate=new CompiledTemplate(false,compMeta.type,compMeta,ngModule,ngModule.transitiveModule.directives);this._compiledTemplateCache.set(compMeta.type.reference,compiledTemplate);}return compiledTemplate;}/**
     * @param {?} dirMeta
     * @param {?} moduleMeta
     * @return {?}
     */},{key:'_compileDirectiveWrapper',value:function _compileDirectiveWrapper(dirMeta,moduleMeta){if(this._compilerConfig.useViewEngine){return;}var/** @type {?} */compileResult=this._directiveWrapperCompiler.compile(dirMeta);var/** @type {?} */statements=compileResult.statements;var/** @type {?} */directiveWrapperClass=void 0;if(!this._compilerConfig.useJit){directiveWrapperClass=interpretStatements(statements,[compileResult.dirWrapperClassVar])[0];}else{directiveWrapperClass=jitStatements('/'+identifierName(moduleMeta.type)+'/'+identifierName(dirMeta.type)+'/wrapper.ngfactory.js',statements,[compileResult.dirWrapperClassVar])[0];}dirMeta.wrapperType.setDelegate(directiveWrapperClass);this._compiledDirectiveWrapperCache.set(dirMeta.type.reference,directiveWrapperClass);}/**
     * @param {?} template
     * @return {?}
     */},{key:'_compileTemplate',value:function _compileTemplate(template){var _this253=this,_stylesCompileResult$;if(template.isCompiled){return;}var/** @type {?} */compMeta=template.compMeta;var/** @type {?} */externalStylesheetsByModuleUrl=new Map();var/** @type {?} */stylesCompileResult=this._styleCompiler.compileComponent(compMeta);stylesCompileResult.externalStylesheets.forEach(function(r){externalStylesheetsByModuleUrl.set(r.meta.moduleUrl,r);});this._resolveStylesCompileResult(stylesCompileResult.componentStylesheet,externalStylesheetsByModuleUrl);var/** @type {?} */parsedAnimations=this._compilerConfig.useViewEngine?[]:this._animationParser.parseComponent(compMeta);var/** @type {?} */directives=template.directives.map(function(dir){return _this253._metadataResolver.getDirectiveSummary(dir.reference);});var/** @type {?} */pipes=template.ngModule.transitiveModule.pipes.map(function(pipe){return _this253._metadataResolver.getPipeSummary(pipe.reference);});var _templateParser$parse2=this._templateParser.parse(compMeta,compMeta.template.template,directives,pipes,template.ngModule.schemas,identifierName(compMeta.type)),parsedTemplate=_templateParser$parse2.template,usedPipes=_templateParser$parse2.pipes;var/** @type {?} */compiledAnimations=this._compilerConfig.useViewEngine?[]:this._animationCompiler.compile(identifierName(compMeta.type),parsedAnimations);var/** @type {?} */compileResult=this._viewCompiler.compileComponent(compMeta,parsedTemplate,variable(stylesCompileResult.componentStylesheet.stylesVar),usedPipes,compiledAnimations);var/** @type {?} */statements=(_stylesCompileResult$=stylesCompileResult.componentStylesheet.statements).concat.apply(_stylesCompileResult$,_toConsumableArray(compiledAnimations.map(function(ca){return ca.statements;}))).concat(compileResult.statements);var/** @type {?} */viewClass=void 0;var/** @type {?} */rendererType=void 0;if(!this._compilerConfig.useJit){var _interpretStatements=interpretStatements(statements,[compileResult.viewClassVar,compileResult.rendererTypeVar]);var _interpretStatements2=_slicedToArray(_interpretStatements,2);viewClass=_interpretStatements2[0];rendererType=_interpretStatements2[1];}else{var/** @type {?} */sourceUrl='/'+identifierName(template.ngModule.type)+'/'+identifierName(template.compType)+'/'+(template.isHost?'host':'component')+'.ngfactory.js';var _jitStatements=jitStatements(sourceUrl,statements,[compileResult.viewClassVar,compileResult.rendererTypeVar]);var _jitStatements2=_slicedToArray(_jitStatements,2);viewClass=_jitStatements2[0];rendererType=_jitStatements2[1];}template.compiled(viewClass,rendererType);}/**
     * @param {?} result
     * @param {?} externalStylesheetsByModuleUrl
     * @return {?}
     */},{key:'_resolveStylesCompileResult',value:function _resolveStylesCompileResult(result,externalStylesheetsByModuleUrl){var _this254=this;result.dependencies.forEach(function(dep,i){var/** @type {?} */nestedCompileResult=externalStylesheetsByModuleUrl.get(dep.moduleUrl);var/** @type {?} */nestedStylesArr=_this254._resolveAndEvalStylesCompileResult(nestedCompileResult,externalStylesheetsByModuleUrl);dep.valuePlaceholder.reference=nestedStylesArr;});}/**
     * @param {?} result
     * @param {?} externalStylesheetsByModuleUrl
     * @return {?}
     */},{key:'_resolveAndEvalStylesCompileResult',value:function _resolveAndEvalStylesCompileResult(result,externalStylesheetsByModuleUrl){this._resolveStylesCompileResult(result,externalStylesheetsByModuleUrl);if(!this._compilerConfig.useJit){return interpretStatements(result.statements,[result.stylesVar])[0];}else{return jitStatements('/'+result.meta.moduleUrl+'.ngstyle.js',result.statements,[result.stylesVar])[0];}}},{key:'injector',get:function get(){return this._injector;}}]);return JitCompiler;}();JitCompiler.decorators=[{type:CompilerInjectable}];/** @nocollapse */JitCompiler.ctorParameters=function(){return[{type:Injector},{type:CompileMetadataResolver},{type:TemplateParser},{type:StyleCompiler},{type:ViewCompiler},{type:NgModuleCompiler},{type:DirectiveWrapperCompiler},{type:CompilerConfig},{type:AnimationParser}];};var CompiledTemplate=function(){/**
     * @param {?} isHost
     * @param {?} compType
     * @param {?} compMeta
     * @param {?} ngModule
     * @param {?} directives
     */function CompiledTemplate(isHost,compType,compMeta,ngModule,directives){_classCallCheck(this,CompiledTemplate);this.isHost=isHost;this.compType=compType;this.compMeta=compMeta;this.ngModule=ngModule;this.directives=directives;this._viewClass=null;this.isCompiled=false;}/**
     * @param {?} viewClass
     * @param {?} rendererType
     * @return {?}
     */_createClass(CompiledTemplate,[{key:'compiled',value:function compiled(viewClass,rendererType){this._viewClass=viewClass;this.compMeta.componentViewType.setDelegate(viewClass);for(var/** @type {?} */prop in rendererType){this.compMeta.rendererType[prop]=rendererType[prop];}this.isCompiled=true;}}]);return CompiledTemplate;}();/**
 * @param {?} meta
 * @return {?}
 */function assertComponent(meta){if(!meta.isComponent){throw new Error('Could not compile \''+identifierName(meta.type)+'\' because it is not a component.');}}/**
 * Implements `Compiler` by delegating to the JitCompiler using a known module.
 */var ModuleBoundCompiler=function(){/**
     * @param {?} _delegate
     * @param {?} _ngModule
     */function ModuleBoundCompiler(_delegate,_ngModule){_classCallCheck(this,ModuleBoundCompiler);this._delegate=_delegate;this._ngModule=_ngModule;}/**
     * @return {?}
     */_createClass(ModuleBoundCompiler,[{key:'compileModuleSync',/**
     * @param {?} moduleType
     * @return {?}
     */value:function compileModuleSync(moduleType){return this._delegate.compileModuleSync(moduleType);}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'compileModuleAsync',value:function compileModuleAsync(moduleType){return this._delegate.compileModuleAsync(moduleType);}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'compileModuleAndAllComponentsSync',value:function compileModuleAndAllComponentsSync(moduleType){return this._delegate.compileModuleAndAllComponentsSync(moduleType);}/**
     * @param {?} moduleType
     * @return {?}
     */},{key:'compileModuleAndAllComponentsAsync',value:function compileModuleAndAllComponentsAsync(moduleType){return this._delegate.compileModuleAndAllComponentsAsync(moduleType);}/**
     * @param {?} component
     * @return {?}
     */},{key:'getNgContentSelectors',value:function getNgContentSelectors(component){return this._delegate.getNgContentSelectors(component);}/**
     * Clears all caches
     * @return {?}
     */},{key:'clearCache',value:function clearCache(){this._delegate.clearCache();}/**
     * Clears the cache for the given component/ngModule.
     * @param {?} type
     * @return {?}
     */},{key:'clearCacheFor',value:function clearCacheFor(type){this._delegate.clearCacheFor(type);}},{key:'_injector',get:function get(){return this._delegate.injector;}}]);return ModuleBoundCompiler;}();/**
 * A container for message extracted from the templates.
 */var MessageBundle=function(){/**
     * @param {?} _htmlParser
     * @param {?} _implicitTags
     * @param {?} _implicitAttrs
     * @param {?=} _locale
     */function MessageBundle(_htmlParser,_implicitTags,_implicitAttrs){var _locale=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;_classCallCheck(this,MessageBundle);this._htmlParser=_htmlParser;this._implicitTags=_implicitTags;this._implicitAttrs=_implicitAttrs;this._locale=_locale;this._messages=[];}/**
     * @param {?} html
     * @param {?} url
     * @param {?} interpolationConfig
     * @return {?}
     */_createClass(MessageBundle,[{key:'updateFromTemplate',value:function updateFromTemplate(html,url,interpolationConfig){var _messages;var/** @type {?} */htmlParserResult=this._htmlParser.parse(html,url,true,interpolationConfig);if(htmlParserResult.errors.length){return htmlParserResult.errors;}var/** @type {?} */i18nParserResult=extractMessages(htmlParserResult.rootNodes,interpolationConfig,this._implicitTags,this._implicitAttrs);if(i18nParserResult.errors.length){return i18nParserResult.errors;}(_messages=this._messages).push.apply(_messages,_toConsumableArray(i18nParserResult.messages));}/**
     * @return {?}
     */},{key:'getMessages',value:function getMessages(){return this._messages;}/**
     * @param {?} serializer
     * @return {?}
     */},{key:'write',value:function write(serializer){var/** @type {?} */messages={};var/** @type {?} */mapperVisitor=new MapPlaceholderNames();// Deduplicate messages based on their ID
this._messages.forEach(function(message){var/** @type {?} */id=serializer.digest(message);if(!messages.hasOwnProperty(id)){messages[id]=message;}});// Transform placeholder names using the serializer mapping
var/** @type {?} */msgList=Object.keys(messages).map(function(id){var/** @type {?} */mapper=serializer.createNameMapper(messages[id]);var/** @type {?} */src=messages[id];var/** @type {?} */nodes=mapper?mapperVisitor.convert(src.nodes,mapper):src.nodes;return new Message(nodes,{},{},src.meaning,src.description,id);});return serializer.write(msgList,this._locale);}}]);return MessageBundle;}();var MapPlaceholderNames=function(_CloneVisitor){_inherits(MapPlaceholderNames,_CloneVisitor);function MapPlaceholderNames(){_classCallCheck(this,MapPlaceholderNames);return _possibleConstructorReturn(this,(MapPlaceholderNames.__proto__||Object.getPrototypeOf(MapPlaceholderNames)).apply(this,arguments));}_createClass(MapPlaceholderNames,[{key:'convert',/**
     * @param {?} nodes
     * @param {?} mapper
     * @return {?}
     */value:function convert(nodes,mapper){var _this256=this;return mapper?nodes.map(function(n){return n.visit(_this256,mapper);}):nodes;}/**
     * @param {?} ph
     * @param {?} mapper
     * @return {?}
     */},{key:'visitTagPlaceholder',value:function visitTagPlaceholder(ph,mapper){var _this257=this;var/** @type {?} */startName=mapper.toPublicName(ph.startName);var/** @type {?} */closeName=ph.closeName?mapper.toPublicName(ph.closeName):ph.closeName;var/** @type {?} */children=ph.children.map(function(n){return n.visit(_this257,mapper);});return new TagPlaceholder(ph.tag,ph.attrs,startName,closeName,children,ph.isVoid,ph.sourceSpan);}/**
     * @param {?} ph
     * @param {?} mapper
     * @return {?}
     */},{key:'visitPlaceholder',value:function visitPlaceholder(ph,mapper){return new Placeholder(ph.value,mapper.toPublicName(ph.name),ph.sourceSpan);}/**
     * @param {?} ph
     * @param {?} mapper
     * @return {?}
     */},{key:'visitIcuPlaceholder',value:function visitIcuPlaceholder(ph,mapper){return new IcuPlaceholder(ph.value,mapper.toPublicName(ph.name),ph.sourceSpan);}}]);return MapPlaceholderNames;}(CloneVisitor);var Extractor=function(){/**
     * @param {?} host
     * @param {?} staticSymbolResolver
     * @param {?} messageBundle
     * @param {?} metadataResolver
     */function Extractor(host,staticSymbolResolver,messageBundle,metadataResolver){_classCallCheck(this,Extractor);this.host=host;this.staticSymbolResolver=staticSymbolResolver;this.messageBundle=messageBundle;this.metadataResolver=metadataResolver;}/**
     * @param {?} rootFiles
     * @return {?}
     */_createClass(Extractor,[{key:'extract',value:function extract(rootFiles){var _this258=this;var/** @type {?} */programSymbols=extractProgramSymbols(this.staticSymbolResolver,rootFiles,this.host);var _analyzeAndValidateNg2=analyzeAndValidateNgModules(programSymbols,this.host,this.metadataResolver),files=_analyzeAndValidateNg2.files,ngModules=_analyzeAndValidateNg2.ngModules;return Promise.all(ngModules.map(function(ngModule){return _this258.metadataResolver.loadNgModuleDirectiveAndPipeMetadata(ngModule.type.reference,false);})).then(function(){var/** @type {?} */errors=[];files.forEach(function(file){var/** @type {?} */compMetas=[];file.directives.forEach(function(directiveType){var/** @type {?} */dirMeta=_this258.metadataResolver.getDirectiveMetadata(directiveType);if(dirMeta&&dirMeta.isComponent){compMetas.push(dirMeta);}});compMetas.forEach(function(compMeta){var/** @type {?} */html=compMeta.template.template;var/** @type {?} */interpolationConfig=InterpolationConfig.fromArray(compMeta.template.interpolation);errors.push.apply(errors,_toConsumableArray(_this258.messageBundle.updateFromTemplate(html,file.srcUrl,interpolationConfig)));});});if(errors.length){throw new Error(errors.map(function(e){return e.toString();}).join('\n'));}return _this258.messageBundle;});}/**
     * @param {?} host
     * @param {?} locale
     * @return {?}
     */}],[{key:'create',value:function create(host,locale){var/** @type {?} */htmlParser=new I18NHtmlParser(new HtmlParser());var/** @type {?} */urlResolver=createOfflineCompileUrlResolver();var/** @type {?} */symbolCache=new StaticSymbolCache();var/** @type {?} */summaryResolver=new AotSummaryResolver(host,symbolCache);var/** @type {?} */staticSymbolResolver=new StaticSymbolResolver(host,symbolCache,summaryResolver);var/** @type {?} */staticReflector=new StaticReflector(staticSymbolResolver);StaticAndDynamicReflectionCapabilities.install(staticReflector);var/** @type {?} */config=new CompilerConfig({genDebugInfo:false,defaultEncapsulation:ViewEncapsulation.Emulated,logBindingUpdate:false,useJit:false});var/** @type {?} */normalizer=new DirectiveNormalizer({get:function get(url){return host.loadResource(url);}},urlResolver,htmlParser,config);var/** @type {?} */elementSchemaRegistry=new DomElementSchemaRegistry();var/** @type {?} */resolver=new CompileMetadataResolver(config,new NgModuleResolver(staticReflector),new DirectiveResolver(staticReflector),new PipeResolver(staticReflector),summaryResolver,elementSchemaRegistry,normalizer,symbolCache,staticReflector);// TODO(vicb): implicit tags & attributes
var/** @type {?} */messageBundle=new MessageBundle(htmlParser,[],{},locale);var/** @type {?} */extractor=new Extractor(host,staticSymbolResolver,messageBundle,resolver);return{extractor:extractor,staticReflector:staticReflector};}}]);return Extractor;}();var/** @type {?} */_NO_RESOURCE_LOADER={/**
     * @param {?} url
     * @return {?}
     */get:function get(url){throw new Error('No ResourceLoader implementation has been provided. Can\'t read the url "'+url+'"');}};var/** @type {?} */baseHtmlParser=new InjectionToken('HtmlParser');/**
 * @param {?} cc
 * @param {?} sr
 * @return {?}
 */function viewCompilerFactory(cc,sr){return cc.useViewEngine?new ViewCompilerNext(cc,sr):new ViewCompiler(cc,sr);}/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 */var/** @type {?} */COMPILER_PROVIDERS=[{provide:ɵReflector,useValue:ɵreflector},{provide:ɵReflectorReader,useExisting:ɵReflector},{provide:ResourceLoader,useValue:_NO_RESOURCE_LOADER},SummaryResolver,ɵConsole,Lexer,Parser,{provide:baseHtmlParser,useClass:HtmlParser},{provide:I18NHtmlParser,useFactory:function useFactory(parser,translations,format,config,console){return new I18NHtmlParser(parser,translations,format,config.missingTranslation,console);},deps:[baseHtmlParser,[new Optional(),new Inject(TRANSLATIONS)],[new Optional(),new Inject(TRANSLATIONS_FORMAT)],[CompilerConfig],[ɵConsole]]},{provide:HtmlParser,useExisting:I18NHtmlParser},TemplateParser,DirectiveNormalizer,CompileMetadataResolver,DEFAULT_PACKAGE_URL_PROVIDER,StyleCompiler,{provide:USE_VIEW_ENGINE,useValue:false},{provide:ViewCompiler,useFactory:viewCompilerFactory,deps:[CompilerConfig,ElementSchemaRegistry]},NgModuleCompiler,DirectiveWrapperCompiler,{provide:CompilerConfig,useValue:new CompilerConfig()},JitCompiler,{provide:Compiler,useExisting:JitCompiler},DomElementSchemaRegistry,{provide:ElementSchemaRegistry,useExisting:DomElementSchemaRegistry},UrlResolver,DirectiveResolver,PipeResolver,NgModuleResolver,AnimationParser];var JitCompilerFactory=function(){/**
     * @param {?} defaultOptions
     */function JitCompilerFactory(defaultOptions){_classCallCheck(this,JitCompilerFactory);var compilerOptions={useDebug:isDevMode(),useJit:true,defaultEncapsulation:ViewEncapsulation.Emulated,missingTranslation:MissingTranslationStrategy.Warning,enableLegacyTemplate:true};this._defaultOptions=[compilerOptions].concat(_toConsumableArray(defaultOptions));}/**
     * @param {?=} options
     * @return {?}
     */_createClass(JitCompilerFactory,[{key:'createCompiler',value:function createCompiler(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var/** @type {?} */opts=_mergeOptions(this._defaultOptions.concat(options));var/** @type {?} */injector=ReflectiveInjector.resolveAndCreate([COMPILER_PROVIDERS,{provide:CompilerConfig,useFactory:function useFactory(useViewEngine){return new CompilerConfig({// let explicit values from the compiler options overwrite options
// from the app providers. E.g. important for the testing platform.
genDebugInfo:opts.useDebug,// let explicit values from the compiler options overwrite options
// from the app providers
useJit:opts.useJit,// let explicit values from the compiler options overwrite options
// from the app providers
defaultEncapsulation:opts.defaultEncapsulation,logBindingUpdate:opts.useDebug,missingTranslation:opts.missingTranslation,useViewEngine:useViewEngine,enableLegacyTemplate:opts.enableLegacyTemplate});},deps:[USE_VIEW_ENGINE]},opts.providers]);return injector.get(Compiler);}}]);return JitCompilerFactory;}();JitCompilerFactory.decorators=[{type:CompilerInjectable}];/** @nocollapse */JitCompilerFactory.ctorParameters=function(){return[{type:Array,decorators:[{type:Inject,args:[COMPILER_OPTIONS]}]}];};/**
 * @return {?}
 */function _initReflector(){ɵreflector.reflectionCapabilities=new ɵReflectionCapabilities();}/**
 * A platform that included corePlatform and the compiler.
 *
 * @experimental
 */var/** @type {?} */platformCoreDynamic=createPlatformFactory(platformCore,'coreDynamic',[{provide:COMPILER_OPTIONS,useValue:{},multi:true},{provide:CompilerFactory,useClass:JitCompilerFactory},{provide:PLATFORM_INITIALIZER,useValue:_initReflector,multi:true}]);/**
 * @param {?} optionsArr
 * @return {?}
 */function _mergeOptions(optionsArr){return{useDebug:_lastDefined(optionsArr.map(function(options){return options.useDebug;})),useJit:_lastDefined(optionsArr.map(function(options){return options.useJit;})),defaultEncapsulation:_lastDefined(optionsArr.map(function(options){return options.defaultEncapsulation;})),providers:_mergeArrays(optionsArr.map(function(options){return options.providers;})),missingTranslation:_lastDefined(optionsArr.map(function(options){return options.missingTranslation;}))};}/**
 * @param {?} args
 * @return {?}
 */function _lastDefined(args){for(var/** @type {?} */i=args.length-1;i>=0;i--){if(args[i]!==undefined){return args[i];}}return undefined;}/**
 * @param {?} parts
 * @return {?}
 */function _mergeArrays(parts){var/** @type {?} */result=[];parts.forEach(function(part){return part&&result.push.apply(result,_toConsumableArray(part));});return result;}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * Interface that defines how import statements should be generated.
 * @abstract
 */var ImportResolver=function(){function ImportResolver(){_classCallCheck(this,ImportResolver);}_createClass(ImportResolver,[{key:'fileNameToModuleName',/**
     * Converts a file path to a module name that can be used as an `import.
     * I.e. `path/to/importedFile.ts` should be imported by `path/to/containingFile.ts`.
     * @abstract
     * @param {?} importedFilePath
     * @param {?} containingFilePath
     * @return {?}
     */value:function fileNameToModuleName(importedFilePath,containingFilePath){}/**
     * Converts the given StaticSymbol into another StaticSymbol that should be used
     * to generate the import from.
     * @abstract
     * @param {?} symbol
     * @return {?}
     */},{key:'getImportAs',value:function getImportAs(symbol){}/**
     * Determine the airty of a type.
     * @abstract
     * @param {?} symbol
     * @return {?}
     */},{key:'getTypeArity',value:function getTypeArity(symbol){}}]);return ImportResolver;}();export{VERSION,TEMPLATE_TRANSFORMS,CompilerConfig,RenderTypes,JitCompiler,DirectiveResolver,PipeResolver,NgModuleResolver,DEFAULT_INTERPOLATION_CONFIG,InterpolationConfig,NgModuleCompiler,DirectiveWrapperCompiler,ViewCompiler,AnimationParser,isSyntaxError,syntaxError,TextAst,BoundTextAst,AttrAst,BoundElementPropertyAst,BoundEventAst,ReferenceAst,VariableAst,ElementAst,EmbeddedTemplateAst,BoundDirectivePropertyAst,DirectiveAst,ProviderAst,ProviderAstType,NgContentAst,PropertyBindingType,templateVisitAll,CompileAnimationEntryMetadata,CompileAnimationStateMetadata,CompileAnimationStateDeclarationMetadata,CompileAnimationStateTransitionMetadata,CompileAnimationMetadata,CompileAnimationKeyframesSequenceMetadata,CompileAnimationStyleMetadata,CompileAnimationAnimateMetadata,CompileAnimationWithStepsMetadata,CompileAnimationSequenceMetadata,CompileAnimationGroupMetadata,identifierName,identifierModuleUrl,viewClassName,rendererTypeName,hostViewClassName,dirWrapperClassName,componentFactoryName,CompileSummaryKind,tokenName,tokenReference,CompileStylesheetMetadata,CompileTemplateMetadata,CompileDirectiveMetadata,createHostComponentMeta,CompilePipeMetadata,CompileNgModuleMetadata,TransitiveCompileNgModuleMetadata,ProviderMeta,createAotCompiler,AotCompiler,analyzeNgModules,analyzeAndValidateNgModules,extractProgramSymbols,StaticReflector,StaticAndDynamicReflectionCapabilities,StaticSymbol,StaticSymbolCache,ResolvedStaticSymbol,StaticSymbolResolver,unescapeIdentifier,AotSummaryResolver,SummaryResolver,COMPILER_PROVIDERS,JitCompilerFactory,platformCoreDynamic,createUrlResolverWithoutPackagePrefix,createOfflineCompileUrlResolver,DEFAULT_PACKAGE_URL_PROVIDER,UrlResolver,getUrlScheme,ResourceLoader,ElementSchemaRegistry,Extractor,I18NHtmlParser,MessageBundle,Serializer,Xliff,Xmb,Xtb,DirectiveNormalizer,ParserError,ParseSpan,AST,Quote,EmptyExpr,ImplicitReceiver,Chain,Conditional,PropertyRead,PropertyWrite,SafePropertyRead,KeyedRead,KeyedWrite,BindingPipe,LiteralPrimitive,LiteralArray,LiteralMap,Interpolation,Binary,PrefixNot,MethodCall,SafeMethodCall,FunctionCall,ASTWithSource,TemplateBinding,RecursiveAstVisitor,AstTransformer,TokenType,Lexer,Token,EOF,isIdentifier,isQuote,SplitInterpolation,TemplateBindingParseResult,Parser,_ParseAST,ERROR_COLLECTOR_TOKEN,CompileMetadataResolver,componentModuleUrl,Text,Expansion,ExpansionCase,Attribute$1 as Attribute,Element,Comment,visitAll,ParseTreeResult,TreeError,HtmlParser,HtmlTagDefinition,getHtmlTagDefinition,TagContentType,splitNsName,getNsPrefix,mergeNsAndName,NAMED_ENTITIES,ImportResolver,debugOutputAstAsTypeScript,TypeScriptEmitter,ParseLocation,ParseSourceFile,ParseSourceSpan,ParseErrorLevel,ParseError,DomElementSchemaRegistry,CssSelector,SelectorMatcher,SelectorListContext,SelectorContext,StylesCompileDependency,StylesCompileResult,CompiledStylesheet,StyleCompiler,TemplateParseError,TemplateParseResult,TemplateParser,splitClasses,createElementCssSelector,removeSummaryDuplicates};
