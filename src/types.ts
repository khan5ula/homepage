export type Post = {
  id: string
  slug: string
  body: string
  collection: string
  data: any
}

declare global {
  interface Window {
    scrollToContainer: any
  }
}
