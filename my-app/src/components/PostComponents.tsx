import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { PostInterface } from "../interfaces/PostInterface";
import { AuthorInterface } from "../interfaces/AuthorInterface";
import { TagInterface } from "../interfaces/TagInterface";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";
import { Link } from "react-router-dom";

interface Props {
    props: PostInterface
    img?: string

}

const FormatHTMLTag = (str: string) => {
    const remove_tag = str.replace(/<\/?[^>]+(>|$)/gi, "")
    const remove_more = remove_tag.replace(/&#8230;/gi, "")
    return remove_more
}

const PostContainer: React.FC<Props> = ({ props }) => {
    const [img, setImg] = useState<Props["img"]>()
    const [tags, setTags] = useState<TagInterface[]>([])
    const [author, setAuthor] = useState<AuthorInterface>()
    const [categories, setCategories] = useState<CategoriesInterface[]>([])

    useEffect(() => {
        FetchImage()
        FetchAuthor()
        FetchPostTag()
        FetchPostCategories()
    }, [])

    const FetchImage = async () => {
        if (props.featured_media != 0) {
            const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/media/${props.featured_media}`, {
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

    const FetchAuthor = async () => {
        const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${props.author}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())

        setAuthor(data)
    }

    const FetchPostTag = async () => {
        var temp_array = []
        for (var i = 0; i < props.tags.length; i++) {
            const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/tags/${props.tags[i]}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())

            temp_array.push(data)
        }
        setTags(temp_array)

    }

    const FetchPostCategories = async () => {
        var temp_array = []
        for (var i = 0; i < props.categories.length; i++) {
            const data = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories/${props.categories[i]}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())

            temp_array.push(data)
        }
        setCategories(temp_array)

    }

    return (

        <>
            <Link to={`/post/detail/${props.id}`}>
                <Card style={{ marginBottom: 20, marginTop: 20, backgroundColor: '#FAFAFA' }}>
                    <CardActionArea>
                        {img ?
                            <CardMedia
                                component="img"
                                height="200"

                                image={img}
                            />
                            : null}

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title.rendered}
                            </Typography>
                            <CardActions >
                                <Button onClick={() => window.location.href = `/author/post/${author?.id}`} style={{ color: '#1E90FF', fontWeight: ' bold', marginBottom: 15, paddingTop: 0, padding: 0 }} >
                                    <Grid container spacing={1} direction="row">

                                        <Grid item>
                                            <Avatar src={author?.avatar_urls[24]} sx={{ width: 24, height: 24 }} />
                                        </Grid>
                                        <Grid item style={{ paddingTop: 12 }}>

                                            {author?.name}

                                        </Grid>

                                    </Grid>
                                </Button>
                            </CardActions>
                            <Typography color="text.secondary" variant="body2" >
                                {FormatHTMLTag(props.excerpt.rendered)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {tags.map((x, i) => {
                                return (
                                    <div key={x.id} >
                                        <Button onClick={() => window.location.href = `/tag/post/${x.id}`} size="small" style={{ fontWeight: 'bold' }} href="/">{x.name}</Button>
                                    </div>
                                )
                            })}

                            {categories.map((x, i) => {
                                return (

                                    <div key={x.id} >

                                        <Button onClick={() => window.location.href = `/categories/post/${x.id}`} size="small" color="error" style={{ fontWeight: 'bold' }} href="/">{x.name}</Button>

                                    </div>
                                )
                            })}
                        </CardActions>



                    </CardActionArea>
                </Card>

            </Link>

        </>

    )

}



export default PostContainer