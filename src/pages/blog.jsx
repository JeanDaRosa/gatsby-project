import React from 'react'
import BlogPosts from '../components/blog/blogPosts'
import HeroPost from '../components/blog/blogPosts/HeroPost'
import Footer from '../components/footer'

const Blog = () => {
  return (
    <main>
      <HeroPost />
      <BlogPosts />
      <Footer />
    </main>
  )
}

export default Blog
