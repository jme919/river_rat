import React, { Component } from "react";
import parks from "../../parks.json";
import ParkWrap from "./../../components/ParkWrap";
import API from "./../../utils/API";
import InfoBox from "./../../components/InfoBox";
class ParkPage extends Component {
  state = {
    parkArr: parks,
    park: null,
    parkId: ""
  }
  componentDidMount = () => {

    
    const { match: { params } } = this.props;
    const parkId = params.id;
    console.log("I am here too" + parkId);
    console.log("I ame here!");

    this.setState({ parkId: parkId }, () => {
      const newArr = this.state.parkArr;
      for (let index = 0; index < newArr.length; index++) {
        if (newArr[index].id == this.state.parkId) {
          this.setState({ park: newArr[index] }, () => {
            console.log("It works!!!" + this.state.park)
          })
        }
      }
      // const image = "background-image: url(" + this.state.park.image + ")";
      // this.setState({image:image},()=>{
        // console.log("what the fuck" + this.state.image)
      // });
      

    });
    


  };


  render() {

    if (this.state.park) {



      return (
        <div>
        <div className="parkImage"></div>
        
          <ParkWrap>
            
            <h5 className="is-bold">{this.state.park.name}</h5>
            
          </ParkWrap>

          <InfoBox>
            <p>{this.state.park.word}</p>
            <div className="info">
            <p>{this.state.park.ammenities.parking}</p>
            <p>{this.state.park.ammenities.bathroom}</p>
            <p>{this.state.park.ammenities.waterfountain}</p>
            <p>{this.state.park.ammenities.bike}</p>
            <p>{this.state.park.ammenities.canoeramp}</p>
            </div>
          </InfoBox>
        </div>
      );
    } else {
      return (
        <h1>whoops!</h1>
      )
    }


  }
}

export default ParkPage;