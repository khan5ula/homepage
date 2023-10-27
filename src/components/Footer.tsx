import githublogo from '../assets/GitHub-Logo.png'
import linkedinlogo from '../assets/linkedin-logo.png'

const Footer = () => (
  <footer className="flex justify-center items-center h-8 bg-white">
    <p className="text-sm">© 2023 Kristian Hannula</p>
    <a href="https://github.com/khan5ula">
      <img
        className="object-cover h-3 max-w-10 hover:opacity-50 cursor-pointer mx-3"
        src={githublogo}
        alt="GitHub logo"
      />
    </a>
    <a href="https://www.linkedin.com/in/kristian-hannula-1800a924a/">
      <img
        className="object-cover h-4 max-w-10 hover:opacity-50 cursor-pointer mx-3 mt-0.4"
        src={linkedinlogo}
        alt="LinkedIn logo"
      />
    </a>
  </footer>
)

export default Footer
