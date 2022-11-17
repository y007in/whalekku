import { atom } from "recoil";

const isShowSearchBarState = atom({
  key: "isShowSearchBarState",
  default: true,
});

export default isShowSearchBarState;
