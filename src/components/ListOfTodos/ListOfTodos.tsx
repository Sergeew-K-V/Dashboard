import React, { InputHTMLAttributes, ReactElement, useEffect, useState } from 'react'
import { Todo } from '../../constants/TYPES'
import { urlTodos } from '../../constants/URLS'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import TodoItem from '../TodoItem'
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

  return (
    <ul className={styles.list}>
      {listOfTodos.length === 0 ? (
        <Loader />
      ) : (
        listOfTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </ul>
  )
}

export default ListOfTodos
