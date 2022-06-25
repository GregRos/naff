import "source-map-support/register";
import {
    ImportDeclarationStructure,
    Project,
    SourceFile,
    StructureKind
} from "ts-morph";
import { schMapNaff } from "./schema/schema";
import { getDeclarationsFor } from "./resolve-member";
import { NaffTagSchema, TypedProp } from "./schema/schema-types";
import { decomposeFullSchema } from "./generators/decompose-schema";

Error.stackTraceLimit = Infinity;

function sanitizeName(name: string) {
    return name.replace(/[-?\/]/g, "_");
}

function* getImportDeclarations(schema: NaffTagSchema) {
    const imports = new Map<string, Set<string>>();
    for (const { props } of decomposeFullSchema(schMapNaff)) {
        for (const { type } of props) {
            if (!type?.source) {
                continue;
            }
            let existing = imports.get(type.source);
            if (!existing) {
                existing = new Set();
                imports.set(type.source, existing);
            }
            existing.add(type.name);
        }
    }

    for (const [key, types] of imports) {
        yield {
            kind: StructureKind.ImportDeclaration,
            namedImports: [...types].map(t => ({
                name: t
            })),
            moduleSpecifier: key
        } as ImportDeclarationStructure;
    }
}

function addTagTypes(src: SourceFile, schema: NaffTagSchema) {
    const interfaceTagMap = src.addInterface({
        name: "NaffTagMap",
        isExported: true
    });
    for (const tag of decomposeFullSchema(schema)) {
        console.log(`GENERATING for tag "${tag.tag}"`);
        const tagInterface = src.addInterface({
            kind: StructureKind.Interface,
            name: sanitizeName(`NaffTag__${tag.tag}`),
            isExported: true,
            extends: [`NaffInterface<"${tag.tag}">`]
        });
        const decls = tag.props.flatMap(prop => {
            return [...getDeclarationsFor(prop, tag.tag)];
        });
        tagInterface.addMembers(decls);
        interfaceTagMap.addProperty({
            name: `"${tag.tag}"`,
            type: tagInterface.getName()
        });
    }
}

async function run() {
    const project = new Project({
        tsConfigFilePath: `${process.cwd()}/src/lib/tsconfig.json`
    });

    const src = project.createSourceFile(
        `${process.cwd()}/src/lib/props.bin.ts`,
        undefined,
        {
            overwrite: true
        }
    );

    src.addImportDeclarations([
        ...getImportDeclarations(schMapNaff),
        {
            moduleSpecifier: "./naff",
            namedImports: [
                {
                    name: "Naff"
                },
                {
                    name: "NaffInterface"
                }
            ]
        },
        {
            moduleSpecifier: "./naffs",
            namedImports: [
                {
                    name: "Naffs"
                }
            ]
        }
    ]);

    addTagTypes(src, schMapNaff);
    await project.save();
}

run();
