import { ReactElement } from 'react'
import styles from './AddTodoForm.module.scss'

const AddTodoForm = (): ReactElement => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <input className={styles.inputUserTodo} type={'text'} placeholder='User todo' />
      <input type={'number'} placeholder='UserId' />
      <input className={styles.inputUserCompleted} type={'checkbox'} />
      <button type={'submit'}>Add new todo</button>
    </form>
  )
}

export default AddTodoForm
