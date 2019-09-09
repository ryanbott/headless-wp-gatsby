import React, { Component } from "react"
// import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const fluid = (post.featured_media) ? post.featured_media.localFile.childImageSharp.fluid : null


        return (
            <Layout>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {fluid &&
                    <div>
                        <Img fluid={fluid}/>
                    </div>
                }

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
