function TaskList ({tasks, deleteTask, toggleComplete}) {
    return (
        <ul>
        {tasks.map((task, index) => {
          return <li style={{ display: "flex",
          justifyContent: "space-between",
          margin: "10px 0", alignItems: "center"}} key={index}>
             <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
           <span
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black",
            }}
          >
            {task.text}
          </span>
          <button onClick={()=> deleteTask(index)}>Delete</button>
          </li>
        })}
      </ul>
    )
}

export default TaskList;