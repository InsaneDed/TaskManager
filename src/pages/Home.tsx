import { useState } from "react"
import { Link } from "react-router-dom"
import type { Task, FilterType, Priority } from "../types"
import { TaskForm } from "../components/TaskForm"
import { TaskItem } from "../components/TaskItem"
import { Filter } from "../components/Filter"

interface HomeProps {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

export function Home({ tasks, setTasks }: HomeProps) {
  const [filter, setFilter] = useState<FilterType>("all")

  function addTask(text: string, priority: Priority): void {
    const newTask: Task = {
      id: Date.now(),
      text,
      priority,
      done: false,
      createdAt: Date.now()
    }
    setTasks([...tasks, newTask])
  }

  function toggleTask(id: number): void {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTask(id: number): void {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const filtered = tasks.filter(task => {
    if (filter === "active") return !task.done
    if (filter === "done") return task.done
    return true
  })

  return (
    <div style={{ padding: "40px", maxWidth: "600px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h1>Задачи</h1>
        <Link to="/stats">📊 Статистика</Link>
      </div>

      <TaskForm onAdd={addTask} />

      <Filter
        current={filter}
        onChange={setFilter}
        counts={{
          all: tasks.length,
          active: tasks.filter(t => !t.done).length,
          done: tasks.filter(t => t.done).length
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.length === 0
          ? <p style={{ color: "#888", textAlign: "center" }}>Задач нет</p>
          : filtered.map(task => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))
        }
      </ul>
    </div>
  )
}