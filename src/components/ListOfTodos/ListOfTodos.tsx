import { ReactElement, useState } from 'react'
import { Todo } from '../../constants/TYPES'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import TodoItem from '../TodoItem'
import styles from './ListOfTodos.module.scss'

const ListOfTodos = (): ReactElement => {
  const { loading, setLoading } = useHttp()
  const [listOfTodos, setListOfTodos] = useState<Todo[]>([
    { id: 1, title: 'To complete this task', completed: false },
    { id: 2, title: 'To delete this task', completed: true },
  ])

  const changeHandler = (id: number, checked: boolean) => {
    setListOfTodos((prev) => {
      return prev.map((todo, _, prev) => {
        if (todo.id === id && todo.completed !== checked) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  const deleteTodo = (id: number) => {
    console.log('todo.id', id)
    setListOfTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <ul className={styles.list}>
      {loading === true ? (
        <Loader />
      ) : listOfTodos.length === 0 ? (
        <div>No todos</div>
      ) : (
        listOfTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            changeHandler={changeHandler}
          />
        ))
      )}
    </ul>
  )
}

export default ListOfTodos
