// React core
import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardInfo from "../components/CardInfo";

//import others


export default function Card(props) {
    
    return (
        <div className="posts">
           
            { props.filteredInfo.map(post => {
            return(
                <div key={ post.id} className="post">
                    <h4> id:<Link to={`/Card/${post.id}`}>{ post.id }</Link></h4>
                    <p>Status:{ post.status }</p>
                    <p>ETA:{ post.eta }</p>
                    {/* <Router>
                        <Switch>
                            
                            <Route path="/Card/:id"
                            render={({ match }) => <CardInfo match={ post.id } data={this.state.items} />} />
                        </Switch>
                    </Router> */}
                </div>
            )
        })}
        </div>
    );

}