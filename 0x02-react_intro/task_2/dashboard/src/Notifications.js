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
          position: "absolute",
          right: "20px",
          top: "20px",
          cursor: "pointer",
        }}
        aria-label="close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-default>New course available</li>
        <li data-urgent>New resume available</li>
        <li
          data-urgent
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};
