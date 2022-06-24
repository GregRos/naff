import { NaffTagNames, NaffTags } from "../base/tag-properties";
import { NaffOne } from "../index";
import { NaffDisposableToken } from "../common/token";
import { DomTagNames } from "../base/dom-types";

export type EventMap = HTMLElementEventMap;
export type EventNames = keyof EventMap;
export type EventOptions = EventListenerOptions;
export type OnEventOptions = AddEventListenerOptions;

export type NaffHandler<T extends NaffTagNames, E extends EventNames> = (
    ev: EventMap[E],
    target: NaffOne<T>
) => unknown | Promise<unknown>;

export type NaffSubscriberMap<Tag extends NaffTagNames> = {
    [name in EventNames]?: NaffHandler<Tag, name>;
};

export interface NaffEventManager<Tag extends NaffTagNames> {
    // Registers a handler using addEventListener.
    $addListener<E extends EventNames>(
        name: E,
        handler: NaffHandler<Tag, E>
    ): this;

    // Unregisters a handler using removeEventListener.
    $dropListener(name: EventNames, handler: (...args: any[]) => any): this;

    // Returns a promise that resolves with the next invocation of `name`.
    $once<Name extends EventNames>(name: Name): Promise<EventMap[Name]>;

    // Registers multiple event handlers and returns a token that removes the subscription
    // When closed.
    $on(map: NaffSubscriberMap<Tag>): NaffDisposableToken;

    // Registers one event handler and returns a token that removes the subscription
    // when closed.
    $on<Name extends EventNames>(
        event: Name,
        handler: NaffHandler<Tag, Name>
    ): NaffDisposableToken;
}
