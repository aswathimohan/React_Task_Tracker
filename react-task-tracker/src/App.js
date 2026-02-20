import { useState } from "react";
import TaskList from "./TaskList";


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial" }}>
      <h1>Task Tracker</h1>
      <input type="text" placeholder="Add Task" value={task} onChange={(e) => { setTask(e.target.value) }} />

      <button onClick={addTask}>Add Task</button>

      {/* <ul>
        {tasks.map((task, index) => {
          return <li style={{ display: "flex",
          justifyContent: "space-between",
          margin: "10px 0"}} key={index}>{task}
          <button onClick={()=> deleteTask(index)}>Delete</button>
          </li>
        })}
      </ul> */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
