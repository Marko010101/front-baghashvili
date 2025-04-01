import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-white: #FFFFFF;
  --color-light-gray: #E9E9E9;
  --color-medium-gray: #969696;
  --color-gray: #9B9B9B;
  --color-dark-gray:#929292;
  --color-slate: #4A4A4A;
  --color-red: #EB0028;
  --color-black: #000000;


  /* Font weights */
  --font-weight-extra-light: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;

  --font-size-nano: 1rem;
  --font-size-micro: 1.2rem;
  --font-size-mini: 1.3rem;
  --font-size-medium-small: 1.4rem;
  --font-size-tiny: 1.6rem;
  --font-size-small: 1.8rem;
  --font-size-medium: 2rem;
  --font-size-big: 2.4rem;
  --font-size-large: 3.2rem;
  --font-size-huge: 3.4rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: color 0.2s , background-color 0.2s, border-width 0.2s , opacity 0.2s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--color-black); 
  background-color: var(--color-white);
  min-height: 100vh;
  line-height: 100%;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none; 
  background: none;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
    line-height: normal;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
