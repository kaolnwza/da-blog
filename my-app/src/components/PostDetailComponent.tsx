import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostComponent from '../components/PostComponents'
import { PostInterface } from "../interfaces/PostInterface";
import { AuthorInterface } from "../interfaces/AuthorInterface";
import { TagInterface } from "../interfaces/TagInterface";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";

interface Props {
    post?: PostInterface,
    img?: string
    author?: AuthorInterface
    tags: TagInterface[]
    categories: CategoriesInterface[]
    content: string
}


const PostDetailContainer: React.FC<Props> = ({ post, img, author, tags, categories, content }) => {
    // const [content, setContent] = useState<string>('')
    useEffect(() => {

        console.log(post, img, author, tags, categories)

    }, [])

    return (
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
                        {post?.title.rendered}
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
                        {/* {FormatHTMLTag(post?.content.rendered!)} */}
                        {content}
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
    )
}
export default PostDetailContainer