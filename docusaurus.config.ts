import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'LambdaKB.dev',
  tagline: 'Open-Source mechanical keyboards and other inputs devices.',
  favicon: 'favicon.svg',

  url: 'https://lambdakb.dev',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        path: 'docs/general',
        routeBasePath: 'docs',
        sidebarPath: './sidebars-general.ts',
        editUrl: 'https://github.com/lambdakb/lambdakb.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devices',
        path: 'docs/devices',
        routeBasePath: 'devices',
        sidebarPath: './sidebars-devices.ts',
        editUrl: 'https://github.com/lambdakb/lambdakb.github.io/tree/main/',
        onInlineTags: 'warn',
        tags: 'tags.yaml',
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: ['/docs', '/devices'],
        docsDir: ['docs/general', 'docs/devices'],
      },
    ],
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/script.file-downloads.outbound-links.js',
      defer: true,
      'data-domain': 'lambdakb.dev',
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/social-card.png',
    metadata: [
      {
        name: 'keywords',
        content: 'trackball, keyboard, pcb, 3dprinting, qmk, vial',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@_0rax' },
      { name: 'twitter:card', content: '@_0rax' },
      { name: 'twitter:title', content: 'LambdaKB.dev' },
      {
        name: 'twitter:description',
        content: 'Open-Source mechanical keyboards and other inputs devices.',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'LambdaKB.dev',
      logo: {
        alt: 'LambdaKB.dev',
        src: 'img/logo.svg',
      },
      style: 'dark',
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          label: 'Documentation',
          sidebarId: 'docsSidebar',
          docsPluginId: 'default',
        },
        {
          type: 'docSidebar',
          position: 'left',
          label: 'Devices',
          sidebarId: 'devicesSidebar',
          docsPluginId: 'devices',
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Keyboards',
          to: '/devices/category/keyboards',
          items: [
            {
              type: 'doc',
              label: 'LK23M',
              docId: 'keyboards/lk23m/index',
              docsPluginId: 'devices',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Trackballs',
          to: '/devices/category/trackballs',
          items: [
            {
              type: 'doc',
              label: 'LT6C',
              docId: 'trackballs/lt6c/index',
              docsPluginId: 'devices',
            },
            {
              type: 'doc',
              label: 'LT7DK',
              docId: 'trackballs/lt7dk/index',
              docsPluginId: 'devices',
            },
          ],
        },
        {
          href: 'https://github.com/lambdakb',
          position: 'right',
          className: 'navbar--github-link',
          'aria-label': 'GitHub repository',
        },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Buying Guide',
              to: '/docs/',
            },
            {
              label: 'Parts Recommendation',
              to: '/docs/',
            },
            {
              label: 'References',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Devices',
          items: [
            {
              label: 'LK23M Numpad & MacroPad',
              to: '/devices/lk23m',
            },
            {
              label: 'LT6C 6 Keys Trackball',
              to: '/devices/lt6c',
            },
            {
              label: 'LT7DK PMW3360 DevKit',
              to: '/devices/lt7dk',
            },
            {
              label: 'Discover more…',
              to: '/devices/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.userctl.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lambdakb',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'About me',
              href: 'https://blog.userctl.xyz/about/',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/orax.bsky.social',
            },
            {
              label: 'Twitter / X',
              href: 'https://x.com/_0rax',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LambdaKB.dev</br>Documentation Distributed under CC-BY-SA-4.0`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
