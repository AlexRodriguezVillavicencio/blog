// import Image from "next/image"

function Stories() {
  return (
    <div className="flex mb-4">
      <div className="flex-col pr-4">
        <h2 className="mb-1">
        <a className="text-2xl font-bold" href="#">Nearly 200 Great Barrier Reef coral species also live in the deep sea</a>
        </h2>
        <p className="mb-4">
            There are more coral species lurking in the deep ocean that previously thought.
        </p>
        <div className="text-[13.6px]">
             Jake Bittle in SCIENCE
        </div>
        <small className="text-[13.6px]">Dec 12 &middot; 5 min read</small>
      </div>
      <div className="flex-none">
        <img
          width={175.67}
          // height={120} 
          alt="article image"
          src="https://imgs.search.brave.com/umste_KqsLlFtau2ujfoqVYkqnKGJzf-PqHC0ZiHgJA/rs:fit:1200:778:1/g:ce/aHR0cHM6Ly9yYWRp/b21pdHJlLWxhMTAw/LXByb2QuY2RuLmFy/Y3B1Ymxpc2hpbmcu/Y29tL3Jlc2l6ZXIv/cm5NWmFOX1MwSGVi/WW1la2NJOU5xQlhl/Z1JzPS8xMjAweDAv/c21hcnQvY2xvdWRm/cm9udC11cy1lYXN0/LTEuaW1hZ2VzLmFy/Y3B1Ymxpc2hpbmcu/Y29tL3JhZGlvbWl0/cmUvSVROSDVKUkxS/QkRKVERYTzJLWVBL/NjNJTk0uanBn" />
      </div>
    </div>
  )
}

export default Stories