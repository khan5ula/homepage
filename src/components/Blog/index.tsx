import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="container">
      <div>
        <Link
          className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
          to={'/blog/markdown-with-react-typescript-and-vite'}
        >
          Rendering Markdown files with React, Typescript, Vite and Tailwind CSS
        </Link>{' '}
        <span className="ml-5">31.10.2023</span>
      </div>
    </div>
  )
}

export default Blog
