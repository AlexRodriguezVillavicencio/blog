import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import perfilUser from "../../../../public/img/perfil-alex.jpeg";
import Image from 'next/image'

export default function User() {
  return (
    <div className="mt-[40px] w-[200px] h-[220px]">
      <Image 
        src={perfilUser} 
        width={88}
        className="rounded-full"
        alt="" />
      
      <h3 className="font-bold " >Alex Rodriguez</h3>
      <p className="text-sm mt-[4px]" >Data Science, Software Engineer</p>
      <div className="flex mt-[10px] mb-[40px]">
      <IoLogoLinkedin className="text-2xl" />
      <IoLogoGithub className="text-2xl ml-[10px]"/>
      </div>
    </div>
  )
}
