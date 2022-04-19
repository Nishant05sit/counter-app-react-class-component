import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  Increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1000
    }));
  }

  Decrement() {
    if (this.state.count != 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1000
      }));
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>decrement</button>
      </div>
    );
  }
}

export default App;
