import Header from "@/pages/components/Header"
import Popular from "@/pages/components/Popular"
import Stories from "@/pages/components/Stories"

export default function Home() {
  return (
    <>
      <Header />
      <main className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]
                m-auto  flex">
        <section className="w-8/12 pl-[15px] pr-[15px]">
          <h5 className="text-xl pb-5 "><span>All Stories</span></h5>
          <Stories/>
          <Stories/>
          <Stories/>
        </section>
        <section className="w-4/12 pl-6 ">
          <h5 className="text-xl pb-5 "><span>Popular</span></h5>
          <ol className="listFeatured">
            <Popular/>
            <Popular/>
            <Popular/>
          </ol>

        </section>
      </main>
    </>
  )
}