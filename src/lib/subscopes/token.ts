export interface TokenSubscope {
    add(...names: string[]): this;

    drop(...names: string[]): this;

    flip(...names: string[]): this;

    str(value: string): this;

    str(): string;

    has(name: string): boolean;

    get(): string[];
}
