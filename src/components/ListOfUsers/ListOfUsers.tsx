import { ReactElement, useEffect, useState } from 'react'
import styles from './ListOfUsers.module.scss'

interface User {
  id: number
  name: string
  username?: string
}

const ListOfUsers = (): ReactElement => {
  const [listOfUsers, setListOfUsers] = useState<Array<User>>([
    { id: 1, name: 'Vlad' },
    { id: 2, name: 'Kolya' },
    { id: 3, name: 'Anna' },
    { id: 4, name: 'Andrey' },
  ])

  const getUsers = async () => {
    try {
      let data: []
      await fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((data) => setListOfUsers(data))
    } catch {
      console.log('Error in fetch')
    }
    return listOfUsers
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <ul className={styles.list}>
      {listOfUsers.map((person) => (
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
      ))}
    </ul>
  )
}

export default ListOfUsers
