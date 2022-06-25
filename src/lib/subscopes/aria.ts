export type AriaSubscope = {
    [key in keyof ARIAMixin]: {
        (value: string): string;
        (): string;
    };
};
