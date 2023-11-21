import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import Blob from "./Blob";
import userLogo from "./userLogo.png"; 
import answerLogo from "./myLogo.png"; 

function ChatBox(props) {
  const [components, setComponents] = useState([]);
  const [query, setQuery] = useState("");
  const [questions] = useState([
    "What are my rights?",
    "What freedom do we get as citizens?",
    "How much taxes does the law say we need to pay?",
  ]);
  const [answer, setAnswer] = useState("");
  const [chatItems, setChatItems] = useState([
    { text: "Hello Human", isQuestion: false }, 
  ]);

  const addChatItem = (item, isQuestion) => {
    setChatItems((prevItems) => [...prevItems, { text: item, isQuestion }]);
  };

  useEffect(() => {
    if (answer !== "") {
      addChatItem(answer, false); 
    }
  }, [answer]);

  useEffect(() => {
    const chatComponents = chatItems.map((item, index) => (
      <div
        className={`chatBlob ${item.isQuestion ? "question" : "answer"}`}
        key={index}
      >
        <div className="chatImage">
          <img src={item.isQuestion ? userLogo : answerLogo} alt="Image" />
        </div>
        <div>{<Blob bgcolor = {item.isQuestion ? "#0D0F37" : "#000000"} text={item.text} />}</div>
      </div>
    ));
    setComponents(chatComponents);
  }, [chatItems]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      addChatItem(query, true);
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:8000/chat', {
          method: 'POST', // or 'GET' or 'PUT' or 'DELETE' depending on your API
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Additional headers for CORS if needed:
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        Authorization: `Bearer ${token}`,
            // You may need to include additional headers, such as authentication tokens
          },
          body: JSON.stringify({query}),
        });
  
        // Handle the response, e.g., check if the request was successful
        if (response.ok) {
          const reply = await response.json();
        setTimeout(() => {
          addChatItem(`${reply}`, false); 
        }, 1000);
      setQuery(""); 
        } else {
          console.error('Failed to sign up:', response.statusText);
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }


    }
  };

  const handleQuestionClick = (question) => {
    setQuery(question);
    setAnswer("");
  };

  return (
    <div className="chat-box" id="chat-box">
      {components}
      <div className="Chat">
        <div className="suggestions">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="question-button"
            >
              {question}
            </button>
          ))}
        </div>
        <div className="query-box">
          <form onSubmit={handleSubmit} className="input-form">
            <input
              id="Queries"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your queries here"
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
