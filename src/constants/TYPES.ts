export type User = {
  id: number
  name: string
  username: string
  email: string
  phone: number
}

export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type TodoItemPropType = {
  todo: Todo
  deleteTodo: (id: number) => void
  changeHandler: (id: number, checked: boolean) => void
}
