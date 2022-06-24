import { Subscope } from "../base/tag-properties";

export interface NafftokenWriter {
    add(...names: string[]): this;

    drop(...names: string[]): this;

    flip(...names: string[]): this;

    str(value: string): this;
}

export interface NaffTokenManager {
    has(name: string): boolean;

    get(): string[];

    str(value: string): this;

    str(): string;

    add(...names: string[]): this;

    drop(...names: string[]): this;

    flip(...names: string[]): this;
}

export interface TokenManager extends NafftokenWriter, NafftokenWriter {}
