import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styled from 'styled-components'

const RootIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allContentfulBlogPost.edges

  const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
    grid-auto-rows: 50px;
    grid-auto-flow: dense;
    grid-gap: 1.4rem;
    margin: 0 auto;
    align-items: right;
    align-self: center;
    justify-self: center;
  `

  const Container = styled.main`
    display: grid;
    width: 100%;
    margin: 0 auto;
  `

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <Container>
        <BlogGrid>
          {posts.map(({ node }) => {
            return <ArticlePreview article={node} key={node.slug} />
          })}
        </BlogGrid>
      </Container>
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
