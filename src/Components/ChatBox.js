import React, { Component } from 'react';
import './ChatBox.css';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim() !== '') {
      this.props.onNewMessage(input); // Pass the message to the parent (App)
      this.setState({ input: '' }); // Clear the input field
    }
  }

  render() {
    return (
      <div className="chat-box">
        <div className="messages">
          {/* Display messages, both user-entered and received messages */}
        </div>
        <div className="answer-placeholder">
          Answer will appear here
        </div>
        <form onSubmit={this.handleSubmit} className="input-form">
          <input
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
