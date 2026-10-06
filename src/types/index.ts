export interface Task {
  id: number
  text: string
  done: boolean
  priority: "low" | "medium" | "high"
  createdAt: number
}

export type FilterType = "all" | "active" | "done"

export type Priority = "low" | "medium" | "high"