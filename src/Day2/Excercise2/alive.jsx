import React from "react";

class Alive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    };
  }

  componentDidMount() {
    alert("I am alive! :)");
  }

  render() {
    const { message } = this.state;
    return <div>{message}</div>;
  }
}

export default Alive;
