import {
    InterfaceMemberStructures,
    MethodDeclarationStructure,
    StructureKind
} from "ts-morph";
import { SchemaPropValue } from "./schema/schema-types";
import { FullPropSchema } from "./generators/decompose-schema";

function getNaffs() {
    return `Naffs`;
}

function getNaffType(tag: string) {
    return `Naff<"${tag}">`;
}

export function* getDeclarationsFor(
    prop: FullPropSchema,
    tag: string
): Generator<InterfaceMemberStructures> {
    switch (prop.kind) {
        case "one":
            yield {
                kind: StructureKind.PropertySignature,
                name: prop.name,
                type: getNaffType(tag),
                isReadonly: true
            };
            break;
        case "optional":
            yield {
                kind: StructureKind.PropertySignature,
                name: prop.name,
                type: `${getNaffType(tag)} | null`,
                isReadonly: true
            };
            break;
        case "many":
            yield {
                kind: StructureKind.PropertySignature,
                name: prop.name,
                type: `${getNaffs()}`,
                isReadonly: true
            };
            break;
        case "readwrite":
            yield {
                kind: StructureKind.MethodSignature,
                name: prop.name,
                parameters: [
                    {
                        name: "input",
                        type: prop.type.name
                    }
                ],
                returnType: "this"
            };

            yield {
                kind: StructureKind.MethodSignature,
                name: prop.name,
                parameters: [],
                returnType: prop.type.name
            };
            break;
        case "readonly":
            yield {
                kind: StructureKind.PropertySignature,
                name: prop.name,
                isReadonly: true,
                type: prop.type.name
            };
            break;
        case "subscope":
            yield {
                kind: StructureKind.MethodSignature,
                name: prop.name,
                typeParameters: [
                    {
                        name: "R"
                    }
                ],
                returnType: `R extends ${prop.type.name} ? this : R`
            };
    }
}
