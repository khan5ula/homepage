import { Link } from 'react-router-dom'
import MarkdownRenderer from '../../utils/MarkdownRenderer'

interface props {
  markdown: string
  date: string
}

const BlogPost = ({ markdown, date }: props) => {
  return (
    <div>
      <div className="mb-5">
        <Link
          className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
          to="/blog"
        >
          ← all blog posts
        </Link>
      </div>
      <MarkdownRenderer markdown={markdown} date={date} />
    </div>
  )
}

export default BlogPost
