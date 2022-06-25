export type Styles = CSSStyleDeclaration;
export type StyleNames = keyof Styles;

// TODO: CSS - Add !important support
// TODO: CSS - Add computed value
// TODO: CSS - Add property info
// TODO: CSS - Add index getter, setter

export type StyleSubscope = {
    [decl in StyleNames]: {
        (): string;
        (value: string): StyleSubscope;
    };
} & {
    drop(name: string): StyleSubscope;

    set(name: string, value: string | null): StyleSubscope;

    set(spec: Partial<Styles>): StyleSubscope;

    get(name: string | StyleNames): string | null;

    get(): Partial<Styles>;

    all(): [StyleNames, string][];

    has(name: string | StyleNames): boolean;
};
