import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { Welcome } from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Destructuring } from "./components/Destructuring";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
function App() {
  return (
    <div className="App">
      {/* <Greet name="Class" lname="Component Props" />
      <Greet />
      <Welcome name="Reshma" lname="Pai">
        {" "}
        <p>This Is A Child</p>{" "}
      </Welcome>
      <Welcome name="XY" lname="Z">
        {" "}
        <button>Action!</button>{" "}
      </Welcome>
      <Welcome /> */}
      {/* <Message /> */}
      {/* <Counter/> */}
      {/* <Destructuring name="Mayur" lname="Pai"></Destructuring> */}
      {/* <FunctionClick></FunctionClick> */}
      <EventBind />
    </div>
  );
}

export default App;
