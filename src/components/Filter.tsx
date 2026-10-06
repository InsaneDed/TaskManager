import type { FilterType } from "../types"

interface FilterProps {
  current: FilterType
  onChange: (filter: FilterType) => void
  counts: { all: number; active: number; done: number }
}

export function Filter({ current, onChange, counts }: FilterProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: `Все (${counts.all})` },
    { value: "active", label: `Активные (${counts.active})` },
    { value: "done", label: `Выполненные (${counts.done})` },
  ]

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          style={{
            padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer",
            background: current === f.value ? "orange" : "#eee",
            color: current === f.value ? "white" : "#333",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}