import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface props {
  markdown: string
  date?: string
}

const MarkdownRenderer = ({ markdown, date }: props) => {
  return (
    <article className="prose">
      {date ? <div className="mb-5">{date} by Kristian Hannula</div> : null}
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
  )
}

export default MarkdownRenderer
