import { NaffMany, NaffOne } from "../index";
import { infer, LookupOrUnknown } from "../util";
import { keys } from "lodash";

export type DomTag = HTMLElement;
export type DomTagMap = HTMLElementTagNameMap;
export type DomTagNames = keyof DomTagMap;
export type DomInputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "week";

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
        [prop in NaffExclusiveProps<tag>]?: NaffTagMap[tag][prop];
    };
};
export type DomTrackKind =
    | "subtitles"
    | "captions"
    | "descriptions"
    | "chapters"
    | "metadata"
    | "";
export type DomDir = "ltr" | "rtl" | "auto" | "";
export type DomContentEditable = true | false | "inherit";
export type DomAutoCapitalize =
    | "off"
    | "none"
    | "on"
    | "sentences"
    | "words"
    | "characters"
    | "";
export type DomCrossOrigin = "anonymous" | "use-credentials" | "";
export type DomPreload = "none" | "metadata" | "auto" | "";
export type DomButtonType = "submit" | "reset" | "button" | "menu" | "";
export type DomAutoComplete = "on" | "off" | "";
export type DomPriority = "high" | "low" | "auto" | "";
export type DomSelectionDir = "forward" | "backward" | "none";
export type DomTableScope = "col" | "colgroup" | "row" | "rowgroup" | "";

function inferMap<E>() {
    return infer<Partial<Record<keyof E, any>>>();
}

export const allTagProps = inferMap<HTMLElement>()({
    dir: "" as DomDir,
    accessKey: "",
    contentEditable: true as DomContentEditable,
    hidden: true,
    lang: "",
    nonce: "",
    tabIndex: 0,
    title: "",
    id: "",
    autocapitalize: "" as DomAutoCapitalize,
    autofocus: true
});

export type NaffAllTagProps = typeof allTagProps;

const formProperties = inferMap<HTMLButtonElement>()({
    formAction: "",
    formEnctype: "",
    formMethod: "",
    formNoValidate: true,
    formTarget: ""
});

export const media = inferMap<HTMLMediaElement>()({
    src: "",
    crossOrigin: "" as DomCrossOrigin,
    autoplay: true,
    controls: true,
    currentTime: 0,
    defaultMuted: true,
    defaultPlaybackRate: 0,
    disableRemotePlayback: true,
    loop: true,
    muted: true,
    playbackRate: 0,
    preload: "" as DomPreload,
    srcObject: {} as MediaProvider,
    volume: 0
});

export const inputCommon = inferMap<HTMLTextAreaElement | HTMLInputElement>()({
    defaultValue: "",
    value: "",
    name: "",
    ...formProperties
});

export const inputNonHidden = inferMap<
    HTMLTextAreaElement | HTMLInputElement
>()({
    ...inputCommon,
    autofocus: true,
    required: true,
    disabled: true,
    autocomplete: ""
});

const inputOption = inferMap<HTMLInputElement>()({
    ...inputNonHidden,
    checked: true,
    defaultChecked: true,
    indeterminate: true
});

const inputImage = inferMap<HTMLInputElement>()({
    ...inputNonHidden,
    alt: "",
    src: "",
    height: 0,
    width: 0,
    type: ""
});

const inputFile = inferMap<HTMLInputElement>()({
    ...inputNonHidden,
    accept: "",
    files: 666 as any
});

export const inputTextOrNumber = inferMap<
    HTMLTextAreaElement | HTMLInputElement
>()({
    ...inputNonHidden,
    readOnly: true,
    placeholder: "",
    required: true,
    selectionEnd: 0,
    selectionStart: 0,
    selectionDirection: "forward" as DomSelectionDir
});

export const inputText = inferMap<HTMLTextAreaElement | HTMLInputElement>()({
    ...inputTextOrNumber,
    selectionEnd: 0,
    selectionStart: 0,
    selectionDirection: "forward" as DomSelectionDir,
    autocapitalize: ""
});

export const inputTextNonArea = inferMap<HTMLInputElement>()({
    ...inputText,
    pattern: ""
});

const inputNumber = inferMap<HTMLInputElement>()({
    ...inputTextOrNumber,
    min: "",
    max: "",
    step: ""
});

const emptyTags = {} as Record<keyof DomTagMap, object>;

