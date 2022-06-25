import { Naff } from "./naff";
import {
    DomInput,
    EventNames,
    MultiDomInput,
    NaffHandler,
    NaffPredicate,
    NaffSubscriberMap,
    NaffTagNames
} from "./common";
import { DomTagNames } from "./dom-types";
import { NaffDisposableToken } from "./token";

export type Naffs = {
    $first(): Naff | null;
    $last(): Naff | null;

    $single(): Naff;
    $clone(): Naff;

    // Registers multiple event handlers and returns a token that removes the subscription
    // When closed.
    $on(map: NaffSubscriberMap<DomTagNames>): NaffDisposableToken;

    // Registers one event handler and returns a token that removes the subscription
    // when closed.
    $on<Name extends EventNames>(
        event: Name,
        handler: NaffHandler<DomTagNames, Name>
    ): NaffDisposableToken;

    // Gets the first element in the set, or null.
    readonly $0: Naff | null;

    // Finds the first element matching `selector` that's a descendant of one of `this`.
    $(selector: string): Naff | null;

    // Gets the element at position `index` in this set.
    $(index: number): Naff | null;

    // Finds all the elements matching `selector` that are descendants of one of `this`.
    $$(selector: string): Naffs;

    // Returns a slice of `this` between `start` (inclusive, default 0) and `end` (exclusive, default -1).
    $$(start?: number, end?: number): Naffs;

    // Gets all ancestors of each of `this` matching `selector`.
    $parents(selector: string): Naffs;

    // Gets all ancestors of each of `this` matching `predicate`.
    $parents(predicate: NaffPredicate<NaffTagNames>): Naffs;

    // Returns this result set, but in `any` mode.
    $asAny(): Naffs;

    // Returns only those elements in `this` that are of type `name`.
    $filter<TagN2 extends NaffTagNames>(name: TagN2): Naffs;

    // Returns only the elements in `this` matching `selector`.
    $filter(selector: string): Naffs;

    // Returns only the elements in `this` matching `predicate`.
    $filter(predicate: (tag: Naff<"?">) => boolean): Naffs;

    // Projects every element in `this` to zero or more other elements, removing duplicates.
    $flatMap(project: (single: Naff<"?">) => DomInput): Naffs;

    // Returns the first `count` elements of `this`.
    $take(count: number): Naffs;
    // Returns the first elements of `this` until some element matches `predicate`.
    $take(predicate: NaffPredicate<NaffTagNames>): Naffs;

    // Reverses the order of the matched set.
    $rev(): Naffs;

    // Checks if `this` includes all the elements in `input`.
    $has(input: DomInput): boolean;

    // Generates `count` clones of the elements of `this`.
    $replicate(count: number): Naffs;

    // Returns a result set including `this` and all the elements in `others`.
    $plus(...others: MultiDomInput[]): Naffs;

    // Returns a result set including `this` without the elements in `others`.
    $minus(...others: MultiDomInput[]): Naffs;
};
