import { DomTagMap, NaffTagNames, TagPropMap } from "../base/tag";
import { NaffAny, NaffMany, NaffOne } from "../index";
import { DomInput, MultiDomInput, SingleDomInput } from "../mutate/types";

export type NaffPredicate<Tag extends NaffTagNames> = (
    one: NaffOne<Tag>
) => boolean;

export interface SingleQuery<Tag extends NaffTagNames> {
    // Gets the first element matching `selector` that's a descendant of `this`.
    $(selector: string): NaffOne | null;

    // Gets all the elements matching 'selector' that are descendants of `this`.
    $$(selector: string): NaffMany;

    // Gets the first ancestor of `this`.
    $parent(): NaffOne | null;

    // Gets first ancestor matching `selector..
    $parent(selector: string): NaffOne | null;

    // Gets first ancestor matching `predicate.
    $parent(predicate: NaffPredicate<Tag>): NaffOne | null;

    // Gets all ancestors matching `selector.
    $parents(selector: string): NaffMany;

    // Gets all ancestors matching `predicate.
    $parents(predicate: NaffPredicate<Tag>): NaffMany;

    // For TypeScript. Returns the current element, but typed differently, without checking.
    $as<TagN2 extends NaffTagNames = NaffTagNames>(): NaffOne<TagN2>;

    // Returns the current element only if its tag name is `name`.
    $only<TagN2 extends NaffTagNames>(name: TagN2): NaffOne<TagN2> | null;

    // Returns the current element only if it matches `selector`.
    $only(selector: string): NaffOne<Tag> | null;

    // Returns the current element, but in `any` mode.
    $toAny(): NaffOne<"?">;

    // Generates a detached clone of `this`.
    $clone(): NaffOne<Tag>;

    // Generates `count` detached clones of `this`.
    $replicate(count: number): NaffMany<Tag>;

    // Returns a result set including `this` and all the elements in `others`.
    $plus(...others: MultiDomInput[]): NaffMany<Tag>;

    $equal(other: SingleDomInput | NaffAny): boolean;
}

export interface MultiQuery<Tag extends NaffTagNames> {
    // Gets the first element in the set, or null.
    readonly $0: NaffOne<Tag> | null;

    // Finds the first element matching `selector` that's a descendant of one of `this`.
    $(selector: string): NaffOne | null;

    // Gets the element at position `index` in this set.
    $(index: number): NaffOne | null;

    // Finds all the elements matching `selector` that are descendants of one of `this`.
    $$(selector: string): NaffMany;

    // Returns a slice of `this` between `start` (inclusive, default 0) and `end` (exclusive, default -1).
    $$(start?: number, end?: number): NaffMany<Tag>;

    // Gets all ancestors of each of `this` matching `selector`.
    $parents(selector: string): NaffMany;

    // Gets all ancestors of each of `this` matching `predicate`.
    $parents(predicate: NaffPredicate<Tag>): NaffMany;

    // For TypeScript. Returns this result set with a different tag type, without checking anything.
    $as<TagN2 extends NaffTagNames = NaffTagNames>(): NaffMany<TagN2>;

    // Returns this result set, but in `any` mode.
    $asAny(): NaffMany<"?">;

    // Returns only those elements in `this` that are of type `name`.
    $filter<TagN2 extends NaffTagNames>(name: TagN2): NaffMany<TagN2>;

    // Returns only the elements in `this` matching `selector`.
    $filter(selector: string): NaffMany<Tag>;

    // Returns only the elements in `this` matching `predicate`.
    $filter(predicate: (tag: NaffOne<Tag>) => boolean): NaffMany<Tag>;

    // Projects every element in `this` to zero or more other elements, removing duplicates.
    $hypermap<OutTag extends NaffTagNames>(
        project: (single: NaffOne<Tag>) => DomInput
    ): NaffMany<OutTag>;

    $toAny(): NaffMany<"?">;

    // Returns the first `count` elements of `this`.
    $take(count: number): NaffMany<Tag>;

    // Returns the first elements of `this` until some element matches `predicate`.
    $take(predicate: NaffPredicate<Tag>): NaffMany<Tag>;

    // Reverses the order of the matched set.
    $rev(): NaffMany<Tag>;

    // Checks if `this` includes all the elements in `input`.
    $has(input: DomInput): boolean;

    // Generates a clone of all the elements of `this`.
    $clone(): NaffMany<Tag>;

    // Generates `count` clones of the elements of `this`.
    $replicate(count: number): NaffMany<Tag>;

    // Returns a result set including `this` and all the elements in `others`.
    $plus(...others: MultiDomInput[]): NaffMany<Tag>;

    // Returns a result set including `this` without the elements in `others`.
    $minus(...others: MultiDomInput[]): NaffMany<Tag>;
}
