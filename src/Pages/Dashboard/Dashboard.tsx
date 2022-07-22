import { ReactElement, useState } from 'react'
import AddTodoForm from '../../components/AddTodoForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListOfTodos from '../../components/ListOfTodos'
import { Todo } from '../../constants/TYPES'
import styles from './Dashboard.module.scss'

const Dashboard = (): ReactElement => {
  const [listOfTodos, setListOfTodos] = useState<Todo[]>([
    { id: 1, title: 'To complete this task', userId: 1, completed: false },
    { id: 2, title: 'To delete this task', userId: 2, completed: true },
  ])
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.content__wrapeer}>
            <ListOfTodos listOfTodos={listOfTodos} setListOfTodos={setListOfTodos} />
            <AddTodoForm listOfTodos={listOfTodos} setListOfTodos={setListOfTodos} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
