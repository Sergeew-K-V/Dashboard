import React, { ReactElement } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Mint.module.scss'

const Mint = (): ReactElement => {
  const btnHandler = (e: React.MouseEvent) => {
    console.log('clicked mint btn')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.content__wrapeer}>
            <p>Go mint</p>
            <button onClick={btnHandler} className={styles.btnMinting}>
              Mint
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Mint
