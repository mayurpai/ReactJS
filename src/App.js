import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { Welcome } from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Destructuring } from "./components/Destructuring";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

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
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet></StyleSheet>
      <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Success</h1> */}
      <Form></Form>
    </div>
  );
}

export default App;
