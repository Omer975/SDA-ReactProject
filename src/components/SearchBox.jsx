import React from "react";

export default function SearchBox(props) {
    return (
        <div className="search-bar">
            <input onChange={props.handleInput} placeholder="Search" />
            {/*Later willl be search*/}
            {/* <a  href="#">Search</a> */}
        </div>
    );
}