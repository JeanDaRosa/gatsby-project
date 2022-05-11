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
      // console.log(post);
      const template = __dirname + '/src/templates/post.js';
      createPage({
         path: post.node.frontmatter.path,
         component: template,
         context: {
            id: post.node.frontmatter.path,
         }
      })
   });
   console.log(posts);

}