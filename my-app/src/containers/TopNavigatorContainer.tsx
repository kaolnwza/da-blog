import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";


const TopNavigatorContainer = () => {
    return (
        <div style={{ backgroundColor: 'white', marginBottom: 50 }}>
            <Grid
                container
                spacing={8}
                direction="row"
                alignItems="center"
                justifyContent="center"

            >

                <Grid item >
                    <a href="/">
                        <Button style={ButtonStyle} >Home</Button>
                    </a>
                </Grid>
                <Grid item >
                    <a href="/post">
                        <Button style={ButtonStyle}>Posts</Button>
                    </a>
                </Grid>
                <Grid item >
                    <a href="/tag">
                        <Button style={ButtonStyle}>Tags</Button>
                    </a>
                </Grid>
                <Grid item >
                    <a href="/categories">
                        <Button style={ButtonStyle}>Categories</Button>
                    </a>
                </Grid>
                <Grid item >
                    <a href="/author">
                        <Button style={ButtonStyle}>Authors</Button>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

const ButtonStyle = {
    fontWeight: '500'
}

export default TopNavigatorContainer