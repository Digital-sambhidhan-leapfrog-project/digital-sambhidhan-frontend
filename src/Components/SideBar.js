import React, { useState } from 'react';

const SideBar = (props) => {
  const { recentMessages } = props;
  const [showAll, setShowAll] = useState(false);

  const sidebarStyles = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '200px', /* Adjust the width as needed */
    height: '100%', /* Full height */
    backgroundColor: '#ccc', /* Background color */
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
        <button>
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

