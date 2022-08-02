import React, { ReactElement, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Mint.module.scss'
import Web3 from 'web3'

const Mint = (): ReactElement => {
  // var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://mainnet.infura.io/ws'))

  var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:3000'))

  const btnHandler = (e: React.MouseEvent) => {
    console.log('clicked mint btn')
  }
  const connectHandler = async (e: React.MouseEvent) => {}
  const [connection, setConnection] = useState<boolean>(false)

  useEffect(() => {
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider)
    } else {
      alert('Install metamask!')
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.content__wrapeer}>
            <p>Go mint</p>
            {connection === true ? <p>Address:</p> : <p>Not connected</p>}
            <button onClick={btnHandler} className={styles.btnMinting}>
              Mint
            </button>
            <button onClick={connectHandler} className={styles.btnMinting}>
              Connect Wallet
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
