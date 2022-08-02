import { ReactElement, useEffect } from 'react'
import { ListOfTodoPropType } from '../../constants/TYPES'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import TodoItem from '../TodoItem'
import styles from './ListOfTodos.module.scss'

const ListOfTodos = ({ listOfTodos, setListOfTodos }: ListOfTodoPropType): ReactElement => {
  const { loading, setLoading } = useHttp()

  const changeHandler = (id: number, checked: boolean) => {
    setListOfTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id && todo.completed !== checked) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  const deleteTodo = (id: number) => {
    setListOfTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const initialiseData = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    initialiseData()
  }, [])

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
