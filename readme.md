# Node ESM Typescript Boilerplate

Simple ESM boilerplate  Node.js projects. Still (early 2022) some experimental stuff, some features might not be supported or change in the future. 

*Check `


### Requirements

Node.js - 16.14.0 and higher


### Credits
- Typescript execution [ts-node](https://typestrong.org/ts-node/)
- Compiled with [SWC - Speedy Web Compiler](https://swc.rs/)
- Tests and code coverage [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) + [C8](https://github.com/bcoe/c8)
- Linting [TypeScript ESLint](https://typescript-eslint.io/)

### Limitations

- `ts-node` https://github.com/TypeStrong/ts-node/issues/1007
- `--watch` is not available for ESM in Mocha: https://mochajs.org/#current-limitations [issues/4374](https://github.com/mochajs/mocha/issues/4374). However `--watch` is working together with `--parallel` which may limit in some cases, but for standard cases I guess it should be ok.
(More info https://mochajs.org/#parallel-tests).
- typescript [path-mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) is not working with ESM loader. Workaround with custom loader available on https://github.com/TypeStrong/ts-node/discussions/1450. *(--However not working for me-- This version of loader is working https://github.com/TypeStrong/ts-node/discussions/1450#discussioncomment-1806115)*