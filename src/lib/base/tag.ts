import { NaffOne } from "../index";

export type Tag = HTMLElement;
export type TagMap = HTMLElementTagNameMap;
export type TagNames = keyof TagMap;
export type AbsTagPropMap = {
    [tag in TagNames]?: {
        [prop in Exclude<keyof TagMap[tag], keyof Tag>]?: TagMap[tag][prop];
    };
};
export type PropNames<TagName extends TagNames> = Extract<
    keyof AbsTagPropMap[TagName],
    string
>;

// TODO: Tags - Add property lists for all tags.
export const naffTags = ((x => x) as <T extends AbsTagPropMap>(map: T) => T)({
    img: {
        src: "",
        srcset: "",
        referrerPolicy: "",
        height: 0,
        alt: "",
        crossOrigin: "",
        isMap: true,
        sizes: ""
    },
    script: {
        src: "",
        type: "",
        crossOrigin: "",
        async: true,
        referrerPolicy: "",
        defer: true,
        integrity: "",
        noModule: true,
        text: ""
    },
    html: {}
});
export type NaffTags = typeof naffTags;
export type NaffTagNames = keyof NaffTags;
export type PropManager<N extends NaffTagNames> = {
    [prop in keyof NaffTags[N]]: {
        (x: NaffTags[N][prop]): NaffOne<N>;
        (): NaffTags[N][prop];
    };
};
