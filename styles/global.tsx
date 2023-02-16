import { css } from '@emotion/react';

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  input,
  button {
    outline: none;
    cursor: pointer;
  }

  body,
  html {
    height: 100%;
    background-color: $background-color;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::selection {
    background-color: transparent;
  }
  @font-face {
    font-family: '에스코어드림Regular';
    src: url('/fonts/SCDream4.otf');
  }
  @font-face {
    font-family: '에스코어드림Bold';
    src: url('/fonts/SCDream6.otf');
  }
  @font-face {
    font-family: '에스코어드림ExtraBold';
    src: url('/fonts/SCDream7.otf');
  }
`;

export default global;
