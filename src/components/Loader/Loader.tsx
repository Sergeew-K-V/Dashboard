import { ReactElement } from 'react'
import styles from './Loader.module.scss'

const Loader = (): ReactElement => {
  return <div className={`${styles} lds-dual-ring`}></div>
}

export default Loader
