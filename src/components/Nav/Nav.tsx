import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = (): ReactElement => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.navList}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
        <NavLink to={'/userspage'}>Users</NavLink>
        <NavLink to={'/mint'}>Mint</NavLink>
      </div>
      <div className={styles.burger}></div>
    </nav>
  )
}

export default Nav
