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
    name: '記錄者',
    avatar: '',
    username: 'Zakkaus',
    title: 'JIM CHEN 檔案庫維護者',
    desc: '基於真實事件的行為記錄與警示',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Zakkaus' },
    ],
    nameAliases: ['Zakkaus', '記錄者'],
    emailAliases: [],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
