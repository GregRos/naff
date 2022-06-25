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
export type DomImageLoading = "eager" | "lazy";
export type DomImageDecoding = "async" | "sync" | "auto";
export type DomSelectMode = "select" | "start" | "";
export const enum DomTrackReadyState {
    NONE = 0,
    LOADING = 1,
    LOADED = 2,
    ERROR = 3
}
