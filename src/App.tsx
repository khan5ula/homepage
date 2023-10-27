import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage/'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <div className="bg-slate-50 md:flex">
        <Navbar />
        <FrontPage />
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  )
}

export default App
