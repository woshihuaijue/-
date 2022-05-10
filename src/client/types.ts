export type LayoutType =
  | 'HomeLayout'
  | 'CategoriesLayout'
  | 'TagsLayout'
  | 'SearchLayout'
  | 'PostsLayout'
  | 'PostLayout'

export type LabelItem = { text: string; num: number }

export type PostInfo = {
  author: string
  date: string
  categories: string[]
  tags: string[]
  postImage: string
}