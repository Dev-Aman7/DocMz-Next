import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import HealthDetail from "../../components/HealthDetail/HealthDetail";
import UpcomingCards from "../../components/upcomingCards/UpcomingCards";
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
// import CalendarSlider from "../../components/CalendarSlider/CalendarSlider";
import Calendar from "../../components/CalendarSlider/Calendar";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Cross } from "../../assets/red-cross.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { ReactComponent as Heart1 } from "../../assets/heart2.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Clocksvg } from "../../assets/clock.svg";
import { Container, Row, Col } from "react-bootstrap";
import Clock from "react-live-clock";

// import { useMediaQuery } from "react-responsive";
import DiscountsCard from "../../components/DiscountsCard/DiscountsCard";
import Graphs from "../../components/Graphs/Graphs";

const Dashboard = () => {
  // const isMobile = useMediaQuery({
  //     query: "(max-device-width: 700px)"
  //   });
  return (
    <>
      <main role="main" className="main-wrapper">
        <div className="sidenav-wrapper">
          <section className="sidenav-container">
            <SideNav />
          </section>
        </div>
        <div className="maincontent-wrapper">
          <section className="dashboard-info-section">
            <Container fluid>
              <Row>
                <Col sm={8} className="p-0 dashboard-metrics-container">
                  {/* search wrapper style classes reused from dashboard page styles file */}
                  {/* search and time section starts here  */}
                  <section className="searchbar-wrapper">
                    <div className="searchbar-container">
                      <Search />

                      <div className="searchbar-input ml-sm-3">
                        <input
                          type="text"
                          placeholder="Search for symptoms.."
                        />
                      </div>
                    </div>
                    {/*  brand logo for mobile deivces visible only on mobile deivices  */}
                    <div className="brand-sm-wrapper">
                      <div className="brand-sm-icon">
                        <Cross />
                      </div>
                      <div className="brand-sm-info">Medi</div>
                    </div>
                    {/* //ends here */}
                    <div className="dashboard-datetime-wrapper">
                      <span className="clock-icon">
                        <Clocksvg />
                      </span>
                      <Clock
                        format={"h:mm:ss A,dddd, MMMM Mo, YYYY"}
                        ticking={true}
                      />{" "}
                    </div>
                  </section>
                  {/* Search section ends here  */}
                  {/* Dashboard page metrics  wrapper starts here */}
                  <section className="dashboard-metrics-wrapper">
                    <DiscountsCard />
                    <Graphs />
                    <div className="d-flex justify-content-between">
                      <AnalyticsCard name="analytics" />
                      <AnalyticsCard />
                    </div>
                  </section>
                  {/* Dashboard page metrics  wrapper ends here */}
                </Col>
                <Col sm={4} className="dashboard-info-container px-5">
                  <ProfileInfo />
                  <HealthDetail />

                  <Calendar />

                  <UpcomingCards type={"dent"} />
                  <UpcomingCards />
                  <div className="dashboard-secondary-title mt-4 mb-2 mx-5 px-2">
                    Your treatment
                  </div>
                  <UpcomingCards type={"drug"} />
                  <UpcomingCards type={"vitamin"} />
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        {/* //visible only on mobile deivices */}
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
        {/* //ends here */}
      </main>
    </>
  );
};

export default Dashboard;
