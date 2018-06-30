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
            this.setState({ level: res.data, temp: res.data, clarity: res.data, speed: res.data })
          )
          .catch(err => console.log(err));
      };
    render(){
        return (
            <div>
                <LevelBox level={this.level} />
            </div>
        )
    }
}

export default HomePage;

