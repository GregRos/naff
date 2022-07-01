import { TokenSubscope, SelectionSubscope } from "./subscopes";
import { DomCrossOrigin, DomPreload, DomButtonType, DomAutoComplete, DomImageLoading, DomImageDecoding, DomPriority, DomTableScope, DomTrackKind, DomTrackReadyState, DomDir, DomContentEditable, DomAutoCapitalize } from "./dom-types";
import { Naff, NaffBase } from "./naff";
import { Naffs } from "./naffs";

export interface NaffTagMap {
    "a": Naff_a;
    "base": Naff_base;
    "area": Naff_area;
    "audio": Naff_audio;
    "video": Naff_video;
    "button": Naff_button;
    "canvas": Naff_canvas;
    "data": Naff_data;
    "dialog": Naff_dialog;
    "embed": Naff_embed;
    "fieldset": Naff_fieldset;
    "form": Naff_form;
    "frameset": Naff_frameset;
    "hr": Naff_hr;
    "html": Naff_html;
    "img": Naff_img;
    "iframe": Naff_iframe;
    "input": Naff_input;
    "input/button": Naff_input_button;
    "input/checkbox": Naff_input_checkbox;
    "input/color": Naff_input_color;
    "input/date": Naff_input_date;
    "input/datetime-local": Naff_input_datetime_local;
    "input/email": Naff_input_email;
    "input/file": Naff_input_file;
    "input/hidden": Naff_input_hidden;
    "input/image": Naff_input_image;
    "input/month": Naff_input_month;
    "input/number": Naff_input_number;
    "input/password": Naff_input_password;
    "input/radio": Naff_input_radio;
    "input/range": Naff_input_range;
    "input/reset": Naff_input_reset;
    "input/search": Naff_input_search;
    "input/submit": Naff_input_submit;
    "input/tel": Naff_input_tel;
    "input/text": Naff_input_text;
    "input/time": Naff_input_time;
    "input/url": Naff_input_url;
    "input/week": Naff_input_week;
    "li": Naff_li;
    "label": Naff_label;
    "legend": Naff_legend;
    "link": Naff_link;
    "map": Naff_map;
    "meta": Naff_meta;
    "meter": Naff_meter;
    "del": Naff_del;
    "ins": Naff_ins;
    "ol": Naff_ol;
    "object": Naff_object;
    "optgroup": Naff_optgroup;
    "option": Naff_option;
    "output": Naff_output;
    "progress": Naff_progress;
    "q": Naff_q;
    "blockquote": Naff_blockquote;
    "script": Naff_script;
    "select": Naff_select;
    "source": Naff_source;
    "style": Naff_style;
    "td": Naff_td;
    "table": Naff_table;
    "template": Naff_template;
    "textarea": Naff_textarea;
    "time": Naff_time;
    "title": Naff_title;
    "track": Naff_track;
    "ul": Naff_ul;
    "wbr": Naff_wbr;
    "var": Naff_var;
    "u": Naff_u;
    "tr": Naff_tr;
    "th": Naff_th;
    "tfoot": Naff_tfoot;
    "sup": Naff_sup;
    "summary": Naff_summary;
    "sub": Naff_sub;
    "strong": Naff_strong;
    "span": Naff_span;
    "small": Naff_small;
    "slot": Naff_slot;
    "section": Naff_section;
    "samp": Naff_samp;
    "ruby": Naff_ruby;
    "rt": Naff_rt;
    "rp": Naff_rp;
    "pre": Naff_pre;
    "picture": Naff_picture;
    "param": Naff_param;
    "p": Naff_p;
    "noscript": Naff_noscript;
    "nav": Naff_nav;
    "menu": Naff_menu;
    "marquee": Naff_marquee;
    "mark": Naff_mark;
    "main": Naff_main;
    "kbd": Naff_kbd;
    "i": Naff_i;
    "hgroup": Naff_hgroup;
    "header": Naff_header;
    "head": Naff_head;
    "h6": Naff_h6;
    "h5": Naff_h5;
    "h4": Naff_h4;
    "h3": Naff_h3;
    "h2": Naff_h2;
    "h1": Naff_h1;
    "frame": Naff_frame;
    "footer": Naff_footer;
    "font": Naff_font;
    "figure": Naff_figure;
    "figcaption": Naff_figcaption;
    "em": Naff_em;
    "dt": Naff_dt;
    "dl": Naff_dl;
    "div": Naff_div;
    "dir": Naff_dir;
    "dfn": Naff_dfn;
    "details": Naff_details;
    "dd": Naff_dd;
    "datalist": Naff_datalist;
    "tbody": Naff_tbody;
    "colgroup": Naff_colgroup;
    "col": Naff_col;
    "code": Naff_code;
    "cite": Naff_cite;
    "br": Naff_br;
    "body": Naff_body;
    "bdo": Naff_bdo;
    "bdi": Naff_bdi;
    "b": Naff_b;
    "aside": Naff_aside;
    "article": Naff_article;
    "address": Naff_address;
    "abbr": Naff_abbr;
    "s": Naff_s;
    "caption": Naff_caption;
    "thead": Naff_thead;
    "?": Naff__;
}

