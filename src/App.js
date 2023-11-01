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
    const chatBox = document.getElementById('chat-box');
    chatBox.querySelector('#Queries').value = '';
    chatBox.querySelector('#answer-placeholder').textContent = 'Answer will appear here';
  };

  return (
    <div className="App">
      <Nav />
      <ChatBox onNewMessage={addRecentMessage} />
      <SideBar recentMessages={recentMessages} onNewChat={handleNewChatClick} onQuestionClick={addRecentMessage} />
    </div>
  );
}

export default App;

