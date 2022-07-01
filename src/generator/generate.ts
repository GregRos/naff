import "source-map-support/register";
import {
    ImportDeclarationStructure,
    Project,
    SourceFile,
    StructureKind,
    Type,
    ObjectLiteralElement,
    TypeElementMemberStructures
} from "ts-morph";
import { schAllTags, schMapNaff } from "./schema/schema";
import { getDeclarationsFor } from "./resolve-member";
import { NaffTagSchema, TypedProp } from "./schema/schema-types";
import {
    decomposeFullSchema,
    decomposeTagSchema
} from "./generators/decompose-schema";

Error.stackTraceLimit = Infinity;

function sanitizeName(name: string) {
    return name.replace(/[-?/]/g, "_");
}

function* getImportDeclarations(schema: NaffTagSchema) {
    const imports = new Map<string, Set<string>>();
    const onlyProps = [
        ...[...decomposeFullSchema(schMapNaff)].flatMap(x => x.props),
        ...decomposeTagSchema(schAllTags)
    ];
    for (const { type } of onlyProps) {
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
    src.addInterface({
        name: "Naff__Common"
    }).addMembers(
        [...decomposeTagSchema(schAllTags)].flatMap(x => [
            ...getDeclarationsFor(x)
        ])
    );
    const allDecls = [] as TypeElementMemberStructures[];
    for (const tag of decomposeFullSchema(schema)) {
        if (tag.tag === "*") {
            continue;
        }
        console.log(`GENERATING for tag "${tag.tag}"`);

        const tagInterface = src.addInterface({
            kind: StructureKind.Interface,
            name: sanitizeName(`Naff_${tag.tag}`),
            isExported: true,
            extends: [`NaffBase<"${tag.tag}">`, `Naff__Common`]
        });

        const decls = tag.props.flatMap(prop => {
            return [...getDeclarationsFor(prop)];
        });
        allDecls.push(...decls);
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
                    name: "NaffBase"
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
