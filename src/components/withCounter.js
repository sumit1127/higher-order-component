import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prev) => ({
        count: prev.count + incrementNumber,
      }));
    };
    render() {
      return (
        <WrappedComponent
          incrementCount={this.incrementCount}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

//hoc is a function that takes component as an argument and return new enhanced component
