function TaskList ({tasks, deleteTask}) {
    return (
        <ul>
        {tasks.map((task, index) => {
          return <li style={{ display: "flex",
          justifyContent: "space-between",
          margin: "10px 0"}} key={index}>{task}
          <button onClick={()=> deleteTask(index)}>Delete</button>
          </li>
        })}
      </ul>
    )
}

export default TaskList;