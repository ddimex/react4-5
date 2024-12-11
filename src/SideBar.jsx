import React from "react";
import "./sideBar.css";

const SideBar = ({ roomId, setRoomId }) => {
  return (
    <div className="sidebarContainer">
      <h2>Choose your channels</h2>
      <div className="roomButtons">
        <button
          className={`roomBtn ${roomId === "General" ? "selected" : ""}`}
          onClick={() => setRoomId("General")}
        >
          General {roomId === "General"}
        </button>
        <button
          className={`roomBtn ${roomId === "Learning React" ? "selected" : ""}`}
          onClick={() => setRoomId("Learning React")}
        >
          Learning React {roomId === "Learning React"}
        </button>
        <button
          className={`roomBtn ${roomId === "Random" ? "selected" : ""}`}
          onClick={() => setRoomId("Random")}
        >
          Random {roomId === "Random"}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
