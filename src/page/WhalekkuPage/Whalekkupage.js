import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import "../WhalekkuPage/Whalekkupage.css";
import Searchbar from "../../component/Searchbar/Searchbar";
import Whalekku_SettingDialog from "../../component/Whalekku_SettingDialog/Whalekku_SettingDialog";

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

const Whalekkupage = () => {
  const [whalekkumodalOpen, setwhalekkuModalOpen] = useState(false);

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

  const reload = function reloadPage() {
    location.reload();
  };

  const navigate = useNavigate();
  const save = () => {
    navigate("/");
  };

  var dragItem = document.querySelector(".sticker1");

  var container = document.querySelector(".whalekku_widget_contain");

  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);

  function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
      active = true;
    }
  }

  function dragEnd() {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(e) {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

  return (
    <div className="Viewport_viewport">
      {isShowSearchBar && <Searchbar />}
      <div className="button_container">
        <button type="submit" value="저장하기" className="save" onClick={save}>
          저장하기
        </button>
        <button type="reset" value="초기화" className="reset" onClick={reload}>
          초기화
        </button>
      </div>

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
