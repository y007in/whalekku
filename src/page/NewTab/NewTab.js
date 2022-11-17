import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import "./NewTab.css";
import Searchbar from "../../component/Searchbar/Searchbar";
import SettingDialog from "../../component/SettingDialog/SettingDialog";
import isShowSearchBarState from "../../store/atom";

const NewTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isShowSearchBar = useRecoilValue(isShowSearchBarState);

  return (
    <div className="Viewport_viewport">
      <div className="Viewport_main">
        {isShowSearchBar && <Searchbar />}
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
  );
};

export default NewTab;
