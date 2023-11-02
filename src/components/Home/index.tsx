import profile_pic from '../../assets/profile_pic.jpeg'
import ProfilePic from './ProfilePic'

const Home = () => (
  <div className="article prose">
    <div>
      <ProfilePic src={profile_pic} alt="Profile picture" />
    </div>
    <h1 className="">Hey 👋</h1>
    <p>
      My name is Kristian Hannula. Thanks for visiting my website! Although this
      site is definitely not as cool as the{' '}
      <span className="underline underline-offset-4 hover:decoration-1">
        <a href="https://en.wikipedia.org/wiki/Dragon_Ball_(manga)">DBZ</a>
      </span>{' '}
      fanpage I made when I was a kid (which is unfortunately lost in time).
    </p>
    <p>
      Right now it's quite empty in here... I'm planning on adding more stuff in
      the future. In the meantime, you can stalk my GitHub account or connect
      with me on LinkedIn.
    </p>

    <hr />
    <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
      Isn't it enough to see that a garden is beautiful without having to
      believe that there are fairies at the bottom of it too?
    </blockquote>
    <p className="text-right mr-10">- Douglas Adams</p>
  </div>
)

export default Home
