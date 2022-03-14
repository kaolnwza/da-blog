import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoriesComponent from '../components/CategoriesComponent'
import { CategoriesInterface } from '../interfaces/CategoriesInterface'



const CategoriesContainer: React.FC = () => {
    const [tags, setTags] = useState<CategoriesInterface[]>([])

    useEffect(() => {
        FetchTag()
    }, [])

    const FetchTag = async () => {
        const data = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/categories/")
            .then(res => res.json())

        setTags(data)
    }



    return (
        <div style={{ paddingTop: 5, height: "800px" }}>
            {tags.map((item, i) => {
                return (
                    <div key={item.id}>
                        <CategoriesComponent props={item} />
                    </div>
                )
            })}

        </div>
    )
}

export default CategoriesContainer