import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import "../WhalekkuPage/Whalekkupage.css";
import Searchbar from "../../component/Searchbar/Searchbar";
import Whalekku_SettingDialog from "../../component/Whalekku_SettingDialog/Whalekku_SettingDialog";
import isShowSearchBarState from "../../store/atom";
import isShowWebtoonState from "../../store/atom2";
import isShowWeatherState from "../../store/atom_weather";
import isShowVibeState from "../../store/atom_vibe";
import isShowCalendar1State from "../../store/atom_calendar1";
import isShowClockState from "../../store/atom_clock";
import isShowFileState from "../../store/atom_file";
import isShowDdayState from "../../store/atom_dday";

const Whalekkupage = () => {
  const [whalekkumodalOpen, setwhalekkuModalOpen] = useState(false);
  const isShowSearchBar = useRecoilValue(isShowSearchBarState);
  const isShowWebtoonBar = useRecoilValue(isShowWebtoonState);
  const isShowWeatherBar = useRecoilValue(isShowWeatherState);
  const isShowVibe = useRecoilValue(isShowVibeState);
  const isShowCalendar1 = useRecoilValue(isShowCalendar1State);
  const isShowClock = useRecoilValue(isShowClockState);
  const isShowFile = useRecoilValue(isShowFileState);
  const isShowDday = useRecoilValue(isShowDdayState);

  const reload = function reloadPage() {
    location.reload();
  };

  return (
    <div className="Viewport_viewport">
      <div className="button_container">
        <button type="submit" value="저장하기" className="save">
          저장하기
        </button>
        <button type="reset" value="초기화" className="reset" onClick={reload}>
          초기화
        </button>
      </div>
      {isShowSearchBar && <Searchbar />}

      <div className="whalekku_widget_contain">
        <div className="whalekku_widget_row">
          <div className="whalekku_widget">
            {isShowFile && (
              <>
                <img
                  src={`${process.env.PUBLIC_URL}img/file.png`}
                  className="file"
                />
                <label className="filetitle">폴더 제목</label>
              </>
            )}
          </div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget">
            {isShowWebtoonBar && (
              <img src={`${process.env.PUBLIC_URL}img/naverwebtoon.png`} />
            )}
          </div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
        </div>
        <div className="whalekku_widget_row">
          <div className="whalekku_widget">
            {isShowWeatherBar && (
              <img src={`${process.env.PUBLIC_URL}img/weather.png`} />
            )}
          </div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget">
            {isShowVibe && (
              <img src={`${process.env.PUBLIC_URL}img/vibe.png`} />
            )}
          </div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget">
            {isShowCalendar1 && (
              <img src={`${process.env.PUBLIC_URL}img/calendar1.png`} />
            )}
          </div>
          <div className="whalekku_widget"></div>
        </div>
        <div className="whalekku_widget_row">
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget">
            {isShowClock && (
              <img src={`${process.env.PUBLIC_URL}img/clock.png`} />
            )}
          </div>
          <div className="whalekku_widget"></div>
          <div className="whalekku_widget">
            {isShowDday && (
              <img src={`${process.env.PUBLIC_URL}img/d-day.png`} />
            )}
          </div>
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
