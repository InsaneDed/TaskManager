import { useState } from "react"
import type { Priority } from "../types"

interface TaskFormProps {
  onAdd: (text: string, priority: Priority) => void
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [text, setText] = useState<string>("")
  const [priority, setPriority] = useState<Priority>("medium")

  function handleSubmit(): void {
    if (text.trim() === "") return
    onAdd(text, priority)
    setText("")
    setPriority("medium")
  }

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
        placeholder="Новая задача..."
        style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
      />
      <select
        value={priority}
        onChange={e => setPriority(e.target.value as Priority)}
        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
      >
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      <button
        onClick={handleSubmit}
        style={{ padding: "10px 16px", background: "orange", border: "none", borderRadius: "8px", cursor: "pointer" }}
      >+</button>
    </div>
  )
}