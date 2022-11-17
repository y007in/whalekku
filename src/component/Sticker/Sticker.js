import React from "react";
import "./Sticker.css";

import { useSetRecoilState } from "recoil";
import { isShow1State, isShow2State, isShow3State } from "../../store/atom";

const Sticker = () => {
  const setIs1 = useSetRecoilState(isShow1State);
  const setIs2 = useSetRecoilState(isShow2State);
  const setIs3 = useSetRecoilState(isShow3State);

  const ClickHandler1 = () => {
    setIs1((prev) => !prev);
  };

  const ClickHandler2 = () => {
    setIs2((prev) => !prev);
  };

  const ClickHandler3 = () => {
    setIs3((prev) => !prev);
  };
  return (
    <div className="Sticker_whalekku">
      <div className="StickerContain">
        <img
          onClick={ClickHandler1}
          src={`${process.env.PUBLIC_URL}img/1.png`}
        />
        <img
          onClick={ClickHandler2}
          src={`${process.env.PUBLIC_URL}img/2.png`}
        />
        <img
          onClick={ClickHandler3}
          src={`${process.env.PUBLIC_URL}img/3.png`}
        />
      </div>
    </div>
  );
};

export default Sticker;
