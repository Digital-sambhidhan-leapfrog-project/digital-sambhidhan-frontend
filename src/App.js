import React, { useState } from 'react';
import Nav from './Components/Nav';
import ChatBox from './Components/ChatBox';
import SideBar from './Components/SideBar';
import './App.css';

function App() {
  const [recentMessages, setRecentMessages] = useState([]);

  const addRecentMessage = (message) => {
    setRecentMessages([message, ...recentMessages]);
  };

  const handleNewChatClick = () => {
    // Clear the input and answer fields
    const chatBox = document.getElementById('chat-box');
    chatBox.querySelector('#Queries').value = ''; // Clear the input field
    chatBox.querySelector('#answer-placeholder').textContent = 'Answer will appear here'; // Reset the answer field
  };

  return (
    <div className="App">
      <Nav />
      <ChatBox onNewMessage={addRecentMessage} />
      <SideBar recentMessages={recentMessages} onNewChat={handleNewChatClick} />
    </div>
  );
}

export default App;
