import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import Blob from "./Blob";
import userLogo from "./userLogo.png"; 
import answerLogo from "./myLogo.png"; 

function ChatBox(props) {
  const [components, setComponents] = useState([]);
  const [input, setInput] = useState("");
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
        <div>{<Blob text={item.text} />}</div>
      </div>
    ));
    setComponents(chatComponents);
  }, [chatItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addChatItem(input, true); 
      setTimeout(() => {
        addChatItem(`Look at section I for "${input}"`, false); 
      }, 1000);
      setInput(""); 
    }
  };

  const handleQuestionClick = (question) => {
    setInput(question);
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
