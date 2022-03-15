export interface PostInterface {
    id: number
    link: string
    title: { rendered: string }
    excerpt: { rendered: string }
    content: { rendered: string }
    author: number
    categories: Array<number>
    tags: Array<number>
    featured_media: number
    // image_src?: string
}

export interface ImageInterface {
    id: number
    guid: { rendered: string }
}