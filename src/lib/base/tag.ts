import { NaffMany, NaffOne } from "../index";
import { infer, LookupOrUnknown } from "../util";

export type DomTag = HTMLElement;
export type DomTagMap = HTMLElementTagNameMap & {
    "?": HTMLElement;
};
export type DomTagNames = keyof DomTagMap | "?";
export type DomInputType =
    "button"
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
export type TagPropMap = {
    [tag in DomTagNames]?: {
        [prop in Exclude<keyof DomTagMap[tag], keyof DomTag> | string]?: prop extends keyof DomTagMap[tag] ? DomTagMap[tag][prop] : any
    };
} & {
    [type in DomInputType as `input/${type}`]: Partial<HTMLInputElement>
};

export type DomDir = "ltr" | "rtl" | "auto" | "";
export type DomContentEditable = true | false | "inherit";

export type DomCrossOrigin = "anonymous" | "use-credentials" | "";
export type DomPreload = "none" | "metadata" | "auto" | "";
export type DomButtonType = "submit" | "reset" | "button" | "menu" | "";
export type DomAutoComplete = "on" | "off" | "";
export type DomPriority = "high" | "low" | "auto" | "";
export type DomSelectionDir = "forward" | "backward" | "none" | null;
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
    id: ""
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
    autocapitalize: "",
    defaultValue: "",
    value: "",
    name: "",
    ...formProperties
});

export const inputNonHidden = inferMap<HTMLTextAreaElement | HTMLInputElement>()({
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

export const inputTextOrNumber = inferMap<HTMLTextAreaElement | HTMLInputElement>()({
    ...inputNonHidden,
    readOnly: true,
    placeholder: "",
    required: true,
    selectionEnd: 0,
    selectionStart: 0,
    selectionDirection: "forward" as DomSelectionDir,
    tabIndex: 0
});

export const inputText = inferMap<HTMLTextAreaElement | HTMLInputElement>()({
    ...inputTextOrNumber,
    selectionEnd: 0,
    selectionStart: 0,
    selectionDirection: "forward" as DomSelectionDir
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


export const emptyDefs = {} as {
    [tag in keyof TagPropMap]: TagPropMap[tag]
};

// TODO: Tags - Add property lists for all tags.
export const naffTags = infer<TagPropMap>()({
    ...emptyDefs,
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
        accessKey: "",
        download: "",
        href: "",
        referrerPolicy: "" as ReferrerPolicy,
        text: "",
        target: "",
        rel: "",
        tabIndex: 0,
        type: "",
        ping: ""
    },
    base: {
        href: "",
        target: ""
    },
    area: {
        accessKey: "",
        alt: "",
        coords: "",
        download: "",
        href: "",
        referrerPolicy: "" as ReferrerPolicy,
        rel: "",
        target: "",
        ping: ""
    },
    audio: {
        ...media
    },
    video: {
        ...media
    },
    button: {
        accessKey: "",
        autofocus: true,
        disabled: true,
        name: "",
        tabIndex: 0,
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
        allowPaymentRequest: true,
        csp: "",
        fetchPriority: "" as DomPriority,
        referrerPolicy: "",
        sandbox: 666 as any,
        featurePolicy: 666 as any,
        src: "",
        srcdoc: "",
        height: "",
        width: ""
    },
    "input/button": {
        ...inputNonHidden
    },
    "input/checkbox": {
        ...inputOption
    },
    "input/color": {
        ...inputNonHidden
    },
    "input/date": {
        ...inputText
    },
    "input/datetime-local": {
        ...inputNumber
    },
    "input/email": {
        ...inputTextNonArea
    },
    "input/file": {
        ...inputFile
    },
    "input/hidden": {
        ...inputCommon
    },
    "input/image": {
        ...inputImage
    },
    "input/month": {
        ...inputNumber
    },
    "input/number": { ...inputNumber },
    "input/password": { ...inputTextNonArea },
    "input/radio": { ...inputOption },
    "input/range": { ...inputNumber },
    "input/reset": { ...inputNonHidden },
    "input/search": { ...inputTextNonArea },
    "input/submit": { ...inputNonHidden },
    "input/tel": { ...inputTextNonArea },
    "input/text": { ...inputTextNonArea },
    "input/time": { ...inputNumber },
    "input/url": { ...inputTextNonArea },
    "input/week": { ...inputNumber }

    input: {
        src: "",
        autocomplete: "" as DomAutoComplete,
        defaultValue: "",
        dirName: "",
        inputmode: "",
        multiple: true,
        name: "",
        step: "",
        type: "",
        value: "",
        valueAsDate: new Date() as Date | null,
        valueAsNumber: 0,
        autofocus: true,
        hidden: true,
        required: true,
        checked: true,
        defaultChecked: true,
        indeterminate: true,
        alt: "",
        height: 0,
        width: 0,
        accept: "",
        disabled: true,
        size: 0,
        max: "",
        min: "",
        maxLength: 0,
        minLength: 0,

        readOnly: true,

        ...formProperties
    },
    li: {
        value: 0,
        type: ""
    },
    label: {
        htmlFor: ""
    },
    legend: {
        accessKey: ""
    },
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
        noModule: true,
        fetchPriority: "" as DomPriority
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
        caption: "",
        tHead: 667 as any,
        tFoot: 667 as any,
        rows: 666 as any,
        tBodies: 666 as any
    },
    template: {
        content: 667 as any
    },
    textarea: {}
});

export type NaffTags = {
    [key in keyof typeof naffTags]: typeof naffTags[key] & NaffAllTagProps;
};
export type NaffTagNames = keyof NaffTags;

export type PropNames<TagName extends NaffTagNames> = Extract<keyof (NaffTags[TagName] & NaffAllTagProps),
    string>;

export type SinglePropManager<Tag extends NaffTagNames> = {
    [prop in PropNames<Tag>]: {
        (): NaffTags[Tag][prop];
        (x: NaffTags[Tag][prop]): NaffOne<Tag>;
    };
};

export type MultiPropManager<Tag extends NaffTagNames> = {
    [prop in PropNames<Tag>]: {
        (x: NaffTags[Tag][prop]): NaffMany<Tag>;
    };
};

const x = 0 as NaffOne<"input/checkbox">;

"input/checkbox";
:
HTMLInputElement;


const a: NaffOne<"input"> = null as any;
