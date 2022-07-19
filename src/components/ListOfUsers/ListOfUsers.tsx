import { ReactElement, useEffect, useState } from 'react'
import { Todo, User } from '../../constants/TYPES'
import { urlUsers } from '../../constants/URLS'
import { useHttp } from '../../hooks/useHttp'
import Loader from '../Loader'
import styles from './ListOfUsers.module.scss'

const ListOfUsers = (): ReactElement => {
  const [listOfUsers, setListOfUsers] = useState<Array<User>>([])
  const request = useHttp()
  const getUsers = async () => {
    try {
      const data = await request<User>(urlUsers)

      if (data === null) {
        throw new Error()
      }

      setListOfUsers(data)
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
