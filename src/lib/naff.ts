import {
    AriaSubscope,
    AttrSubscope,
    StyleSubscope,
    TokenSubscope
} from "./subscopes";
import {
    DomInput,
    EventMap,
    EventNames,
    MultiDomInput,
    NaffHandler,
    NaffPredicate,
    NaffSubscriberMap,
    NaffTagNames,
    SingleDomInput
} from "./common";
import { NaffDisposableToken } from "./token";
import { NaffAny } from "./index";
import { Naffs } from "./naffs";
import { NaffTagMap } from "./props.bin";

export interface NaffInterface<TagN extends NaffTagNames = NaffTagNames> {
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

    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetHeight: number;
    readonly offsetWidth: number;
    readonly clientTop: number;
    readonly clientLeft: number;
    readonly scrollLeft: number;
    readonly scrollTop: number;

    // Registers a handler using addEventListener.
    $addListener<E extends EventNames>(
        name: E,
        handler: NaffHandler<TagN, E>
    ): this;

    // Unregisters a handler using removeEventListener.
    $dropListener(name: EventNames, handler: (...args: any[]) => any): this;

    // Returns a promise that resolves with the next invocation of `name`.
    $once<Name extends EventNames>(name: Name): Promise<EventMap[Name]>;

    // Registers multiple event handlers and returns a token that removes the subscription
    // When closed.
    $on(map: NaffSubscriberMap<TagN>): NaffDisposableToken;

    // Registers one event handler and returns a token that removes the subscription
    // when closed.
    $on<Name extends EventNames>(
        event: Name,
        handler: NaffHandler<TagN, Name>
    ): NaffDisposableToken;

    $clone(): this;

    // Gets the first element matching `selector` that's a descendant of `this`.
    $(selector: string): this | null;

    // Gets all the elements matching 'selector' that are descendants of `this`.
    $$(selector: string): Naffs;

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

    // Generates `count` detached clones of `this`.
    $replicate(count: number): Naffs;

    // Returns a result set including `this` and all the elements in `others`.
    $plus(...others: MultiDomInput[]): Naffs;

    $equal(other: SingleDomInput | NaffAny): boolean;

    $append(...inputs: DomInput[]): Naff<TagN>;

    $prepend(...inputs: DomInput[]): Naff<TagN>;

    $after(...postfixes: DomInput[]): Naff<TagN>;

    $before(...prefixes: DomInput[]): Naff<TagN>;

    $instead(...replacements: DomInput[]): Naffs;

    $instead(replacer: (x: Naff<TagN>) => DomInput): Naffs;

    $switch(...replacements: DomInput[]): Naff<TagN>;

    $switch(replacer: (x: Naff<TagN>) => DomInput): Naffs;
}

export type Naff<TagN extends NaffTagNames = NaffTagNames> = NaffTagMap[TagN];

const a: Naff<"img">;
