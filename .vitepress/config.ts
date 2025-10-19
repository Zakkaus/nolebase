import { presetMarkdownIt } from '@nolebase/integrations/vitepress/markdown-it'
import { transformHeadMeta } from '@nolebase/vitepress-plugin-meta'
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'
// import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItMathjax3 from 'markdown-it-mathjax3'
import { defineConfig } from 'vitepress'

import { discordLink, githubRepoLink, siteDescription, siteName } from '../metadata'
import head from './head'

const nolebase = presetMarkdownIt()

export default defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        NolebaseUnlazyImg: ['src'],
      },
    },
  },
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head,
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
          'zh-TW': {
            translations: {
              button: {
                buttonText: '搜尋文檔',
                buttonAriaLabel: '搜尋文檔',
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                },
              },
            },
          },
          'en': {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                },
              },
            },
          },
        },

        // Add title ang tags field in frontmatter to search
        // You can exclude a page from search by adding search: false to the page's frontmatter.
        _render(src, env, md) {
          // without `md.render(src, env)`, the some information will be missing from the env.
          let html = md.render(src, env)
          let tagsPart = ''
          let headingPart = ''
          let contentPart = ''
          let fullContent = ''
          const sortContent = () => [headingPart, tagsPart, contentPart] as const
          let { frontmatter, content } = env

          if (!frontmatter)
            return html

          if (frontmatter.search === false)
            return ''

          contentPart = content ||= src

          const headingMatch = content.match(/^# .*/m)
          const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== undefined)

          if (hasHeading) {
            const headingEnd = headingMatch.index! + headingMatch[0].length
            headingPart = content.slice(0, headingEnd)
            contentPart = content.slice(headingEnd)
          }
          else if (frontmatter.title) {
            headingPart = `# ${frontmatter.title}`
          }

          const tags = frontmatter.tags
          if (tags && Array.isArray(tags) && tags.length)
            tagsPart = `Tags: #${tags.join(', #')}`

          fullContent = sortContent().filter(Boolean).join('\n\n')

          html = md.render(fullContent, env)

          return html
        },
      },
    },
  },
  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      dir: '/zh-CN',
      link: '/zh-CN',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh-CN/' },
          { text: '笔记', link: '/zh-CN/笔记/' },
          { text: '最近更新', link: '/zh-CN/toc' },
        ],
        socialLinks: [
          { icon: 'github', link: githubRepoLink },
          { icon: 'discord', link: discordLink },
        ],
        darkModeSwitchLabel: '切换主题',
        outline: { label: '页面大纲', level: 'deep' },
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: '编辑本页面',
        },
        sidebar: calculateSidebar([
          { folderName: 'zh-CN/笔记', separate: true },
        ], 'zh-CN'),
        footer: {
          message: '基於真實事件的行為記錄檔案',
          copyright:
        '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © 2025 JIM CHEN 檔案庫',
        },
      },
    },
    'zh-TW': {
      lang: 'zh-TW',
      label: '繁體中文',
      dir: '/zh-TW',
      link: '/zh-TW',
      themeConfig: {
        nav: [
          { text: '主頁', link: '/zh-TW/' },
          { text: '筆記', link: '/zh-TW/筆記/' },
          { text: '最近更新', link: '/zh-TW/toc' },
        ],
        socialLinks: [
          { icon: 'github', link: githubRepoLink },
          { icon: 'discord', link: discordLink },
        ],
        darkModeSwitchLabel: '切換主題',
        outline: { label: '頁面大綱', level: 'deep' },
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: '編輯本頁面',
        },
        sidebar: calculateSidebar([
          { folderName: 'zh-TW/筆記', separate: true },
        ], 'zh-TW'),
        footer: {
          message: '基於真實事件的行為記錄檔案',
          copyright:
        '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © 2025 JIM CHEN 檔案庫',
        },
      },
    },
    'en': {
      lang: 'en-US',
      label: 'English',
      dir: '/en',
      link: '/en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Notes', link: '/en/notes/' },
          { text: 'Recent Updates', link: '/en/toc' },
        ],
        socialLinks: [
          { icon: 'github', link: githubRepoLink },
          { icon: 'discord', link: discordLink },
        ],
        darkModeSwitchLabel: 'Toggle Theme',
        outline: { label: 'On this page', level: 'deep' },
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: 'Edit this page',
        },
        sidebar: calculateSidebar([
          { folderName: 'en/notes', separate: true },
        ], 'en'),
        footer: {
          message: 'Behavioral Record Archive Based on Real Incidents',
          copyright:
        '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © 2025 JIM CHEN Archive',
        },
      },
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    math: true,
    preConfig: async (md) => {
      await nolebase.install(md)
    },
    config: (md) => {
      md.use(MarkdownItFootnote)
      md.use(MarkdownItMathjax3)
    },
  },
  async transformHead(context) {
    let head = [...context.head]

    const returnedHead = await transformHeadMeta()(head, context)
    if (typeof returnedHead !== 'undefined')
      head = returnedHead

    return head
  },
  // async buildEnd(siteConfig) {
  //   await buildEndGenerateOpenGraphImages({
  //     baseUrl: targetDomain,
  //     category: {
  //       byLevel: 2,
  //     },
  //   })(siteConfig)
  // },
})
