interface Iprice {
  start: number;
  end: number;
}

interface IOption {
  key: number;
  option: string;
}

interface SliderProp {
  options: IOption[];
  state: number;
  setState: SetterOrUpdater<number>;
}

interface Developers {
  id: number;
  position: string;
  people: {
    id: number;
    name: string;
    insta: string;
  }[];
}

interface Color {
  mainBlue: string;
  subBlue: string;
  accentOrange: string;
  lightGray: string;
  gray: string;
  blackFont: string;
  grayFont: string;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface CurrentProduct {
  productId: number;
  url: string;
}
