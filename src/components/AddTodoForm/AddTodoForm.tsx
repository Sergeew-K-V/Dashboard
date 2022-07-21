import React, { ReactElement, useState } from 'react'
import styles from './AddTodoForm.module.scss'

const AddTodoForm = (): ReactElement => {
  const [checkedTodo, setCheckedTodo] = useState<boolean>(false)
  const [userTodo, setUserTodo] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTodo(!checkedTodo)
  }

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('clicked', e)
    console.log('clicked', e.target)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <input
        className={styles.inputUserTodo}
        type={'text'}
        placeholder='User todo'
        defaultValue={userTodo}
      />
      <input type={'number'} placeholder='UserId' defaultValue={userId} />
      <input
        className={styles.inputUserCompleted}
        type={'checkbox'}
        onChange={onChangeHandler}
        defaultChecked={checkedTodo}
      />
      <button type={'submit'} onClick={onClickHandler}>
        Add new todo
      </button>
    </form>
  )
}

export default AddTodoForm
