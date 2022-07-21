import { ReactElement, useState } from 'react'
import { TodoItemType } from '../../constants/TYPES'
import styles from './TodoItem.module.scss'

const TodoItem = ({ todo }: TodoItemType): ReactElement => {
  const [finished, setFinished] = useState<boolean>(todo.completed)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinished(!finished)
  }

  return (
    <li className={styles.list__item}>
      <div className={styles.content}>
        <div>
          <input type='checkbox' onChange={changeHandler} checked={finished} />
        </div>
        <div>
          <span className={styles.subTitle}>UserID: </span>
          {todo.userId}
        </div>
        ,{' '}
        <div>
          <span className={styles.subTitle}>Title: </span> {todo.title}
        </div>
      </div>
      <button className={styles.delete}>&#x2715;</button>
    </li>
  )
}
export default TodoItem
