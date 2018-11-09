import * as React from "react";
import * as mem from "mem";
import * as colors from "../theme/colors";

export type Theme = "warm" | "cool" | "neutral";
export type Cast = "white" | "black" | "tint";

export interface ISlide {
  theme?: Theme;
  backgroundColor?: Cast;
  image?: string;
}

export interface ITemplate {
  children: Element | Element[];
}

export const slideStyle = mem(
  (backgroundColor: Cast, theme: Theme, image?: string) => {
    let background =
      backgroundColor === "tint"
        ? theme === "cool"
          ? colors.blue
          : theme === "warm"
          ? colors.red
          : colors.white
        : colors[backgroundColor];

    const foreground =
      backgroundColor === "white" ? colors.black : colors.white;

    const highlight =
      backgroundColor === "tint"
        ? foreground
        : theme === "cool"
        ? colors.blue
        : theme === "warm"
        ? colors.red
        : foreground;

    const backgroundImage = image ? `${background} url("${image}")` : undefined;

    return {
      background,
      foreground,
      highlight,
      backgroundImage
    };
  }
);
