import React from "react";
import { Component } from "react";

// put some examples to learn about yield
function* testing() {
  yield 1;
  yield 2;
  yield 3;
}

class App extends Component {
  render() {
    // create iterator from testing
    // to get all data from it
    const iterator = testing();
    // some consoles to check The output data
    // to trace it first 1 The output value
    // but in his childs value with name done
    // this value is boolean but this boolean value
    // always false
    // & two & three has the same output
    //but the last one is output has undifend value but
    // his boolean is true but how??
    // this what yield done this is not output this is
    // (GENERATE) its generate value called 1 & 2 and 3
    // not matter if called any shit but its generate var
    // with this values have value and boolean(done)
    // last one is done because all of 1 & 2 and three
    // are generated
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    return <div></div>;
  }
}

export default App;
