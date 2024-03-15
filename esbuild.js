import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['es2022'],
    outfile: './dist/bundle.min.cjs',
    platform: 'node',
  })
  .catch(() => process.exit(1));
