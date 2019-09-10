import React, { Component } from "react"
// import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const fluid = (post.featured_media) ? post.featured_media.localFile.childImageSharp.fluid : null

        const relatedPost = post.jetpack_related_posts[0]

        return (
            <Layout>
              {post.jetpack_featured_media_url &&
                <img src={post.jetpack_featured_media_url} alt={post.title}/>
              }
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {fluid &&
                  <div>
                    <Img fluid={fluid}/>
                  </div>
                }

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <hr/>
                <h2>{relatedPost.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: relatedPost.excerpt }} />
                  <p>{relatedPost.url}</p>
                  <img src={relatedPost.img.src} alt={relatedPost.title}/>


            </Layout>

        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      jetpack_featured_media_url
      jetpack_related_posts {
        excerpt
        img {
          src
        }
        url
        title
        wordpress_id
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