interface Naff__Common {
    dir(input: DomDir): this;
    dir(): DomDir;
    accessKey(input: string): this;
    accessKey(): string;
    contentEditable(input: DomContentEditable): this;
    contentEditable(): DomContentEditable;
    hidden(input: boolean): this;
    hidden(): boolean;
    lang(input: string): this;
    lang(): string;
    nonce(input: string): this;
    nonce(): string;
    tabIndex(input: number): this;
    tabIndex(): number;
    title(input: string): this;
    title(): string;
    id(input: string): this;
    id(): string;
    autocapitalize(input: DomAutoCapitalize): this;
    autocapitalize(): DomAutoCapitalize;
    autofocus(input: boolean): this;
    autofocus(): boolean;
}

export interface Naff_a extends NaffBase<"a">, Naff__Common {
    rel<R>(): R extends TokenSubscope ? this : R;
    href(input: string): this;
    href(): string;
    referrerPolicy(input: ReferrerPolicy): this;
    referrerPolicy(): ReferrerPolicy;
    target(input: string): this;
    target(): string;
    coords(input: string): this;
    coords(): string;
    download(input: string): this;
    download(): string;
    ping(input: string): this;
    ping(): string;
    hreflang(input: string): this;
    hreflang(): string;
}

export interface Naff_base extends NaffBase<"base">, Naff__Common {
    href(input: string): this;
    href(): string;
    target(input: string): this;
    target(): string;
}

export interface Naff_area extends NaffBase<"area">, Naff__Common {
    rel<R>(): R extends TokenSubscope ? this : R;
    href(input: string): this;
    href(): string;
    referrerPolicy(input: ReferrerPolicy): this;
    referrerPolicy(): ReferrerPolicy;
    target(input: string): this;
    target(): string;
    coords(input: string): this;
    coords(): string;
    download(input: string): this;
    download(): string;
    ping(input: string): this;
    ping(): string;
    alt(input: string): this;
    alt(): string;
}

export interface Naff_audio extends NaffBase<"audio">, Naff__Common {
    src(input: string): this;
    src(): string;
    crossOrigin(input: DomCrossOrigin): this;
    crossOrigin(): DomCrossOrigin;
    autoplay(input: boolean): this;
    autoplay(): boolean;
    controls(input: boolean): this;
    controls(): boolean;
    currentTime(input: number): this;
    currentTime(): number;
    defaultMuted(input: boolean): this;
    defaultMuted(): boolean;
    defaultPlaybackRate(input: number): this;
    defaultPlaybackRate(): number;
    disableRemotePlayback(input: boolean): this;
    disableRemotePlayback(): boolean;
    loop(input: boolean): this;
    loop(): boolean;
    muted(input: boolean): this;
    muted(): boolean;
    playbackRate(input: number): this;
    playbackRate(): number;
    preload(input: DomPreload): this;
    preload(): DomPreload;
    srcObject(input: MediaProvider): this;
    srcObject(): MediaProvider;
    volume(input: number): this;
    volume(): number;
}

export interface Naff_video extends NaffBase<"video">, Naff__Common {
    src(input: string): this;
    src(): string;
    crossOrigin(input: DomCrossOrigin): this;
    crossOrigin(): DomCrossOrigin;
    autoplay(input: boolean): this;
    autoplay(): boolean;
    controls(input: boolean): this;
    controls(): boolean;
    currentTime(input: number): this;
    currentTime(): number;
    defaultMuted(input: boolean): this;
    defaultMuted(): boolean;
    defaultPlaybackRate(input: number): this;
    defaultPlaybackRate(): number;
    disableRemotePlayback(input: boolean): this;
    disableRemotePlayback(): boolean;
    loop(input: boolean): this;
    loop(): boolean;
    muted(input: boolean): this;
    muted(): boolean;
    playbackRate(input: number): this;
    playbackRate(): number;
    preload(input: DomPreload): this;
    preload(): DomPreload;
    srcObject(input: MediaProvider): this;
    srcObject(): MediaProvider;
    volume(input: number): this;
    volume(): number;
}

