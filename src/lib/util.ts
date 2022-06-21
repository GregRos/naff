export function infer<Parent>() {
    return <Child extends Parent>(x: Child) => x as typeof x;
}

export type LookupOrUnknown<Tag, Name> = Name extends keyof Tag
    ? Tag[Name]
    : unknown;
