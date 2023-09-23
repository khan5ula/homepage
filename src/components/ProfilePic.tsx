interface Props {
  src: string
  alt: string
}

const ProfilePic = ({ src, alt }: Props) => (
  <div className="flex justify-center md:ml-12 pointer-events-none">
    <img className="max-w-xs rounded-full mt-6" src={src} alt={alt} />
  </div>
)

export default ProfilePic
