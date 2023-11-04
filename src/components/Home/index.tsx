import { Suspense, lazy } from 'react'
import profile_pic from '../../assets/profile_pic.jpeg'
import introduction from '../../content/home/introduction.md'
import MarkdownRenderer from '../../utils/MarkdownRenderer'
const ProfilePic = lazy(() => import('./ProfilePic'))

const Home = () => (
  <div className="article prose">
    <Suspense
      fallback={
        <div className="flex justify-center">
          <h1>🌝</h1>
        </div>
      }
    >
      <ProfilePic src={profile_pic} alt="Profile picture" />
    </Suspense>
    <MarkdownRenderer markdown={introduction} />
  </div>
)

export default Home
