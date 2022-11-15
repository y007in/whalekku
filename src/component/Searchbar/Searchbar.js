import React from "react";
import "./Searchbar.css";
const Searchbar = () => {
  return (
    <div className="Search_container">
      <form
        action="http://search.naver.com/search.naver"
        className="Search_form"
      >
        <div className="Search_search">
          <a href="https://www.naver.com" className="Search_logo">
            <img
              src={`${process.env.PUBLIC_URL}img/n.png`}
              width="20.7px"
              height="19px"
              alt="Naver"
            />
          </a>
          <input
            type="text"
            name="query"
            placeholder="검색어를 입력하세요"
            accessKey="s"
            maxLength="255"
            autoComplete="off"
            spellCheck="false"
            className="Search_input"
          />
          <input type="hidden" name="ie" value="utf8" />
          <input type="hidden" name="sm" value="whl_nht" />
          <button type="submit" hidden="hidden"></button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
