import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import "./NewTab.css";
import Searchbar from "../../component/Searchbar/Searchbar";
import SettingDialog from "../../component/SettingDialog/SettingDialog";

import {
  isShowSearchBarState,
  isShowWebtoonState,
  isShowWeatherState,
  isShowVibeState,
  isShowCalendarState,
  isShowClockState,
  isShowFileState,
  isShowDdayState,
  isShow1State,
  isShow2State,
  isShow3State,
} from "../../store/atom";

const NewTab = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const isShowSearchBar = useRecoilValue(isShowSearchBarState);
  const isShowWebtoonBar = useRecoilValue(isShowWebtoonState);
  const isShowWeatherBar = useRecoilValue(isShowWeatherState);
  const isShowVibe = useRecoilValue(isShowVibeState);
  const isShowCalendar1 = useRecoilValue(isShowCalendarState);
  const isShowClock = useRecoilValue(isShowClockState);
  const isShowFile = useRecoilValue(isShowFileState);
  const isShowDday = useRecoilValue(isShowDdayState);
  const isShow1 = useRecoilValue(isShow1State);
  const isShow2 = useRecoilValue(isShow2State);
  const isShow3 = useRecoilValue(isShow3State);

  return (
    <div className="Viewport_viewport">
      <div className="Viewport_main">
        {isShowSearchBar && <Searchbar />}
        <div className="whalekku_widget_contain">
          {isShow1 && (
            <img
              src={`${process.env.PUBLIC_URL}img/1.png`}
              className="sticker1"
            />
          )}
          {isShow2 && (
            <img
              src={`${process.env.PUBLIC_URL}img/2.png`}
              className="sticker2"
            />
          )}
          {isShow3 && (
            <img
              src={`${process.env.PUBLIC_URL}img/3.png`}
              className="sticker3"
            />
          )}
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
          <div className="Viewport_mini">
            <div className="Setting_container">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(!modalOpen);
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

              {modalOpen && <SettingDialog />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTab;
