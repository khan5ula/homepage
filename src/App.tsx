import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Footer from './components/Footer'
import History from './components/History'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <div>
        <div className="bg-slate-50 md:flex">
          <aside className="sticky top-0 bg-slate-900 h-14 md:h-screen md:w-60 flex justify-center items-center md:items-baseline">
            <Navbar />
          </aside>
          <main className="min-h-screen pt-10 pb-5 w-4/5 mx-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App
