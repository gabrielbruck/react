import React from "react";

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: " ",
      showChat: [],
    };
  }

  savingChat = (event) => {
    this.setState({ chat: event.target.value });
  };

  submitChat = (event) => {
    event.preventDefault();
    let showChat = this.state.showChat;
    let chat = this.state.chat;
    showChat.push(chat);
    this.setState({ showChat: showChat });
    this.setState({ chat: " " });
    this.props.dataInput(this.state);
  };

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.submitChat}>
          <input
            type="text"
            className="search-bar"
            placeholder="Chat..."
            value={this.state.chat}
            onChange={this.savingChat}
          />
        </form>
      </div>
    );
  }
}

export default Chatbox;
