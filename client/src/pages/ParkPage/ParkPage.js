import React, { Component } from "react";
import parks from "../../parks.json";
import ParkWrap from "./../../components/ParkWrap";
import API from "./../../utils/API";
import InfoBox from "./../../components/InfoBox";
import Comments from "./../../components/Comments";
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
      // const image = this.state.park.image;
      // console.log(image);
      // this.setState({image:image},()=>{
      // console.log("some pic" + this.state.image);

      // });


    });
  };

  changeImage = () => {
    document.getElementById('pImage').style.backgroundImage = 'url(' + this.state.park.image + ')';
  };

  render() {
    // const body = document.getElementsByTagName('body')[0];
    //    
    // const imgUrl = this.state.park.image;
    // const divStyle = {
    //   backgroundImage:'url(' + imgUrl + ')'
    // }
    // document.getElementById('pImage').style.backgroundImage = "url(" + this.state.park.image + ")";
    if (this.state.park) {
      document.body.style.backgroundImage = 'url(' + this.state.park.image + ')';
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
      document.body.style.margin = 0;
      document.body.style.padding = 0;
      document.body.style.height = 100 + "%";
      document.body.style.minHeight = 100 + "vh";

      return (
        <div>
          <div id="pImage" className="parkImage"></div>

          <ParkWrap>

            <h5 className="is-bold">{this.state.park.name}</h5>

          </ParkWrap>

          <InfoBox>
            <p>{this.state.park.word}</p>
            <div className="info">
              <ul>
                <li><span className="icon is-small is-left">
                  <i className="fas fa-car"></i>
                </span>&nbsp;&nbsp;&nbsp; {this.state.park.ammenities.parking}</li>
                <li><span className="icon is-small is-left">
                  <i className="fas fa-male"></i><i className="fas fa-female"></i>
                </span>&nbsp;&nbsp;&nbsp;  {this.state.park.ammenities.bathroom}</li>
                <li><span className="icon is-small is-left">
                  <i className="fas fa-tint"></i>
                </span>&nbsp;&nbsp;&nbsp; {this.state.park.ammenities.waterfountain}</li>
                <li><span className="icon is-small is-left">
                  <i className="fas fa-bicycle"></i>
                </span>&nbsp;&nbsp;&nbsp; {this.state.park.ammenities.bike}</li>
                <li><span className="icon is-small is-left">
                  <i className="fas fa-ship"></i>
                </span>&nbsp;&nbsp;&nbsp; {this.state.park.ammenities.canoeramp}</li>
              </ul>
            </div>

          </InfoBox>
          <Comments />

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