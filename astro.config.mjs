import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import UnoCSS from '@unocss/astro'
import icon from 'astro-icon'

import solidJs from '@astrojs/solid-js'
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
    site: 'https://mgy.one/',
    integrations: [
        sitemap(),
        robotsTxt({
            sitemap: [
                'https://mgy.one/sitemap-index.xml',
                'https://mgy.one/sitemap-0.xml',
            ],
        }),
        solidJs(),
        UnoCSS({ injectReset: true }),
        icon(),
        svelte(),
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: 'static',
    vite: {
        assetsInclude: '**/*.riv',
    },
})
