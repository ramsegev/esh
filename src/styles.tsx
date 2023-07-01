import {createUseStyles} from "react-jss";
import {isMobile} from "react-device-detect";

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
    homeVideo: { zIndex: -1, minWidth: "100vw", minHeight: "100vh" },
    homeVideoD: { right: "0", bottom: "0", position: "fixed" },
    homeMain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    videoWrapper: {
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        zIndex: -1,
        overflow: "hidden",
        position: "absolute",
        maxWidth: "100vw",
        maxHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        WebkitBoxPack: "center",
        WebkitBoxAlign: "center"
    },
    homePageTitle: {
        position: "absolute",
        left: "50%",
        bottom: "15%",
        transform: "translate(-50%, -50%)",
        color: "#FFFFFF",
        fontSize: "1.5rem",
        fontStyle: "normal",
        alignItems: "center",
        fontFamily: "PloniMedium",
        fontWeight: 500,
        lineHeight: "36px",
        "& h1": {
            fontSize: isMobile ? "1em" : "2em",
        }
    },
    updateButton: {
        color: "#bb2649",
        width: "fit-content",
        height: "48px",
        padding: "14px 20px",
        animation: "fadeIn 0.5s ease-in-out 5750ms 1 normal forwards",
        background: "#F5F7FA",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 25px",
        boxSizing: "border-box",
        alignItems: "center",
        borderRadius: "33.25px",
        textTransform: "capitalize",
        justifyContent: "center",
        WebkitBoxPack: "center",
        WebkitBoxAlign: "center",
        "& .css-sghohy-MuiButtonBase-root-MuiButton-root:hover": {
            background: "#FFFFFF",
        }
    },
    footer: {
        left: "50%",
        width: "70%",
        bottom: "0",
        display: "flex",
        position: "absolute",
        fontSize: "0.875rem",
        transform: "translate(-50%, -50%)",
        background: "rgba(255, 255, 255, 0)",
        borderTop: "1px solid rgb(46, 47, 56)",
        boxShadow: "none",
        boxSizing: "border-box",
        minHeight: "80px",
        alignItems: "flex-start",
        fontWeight: 600,
        flexDirection: "column"
    },
    footerLink: {
        color: "#333",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        textDecoration: "none"
    },
    footerText: { color: "#777", marginTop: "16px" },
    footerTradeMark: {
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)"
    },
    "@-webkit-keyframes keyframes-fadeIn": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
    },
}
const useStyles: any = createUseStyles(styles);

export default useStyles;