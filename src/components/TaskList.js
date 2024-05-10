import React from "react";
import Task from "./Task";
function TaskList({tasks, handleDelete}) {

  const taskList = tasks.map((task, id)=>
    <Task key={id} task={task} text={task.text} category = {task.category} handleDelete = {handleDelete}/>
  )

  return (
    <div className="tasks">
      {taskList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
