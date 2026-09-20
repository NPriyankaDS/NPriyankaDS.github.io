import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        // slight delay lets the route's content mount first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [hash, pathname])

  return null
}
