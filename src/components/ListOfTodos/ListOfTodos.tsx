import { InputHTMLAttributes, ReactElement, useEffect, useState } from 'react'
import { Todo } from '../../constants/TYPES'
import { urlTodos } from '../../constants/URLS'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import styles from './ListOfTodos.module.scss'

const ListOfTodos = (): ReactElement => {
  const [listOfTodos, setListOfTodos] = useState<Array<Todo>>([])

  const request = useHttp()
  const getTodos = async () => {
    try {
      const data = await request<Todo>(urlTodos)

      if (data === null) {
        throw new Error()
      }

      setListOfTodos(data)

      console.log('list', listOfTodos)
    } catch {
      console.log('Error in fetch')
    }
  }

  const initialiseData = () => {
    setTimeout(() => {
      getTodos()
    }, 500)
  }

  useEffect(() => {
    initialiseData()
  }, [])

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.target.checked = !e.target.checked
  // }

  return (
    <ul className={styles.list}>
      {listOfTodos.length === 0 ? (
        <Loader />
      ) : (
        listOfTodos.map((todo) => (
          <li key={todo.id} className={styles.list__item}>
            <div>
              <input
                type='checkbox'
                //  onChange={changeHandler}
                checked={todo.completed}
              />
            </div>
            <div>
              <span className={styles.subTitle}>UserID: </span>
              {todo.userId}
            </div>
            ,{' '}
            <div>
              <span className={styles.subTitle}>Title: </span> {todo.title}
            </div>
          </li>
        ))
      )}
    </ul>
  )
}

export default ListOfTodos
