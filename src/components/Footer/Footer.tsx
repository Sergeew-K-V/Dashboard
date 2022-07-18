import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import owl1 from '../../assets/images/Footer_owl1.jpg'
import owl2 from '../../assets/images/Footer_owl2.jpg'
import styles from './Footer.module.scss'

const Footer = (): ReactElement => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.block__item}>All rights reserved</div>
        <div className={styles.block__item}>Made by Fobbelend</div>
        <div className={styles.block__item}>
          <div className={styles.images}>
            <div className={styles.images__item}>
              <NavLink to={'/'}>
                <img src={owl1} alt='Footer owl1' />
              </NavLink>
            </div>
            <div className={styles.images__item}>
              <NavLink to={'/'}>
                <img src={owl2} alt='Footer owl2' />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
