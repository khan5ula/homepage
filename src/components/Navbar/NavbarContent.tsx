const NavbarContent = () => {
  return (
    <div className="text-white md:text-xl flex md:flex-col justify-center items-center">
      <p className="cursor-pointer hover:text-slate-400 text-center mr-6 md:mr-0 md:mb-2">
        Home
      </p>
      <p className="cursor-pointer hover:text-slate-400 text-center mr-6 md:mr-0 md:mb-2">
        Blog
      </p>
      <p className="cursor-pointer hover:text-slate-400 text-center">
        Page history
      </p>
    </div>
  )
}

export default NavbarContent
