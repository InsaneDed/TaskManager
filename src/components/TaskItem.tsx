import type { Task, Priority } from "../types"

interface TaskItemProps {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const priorityColors: Record<Priority, string> = {
  low: "#4caf50",
  medium: "#ff9800",
  high: "#f44336"
}

const priorityLabels: Record<Priority, string> = {
  low: "Низкий",
  medium: "Средний",
  high: "Высокий"
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "12px 16px", marginBottom: "8px",
      background: "#f9f9f9", borderRadius: "8px",
      borderLeft: `4px solid ${priorityColors[task.priority]}`
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          style={{ cursor: "pointer", width: "16px", height: "16px" }}
        />
        <span style={{
          textDecoration: task.done ? "line-through" : "none",
          opacity: task.done ? 0.5 : 1
        }}>
          {task.text}
        </span>
        <span style={{
          fontSize: "11px", padding: "2px 8px", borderRadius: "12px",
          background: priorityColors[task.priority], color: "white"
        }}>
          {priorityLabels[task.priority]}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        style={{ background: "none", border: "none", cursor: "pointer", color: "#999", fontSize: "18px" }}
      >✕</button>
    </li>
  )
}