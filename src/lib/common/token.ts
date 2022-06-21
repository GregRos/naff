export interface TokenLike {
    close(): void;
}

export class NaffDisposableToken {
    isClosed = false;
    close(): void {}
    add(...others: TokenLike[]) {}
}
