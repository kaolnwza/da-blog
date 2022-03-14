import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',

        }}>



            <Button variant="outlined" href="/post">
                Enter page
            </Button>




        </div>
    )
}

export default Home