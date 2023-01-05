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
