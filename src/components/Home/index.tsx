import profile_pic from '../../assets/profile_pic.jpeg'
import introduction from '../../content/home/introduction.md'
import MarkdownRenderer from '../../utils/MarkdownRenderer'
import ProfilePic from './ProfilePic'

const Home = () => (
  <div>
    <div className="mb-5 flex justify-center md:flex-none">
      <ProfilePic src={profile_pic} alt="Profile picture" />
    </div>
    <article className="prose">
      <MarkdownRenderer markdown={introduction} />
    </article>
  </div>
)

export default Home
