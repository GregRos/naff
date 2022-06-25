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
