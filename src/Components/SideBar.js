import React, { useState, useRef, useEffect } from "react";
import "./SideBar.css";

const SideBar = (props) => {
  const { recentMessages, onNewChat } = props;
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);
  const parentContainerRef = useRef(null);

  useEffect(() => {
    if (parentContainerRef.current) {
      const parentContainerWidth = parentContainerRef.current.offsetWidth;
      console.log("Parent Container Width: ", parentContainerWidth);
    }
  }, []);

  const sidebarStyles = {
    position: "fixed",
    left: 0,
    top: "14vh", 
    width: "15%",
    height: "100%",
    backgroundColor: "#0C0F50",
    color: "white",
  };

  const newChatStyles = {
    button: {
      backgroundColor: "blue",
      color: "white",
      padding: "2% 4%",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "darkblue",
    },
  };

  const containerStyles = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2%",
  };

  const headerStyles = {
    fontSize: "120%",
    marginBottom: "2%",
  };

  const listStyles = {
    overflowY: showAll ? "auto" : "hidden",
    maxHeight: "100%",
  };

  return (
    <div ref={parentContainerRef} style={sidebarStyles}>
      <div style={containerStyles}>
        <button
          style={{
            ...newChatStyles.button,
            ...(hovered ? newChatStyles.buttonHover : {}),
            marginBottom: "4%",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onNewChat}
        >
          + New Chat
        </button>
        <h1 style={headerStyles}>Recent</h1>
        <ul style={listStyles} className="sidebar-list">
          {recentMessages.slice(0, showAll ? recentMessages.length : 5).map((message, index) => (
            <li key={index} className="list-button">
              <span className="list-icon"></span>
              {message}
            </li>
          ))}
        </ul>
        {!showAll && recentMessages.length > 5 && (
          <button onClick={() => setShowAll(true)}>Show More</button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
