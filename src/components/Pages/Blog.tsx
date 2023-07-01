import React from 'react';
import {useTranslation} from 'react-i18next';
import BlogCard from "../BlogCard";
import {Grid} from "@mui/material";
import data from '../../data/posts.json'
import {Link} from "react-router-dom";

const Blog: React.FC = (props) => {
    const {t} = useTranslation();

    return (
        <div>
            <Grid container justifyContent="center">
                {data.map((post, index) => <Grid item xs={12} sm={3} lg={3}><Link to={post.path} ><BlogCard date={post.date} author={post.author}
                                                                                            title={post.title} content={post.content} /></Link>
                </Grid>)}
            </Grid>
        </div>
    );
};

export default Blog;