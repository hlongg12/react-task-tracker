import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping",
      day: "Feb 4th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Sleeping",
      day: "Feb 12th at 6:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Playing soccer",
      day: "Feb 5th at 5:30pm",
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 'No tasks to show'}
    </div>
  );
}

export default App;
