import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../../components/SideNav/SideNav";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Checkup } from "../../assets/checkup_svg.svg";
import { ReactComponent as CheckupSm } from "../../assets/checkupSm.svg";
import { ReactComponent as Cross } from "../../assets/red-cross.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { ReactComponent as Heart1 } from "../../assets/heart2.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Farrow } from "../../assets/filledArrow.svg";
import Buttons from "../../components/Button/Buttons";
import Cards from "../../components/Card/Cards";
const LandingPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  return (
    <>
      <main role="main" className="main-wrapper">
        <div className="sidenav-wrapper">
          <section className="sidenav-container">
            <SideNav />
          </section>
        </div>
        <div className="maincontent-wrapper">
          <div className="fixed-div">
            <section className="searchbar-wrapper">
              <div className="searchbar-container">
                <Search />

                <div className="searchbar-input ml-sm-3">
                  <input type="text" placeholder="Search for symptoms.." />
                </div>
              </div>
              <div className="brand-sm-wrapper">
                <div className="brand-sm-icon">
                  <Cross />
                </div>
                <div className="brand-sm-info">Medi</div>
              </div>
              <div className="user-icon">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </div>
            </section>
            <section className="info-section-container">
              <div className="info-section-info">
                <div className="Primary-info">
                  What Specialist are you looking for ?
                </div>
                <div className="secondary-info">
                  Now its so easy to make an appoinment with doctors
                </div>
                <div className="secondary-info">
                  Just use your peronal account to visit
                </div>
                <Buttons />
                <div className="cards-wrapper">
                  <Cards procedure={"Cardio"} />
                  <Cards procedure={"Dentistry"} />
                  <Cards procedure={"Pulmonology"} />
                </div>
              </div>
              <div className="info-section-svg">
                {isMobile ? <CheckupSm /> : <Checkup />}
                <div className="seeAll-btn ml-lg-5">
                  <div className="seeAll-info mr-lg-2">See All</div>
                  <div className="seeAll-icon">
                    <Farrow />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="sidenav-sm-container">
          <div style={{ width: "30px", height: "30px" }}>
            <Home />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Settings />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Question />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Heart1 />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Mail />
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
