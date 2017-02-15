/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isPrimitive, isStrictStringMap } from './facade/lang';
export var /** @type {?} */ MODULE_SUFFIX = '';
var /** @type {?} */ CAMEL_CASE_REGEXP = /([A-Z])/g;
var /** @type {?} */ DASH_CASE_REGEXP = /-+([a-z0-9])/g;
/**
 * @param {?} input
 * @return {?}
 */
export function camelCaseToDashCase(input) {
    return input.replace(CAMEL_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        return '-' + m[1].toLowerCase();
    });
}
/**
 * @param {?} input
 * @return {?}
 */
export function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        return m[1].toUpperCase();
    });
}
/**
 * @param {?} input
 * @param {?} defaultValues
 * @return {?}
 */
export function splitAtColon(input, defaultValues) {
    return _splitAt(input, ':', defaultValues);
}
/**
 * @param {?} input
 * @param {?} defaultValues
 * @return {?}
 */
export function splitAtPeriod(input, defaultValues) {
    return _splitAt(input, '.', defaultValues);
}
/**
 * @param {?} input
 * @param {?} character
 * @param {?} defaultValues
 * @return {?}
 */
function _splitAt(input, character, defaultValues) {
    var /** @type {?} */ characterIndex = input.indexOf(character);
    if (characterIndex == -1)
        return defaultValues;
    return [input.slice(0, characterIndex).trim(), input.slice(characterIndex + 1).trim()];
}
/**
 * @param {?} value
 * @param {?} visitor
 * @param {?} context
 * @return {?}
 */
export function visitValue(value, visitor, context) {
    if (Array.isArray(value)) {
        return visitor.visitArray(/** @type {?} */ (value), context);
    }
    if (isStrictStringMap(value)) {
        return visitor.visitStringMap(/** @type {?} */ (value), context);
    }
    if (value == null || isPrimitive(value)) {
        return visitor.visitPrimitive(value, context);
    }
    return visitor.visitOther(value, context);
}
var ValueTransformer = (function () {
    function ValueTransformer() {
    }
    /**
     * @param {?} arr
     * @param {?} context
     * @return {?}
     */
    ValueTransformer.prototype.visitArray = function (arr, context) {
        var _this = this;
        return arr.map(function (value) { return visitValue(value, _this, context); });
    };
    /**
     * @param {?} map
     * @param {?} context
     * @return {?}
     */
    ValueTransformer.prototype.visitStringMap = function (map, context) {
        var _this = this;
        var /** @type {?} */ result = {};
        Object.keys(map).forEach(function (key) { result[key] = visitValue(map[key], _this, context); });
        return result;
    };
    /**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */
    ValueTransformer.prototype.visitPrimitive = function (value, context) { return value; };
    /**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */
    ValueTransformer.prototype.visitOther = function (value, context) { return value; };
    return ValueTransformer;
}());
export { ValueTransformer };
var SyncAsyncResult = (function () {
    /**
     * @param {?} syncResult
     * @param {?=} asyncResult
     */
    function SyncAsyncResult(syncResult, asyncResult) {
        if (asyncResult === void 0) { asyncResult = null; }
        this.syncResult = syncResult;
        this.asyncResult = asyncResult;
        if (!asyncResult) {
            this.asyncResult = Promise.resolve(syncResult);
        }
    }
    return SyncAsyncResult;
}());
export { SyncAsyncResult };
function SyncAsyncResult_tsickle_Closure_declarations() {
    /** @type {?} */
    SyncAsyncResult.prototype.syncResult;
    /** @type {?} */
    SyncAsyncResult.prototype.asyncResult;
}
/**
 * @param {?} msg
 * @return {?}
 */
export function syntaxError(msg) {
    var /** @type {?} */ error = Error(msg);
    ((error))[ERROR_SYNTAX_ERROR] = true;
    return error;
}
var /** @type {?} */ ERROR_SYNTAX_ERROR = 'ngSyntaxError';
/**
 * @param {?} error
 * @return {?}
 */
export function isSyntaxError(error) {
    return ((error))[ERROR_SYNTAX_ERROR];
}
//# sourceMappingURL=util.js.map