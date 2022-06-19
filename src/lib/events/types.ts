import { NaffTagNames } from "../base/tag";
import { NaffOne } from "../index";

export type EventMap = HTMLElementEventMap;
export type EventNames = keyof EventMap;
export type EventOptions = EventListenerOptions;
export type OnEventOptions = AddEventListenerOptions;

export interface NaffEventSub {
    readonly isOpen: boolean;
    readonly length: number;

    close(): void;

    add(...others: NaffEventSub[]): NaffEventSub;
}

// TODO: Events - Add options
// TODO: Events - Add dispatch
export type NaffEventManager<T extends NaffTagNames> = {
    [name in EventNames as `on${Lowercase<name>}`]: {
        (handler: NaffHandler<T, name>): NaffEventManager<T>;
    };
} & {
    stream<Names extends EventNames>(
        ...names: Names[]
    ): AsyncIterable<EventMap[Names]>;
    once<Name extends EventNames>(name: Name): Promise<EventMap[Name]>;

    off(
        name: EventNames,
        handler: (...args: any[]) => any
    ): NaffEventManager<T>;
    on<E extends EventNames>(
        name: E,
        handler: NaffHandler<NaffTagNames, E>
    ): NaffEventManager<T>;
    sub(map: NaffSubscriberMap<T>): NaffEventSub;
};
export type NaffHandler<T extends NaffTagNames, E extends EventNames> = (
    ev: EventMap[E],
    target: NaffOne<T>
) => unknown | Promise<unknown>;
export type NaffSubscriberMap<Tag extends NaffTagNames> = {
    [name in EventNames]?: NaffHandler<Tag, name>;
};
