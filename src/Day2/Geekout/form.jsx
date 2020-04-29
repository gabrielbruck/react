import React from "react";
import Chatbox from "./chat";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showChat: [] };
  }

  thisData = (event) => {
    this.setState({ ...event });
  };

  render() {
    return (
      <div>
        <Chatbox dataInput={this.thisData} />
        {this.state.showChat.map((li) => {
          return (
            <div className="chatText" key={li}>
              {li}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Form;
