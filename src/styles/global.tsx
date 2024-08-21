"use client";

import { css, Global } from "@emotion/react";

const globalStyles = (
  <Global
    styles={css(`
      /* Reset CSS */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        background-color: #f5f5f5;
      }

      /* Custom Global Styles */
      body {
        line-height: 1.6;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ul {
        list-style: none;
      }
    `)}
  />
);

export default globalStyles;
