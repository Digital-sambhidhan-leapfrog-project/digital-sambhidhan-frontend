import React, { useState } from 'react';
import Nav from './Components/Nav';
import ChatBox from './Components/ChatBox';
import SideBar from './Components/SideBar';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App({setting}) {
  const [recentMessages, setRecentMessages] = useState([]);

  const addRecentMessage = (message) => {
    setRecentMessages([message, ...recentMessages]);
  };

  const handleNewChatClick = () => {
    const chatBox = document.getElementById('chat-box');
    chatBox.querySelector('#Queries').value = '';
    chatBox.querySelector('#answer-placeholder').textContent = 'Answer will appear here';
  };

  if (setting == "Signup") {
    return (
      <div className="App">
        <Nav/>
        <SignUp/>
      </div>
    );
  }
  if (setting == "Chat") {
    return (
      <div className="App">
        <Nav/>
        <ChatBox onNewMessage={addRecentMessage} />
      </div>
    );
  }
  if (setting == "Login") {
    return (
      <div className="App">
        <Nav/>
        <Login/>
      </div>
    );
  }
}
  // return (
  //   <div className="App">
  //     <Nav/>
  //     {setting == "Signup"} && <SignUp/> 
  //     || {setting == "Chat"} && <ChatBox onNewMessage={addRecentMessage} />
  //     || {setting == "Login"} && <Login/>
  //     {/* <ChatBox onNewMessage={addRecentMessage} /> */}
  //     {/* <SideBar recentMessages={recentMessages} onNewChat={handleNewChatClick} onQuestionClick={addRecentMessage} /> */}
  //   </div>
  // );
// }

export default App;