export interface Naff_button extends NaffBase<"button">, Naff__Common {
    disabled(input: boolean): this;
    disabled(): boolean;
    name(input: string): this;
    name(): string;
    type(input: DomButtonType): this;
    type(): DomButtonType;
    value(input: string): this;
    value(): string;
    readonly labels: Naffs;
    readonly form: Naff<"form"> | null;
}

export interface Naff_canvas extends NaffBase<"canvas">, Naff__Common {
    height(input: number): this;
    height(): number;
    width(input: number): this;
    width(): number;
}

export interface Naff_data extends NaffBase<"data">, Naff__Common {
    value(input: string): this;
    value(): string;
}

export interface Naff_dialog extends NaffBase<"dialog">, Naff__Common {
    open(input: boolean): this;
    open(): boolean;
    returnValue(input: string): this;
    returnValue(): string;
}

export interface Naff_embed extends NaffBase<"embed">, Naff__Common {
    src(input: string): this;
    src(): string;
    align(input: string): this;
    align(): string;
    height(input: string): this;
    height(): string;
    type(input: string): this;
    type(): string;
    width(input: string): this;
    width(): string;
}

export interface Naff_fieldset extends NaffBase<"fieldset">, Naff__Common {
    name(input: string): this;
    name(): string;
    disabled(input: boolean): this;
    disabled(): boolean;
}

export interface Naff_form extends NaffBase<"form">, Naff__Common {
    name(input: string): this;
    name(): string;
    target(input: string): this;
    target(): string;
    action(input: string): this;
    action(): string;
    method(input: string): this;
    method(): string;
    encoding(input: string): this;
    encoding(): string;
    acceptCharset(input: string): this;
    acceptCharset(): string;
    autocomplete(input: DomAutoComplete): this;
    autocomplete(): DomAutoComplete;
    noValidate(input: boolean): this;
    noValidate(): boolean;
    readonly elements: Naffs;
}

export interface Naff_frameset extends NaffBase<"frameset">, Naff__Common {
    cols(input: string): this;
    cols(): string;
    rows(input: string): this;
    rows(): string;
}

export interface Naff_hr extends NaffBase<"hr">, Naff__Common {
    align(input: string): this;
    align(): string;
    color(input: string): this;
    color(): string;
    noShade(input: boolean): this;
    noShade(): boolean;
    size(input: string): this;
    size(): string;
    width(input: string): this;
    width(): string;
}

export interface Naff_html extends NaffBase<"html">, Naff__Common {
    
}

export interface Naff_img extends NaffBase<"img">, Naff__Common {
    src(input: string): this;
    src(): string;
    srcset(input: string): this;
    srcset(): string;
    referrerPolicy(input: ReferrerPolicy): this;
    referrerPolicy(): ReferrerPolicy;
    height(input: number): this;
    height(): number;
    alt(input: string): this;
    alt(): string;
    crossOrigin(input: string): this;
    crossOrigin(): string;
    isMap(input: boolean): this;
    isMap(): boolean;
    sizes(input: string): this;
    sizes(): string;
    width(input: number): this;
    width(): number;
    loading(input: DomImageLoading): this;
    loading(): DomImageLoading;
    decoding(input: DomImageDecoding): this;
    decoding(): DomImageDecoding;
    readonly x: number;
    readonly y: number;
    readonly currentSrc: string;
    useMap(input: string): this;
    useMap(): string;
    readonly naturalHeight: number;
    readonly naturalWidth: number;
    readonly complete: boolean;
}

export interface Naff_iframe extends NaffBase<"iframe">, Naff__Common {
    allow(input: string): this;
    allow(): string;
    allowFullscreen(input: boolean): this;
    allowFullscreen(): boolean;
    allowPaymentRequest(input: boolean): this;
    allowPaymentRequest(): boolean;
    csp(input: string): this;
    csp(): string;
    fetchPriority(input: DomPriority): this;
    fetchPriority(): DomPriority;
    referrerPolicy(input: ReferrerPolicy): this;
    referrerPolicy(): ReferrerPolicy;
    sandbox<R>(): R extends TokenSubscope ? this : R;
    src(input: string): this;
    src(): string;
    srcdoc(input: string): this;
    srcdoc(): string;
    height(input: string): this;
    height(): string;
    width(input: string): this;
    width(): string;
    name(input: string): this;
    name(): string;
}

