import "./InputForm.css";
import { useState } from "react";

const colors = ["orange", "green", "red", "blue"];

function InputForm(props) {
  const [todo, todoHandler] = useState(""); // captures todo title
  const [date, dateHandler] = useState(""); // captures todo date
  const [time, timeHandler] = useState(""); //captures todo time
  const [color, setColor] = useState("orange"); //checks what color should be selected

  const [character, setCharacter] = useState(0);
  const [characterDisplayClass, updateCharacterDisplayClass] = useState(
    "characterCountHidden"
  );

  function todoCapture(event) {
    todoHandler(event.target.value);

    setCharacter(event.target.value.length);
    if (character >= 15) {
      updateCharacterDisplayClass("characterCount");
    }
    if (character >= 25) {
      updateCharacterDisplayClass("characterCountOrange");
    }
    if (character >= 38) {
      updateCharacterDisplayClass("characterCountRed");
    }
  }

  function dateCapture(event) {
    dateHandler(event.target.value);
  }

  function timeCapture(event) {
    timeHandler(event.target.value);
  }

  // function that stores captured inputs into object, which then gets passed via props to app.js
  function storeCapturedInputs(event) {
    event.preventDefault();
    let ID = Math.random();
    const capturedInputs = {
      title: todo,
      date: date,
      time: time,
      id: ID,
      color, //<== code from discord passing the selected color into todo data so it can be displayed in Todo.js
    };
    props.capturedData(capturedInputs);

    event.target.reset();
    todoHandler("");
    dateHandler("");
    timeHandler("");
  }

  return (
    <div className="formContainer">
      <form action="" className="form" onSubmit={storeCapturedInputs}>
        <div className="todoNameInfo">
          <label htmlFor="">Todo</label>
          <p className={characterDisplayClass}>{character}/50</p>
        </div>
        <input onChange={todoCapture} type="text" maxLength="50"/>
        {/* <p className={divClass}>{characters}/50</p> */}
        <label htmlFor="">Date</label>
        <input onChange={dateCapture} type="date"/>

        <label htmlFor="">Time</label>
        <input onChange={timeCapture} type="time"/>

        <div className="colorPickerContainer">
          <p>Pick a color for your todo: </p>
          <div className="colorPicker">
            {colors.map((c) => (
              <div
                style={{
                  // How does this work????
                  boxShadow: c === color ? "0 0 0px 2px " : null, // How does this work????
                  margin: 5, // How does this work????
                }} // How does this work????
                onClick={() => setColor(c)} // How does this work????
                className={`${c} color`} //How does this work????
              ></div>
            ))}
          </div>
        </div>
        <button className="submitForm">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;
