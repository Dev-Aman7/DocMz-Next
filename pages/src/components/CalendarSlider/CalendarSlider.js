import React from "react";
import moment from "moment";
import Slider from "./Slider";

class CalendarSlider extends React.Component {
  state = {
    dateObject: moment()
  };
  weekdayshort = moment.weekdaysShort();
  componentDidMount() {
    console.log(this.weekdayshort);
    console.log(this.createData());
    console.log(this.daysInMonth());
  }
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  createData = () => {
    let firstday = this.firstDayOfMonth();
    let daysofMonth = this.daysInMonth();
    let months = [];
    for (let i = 1; i <= daysofMonth; i++) {
      if (firstday > 6) {
        firstday = 0;
      }
      months.push({ date: i, week: this.weekdayshort[firstday] });
      firstday++;
    }
    return months;
  };
  render() {
    let data = [
      "Apple",
      "Ball",
      "Cat",
      "Dog",
      "Elephant",
      "Fruits",
      "Gorilla",
      "Horse",
      "Ink",
      "Jug",
      "Kite",
      "Lemon",
      "Orange",
      "Paddy",
      "Queen",
      "Rose",
      "Street",
      "Tuesday",
      "Umbrella",
      "Vanilla",
      "Wax",
      "Xerox",
      "Yarn",
      "Zebra"
    ];
    return (
      <div className="parent mt-lg-5">
        <Slider>
          {data.map(value => {
            return (
              <div key={value} className="child">
                {value}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CalendarSlider;
