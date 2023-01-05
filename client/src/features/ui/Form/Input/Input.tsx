import React from "react";
import { styled } from "@/stitches.config";

export const InputContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    marginBottom: "$100"
})

export const Label = styled("label", {
    fontSize: "$087",
    marginBottom: "$050",
    fontWeight: "$medium",
    letterSpacing: ".25px"
})

export const Input = styled("input", {
    border: "1px solid $neutral100",
    borderRadius: "$050",
    padding: "$087 $150",
    fontSize: "$100",

    "&::placeholder": {
        color: "$neutral400"
    }
})

