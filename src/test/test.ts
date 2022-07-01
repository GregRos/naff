import { Naff } from "@lib/naff";

const a: Naff<"input/checkbox"> = null!;

a.$attr(x => x.checked("true").autocapitalize);
