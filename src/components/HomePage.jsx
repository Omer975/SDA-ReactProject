import React, {Component} from "react";
// import logo from './assets/images/logo.svg';
import '../css/App.css';
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from "react-router-dom";


//Components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
// import CardInfo from "../components/CardInfo";

//import others
import information from "../information.json";
import { Router } from "react-router-dom";
// import App from "../App";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      information: information,
      searchTerm: ''
    }  
  }

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({searchTerm: e.target.value})
  }
  render() {
    let filteredInfo = this.state.information.filter( (info) => {
      return info.id.includes(this.state.searchTerm) | info.status.toLowerCase().includes(this.state.searchTerm.toLowerCase())

    })
  return (
      <div className="App">
        <div className="button-2">
            <Link className="button" to="/">
                Start Page
            </Link>
        </div>
        
        <h3>Search package by id or by status</h3>
        <SearchBox handleInput={this.handleInput}/>
        <Card filteredInfo={filteredInfo}  />
        {/* <CardInfo /> */}
      </div>
    );
  }
}

export default HomePage;
