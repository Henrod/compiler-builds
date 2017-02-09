/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { dirWrapperClassName, identifierModuleUrl, identifierName } from './compile_metadata';
import { createCheckBindingField, isFirstViewCheck } from './compiler_util/binding_util';
import { EventHandlerVars, convertActionBinding, convertPropertyBinding } from './compiler_util/expression_converter';
import { createCheckAnimationBindingStmts, createCheckRenderBindingStmt } from './compiler_util/render_util';
import { CompilerConfig } from './config';
import { Parser } from './expression_parser/parser';
import { Identifiers, createIdentifier } from './identifiers';
import { CompilerInjectable } from './injectable';
import { DEFAULT_INTERPOLATION_CONFIG } from './ml_parser/interpolation_config';
import { createClassStmt } from './output/class_builder';
import * as o from './output/output_ast';
import { ParseErrorLevel, ParseLocation, ParseSourceFile, ParseSourceSpan } from './parse_util';
import { Console, LifecycleHooks } from './private_import_core';
import { ElementSchemaRegistry } from './schema/element_schema_registry';
import { BindingParser } from './template_parser/binding_parser';
export class DirectiveWrapperCompileResult {
    /**
     * @param {?} statements
     * @param {?} dirWrapperClassVar
     */
    constructor(statements, dirWrapperClassVar) {
        this.statements = statements;
        this.dirWrapperClassVar = dirWrapperClassVar;
    }
}
function DirectiveWrapperCompileResult_tsickle_Closure_declarations() {
    /** @type {?} */
    DirectiveWrapperCompileResult.prototype.statements;
    /** @type {?} */
    DirectiveWrapperCompileResult.prototype.dirWrapperClassVar;
}
const /** @type {?} */ CONTEXT_FIELD_NAME = 'context';
const /** @type {?} */ CHANGES_FIELD_NAME = '_changes';
const /** @type {?} */ CHANGED_FIELD_NAME = '_changed';
const /** @type {?} */ EVENT_HANDLER_FIELD_NAME = '_eventHandler';
const /** @type {?} */ CHANGE_VAR = o.variable('change');
const /** @type {?} */ CURR_VALUE_VAR = o.variable('currValue');
const /** @type {?} */ FORCE_UPDATE_VAR = o.variable('forceUpdate');
const /** @type {?} */ VIEW_VAR = o.variable('view');
const /** @type {?} */ COMPONENT_VIEW_VAR = o.variable('componentView');
const /** @type {?} */ RENDER_EL_VAR = o.variable('el');
const /** @type {?} */ EVENT_NAME_VAR = o.variable('eventName');
const /** @type {?} */ RESET_CHANGES_STMT = o.THIS_EXPR.prop(CHANGES_FIELD_NAME).set(o.literalMap([])).toStmt();
/**
 * We generate directive wrappers to prevent code bloat when a directive is used.
 * A directive wrapper encapsulates
 * the dirty checking for `\@Input`, the handling of `\@HostListener` / `\@HostBinding`
 * and calling the lifecyclehooks `ngOnInit`, `ngOnChanges`, `ngDoCheck`.
 *
 * So far, only `\@Input` and the lifecycle hooks have been implemented.
 */
