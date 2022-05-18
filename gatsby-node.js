const path = require('path');

exports.createPages = async ({graphql, actions}) => {
   const {createPage} = actions;

   const posts =  await graphql(`
      query {
        posts: allMarkdownRemark {
            edges {
               node {
                  frontmatter {
                  path
                  title
                  }
               }
            }
         }
      }
   `)
   posts.data.posts.edges.forEach(post => {
      const template = __dirname + '/src/templates/post.js';
      createPage({
         path: post.node.frontmatter.path,
         component: template,
         context: {
            id: post.node.frontmatter.path,
         }
      })
   });

   const pageSize = 2
   const totalPost = posts.data.posts.edges.length
   const numPage = Math.ceil(totalPost / pageSize)
   const templateBlog = __dirname + '/src/templates/blog.jsx';

   Array.from({length: numPage}).forEach((_, i) => {
     createPage({
        path: '/blog' + (i == 0 ?'' : '/' + (i +1) ),
        component: templateBlog,
        context: {
           limit: pageSize,
           skip: i* pageSize,
           numPage,
           currentePage: i
        }
     }) 
   })

   console.log(templateBlog)
   console.log(numPage)
   console.log(totalPost)

}