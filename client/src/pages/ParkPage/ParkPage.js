import React, {Component} from "react";
import parks from "../../parks.json";
import ParkWrap from "./../../components/ParkWrap";
import API from "./../../utils/API";
class ParkPage extends Component {
   state = {
     parkArr: parks,
     park:""
   }
componentDidMount =()=>{
  API.getPark().then(res => { 
    console.log(res);
    this.setState({park:res.park})
   })
  .catch(err => console.log(err))

}
  render() {
    return(
      <ParkWrap>
      <ul>
      {this.state.parkArr.map((park)=>
      <li>{park.name}</li>
      )}
      </ul>

      </ParkWrap>

    );
  }
}

export default ParkPage;