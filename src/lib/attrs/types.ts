import { NaffTagNames, NaffTags, PropNames, DomTagNames } from "../base/tag";

export interface AttrWriter<Self> {
    set(name: string, value: string | null): Self;
}

export interface AttrReader {
    has(name: string): boolean;

    get(name: string): string;

    list(): string;
}

export type AttrMultiManager<Tag extends NaffTagNames> = {
    [attr in PropNames<Tag> as Lowercase<attr> | string]: {
        (value: string | null): AttrMultiManager<Tag>;
    };
};

export type AttrSingleManager<Tag extends NaffTagNames> = {
    [attr in PropNames<Tag> as Lowercase<attr> | string]: {
        (): string;
        (value: string): AttrSingleManager<Tag>;
    };
} & AttrWriter<AttrSingleManager<Tag>> &
    AttrReader;

export interface DataWriter<Self> {}
