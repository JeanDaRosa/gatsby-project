import { ArrowSmRightIcon, StarIcon } from '@heroicons/react/outline'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from 'react'
import HeroPost from '../components/blog/blogPosts/HeroPost'
import Footer from '../components/footer'
import PostFooter from '../components/footer/postFooter'

export const PageQuery = graphql`
  query ($skip: Int!, $limit: Int!){
    postQuery: allMarkdownRemark (
      skip: $skip,
      limit: $limit
    ){
      edges {
        node {
          frontmatter {
            path
            postDate
            title
            capa {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`

const listItems= [
  {
    icon: StarIcon,
    href: '/',
  },
  {
    icon: StarIcon,
    href: '/',
  },
  {
    icon: StarIcon,
    href: '/',
  },
  {
    icon: StarIcon,
    href: '/',
  },
  {
    icon: StarIcon,
    href: '/',
  },
  {
    icon: StarIcon,
    href: '/',
  },
]

const Post = ({
  postDate,
  title,
  content,
  btnContinueReadingHref,
  photo
}) => (
  <div className="flex flex-col md:flex-row pb-16">
    {/* post User */}
    <div className="flex items-center justify-between md:items-start md:w-64">
      <div className="flex items-center md:flex-col md:pr-6">
        <div className="w-12 pb-4 md:w-24 2xl:w-28">
          <img
            className=""
            src="http://2.gravatar.com/avatar/?s=144&d=mm&r=g"
            alt="avatar"
          />
        </div>
        <div className=" flex flex-col items-end text-sm">
          <a href="#" className="font-semibold">
            by
          </a>
          <p>{postDate}</p>
        </div>
      </div>
    </div>
    {/* post contet */}
    <div className="">
      <div>
        <div className="pb-8 flex justify-end">
          <GatsbyImage image={photo}/>
        </div>
        <div>
          <p className="flex tracking-widest">
            <a href="#" className="pr-2">
              Audio
            </a>
            <a href="#" className="pr-2">
              video
            </a>
            /
            <StarIcon className="w-8 pl-2 pr-1" /> 0
          </p>
        </div>
      </div>
      <div className="pb-10 lg:pb-8">
        <h2 className="pb-2 font-extrabold text-3xl md:text-4xl">{title}</h2>
        <p className="leading-8">{content} </p>
      </div>
      <div className="lg:hidden">
        <div className="border-solid border-t-2 border-gray-400 rounded-full bg-gray-400  black w-20 m-auto pt-"></div>
      </div>
      <div className="pt-4 flex flex-col lg:items-center lg:justify-between lg:flex-row">
        <div className=" flex items-center justify-center pt-2 pb-4 lg:pb-2">
          {listItems.map(o => (
            <a href={o.href}>
              <o.icon className=" w-6 mx-1" />
            </a>
          ))}
        </div>
        <div className="flex mx-auto lg:mx-0 items-center border-solid border-2 border-black rounded-3xl w-64 my-auto  py-1 hover:bg-black hover:text-white duration-500">
          <a
            src={btnContinueReadingHref}
            className="flex items-center font-bold"
          >
            <Link to={btnContinueReadingHref}> <p className="px-6 text-bold uppercase">continue reading</p> </Link>
            <div className="border-l-solid border-l-2 border-black">
              <ArrowSmRightIcon className="w-8 ml-1" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

const Blog = props => {
  const {data} = props
  return (
    <main>
      <HeroPost />

      <section className="container mx-auto p-8 pt-12 flex flex-col lg:flex-row  ">
      <div className="lg:w-9/12 lg:pr-8 lg:pt-6">
        <div className="">
          <pre>{JSON.stringify(data, null,2)}</pre>
          {data.postQuery.edges.map(post => {
            const image = getImage(post.node.frontmatter.capa)
            return(
              <Post 
                postDate={post.node.frontmatter.postDate}
                title={post.node.frontmatter.title}
                content={post.node.frontmatter.content}
                btnContinueReadingHref={post.node.frontmatter.path}
                key={post.node.frontmatter.title}
                photo={image}
              />
              
            )
          })}
        </div>
      </div>
      <div className="lg:w-3/12 ">
      <PostFooter />
      </div>
      </section>
      <Footer />
    </main>
  )
}

export default Blog
