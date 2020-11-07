import React, {Component} from "react";
import logo from './assets/images/logo.svg';
import './css/App.css';

//Components
import Card from "./components/Card";
import SearchBox from "./components/SearchBox";
import CardInfo from "./components/CardInfo";

//import others
import information from "./information.json";

class App extends Component {
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
        <h1>Package Tracking Viewer</h1>
        <SearchBox handleInput={this.handleInput}/>
        <Card filteredInfo={filteredInfo}  />
        {/* <CardInfo /> */}
        
      </div>
    );
  }
}

export default App;
