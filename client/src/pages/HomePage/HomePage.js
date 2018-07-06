import React, { Component } from "react";
//import <insert component here> from "../components/<insert component folder here"
import API from "../../utils/API"
// import NavBar from "../../components/NavBar"
import LevelBox from "../../components/LevelBox"
import TempBox from "../../components/Temp/TempBox"
import ClarityBox from "../../components/Clarity/ClarityBox"
import SpeedBox from "../../components/Speed/SpeedBox"
// import Footer from "../../components/Footer/Footer"
import "./HomePage.css"



// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
// import API from "../utils/API";

class HomePage extends Component {
    state = {
        level: "",
        temp: "",
        clarity: "",
        speed: ""
    }

    // componentDidMount() {
    //     this.getRiverData
    // }

    // getRiverData(){
    //     API.getData()
    //         .then(res =>
    //             this.setState
    //         )
    // }

    componentDidMount() {
        this.loadRiverStats();
    }

    loadRiverStats = () => {
        API.getData()
            .then(res =>
            // this.setState({ level: res.data, temp: res.data, clarity: res.data, speed: res.data })
            // console.log(res.data.value.timeSeries[2])
            //res.data.value.timeSeries[0].values[0].value[13].value

            // {this.setState ({level: "level"});
            // this.setState ({temp: "temp"});
            // this.setState ({clarity: "clarity"});
            // this.setState({speed: "speed"});
            // console.log(res.data.value.timeSeries[0].values[0].value[12].value)}

            {
                this.setState({ level: res.data.value.timeSeries[2].values[0].value[11].value });
                this.setState({ temp: res.data.value.timeSeries[0].values[0].value[11].value });
                this.setState({ clarity: res.data.value.timeSeries[3].values[0].value[11].value });
                this.setState({ speed: res.data.value.timeSeries[1].values[0].value[11].value });
                console.log("The API response is: " + res.data.value.timeSeries[0].values[0].value[11].value)
            }
            )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <div className="home-image"></div>
                <div className="home-data columns">
                    <div className="column">
                        <LevelBox level={this.state.level} />
                    </div>
                    <div className="column">
                        <TempBox temp={this.state.temp} />
                    </div>
                    <div className="column">
                        <ClarityBox clarity={this.state.clarity} />
                    </div>
                    <div className="column">
                        <SpeedBox speed={this.state.speed} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;

