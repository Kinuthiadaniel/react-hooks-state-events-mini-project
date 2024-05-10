import React from "react";

function Task({task,text,category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>handleDelete(task)}>X</button>
    </div>
  );
}

export default Task;
