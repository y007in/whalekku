import React from "react";

import isShowWebtoonState from "../../store/atom2";
import isShowWeatherState from "../../store/atom_weather";
import isShowVibeState from "../../store/atom_vibe";
import isShowCalendar1State from "../../store/atom_calendar1";
import isShowClockState from "../../store/atom_clock";
import isShowFileState from "../../store/atom_file";
import isShowDdayState from "../../store/atom_dday";
import { useSetRecoilState } from "recoil";

import "./Whalekku_SettingDialog.css";

const Whalekku_SettingDialog = () => {
  const setIsShowWebtoon = useSetRecoilState(isShowWebtoonState);
  const setIsShowWeather = useSetRecoilState(isShowWeatherState);
  const setIsShowVibe = useSetRecoilState(isShowVibeState);
  const setIsShowCalendar1 = useSetRecoilState(isShowCalendar1State);
  const setIsShowClock = useSetRecoilState(isShowClockState);
  const setIsShowFile = useSetRecoilState(isShowFileState);
  const setIsShowDday = useSetRecoilState(isShowDdayState);

  const webtoonBtnClickHandler = () => {
    setIsShowWebtoon((prev) => !prev);
  };

  const weatherBtnClickHandler = () => {
    setIsShowWeather((prev) => !prev);
  };

  const vibeBtnClickHandler = () => {
    setIsShowVibe((prev) => !prev);
  };
  const calendar1BtnClickHandler = () => {
    setIsShowCalendar1((prev) => !prev);
  };
  const clock1BtnClickHandler = () => {
    setIsShowClock((prev) => !prev);
  };
  const fileBtnClickHandler = () => {
    setIsShowFile((prev) => !prev);
  };
  const DdayBtnClickHandler = () => {
    setIsShowDday((prev) => !prev);
  };
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

        <div className="SettingDialog_content_whalekku">
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">즐겨찾기 폴더</p>
                <p className="label_detail">
                  사이트들을 폴더로 묶어 볼 수 있어요
                </p>
              </div>
              <button className="toggle" onClick={fileBtnClickHandler}>
                토글
              </button>
            </div>
          </div>
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">N 바로가기</p>
                <p className="label_detail">네이버의 중요기능들을 모아보세요</p>
              </div>
              <button className="toggle" onClick={webtoonBtnClickHandler}>
                토글
              </button>
            </div>
          </div>
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">오늘의 날씨</p>
                <p className="label_detail">오늘 날씨를 바로 볼 수 있어요</p>
              </div>
              <button className="toggle" onClick={weatherBtnClickHandler}>
                토글
              </button>
            </div>
          </div>
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">VIBE 프로필 뮤직</p>
                <p className="label_detail">프로필 뮤직을 설정할 수 있어요</p>
              </div>
              <button className="toggle" onClick={vibeBtnClickHandler}>
                토글
              </button>
            </div>
          </div>
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">간편 시계</p>
                <p className="label_detail">
                  현재 시간을 위젯에서 볼 수 있어요
                </p>
              </div>
              <button className="toggle" onClick={clock1BtnClickHandler}>
                토글
              </button>
            </div>
          </div>
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">캘린터 타입</p>
                <p className="label_detail">오늘 날짜와 일정을 볼 수 있어요</p>
              </div>
              <button className="toggle" onClick={calendar1BtnClickHandler}>
                토글
              </button>
            </div>
          </div>
          <div className="Widgets_section_whalekku">
            <div className="label">
              <div className="label_container">
                <p className="label_title">D-DAY</p>
                <p className="label_detail">
                  중요한 날을 설정해 D-DAY를 볼 수 있어요
                </p>
              </div>
              <button className="toggle" onClick={DdayBtnClickHandler}>
                토글
              </button>
            </div>
          </div>
        </div>
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
