import React from 'react';
import {Link} from "react-router-dom";
import useStyles from "../styles";

const Footer: React.FC = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <div >
                <Link to="/privacy-policy" className={classes.footerLink}>
                    <span className={classes.footerText} role="text_caption">Privacy policy</span>
                </Link>
                <Link to="/accessibility-statement" className={classes.footerLink}>
                    <span className={classes.footerText} role="text_caption">Accessibility Statement</span>
                </Link>
                <span className={[classes.footerText, classes.footerTradeMark].join(' ')} dir="ltr" role="text_caption">
          esh is a registered trademark of esh Org Ltd. and its affiliates.
        </span>
            </div>
        </footer>
    );
};

export default Footer;