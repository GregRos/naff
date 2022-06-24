import { NaffMany, NaffOne } from "../index";
import { inferSubtypeOf, inferPartialMapOf } from "../util";
import {
    DomAutoCapitalize,
    DomAutoComplete,
    DomButtonType,
    DomContentEditable,
    DomCrossOrigin,
    DomDir,
    DomImageDecoding,
    DomImageLoading,
    DomPreload,
    DomPriority,
    DomSelectionDir,
    DomTableScope,
    DomTagMap,
    DomTagNames,
    DomTrackKind,
    DomTrackReadyState
} from "./dom-types";
import {
    NaffTokenManager,
    NafftokenWriter,
    TokenManager
} from "../classes/types";
import {
    SelectionSubscope,
    TextSelectionManager,
    TextSelectionWriter
} from "../selection/types";

export interface NaffTagMap extends HTMLElementTagNameMap {
    "input/button": HTMLInputElement;
    "input/checkbox": HTMLInputElement;
    "input/color": HTMLInputElement;
    "input/date": HTMLInputElement;
    "input/datetime-local": HTMLInputElement;
    "input/email": HTMLInputElement;
    "input/file": HTMLInputElement;
    "input/hidden": HTMLInputElement;
    "input/image": HTMLInputElement;
    "input/month": HTMLInputElement;
    "input/number": HTMLInputElement;
    "input/password": HTMLInputElement;
    "input/radio": HTMLInputElement;
    "input/range": HTMLInputElement;
    "input/reset": HTMLInputElement;
    "input/search": HTMLInputElement;
    "input/submit": HTMLInputElement;
    "input/tel": HTMLInputElement;
    "input/text": HTMLInputElement;
    "input/time": HTMLInputElement;
    "input/url": HTMLInputElement;
    "input/week": HTMLInputElement;
    "?": Record<string, any>;
}

export type NaffTagNames = keyof NaffTagMap;

export type NaffExclusiveProps<Tag extends NaffTagNames> = Exclude<
    keyof NaffTagMap[Tag],
    keyof HTMLElement
>;

export type TagPropMap = {
    [tag in NaffTagNames]?: {
        [prop in NaffExclusiveProps<tag>]?:
            | AnyType<NaffTagMap[tag][prop]>
            | ((...args: any[]) => any);
    } & {
        [prop in string]?: AnyType<unknown>;
    };
};

export const allTagProps = inferPartialMapOf<HTMLElement>()({
    dir: rw("" as DomDir),
    accessKey: rw(""),
    contentEditable: rw(true as DomContentEditable),
    hidden: rw(true),
    lang: rw(""),
    nonce: rw(""),
    tabIndex: rw(0),
    title: rw(""),
    id: rw(""),
    autocapitalize: rw("" as DomAutoCapitalize),
    autofocus: rw(true)
});

export type NaffAllTagProps = typeof allTagProps;

const formProperties = inferPartialMapOf<HTMLButtonElement>()({});

export const media = inferPartialMapOf<HTMLMediaElement>()({
    src: rw(""),
    crossOrigin: rw("" as DomCrossOrigin),
    autoplay: rw(true),
    controls: rw(true),
    currentTime: rw(0),
    defaultMuted: rw(true),
    defaultPlaybackRate: rw(0),
    disableRemotePlayback: rw(true),
    loop: rw(true),
    muted: rw(true),
    playbackRate: rw(0),
    preload: rw("" as DomPreload),
    srcObject: rw({} as MediaProvider),
    volume: rw(0)
});

export const props_input = inferPartialMapOf<
    HTMLTextAreaElement | HTMLInputElement
>()({
    defaultValue: rw(""),
    value: rw(""),
    name: rw("")
});

export const props_input_nonHidden = inferPartialMapOf<
    HTMLTextAreaElement | HTMLInputElement
>()({
    ...props_input,
    autofocus: rw(true),
    required: rw(true),
    disabled: rw(true),
    autocomplete: rw("")
});

export const props_input_option = inferPartialMapOf<HTMLInputElement>()({
    ...props_input_nonHidden,
    checked: rw(true),
    defaultChecked: rw(true),
    indeterminate: rw(true)
});

export const props_input_image = inferPartialMapOf<HTMLInputElement>()({
    ...props_input_nonHidden,
    alt: rw(""),
    src: rw(""),
    height: rw(0),
    width: rw(0),
    type: rw("")
});

export const props_input_file = inferPartialMapOf<HTMLInputElement>()({
    ...props_input_nonHidden,
    accept: rw(""),
    files: 666 as any
});

export const props_input_textOrNumber = inferPartialMapOf<
    HTMLTextAreaElement | HTMLInputElement
