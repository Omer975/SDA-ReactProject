// React core
import React from "react";

//import others
import information from "../information.json";

export default function Card(props) {
    return (
        <div className="posts">
           
            { props.filteredInfo.map(post => {
            return(
                <div key={ post.id} className="post">
                    <h4>id:{ post.id }</h4>
                    <p>Status:{ post.status }</p>
                    <p>ETA:{ post.eta }</p>
                </div>
            )
        })}
        </div>

    );

}