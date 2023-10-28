interface Props {
  src: string
  alt: string
}

const ProfilePic = ({ src, alt }: Props) => (
  <div className="flex justify-center pointer-events-none">
    <img className="max-w-xs rounded-full" src={src} alt={alt} />
  </div>
)

export default ProfilePic
