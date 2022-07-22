import { ReactElement, useEffect, useState } from 'react'
import { TodoItemPropType } from '../../constants/TYPES'
import styles from './TodoItem.module.scss'

const TodoItem = ({ todo, deleteTodo, changeHandler }: TodoItemPropType): ReactElement => {
  return (
    <li className={styles.list__item}>
      <div className={styles.content}>
        <div>
          <input
            type='checkbox'
            onChange={(e) => changeHandler(todo.id, e.target.checked)}
            checked={todo.completed}
          />
        </div>
        <div>
          <span className={styles.subTitle}>Title: </span> {todo.title}
        </div>
      </div>
      <button className={styles.delete} onClick={() => deleteTodo(todo.id)}>
        &#x2715;
      </button>
    </li>
  )
}
export default TodoItem
