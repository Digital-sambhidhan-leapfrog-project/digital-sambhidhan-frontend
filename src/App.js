import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ChatBox from './Components/ChatBox';
import SideBar from './Components/SideBar';

function App() {
  const [recentMessages, setRecentMessages] = useState([]);

  const addRecentMessage = (message) => {
    setRecentMessages([...recentMessages, message]);
  };

  return (
    <div className="App">
      <Nav />
      <ChatBox onNewMessage={addRecentMessage} />
      <SideBar recentMessages={recentMessages} />
    </div>
  );
}

export default App;

