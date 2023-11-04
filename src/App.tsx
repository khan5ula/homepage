import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { posts } from './content/blog_posts/posts'
import { Post } from './types'

const PostLoader = lazy(() => import('./components/Blog/PostLoader'))
const Blog = lazy(() => import('./components/Blog'))

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <div>
        <div className="bg-slate-50 md:flex flex-wrap">
          <aside className="sticky top-0 bg-slate-900 h-14 md:h-screen md:w-60 flex justify-center items-center md:items-baseline">
            <Navbar />
          </aside>
          <main className="min-h-screen pt-10 pb-5 mx-10 md:mx-20 md:flex-1 relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/blog"
                element={
                  <Suspense>
                    <Blog posts={posts as Post[]} />
                  </Suspense>
                }
              />
              {posts.map((post) => (
                <Route
                  key={post.url}
                  path={`/blog/${post.url}`}
                  element={
                    <Suspense fallback={<LoadingBlog />}>
                      <PostLoader
                        filepath={`/blog-posts/${post.url}.md`}
                        date={post.date}
                      />
                    </Suspense>
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

const LoadingBlog = () => {
  return (
    <div>
      <div className="animate-pulse">
        <div className="w-full space-y-6 py-1">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <br />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <br />
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <br />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <br />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
