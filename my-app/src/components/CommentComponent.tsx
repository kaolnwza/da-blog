import React from "react";
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { CommentInterface } from "../interfaces/CommentInterface";
import moment from 'moment';

interface Props {
    props: CommentInterface
}

const FormatHTMLTag = (str: string): string => {
    const remove_tag = str.replace(/<\/?[^>]+(>|$)/gi, "")
    const remove_more = remove_tag.replace(/&#8230;/gi, "")
    return remove_more
}

const CommentComponent: React.FC<Props> = ({ props }) => {




    return (
        <>
            <Card style={{ marginBottom: 20, marginTop: 20, backgroundColor: '#FAFAFA' }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {FormatHTMLTag(props.content.rendered)}
                        </Typography>
                        <CardActions >
                            <Button style={{ color: '#1E90FF', fontWeight: ' bold', marginBottom: 0, paddingTop: 0, padding: 0 }} >
                                <Grid container spacing={1} direction="row">

                                    <Grid item>
                                        <Avatar src={props.author_avatar_urls[24]} sx={{ width: 24, height: 24 }} />
                                    </Grid>
                                    <Grid item style={{ paddingTop: 12 }}>

                                        {props.author_name}

                                    </Grid>

                                </Grid>
                            </Button>
                        </CardActions>
                        <Typography gutterBottom variant="body2" color="text.secondary" component="div">
                            {moment(props.date).format('DD-MM-YYYY LT')}
                        </Typography>
                    </CardContent>




                </CardActionArea>
            </Card>
        </>
    )
}

export default CommentComponent