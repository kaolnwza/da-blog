import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { PostInterface } from "../interfaces/PostInterface";
import { AuthorInterface } from "../interfaces/AuthorInterface";
import { TagInterface } from "../interfaces/TagInterface";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";
import { Link } from "react-router-dom";
interface Props {
    props: TagInterface
}

const TagComponent: React.FC<Props> = ({ props }) => {


    return (

        <>

            <Link to={`/tag/post/${props.id}`}>
                <Card style={{ marginBottom: 20, marginTop: 20, backgroundColor: '#FAFAFA' }}>
                    <CardActionArea>


                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                                {props.name}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div">
                                {props.description}
                            </Typography>


                        </CardContent>




                    </CardActionArea>
                </Card>


            </Link>
        </>

    )


}


export default TagComponent