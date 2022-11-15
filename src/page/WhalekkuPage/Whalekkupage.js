import React, { useState } from "react";

import "../WhalekkuPage/Whalekkupage.css";
import Searchbar from "../../component/Searchbar/Searchbar";
import Whalekku_SettingDialog from "../../component/Whalekku_SettingDialog/Whalekku_SettingDialog";

const Whalekkupage = () => {
  const [whalekkumodalOpen, setwhalekkuModalOpen] = useState(false);
  return (
    <div className="Viewport_viewport">
      <div className="button_container">
        <button type="submit" value="저장하기" className="save">
          저장하기
        </button>
        <button type="reset" value="초기화" className="reset">
          초기화
        </button>
      </div>
      <Searchbar />

      <div className="whalekku_widget_contain">
        <div className="whalekku_widget_row">
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
        </div>
        <div className="whalekku_widget_row">
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
        </div>
        <div className="whalekku_widget_row">
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
        </div>
      </div>
      <div className="Viewport_mini">
        <div className="Setting_container">
          <button
            type="button"
            onClick={() => {
              setwhalekkuModalOpen(!whalekkumodalOpen);
            }}
            className="Setting_btn_settings"
          >
            <img
              src={`${process.env.PUBLIC_URL}img/setting.png`}
              width="16px"
              height="16px"
              alt="Settingbutton"
            />
          </button>

          {whalekkumodalOpen && <Whalekku_SettingDialog />}
        </div>
      </div>
    </div>
  );
};
export default Whalekkupage;
