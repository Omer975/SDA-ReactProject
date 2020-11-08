// React core
import React from "react";
import { Link } from "react-router-dom";

//import others
// import information from "../information.json";

export default function Card(props) {
    return (
        <div className="posts">
           
            { props.filteredInfo.map(post => {
            return(
                <div key={ post.id} className="post">
                    <Link to="/cardinfo"><h4>id:{ post.id }</h4></Link>
                    <p>Status:{ post.status }</p>
                    <p>ETA:{ post.eta }</p>
                </div>
            )
        })}
        </div>

    );

}