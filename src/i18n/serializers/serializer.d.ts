/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as i18n from '../i18n_ast';
export declare abstract class Serializer {
    abstract write(messages: i18n.Message[]): string;
    abstract load(content: string, url: string): {
        [msgId: string]: i18n.Node[];
    };
    abstract digest(message: i18n.Message): string;
    createNameMapper(message: i18n.Message): PlaceholderMapper;
}
/**
 * A `PlaceholderMapper` converts placeholder names from internal to serialized representation and
 * back.
 *
 * It should be used for serialization format that put constraints on the placeholder names.
 */
export interface PlaceholderMapper {
    toPublicName(internalName: string): string;
    toInternalName(publicName: string): string;
}
/**
 * A simple mapper that take a function to transform an internal name to a public name
 */
export declare class SimplePlaceholderMapper extends i18n.RecurseVisitor implements PlaceholderMapper {
    private mapName;
    private internalToPublic;
    private publicToNextId;
    private publicToInternal;
    constructor(message: i18n.Message, mapName: (name: string) => string);
    toPublicName(internalName: string): string;
    toInternalName(publicName: string): string;
    visitText(text: i18n.Text, context?: any): any;
    visitTagPlaceholder(ph: i18n.TagPlaceholder, context?: any): any;
    visitPlaceholder(ph: i18n.Placeholder, context?: any): any;
    visitIcuPlaceholder(ph: i18n.IcuPlaceholder, context?: any): any;
    private visitPlaceholderName(internalName);
}
