import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import TagComponent from '../components/TagComponent'
import { TagInterface } from '../interfaces/TagInterface'



const TagContainer: React.FC = () => {
    const [tags, setTags] = useState<TagInterface[]>([])

    useEffect(() => {
        FetchTag()
    }, [])

    const FetchTag = async () => {
        const data = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/tags/")
            .then(res => res.json())

        setTags(data)
    }



    return (
        <div style={{ paddingTop: 5, height: "800px" }}>
            {tags.map((item, i) => {
                return (
                    <div key={item.id}>
                        <TagComponent props={item} />
                    </div>
                )
            })}

        </div>
    )
}

export default TagContainer