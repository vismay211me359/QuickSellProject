import React from "react";
import "./TheCard.css";
import userIcon from "../../assets/images/ProfilePic/profilePhoto.webp"
import { userDataObject } from "../../utils/handlers";
import { useSelector } from "react-redux";

import backlog from "../../assets/images/icons/Backlog.svg";
import cancelled from "../../assets/images/icons/Cancelled.svg";
import done from "../../assets/images/icons/Done.svg";
import todo from "../../assets/images/icons/To-do.svg";
import inProgress from "../../assets/images/icons/in-progress.svg";
import noPriority from "../../assets/images/icons/No-priority.svg";
import lowPriority from "../../assets/images/icons/Img-Low_Priority.svg";
import mediumPriority from "../../assets/images/icons/Img-Medium_Priority.svg";
import highPriority from "../../assets/images/icons/Img-High_Priority.svg";
import urgent from "../../assets/images/icons/SVG-Urgent_Priority_colour.svg";


const TheCard = ({ data, users }) => {
    const userData = userDataObject(users);
    const grouping = useSelector((state) => state.grouping.grouping);
    let showProgress=true;
    let showPriority=true;
    if(grouping==="Status"){
        showProgress=false;
        showPriority=true;
    }
    else if(grouping==="User"){
        showProgress=true;
        showPriority=true;
    }
    else{
        showProgress=true;
        showPriority=false;
    }
    const images = {
        0: noPriority,
        1: lowPriority,
        2: mediumPriority,
        3: highPriority,
        4: urgent,
        "Backlog": backlog,
        "Todo": todo,
        "In progress": inProgress,
        "Done": done,
        "Cancelled": cancelled,
    }
    return (
        <div className="card">
            <div>
                <div className="card-header">
                    <span className="card-id">{data.id}</span>
                </div>
                <div className="card-title-container">
                    {showProgress  && <img src={images[data.status]} alt="Display Icon" className="icon" />}
                    <h2 className="card-title">{data.title}</h2>
                </div>
                <div className="card-footer">
                    {data.tag.map((feature, index) => (
                        <div key={index} className="feature-item">
                            {showPriority && <div className="card-icon-container">
                                <img src={images[data.priority]} alt="Display Icon" className="icon" />
                            </div>}
                            <div className="card-badge">{feature}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="avatar-container">
                <img
                    className="card-avatar"
                    src={userIcon}
                    alt="User Avatar"
                />
                <div
                    className={`status-indicator ${userData[data.userId].available ? "active" : "inactive"
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default TheCard;
