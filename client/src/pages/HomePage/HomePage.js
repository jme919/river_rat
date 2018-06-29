import React, { Component } from "react";
//import <insert component here> from "../components/<insert component folder here"
import API from "../../utils/API"
import Temp from "../../components/Level"
import NavBar from "../../components/NavBar"


// import React, { Component } from "react";
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

    componentDidMount() {
        this.getRiverData
    }

    getRiverData(){
        API.getData()
            .then(res =>
                this.setState
            )
    }
    render(){
        return (
            <NavBar />
            // <Temp/>   
        )
    }
}

export default HomePage;


