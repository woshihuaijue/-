import type { ISourceOptions } from 'tsparticles-engine'
import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { PageBase } from '@vuepress/shared'
import type { PageData } from '@vuepress/client'

export type MediaItem = {
  link: string
  icon: string
}

/**
 * 主题配置
 */
export interface ThemeOptions {
  dirname?: string
  // logo
  logo?: string
  // 背景图片
  backgroundImage?: string
  // 文章简介图片
  postImage?: string
  // 背景canvas 动画配置
  particlesOptions?: ISourceOptions

  /**
   * 博主信息相关
   */
  // 博主名称
  blogger?: string
  // 铭言
  slogan?: string
  // 头像
  avatar?: string
  // 其它媒体
  medias?: MediaItem[]

  /**
   * 数据显示相关
   */
  // 列表页显示的文章个数
  perPage?: number
  // 主页显示分类的个数
  maxCategories?: number
  // 主页显示的标签个数
  maxTags?: number

  // 导航
  navbar?: MenuItem[]

  /**
   *  页脚相关配置
   */
  // 备案号
  beian?: string
  // 备案查询地址
  beianUrl?: string
  // 网址起始时间
  footerStartDate?: string
}

/**
 * 页面相关配置
 */
export interface ThemeExtraPageData {
  filePathRelative: string | null
}
export type ThemePageData = PageData<
  ThemeExtraPageData,
  ThemeExtraPageFrontmatter
> &
  GitPluginPageData

/**
 * frontmatter 配置
 */
export interface ThemeExtraPageFrontmatter {
  // 文章信息
  author?: string
  date?: string
  tags?: string[]
  categories?: string[]
  // 文章样式
  postImage?: string // 海报图片
}

export type ThemePageFrontmatter = PageBase<ThemeExtraPageFrontmatter>

/**
 * 支持的多媒体类型
 */
export type MediaType =
  | 'pinterest'
  | 'youtube'
  | 'zhihu'
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'QQ'
  | 'twitter'
  | 'gitlab'
  | 'github'
  | 'email'
  | 'gitee'
  | 'jianshu'

/**
 * 导航项配置
 */
export interface MenuItem {
  text: string
  link: string
  children?: MenuItem[]
}