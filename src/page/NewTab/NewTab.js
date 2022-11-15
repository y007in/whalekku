import React, { useState } from "react";

import "./NewTab.css";
import Searchbar from "../../component/Searchbar/Searchbar";
import SettingDialog from "../../component/SettingDialog/SettingDialog";

const NewTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="Viewport_viewport">
      <div className="Viewport_main">
        <Searchbar />
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
