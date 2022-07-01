import {
    rw,
    subscope,
    tagMap,
    elements,
    maybeElement,
    ro,
    tag,
    element
} from "./schema-types";
import { NaffTagMap } from "./tags";
import { TypeSource } from "./type-source";

const sourceDom = new TypeSource("./dom-types");
const sourceSubscope = new TypeSource("./subscopes");
const sourceAmbient = new TypeSource(undefined);
const typeDomPreload = sourceDom.createRef("DomPreload");
const typeMediaProvider = sourceAmbient.createRef("MediaProvider");
const typeSelectionSubscope = sourceSubscope.createRef("SelectionSubscope");
const typeDomCrossOrigin = sourceDom.createRef("DomCrossOrigin");
const typeTokenList = sourceSubscope.createRef("TokenSubscope");
const typeReferrerPolicy = sourceAmbient.createRef("ReferrerPolicy");
const typeDomButtonType = sourceDom.createRef("DomButtonType");
export const tokenList = (p: string) => subscope(typeTokenList);

export const media = tag<"audio" | "video">({
    src: rw(""),
    crossOrigin: rw(typeDomCrossOrigin),
    autoplay: rw(true),
    controls: rw(true),
    currentTime: rw(0),
    defaultMuted: rw(true),
    defaultPlaybackRate: rw(0),
    disableRemotePlayback: rw(true),
    loop: rw(true),
    muted: rw(true),
    playbackRate: rw(0),
    preload: rw(typeDomPreload),
    srcObject: rw(typeMediaProvider),
    volume: rw(0)
});

type AnyInput = "input" | "textarea";

export const schAllTags = tag<keyof NaffTagMap>({
    dir: rw(sourceDom.createRef("DomDir")),
    accessKey: rw(""),
    contentEditable: rw(sourceDom.createRef("DomContentEditable")),
    hidden: rw(true),
    lang: rw(""),
    nonce: rw(""),
    tabIndex: rw(0),
    title: rw(""),
    id: rw(""),
    autocapitalize: rw(sourceDom.createRef("DomAutoCapitalize")),
    autofocus: rw(true)
});

export const schInput = tag<AnyInput>({
    defaultValue: rw(""),
    value: rw(""),
    name: rw("")
});

export const schInputNonHidden = tag<AnyInput>({
    ...schInput,
    autofocus: rw(true),
    required: rw(true),
    disabled: rw(true),
    autocomplete: rw("")
});

export const schInputOption = tag<AnyInput>({
    ...schInputNonHidden,
    checked: rw(true),
    defaultChecked: rw(true),
    indeterminate: rw(true)
});

export const schInputImage = tag<AnyInput>({
    ...schInputNonHidden,
    alt: rw(""),
    src: rw(""),
    height: rw(0),
    width: rw(0),
    type: rw("")
});

export const schInputFile = tag<AnyInput>({
    ...schInputNonHidden,
    accept: rw(""),
    files: 666 as any
});

export const schInputTextOrNumber = tag<AnyInput>({
    ...schInputNonHidden,
    readOnly: rw(true),
    placeholder: rw(""),
    required: rw(true),
    selection: subscope(typeSelectionSubscope)
});

export const schInputText = tag<AnyInput>({
    ...schInputTextOrNumber
});

export const schInputTextOnly = tag<AnyInput>({
    ...schInputText,
    pattern: rw("")
});

export const schInputNumber = tag<AnyInput>({
    ...schInputTextOrNumber,
    min: rw(""),
    max: rw(""),
    step: rw("")
});

export const schAnchorAny = tag<"a" | "area" | "link">({
    rel: tokenList("relList"),
    href: rw(""),
    referrerPolicy: rw(typeReferrerPolicy),
    target: rw("")
});

export const schAnchorOrArea = tag<"a" | "area">({
    ...schAnchorAny,
    coords: rw(""),
    download: rw(""),
    ping: rw("")
});

