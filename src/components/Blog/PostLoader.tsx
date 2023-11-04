import { useEffect, useState } from 'react'
import BlogPost from './BlogPost'

interface props {
  filepath: string
  date: string
}

const PostLoader = ({ filepath, date }: props) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(filepath)
      .then((response) => response.text())
      .then((data) => setMarkdown(data))
  }, [filepath])

  return <BlogPost markdown={markdown} date={date} />
}

export default PostLoader
