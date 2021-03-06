import { useState } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const request = async <T>(
    url: string,
    method = 'GET',
    body = null,
    headers = {}
  ): Promise<Array<T> | null> => {
    try {
      const responce: Response = await fetch(url, { method, body, headers })
      const data: Array<T> = await responce.json()
      if (!responce.ok) {
        return null
      }
      console.log('data', data)
      return data
    } catch (e: any) {
      return null
    }
  }
  return { request, loading, setLoading }
}
