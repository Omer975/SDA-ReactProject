import React from "react";

export default function SearchBox(props) {
    return (
        <div className="search-bar">
            <input onChange={props.handleInput} placeholder="Search" />
            
        </div>
    );
}