import React from "react";
import withCounter from "./withCounter";

class ClickCount extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((prev) => ({
  //     count: prev.count + 1,
  //   }));
  // };

  render() {
    //destructure count and incrementCount from this.props
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCount, 5);
