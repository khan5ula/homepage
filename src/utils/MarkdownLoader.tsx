import { useEffect, useState } from 'react'
import BlogPost from '../components/Blog/BlogPost'

interface props {
  filepath: string
}

const MarkdownLoader = ({ filepath }: props) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(filepath)
      .then((response) => response.text())
      .then((data) => setMarkdown(data))
  }, [filepath])

  return <BlogPost markdown={markdown} />
}

export default MarkdownLoader
