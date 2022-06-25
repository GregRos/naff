import { DomSelectionDir, DomSelectMode } from "../dom-types";

export interface SelectionSubscope {
    start(index: number): SelectionSubscope;
    start(): number;

    end(index: number): SelectionSubscope;
    end(): number;

    dir(dir: DomSelectionDir): SelectionSubscope;
    dir(): DomSelectionDir;

    range(
        start?: number,
        end?: number,
        dir?: DomSelectionDir
    ): SelectionSubscope;
    range(): [start: number, end: number, dir: DomSelectionDir];

    text(): string;
    text(replacement: string, mode?: DomSelectMode): SelectionSubscope;
}
