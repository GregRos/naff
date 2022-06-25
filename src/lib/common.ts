import { Naff } from "./naff";
import { Naffs } from "./naffs";
import { NaffAny } from "./index";
import { NaffTagMap } from "./props.bin";

export type EventMap = HTMLElementEventMap;
export type EventNames = keyof EventMap;
export type NaffHandler<T extends NaffTagNames, E extends EventNames> = (
    ev: EventMap[E],
    target: Naff<T>
) => unknown | Promise<unknown>;

export type NaffSubscriberMap<Tag extends NaffTagNames> = {
    [name in EventNames]?: NaffHandler<Tag, name>;
};
export type SingleDomInput = Element | Naff;
export type MultiDomInput = SingleDomInput | Naffs | Element[];
export type DomInput = Element | Element[] | NaffAny | NaffAny[] | string;
export type NaffPredicate<Tag extends NaffTagNames> = (
    one: Naff<Tag>
) => boolean;
export type NaffTagNames = keyof NaffTagMap;
