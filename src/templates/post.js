import { graphql } from "gatsby";
import React from "react";
import HeroPost from "../components/blog/blogPosts/HeroPost";
import Footer from "../components/footer";


const Post = ({data}) => {
  
  return(
    <main>
      <HeroPost />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={ {__html: data.markdownRemark.html}} />
      <pre>{JSON.stringify(data,null,2)}</pre>
      <Footer />
    </main>
  )
}

export const pageQuery = graphql`
  query($id: String!){
    markdownRemark(frontmatter: {path: {eq: $id}}) {
      frontmatter {
        path
        content
        postDate
        title
      }
      html
    }
  }
`


export default Post