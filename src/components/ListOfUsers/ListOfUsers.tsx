import { ReactElement, useEffect, useState } from 'react'
import styles from './ListOfUsers.module.scss'

interface User {
  id: number
  name: string
  age: number
  gender?: 'male' | 'female'
}

const ListOfUsers = (): ReactElement => {
  const [listOfUsers, setListOfUsers] = useState<Array<User>>([
    { id: 1, name: 'Vlad', age: 23, gender: 'male' },
    { id: 2, name: 'Kolya', age: 36, gender: 'male' },
    { id: 3, name: 'Anna', age: 16, gender: 'female' },
    { id: 4, name: 'Andrey', age: 33, gender: 'male' },
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
          <div>Name: {person.name}</div> | <div>Age: {person.age}</div> |{' '}
          <div>Gender: {person.gender}</div>
        </li>
      ))}
    </ul>
  )
}

export default ListOfUsers
