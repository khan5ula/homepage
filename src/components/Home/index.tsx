import { Suspense, lazy } from 'react'
import profile_pic from '../../assets/profile_pic.jpeg'
import introduction from '../../content/home/introduction.md'
import MarkdownRenderer from '../../utils/MarkdownRenderer'
const ProfilePic = lazy(() => import('./ProfilePic'))

const Home = () => (
  <div>
    <div className="mb-5 flex justify-center md:justify-normal md:flex-none">
      <Suspense fallback={<Loading />}>
        <ProfilePic src={profile_pic} alt="Profile picture" />
      </Suspense>
    </div>
    <article className="prose">
      <MarkdownRenderer markdown={introduction} />
    </article>
  </div>
)

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
      </div>
    </div>
  )
}

export default Home
