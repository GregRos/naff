import { NaffTagMap, NaffTagNames } from "./tags";

export type NaffExclusiveProps<Tag extends NaffTagNames> = Exclude<
    keyof NaffTagMap[Tag],
    keyof HTMLElement
>;

export class SchemaTypeRef {
    constructor(
        public readonly name: string,
        public readonly source: string | undefined
    ) {}
}

export class SchemaTagRef {
    constructor(public readonly tag: string | undefined) {}
}

export interface TypedProp {
    kind: "readonly" | "readwrite" | "subscope";
    type: SchemaTypeRef;
}

export interface SubqueryProp {
    kind: "one" | "many" | "optional";
    tag: string | undefined;
}

export type SchemaPropValue = TypedProp | SubqueryProp;

function typedProp(kind: TypedProp["kind"], type: SchemaTypeRef): TypedProp {
    return {
        kind,
        type
    };
}

function subqueryProp(
    kind: SubqueryProp["kind"],
    tag: string | undefined
): SubqueryProp {
    return {
        kind,
        tag
    };
}

export type SchemaPropTypeShort =
    | string
    | number
    | boolean
    | null
    | SchemaTypeRef;

export type TagSchema<Tag extends NaffTagNames> = {
    [key in
        | Exclude<keyof NaffTagMap[Tag], keyof HTMLElement>
        | string]?: SchemaPropValue;
};

function expandTypeShorthand(sh: SchemaPropTypeShort) {
    if (typeof sh !== "object") {
        return new SchemaTypeRef(typeof sh, undefined);
    }
    if (!sh) {
        return new SchemaTypeRef("null", undefined);
    }
    return sh;
}

export const rw = (type: SchemaPropTypeShort) =>
    typedProp("readwrite", expandTypeShorthand(type));
export const ro = (type: SchemaPropTypeShort) =>
    typedProp("readonly", expandTypeShorthand(type));
export const subscope = (type: SchemaTypeRef) =>
    typedProp("subscope", expandTypeShorthand(type));
export const element = (tag?: NaffTagNames) => subqueryProp("one", tag);
export const elements = (tag?: NaffTagNames) => subqueryProp("many", tag);
export const maybeElement = (tag: NaffTagNames) =>
    subqueryProp("optional", tag);

export function tag<Tag extends NaffTagNames>(schema: TagSchema<Tag>) {
    return schema;
}

export type NaffTagSchema = {
    [tag in NaffTagNames]?: TagSchema<tag>;
};

export function tagMap(schema: NaffTagSchema) {
    return schema;
}
