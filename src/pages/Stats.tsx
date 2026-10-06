import type { Task } from "../types"
import { Link } from "react-router-dom"

interface StatsProps {
  tasks: Task[]
}

export function Stats({ tasks }: StatsProps) {
  const total = tasks.length
  const done = tasks.filter(t => t.done).length
  const active = total - done
  const highPriority = tasks.filter(t => t.priority === "high" && !t.done).length

  return (
    <div style={{ padding: "40px", maxWidth: "500px", fontFamily: "sans-serif" }}>
      <Link to="/">← Назад</Link>
      <h1 style={{ margin: "16px 0" }}>Статистика</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {[
          { label: "Всего задач", value: total, color: "#333" },
          { label: "Выполнено", value: done, color: "#4caf50" },
          { label: "Активных", value: active, color: "#ff9800" },
          { label: "Срочных", value: highPriority, color: "#f44336" },
        ].map(stat => (
          <div key={stat.label} style={{
            padding: "20px", borderRadius: "12px",
            background: "#f5f5f5", textAlign: "center"
          }}>
            <div style={{ fontSize: "36px", fontWeight: "bold", color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: "14px", color: "#888", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}