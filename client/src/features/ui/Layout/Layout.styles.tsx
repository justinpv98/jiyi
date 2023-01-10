import { styled } from "@/stitches.config";

export const NavLayout = styled("div", {
    display: "grid",
    gridTemplateRows: "1fr min-content",
    minHeight: "100vh",

    "@lg": {
        display: "grid",
        gridTemplateRows: "none",
        gridTemplateColumns: "min-content 1fr",
        margin: "0 auto",
    }
})

export const Content = styled("div", {
    
})