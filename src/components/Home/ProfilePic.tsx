interface props {
  src: string
  alt: string
}

const ProfilePic = ({ src, alt }: props) => (
  <div className="pointer-events-none">
    <img className="w-44 h-44 rounded-full" src={src} alt={alt} />
  </div>
)

export default ProfilePic
