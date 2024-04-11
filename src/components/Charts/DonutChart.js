import React, { Component } from "react";
import Chart from "react-apexcharts";
import Card from "components/Card/Card";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: "donut",
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       // chart: {
        //       //   width: 500
        //       // },
        //       legend: {
        //         position: "bottom",
        //       },
        //     },
        //   },
        // ],
      },
    };
  }

  render() {
    return (
      //   <Card
      //     py="1rem"
      //     height={{ sm: "200px" }}
      //     width="100%"
      //     bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
      //     position="relative"
      //   >
      <Chart
        width="100%"
        height="100%"
        options={this.state.options}
        series={this.state.series}
        type="donut"
      />
      //   </Card>
      //   <div>
      //     <div id="chart">

      //     </div>
      //     <div id="html-dist"></div>
      //   </div>
    );
  }
}
export default DonutChart;
