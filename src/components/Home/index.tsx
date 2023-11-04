import profile_pic from '../../assets/profile_pic.jpeg'
import MarkdownRenderer from '../../utils/MarkdownRenderer'
import ProfilePic from './ProfilePic'
import introduction from '../../content/home/introduction.md'

const Home = () => (
  <div className="article prose">
    <div>
      <ProfilePic src={profile_pic} alt="Profile picture" />
    </div>
    <MarkdownRenderer markdown={introduction} />
  </div>
)

export default Home
