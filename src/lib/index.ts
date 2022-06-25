import { Naff } from "./naff";
import { Naffs } from "./naffs";
import { NaffTagNames } from "./common";

export type NaffAny<TagN extends NaffTagNames = NaffTagNames> =
    | Naff<TagN>
    | Naffs;
