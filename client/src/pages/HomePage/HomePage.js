import React, { Component } from "react";
//import <insert component here> from "../components/<insert component folder here"
import API from "../../utils/API"
import LevelBox from "../../components/LevelBox"
import TempBox from "../../components/Temp/TempBox"
import ClarityBox from "../../components/Clarity/ClarityBox"
import SpeedBox from "../../components/Speed/SpeedBox"
import "./HomePage.css"

class HomePage extends Component {
    state = {
        level: "",
        temp: "",
        clarity: "",
        speed: ""
    }

    componentDidMount() {
        this.loadRiverStats();
    }

    loadRiverStats = () => {
        API.getData()
            .then(res =>
            
            {this.setState ({level: res.data.value.timeSeries[2].values[0].value[10].value});
            this.setState ({temp: res.data.value.timeSeries[0].values[0].value[10].value});
            this.setState ({clarity: res.data.value.timeSeries[3].values[0].value[10].value});
            this.setState({speed: res.data.value.timeSeries[1].values[0].value[10].value});
            console.log("The API response is: " + res.data.value.timeSeries[0].values[0].value[10].value)}
          )
          .catch(err => console.log(err));
      };
    render(){
        return (
            <div>
                <div className="home-image"></div>
                <div className="home-data">
                    <LevelBox level={this.state.level}/>
                    <TempBox temp={this.state.temp}/>
                    <ClarityBox clarity={this.state.clarity}/>
                    <SpeedBox speed={this.state.speed}/>
                </div>  
            </div>        
        );``
    }
}

export default HomePage;

            // <div>
            //     <div className="home-image"></div>
            //     <div className="home-data columns">
            //         <div className="column">
            //             <LevelBox level={this.state.level}/>
            //         </div>    
            //         <div className="column">
            //             <TempBox temp={this.state.temp}/>
            //         </div>
            //         <div className="column">
            //             <ClarityBox clarity={this.state.clarity}/>
            //         </div>
            //         <div className="column">
            //             <SpeedBox speed={this.state.speed}/>
            //         </div>
            //     </div>  
            // </div>        