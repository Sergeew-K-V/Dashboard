import { ReactElement } from 'react'
import AddTodoForm from '../../components/AddTodoForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListOfTodos from '../../components/ListOfTodos'
import styles from './Dashboard.module.scss'

const Dashboard = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.content__wrapeer}>
            <ListOfTodos />
            <AddTodoForm />
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
