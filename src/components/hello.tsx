import React from "react";

// Properties exposed by the component
interface Props {
  name: string;
}

// Component state
interface State {
  value: number;
}

export default class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  render() {
    return <span>Hello {this.props.name}!</span>;
  }
}