export interface Naff_input extends NaffBase<"input">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    alt(input: string): this;
    alt(): string;
    src(input: string): this;
    src(): string;
    height(input: number): this;
    height(): number;
    width(input: number): this;
    width(): number;
    type(input: string): this;
    type(): string;
    accept(input: string): this;
    accept(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_button extends NaffBase<"input/button">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
}

export interface Naff_input_checkbox extends NaffBase<"input/checkbox">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    checked(input: boolean): this;
    checked(): boolean;
    defaultChecked(input: boolean): this;
    defaultChecked(): boolean;
    indeterminate(input: boolean): this;
    indeterminate(): boolean;
}

export interface Naff_input_color extends NaffBase<"input/color">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
}

export interface Naff_input_date extends NaffBase<"input/date">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_datetime_local extends NaffBase<"input/datetime-local">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
}

export interface Naff_input_email extends NaffBase<"input/email">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_file extends NaffBase<"input/file">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    accept(input: string): this;
    accept(): string;
}

export interface Naff_input_hidden extends NaffBase<"input/hidden">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
}

export interface Naff_input_image extends NaffBase<"input/image">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    alt(input: string): this;
    alt(): string;
    src(input: string): this;
    src(): string;
    height(input: number): this;
    height(): number;
    width(input: number): this;
    width(): number;
    type(input: string): this;
    type(): string;
}

export interface Naff_input_month extends NaffBase<"input/month">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
}

export interface Naff_input_number extends NaffBase<"input/number">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
}

export interface Naff_input_password extends NaffBase<"input/password">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_radio extends NaffBase<"input/radio">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    checked(input: boolean): this;
    checked(): boolean;
    defaultChecked(input: boolean): this;
    defaultChecked(): boolean;
    indeterminate(input: boolean): this;
    indeterminate(): boolean;
}

export interface Naff_input_range extends NaffBase<"input/range">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
}

export interface Naff_input_reset extends NaffBase<"input/reset">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
}

export interface Naff_input_search extends NaffBase<"input/search">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_submit extends NaffBase<"input/submit">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
}

export interface Naff_input_tel extends NaffBase<"input/tel">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_text extends NaffBase<"input/text">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_time extends NaffBase<"input/time">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
}

export interface Naff_input_url extends NaffBase<"input/url">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    pattern(input: string): this;
    pattern(): string;
}

export interface Naff_input_week extends NaffBase<"input/week">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
    min(input: string): this;
    min(): string;
    max(input: string): this;
    max(): string;
    step(input: string): this;
    step(): string;
}

export interface Naff_li extends NaffBase<"li">, Naff__Common {
    value(input: number): this;
    value(): number;
    type(input: string): this;
    type(): string;
}

export interface Naff_label extends NaffBase<"label">, Naff__Common {
    htmlFor(input: string): this;
    htmlFor(): string;
}

export interface Naff_legend extends NaffBase<"legend">, Naff__Common {
    
}

export interface Naff_link extends NaffBase<"link">, Naff__Common {
    rel<R>(): R extends TokenSubscope ? this : R;
    href(input: string): this;
    href(): string;
    referrerPolicy(input: ReferrerPolicy): this;
    referrerPolicy(): ReferrerPolicy;
    target(input: string): this;
    target(): string;
    type(input: string): this;
    type(): string;
    as(input: string): this;
    as(): string;
    disabled(input: boolean): this;
    disabled(): boolean;
    integrity(input: string): this;
    integrity(): string;
    crossOrigin(input: DomCrossOrigin): this;
    crossOrigin(): DomCrossOrigin;
    media(input: string): this;
    media(): string;
    imageSizes(input: string): this;
    imageSizes(): string;
    imageSrcset(input: string): this;
    imageSrcset(): string;
    sizes<R>(): R extends TokenSubscope ? this : R;
    hreflang(input: string): this;
    hreflang(): string;
}

export interface Naff_map extends NaffBase<"map">, Naff__Common {
    name(input: string): this;
    name(): string;
}

