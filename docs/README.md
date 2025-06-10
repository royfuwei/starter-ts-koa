starter-ts-koa
===

This project is a `royfuwei/starter-ts-app` template for creating a new project using the [start-ts-by](https://www.npmjs.com/package/start-ts-by) CLI.

```sh
pnpm add koa @koa/bodyparser @koa/cors @koa/multer class-transformer class-validator class-validator-jsonschema @koa/router koa2-swagger-ui @koa/multer multer routing-controllers routing-controllers-openapi @koa/cors cors tsyringe reflect-metadata openapi3-ts

# rollup need
# pnpm add tslib

pnpm add -D @types/koa @koa/cors @types/koa__cors @types/koa-bodyparser
```

## Getting Started

```bash
# 1. Install dependencies
npm install
## or pnpm
pnpm install
# 2. Run the project
npm run dev
# 3. Build the project
npm run build
# 4. Run tests
npm run test
# 5. Run lint
npm run lint
```

## Release
```bash
# 1. Release the project
npx standard-version
## or
npm run release
# dry run
npm run release -- --dry-run

# 2. Release the project with version
npm run release -- --version 1.0.0
```

## Reference
  