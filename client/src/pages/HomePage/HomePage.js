import React, { Component } from "react";
//import <insert component here> from "../components/<insert component folder here"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"
import LevelBox from "../../components/LevelBox"
import Temp from "../../components/Temp"
import Clarity from "../../components/Clarity"
import Speed from "../../components/Speed"
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

            {this.setState ({level: res.data.value.timeSeries[2].values[0].value[12].value});
            console.log(this.state.level)}
            // console.log(res.data.value.timeSeries[2].values[0].value[12].value)
                // temp: res.data.value.timeSeries[3].values[0].value[13].value,
                // clarity: res.data.value.timeSeries[0].values[0].value[13].value,
                // speed: res.data.value.timeSeries[1].values[0].value[13].value
            // this.setState({
            //     level: res.data.value.timeSeries[2].values[0].value[13].value,
            //     temp: res.data.value.timeSeries[3].values[0].value[13].value,
            //     clarity: res.data.value.timeSeries[0].values[0].value[13].value,
            //     speed: res.data.value.timeSeries[1].values[0].value[13].value
            // })
          )
          .catch(err => console.log(err));
      };
    render(){
        return (
            <div className="home-image">
                <LevelBox
                    level={this.state.level}
                />
            </div>
        )
    }
}

export default HomePage;

