import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter counter={counter} setCounter={setCounter} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo counter={counter} />
        <ExponentThree counter={counter} />
        <ExponentFour counter={counter} />
        <ExponentFive counter={counter} />
        <ExponentSix counter={counter} />
      </div>
    </div>
  );
}

export default App;
