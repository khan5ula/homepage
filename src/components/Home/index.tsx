import { Suspense, lazy } from 'react'
import profile_pic from '../../assets/profile_pic.jpeg'
import introduction from '../../content/home/introduction.md'
import MarkdownRenderer from '../../utils/MarkdownRenderer'
const ProfilePic = lazy(() => import('./ProfilePic'))

const Home = () => (
  <div>
    <Suspense
      fallback={<div className="flex justify-center">Loading face...</div>}
    >
      <ProfilePic src={profile_pic} alt="Profile picture" />
    </Suspense>
    <div className="article prose">
      <MarkdownRenderer markdown={introduction} />
    </div>
  </div>
)

export default Home
