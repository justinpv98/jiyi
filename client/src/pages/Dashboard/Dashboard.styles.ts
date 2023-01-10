import { styled } from "@/stitches.config";

export const Container = styled("main", {
    order: 0,
    padding: "1.5rem",
    height: "100vh",

    "@lg": {
        order: 1,
        maxWidth: "71.25rem",
        margin: "0 auto",
    }
})