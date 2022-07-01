import { NaffTagMap } from "../props.bin";
import { NaffTagNames } from "../common";

export type AttrSubscope<Tag extends NaffTagNames> = {
    [attr in keyof NaffTagMap[Tag] & string as Lowercase<attr>]: {
        (): string;
        (value: string | null): AttrSubscope<Tag>;
    };
} & {
    has(name: string): boolean;
    get(name: string): string;
    list(): string;
    set(name: string, value: string | null): AttrSubscope<Tag>;
};
