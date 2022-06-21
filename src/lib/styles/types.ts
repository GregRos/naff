export type Styles = CSSStyleDeclaration;
export type StyleNames = keyof Styles;

// TODO: CSS - Add !important support
// TODO: CSS - Add computed value
// TODO: CSS - Add property info
// TODO: CSS - Add index getter, setter

export interface StyleReader {
    get(name: string | StyleNames): string | null;

    get(): Partial<Styles>;

    all(): [StyleNames, string][];

    has(name: string | StyleNames): boolean;
}

export type StyleSingleManager = {
    [decl in StyleNames]: {
        (): string;
        (value: string): StyleSingleManager;
    };
} & StyleReader &
    StyleWriter<StyleSingleManager>;

export interface StyleWriter<Self> {
    drop(name: string): Self;

    set(name: string, value: string | null): Self;

    set(spec: Partial<Styles>): Self;
}

export type MultiStyleWriter = {
    [decl in StyleNames]: {
        (value: string): MultiStyleWriter;
    };
} & StyleWriter<MultiStyleWriter>;
