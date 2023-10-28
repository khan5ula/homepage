import { useEffect, useState } from 'react'
import FrontPageContent from './FrontPageContent'
import LoadingSpinner from '../LoadingSpinner'

const FrontPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(false)
    }

    window.addEventListener('load', handleLoading)
    return () => window.removeEventListener('load', handleLoading)
  }, [])

  return !isLoading ? (
    <div className="mx-24">
      <FrontPageContent />
    </div>
  ) : (
    <LoadingSpinner />
  )
}

export default FrontPage
