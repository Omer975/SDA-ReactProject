//React core
import React, {Component, setState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from "react-router-dom";


//Components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";


//import others
import CardInfo from "./CardInfo";

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
  
  
  
  handleInput = (e) => {
    
    this.setState({searchTerm: e.target.value})
  }
  render() {
    let filteredInfo = this.state.items.filter( (info) => {
      return info.id.includes(this.state.searchTerm) | 
             info.status.toLowerCase().includes(this.state.searchTerm.toLowerCase())

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
        
        {/* <Route path="/Card/:id"
              render={({ match }) => <CardInfo match={ match} data={list} />} /> */}
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
