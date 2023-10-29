import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

interface props {
  markdown: string
}

const BlogPost = ({ markdown }: props) => {
  return (
    <div>
      <div className="mb-5">
        <Link
          className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
          to={'/blog'}
        >
          ← back to blogs
        </Link>
      </div>
      <article className="prose">
        <Markdown>{markdown}</Markdown>
      </article>
    </div>
  )
}

export default BlogPost
