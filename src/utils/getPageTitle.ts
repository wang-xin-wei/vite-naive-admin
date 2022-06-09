import { defaultSettings } from '@/settings'

const title = defaultSettings.title || '后台管理系统'

export const getPageTitle = (pageTitle: any) => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
