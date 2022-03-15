import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostComponent from '../components/PostComponents'
import { PostInterface } from '../interfaces/PostInterface'
import { useParams } from "react-router";




const PostContainer: React.FC = () => {
    const [post, setPost] = useState<PostInterface[]>([])
    const { author_params, categories_params, tags_params } = useParams()

    useEffect(() => {
        console.log(typeof author_params)
        FetchData()
        // IncludeImageToPost()
    }, [])

    const FetchData = async () => {
        await GetPost()
        // await GetImage()
    }

    const FilterOption = (data: PostInterface[]): PostInterface[] => {
        const new_data = author_params ? FilterByAuthor(data) : categories_params ? FilterByCategories(data) : tags_params ? FilterByTag(data) : data
        return new_data
    }

    const FilterByAuthor = (data: PostInterface[]): PostInterface[] => {
        const new_data = data.filter(x => {
            return x.author.toString() == author_params
        })

        return new_data
    }

    const FilterByCategories = (data: PostInterface[]): PostInterface[] => {
        var condition: boolean
        const new_data = data.filter(item => {
            for (var i = 0; i < item.categories.length; i++) {
                condition = false
                if (item.categories[i].toString() == categories_params) {
                    condition = true
                    break
                }
            }
            if (condition) {
                return item
            }
        })

        return new_data
    }

    const FilterByTag = (data: PostInterface[]): PostInterface[] => {
        var condition: boolean
        const new_data = data.filter(item => {
            for (var i = 0; i < item.tags.length; i++) {
                condition = false
                if (item.tags[i].toString() == tags_params) {
                    condition = true
                    break
                }
            }
            if (condition) {
                return item
            }
        })

        return new_data
    }


    const GetPost = async () => {
        const data = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())

        const new_data = FilterOption(data)
        setPost(new_data)

    }

    return (
        <div style={{ paddingTop: 5 }}>

            {post.map((item) => {
                return (
                    <div key={item.id}>

                        <PostComponent props={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer