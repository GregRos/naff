export default {
    automock: false,
    rootDir: `src/test`,
    preset: "ts-jest",

    testMatch: ["**/*.ts"],
    // The default test threshold is 5s. That's way too low.
    slowTestThreshold: 500,
    reporters: [
        "default"
    ],
    forceExit: true,
    moduleNameMapper: {
        "^@lib/(.*)$": "<rootDir>/../../dist/lib/$1",
        "^@lib$": "<rootDir>/../../dist/lib"
    },
    globals: {
        "ts-jest": {
            tsconfig: "src/test/tsconfig.json",
            transpileOnly: true
        },
        defaults: {}
    }
};
