import React from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import { ReactComponent as Bpm } from "../../assets/bpm.svg";
const AnalyticsCard = props => {
  return (
    <>
      {props.name === "analytics" ? (
        <>
          {" "}
          <div className="analytics-card-chart mb-3">
            <div className="chart-info">
              <h5 className="card-category text-center">Your Activity</h5>
            </div>

            <div className="chart-area">
              <Bar data={chartExample3.data} options={chartExample3.options} />
            </div>
          </div>
        </>
      ) : (
        <div className="analytics-card mb-3">
          <div className="analytics-card-info">
            <div className="analytics-card-info-primary">Heart beat</div>
            <div className="analytics-card-info-secondary">
              122<span style={{ fontSize: "1rem", color: "white" }}>bpm</span>
            </div>
          </div>
          <div className="analytics-card-icon">
            <Bpm />
          </div>
        </div>
      )}
    </>
  );
};

let chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [4, 6, 2, 5, 4, 1]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
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
          gridLines: {
            drawBorder: false,
            color: "white",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 5,
            padding: 20,
            fontColor: "#5c72f2"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "white",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 10,
            fontColor: "#5c72f2"
          }
        }
      ]
    }
  }
};

export default AnalyticsCard;
