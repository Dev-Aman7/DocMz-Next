import React, { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import moment from "moment";
import { NavDropdown } from "react-bootstrap";

function Calendar() {
  const [dateObj, setDateObj] = useState(moment());
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(moment.months());
  const [currMonth, setCurrMonth] = useState(dateObj.format("MMMM"));
  let weekdayshort = moment.weekdaysShort();
  let currDay = new Date().getDate() - 1;

  const firstDayOfMonth = () => {
    let dateObject = dateObj;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };
  const daysInMonth = () => {
    return dateObj.daysInMonth();
  };

  const createData = () => {
    let firstday = firstDayOfMonth();
    let daysofMonth = daysInMonth();
    let months = [];
    for (let i = 1; i <= daysofMonth; i++) {
      if (firstday > 6) {
        firstday = 0;
      }
      months.push({ date: i, week: weekdayshort[firstday] });
      firstday++;
    }
    setData(months);
    return months;
  };
  const handleMonth = item => {
    let monthNo = item; // get month number
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).set("month", monthNo); // change month value
    setDateObj(dateObject);
    setCurrMonth(month[item]);
  };
  useEffect(() => {
    console.log(dateObj);
    console.log(createData());
    createData();
  }, [dateObj]);
  const flickityOptions = {
    initialIndex: currDay,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    reloadOnUpdate: true, // default false
    static: false,
    cellAlign: "center"
  };
  return (
    <div className="mt-5  px-5">
      <div className="month-selector">
        <NavDropdown title={currMonth} id="basic-nav-dropdown">
          {month.map((item, index) => {
            return (
              <NavDropdown.Item key={index} onClick={() => handleMonth(index)}>
                {item}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      </div>
      <Flickity options={flickityOptions}>
        {data.map((item, index) => {
          return (
            <div className="carousel-cell" key={index}>
              <div
                className={
                  currDay == index ? "calendar-active" : "calendar-wrapper"
                }
                key={index}
              >
                <div className="calendar-week">{item.week}</div>
                <div className="calendar-date">{item.date}</div>
              </div>
            </div>
          );
        })}
      </Flickity>
    </div>
  );
}
export default Calendar;
