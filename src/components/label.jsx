import React from "react";

class Label extends React.Component {
  render() {
    return <pre>{this.props.text}</pre>;
  }
}

export default Label;
