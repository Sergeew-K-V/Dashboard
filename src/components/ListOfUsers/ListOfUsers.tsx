import { ReactElement, useEffect, useState } from 'react'
import Loader from '../Loader'
import styles from './ListOfUsers.module.scss'

interface User {
  id: number
  name: string
  username?: string
}

const ListOfUsers = (): ReactElement => {
  const [listOfUsers, setListOfUsers] = useState<Array<User>>([])

  const getUsers = async () => {
    try {
      let data: []
      await fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((data) => setListOfUsers(data))
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
  }, [listOfUsers])

  initialiseData()

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
          </li>
        ))
      )}
    </ul>
  )
}

export default ListOfUsers
