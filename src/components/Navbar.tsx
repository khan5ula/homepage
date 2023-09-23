const Navbar = () => {
  return (
    <div className="flex w-1/1 border-b-2 h-14 font-semibold items-center justify-center">
      <a href="https://github.com/khan5ula">
        <img
          className="object-cover h-4 max-w-10 hover:opacity-60 cursor-pointer mx-3"
          src="src/assets/GitHub-Logo.png"
          alt="GitHub logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/kristian-hannula-1800a924a/">
        <img
          className="object-cover h-5 max-w-10 hover:opacity-60 cursor-pointer mx-3 mt-0.4"
          src="src/assets/linkedin-logo.png"
          alt="LinkedIn logo"
        />
      </a>
    </div>
  )
}

export default Navbar
