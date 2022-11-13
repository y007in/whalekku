import React from "react";

// import { useNavigate } from "react-router-dom";

import Whalekku_widget_content1 from "../../component/Whalekku_widget_content/Whalekku_widget_content1";
import "./Whalekku_widget.css";

const Whalekku_widget = () => {
  //   const navigate = useNavigate();

  return (
    <div className="SettingDialog_whalekku">
      <div className="SettingsDialog_setting_whalekku">
        <section className="SettingsDialog_menu_whalekku">
          <div className="SettingDialog_tabs_whalekku">
            <button type="button" className="SettingDialog_whalekku_tab_1">
              위젯 추가하기
            </button>
            <button type="button" className="SettingDialog_whalekku_tab_2">
              스티커 붙이기
            </button>
          </div>
        </section>

        <Whalekku_widget_content1 />
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

export default Whalekku_widget;
