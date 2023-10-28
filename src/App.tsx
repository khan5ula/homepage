import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage/'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <div>
        <div className="bg-slate-50 md:flex">
          <aside className="md:h-screen sticky top-0">
            <Navbar />
          </aside>
          <main className="pb-5">
            <FrontPage />
          </main>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App
