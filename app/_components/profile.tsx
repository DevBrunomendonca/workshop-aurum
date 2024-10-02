import Image from "next/image"

interface ProfileProps {
  srcProfile: string
  className?: string
}

const Profile = ({srcProfile, className}:ProfileProps) => {
  return (
    <Image 
      quality={100}
      src={srcProfile}
      alt="Icone Perfil"
      width={80}
      height={80}
      className={`${className} rounded-full border-white border-[1px]`}
    />
  )
}

export default Profile