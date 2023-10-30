import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="sticky md:top-10 text-white md:text-xl flex md:flex-col justify-center items-baseline">
      <Link
        className="cursor-pointer hover:text-slate-400 text-center mr-6 md:mr-0 md:mb-2"
        to="/"
      >
        Home
      </Link>
      <Link
        className="cursor-pointer hover:text-slate-400 text-center mr-6 md:mr-0 md:mb-2"
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className="cursor-pointer hover:text-slate-400 text-center"
        to="/history"
      >
        Site history
      </Link>
    </div>
  )
}

export default Navbar
