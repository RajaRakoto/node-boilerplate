import * as esbuild from "esbuild";

esbuild
	.build({
		entryPoints: ["src/index.ts"],
		bundle: true,
		minify: true,
		sourcemap: true,
		target: ["ESNext"],
		outfile: "./cache/bundle.test.js",
		platform: "node",
	})
	.catch(() => process.exit(1));
