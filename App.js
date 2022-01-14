import { useState } from "react/cjs/react.development";
import InputForm from "./InputForm";
import Todo from "./Todo";
import DarkModeLightMode from "./DarkModeLightMode";
import "./App.css";

const dummy_data = [
  { title: "Testindasdasdasdasdasdssss", date: "2021-10-10", time: "12:30", id: 1 },
  { title: "todo2", date: "2020-10-02", time: "12:30", id: 2 },
  { title: "todo3", date: "2024-10-10", time: "12:30", id: 3 },
  { title: "todo4", date: "2023-10-02", time: "12:30", id: 4 }
];

function App() {
  const [incomingTodoData, captureIncomingTodoData] = useState();

  //CODE BELOW ADDS CAPTURED USER INPUT FROM INPUTFORM.JS TO dummy_data ARRAY
  const Capture = (captured) => {
    captureIncomingTodoData(captured);
    dummy_data.push(captured);
  };

  return (
    <div className="App">
      <InputForm capturedData={Capture} />
      <Todo data={dummy_data} />
      <DarkModeLightMode />
    </div>
  );
}

export default App;
