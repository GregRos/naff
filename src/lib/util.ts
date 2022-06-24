export function inferSubtypeOf<Parent>() {
    return <Child extends Parent>(x: Child) => x as typeof x;
}

export type LookupOrUnknown<Tag, Name> = Name extends keyof Tag
    ? Tag[Name]
    : unknown;

export function inferPartialMapOf<E>() {
    return inferSubtypeOf<Partial<Record<keyof E, any>>>();
}
