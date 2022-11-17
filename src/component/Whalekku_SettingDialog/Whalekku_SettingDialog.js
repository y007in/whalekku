import React, { useState } from "react";
import Widget_Content from "../Widget_Content/Widget_Content";
import Sticker from "../Sticker/Sticker";
import "./Whalekku_SettingDialog.css";

const Whalekku_SettingDialog = () => {
  const [stickerOpen, setstickerOpen] = useState(true);

  return (
    <div className="SettingDialog_whalekku">
      <div className="SettingsDialog_setting_whalekku">
        <section className="SettingsDialog_menu_whalekku">
          <div className="SettingDialog_tabs_whalekku">
            <button
              type="button"
              className="SettingDialog_whalekku_tab_1"
              onClick={() => {
                setstickerOpen(true);
              }}
            >
              위젯 추가하기
            </button>
            <button
              type="button"
              className="SettingDialog_whalekku_tab_2"
              onClick={() => {
                setstickerOpen(false);
              }}
            >
              스티커 붙이기
            </button>
          </div>
        </section>

        {!stickerOpen ? <Sticker /> : <Widget_Content />}
        <footer className="page">
          <button>
            <img src={`${process.env.PUBLIC_URL}img/left.png`} />
          </button>
          <button>1</button>
          <button>2</button>
          <button>
            <img src={`${process.env.PUBLIC_URL}img/right.png`} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Whalekku_SettingDialog;
