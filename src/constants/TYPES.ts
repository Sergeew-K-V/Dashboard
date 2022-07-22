export type User = {
  id: number
  name: string
  username: string
  email: string
  phone: number
}

export type Todo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

export type TodoItemPropType = {
  todo: Todo
  deleteTodo: (id: number) => void
  changeHandler: (id: number, checked: boolean) => void
}
export type ListOfTodoPropType = {
  listOfTodos: Todo[]
  setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
