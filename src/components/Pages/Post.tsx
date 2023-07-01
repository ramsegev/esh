import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
const Post = () => {
    return (
        <Container maxWidth="md">
            <Button component={Link} to="/" variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
                Back
            </Button>
            <Typography variant="h1" component="h1">
                Team esh,
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: '10px' }}>
                Published on 17/04/2023
            </Typography>
            <img src="https://www.esh.com/assets/kira-blog-cover.18be95ec.jpg" alt="ESHX Banner" />
            <Typography variant="body1" component="p">
                esh Welcomes Clal as Shareholders
            </Typography>
            "We are happy to announce the appointment of Dr. Kira Radinsky as a member of the bank's board of directors and as head of eshX - the new laboratory for next-generation technologies.\nKira, who has a PhD in artificial intelligence, serves as CEO of Diagnostic Robotics, one of the leading artificial intelligence companies in the world of medicine, is a world-renowned expert in the field of machine learning and a two-time winner of the Israel Defense Award. Kira served as eBay's chief scientist and before that led the establishment of big-data systems at Microsoft.\n\nUnder her leadership, eshX will be engaged in the application of future technologies in the fields of banking. These technologies will be integrated into the activities of the group's technology platform, and into the bank's activities. This combination will make it possible to optimize the service and lower the costs for the bank's customers.\n\nAlongside Kira, in the team that is recruiting people these days, will take part Colonel Moshe Wolf, the bank’s CIO, former commander in unit 8200, also a winner of the Israel Defense Award and former CEO of the national payment infrastructure companies MASAV and SHVA, this alongside the co-founder and group CTO, Mr. Alex Liverant.\n\nWith her appointment as a director, Kira joins the chairman of the bank's board of directors Prof. Shmuel Hauser, former chairman of the Israeli SEC, to the vice-chairman of the board Dr. Nadine Baudot-Trajtenberg, former deputy governor of the Central Bank of Israel, and to the bank's CEO, Mr. Kobi Malkin, former CEO of the Soldiers Treasury Bank.\n\nTeam esh."
        </Container>
    );
};

export default Post;
