import perfilUser from "../../../../public/img/perfil-alex.jpeg";
import Image from 'next/image'

export default function HeaderUser() {
  return (
    <div className="flex border-b-[1px] border-indigo-400 w-full mt-4 pb-4">
      <Image 
        src={perfilUser} 
        width={48}
        className="rounded-full"
        alt="" />
      <div className="ml-[15px]">
        <h3 className="font-bold " >Alex Rodriguez</h3>
        <p className="text-sm mt-[4px]" >Jan2 - 9 min read</p>
      </div>
    </div>
  )
}

