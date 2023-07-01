import React, {useMemo} from 'react';
import {isMobile} from 'react-device-detect';
import {useTranslation} from 'react-i18next';
import useStyles from "../../styles";
import {Button, Grid} from "@mui/material";
import {useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const classes = useStyles(isMobile);
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Perform the redirect using the navigate function
        navigate('/blog');
    };
    const videoFormat = useMemo(()=> isMobile
        ? <video src="https://www.esh.com/assets/cover-phone-vid.bce6ece7.mp4" loop playsInline autoPlay muted
                 className={classes.homeVideo} preload="metadata"/>
        : <video src="https://www.esh.com/assets/cover-vid.9f721ac5.mp4" loop playsInline autoPlay muted
                 className={[classes.homeVideo, classes.homeVideoD].join(' ')} preload="metadata"/>, [isMobile]);
    return (
        <div className={classes.homeMain}>
            <div className={classes.videoWrapper}>
                { videoFormat }
            </div>
            <Grid container flexDirection="column" alignItems="center" className={classes.homePageTitle}>
                <Grid item>
                    <h1>A new bank is coming</h1>
                </Grid>
                <Grid item>

                    <Button className={classes.updateButton} variant="contained" onClick={handleRedirect}>
                        Read Latest Updates
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;