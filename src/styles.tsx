import {createUseStyles} from "react-jss";

const styles = {
    header: { width: "80%", margin: "auto" },
    nav: { display: "flex" },
    navLink: {
        color: "#ACADB9",
        margin: "26px 26px 16px",
        fontSize: "1rem",
        fontStyle: "normal",
        fontFamily: "Ploni",
        fontWeight: 600,
        lineHeight: "20px",
        listStyleType: "none"
    },
    navAnchor: { textDecoration: "none" },
}
const useStyles: any = createUseStyles(styles);

export default useStyles;