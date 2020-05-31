import React from "react";
import { ReactComponent as Cross } from "../../assets/red-cross.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Exit } from "../../assets/exit.svg";

const SideNav = () => {
  return (
    <>
      <div className="sidenav-main ">
        <div className="sidenav-brand mt-lg-3">
          <div className="sidenav-brand-icon">
            <Cross />
          </div>
          <div className="sidenav-brand-info">Medi</div>
        </div>
        <div className="sidenav-menu-wrapper">
          <div className="sidenav-ul">
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Home/>
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Heart />
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Mail />
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Settings />
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Question />
              </div>
            </div>
          </div>
          <div className="sidenav-exit">
            <div className="sidenav-icon-wrapper">
              {" "}
              <Exit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
