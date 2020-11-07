// React core
import React from "react";

//import others
import information from "../information.json";

export default function CardInfo() {
    return (
        <div className="posts">
           
            { information.map(post => {
            return(
                <div key={ post.id} className="post-list">
                    <h4>id:{ post.id }</h4>
                    <p>Status:{ post.status }</p>
                    <p>ETA:{ post.eta }</p>
                    <p>Parcel_id:{ post.parcel_id }</p>
                    <p>Sender:{ post.sender }</p>
                    <p>Verification Required:{ post.verification_required }</p>
                    <p>Location id:{ post.location_id }</p>
                    <p>Location Name:{ post.location_name }</p>
                    <p>Location Coordinate Latitude:{ post.location_coordinate_latitude }</p>
                    <p>Location Coordinate Longitude:{ post.location_coordinate_longitude }</p>
                    <p>Location Status Ok:{ post.location_status_ok }</p>
                    <p>User Phone:{ post.user_phone }</p>
                    <p>User Name:{ post.user_name }</p>
                    <p>Notes:{ post.notes }</p>
                    <p>Last Updated:{ post.last_updated }</p>
                </div>
            )
        })}
        </div>

    );

}