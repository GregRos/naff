import { NaffTagNames, NaffTags, PropNames, DomTagNames } from "../base/tag";
import { NaffAny, NaffMany, NaffOne } from "../index";

export type SingleDomInput = Element | NaffOne;
export type MultiDomInput = SingleDomInput | NaffMany | Element[];
export type DomInput = Element | Element[] | NaffAny | NaffAny[] | string;

export interface DomMutator<Self> {
    $append(...inputs: DomInput[]): Self;

    $prepend(...inputs: DomInput[]): Self;

    $after(...postfixes: DomInput[]): Self;

    $before(...prefixes: DomInput[]): Self;

    $instead(...replacements: DomInput[]): NaffMany;

    $instead(replacer: (x: Self) => DomInput): NaffMany;

    $switch(...replacements: DomInput[]): Self;

    $switch(replacer: (x: Self) => DomInput): NaffMany;

    $text(value: string): Self;

    $html(value: string): Self;

    $outerHtml(value: string): NaffOne;
}
