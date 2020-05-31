import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import MyAppoinments from "../../components/MyAppoinments/MyAppoinments";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Cross } from "../../assets/red-cross.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { ReactComponent as Heart1 } from "../../assets/heart2.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Clocksvg } from "../../assets/clock.svg";
import profile from "../../assets/profile.jpg";
import Payments from "../../components/Payments/Payments";
import { Container, Row, Col } from "react-bootstrap";
import Clock from "react-live-clock";
import Graphs from "../../components/Graphs/Graphs";
import Analyzes from "../../components/Analyzes/Analyzes";
import Calendar from "../../components/CalendarSlider/Calendar";

const FinalDashboard = () => {
  const appoinments = [
    {
      id: 1,
      Name: "John Campbell",
      Specialist: "Dentist",
      Date: "20 Mar 2020",
      Time: "11:00 AM",
      Photo: profile,
      pending: false
    },
    {
      id: 2,
      Name: "Mary Adams",
      Specialist: "Therapist",
      Date: "15 Jan 2020",
      Time: "08:00 AM",
      Photo: profile,
      pending: true
    },
    {
      id: 3,
      Name: "Dan Mitchell",
      Specialist: "Cardiologist",
      Date: "18 Dec 2019",
      Time: "12:00 AM",
      Photo: profile,
      pending: true
    },
    {
      id: 4,
      Name: "Oscar Wilson",
      Specialist: "Physcologist",
      Date: "11 Nov 2020",
      Time: "08:00 AM",
      Photo: profile,
      pending: false
    }
  ];
  return (
    <>
      <main role="main" className="main-wrapper">
        <div className="sidenav-wrapper">
          <section className="sidenav-container">
            <SideNav />
          </section>
        </div>
        <div className="maincontent-wrapper fimain-content-wrapper">
          <section className="dashboard-info-section">
            <Container fluid>
              <Row>
                <Col sm={8} className="p-0 fidashboard-metrics-container">
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
                  <div className="fd-info-container px-5 py-4 mx-3">
                    <Graphs />
                    <div className="dashboard-secondary-title">
                      My Appoinments
                    </div>
                    <MyAppoinments appoinments={appoinments} />
                  </div>
                </Col>
                <Col sm={4} className="dashboard-info-container px-5">
                  <div className="profile-img mt-5 pt-4 mb-5 ">
                    <img src={profile} alt="profile" />
                  </div>
                  <Analyzes />
                  <div className="dashboard-secondary-title mt-5">
                    This month's treatment calendar
                  </div>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "1em",
                      paddingBottom: "20px"
                    }}
                  >
                    <Calendar />
                  </div>
                  <div className="dashboard-secondary-title mt-5">Payments</div>
                  <Payments />
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

export default FinalDashboard;
