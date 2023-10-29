import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <Link
        className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
        to={'/blogs/markdown-with-react-typescript-and-vite'}
      >
        Using Markdown with React + Typescript + Vite - 29.10.2023
      </Link>
    </div>
  )
}

export default Blog
