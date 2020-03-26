import React from "react";

export default function Item({ item, remove, done, edit }) {
  return (
    <div id={item}>
      <span>{item}</span>
      <button onClick={remove}>Delete</button>
      <button onClick={done}>Done</button>
      <button onClick={edit}>Edit</button>
    </div>
  );
}
