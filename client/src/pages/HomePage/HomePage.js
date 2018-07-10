import React, { Component } from "react";
//import <insert component here> from "../components/<insert component folder here"
import API from "../../utils/API"
import LevelBox from "../../components/LevelBox"
import TempBox from "../../components/Temp/TempBox"
import ClarityBox from "../../components/Clarity/ClarityBox"
import SpeedBox from "../../components/Speed/SpeedBox"
import "./HomePage.css"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax'
import Plx from "react-plx"



// window.onscroll = function () {testFunction()};

// function testFunction() {
//   console.log("it freaking works!")
//   console.log(document.getElementById("data-box").scrollTop)
// };

const parallaxData = [
    {
        start: 100,
        end: 600,
        properties: [
            {
                startValue: 0,
                endValue: 1,
                property: "opacity"
            },
            {
                startValue: "rgba(250, 235, 215, 0.7)",
                endValue: "rgba(50,50,200,0.8)",
                property: "backgroundColor"
            }
        ]
    },
    // {
    //     start: 700,
    //     end: 800,
    //     properties: [
    //         {
    //             startValue: 0,
    //             endValue: 5,
    //             property: "translateY"
    //         }
    //     ]
    // }    
]

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
        document.body.style.backgroundImage = 'url()';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.height = 100 + "%";
        document.body.style.minHeight = 100 + "vh";
        return (
            <ParallaxProvider>
                <div>
                    <Parallax>    
                        <div id="river-image" className="home-image parallax"></div>
                    </Parallax> 
                    <br />
                    <div id="data-box" className="home-data">
                        <Plx parallaxData={parallaxData}>
                            <LevelBox level={this.state.level}/>
                            <TempBox temp={this.state.temp}/>
                            <ClarityBox clarity={this.state.clarity}/>
                            <SpeedBox speed={this.state.speed}/>
                        </Plx>
                    </div>  
                </div>
            </ParallaxProvider>        
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