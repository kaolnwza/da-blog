import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostComponent from '../components/PostComponents'
import { PostInterface } from "../interfaces/PostInterface";
import { AuthorInterface } from "../interfaces/AuthorInterface";
import { TagInterface } from "../interfaces/TagInterface";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";
import { CommentInterface } from '../interfaces/CommentInterface'
import { useParams } from "react-router";
import PostDetailComponent from '../components/PostDetailComponent'
import CommentComponent from "../components/CommentComponent";
import AddCommentComponent from "../components/AddCommentComponent";

const FormatHTMLTag = (str: string): string => {
    const remove_tag = str.replace(/<\/?[^>]+(>|$)/gi, "")
    const remove_more = remove_tag.replace(/&#8230;/gi, "")
    return remove_more
}

const PostDetailContainer: React.FC = () => {
    const [post, setPost] = useState<PostInterface>()
    const [img, setImg] = useState<string>()
    const [tags, setTags] = useState<TagInterface[]>([])
    const [author, setAuthor] = useState<AuthorInterface>()
    const [categories, setCategories] = useState<CategoriesInterface[]>([])
    const [comments, setComments] = useState<CommentInterface[]>([])
    const [postContent, setPostContent] = useState<string>('')
    const { post_id_params } = useParams()

    useEffect(() => {
        FetchPost()
    }, [])


    const FetchData = async (data: PostInterface) => {

        await FetchImage(data)
        await FetchAuthor(data)
        await FetchPostTag(data)
        await FetchPostCategories(data)
        await FetchComments(data)
    }

    const FetchPost = async () => {
        const data: PostInterface = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${post_id_params}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())

        // console.log(data)
        setPost(data)
        setPostContent(FormatHTMLTag(data.content.rendered))

        await FetchData(data)


    }


    const FetchImage = async (post: PostInterface) => {
        // console.log(post?.featured_media)
        // console.log(media_id)
        if (post?.featured_media != 0) {
            const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/media/${post?.featured_media}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())

            if (data !== undefined) {
                // console.log(data)
                setImg(data.guid.rendered)
            }
        }
    }

    const FetchAuthor = async (post: PostInterface) => {
        const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${post?.author}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())

        setAuthor(data)
    }

    const FetchPostTag = async (post: PostInterface) => {
        var temp_array = []
        for (var i = 0; i < post?.tags.length!; i++) {
            const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/tags/${post?.tags[i]}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())

            temp_array.push(data)
        }
        setTags(temp_array)

    }

    const FetchPostCategories = async (post: PostInterface) => {
        var temp_array = []
        for (var i = 0; i < post?.categories.length!; i++) {
            const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories/${post?.categories[i]}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())

            temp_array.push(data)
        }
        setCategories(temp_array)

    }

    const FetchComments = async (post: PostInterface) => {
        const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
        setComments(SortingComment(FilterComment(data, post)))
        console.log(comments)

    }

    const FilterComment = (data: CommentInterface[], post_data: PostInterface): CommentInterface[] => {
        const new_data = data.filter(x => {
            return x.post === post_data.id
        })

        //    const haha = new_data.forEach(x => {
        //         x.content.rendered = FormatHTMLTag(x.content.rendered)
        //     })

        return new_data
    }

    const SortingComment = (data: CommentInterface[]): CommentInterface[] => {
        const new_data = data.sort((a, b) => {
            return +a.date - +b.date
        })

        return new_data
    }
    return (
        <div style={{ paddingTop: 5 }}>
            <PostDetailComponent post={post} img={img} author={author} tags={tags} categories={categories} content={postContent} />

            <AddCommentComponent post_id={post?.id!} />

            {comments.map(x => {
                return (
                    <div key={x.id}>
                        <CommentComponent props={x} />
                    </div>
                )
            })}
        </div>
    )
}

export default PostDetailContainer