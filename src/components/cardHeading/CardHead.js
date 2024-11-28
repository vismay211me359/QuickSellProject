import React from "react";
import plusIcon from "../../assets/images/icons/add.svg";
import threeDots from "../../assets/images/icons/3_dot_menu.svg";
import "./CardHead.css";
import { findNameIcon } from "../../utils/handlers";
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
import usersPhoto from "../../assets/images/ProfilePic/profilePhoto.webp"

const CardHeader = ({ index,users }) => {
  const grouping = useSelector((state) => state.grouping.grouping);
  const result=findNameIcon(grouping,index,users);
  const images={
    "No-priority.svg":noPriority,
    "Img-Low_Priority.svg":lowPriority,
    "Img-Medium_Priority.svg":mediumPriority,
    "Img-High_Priority.svg":highPriority,
    "SVG-Urgent_Priority_colour.svg":urgent,
    "Backlog.svg":backlog,
    "To-do.svg":todo,
    "in-progress.svg":inProgress,
    "Done.svg":done,
    "Cancelled.svg":cancelled,
    "userIcon":usersPhoto,
  }
  const address=images[result.icon]
  return (
    <div className="card-header">
      <div className="card-header-left">
        <img src={address} alt={`${result.name} Icon`} className="icon" />
        <span className="name">{result.name}</span>
        <span className="count">{0}</span>
      </div>
      <div className="card-header-right">
        <img src={plusIcon} alt="Add" className="add-button" />
        <img src={threeDots} alt="Menu" className="menu-button" />
      </div>
    </div>
  );
};

export default CardHeader;

