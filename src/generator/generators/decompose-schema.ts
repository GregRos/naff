import {
    NaffTagSchema,
    SchemaPropValue,
    SchemaTypeRef,
    TagSchema
} from "../schema/schema-types";
import { ImportDeclarationStructure } from "ts-morph";

export type FullPropSchema = {
    name: string;
    type?: SchemaTypeRef;
} & SchemaPropValue;

export interface TagSchemaObject {
    tag: string;
    props: FullPropSchema[];
}

export function* decomposeTagSchema(tagSchema: TagSchema<any>) {
    for (const [key, schema] of Object.entries(tagSchema)) {
        yield {
            name: key,
            ...schema
        } as FullPropSchema;
    }
}

export interface DecomposedSchema {
    imports: ImportDeclarationStructure;
    tags: TagSchemaObject[];
}

export function* decomposeFullSchema(schema: NaffTagSchema) {
    for (const [key, sch] of Object.entries(schema)) {
        const props = [...decomposeTagSchema(sch)];

        yield {
            tag: key,
            props
        } as TagSchemaObject;
    }
}
