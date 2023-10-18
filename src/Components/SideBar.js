import React, { useState } from 'react';

const SideBar = (props) => {
  const { recentMessages, onNewChat } = props;
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);

  const sidebarStyles = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '200px',
    height: '100%',
    backgroundColor: '#ccc',
  };

  const newChatStyles = {
    button: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: 'darkblue',
    },
  };

  const containerStyles = {
    height: '80%',
  };

  const headerStyles = {
    marginLeft: '10px',
    marginTop: '40px',
  };

  const listStyles = {
    overflowY: showAll ? 'auto' : 'hidden',
    maxHeight: '100%',
  };

  return (
    <div style={sidebarStyles}>
      <div style={containerStyles}>
        <button
          style={{
            ...newChatStyles.button,
            ...(hovered ? newChatStyles.buttonHover : {}),
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onNewChat}
        >
          + New Chat
        </button>
        <h1 style={headerStyles}>Recent</h1>
        <ul style={listStyles}>
          {recentMessages.slice(0, showAll ? recentMessages.length : 5).map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        {!showAll && recentMessages.length > 5 && (
          <button onClick={() => setShowAll(true)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
