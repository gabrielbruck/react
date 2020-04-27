import React from "react";

class Alive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  componentDidMount() {
    alert("I am alive! :)");
  }

  render() {
    return <div>Thank you for checking the box!</div>;
  }
}

export default Alive;
