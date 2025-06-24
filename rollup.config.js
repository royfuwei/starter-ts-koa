import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { rollupDevNodemonPlugin } from './scripts/devNodemonPlugin.mjs';
import { rollupExternalWatch } from './scripts/rollupExternalWatch.mjs';
import fs from 'fs';
// import terser from '@rollup/plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

// 讀取 root package.json，標記 external
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const externalDeps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default {
  input: 'src/main.ts',
  external: externalDeps,
  plugins: [
    rollupExternalWatch(),
    json(),
    typescript({ tsconfig: './tsconfig.rollup.json' }),
    resolve({
      extensions: ['.js', '.ts', '.json'],
    }),
    commonjs(), // converts to ES modules
    rollupDevNodemonPlugin(),
    // production && terser(), // minify, but only in production
  ],
  output: [
    {
      file: 'dist/main.js',
      format: 'cjs', // esm: es module, iife: immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
    },
  ],
};
