// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://aws-quicksight.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'Factorbi QuickSight',
      tagline: "QuickSight API's and assets developed independently",
      description: 'AWS CDK and AWS Lambda functions for managing Quicksight assets',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/factorbi_logo.png',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/aws-quicksight',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      lastUpdated: true,
      pagination: false,
    }),
  ],
});
