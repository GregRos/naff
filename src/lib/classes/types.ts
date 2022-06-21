export interface NaffClassWriter {
    add(...names: string[]): this;

    drop(...names: string[]): this;

    flip(...names: string[]): this;

    str(value: string): this;
}

export interface NaffClassReader {
    has(name: string): boolean;

    get(): string[];

    str(): string;
}

export interface ClassManager extends NaffClassWriter, NaffClassWriter {}
