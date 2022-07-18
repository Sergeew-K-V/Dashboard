import { ReactElement } from 'react'
import styles from './Loader.module.scss'

const Loader = (): ReactElement => {
  return <div className={styles.lds_dual_ring}></div>
}

export default Loader