// TODO: Tags - Add property lists for all tags.
export const naffTags = infer<TagPropMap>()({
    ...emptyTags,
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
    html: {},
    "?": {} as Record<string, any>,
    a: {
        download: "",
        href: "",
        referrerPolicy: "" as ReferrerPolicy,
        text: "",
        target: "",
        rel: "",
        type: "",
        ping: ""
    },
    base: {
        href: "",
        target: ""
    },
    area: {
        alt: "",
        coords: "",
        download: "",
        href: "",
        referrerPolicy: "" as ReferrerPolicy,
        rel: "",
        target: "",
        ping: ""
    },
    audio: media,
    video: media,
    button: {
        disabled: true,
        name: "",
        type: "" as DomButtonType,
        value: "",
        ...formProperties
    },
    canvas: {
        height: 0,
        width: 0
    },
    data: {
        value: ""
    },
    dialog: {
        open: true,
        returnValue: ""
    },
    embed: {
        src: "",
        align: "",
        height: "",
        type: "",
        width: ""
    },
    fieldset: {
        name: "",
        disabled: true
    },
    form: {
        name: "",
        target: "",
        action: "",
        method: "",
        encoding: "",
        acceptCharset: "",
        autocomplete: "" as DomAutoComplete,
        noValidate: true
    },
    frameset: {
        cols: "",
        rows: ""
    },
    hr: {
        align: "",
        color: "",
        noShade: true,
        size: "",
        width: ""
    },
    iframe: {
        allow: "",
        allowFullscreen: true,
        //allowPaymentRequest: true,
        //csp: "",
        //fetchPriority: "" as DomPriority,
        referrerPolicy: "",
        sandbox: 666 as any,
        //featurePolicy: 666 as any,
        src: "",
        srcdoc: "",
        height: "",
        width: ""
    },

    input: {
        ...inputImage,
        ...inputFile,
        ...inputNumber,
        ...inputTextNonArea
    },
    "input/button": inputNonHidden,
    "input/checkbox": inputOption,
    "input/color": inputNonHidden,
    "input/date": inputText,
    "input/datetime-local": inputNumber,
    "input/email": inputTextNonArea,
    "input/file": inputFile,
    "input/hidden": inputCommon,
    "input/image": inputImage,
    "input/month": inputNumber,
    "input/number": inputNumber,
    "input/password": inputTextNonArea,
    "input/radio": inputOption,
    "input/range": inputNumber,
    "input/reset": inputNonHidden,
    "input/search": inputTextNonArea,
    "input/submit": inputNonHidden,
    "input/tel": inputTextNonArea,
    "input/text": inputTextNonArea,
    "input/time": inputNumber,
    "input/url": inputTextNonArea,
    "input/week": inputNumber,
    li: {
        value: 0,
        type: ""
    },
    label: {
        htmlFor: ""
    },
    legend: {},
    link: {
        href: "",
        type: "",
        as: "",
        disabled: true,
        integrity: "",
        crossOrigin: "" as DomCrossOrigin,
        rel: "",
        media: "",
        referrerPolicy: "" as ReferrerPolicy,
        imageSizes: "",
        imageSrcset: ""
    },
    map: {
        name: ""
    },
    meta: {
        content: "",
        name: "",
        media: "",
        httpEquiv: ""
    },
    meter: {
        value: 0,
        max: 0,
        min: 0,
        low: 0,
        high: 0,
        optimum: 0
    },
    del: {
        cite: "",
        dateTime: ""
    },
    ins: {
        cite: "",
        dateTime: ""
    },
    ol: {
        type: "",
        start: 0,
        reversed: true
    },
    object: {
        type: "",
        height: "",
        name: "",
        width: "",
        data: "",
        declare: true,
        standby: "",
        useMap: ""
    },
    optgroup: {
        disabled: true,
        label: ""
    },
    option: {
        value: "",
        disabled: true,
        selected: true,
        defaultSelected: true
    },
    output: {
        value: "",
        defaultValue: "",
        htmlFor: 666 as any,
        name: ""
    },
    progress: {
        max: 0,
        position: 0,
        value: 1
    },
    q: {
        cite: ""
    },
    blockquote: {
        cite: ""
    },
    script: {
        src: "",
        type: "",
        crossOrigin: "" as DomCrossOrigin,
        async: true,
        referrerPolicy: "" as ReferrerPolicy,
        defer: true,
        integrity: "",
        noModule: true
        //fetchPriority: "" as DomPriority
    },
    select: {
        autofocus: true,
        autocomplete: "",
        disabled: true,
        length: 0,
        name: "",
        required: true,
        selectedIndex: 0,
        size: 0,
        value: ""
    },
    source: {
        media: "",
        sizes: "",
        height: 0,
        src: "",
        srcset: "",
        type: ""
    },
    style: {
        media: "",
        type: "",
        disabled: true,
        sheet: 666 as any
    },
    td: {
        abbr: "",
        colSpan: 0,
        rowSpan: 0,
        scope: "" as DomTableScope,
        headers: 666 as any
    },
    table: {
        caption: 666 as any,
        tHead: 667 as any,
        tFoot: 667 as any,
        rows: 666 as any,
        tBodies: 666 as any
    },
    template: {
        content: 667 as any
    },
    textarea: {
        ...inputText
    },
    time: {
        dateTime: ""
    },
    title: {
        // same as textContent
        // text: ""
    },
    track: {
        kind: "" as DomTrackKind,
        src: "",
        srclang: "",
        label: "",
        default: true
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
    [prop in PropNames<Tag>]: {
        (): NaffTags[Tag][prop];
        (x: NaffTags[Tag][prop]): NaffOne<Tag>;
    };
};

export type MultiPropManager<Tag extends NaffTagNames> = {
    [prop in PropNames<Tag>]: {
        (): NaffTags[Tag][prop];
        (x: NaffTags[Tag][prop]): NaffOne<Tag>;
    };
};
