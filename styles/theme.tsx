const color = {
  mainBlue: '#456f87',
  subBlue: '#9bbed2',
  accentOrange: '#e9834a',
  lightGray: '#f0f0f0',
  gray: '#dcdcdc',
  blackFont: '#222222',
  grayFont: '#9e9e9e',
};

interface Theme {
  color: {
    mainBlue: string;
    subBlue: string;
    accentOrange: string;
    lightGray: string;
    gray: string;
    blackFont: string;
    grayFont: string;
  };
}

const theme: Theme = {
  color: {
    mainBlue: color.mainBlue,
    subBlue: color.subBlue,
    accentOrange: color.accentOrange,
    lightGray: color.lightGray,
    gray: color.gray,
    blackFont: color.blackFont,
    grayFont: color.grayFont,
  },
};

export default theme;
