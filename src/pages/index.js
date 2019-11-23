import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styled from 'styled-components'

//styled components
// import { BlogGrid } from './styles'

const RootIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allContentfulBlogPost.edges
  const [author] = props.data.allContentfulPerson.edges

  const BlogGrid = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
    grid-auto-rows: 50px;
    grid-auto-flow: dense;
  `

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      {/* <Hero data={author.node} /> */}
      <BlogGrid>
        {posts.map(({ node }) => {
          return <ArticlePreview article={node} key={node.slug} />
        })}
      </BlogGrid>
    </Layout>
  )
}

export default RootIndex
export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
