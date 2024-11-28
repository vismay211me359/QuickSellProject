import React from "react";
import "./TheCard.css";
import userIcon from "../../assets/images/ProfilePic/profilePhoto.webp"
import DoneIcon from "../../assets/images/icons/Done.svg"
import { userDataObject } from "../../utils/handlers";


const TheCard = ({ data, users }) => {
    const userData = userDataObject(users);
    return (
        <div className="card">
            <div>
                <div className="card-header">
                    <span className="card-id">{data.id}</span>
                </div>
                <div className="card-title-container">
                    <img src={DoneIcon} alt="Display Icon" className="icon" />
                    <h2 className="card-title">{data.title}</h2>
                </div>
                <div className="card-footer">
                    {data.tag.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="card-icon-container">
                                <img src={DoneIcon} alt="Display Icon" className="icon" />
                            </div>
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