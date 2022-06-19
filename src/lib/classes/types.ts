export type NaffClassManager = {
    has(name: string): boolean;
    get(): string[];
    add(...names: string[]): NaffClassManager;
    drop(...names: string[]): NaffClassManager;
    flip(...names: string[]): NaffClassManager;
    str(value: string): NaffClassManager;
    str(): string;
};
