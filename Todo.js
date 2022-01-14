import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faTh } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";

const remove = <FontAwesomeIcon icon={faTimes} />; // X
const lines = <FontAwesomeIcon icon={faBars} />; // lines akin to list
const grid = <FontAwesomeIcon icon={faTh} />; // blocks akin to grid like styling

function Todo(props) {
  const dummy_data = props.data; //code here pulls dummy data from app.js to populate todo divs

  const [list, setList] = useState(dummy_data);

  function removeItem(id) {
    //function removes todo based on ID
    let updatedList = list.filter((data) => data.id !== id);
    setList(updatedList);
  }

  // This code is for changing the layout of the todos
  const [todoLayout, updateTodoLayout] = useState("todoContainer"); // This state changes layout of todos (grid / list)
  const [todoItemLayout, updateTodoItemLayout] = useState("todoBlock"); //this state changes each todos styling to fit the layout
  const [layoutIcon, updateLayoutIcon] = useState(lines); //this state changes button icon based on layout

  function todoLayoutChange() {
    updateTodoLayout("todoList");
    updateTodoItemLayout("todoListItem");
    updateLayoutIcon(grid);

    if (todoLayout === "todoList") {
      updateTodoLayout("todoContainer");
    }
    if (todoItemLayout === "todoListItem") {
      updateTodoItemLayout("todoBlock");
    }
    if (layoutIcon === grid) {
      updateLayoutIcon(lines);
    }
  }
  //

  const [openModal, setOpenModal] = useState(false); //SHOULD BE USED IN APP.JS NOT HERE //WIP

  const todoInformation = list.map((data) => (
    <div
      key={data.id}
      style={{ background: data.color }}
      className={todoItemLayout}
      onClick={() => setOpenModal(true)}
    >
      {/* <div className="removeTodoButton" onClick={() => removeItem(data.id)}>
        {remove}
      </div> */}
      <p className="todo">{data.title}</p>
      <p className="date">
        Due: {data.date}, {data.time}
      </p>
    </div>
  ));
  return (
    <div className={todoLayout}>
      {openModal && <Modal />}
      {todoInformation}
      <div>
        <button className="layoutChangeButton" onClick={todoLayoutChange}>
          {layoutIcon}
        </button>
      </div>
    </div>
  );
}

export default Todo;

// return <div className="todoContainer">{todoInformation}</div>;
