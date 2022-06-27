import { useState, useEffect } from 'react'

const API_URL = 'https://rickandmortyapi.com/api'

const useQuery = (endpoint, options = { skip: false }) => {
  const [loading, setLoading] = useState(options.skip ? false : true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (options.skip) return

    const fetchRequest = async () => {
      try {
        const response = await fetch(`${API_URL}${endpoint}`)
        const result = await response.json()

        if (result.error) {
          setError(result.error)
        } else {
          setData(result)
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRequest()

    return () => {
      setLoading(false)
      setError(null)
      setData(null)
    }
  }, [endpoint, options.skip])

  return { loading: loading || !data, error, data }
}

export default useQuery
