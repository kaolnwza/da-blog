export interface CommentInterface {
    id: number
    post: number
    author_name: string
    date: Date
    content: { rendered: string }
    author_avatar_urls: { 24: string }
}