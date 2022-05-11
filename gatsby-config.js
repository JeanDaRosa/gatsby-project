module.exports = {
  siteMetadata: {
    title: `Gatsby Project`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: 
  ["gatsby-plugin-netlify-cms", 
  "gatsby-plugin-postcss", 
  "gatsby-plugin-image", 
  "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  'gatsby-transformer-remark',

  {
    resolve:'gatsby-source-filesystem',
    options: {
      path: __dirname + '/src/images',
      name: 'images'
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blogPosts`,
      path: `${__dirname}/src/blogPosts/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }
]
};