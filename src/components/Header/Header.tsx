import { ReactElement, useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import logo from '../../assets/images/Practice_logo.jpeg'
import Nav from '../Nav'
import styles from './Header.module.scss'

const Header = ({}): ReactElement => {
  const [titleText, setTitleText] = useState<string>('Welcome Home')

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      setTitleText('Welcome Home')
    }
    if (location.pathname === '/dashboard') {
      setTitleText('Dashboard')
    }
    if (location.pathname === '/userspage') {
      setTitleText('Users Page')
    }
    if (location.pathname === '/mint') {
      setTitleText('Minting Page')
    }
  }, [titleText])

  return (
    <header className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.block__item}>
          <div className={styles.logo}>
            <NavLink to={'/'}>
              <img src={logo} alt='Logo' />
            </NavLink>{' '}
          </div>
        </div>
        <div className={styles.block__item}>
          <div className={styles.title}>{titleText}</div>
        </div>
        <div className={styles.block__item}>
          <div className={styles.nav}>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
