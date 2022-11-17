import { atom } from "recoil";

const isShowClockState = atom({
  key: "isShowClockState",
  default: false,
});

export default isShowClockState;
