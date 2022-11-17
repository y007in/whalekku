import { atom } from "recoil";

const isShowWeatherState = atom({
  key: "isShowWeatherState",
  default: false,
});

export default isShowWeatherState;
