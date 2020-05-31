import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

import { Card, NavDropdown } from "react-bootstrap";

const Graphs = () => {
  const [years, setYears] = useState([]);
  const [currYear, setCurryear] = useState("");
  const [btnToggle, setBtnToggle] = useState("year");
  useEffect(() => {
    let d = new Date();
    let n = d.getFullYear();
    let tempyears = [];
    for (let i = 0; i < 2; i++) {
      tempyears.push(n - i);
    }
    setYears(tempyears);
    setCurryear(tempyears[0]);
  }, []);
  const handleYear = index => {
    let nextcurr = years[index];
    let nextYears = years.filter(item => {
      return item !== currYear;
    });
    setYears([...nextYears, currYear]);
    setCurryear(nextcurr);
  };

  const handlebtnToggle = data => {
    setBtnToggle(data);
  };
  ///options for chart
  let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f6fc",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "#dae3e6",
            zeroLineColor: "#dae3e6",
            borderDash: [3, 13],
            zeroLineBorderDash: [3, 13]
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            padding: 10,
            fontColor: "#5c72f2"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 10,
            fontColor: "#5c72f2"
          }
        }
      ]
    }
  };

  let chartExample2 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "No.of Illness",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data:
              currYear === 2020
                ? [8, 4.5, 9, 6, 3, 10, 6, 7, 12, 3, 4, 5]
                : [3, 9, 4, 8, 2, 7, 3, 10, 5, 6, 9, 1]
          }
        ]
      };
    },
    options: chart1_2_options
  };

  return (
    <div className="graph-card mt-sm-5">
      <Card.Body>
        <div className="graph-header mb-sm-2">
          <span className="text-darker graph-card-title font-weight-bolder">
            Statistics of your health
          </span>

          <NavDropdown title={currYear} id="basic-nav-dropdown">
            {years.map((item, index) => {
              if (index !== 0) {
                return (
                  <NavDropdown.Item
                    onClick={() => handleYear(index)}
                    key={item}
                  >
                    {item}
                  </NavDropdown.Item>
                );
              } else {
                return null;
              }
            })}
          </NavDropdown>

          <span className="pl-5">
            <div
              className={
                btnToggle !== "year"
                  ? "year-toggle ml-5"
                  : "year-toggle-active ml-5"
              }
              onClick={() => handlebtnToggle("year")}
            >
              Year
            </div>
          </span>
          <span className="pr-5">
            <div
              className={
                btnToggle !== "month"
                  ? "month-toggle mr-5"
                  : "month-toggle-active mr-5"
              }
              onClick={() => handlebtnToggle("month")}
            >
              Month
            </div>
          </span>
        </div>

        <div className="graph-line">
          <Line data={chartExample2.data} options={chartExample2.options} />
        </div>
      </Card.Body>
    </div>
  );
};
export default Graphs;
