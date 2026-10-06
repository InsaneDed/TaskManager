import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import type { Task } from "./types"
import { Home } from "./pages/Home"
import { Stats } from "./pages/Stats"

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("ts-tasks")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("ts-tasks", JSON.stringify(tasks))
  }, [tasks])

  function handleSetTasks(newTasks: Task[]): void {
    setTasks(newTasks)
  }

  return (
    <Routes>
      <Route path="/" element={<Home tasks={tasks} setTasks={handleSetTasks} />} />
      <Route path="/stats" element={<Stats tasks={tasks} />} />
    </Routes>
  )
}

export default App