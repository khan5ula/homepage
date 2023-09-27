import profile_pic from './assets/profile_pic.jpeg'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'
import FrontPageText from './components/FrontPageText'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-slate- flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-2 md:mt-10">
        <div className="md:flex md:justify-center md:items-center h-full">
          <ProfilePic src={profile_pic} alt="Profile picture" />
          <FrontPageText />
        </div>
      </main>
      <div className="mt-4">
        {' '}
        <Footer />
      </div>
    </div>
  )
}

export default App
