import { NaffTags, PropManager, TagMap } from "./base/tag";
import { NaffStyleManager } from "./styles/types";
import { AttrsFor } from "./attrs/types";
import { NaffClassManager } from "./classes/types";
import { NaffEventManager } from "./events/types";

export type AttrIn = string;
export type AttrOut = string | null;
export type AttrName = string;

export interface NaffDocument {
    find(selector: string): any;
}

export type NaffOne<N extends keyof NaffTags> = PropManager<N> & {
    id: string;
    readonly tag: TagMap[N];
    //
    // styles<Rs>(spec: {
    //     [key in StyleNames]?: Styles[key]
    // }): NaffOne<TagName>;

    style<R>(
        builder: (s: NaffStyleManager) => R
    ): R extends NaffStyleManager ? NaffOne<N> : R;

    // attrs(spec: {
    //     [key in keyof AttrsFor<TagName>]?: string
    // }): NaffOne<TagName>;

    attr<R>(
        builder: (s: AttrsFor<N>) => R
    ): R extends AttrsFor<N> ? NaffOne<N> : R;

    event(builder: (s: NaffEventManager<N>) => unknown): NaffOne<N>;
    //events(key: NaffHandlerKey, spec: NaffSubscriberMap<TagName> | null): NaffOne<TagName>;
    //events(spec: NaffSubscriberMap<TagName>): NaffOne<TagName>;

    class<R>(
        builder: (s: NaffClassManager) => R
    ): R extends NaffClassManager ? NaffOne<N> : R;

    //classes(classes: string | string[]): NaffOne<TagName>;

    find(selector: string): NaffOne<keyof NaffTags>[];
};

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
