import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../types'

interface props {
  posts: Post[]
}

const Blog = ({ posts }: props) => {
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
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.url}>
              <td>
                <Link
                  className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
                  to={`/blog/${post.url}`}
                >
                  {post.title}
                </Link>
              </td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Blog
