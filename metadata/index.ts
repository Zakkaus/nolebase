import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = 'JIM CHEN 檔案庫'
export const siteShortName = 'JIM CHEN'
export const siteDescription = '記錄陳俊霖（JIM CHEN）行為事件的檔案庫'

/** 文档所在目录 */
export const include = ['笔记']

/** Repo */
export const githubRepoLink = 'https://github.com/Zakkaus/nolebase'
/** Discord */
export const discordLink = ''

/** 无协议前缀域名 */
export const plainTargetDomain = 'chen.zakkauu.workers.dev'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: 'Zakk',
    avatar: '',
    username: 'Zakkaus',
    title: 'JIM CHEN 檔案庫維護者',
    desc: '整理與維護 JIM CHEN 行為記錄檔案庫',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Zakkaus' },
    ],
    nameAliases: ['Zakkaus', 'Zakk'],
    emailAliases: [],
  },
  {
    name: 'Hamfurry',
    avatar: '',
    username: 'sgt.hamburger',
    title: '事件提供者',
    desc: '提供真實事件記錄與見證',
    links: [],
    nameAliases: ['Hamfurry', 'sgt.hamburger'],
    emailAliases: [],
  },
  {
    name: '啾頭',
    avatar: '',
    username: 'lan._.o',
    title: '事件提供者',
    desc: '提供真實事件記錄與見證',
    links: [],
    nameAliases: ['啾頭', 'lan._.o'],
    emailAliases: [],
  },
  {
    name: '李陶',
    avatar: '',
    username: 'alubinnananas',
    title: '事件提供者',
    desc: '提供真實事件記錄與見證',
    links: [],
    nameAliases: ['李陶', 'alubinnananas', '1000nit超級LED'],
    emailAliases: [],
  },
  {
    name: '戴维',
    avatar: '',
    username: 'david_2806',
    title: '事件提供者',
    desc: '提供真實事件記錄與見證',
    links: [],
    nameAliases: ['戴维', 'david_2806', '1500W宇极LED', '☆㊣↙煞氣a五六↗㊣☆'],
    emailAliases: [],
  },
  {
    name: 'Yuz',
    avatar: '',
    username: 'yuz_vividayz',
    title: '事件提供者',
    desc: '提供真實事件記錄與見證',
    links: [],
    nameAliases: ['Yuz', 'yuz_vividayz'],
    emailAliases: [],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
