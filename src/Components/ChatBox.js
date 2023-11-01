import React, { Component } from "react";
import "./ChatBox.css";
import Image4 from "./Image4.png"; // Import the image

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      questions: [
        "What are my rights?",
        "What freedom do we get as citizens?",
        "How much taxes does the law say we need to pay?",
      ],
      answer: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim() !== "") {
      this.setState({
        answer: `Look over section I for "${input}"`,
      });
      this.props.onNewMessage(input);
    }
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
        <div className="image-container">
          <img
            src={Image4} // Use the imported image
            alt="Image"
          />
        </div>
        <div className="answer-placeholder" id="answer-placeholder">
          <div className="answer-text">
            {this.state.answer || "Answer will appear here"}
          </div>
        </div>
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
          <form onSubmit={this.handleSubmit} className="input-form">
            <input
              id="Queries"
              type="text"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
              placeholder="Enter your queries here"
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBox;
