import React from "react";
import { Component } from "react";

// put some examples to learn about yield
function* testing() {
  while (true) {
    yield 1;
    yield 2;
    yield 3;
  }
}

class App extends Component {
  render() {
    // create iterator from testing
    // to get all data from it
    const iterator = testing();
    // in last commit i dont have loop to yield data on it
    // now my explain is on while loop
    // output is diffrent from last commit now output is 1 & 2 & 3 &1
    // but what is the explanition about this
    // yield is a {{{{LOOP}}}}
    // and when yield get last data 1 as a 2 iteration in loop
    // it stops to check if it has 1
    // so it is one and stops To understand it goto directory sagas and users.js
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    return <div></div>;
  }
}

export default App;
