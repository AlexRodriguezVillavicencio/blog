import '@/app/layout';
import Navbar from "../components/Navbar";
import Stories from '../components/Stories';
import User from '../components/post/User';
import HeaderUser from '../components/post/HeaderUser';

export default function post() {
  return (
    <>
      <Navbar />
      <main className="mt-[60px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]
                m-auto  flex">
        <section className="w-8/12 pl-[15px] pr-[15px]">
          <HeaderUser/>
          <h1 className="font-bold text-3xl mt-5" >Data Pipeline design</h1>
          <p className="text-xl mt-2" >Un vistazo a la arquitectura completa</p>
        </section>
        <section className="w-4/12 pl-6 border-l-[1px] border-indigo-400">
            <User/>
            <p>Mira más proyectos</p>
        </section>
      </main>
    </>
  )
}