// TODO: Tags - Add property lists for all tags.
export const schMapNaff = tagMap({
    a: {
        ...schAnchorOrArea,
        hreflang: rw("")
    },
    base: {
        href: rw(""),
        target: rw("")
    },
    area: {
        ...schAnchorOrArea,
        alt: rw("")
    },
    audio: media,
    video: media,
    button: {
        disabled: rw(true),
        name: rw(""),
        type: rw(typeDomButtonType),
        value: rw(""),
        labels: elements("label"),
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
        autocomplete: rw(sourceDom.createRef("DomAutoComplete")),
        noValidate: rw(true),
        elements: elements()
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
        referrerPolicy: rw(typeReferrerPolicy),
        height: rw(0),
        alt: rw(""),
        crossOrigin: rw(""),
        isMap: rw(true),
        sizes: rw(""),
        width: rw(0),
        loading: rw(sourceDom.createRef("DomImageLoading")),
        decoding: rw(sourceDom.createRef("DomImageDecoding")),
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
        fetchPriority: rw(sourceDom.createRef("DomPriority")),
        referrerPolicy: rw(typeReferrerPolicy),
        sandbox: tokenList("sandbox"),
        src: rw(""),
        srcdoc: rw(""),
        height: rw(""),
        width: rw(""),
        name: rw("")
    },

    input: {
        ...schInputImage,
        ...schInputFile,
        ...schInputNumber,
        ...schInputTextOnly
    },
    "input/button": schInputNonHidden,
    "input/checkbox": schInputOption,
    "input/color": schInputNonHidden,
    "input/date": schInputTextOnly,
    "input/datetime-local": schInputNumber,
    "input/email": schInputTextOnly,
    "input/file": schInputFile,
    "input/hidden": schInput,
    "input/image": schInputImage,
    "input/month": schInputNumber,
    "input/number": schInputNumber,
    "input/password": schInputTextOnly,
    "input/radio": schInputOption,
    "input/range": schInputNumber,
    "input/reset": schInputNonHidden,
    "input/search": schInputTextOnly,
    "input/submit": schInputNonHidden,
    "input/tel": schInputTextOnly,
    "input/text": schInputTextOnly,
    "input/time": schInputNumber,
    "input/url": schInputTextOnly,
    "input/week": schInputNumber,
    li: {
        value: rw(0),
        type: rw("")
    },
    label: {
        htmlFor: rw("")
    },
    legend: {},
    link: {
        ...schAnchorAny,
        type: rw(""),
        as: rw(""),
        disabled: rw(true),
        integrity: rw(""),
        crossOrigin: rw(sourceDom.createRef("DomCrossOrigin")),
        media: rw(""),
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
        form: element("form"),
        index: ro(0),
        label: ro("")
    },
    output: {
        value: rw(""),
        defaultValue: rw(""),
        for: tokenList("htmlFor"),
        name: rw(""),
        labels: elements("label")
    },
    progress: {
        max: rw(0),
        position: rw(0),
        value: rw(1),
        labels: elements("label")
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
        crossOrigin: rw(typeDomCrossOrigin),
        async: rw(true),
        referrerPolicy: rw(typeReferrerPolicy),
        defer: rw(true),
        integrity: rw(""),
        noModule: rw(true),
        fetchPriority: rw(sourceDom.createRef("DomPriority"))
    },
    select: {
        autocomplete: rw(""),
        disabled: rw(true),
        length: rw(0),
        name: rw(""),
        required: rw(true),
        size: rw(0),
        value: rw(""),
        labels: elements("label"),
        form: maybeElement("form"),
        multiple: rw(true)
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
        scope: rw(sourceDom.createRef("DomTableScope")),
        headers: rw(""),
        cellIndex: ro(0)
    },
    table: {
        caption: maybeElement("caption"),
        tHead: maybeElement("thead"),
        tFoot: maybeElement("tfoot"),
        rows: elements("tr"),
        tBodies: elements("tbody")
    },
    template: {
        content: 667 as any
    },
    textarea: {
        ...schInputText
    },
    time: {
        dateTime: rw("")
    },
    title: {},
    track: {
        kind: rw(sourceDom.createRef("DomTrackKind")),
        src: rw(""),
        srclang: rw(""),
        label: rw(""),
        default: rw(true),
        readyState: ro(sourceDom.createRef("DomTrackReadyState")),
        track: ro(sourceAmbient.createRef("TextTrack"))
    },
    ul: {},
    wbr: {},
    var: {},
    u: {},
    tr: {},
    th: {},
    tfoot: {},
    sup: {},
    summary: {},
    sub: {},
    strong: {},
    span: {},
    small: {},
    slot: {},
    section: {},
    samp: {},
    ruby: {},
    rt: {},
    rp: {},
    pre: {},
    picture: {},
    param: {},
    p: {},
    noscript: {},
    nav: {},
    menu: {},
    marquee: {},
    mark: {},
    main: {},
    kbd: {},
    i: {},
    hgroup: {},
    header: {},
    head: {},
    h6: {},
    h5: {},
    h4: {},
    h3: {},
    h2: {},
    h1: {},
    frame: {},
    footer: {},
    font: {},
    figure: {},
    figcaption: {},
    em: {},
    dt: {},
    dl: {},
    div: {},
    dir: {},
    dfn: {},
    details: {},
    dd: {},
    datalist: {},
    tbody: {},
    colgroup: {},
    col: {},
    code: {},
    cite: {},
    br: {},
    body: {},
    bdo: {},
    bdi: {},
    b: {},
    aside: {},
    article: {},
    address: {},
    abbr: {},
    s: {},
    caption: {},
    thead: {},
    "?": {}
});
