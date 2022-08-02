import React, { ReactElement, useEffect, useState } from 'react'
import { ListOfTodoPropType, Todo } from '../../constants/TYPES'
import styles from './AddTodoForm.module.scss'

const AddTodoForm = ({ listOfTodos, setListOfTodos }: ListOfTodoPropType): ReactElement => {
  const [checkedTodo, setCheckedTodo] = useState<boolean>(false)
  const [userTodo, setUserTodo] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)
  const [newTodo, setNewTodo] = useState<Todo>({
    id: Date.now(),
    userId: userId,
    title: userTodo,
    completed: checkedTodo,
  })

  const addHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('New todo was added!')
    setListOfTodos((prev) => [...prev, newTodo])
  }

  const onTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTodo(e.target.value)
  }
  const onNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(Number(e.target.value))
  }
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTodo(!checkedTodo)
  }
  useEffect(() => {
    setNewTodo({
      ...newTodo,
      id: Date.now(),
      userId: userId,
      title: userTodo,
      completed: checkedTodo,
    })
  }, [userId, userTodo, checkedTodo, listOfTodos])

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <input
        className={styles.inputUserTodo}
        type={'text'}
        placeholder='Write the description of todo'
        value={userTodo}
        onChange={onTextChangeHandler}
        id='text'
      />
      <input type={'number'} placeholder='UserId' value={userId} onChange={onNumberChangeHandler} />
      <input
        className={styles.inputUserCompleted}
        type={'checkbox'}
        onChange={onChangeHandler}
        checked={checkedTodo}
      />
      <button type={'submit'} onClick={addHandler}>
        Add new todo
      </button>
    </form>
  )
}

export default AddTodoForm
