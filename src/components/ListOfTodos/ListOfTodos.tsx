import { ReactElement, useEffect, useState } from 'react'
import { Todo } from '../../constants/TYPES'
import { urlTodos } from '../../constants/URLS'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import TodoItem from '../TodoItem'
import styles from './ListOfTodos.module.scss'

const ListOfTodos = (): ReactElement => {
  const [listOfTodos, setListOfTodos] = useState<Array<Todo>>([])
  // const [loading, setLoading] = useState<boolean>(false)

  const { request, loading, setLoading } = useHttp()

  const getTodos = async () => {
    try {
      const data = await request<Todo>(urlTodos)

      if (data === null) {
        return null
      }

      setListOfTodos(data)
    } catch {
      console.log('Error in fetch')
    }
  }

  const initialiseData = () => {
    setLoading(true)
    setTimeout(() => {
      getTodos()
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
        listOfTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </ul>
  )
}

export default ListOfTodos
