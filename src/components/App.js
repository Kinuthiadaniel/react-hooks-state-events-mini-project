import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

const categories = CATEGORIES;
const selectedButton = (category) => {
  // Filter tasks based on the selected category
  const filteredTasks = category === "All" ? TASKS : TASKS.filter(task => task.category === category);
  setTasks(filteredTasks);
};
const handleDelete = (index) => {
  // Remove the task at the specified index from the list
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};

function handleTaskFormSubmit(task){
  setTasks(...tasks, task)
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {categories} selectedButton= {selectedButton}/>
      <NewTaskForm categories={categories.filter((cat)=> cat !== "All")} handleTaskSubmit={handleTaskFormSubmit}/>
      <TaskList tasks = {tasks} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
