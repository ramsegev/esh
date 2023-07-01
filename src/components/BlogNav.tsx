import React, {useMemo} from 'react';
import {ILink} from '../interfaces';
import useStyles from "../styles";
import {Link} from "react-router-dom";

interface NavProps {
    links: ILink[];
}

const BlogNav: React.FC<NavProps> = ({links = [{path:'/', title: 'Home'}]}) => {
    const classes = useStyles();

    const navlinks = useMemo(() => links.map((link, index) => <li key={`${link}_${index}`} className={classes.navLink}>
        <Link className={classes.navAnchor} to={link.path}>{link.title}</Link></li>), [links]);
    return (
        <nav className={classes.nav}>
            {navlinks}
        </nav>
    );
};
export default BlogNav;