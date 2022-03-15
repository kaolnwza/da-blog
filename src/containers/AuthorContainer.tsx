import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthorComponent from '../components/AuthorComponent'
import { AuthorInterface } from '../interfaces/AuthorInterface'



const CategoriesContainer: React.FC = () => {
    const [tags, setTags] = useState<AuthorInterface[]>([])

    useEffect(() => {
        FetchTag()
    }, [])

    const FetchTag = async () => {
        const data = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users/")
            .then(res => res.json())

        setTags(data)
    }



    return (
        <div style={{ paddingTop: 5, height: "800px" }}>
            {tags.map((item, i) => {
                return (
                    <div key={item.id}>
                        <AuthorComponent props={item} />
                    </div>
                )
            })}

        </div>
    )
}

export default CategoriesContainer