import { useEffect, useState } from 'react'
import api from './api'
import { Loading } from './components/loading'

import './styles/app.css'

import { Background } from './components/background'

export function App() {
  const [base, setBase] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(0)

  useEffect(() => {
    async function getBase() {
      const res = await api.get('/')
      setBase(res.data)
      setLoading(false)
    }
    getBase()
  }, [])



  return (
    <div className='app'>
      {(loading)? 
        <Loading /> 
      : 
       base.map(memorie => {
        return (
          <div className='memorie' key={memorie._id}>
            <h1>{memorie.title}</h1>
            <p onClick={() => setError(error + 1)}>{memorie.description}</p>
          </div>
        )
       })
      }
      <p>{error}</p>

      <Background />
    </div>
  )
}