export interface Naff_meta extends NaffBase<"meta">, Naff__Common {
    content(input: string): this;
    content(): string;
    name(input: string): this;
    name(): string;
    media(input: string): this;
    media(): string;
    httpEquiv(input: string): this;
    httpEquiv(): string;
}

export interface Naff_meter extends NaffBase<"meter">, Naff__Common {
    value(input: number): this;
    value(): number;
    max(input: number): this;
    max(): number;
    min(input: number): this;
    min(): number;
    low(input: number): this;
    low(): number;
    high(input: number): this;
    high(): number;
    optimum(input: number): this;
    optimum(): number;
}

export interface Naff_del extends NaffBase<"del">, Naff__Common {
    cite(input: string): this;
    cite(): string;
    dateTime(input: string): this;
    dateTime(): string;
}

export interface Naff_ins extends NaffBase<"ins">, Naff__Common {
    cite(input: string): this;
    cite(): string;
    dateTime(input: string): this;
    dateTime(): string;
}

export interface Naff_ol extends NaffBase<"ol">, Naff__Common {
    type(input: string): this;
    type(): string;
    start(input: number): this;
    start(): number;
    reversed(input: boolean): this;
    reversed(): boolean;
}

export interface Naff_object extends NaffBase<"object">, Naff__Common {
    type(input: string): this;
    type(): string;
    height(input: string): this;
    height(): string;
    name(input: string): this;
    name(): string;
    width(input: string): this;
    width(): string;
    data(input: string): this;
    data(): string;
    declare(input: boolean): this;
    declare(): boolean;
    standby(input: string): this;
    standby(): string;
    useMap(input: string): this;
    useMap(): string;
}

export interface Naff_optgroup extends NaffBase<"optgroup">, Naff__Common {
    disabled(input: boolean): this;
    disabled(): boolean;
    label(input: string): this;
    label(): string;
}

export interface Naff_option extends NaffBase<"option">, Naff__Common {
    value(input: string): this;
    value(): string;
    disabled(input: boolean): this;
    disabled(): boolean;
    selected(input: boolean): this;
    selected(): boolean;
    defaultSelected(input: boolean): this;
    defaultSelected(): boolean;
    readonly form: Naff<"form">;
    readonly index: number;
    readonly label: string;
}

export interface Naff_output extends NaffBase<"output">, Naff__Common {
    value(input: string): this;
    value(): string;
    defaultValue(input: string): this;
    defaultValue(): string;
    for<R>(): R extends TokenSubscope ? this : R;
    name(input: string): this;
    name(): string;
    readonly labels: Naffs;
}

export interface Naff_progress extends NaffBase<"progress">, Naff__Common {
    max(input: number): this;
    max(): number;
    position(input: number): this;
    position(): number;
    value(input: number): this;
    value(): number;
    readonly labels: Naffs;
}

export interface Naff_q extends NaffBase<"q">, Naff__Common {
    cite(input: string): this;
    cite(): string;
}

export interface Naff_blockquote extends NaffBase<"blockquote">, Naff__Common {
    cite(input: string): this;
    cite(): string;
}

export interface Naff_script extends NaffBase<"script">, Naff__Common {
    src(input: string): this;
    src(): string;
    type(input: string): this;
    type(): string;
    crossOrigin(input: DomCrossOrigin): this;
    crossOrigin(): DomCrossOrigin;
    async(input: boolean): this;
    async(): boolean;
    referrerPolicy(input: ReferrerPolicy): this;
    referrerPolicy(): ReferrerPolicy;
    defer(input: boolean): this;
    defer(): boolean;
    integrity(input: string): this;
    integrity(): string;
    noModule(input: boolean): this;
    noModule(): boolean;
    fetchPriority(input: DomPriority): this;
    fetchPriority(): DomPriority;
}

export interface Naff_select extends NaffBase<"select">, Naff__Common {
    autocomplete(input: string): this;
    autocomplete(): string;
    disabled(input: boolean): this;
    disabled(): boolean;
    length(input: number): this;
    length(): number;
    name(input: string): this;
    name(): string;
    required(input: boolean): this;
    required(): boolean;
    size(input: number): this;
    size(): number;
    value(input: string): this;
    value(): string;
    readonly labels: Naffs;
    readonly form: Naff<"form"> | null;
    multiple(input: boolean): this;
    multiple(): boolean;
}

