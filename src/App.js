// import { useState } from "react";
import Dialog from "./page/dialog/Dialog";
import "./App.css";

function App() {
  // const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="App">
      <div className="Viewport_viewport">
        <div class="Viewport_main">
          <div className="Search_container">
            <form
              action="http://search.naver.com/search.naver"
              className="Search_form"
            >
              <div class="Search_search">
                <a href="https://www.naver.com" className="Search_logo">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon--logo-naver"
                    width="20"
                    height="20"
                  >
                    <use href="#logo-naver"></use>
                  </svg> */}
                </a>
                <input
                  type="text"
                  name="query"
                  placeholder="검색어를 입력하세요"
                  accesskey="s"
                  maxlength="255"
                  autocomplete="off"
                  spellcheck="false"
                  class="Search_input"
                />
                <input type="hidden" name="ie" value="utf8" />
                <input type="hidden" name="sm" value="whl_nht" />
                <button type="submit" hidden="hidden"></button>
              </div>
            </form>
          </div>
          <Dialog />
          <div className="Viewport_mini">
            <div className="Setting_container">
              <button
                type="button"
                // onClick={() => {
                //   setModalOpen(!modalOpen);
                // }}
                className="Setting_btn_settings"
              >
                설정
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-icon svg-icon--setting Settings_icon_1tzE8"
                  width="16"
                  height="16"
                >
                  <use href="#setting"></use>
                </svg> */}
              </button>
              {/* {modalOpen === true ? <Dialog /> : null} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
