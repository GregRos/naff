export interface TokenSubscope {
    add(...names: string[]): this;

    drop(...names: string[]): this;

    flip(...names: string[]): this;

    str(value: string): this;

    str(value: string): this;

    has(name: string): boolean;

    get(): string[];

    str(): string;
}
