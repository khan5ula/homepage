import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface BlogPostProps {
  markdown: string
}

const BlogPost = ({ markdown }: BlogPostProps) => {
  return (
    <div>
      <div className="mb-5">
        <Link
          className="cursor-pointer underline underline-offset-4 hover:decoration-1 hover:text-slate-400"
          to="/blog"
        >
          all blog posts
        </Link>
      </div>
      <article className="prose">
        <Markdown
          components={{
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter language={match[1]} style={tomorrow}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdown}
        </Markdown>
      </article>
    </div>
  )
}

export default BlogPost
