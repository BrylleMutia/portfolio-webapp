import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import classes from "./Chart.module.scss";

class Chart extends Component {
    state = {
        chartData: {
            labels: ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "REDUX", "SASS", "MATERIAL UI", "BOOTSTRAP", "NODE.JS", "EXPRESS", "MONGODB", "PYTHON"],
            datasets: [
                {
                    label: "Mastery",
                    data: [89, 87, 90, 93, 87, 91, 85, 79, 85, 87, 83, 91],
                    backgroundColor: [
                        "rgb(228, 77, 38)",
                        "rgb(21, 114, 182)",
                        "rgb(247, 223, 30)",
                        "rgb(96, 217, 251)",
                        "rgb(118, 74, 188)",
                        "rgb(207, 100, 154)",
                        "rgb(0, 176, 255)",
                        "rgb(107, 59, 177)",
                        "rgb(109, 167, 93)",
                        "rgb(176, 176, 176)",
                        "rgb(83, 152, 70)",
                        "rgb(255, 202, 29)",
                    ],
                    scaleFontColor: "#fff"
                },
            ],
        },
        window: {
            width: 0,
            height: 0,
        },
    };

    updateDimensions = () => {
        this.setState({ window: { width: window.innerWidth, height: window.innerHeight } });
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className={classes.chart}>
                <Bar
                    data={this.state.chartData}
                    options={{
                        // toggle aspect ratio depending on screen width
                        maintainAspectRatio: this.state.window.width > 900 ? true : false,
                        title: {
                            display: true,
                            fontSize: 25,
                            fontColor: "#fff",
                        },
                        legend: {
                            labels: {
                                fontColor: "#fff",
                            },
                        },
                    }}
                />
            </div>
        );
    }
}

export default Chart;
