import { Naff } from "./naff";
import {
    DomInput,
    TagEventNames,
    MultiDomInput,
    NaffTagEventHandler,
    NaffPredicate,
    NaffTagSubscriberMap,
    NaffTagNames,
    SingleDomInput
} from "./common";
import { DomTagNames } from "./dom-types";
import { NaffDisposableToken } from "./token";

/**
 * Represents an ordered list of elements.
 */
export interface Naffs {
    /**
     * Returns the single element that is part of `this` list.
     *
     * Throws an error if `this` doesn't contain exactly one element.
     * @param tagName
     */
    $single<TagName extends NaffTagNames>(tagName?: TagName): Naff;

    /**
     * Returns a new result set consisting of clones of each element of `this`.
     */
    $clone(): Naffs;

    /**
     * Registers one or more event handlers on each element of `this`.
     * @param map The subscriber map that specifies the handler for each event.
     * @returns A token that, when closed, removes all the subscriptions.
     */
    $on(map: NaffTagSubscriberMap<DomTagNames>): NaffDisposableToken;

    /**
     * Registers one event handler on each element of `this`.
     * @param event The name of the event to handle.
     * @param handler The handler for the event.
     * @returns A token that, when closed, removes all subscriptions.
     */
    $on<Name extends TagEventNames>(
        event: Name,
        handler: NaffTagEventHandler<DomTagNames, Name>
    ): NaffDisposableToken;

    // Gets the first element in the set, or null.
    readonly $0: Naff | null;

    /**
     * Finds the first element matching `selector` that's a descendant of `this`.
     * @param selector The CSS selector to match against.
     */
    $<Selector extends string>(
        selector: Selector
    ): Selector extends NaffTagNames ? Naff<Selector> : Naff;

    // Returns the first element that matches `predicate` in this set, and `null` if none exists.
    $<TagName extends NaffTagNames>(
        predicate: NaffPredicate<"?">
    ): Naff<TagName> | null;

    // Gets the first element matching `xpath` rooted at one of `this`.
    $x<TagName extends NaffTagNames>(xpath: string): Naff<TagName>;

    // Gets all elements matching `xpath` rooted at each of `this`.
    $$x(xpath: string): Naffs;

    // Finds all the elements matching `selector` that are descendants of one of `this`.
    $$(selector: string): this;

    // Returns a slice of `this` between `start` (inclusive, default 0) and `end` (exclusive, default -1).
    $$(start?: number, end?: number): this;

    // Returns all elements in `this` matching `predicate`.
    $$(predicate: NaffPredicate<"?">): this;

    // Gets all ancestors of each of `this` matching `selector`.
    $parents(selector: string): this;

    // Gets all ancestors of each of `this` matching `predicate`.
    $parents(predicate: NaffPredicate<NaffTagNames>): this;

    // Returns only those elements in `this` that are of type `name`.
    $filter<TagN2 extends NaffTagNames>(name: TagN2): this;

    // Returns only the elements in `this` matching `selector`.
    $filter(selector: string): this;

    // Returns only the elements in `this` matching `predicate`.
    $filter(predicate: (tag: Naff<"?">) => boolean): this;

    // Projects every element in `this` to zero or more other elements, removing duplicates.
    $flatMap(project: (single: Naff<"?">) => DomInput): this;

    // Returns the first `count` elements of `this`.
    $take(count: number): this;

    // Returns the first elements of `this` until some element fails to match `predicate`..
    $take(predicate: NaffPredicate<NaffTagNames>): this;

    // Reverses the order of the matched set.
    $rev(): this;

    // Checks if `this` includes all the elements in `input`.
    $has(input: DomInput): boolean;

    // Generates `count` clones of the elements of `this`.
    $replicate(count: number): this;

    // Returns a result set including `this` and all the elements in `others`.
    $plus(...others: MultiDomInput[]): this;

    // Returns a result set including `this` without the elements in `others`.
    $minus(...others: MultiDomInput[]): this;

    // Returns an element set.
    $intersect(...others: MultiDomInput[]): this;

    // Iterates over each of `this` and applies an operation on it.
    $each(iteratee: (tag: Naff, index: number, self: this) => unknown): this;
}