export interface Naff_source extends NaffBase<"source">, Naff__Common {
    media(input: string): this;
    media(): string;
    sizes(input: string): this;
    sizes(): string;
    height(input: number): this;
    height(): number;
    src(input: string): this;
    src(): string;
    srcset(input: string): this;
    srcset(): string;
    type(input: string): this;
    type(): string;
    width(input: number): this;
    width(): number;
}

export interface Naff_style extends NaffBase<"style">, Naff__Common {
    media(input: string): this;
    media(): string;
    type(input: string): this;
    type(): string;
    disabled(input: boolean): this;
    disabled(): boolean;
}

export interface Naff_td extends NaffBase<"td">, Naff__Common {
    abbr(input: string): this;
    abbr(): string;
    colSpan(input: number): this;
    colSpan(): number;
    rowSpan(input: number): this;
    rowSpan(): number;
    scope(input: DomTableScope): this;
    scope(): DomTableScope;
    headers(input: string): this;
    headers(): string;
    readonly cellIndex: number;
}

export interface Naff_table extends NaffBase<"table">, Naff__Common {
    readonly caption: Naff<"caption"> | null;
    readonly tHead: Naff<"thead"> | null;
    readonly tFoot: Naff<"tfoot"> | null;
    readonly rows: Naffs;
    readonly tBodies: Naffs;
}

export interface Naff_template extends NaffBase<"template">, Naff__Common {
    
}

export interface Naff_textarea extends NaffBase<"textarea">, Naff__Common {
    defaultValue(input: string): this;
    defaultValue(): string;
    value(input: string): this;
    value(): string;
    name(input: string): this;
    name(): string;
    autofocus(input: boolean): this;
    autofocus(): boolean;
    required(input: boolean): this;
    required(): boolean;
    disabled(input: boolean): this;
    disabled(): boolean;
    autocomplete(input: string): this;
    autocomplete(): string;
    readOnly(input: boolean): this;
    readOnly(): boolean;
    placeholder(input: string): this;
    placeholder(): string;
    selection<R>(): R extends SelectionSubscope ? this : R;
}

export interface Naff_time extends NaffBase<"time">, Naff__Common {
    dateTime(input: string): this;
    dateTime(): string;
}

export interface Naff_title extends NaffBase<"title">, Naff__Common {
    
}

export interface Naff_track extends NaffBase<"track">, Naff__Common {
    kind(input: DomTrackKind): this;
    kind(): DomTrackKind;
    src(input: string): this;
    src(): string;
    srclang(input: string): this;
    srclang(): string;
    label(input: string): this;
    label(): string;
    default(input: boolean): this;
    default(): boolean;
    readonly readyState: DomTrackReadyState;
    readonly track: TextTrack;
}

export interface Naff_ul extends NaffBase<"ul">, Naff__Common {
    
}

export interface Naff_wbr extends NaffBase<"wbr">, Naff__Common {
    
}

export interface Naff_var extends NaffBase<"var">, Naff__Common {
    
}

export interface Naff_u extends NaffBase<"u">, Naff__Common {
    
}

export interface Naff_tr extends NaffBase<"tr">, Naff__Common {
    
}

export interface Naff_th extends NaffBase<"th">, Naff__Common {
    
}

export interface Naff_tfoot extends NaffBase<"tfoot">, Naff__Common {
    
}

export interface Naff_sup extends NaffBase<"sup">, Naff__Common {
    
}

export interface Naff_summary extends NaffBase<"summary">, Naff__Common {
    
}

export interface Naff_sub extends NaffBase<"sub">, Naff__Common {
    
}

export interface Naff_strong extends NaffBase<"strong">, Naff__Common {
    
}

export interface Naff_span extends NaffBase<"span">, Naff__Common {
    
}

export interface Naff_small extends NaffBase<"small">, Naff__Common {
    
}

export interface Naff_slot extends NaffBase<"slot">, Naff__Common {
    
}

export interface Naff_section extends NaffBase<"section">, Naff__Common {
    
}

export interface Naff_samp extends NaffBase<"samp">, Naff__Common {
    
}

export interface Naff_ruby extends NaffBase<"ruby">, Naff__Common {
    
}

export interface Naff_rt extends NaffBase<"rt">, Naff__Common {
    
}

export interface Naff_rp extends NaffBase<"rp">, Naff__Common {
    
}

export interface Naff_pre extends NaffBase<"pre">, Naff__Common {
    
}

export interface Naff_picture extends NaffBase<"picture">, Naff__Common {
    
}

