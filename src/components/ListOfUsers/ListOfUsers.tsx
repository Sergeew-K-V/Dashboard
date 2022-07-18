import { ReactElement, useEffect, useState } from 'react'
import { User } from '../../constants/TYPES'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import styles from './ListOfUsers.module.scss'

const ListOfUsers = (): ReactElement => {
  const [listOfUsers, setListOfUsers] = useState<Array<User>>([])
  const request = useHttp()
  const getUsers = async () => {
    try {
      const data: Array<User> | null = await request('https://jsonplaceholder.typicode.com/users/')
      if (data === null || data === undefined) {
        throw new Error()
      }
      setListOfUsers(data)
      // await fetch('https://jsonplaceholder.typicode.com/users/')
      //   .then((response) => response.json())
      //   .then((data: Array<User>) => setListOfUsers(data))
      //   .then(() => console.log('listOfUsers', listOfUsers))
      console.log('list', listOfUsers)
    } catch {
      console.log('Error in fetch')
    }
  }

  const initialiseData = () => {
    setTimeout(() => {
      getUsers()
    }, 500)
  }

  useEffect(() => {
    initialiseData()
  }, [])

  return (
    <ul className={styles.list}>
      {listOfUsers.length === 0 ? (
        <Loader />
      ) : (
        listOfUsers.map((person) => (
          <li key={person.id} className={styles.list__item}>
            <div>
              <span className={styles.subTitle}>Name: </span>
              {person.name}
            </div>
            ,{' '}
            <div>
              <span className={styles.subTitle}>Username: </span> {person.username}
            </div>
            ,{' '}
            <div>
              <span className={styles.subTitle}>Phone: </span> {person.phone}
            </div>
          </li>
        ))
      )}
    </ul>
  )
}

export default ListOfUsers