let DirectiveWrapperCompiler = class DirectiveWrapperCompiler {
    /**
     * @param {?} compilerConfig
     * @param {?} _exprParser
     * @param {?} _schemaRegistry
     * @param {?} _console
     */
    constructor(compilerConfig, _exprParser, _schemaRegistry, _console) {
        this.compilerConfig = compilerConfig;
        this._exprParser = _exprParser;
        this._schemaRegistry = _schemaRegistry;
        this._console = _console;
    }
    /**
     * @param {?} dirMeta
     * @return {?}
     */
    compile(dirMeta) {
        const /** @type {?} */ hostParseResult = parseHostBindings(dirMeta, this._exprParser, this._schemaRegistry);
        reportParseErrors(hostParseResult.errors, this._console);
        const /** @type {?} */ builder = new DirectiveWrapperBuilder(this.compilerConfig, dirMeta);
        Object.keys(dirMeta.inputs).forEach((inputFieldName) => {
            addCheckInputMethod(inputFieldName, builder);
        });
        addNgDoCheckMethod(builder);
        addCheckHostMethod(hostParseResult.hostProps, hostParseResult.hostListeners, builder);
        addHandleEventMethod(hostParseResult.hostListeners, builder);
        addSubscribeMethod(dirMeta, builder);
        const /** @type {?} */ classStmt = builder.build();
        return new DirectiveWrapperCompileResult([classStmt], classStmt.name);
    }
};
DirectiveWrapperCompiler = __decorate([
    CompilerInjectable(),
    __metadata("design:paramtypes", [CompilerConfig,
        Parser,
        ElementSchemaRegistry, typeof (_a = typeof Console !== "undefined" && Console) === "function" && _a || Object])
], DirectiveWrapperCompiler);
export { DirectiveWrapperCompiler };
function DirectiveWrapperCompiler_tsickle_Closure_declarations() {
    /** @type {?} */
    DirectiveWrapperCompiler.prototype.compilerConfig;
    /** @type {?} */
    DirectiveWrapperCompiler.prototype._exprParser;
    /** @type {?} */
    DirectiveWrapperCompiler.prototype._schemaRegistry;
    /** @type {?} */
    DirectiveWrapperCompiler.prototype._console;
}
class DirectiveWrapperBuilder {
    /**
     * @param {?} compilerConfig
     * @param {?} dirMeta
     */
    constructor(compilerConfig, dirMeta) {
        this.compilerConfig = compilerConfig;
        this.dirMeta = dirMeta;
        this.fields = [];
        this.getters = [];
        this.methods = [];
        this.ctorStmts = [];
        this.detachStmts = [];
        this.destroyStmts = [];
        const dirLifecycleHooks = dirMeta.type.lifecycleHooks;
        this.genChanges = dirLifecycleHooks.indexOf(LifecycleHooks.OnChanges) !== -1 ||
            this.compilerConfig.logBindingUpdate;
        this.ngOnChanges = dirLifecycleHooks.indexOf(LifecycleHooks.OnChanges) !== -1;
        this.ngOnInit = dirLifecycleHooks.indexOf(LifecycleHooks.OnInit) !== -1;
        this.ngDoCheck = dirLifecycleHooks.indexOf(LifecycleHooks.DoCheck) !== -1;
        this.ngOnDestroy = dirLifecycleHooks.indexOf(LifecycleHooks.OnDestroy) !== -1;
        if (this.ngOnDestroy) {
            this.destroyStmts.push(o.THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngOnDestroy', []).toStmt());
        }
    }
    /**
     * @return {?}
     */
    build() {
        const /** @type {?} */ dirDepParamNames = [];
        for (let /** @type {?} */ i = 0; i < this.dirMeta.type.diDeps.length; i++) {
            dirDepParamNames.push(`p${i}`);
        }
        const /** @type {?} */ methods = [
            new o.ClassMethod('ngOnDetach', [
                new o.FnParam(VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
                new o.FnParam(COMPONENT_VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
                new o.FnParam(RENDER_EL_VAR.name, o.DYNAMIC_TYPE),
            ], this.detachStmts),
            new o.ClassMethod('ngOnDestroy', [], this.destroyStmts),
        ];
        const /** @type {?} */ fields = [
            new o.ClassField(EVENT_HANDLER_FIELD_NAME, o.FUNCTION_TYPE, [o.StmtModifier.Private]),
            new o.ClassField(CONTEXT_FIELD_NAME, o.importType(this.dirMeta.type)),
            new o.ClassField(CHANGED_FIELD_NAME, o.BOOL_TYPE, [o.StmtModifier.Private]),
        ];
        const /** @type {?} */ ctorStmts = [
            o.THIS_EXPR.prop(CHANGED_FIELD_NAME).set(o.literal(false)).toStmt(),
        ];
        if (this.genChanges) {
            fields.push(new o.ClassField(CHANGES_FIELD_NAME, new o.MapType(o.DYNAMIC_TYPE), [o.StmtModifier.Private]));
            ctorStmts.push(RESET_CHANGES_STMT);
        }
        ctorStmts.push(o.THIS_EXPR.prop(CONTEXT_FIELD_NAME)
            .set(o.importExpr(this.dirMeta.type)
            .instantiate(dirDepParamNames.map((paramName) => o.variable(paramName))))
            .toStmt());
        return createClassStmt({
            name: dirWrapperClassName(this.dirMeta.type.reference),
            ctorParams: dirDepParamNames.map((paramName) => new o.FnParam(paramName, o.DYNAMIC_TYPE)),
            builders: [{ fields, ctorStmts, methods }, this]
        });
    }
}
function DirectiveWrapperBuilder_tsickle_Closure_declarations() {
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.fields;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.getters;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.methods;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.ctorStmts;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.detachStmts;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.destroyStmts;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.genChanges;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.ngOnChanges;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.ngOnInit;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.ngDoCheck;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.ngOnDestroy;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.compilerConfig;
    /** @type {?} */
    DirectiveWrapperBuilder.prototype.dirMeta;
}
/**
 * @param {?} builder
 * @return {?}
 */
function addNgDoCheckMethod(builder) {
    const /** @type {?} */ changedVar = o.variable('changed');
    const /** @type {?} */ stmts = [
        changedVar.set(o.THIS_EXPR.prop(CHANGED_FIELD_NAME)).toDeclStmt(),
        o.THIS_EXPR.prop(CHANGED_FIELD_NAME).set(o.literal(false)).toStmt(),
    ];
    const /** @type {?} */ lifecycleStmts = [];
    if (builder.genChanges) {
        const /** @type {?} */ onChangesStmts = [];
        if (builder.ngOnChanges) {
            onChangesStmts.push(o.THIS_EXPR.prop(CONTEXT_FIELD_NAME)
                .callMethod('ngOnChanges', [o.THIS_EXPR.prop(CHANGES_FIELD_NAME)])
                .toStmt());
        }
        if (builder.compilerConfig.logBindingUpdate) {
            onChangesStmts.push(o.importExpr(createIdentifier(Identifiers.setBindingDebugInfoForChanges))
                .callFn([VIEW_VAR.prop('renderer'), RENDER_EL_VAR, o.THIS_EXPR.prop(CHANGES_FIELD_NAME)])
                .toStmt());
        }
        onChangesStmts.push(RESET_CHANGES_STMT);
        lifecycleStmts.push(new o.IfStmt(changedVar, onChangesStmts));
    }
    if (builder.ngOnInit) {
        lifecycleStmts.push(new o.IfStmt(isFirstViewCheck(VIEW_VAR), [o.THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngOnInit', []).toStmt()]));
    }
    if (builder.ngDoCheck) {
        lifecycleStmts.push(o.THIS_EXPR.prop(CONTEXT_FIELD_NAME).callMethod('ngDoCheck', []).toStmt());
    }
    if (lifecycleStmts.length > 0) {
        stmts.push(new o.IfStmt(o.not(VIEW_VAR.prop('throwOnChange')), lifecycleStmts));
    }
    stmts.push(new o.ReturnStatement(changedVar));
    builder.methods.push(new o.ClassMethod('ngDoCheck', [
        new o.FnParam(VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
        new o.FnParam(RENDER_EL_VAR.name, o.DYNAMIC_TYPE),
    ], stmts, o.BOOL_TYPE));
}
/**
 * @param {?} input
 * @param {?} builder
 * @return {?}
 */
function addCheckInputMethod(input, builder) {
    const /** @type {?} */ field = createCheckBindingField(builder);
    const /** @type {?} */ onChangeStatements = [
        o.THIS_EXPR.prop(CHANGED_FIELD_NAME).set(o.literal(true)).toStmt(),
        o.THIS_EXPR.prop(CONTEXT_FIELD_NAME).prop(input).set(CURR_VALUE_VAR).toStmt(),
        field.expression.set(CURR_VALUE_VAR).toStmt()
    ];
    let /** @type {?} */ methodBody;
    if (builder.genChanges) {
        onChangeStatements.push(o.THIS_EXPR.prop(CHANGES_FIELD_NAME).key(o.literal(input)).set(CHANGE_VAR).toStmt());
        methodBody = [
            CHANGE_VAR
                .set(o.importExpr(createIdentifier(Identifiers.checkBindingChange)).callFn([
                VIEW_VAR, field.expression, CURR_VALUE_VAR, FORCE_UPDATE_VAR
            ]))
                .toDeclStmt(),
            new o.IfStmt(CHANGE_VAR, onChangeStatements)
        ];
    }
    else {
        methodBody = [new o.IfStmt(o.importExpr(createIdentifier(Identifiers.checkBinding)).callFn([
                VIEW_VAR, field.expression, CURR_VALUE_VAR, FORCE_UPDATE_VAR
            ]), onChangeStatements)];
    }
    builder.methods.push(new o.ClassMethod(`check_${input}`, [
        new o.FnParam(VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
        new o.FnParam(CURR_VALUE_VAR.name, o.DYNAMIC_TYPE),
        new o.FnParam(FORCE_UPDATE_VAR.name, o.BOOL_TYPE)
    ], methodBody));
}
/**
 * @param {?} hostProps
 * @param {?} hostEvents
 * @param {?} builder
 * @return {?}
 */
function addCheckHostMethod(hostProps, hostEvents, builder) {
    const /** @type {?} */ stmts = [];
    const /** @type {?} */ methodParams = [
        new o.FnParam(VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
        new o.FnParam(COMPONENT_VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
        new o.FnParam(RENDER_EL_VAR.name, o.DYNAMIC_TYPE),
    ];
    hostProps.forEach((hostProp, hostPropIdx) => {
        const /** @type {?} */ field = createCheckBindingField(builder);
        const /** @type {?} */ evalResult = convertPropertyBinding(builder, null, o.THIS_EXPR.prop(CONTEXT_FIELD_NAME), hostProp.value, field.bindingId);
        if (!evalResult) {
            return;
        }
        let /** @type {?} */ securityContextExpr;
        if (hostProp.needsRuntimeSecurityContext) {
            securityContextExpr = o.variable(`secCtx_${methodParams.length}`);
            methodParams.push(new o.FnParam(securityContextExpr.name, o.importType(createIdentifier(Identifiers.SecurityContext))));
        }
        if (hostProp.isAnimation) {
            const { checkUpdateStmts, checkDetachStmts } = createCheckAnimationBindingStmts(VIEW_VAR, COMPONENT_VIEW_VAR, hostProp, hostEvents, o.THIS_EXPR.prop(EVENT_HANDLER_FIELD_NAME)
                .or(o.importExpr(createIdentifier(Identifiers.noop))), RENDER_EL_VAR, field.expression, evalResult);
            builder.detachStmts.push(...checkDetachStmts);
            stmts.push(...checkUpdateStmts);
        }
        else {
            stmts.push(...createCheckRenderBindingStmt(VIEW_VAR, RENDER_EL_VAR, hostProp, field.expression, evalResult, securityContextExpr));
        }
    });
    builder.methods.push(new o.ClassMethod('checkHost', methodParams, stmts));
}
/**
 * @param {?} hostListeners
 * @param {?} builder
 * @return {?}
 */
function addHandleEventMethod(hostListeners, builder) {
    const /** @type {?} */ resultVar = o.variable(`result`);
    const /** @type {?} */ actionStmts = [resultVar.set(o.literal(true)).toDeclStmt(o.BOOL_TYPE)];
    hostListeners.forEach((hostListener, eventIdx) => {
        const /** @type {?} */ evalResult = convertActionBinding(builder, null, o.THIS_EXPR.prop(CONTEXT_FIELD_NAME), hostListener.handler, `sub_${eventIdx}`);
        const /** @type {?} */ trueStmts = evalResult.stmts;
        if (evalResult.preventDefault) {
            trueStmts.push(resultVar.set(evalResult.preventDefault.and(resultVar)).toStmt());
        }
        // TODO(tbosch): convert this into a `switch` once our OutputAst supports it.
        actionStmts.push(new o.IfStmt(EVENT_NAME_VAR.equals(o.literal(hostListener.fullName)), trueStmts));
    });
    actionStmts.push(new o.ReturnStatement(resultVar));
    builder.methods.push(new o.ClassMethod('handleEvent', [
        new o.FnParam(EVENT_NAME_VAR.name, o.STRING_TYPE),
        new o.FnParam(EventHandlerVars.event.name, o.DYNAMIC_TYPE)
    ], actionStmts, o.BOOL_TYPE));
}
/**
 * @param {?} dirMeta
 * @param {?} builder
 * @return {?}
 */
function addSubscribeMethod(dirMeta, builder) {
    const /** @type {?} */ methodParams = [
        new o.FnParam(VIEW_VAR.name, o.importType(createIdentifier(Identifiers.AppView), [o.DYNAMIC_TYPE])),
        new o.FnParam(EVENT_HANDLER_FIELD_NAME, o.DYNAMIC_TYPE)
    ];
    const /** @type {?} */ stmts = [
        o.THIS_EXPR.prop(EVENT_HANDLER_FIELD_NAME).set(o.variable(EVENT_HANDLER_FIELD_NAME)).toStmt()
    ];
    Object.keys(dirMeta.outputs).forEach((emitterPropName, emitterIdx) => {
        const /** @type {?} */ eventName = dirMeta.outputs[emitterPropName];
        const /** @type {?} */ paramName = `emit${emitterIdx}`;
        methodParams.push(new o.FnParam(paramName, o.BOOL_TYPE));
        const /** @type {?} */ subscriptionFieldName = `subscription${emitterIdx}`;
        builder.fields.push(new o.ClassField(subscriptionFieldName, o.DYNAMIC_TYPE));
        stmts.push(new o.IfStmt(o.variable(paramName), [
            o.THIS_EXPR.prop(subscriptionFieldName)
                .set(o.THIS_EXPR.prop(CONTEXT_FIELD_NAME)
                .prop(emitterPropName)
                .callMethod(o.BuiltinMethod.SubscribeObservable, [o.variable(EVENT_HANDLER_FIELD_NAME)
                    .callMethod(o.BuiltinMethod.Bind, [VIEW_VAR, o.literal(eventName)])]))
                .toStmt()
        ]));
        builder.destroyStmts.push(o.THIS_EXPR.prop(subscriptionFieldName)
            .and(o.THIS_EXPR.prop(subscriptionFieldName).callMethod('unsubscribe', []))
            .toStmt());
    });
    builder.methods.push(new o.ClassMethod('subscribe', methodParams, stmts));
}
class ParseResult {
    /**
     * @param {?} hostProps
     * @param {?} hostListeners
     * @param {?} errors
     */
    constructor(hostProps, hostListeners, errors) {
        this.hostProps = hostProps;
        this.hostListeners = hostListeners;
        this.errors = errors;
    }
}
function ParseResult_tsickle_Closure_declarations() {
    /** @type {?} */
    ParseResult.prototype.hostProps;
    /** @type {?} */
    ParseResult.prototype.hostListeners;
    /** @type {?} */
    ParseResult.prototype.errors;
}
/**
 * @param {?} dirMeta
 * @param {?} exprParser
 * @param {?} schemaRegistry
 * @return {?}
 */
function parseHostBindings(dirMeta, exprParser, schemaRegistry) {
    const /** @type {?} */ errors = [];
    const /** @type {?} */ parser = new BindingParser(exprParser, DEFAULT_INTERPOLATION_CONFIG, schemaRegistry, [], errors);
    const /** @type {?} */ moduleUrl = identifierModuleUrl(dirMeta.type);
    const /** @type {?} */ sourceFileName = moduleUrl ?
        `in Directive ${identifierName(dirMeta.type)} in ${moduleUrl}` :
        `in Directive ${identifierName(dirMeta.type)}`;
    const /** @type {?} */ sourceFile = new ParseSourceFile('', sourceFileName);
    const /** @type {?} */ sourceSpan = new ParseSourceSpan(new ParseLocation(sourceFile, null, null, null), new ParseLocation(sourceFile, null, null, null));
    const /** @type {?} */ parsedHostProps = parser.createDirectiveHostPropertyAsts(dirMeta.toSummary(), sourceSpan);
    const /** @type {?} */ parsedHostListeners = parser.createDirectiveHostEventAsts(dirMeta.toSummary(), sourceSpan);
    return new ParseResult(parsedHostProps, parsedHostListeners, errors);
}
/**
 * @param {?} parseErrors
 * @param {?} console
 * @return {?}
 */
function reportParseErrors(parseErrors, console) {
    const /** @type {?} */ warnings = parseErrors.filter(error => error.level === ParseErrorLevel.WARNING);
    const /** @type {?} */ errors = parseErrors.filter(error => error.level === ParseErrorLevel.FATAL);
    if (warnings.length > 0) {
        this._console.warn(`Directive parse warnings:\n${warnings.join('\n')}`);
    }
    if (errors.length > 0) {
        throw new Error(`Directive parse errors:\n${errors.join('\n')}`);
    }
}
export class DirectiveWrapperExpressions {
    /**
     * @param {?} dir
     * @param {?} depsExpr
     * @return {?}
     */
    static create(dir, depsExpr) {
        return o.importExpr(dir).instantiate(depsExpr, o.importType(dir));
    }
    /**
     * @param {?} dirWrapper
     * @return {?}
     */
    static context(dirWrapper) {
        return dirWrapper.prop(CONTEXT_FIELD_NAME);
    }
    /**
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} renderElement
     * @return {?}
     */
    static ngDoCheck(dirWrapper, view, renderElement) {
        return dirWrapper.callMethod('ngDoCheck', [view, renderElement]);
    }
    /**
     * @param {?} hostProps
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} componentView
     * @param {?} renderElement
     * @param {?} runtimeSecurityContexts
     * @return {?}
     */
    static checkHost(hostProps, dirWrapper, view, componentView, renderElement, runtimeSecurityContexts) {
        if (hostProps.length) {
            return [dirWrapper
                    .callMethod('checkHost', [view, componentView, renderElement].concat(runtimeSecurityContexts))
                    .toStmt()];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} hostProps
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} componentView
     * @param {?} renderEl
     * @return {?}
     */
    static ngOnDetach(hostProps, dirWrapper, view, componentView, renderEl) {
        if (hostProps.some(prop => prop.isAnimation)) {
            return [dirWrapper
                    .callMethod('ngOnDetach', [
                    view,
                    componentView,
                    renderEl,
                ])
                    .toStmt()];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} dir
     * @param {?} dirWrapper
     * @return {?}
     */
    static ngOnDestroy(dir, dirWrapper) {
        if (dir.type.lifecycleHooks.indexOf(LifecycleHooks.OnDestroy) !== -1 ||
            Object.keys(dir.outputs).length > 0) {
            return [dirWrapper.callMethod('ngOnDestroy', []).toStmt()];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} dirMeta
     * @param {?} hostProps
     * @param {?} usedEvents
     * @param {?} dirWrapper
     * @param {?} view
     * @param {?} eventListener
     * @return {?}
     */
    static subscribe(dirMeta, hostProps, usedEvents, dirWrapper, view, eventListener) {
        let /** @type {?} */ needsSubscribe = false;
        const /** @type {?} */ eventFlags = [];
        Object.keys(dirMeta.outputs).forEach((propName) => {
            const /** @type {?} */ eventName = dirMeta.outputs[propName];
            const /** @type {?} */ eventUsed = usedEvents.indexOf(eventName) > -1;
            needsSubscribe = needsSubscribe || eventUsed;
            eventFlags.push(o.literal(eventUsed));
        });
        hostProps.forEach((hostProp) => {
            if (hostProp.isAnimation && usedEvents.length > 0) {
                needsSubscribe = true;
            }
        });
        if (needsSubscribe) {
            return [
                dirWrapper.callMethod('subscribe', [view, eventListener].concat(eventFlags)).toStmt()
            ];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} hostEvents
     * @param {?} dirWrapper
     * @param {?} eventName
     * @param {?} event
     * @return {?}
     */
    static handleEvent(hostEvents, dirWrapper, eventName, event) {
        return dirWrapper.callMethod('handleEvent', [eventName, event]);
    }
}
var _a;
//# sourceMappingURL=directive_wrapper_compiler.js.map