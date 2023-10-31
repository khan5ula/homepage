import { useEffect } from 'react'

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <p>History is not yet implemented.</p>
    </div>
  )
}

export default History
