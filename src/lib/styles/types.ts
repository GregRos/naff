export type Styles = CSSStyleDeclaration;
export type StyleNames = keyof Styles;
// TODO: CSS - Add !important support
// TODO: CSS - Add computed value
// TODO: CSS - Add property info
// TODO: CSS - Add index getter, setter
export type NaffStyleManager = {
    [decl in StyleNames]: {
        (): string;
        (value: string): NaffStyleManager;
    };
} & {
    has(name: string | StyleNames): boolean;
    drop(name: string | StyleNames): NaffStyleManager;
    set(name: string | StyleNames, value: string | false): NaffStyleManager;
    set(spec: Partial<Styles>): NaffStyleManager;
    get(name: string | StyleNames): string | null;
    get(): Partial<Styles>;
    all(): string[];
};
