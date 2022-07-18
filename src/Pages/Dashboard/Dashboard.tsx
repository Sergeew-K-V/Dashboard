import { ReactElement } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListOfUsers from '../../components/ListOfUsers'
import styles from './Dashboard.module.scss'

const Dashboard = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div>
            <input type='text' />
            <ListOfUsers />
          </div>
          <div>
            <input type='text' />
            <ListOfUsers />
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
