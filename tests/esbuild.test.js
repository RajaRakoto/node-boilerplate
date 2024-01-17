import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: ['es2022'],
    outfile: 'tests/bundle.min.test.cjs',
    platform: 'node',
  })
  .catch(() => process.exit(1));
