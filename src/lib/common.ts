import { Naff } from "./naff";
import { Naffs } from "./naffs";
import { NaffAny } from "./index";
import { NaffTagMap } from "./props.bin";

export type TagEventMap = HTMLElementEventMap;
export type TagEventNames = keyof TagEventMap;
export type NaffTagEventHandler<
    T extends NaffTagNames,
    E extends TagEventNames
> = (ev: TagEventMap[E], target: Naff<T>) => void | Promise<void>;

export type NaffTagSubscriberMap<Tag extends NaffTagNames> = {
    [name in TagEventNames]?: NaffTagEventHandler<Tag, name>;
};
export type SingleDomInput = Element | Naff;
export type MultiDomInput = SingleDomInput | Naffs | Element[];
export type DomInput = Element | Element[] | NaffAny | NaffAny[] | string;
export type NaffPredicate<Tag extends NaffTagNames> = (
    one: Naff<Tag>
) => boolean;
export type NaffTagNames = keyof NaffTagMap;
