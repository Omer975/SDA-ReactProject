//React core
import React from "react";
import image from './assets/images/package2.jpg';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from "react-router-dom";

//Components
// import Card from "./components/Card";
// import SearchBox from "./components/SearchBox";
// import CardInfo from "./components/CardInfo";
import HomePage from "./components/HomePage";
import CardInfo from "./components/CardInfo";

//import others
// import information from "./information.json";

export default function App() {
  return(
    <div>
      <img src={image} alt="post-img" />
     
   
      <Router>
        <div class="App">
          <h1>Package Tracking Viewer</h1>
          <Link className="button" to="/home">
            Search Package
          </Link>

          <Switch>
            {/*  <Route path="/" component={App} /> */}
            <Route path="/home" component={HomePage} />
            <Route path="/cardinfo" component={CardInfo} />
          </Switch>

        </div>
      </Router>
    </div>
  );
}
