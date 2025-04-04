/// <reference types='./cache.d.ts' />
import type { AstroIntegration } from 'astro';
import { addVirtualImports, createResolver } from '../utils';

/**
 * Creates an Astro integration for caching functionality.
 *
 * This integration sets up virtual imports for caching utilities
 * and resolves the necessary modules dynamically.
 *
 * @returns {AstroIntegration} The Astro integration object for caching.
 *
 * @remarks
 * - The integration is named `quick-astro-cache`.
 * - It hooks into the `astro:config:setup` lifecycle to add virtual imports.
 *
 * @example
 * ```typescript
 * import { astroCache } from './integrations/cache';
 *
 * export default defineConfig({
 *   integrations: [astroCache()],
 * });
 * ```
 */
export function astroCache(): AstroIntegration {
	const { resolve } = createResolver(import.meta.url);

	return {
		name: 'quick-astro-cache',
		hooks: {
			'astro:config:setup': (params) => {
				addVirtualImports(params, {
					name: 'quick-astro-cache',
					imports: {
						'quick-astro:cache': `
                            export * from '${resolve('./wrappers.ts')}';
                        `,
					},
				});
			},
		},
	};
}
