import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { posts } from './content/blog_posts/posts'
import { Post } from './types'
import MarkdownLoader from './utils/MarkdownLoader'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <div>
        <div className="bg-slate-50 md:flex">
          <aside className="sticky top-0 bg-slate-900 h-14 md:h-screen md:w-60 flex justify-center items-center md:items-baseline">
            <Navbar />
          </aside>
          <main className="min-h-screen pt-10 pb-5 mx-10 md:mx-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog posts={posts as Post[]} />} />
              {posts.map((post) => (
                <Route
                  key={post.url}
                  path={`/blog/${post.url}`}
                  element={
                    <MarkdownLoader filepath={`/blog-posts/${post.url}.md`} />
                  }
                />
              ))}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App
