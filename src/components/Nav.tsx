import React from 'react';
import {Link} from "react-router-dom";


const BlogNav: React.FC = () => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </nav>
    );
};

export default BlogNav;