>()({
    ...props_input_nonHidden,
    readOnly: rw(true),
    placeholder: rw(""),
    required: rw(true),
    selection: selectionManager()
});

export const props_input_text = inferPartialMapOf<
    HTMLTextAreaElement | HTMLInputElement
>()({
    ...props_input_textOrNumber,
    autocapitalize: rw("")
});

export const props_input_nonTextArea = inferPartialMapOf<HTMLInputElement>()({
    ...props_input_text,
    pattern: rw("")
});

export const props_input_number = inferPartialMapOf<HTMLInputElement>()({
    ...props_input_textOrNumber,
    min: rw(""),
    max: rw(""),
    step: rw("")
});

const emptyTags = {} as Record<keyof DomTagMap, object>;

export type ReadWritable<T> = {
    type: "rw";
    val: T;
};

export interface SingleLookup<In, OutTag extends NaffTagNames> {
    type: "singleLookup";

    signature(input: In): OutTag;
}

export interface MultiLookup<In, OutTag extends NaffTagNames> {
    type: "multiLookup";

    signature(input: In): OutTag;
}

export interface ManyElements<T extends NaffTagNames> {
    type: "many";
    tag: T;
}

export interface SingleElement<T extends NaffTagNames> {
    type: "one";
    tag: T;
}

export interface MaybeSingleElement<T extends NaffTagNames> {
    type: "maybe";
    tag: T;
}

export type ReadOnly<T> = {
    type: "r";
    val: T;
};

export interface Subscope {
    readonly rw: unknown;
    readonly w: unknown;
}

export type SpecialSubscope<ScopeObject extends Subscope> = {
    type: "subscope";
    subscope: ScopeObject;
    innerPropName: string;
};

export type AnyType<T> =
    | ReadWritable<T>
    | ReadOnly<T>
    | SpecialSubscope<any>
    | ManyElements<NaffTagNames>
    | SingleElement<NaffTagNames>
    | MaybeSingleElement<NaffTagNames>
    | MultiLookup<unknown, NaffTagNames>
    | SingleLookup<unknown, NaffTagNames>;

export function ro<T>(v?: T): ReadOnly<T> {
    return {
        type: "r",
        val: v!
    };
}

export function manyElements<T extends NaffTagNames>(
    tagName: T
): ManyElements<T> {
    return {
        type: "many",
        tag: null! as T
    };
}

export function singleElement<T extends NaffTagNames>(
    tagName: T
): SingleElement<T> {
    return {
        type: "one",
        tag: null! as T
    };
}

export function maybeElement<T extends NaffTagNames>(
    tagName: T
): MaybeSingleElement<T> {
    return {
        type: "maybe",
        tag: null! as T
    };
}

export function lookupOne<InValue, OutTag extends NaffTagNames>(
    signature: (input: InValue) => OutTag
): SingleLookup<InValue, OutTag> {
    return {
        type: "singleLookup",
        signature: signature
    };
}

export function lookupMany<InValue, OutTag extends NaffTagNames>(
    signature: (input: InValue) => OutTag
): SingleLookup<InValue, OutTag> {
    return {
        type: "singleLookup",
        signature: signature
    };
}

export function tokenList(propName: string) {
    return subscope<{
        rw: NaffTokenManager;
        w: NafftokenWriter;
    }>(propName);
}

export function selectionManager() {
    return subscope<{
        rw: TextSelectionManager;
        w: TextSelectionWriter;
    }>("selection");
}

export function subscope<Scope extends Subscope>(
    listPropertyName: string
): SpecialSubscope<Scope> {
    return {
        type: "subscope",
        innerPropName: listPropertyName,
        subscope: null! as Scope
    };
}

export function rw<T>(v: T): ReadWritable<T> {
    return {
        type: "rw",
        val: v
    };
}

export function later<T>(v: T) {
    return null as any;
}

export const props_anchor = inferPartialMapOf<
    HTMLAreaElement | HTMLAnchorElement
>()({
    coords: rw(""),
    download: rw(""),
    href: rw(""),
    referrerPolicy: rw("" as ReferrerPolicy),
    target: rw(""),
    ping: rw(""),
    rel: tokenList("relList")
});

export function option(name: string | number): "option" {
    return "option";
}

