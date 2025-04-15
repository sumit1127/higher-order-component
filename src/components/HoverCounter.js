import React from "react";
import withCounter from "./withCounter";

class HoverCounter extends React.Component {
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
    //destructure the count and incrementCount from this.props
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseMove={incrementCount}>{count}</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 2);
