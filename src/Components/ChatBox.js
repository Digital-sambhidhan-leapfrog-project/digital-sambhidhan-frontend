import React, { Component } from 'react';
import './ChatBox.css';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      questions: [
        'What are my rights?',
        'What freedom do we get as citizens?',
        'How much taxes does the law say we need to pay?',
      ],
      answer: '', // Added state for the answer
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim() !== '') {
      this.setState({
        answer: `Look over section I for "${input}"`,
      });
      this.props.onNewMessage(input);
    }
  }

  handleQuestionClick = (question) => {
    this.setState({ input: question, answer: '' });
  }

  render() {
    return (
      <div className="chat-box" id="chat-box">
        <div className="messages">
          {/* Display messages, both user-entered and received messages */}
        </div>
        <div className="answer-placeholder" id="answer-placeholder">
          {this.state.answer || 'Answer will appear here'}
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
        </div>
        <form onSubmit={this.handleSubmit} className="input-form">
          <input
            id="Queries"
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            placeholder="Enter your queries here"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatBox;