// TODO: Tags - Add property lists for all tags.
export const naffTags = inferSubtypeOf<TagPropMap>()({
    ...emptyTags,
    "?": {} as Record<string, any>,
    a: {
        ...props_anchor,
        hreflang: rw("")
    },
    base: {
        href: rw(""),
        target: rw("")
    },
    area: {
        ...props_anchor,
        hreflang: rw(""),
        alt: rw("")
    },
    audio: media,
    video: media,
    button: {
        disabled: rw(true),
        name: rw(""),
        type: rw("" as DomButtonType),
        value: rw(""),
        labels: manyElements("label"),
        form: maybeElement("form")
    },
    canvas: {
        height: rw(0),
        width: rw(0)
    },
    data: {
        value: rw("")
    },
    dialog: {
        open: rw(true),
        returnValue: rw("")
    },
    embed: {
        src: rw(""),
        align: rw(""),
        height: rw(""),
        type: rw(""),
        width: rw("")
    },
    fieldset: {
        name: rw(""),
        disabled: rw(true)
    },
    form: {
        name: rw(""),
        target: rw(""),
        action: rw(""),
        method: rw(""),
        encoding: rw(""),
        acceptCharset: rw(""),
        autocomplete: rw("" as DomAutoComplete),
        noValidate: rw(true),
        elements: manyElements("" as NaffTagNames)
    },
    frameset: {
        cols: rw(""),
        rows: rw("")
    },
    hr: {
        align: rw(""),
        color: rw(""),
        noShade: rw(true),
        size: rw(""),
        width: rw("")
    },
    html: {},

    img: {
        src: rw(""),
        srcset: rw(""),
        referrerPolicy: rw(""),
        height: rw(0),
        alt: rw(""),
        crossOrigin: rw(""),
        isMap: rw(true),
        sizes: rw(""),
        width: rw(0),
        loading: rw("" as DomImageLoading),
        decoding: rw("" as DomImageDecoding),
        x: ro(0),
        y: ro(0),
        currentSrc: ro(""),
        useMap: rw(""),
        naturalHeight: ro(0),
        naturalWidth: ro(0),
        complete: ro(true)
    },
    iframe: {
        allow: rw(""),
        allowFullscreen: rw(true),
        allowPaymentRequest: rw(true),
        csp: rw(""),
        fetchPriority: rw("" as DomPriority),
        referrerPolicy: rw(""),
        sandbox: tokenList("sandbox"),
        src: rw(""),
        srcdoc: rw(""),
        height: rw(""),
        width: rw(""),
        name: rw("")
    },

    input: {
        ...props_input_image,
        ...props_input_file,
        ...props_input_number,
        ...props_input_nonTextArea
    },
    "input/button": props_input_nonHidden,
    "input/checkbox": props_input_option,
    "input/color": props_input_nonHidden,
    "input/date": props_input_text,
    "input/datetime-local": props_input_number,
    "input/email": props_input_nonTextArea,
    "input/file": props_input_file,
    "input/hidden": props_input,
    "input/image": props_input_image,
    "input/month": props_input_number,
    "input/number": props_input_number,
    "input/password": props_input_nonTextArea,
    "input/radio": props_input_option,
    "input/range": props_input_number,
    "input/reset": props_input_nonHidden,
    "input/search": props_input_nonTextArea,
    "input/submit": props_input_nonHidden,
    "input/tel": props_input_nonTextArea,
    "input/text": props_input_nonTextArea,
    "input/time": props_input_number,
    "input/url": props_input_nonTextArea,
    "input/week": props_input_number,
    li: {
        value: rw(0),
        type: rw("")
    },
    label: {
        htmlFor: rw("")
    },
    legend: {},
    link: {
        href: rw(""),
        type: rw(""),
        as: rw(""),
        disabled: rw(true),
        integrity: rw(""),
        crossOrigin: rw("" as DomCrossOrigin),
        rel: tokenList("relList"),
        media: rw(""),
        referrerPolicy: rw("" as ReferrerPolicy),
        imageSizes: rw(""),
        imageSrcset: rw(""),
        sizes: tokenList("sizes"),
        hreflang: rw("")
    },
    map: {
        name: rw("")
    },
    meta: {
        content: rw(""),
        name: rw(""),
        media: rw(""),
        httpEquiv: rw("")
    },
    meter: {
        value: rw(0),
        max: rw(0),
        min: rw(0),
        low: rw(0),
        high: rw(0),
        optimum: rw(0)
    },
    del: {
        cite: rw(""),
        dateTime: rw("")
    },
    ins: {
        cite: rw(""),
        dateTime: rw("")
    },
    ol: {
        type: rw(""),
        start: rw(0),
        reversed: rw(true)
    },
    object: {
        type: rw(""),
        height: rw(""),
        name: rw(""),
        width: rw(""),
        data: rw(""),
        declare: rw(true),
        standby: rw(""),
        useMap: rw("")
    },
    optgroup: {
        disabled: rw(true),
        label: rw("")
    },
    option: {
        value: rw(""),
        disabled: rw(true),
        selected: rw(true),
        defaultSelected: rw(true),
        form: singleElement("form"),
        index: ro(0),
        label: ro("")
    },
    output: {
        value: rw(""),
        defaultValue: rw(""),
        for: tokenList("htmlFor"),
        name: rw(""),
        labels: manyElements("label")
    },
    progress: {
        max: rw(0),
        position: rw(0),
        value: rw(1),
        labels: manyElements("label")
    },
    q: {
        cite: rw("")
    },
    blockquote: {
        cite: rw("")
    },
    script: {
        src: rw(""),
        type: rw(""),
        crossOrigin: rw("" as DomCrossOrigin),
        async: rw(true),
        referrerPolicy: rw("" as ReferrerPolicy),
        defer: rw(true),
        integrity: rw(""),
        noModule: rw(true),
        fetchPriority: rw("" as DomPriority)
    },
    select: {
        autocomplete: rw(""),
        disabled: rw(true),
        length: rw(0),
        name: rw(""),
        required: rw(true),
        size: rw(0),
        value: rw(""),
        labels: manyElements("label"),
        form: maybeElement("form"),
        multiple: rw(true),
        option: lookupOne((input: string | number) => "option"),
        options: lookupMany((input: "selected" | "unselected") => "option")
    },
    source: {
        media: rw(""),
        sizes: rw(""),
        height: rw(0),
        src: rw(""),
        srcset: rw(""),
        type: rw(""),
        width: rw(0)
    },
    style: {
        media: rw(""),
        type: rw(""),
        disabled: rw(true),
        sheet: 666 as never
    },
    td: {
        abbr: rw(""),
        colSpan: rw(0),
        rowSpan: rw(0),
        scope: rw("" as DomTableScope),
        headers: rw(""),
        cellIndex: ro(0)
    },
    table: {
        caption: maybeElement("caption"),
        tHead: maybeElement("thead"),
        tFoot: maybeElement("tfoot"),
        rows: manyElements("tr"),
        tBodies: manyElements("tbody")
    },
    template: {
        content: 667 as any
    },
    textarea: {
        ...props_input_text
    },
    time: {
        dateTime: rw("")
    },
    title: {},
    track: {
        kind: rw("" as DomTrackKind),
        src: rw(""),
        srclang: rw(""),
        label: rw(""),
        default: rw(true),
        readyState: ro(0 as DomTrackReadyState),
        track: ro(null! as TextTrack)
    },
    ul: {}
});

