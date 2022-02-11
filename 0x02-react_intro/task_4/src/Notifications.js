import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          float: "right",
          cursor: "pointer",
        }}
        aria-label="close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default" >New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};
