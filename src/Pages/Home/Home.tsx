import { ReactElement } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Home.module.scss'

const Home = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}></div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Home
