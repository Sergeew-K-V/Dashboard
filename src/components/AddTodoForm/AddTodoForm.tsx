import React, { ReactElement, useId, useState } from 'react'
import { Todo } from '../../constants/TYPES'
import styles from './AddTodoForm.module.scss'

const AddTodoForm = (): ReactElement => {
  const [checkedTodo, setCheckedTodo] = useState<boolean>(false)
  const [userTodo, setUserTodo] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)
  const [todo, setTodo] = useState<Todo>({
    id: Date.now(),
    title: userTodo,
    completed: checkedTodo,
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTodo(!checkedTodo)
  }

  const addHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('clicked', e)
    console.log('clicked', e.target)
  }

  const onTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTodo(e.target.value)
  }
  const onNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(Number(e.target.value))
  }
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
        defaultChecked={checkedTodo}
      />
      <button type={'submit'} onClick={addHandler}>
        Add new todo
      </button>
    </form>
  )
}

export default AddTodoForm
