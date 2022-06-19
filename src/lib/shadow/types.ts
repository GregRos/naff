import { NaffOne } from "../index";

export interface NaffShadowManager {
    createNew(): NaffYesShadow;

    createOrGet(): NaffYesShadow;

    delete(): NaffNoShadow;

    close(): NaffYesShadow;

    open(): NaffYesShadow;
}

export interface NaffNoShadow extends NaffShadowManager {
    exists: false;
}

export interface NaffYesShadow extends NaffShadowManager {
    exists: true;

    find(selector: string): any;

    root: NaffOne<"html">;
}

export type NaffShadow = NaffNoShadow | NaffYesShadow;
