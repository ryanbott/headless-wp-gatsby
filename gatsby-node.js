const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    const pageTemplate = path.resolve("./src/templates/page.js");
    const postTemplate = path.resolve("./src/templates/post.js");

    graphql(
      `
      {
        allWordpressPage {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              title
              slug
              content
              excerpt
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
      `
      ).then(result => {
      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      result.data.allWordpressPage.edges.forEach(({node}) => {
        createPage({
          path: node.slug,
          component: path.resolve(pageTemplate),
          context: {
            slug: node.slug,
          }
        })
      })

      result.data.allWordpressPost.edges.forEach(({node}) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve(postTemplate),
          context: {
            slug: node.slug,
          }
        })
      })

      resolve()
    })
  })
}
