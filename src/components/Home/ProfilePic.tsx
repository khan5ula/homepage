interface props {
  src: string
  alt: string
}

const ProfilePic = ({ src, alt }: props) => (
  <div className="flex justify-center pointer-events-none mb-10">
    <img className="max-w-xs rounded-full" src={src} alt={alt} />
  </div>
)

export default ProfilePic
