import { Naff } from "./naff";
import { NaffTagNames } from "./common";
import { Naffs } from "./naffs";
import { NaffDisposableToken } from "./token";

export type NaffDocumentEventHandler<E extends DocumentEventNames> = (
    ev: DocumentEventMap[E],
    target: NaffDocument
) => void | Promise<void>;

export type NaffDocumentEventMap = {
    [event in keyof DocumentEventMap]?: NaffDocumentEventHandler<event>;
};

export type DocumentEventNames = keyof DocumentEventMap;

export interface NaffDocument {
    $<Selector extends string>(
        tagName: Selector
    ): Selector extends NaffTagNames ? Naff<Selector> | null : Naff | null;

    $x<TagName extends NaffTagNames = NaffTagNames>(
        xpath: string
    ): Naff<TagName> | null;

    $$(selector: string): Naffs;

    $$x(xpath: string): Naffs;

    // Registers a handler using addEventListener.
    $addListener<E extends DocumentEventNames>(
        name: E,
        handler: (ev: DocumentEventMap[E], target: Document) => unknown
    ): this;

    // Unregisters a handler using removeEventListener.
    $dropListener(
        name: DocumentEventNames,
        handler: (...args: any[]) => any
    ): this;

    // Returns a promise that resolves with the next invocation of `name`.
    $once<E extends DocumentEventNames>(name: E): Promise<DocumentEventMap[E]>;

    // Registers multiple event handlers and returns a token that removes the subscription
    // When closed.
    $on(map: NaffDocumentEventMap): NaffDisposableToken;

    // Registers one event handler and returns a token that removes the subscription
    // when closed.
    $on<Name extends DocumentEventNames>(
        event: Name,
        handler: NaffDocumentEventHandler<Name>
    ): NaffDisposableToken;

    readonly root: Naff;
    readonly location: string;
}
