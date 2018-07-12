import React, {Component} from "react";
import "./Comments.css";
import axios from "axios"

class Comments extends Component{

    state={
        username: "",
        parkID: "",
        comment: ""
    }
    //--trying to grab parkID so can be passed to our object, didn't work
    // componentDidMount = () => {


    //     const { match: { params } } = this.props;
    //     const parkId = params.id;
    //     console.log("I am here too" + parkId);
    //     console.log("I ame here!");
    
    //     this.setState({ parkId: parkId }, () => {
    //       const newArr = this.state.parkArr;
    //       for (let index = 0; index < newArr.length; index++) {
    //         if (newArr[index].id == this.state.parkId) {
    //           this.setState({ park: newArr[index] }, () => {
    //             console.log("It works!!!" + this.state.park)
    //           })
    //         }
    //       }
    //     });
    //   };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = () => {
        console.log("the button is working!!!!")
        const { username, parkID, comment } = this.state;
        this.setState({
            username: "",
            parkID: "",
            comment: ""
        })
        const data = {
        username, parkID, comment
        }
        axios.post("/api/parkpage", data).then(res => {
        // this.props.history.push('/parkspage')
        console.log(res);
        }).catch(err => {
        console.log(err);
        })
        console.log(data)
    }

    render() {

        const {username, parkID, comment} = this.state;
        return (
        <section>
            <div id="comments" className="container is-fluid">
                <div className="columns">
                    <div className="column">

                        <div className="field">
                            <label className="label is-text is-success">Discussion</label>
                            <div className="control has-icons-left has-icons-right">
                                <input onChange={this.handleInputChange} className="input is-success" type="text" placeholder="Text input" value={ username } name="username"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>

                        </div>
                        <div className="field">
                            <div className="control is-large">
                                <textarea onChange = {this.handleInputChange} className="textarea is-success" type="text" placeholder="Leave a tip, info, or a review of this park!" value={ comment } name="comment"></textarea>

                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button onClick={this.handleFormSubmit} className="button  is-success">Submit</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        )
    }
}

export default Comments