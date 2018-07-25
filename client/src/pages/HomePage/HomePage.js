import React, { Component } from "react";
//import <insert component here> from "../components/<insert component folder here"
import API from "../../utils/API"
import LevelBox from "../../components/LevelBox"
import TempBox from "../../components/Temp/TempBox"
import ClarityBox from "../../components/Clarity/ClarityBox"
import SpeedBox from "../../components/Speed/SpeedBox"
import ParkWrap from "../../components/ParkWrap/ParkWrap"
import Activities from "../../components/Activities"
import "./HomePage.css"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax'
import Plx from "react-plx"
// import FontAwesome from 'font-awesome';

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
]

class HomePage extends Component {
    state = {
        level: "",
        temp: "",
        clarity: "",
        speed: "",
        park: "",
        fishing: "",
        kayaking: "",
        paddleboarding: "",
        floating: ""
    }

    setActivities() {
        console.log("Temp is" + this.state.clarity)
        this.setState ({fishing: "Drop a line"})
        this.setState ({kayaking: "Get your paddle on"})
        this.setState ({paddleboarding: "Yes"})
        this.setState ({floating: "Yes"})

        this.state.clarity < 10 ?
            this.setState ({fishing: "Drop a line"})
            : this.setState ({fishing: "Nope"})
        
        this.state.temp > 21 ? 
            this.setState ({kayaking: "Hit those rapids"})
            : this.setState ({kayaking: "Negative"});
        
        this.state.level < 5 ? 
            (this.state.temp > 21 ?
                (this.state.speed < 5000 ?
                    this.setState ({paddleboarding: "Get your paddle on"})
                    :this.setState ({paddleboarding: "Nada"}))
                :this.setState ({paddleboarding: "Nada"}))
            :this.setState ({paddleboarding: "Nada"})
            
        this.state.level < 5 ? 
            (this.state.temp > 21 ?
                (this.state.speed < 5000 ?
                    this.setState ({floating: "Grab the cooler tube"})
                    :this.setState ({floating: "No freaking way"}))
                :this.setState ({floating: "No freaking way"}))
            :this.setState ({floating: "No freaking way"})    
    }

    componentDidMount() {
        this.loadRiverStats();
        this.setState ({title: "River Rat"});
    }



    loadRiverStats = () => {
        API.getData()
            .then(res =>
            {
                this.setState ({level: res.data.value.timeSeries[5].values[0].value[0].value});
                this.setState ({temp: res.data.value.timeSeries[0].values[0].value[0].value});
                this.setState ({clarity: res.data.value.timeSeries[3].values[0].value[0].value});
                this.setState({speed: res.data.value.timeSeries[1].values[0].value[0].value});
                console.log("The API response is: " + res.data.value.timeSeries[5].values[0].value[0].value)
                this.setActivities()
            },
            
        )
          .catch(err => console.log(err));
    };



      
    render(){
        document.body.style.backgroundImage = 'url(/parkimages/truss.jpeg)';
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
                        <div id="river-image" className="home-image parallax">
                            <ParkWrap >{this.state.title}</ParkWrap>
                            <LevelBox className="w3-container w3-center w3-animate-opacity" level={this.state.level}/>
                            <TempBox temp={this.state.temp}/>
                            <ClarityBox clarity={this.state.clarity}/>
                            <SpeedBox speed={this.state.speed}/>
                            <Activities 
                                fishing={this.state.fishing} 
                                kayaking={this.state.kayaking}
                                paddleboarding={this.state.paddleboarding}
                                floating={this.state.floating}
                            />
                        </div>
                    </Parallax> 
                    <br />
                    <div id="data-box" className="home-data">
                        <Plx parallaxData={parallaxData}>
                           
                        </Plx>
                    </div>  
                </div>
            </ParallaxProvider>        
        );``
    }
}

export default HomePage;