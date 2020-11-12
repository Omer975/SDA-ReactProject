//React core
import React, {Component, setState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from "react-router-dom";


//Components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
// import CardInfo from "../components/CardInfo";

//import others
import information from "../information.json";
// import { Router } from "react-router-dom";
import CardInfo from "./CardInfo";
// import App from "../App";


class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      searchTerm: '',
      isLoaded: false
    }  
  }

  componentDidMount() {
    fetch(`https://my.api.mockaroo.com/orders.json?key=e49e6840`)
        .then(results => results.json())
        .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                                             
                })
            });
          
        }
  
  // list() {
  //   const list = this.state.items;
  //   return list;
  // }
  
  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({searchTerm: e.target.value})
  }
  render() {
    let filteredInfo = this.state.items.filter( (info) => {
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
        {/* <Router>
          <Switch>
            
            <Route path="/Card/:id"
              render={({ match }) => <CardInfo match={ match } data={this.state.items} />} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default HomePage;
