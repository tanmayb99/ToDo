import React, { useState } from "react";
import "./styles.css";
import Item from "./component/item";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Be ready for class at 9" },
    { text: "Understand React and do more coding" },
    { text: "Be safe from COVID-19" }
  ]);

  function deleteHandler(index) {
    setTodos(todos.filter(event => todos.indexOf(event) !== index));
  }

  function editHandler(myString, index) {
    //let myString =
    const element = document.getElementById(todos[index].text);
    element.firstElementChild.innerHTML = "Be ready for class at 10";
    console.log(element);
  }

  function doneHandler(event, index) {
    const element = document.getElementById(todos[index].text);
    element.classList.toggle("crossed-line");
  }

  const one = todos.map((element, index) => {
    return (
      <Item
        key={index}
        number={index + 1}
        item={element.text}
        remove={() => deleteHandler(index)}
        done={event => doneHandler(event, index)}
        edit={event => editHandler(event, index)}
      />
    );
  });

  return (
    <div className="app">
      <div className="todo-list">{one}</div>
    </div>
  );
}

//export default App;
