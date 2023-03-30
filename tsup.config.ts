import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	platform: 'node',
	target: 'node16',
	external: ['discord.js', 'mongoose'],
	treeshake: true,
	minify: true,
	splitting: false
});
