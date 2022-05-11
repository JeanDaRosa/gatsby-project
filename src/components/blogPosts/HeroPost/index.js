import React from 'react'
import Header from '../../../home/hero/header'

const HeroPost = () => {
  return (
    <section>
      <Header />
      <div className="py-16 lg:py-20 bg-headerBlog 2xl:bg-cover bg-center bg-end">
        <div className="container mx-auto px-8">
          <div className="text-white">
            <a
              href="/"
              className="tracking-widest  text-xs md:text-medium border-none"
            >
              HOME
            </a>
            <h1 className="font-extrabold text-5xl pb-8 pt-2">Blog</h1>
            <h3 className="font-semibold leading-18 md:text-xl xl:w-2/3">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
