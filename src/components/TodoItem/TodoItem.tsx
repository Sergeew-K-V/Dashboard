import { ReactElement } from 'react'
import { TodoItemType } from '../../constants/TYPES'
import styles from './TodoItem.module.scss'

const TodoItem = ({ todo }: TodoItemType): ReactElement => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log('event.target.value', event.target)
  }

  return (
    <li key={todo.id} className={styles.list__item}>
      <div>
        <input type='checkbox' onChange={changeHandler} checked={todo.completed} />
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
  )
}
export default TodoItem
