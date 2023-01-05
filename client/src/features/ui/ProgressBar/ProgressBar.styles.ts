import { styled } from "@/stitches.config";
import * as Progress from "@radix-ui/react-progress";

export const Root = styled(Progress.Root, {
    "position": "relative",
    "overflow": "hidden",
    "background": "$blue100",
    "borderRadius": "99999px",
    "width": "100%",
    "height": "1rem",
  
    /* Fix overflow clipping in Safari */
    /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
    "transform": "translateZ(0)",
})

export const Indicator = styled(Progress.Indicator, {
    background: "$blueGradient",
    "borderRadius": "99999px",
    width: "100%",
    height: "100%",
    transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
})