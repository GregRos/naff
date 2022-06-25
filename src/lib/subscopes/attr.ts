import { NaffTagMap } from "../props.bin";
import { NaffTagNames } from "../common";

export type AttrSubscope<Tag extends NaffTagNames> = {
    [attr in Extract<keyof NaffTagMap[Tag], string> as
        | Lowercase<attr>
        | string]: {
        (): string;
        (value: string): AttrSubscope<Tag>;
    };
} & {
    has(name: string): boolean;
    get(name: string): string;
    list(): string;
    set(name: string, value: string | null): AttrSubscope<Tag>;
};
