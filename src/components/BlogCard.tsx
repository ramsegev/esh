import React, {useState} from "react";

import {Typography, Card, CardContent, Grid} from '@mui/material';
import useStyles from '../styles';
import {IBlog} from "../interfaces";

const BlogCard: React.FC<IBlog> = ({date, author, title, content}) => {
    const classes = useStyles();
    const [cardHover, setCardHover] = useState(false)
    const handleMouseEnter = ()  => {
        setCardHover(true)
    }
    const handleMouseLeave = () => {
        setCardHover(false)
    }
    return (
        <div className={classes.root}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <Grid container spacing={2}>
                {cardHover ? <Grid item xs={12} sm={6}>
                        <video loop src="https://www.esh.com/assets/card-vid.e4092562.mp4" playsInline autoPlay preload="metadata"
                               className={classes.video}/>
                    </Grid>
                    : <Grid item xs={12} sm={6}>
                        <img src="https://www.esh.com/assets/card-image.bae01252.png" className={classes.image}/>
                    </Grid>}
                <Grid item xs={12}>
                    <div className={classes.content}>
                        <Typography className={classes.date} variant="body2">
                            {date} {author}
                        </Typography>
                        <Typography className={classes.title} variant="h4">
                            {title}
                        </Typography>
                        <Typography className={classes.description} variant="body2">
                            <p className={classes}>{content}</p>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default BlogCard;