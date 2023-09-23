const FrontPageText = () => (
  <div className="mx-10 text-base max-w-prose mt-10 md:mt-0">
    <h1 className="mb-6 mt-6 text-center md:text-left">Hey 👋</h1>
    <p>
      My name is Kristian Hannula. Thanks for visiting my website! Tough this
      site is definitely not as cool as the{' '}
      <span className="underline underline-offset-4 hover:decoration-1">
        <a href="https://en.wikipedia.org/wiki/Dragon_Ball_(manga)">DBZ</a>
      </span>{' '}
      fanpage I made when I was a kid (which is unfortunately lost in time).
      <p>
        {<br />}Right now it's quite empty in here... I'm planning on adding
        more stuff in the future. In the meantime, you can stalk my GitHub
        account or connect with me on LinkedIn.
      </p>
      <p>
        {<br />}
        {<hr />}
      </p>
      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
        {' '}
        {<br />}
        Isn't it enough to see that a garden is beautiful without having to
        believe that there are fairies at the bottom of it too?
      </blockquote>
      <p className="text-right mr-10">- Douglas Adams</p>
    </p>
  </div>
)

export default FrontPageText
