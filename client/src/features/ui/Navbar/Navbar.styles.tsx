import { styled } from "@/stitches.config"
import { ReactComponent as LogoComponent } from "@/assets/logo.svg";
import Button from "../Button/Button"

export const Nav = styled("nav", {
    position: "fixed",
    bottom: 0,
    order: 1,
    width: "100%",
    minHeight: "56px",
    boxShadow: "0px -2px 4px rgba(15, 23, 42, 0.1)",


    "@lg": {
        position: "relative",
        left: 0,
        top: 0,
        bottom: "auto",
        flexDirection: "column",
        order: 0,
        height: "100%",
        width: "auto",
        padding: "$150 0",
        boxShadow: "none"
    }
})

export const Logo = styled(LogoComponent, {
    display: "none",

    "@lg": {
        display: "block",
        marginBottom: "$250"
    }
})

export const NavContainer = styled('div', {
    display: "flex",

    height: '56px',

    "@lg": {
        position: 'sticky',
        flexDirection: "column",
        justifyContent: "none",
        alignItems: "center", 
        top: '0',
        minWidth: "15rem",
        height: "100%",
        maxHeight: "100vh"
    }
})

export const NavLink = styled(Button, {
    flexDirection: "column",
    flex: "1 1 0%",
    gap: "0",
    background: "transparent",
    padding: "0",
    height: "auto",
    minWidth: "44px",
    minHeight: "44px",
    fontSize: "$075",
    color: "$neutral500",

    "& > svg": {
        height: "24px",
        width: "24px"
    },

    "&.active": {
        color: "$neutral800",
        
    },

    "@lg": {
        flex: 'unset',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        gap: "$150",
        fontSize: "$100",
        height: "$300",
    },


})