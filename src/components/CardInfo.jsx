// React core
import React from "react";
import { Link } from "react-router-dom";


//import others
import "../css/App.css";
import items from "./HomePage";

export default function CardInfo({ match, data } ) {

    //Filters the item of the whole array with the same ID
    const state = data.filter(item => {
        return (item.id === match.params.id);
    });

    console.log(state);

    const {
        eta,
        id,
        last_updated,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_id,
        location_name,
        notes,
        parcel_id,
        sender,
        status,
        user_name,
        user_phone,
        verification_required,
        location_status_ok,
      
    } = state[0]; //filter returns only one array. So index is "0"

    return(
        <div key={ id } className="post-list">
            <h4>id:{ id }</h4>
            <p>Status:{ status }</p>
            <p>ETA:{ eta }</p>
            <p>Parcel_id:{ parcel_id }</p>
            <p>Sender:{ sender }</p>
            <p>Verification Required:{ verification_required }</p>
            <p>Location id:{ location_id }</p>
            <p>Location Name:{ location_name }</p>
            <p>Location Coordinate Latitude:{ location_coordinate_latitude }</p>
            <p>Location Coordinate Longitude:{ location_coordinate_longitude }</p>
            <p>Location Status Ok:{ location_status_ok }</p>
            <p>User Phone:{ user_phone }</p>
            <p>User Name:{ user_name }</p>
            <p>Notes:{ notes }</p>
            <p>Last Updated:{ last_updated }</p>
        </div>
    )
}