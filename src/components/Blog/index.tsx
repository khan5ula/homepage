import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div id="container">
      <div>
        <Link
          className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
          to={'/blogs/markdown-with-react-typescript-and-vite'}
        >
          Using Markdown with React + Typescript + Vite
        </Link>{' '}
        <span className="ml-5">29.10.2023</span>
      </div>
    </div>
  )
}

export default Blog
