export type User = {
  id: number
  name: string
  username: string
  email: string
  phone: number
}

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
