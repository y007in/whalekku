import React from "react";
import { useNavigate } from "react-router-dom";

import "./SettingDialog.css";

const SettingDialog = () => {
  const navigate = useNavigate();
  const whalekkuClickHandler = () => {
    navigate("/Whalekkupage");
  };

  return (
    <div className="SettingDialog_dialog">
      <div className="SettingsDialog_setting">
        <div className="SettingsDialog_menu">
          <div className="SettingDialog_tabs">
            <button type="button" className="SettingDialog_tab_1">
              배경테마
            </button>
            <button type="button" className="SettingDialog_tab_2">
              기본위젯모드
            </button>
            <button type="button" className="SettingDialog_tab_3">
              웨꾸 위젯 모드
            </button>
          </div>
          <div className="SettingsDialog_sync">
            <div className="LabelSwitch">
              <label htmlFor="switch" className="settingswitch">
                설정동기화
              </label>
              <button className="toggle">토글</button>
            </div>
          </div>
        </div>
        <div className="SettingDialog_content">
          <section>
            <div className="Widgets_section">
              <div className="label">
                <label className="content_label">네이버 검색</label>
                <button type="button" role="switch" className="toggle">
                  토글
                </button>
              </div>
            </div>
            <div className="Widgets_section">
              <div className="label">
                <label>웨꾸 위젯 모드</label>
                <button className="toggle">토글</button>
              </div>
              <div className="whalekku_main">
                <button className="widget_option">
                  <div className="image">vs</div>위젯1
                </button>
                <button className="widget_option">
                  <div className="image">vs</div>위젯1
                </button>
                <button className="widget_option">
                  <div className="image">vs</div>위젯1
                </button>
              </div>
              <div className="whalekku_container">
                <button
                  className="whalekku_button"
                  onClick={whalekkuClickHandler}
                >
                  웨꾸 위젯 만들기
                </button>
              </div>
            </div>
            <div className="Widgets_section">
              <div className="label">
                <label>미니 위젯</label>
                <button className="toggle">토글</button>
              </div>
              <div className="Mini_widget">
                <div className="Mini_widget_contain">
                  <input type="checkbox" />
                  날씨
                </div>
                <div className="Mini_widget_contain">
                  <input type="checkbox" />
                  즐겨찾기
                </div>
                <div className="Mini_widget_contain">
                  <input type="checkbox" />
                  시계
                </div>
              </div>
            </div>

            <div className="Widgets_section">
              <div className="label">
                <label>마우스 이동 시 보이기</label>
                <button className="toggle">토글</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingDialog;
