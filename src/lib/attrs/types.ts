import { PropNames, TagNames } from "../base/tag";

export type AttrsFor<TagName extends TagNames> = {
    [attr in PropNames<TagName> as Lowercase<attr>]: {
        (): string;
        (value: string): AttrsFor<TagName>;
    };
} & {
    has(name: string): boolean;
    set(name: string, value: string | null): AttrsFor<TagName>;
    drop(name: string): AttrsFor<TagName>;
    get(name: string): string;
    get(): AttrsFor<TagName>;
    // TODO: Add namespace
};
