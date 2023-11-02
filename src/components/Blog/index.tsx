import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="article prose">
      <table>
        <thead>
          <tr>
            <th>Blog title</th>
            <th>Date</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link
                className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
                to={'/blog/markdown-with-react-typescript-and-vite'}
              >
                Rendering Markdown files with React, Typescript, Vite and
                Tailwind CSS
              </Link>
            </td>
            <td>31.10.2023</td>
            <td>react, tailwind, markdown, vite</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Blog
