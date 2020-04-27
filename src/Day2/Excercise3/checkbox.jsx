import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  savingCheckbox(el) {
    this.setState({ checked: el });
  }

  render() {
    return (
      <div>
        <input
          type="Checkbox"
          onClick={(el) => {
            this.savingCheckbox(el.target.checked);
          }}
        ></input>
        <label>Check the box</label>
        {this.state.checked && this.props.children}
      </div>
    );
  }
}

export default Checkbox;