export interface Naff_param extends NaffBase<"param">, Naff__Common {
    
}

export interface Naff_p extends NaffBase<"p">, Naff__Common {
    
}

export interface Naff_noscript extends NaffBase<"noscript">, Naff__Common {
    
}

export interface Naff_nav extends NaffBase<"nav">, Naff__Common {
    
}

export interface Naff_menu extends NaffBase<"menu">, Naff__Common {
    
}

export interface Naff_marquee extends NaffBase<"marquee">, Naff__Common {
    
}

export interface Naff_mark extends NaffBase<"mark">, Naff__Common {
    
}

export interface Naff_main extends NaffBase<"main">, Naff__Common {
    
}

export interface Naff_kbd extends NaffBase<"kbd">, Naff__Common {
    
}

export interface Naff_i extends NaffBase<"i">, Naff__Common {
    
}

export interface Naff_hgroup extends NaffBase<"hgroup">, Naff__Common {
    
}

export interface Naff_header extends NaffBase<"header">, Naff__Common {
    
}

export interface Naff_head extends NaffBase<"head">, Naff__Common {
    
}

export interface Naff_h6 extends NaffBase<"h6">, Naff__Common {
    
}

export interface Naff_h5 extends NaffBase<"h5">, Naff__Common {
    
}

export interface Naff_h4 extends NaffBase<"h4">, Naff__Common {
    
}

export interface Naff_h3 extends NaffBase<"h3">, Naff__Common {
    
}

export interface Naff_h2 extends NaffBase<"h2">, Naff__Common {
    
}

export interface Naff_h1 extends NaffBase<"h1">, Naff__Common {
    
}

export interface Naff_frame extends NaffBase<"frame">, Naff__Common {
    
}

export interface Naff_footer extends NaffBase<"footer">, Naff__Common {
    
}

export interface Naff_font extends NaffBase<"font">, Naff__Common {
    
}

export interface Naff_figure extends NaffBase<"figure">, Naff__Common {
    
}

export interface Naff_figcaption extends NaffBase<"figcaption">, Naff__Common {
    
}

export interface Naff_em extends NaffBase<"em">, Naff__Common {
    
}

export interface Naff_dt extends NaffBase<"dt">, Naff__Common {
    
}

export interface Naff_dl extends NaffBase<"dl">, Naff__Common {
    
}

export interface Naff_div extends NaffBase<"div">, Naff__Common {
    
}

export interface Naff_dir extends NaffBase<"dir">, Naff__Common {
    
}

export interface Naff_dfn extends NaffBase<"dfn">, Naff__Common {
    
}

export interface Naff_details extends NaffBase<"details">, Naff__Common {
    
}

export interface Naff_dd extends NaffBase<"dd">, Naff__Common {
    
}

export interface Naff_datalist extends NaffBase<"datalist">, Naff__Common {
    
}

export interface Naff_tbody extends NaffBase<"tbody">, Naff__Common {
    
}

export interface Naff_colgroup extends NaffBase<"colgroup">, Naff__Common {
    
}

export interface Naff_col extends NaffBase<"col">, Naff__Common {
    
}

export interface Naff_code extends NaffBase<"code">, Naff__Common {
    
}

export interface Naff_cite extends NaffBase<"cite">, Naff__Common {
    
}

export interface Naff_br extends NaffBase<"br">, Naff__Common {
    
}

export interface Naff_body extends NaffBase<"body">, Naff__Common {
    
}

export interface Naff_bdo extends NaffBase<"bdo">, Naff__Common {
    
}

export interface Naff_bdi extends NaffBase<"bdi">, Naff__Common {
    
}

export interface Naff_b extends NaffBase<"b">, Naff__Common {
    
}

export interface Naff_aside extends NaffBase<"aside">, Naff__Common {
    
}

export interface Naff_article extends NaffBase<"article">, Naff__Common {
    
}

export interface Naff_address extends NaffBase<"address">, Naff__Common {
    
}

export interface Naff_abbr extends NaffBase<"abbr">, Naff__Common {
    
}

export interface Naff_s extends NaffBase<"s">, Naff__Common {
    
}

export interface Naff_caption extends NaffBase<"caption">, Naff__Common {
    
}

export interface Naff_thead extends NaffBase<"thead">, Naff__Common {
    
}

export interface Naff__ extends NaffBase<"?">, Naff__Common {
    
}
