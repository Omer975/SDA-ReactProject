// React core
import React from "react";
import { Link } from "react-router-dom";


//import others
import information from "../information.json";
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






    // return (
    //     <div>
            
    //         <div className="button-2">
    //             <Link className="button" to="/">
    //                 Start Page
    //             </Link>
    //         </div>
    //         <h2>Card Info</h2>
    //         <div className="posts">
    //             { items.map(post => {
    //             return(
    //                 <div key={ post.id} className="post-list">
    //                     <h4>id:{ post.id }</h4>
    //                     <p>Status:{ post.status }</p>
    //                     <p>ETA:{ post.eta }</p>
    //                     <p>Parcel_id:{ post.parcel_id }</p>
    //                     <p>Sender:{ post.sender }</p>
    //                     <p>Verification Required:{ post.verification_required }</p>
    //                     <p>Location id:{ post.location_id }</p>
    //                     <p>Location Name:{ post.location_name }</p>
    //                     <p>Location Coordinate Latitude:{ post.location_coordinate_latitude }</p>
    //                     <p>Location Coordinate Longitude:{ post.location_coordinate_longitude }</p>
    //                     <p>Location Status Ok:{ post.location_status_ok }</p>
    //                     <p>User Phone:{ post.user_phone }</p>
    //                     <p>User Name:{ post.user_name }</p>
    //                     <p>Notes:{ post.notes }</p>
    //                     <p>Last Updated:{ post.last_updated }</p>
    //                 </div>
    //             )
    //         })}
    //         </div>
    //     </div>

    // );

}