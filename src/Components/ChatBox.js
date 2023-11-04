import React, { Component, useState } from "react";
import "./ChatBox.css";
import Blob from "./Blob";
import Logo from "./myLogo.png";
class ChatBox extends Component {
  // const [components, setComponents] = useState([])
  newComponent = <Blob text="Hello Human" />;
  constructor(props) {
    super(props);
    this.state = {
      components: [this.newComponent],
      input: "",
      inputarr: [],
      questions: [
        "What are my rights?",
        "What freedom do we get as citizens?",
        "How much taxes does the law say we need to pay?",
      ],
      answer: "",
    };
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim() !== "") {
      this.setState({
        answer: `Look over section I for "${input}"`,
      });
      this.props.onNewMessage(input);
    }
    const newComponent = <Blob text={this.state.answer} />;
    this.setState((prevState) => ({
      components: [...prevState.components, newComponent],
    }));
  };

  handleQuestionClick = (question) => {
    this.setState({
      input: question,
      answer: "",
      questions: [],
    });
  };

  render() {
    return (
      <div className="chat-box" id="chat-box">
        {/* <div className="image-container">
          <img
            src={Image4} // Use the imported image
            alt="Image"
          />
        </div> */}
        {/* <div className="answer-placeholder" id="answer-placeholder">
          <div className="answer-text">
            {this.state.answer || "Answer will appear here"}
          </div>
        </div> */}
        {this.state.components.map((component, index) => (
        <div className="chatBlob">
          <div className="chatImage">
            <img src={Logo} alt="Image"/> 
          </div>
        {/* <Blob text = {this.state.answer || "Hello Human!!! How can I help you?"}/> */}
        
          <div key={index}>{component}</div>
       
        </div>
         ))}
        <div className="Chat">
          <div className="suggestions">
            {this.state.questions.map((question, index) => (
              <button
                key={index}
                onClick={() => this.handleQuestionClick(question)}
                className="question-button"
              >
                {question}
              </button>
            ))}
            </div>
            <div className="query-box">
            <form onSubmit={this.handleSubmit} className="input-form">
              <input
                id="Queries"
                type="text"
                value={this.state.input}
                // onChange={(e) => this.setState({ input: e.target.value })}
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
}

export default ChatBox;
