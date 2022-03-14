import React from "react";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react";
import { CommentInterface } from "../interfaces/CommentInterface";

interface Props {
    post_id: number
    // comment: CommentInterface
}



const AddCommentComponent: React.FC<Props> = ({ post_id }) => {
    const [name, setName] = useState<string>('Anonymus')
    const [postContent, setPostContent] = useState<string>('')

    const SubmitComment = async () => {
        var data = {
            post: post_id,
            author_name: name,
            content: postContent
        }

        const res = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw=='
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })

        if (res.status == 201) {
            alert('Create comment success!!')
            window.location.reload()
        }
        else {
            alert('Create comment failed')
        }
    }

    return (
        <>
            <Card style={{ marginBottom: 20, marginTop: 20, backgroundColor: '#FAFAFA' }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Your name" variant="standard" onChange={x => setName(x.target.value)} />
                            </Box>

                            <TextField fullWidth label="Comments.." id="fullWidth" onChange={x => setPostContent(x.target.value)} />

                        </Typography>
                        <CardActions >
                            <Box sx={{ width: "100%", textAlign: 'right' }}>

                                <Button variant="contained" color="error" onClick={() => SubmitComment()}>Submit</Button>

                            </Box>
                        </CardActions>

                    </CardContent>




                </CardActionArea>
            </Card>
        </>
    )
}

export default AddCommentComponent