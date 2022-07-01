import {
    AriaSubscope,
    AttrSubscope,
    StyleSubscope,
    TokenSubscope
} from "./subscopes";
import {
    DomInput,
    TagEventMap,
    TagEventNames,
    MultiDomInput,
    NaffTagEventHandler,
    NaffPredicate,
    NaffTagSubscriberMap,
    NaffTagNames,
    SingleDomInput
} from "./common";
import { NaffDisposableToken } from "./token";
import { NaffAny } from "./index";
import { Naffs } from "./naffs";
import { NaffTagMap } from "./props.bin";
import { NaffDocument } from "./naff-document";

export interface NaffBase<TagN extends NaffTagNames = NaffTagNames> {
    readonly $naff: TagN;
    readonly $tag: string;
    $style<R>(
        subscope: (s: StyleSubscope) => R
    ): R extends StyleSubscope ? this : R;

    $attr<R>(
        subscope: (s: AttrSubscope<TagN>) => R
    ): R extends AttrSubscope<TagN> ? this : R;

    $class<R>(
        subscope: (s: TokenSubscope) => R
    ): R extends TokenSubscope ? this : R;

    $children(): Naffs;

    $aria<R>(
        subscope: (a: AriaSubscope) => R
    ): R extends AriaSubscope ? this : R;

    $remove(): this;

    /**
     * Gets or sets the element's innerText.
     */
    $text(): string;
    $text(input: string): this;

    /**
     * Gets or sets the element's inner HTML.
     */
    $html(): string;
    $html(input: string): this;

    // Gets the document to which `this` belongs, or `null`.
    readonly $owner: NaffDocument | null;

    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetHeight: number;
    readonly offsetWidth: number;
    readonly clientTop: number;
    readonly clientLeft: number;
    readonly scrollLeft: number;
    readonly scrollTop: number;

    // Registers a handler using addEventListener.
    $addListener<E extends TagEventNames>(
        name: E,
        handler: NaffTagEventHandler<TagN, E>
    ): this;

    // Unregisters a handler using removeEventListener.
    $dropListener(name: TagEventNames, handler: (...args: any[]) => any): this;

    // Returns a promise that resolves with the next invocation of `name`.
    $once<Name extends TagEventNames>(name: Name): Promise<TagEventMap[Name]>;

    // Registers multiple event handlers and returns a token that removes the subscription
    // When closed.
    $on(map: NaffTagSubscriberMap<TagN>): NaffDisposableToken;

    // Registers one event handler and returns a token that removes the subscription
    // when closed.
    $on<Name extends TagEventNames>(
        event: Name,
        handler: NaffTagEventHandler<TagN, Name>
    ): NaffDisposableToken;

    $clone(): this;

    // Gets the first element matching `selector` that's a descendant of `this`.
    $<Selector extends string>(
        name: Selector
    ): Selector extends NaffTagNames ? Naff<Selector> : Naff;

    // Gets the first element matching the xpath `xpath`, rooted at `this`.
    $x<TagName extends NaffTagNames = NaffTagNames>(
        xpath: string
    ): Naff<TagName>;

    // Gets all the elements matching 'selector' that are descendants of `this`.
    $$(selector: string): Naffs;

    // Gets all the elements matching `xpath` that are descendants of `this`.
    $$x(xpath: string): Naffs;

    // Gets the first ancestor of `this`.
    $parent(): this | null;

    // Gets first ancestor matching `selector..
    $parent(selector: string): this | null;

    // Gets first ancestor matching `predicate.
    $parent(predicate: NaffPredicate<TagN>): this | null;

    // Gets all ancestors matching `selector.
    $parents(selector: string): this;

    // Gets all ancestors matching `predicate.
    $parents(predicate: NaffPredicate<TagN>): this;

    // For TypeScript. Returns the current element, but typed differently, without checking.
    $as<TagN2 extends NaffTagNames = NaffTagNames>(): Naff<TagN2>;

    // Returns the current element only if its tag name is `name`.
    $only<TagN2 extends NaffTagNames>(name: TagN2): Naff<TagN2> | null;

    // Returns the current element only if it matches `selector`.
    $only(selector: string): this | null;

    // Returns the current element, but in `any` mode.
    $toAny(): Naff<"?">;

    // Returns a result set consisting of only `this`.
    $toMany(): Naffs;

    // Generates `count` detached clones of `this`.
    $replicate(count: number): Naffs;

    // Returns a result set including `this` and all the elements in `others`.
    $plus(...others: MultiDomInput[]): Naffs;

    // Determines if `this` element is identical to `other`.
    $isEqual(other: SingleDomInput | NaffAny): boolean;

    // Determines if `this` is an ancestor of `other`.
    $isParentOf(other: SingleDomInput): boolean;

    // Determines if `this` is a child of `other`.
    $isChildOf(other: SingleDomInput): boolean;

    $append(...inputs: DomInput[]): this;

    $prepend(...inputs: DomInput[]): this;

    $after(...postfixes: DomInput[]): this;

    $before(...prefixes: DomInput[]): this;

    $instead(...replacements: DomInput[]): Naffs;

    $instead(replacer: (x: this) => DomInput): Naffs;

    $switch(...replacements: DomInput[]): this;

    $switch(replacer: (x: this) => DomInput): Naffs;
}

export type Naff<TagN extends NaffTagNames = NaffTagNames> = NaffTagMap[TagN];
