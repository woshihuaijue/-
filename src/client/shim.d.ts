declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare const __VUEPRESS_VERSION__: string
declare const __VUEPRESS_DEV__: boolean
declare const __VUEPRESS_SSR__: boolean
declare const __VUE_HMR_RUNTIME__: Record<string, any>
declare const __VUE_OPTIONS_API__: boolean
declare const __VUE_PROD_DEVTOOLS__: boolean
