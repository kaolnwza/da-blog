import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthorInterface } from "../interfaces/AuthorInterface";

interface Props {
    props: AuthorInterface
}

const CategoriesComponent: React.FC<Props> = ({ props }) => {


    return (

        <>

            <Link to={`/author/post/${props.id}`}>
                <Card style={{ marginBottom: 20, marginTop: 20, backgroundColor: '#FAFAFA' }}>
                    <CardActionArea>


                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Grid container spacing={1} direction="row">

                                    <Grid item >
                                        <Avatar src={props.avatar_urls[48]} />
                                    </Grid>
                                    <Grid item style={{ paddingTop: 15, marginLeft: 10 }}>

                                        {props.name}

                                    </Grid>

                                </Grid>
                            </Typography>



                        </CardContent>




                    </CardActionArea>
                </Card>
            </Link>


        </>

    )


}


export default CategoriesComponent