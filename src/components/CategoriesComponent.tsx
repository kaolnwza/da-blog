import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";

interface Props {
    props: CategoriesInterface
}

const CategoriesComponent: React.FC<Props> = ({ props }) => {


    return (

        <>
            <Link to={`/categories/post/${props.id}`}>

                <Card style={{ marginBottom: 20, marginTop: 20, backgroundColor: '#FAFAFA' }}>
                    <CardActionArea>


                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" >
                                {props.description}
                            </Typography>


                        </CardContent>




                    </CardActionArea>
                </Card>


            </Link>
        </>

    )


}


export default CategoriesComponent