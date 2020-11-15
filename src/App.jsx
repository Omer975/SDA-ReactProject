//React core
// import React from "react";
import React, {Component} from "react";
import image from './assets/images/package-3.png';
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from "react-router-dom";

//Components

import HomePage from "./components/HomePage";
import CardInfo from "./components/CardInfo";

//import others


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
            <Route path="/home" component={HomePage}  />
            <Route path="/cardinfo" component={CardInfo} />
            

            {/* <Route path="/Card/:id" component={CardInfo}
                          render={({ match }) => <CardInfo match={ match } data={list} />} /> */}
          </Switch>

        </div>
      </Router>
    </div>
  );
}