export type NaffTags = {
    [key in keyof typeof naffTags]: typeof naffTags[key] & NaffAllTagProps;
};

export type PropNames<TagName extends NaffTagNames> = Extract<
    keyof (NaffTags[TagName] & NaffAllTagProps),
    string
>;

export type SinglePropManager<Tag extends NaffTagNames> = {
    [prop in PropNames<Tag>]: NaffTags[Tag][prop] extends ReadWritable<infer R>
        ? {
              (): R;
              (input: R): NaffOne<Tag>;
          }
        : NaffTags[Tag][prop] extends ReadOnly<infer R>
        ? {
              readonly [p in prop]: R;
          }
        : NaffTags[Tag][prop] extends SpecialSubscope<infer S>
        ? {
              <Out>(special: (tokenList: S["rw"]) => Out): Out extends S["rw"]
                  ? NaffOne<Tag>
                  : Out;
          }
        : NaffTags[Tag][prop] extends ManyElements<infer T>
        ? NaffMany<T>
        : NaffTags[Tag][prop] extends SingleElement<infer T>
        ? NaffOne<T>
        : NaffTags[Tag][prop] extends MaybeSingleElement<infer T>
        ? NaffOne<T> | null
        : NaffTags[Tag][prop] extends SingleLookup<infer In, infer Out>
        ? (input: In) => NaffOne<Out>
        : NaffTags[Tag][prop] extends MultiLookup<infer In, infer Out>
        ? (input: In) => NaffMany<Out>
        : never;
};

export type MultiPropManager<Tag extends NaffTagNames> = {
    [prop in PropNames<Tag>]: {
        (x: NaffTags[Tag][prop]): NaffTags[Tag][prop] extends ReadWritable<
            infer R
        >
            ? {
                  (input: R): NaffOne<Tag>;
              }
            : NaffTags[Tag][prop] extends SpecialSubscope<infer S>
            ? {
                  (special: (tokenList: S) => unknown): NaffMany<Tag>;
              }
            : NaffTags[Tag][prop] extends
                  | ManyElements<infer T>
                  | SingleElement<infer T>
                  | MaybeSingleElement<infer T>
            ? NaffMany<T>
            : never;
    };
};

const a: NaffOne<"input"> = null!;

a.selection(s => s.end(3).start(5));
let z: HTMLElement;

a.selection(s => s.start(1).end(5));

a.$offset.top;
a.$client.left;
a.$client.top;
