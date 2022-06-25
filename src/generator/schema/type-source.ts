import { SchemaTypeRef } from "./schema-types";

export class TypeSource {
    constructor(public source: string | undefined) {}

    createRef(name: string): SchemaTypeRef {
        return new SchemaTypeRef(name, this.source);
    }
}
