import {
    MultiPropManager,
    NaffTagNames,
    NaffTags,
    SinglePropManager,
    DomTagMap,
    NaffTagMap
} from "./base/tag";
import { NaffEventManager } from "./events/types";
import { MultiStyleWriter, StyleSingleManager } from "./styles/types";
import { AttrMultiManager, AttrSingleManager } from "./attrs/types";
import { ClassManager, NaffClassWriter } from "./classes/types";
import { DomInput, DomMutator } from "./mutate/types";
import { MultiQuery, SingleQuery } from "./query/types";

export type AttrIn = string;
export type AttrOut = string | null;
export type AttrName = string;

export interface NaffDocument {
    find(selector: string): any;
}

export type NaffAny<TagN extends NaffTagNames = NaffTagNames> =
    | NaffOne<TagN>
    | NaffMany<TagN>;

export type NaffOne<TagN extends NaffTagNames = NaffTagNames> = {
    readonly $name: string;
    readonly $dom: NaffTags[TagN];
    $style<R>(
        builder: (s: StyleSingleManager) => R
    ): R extends StyleSingleManager ? NaffOne<TagN> : R;

    $attr<R>(
        builder: (s: AttrSingleManager<TagN>) => R
    ): R extends AttrSingleManager<TagN> ? NaffOne<TagN> : R;

    $class<R>(
        builder: (s: ClassManager) => R
    ): R extends ClassManager ? NaffOne<TagN> : R;

    $children(): NaffMany;

    $remove(): NaffOne<TagN>;

    $text(): string;
    $text(value: string): NaffOne<TagN>;

    $html(value: string): NaffOne<TagN>;
    $html(): string;

    $clone(): NaffOne<TagN>;
} & SinglePropManager<TagN> &
    NaffEventManager<TagN> &
    DomMutator<NaffOne<TagN>> &
    SingleQuery<TagN>;

export type NaffMany<TagN extends NaffTagNames = NaffTagNames> = {
    $style<R>(
        builder: (s: MultiStyleWriter) => R
    ): R extends MultiStyleWriter ? NaffMany<TagN> : R;

    $attr<R>(
        builder: (s: AttrMultiManager<TagN>) => R
    ): R extends AttrMultiManager<TagN> ? NaffMany<TagN> : R;

    $class<R>(
        builder: (s: NaffClassWriter) => R
    ): R extends NaffClassWriter ? NaffMany<TagN> : R;

    $take(n: number): NaffMany<NaffTagNames>;
    $first(): NaffOne<TagN> | null;
    $last(): NaffOne<TagN> | null;

    $single(): NaffOne<TagN>;

    $clone(): NaffOne<TagN>;
} & MultiPropManager<TagN> &
    NaffEventManager<TagN> &
    DomMutator<NaffMany<TagN>> &
    MultiQuery<TagN>;

//
// import AttributeInput = PureDom.AttributeInput;
// import AttributeOutput = PureDom.AttributeOutput;
// import AttributeMap = PureDom.AttributeMap;
//
// declare namespace PureDom {
//
//     type DomInput = string | Node | MultiNode | SingleNode;
//     type SingleDomInput<T extends Node> = SingleNode<T> | T;
//     type AttributeInput = string | number | null;
//     type AttributeOutput = string | null;
//     type AttributeMap = Record<string, AttributeOutput> | Map<string, AttributeOutput>;
//
//     interface MutateElement {
//         attr(map: AttributeMap): this;
//
//         attr(what: string, value: AttributeInput): this;
//
//         data(prop: string, value: AttributeInput): this;
//
//         toggle(what: string): this;
//
//         inner(html: string): this;
//
//         outer(html: string): this;
//
//         text(text: string): this;
//
//         style(prop: string, value: AttributeInput): this;
//
//         style(map: AttributeMap): this;
//     }
//
//     interface MutateDom {
//         before(...inputs: DomInput[]): this;
//
//         after(...inputs: DomInput[]): this;
//
//         append(...inputs: DomInput[]): this;
//
//         prepend(...inputs: DomInput[]): this;
//
//         remove(): this;
//
//         clear(): this;
//
//         replace(...inputs: DomInput[]): this;
//
//     }
//
//     interface QueryDom {
//         find(selector: string): MultiNode;
//
//         children(): MultiNode;
//
//         descendants(): MultiNode;
//     }
//
//     interface InspectElement {
//         has(attribute: string): boolean;
//
//         matches(selector: string): boolean;
//
//         attrs(): string[];
//
//         attr(what: string): AttributeOutput;
//
//         style(prop: string): AttributeOutput;
//     }
//
//     interface AcquireElement<T extends Node> {
//         node: T;
//     }
//
//     interface AcquireElements {
//         get(i: number): SingleNode;
//
//         [i: number]: Element;
//
//         [Symbol.iterator](): IterableIterator<Element>;
//     }
//
//     type SingleNode<T extends Node = Node> = InspectElement & QueryDom & MutateDom & MutateElement & AcquireElement<T>;
//
//     type MultiNode = QueryDom & MutateDom & MutateElement & AcquireElements;
//
// }

const imaginaryThing = 0 as unknown as NaffOne<"input/checkbox">;
