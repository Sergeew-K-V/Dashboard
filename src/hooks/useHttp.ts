import { User } from '../constants/TYPES'

export const useHttp = () => {
  const request = async (url: string, method = 'GET', body = null, headers = {}) => {
    try {
      const responce: Response = await fetch(url, { method, body, headers })
      const data: Array<User> = await responce.json()
      if (!responce.ok) {
        return null
      }
      return data
    } catch (e: any) {
      return null
    }
  }
  return request
}
