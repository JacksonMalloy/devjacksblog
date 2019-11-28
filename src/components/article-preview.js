import React, { Children } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default ({ article }) => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 2) == 0
  }

  const totalColumns = article.length
  const columnsArray = new Array(totalColumns).fill(0)
  const gridColumns = columnsArray
    .map(_ => {
      return `${getRandomInt() ? 'span 4' : 'span 8'}`
    })
    .join(' ')

  const gridRows = columnsArray
    .map(_ => {
      return `${getRandomInt() ? 'span 4' : 'span 8'}`
    })
    .join(' ')

  // Styled Components
  const BlogItem = styled.main`
    overflow: hidden;
    display: grid;
    grid-row: ${gridColumns};
    grid-column: ${gridRows};
    width: 100%;
    height: 100%;
    transition: 0.3s linear;
    background-image: linear-gradient(
      ${props => props.theme.backgroundcolor},
      ${props => props.theme.primary}
    );
    color: ${props => props.theme.subprimary};
    border-radius: ${props =>
      props.children.props.children.type.displayName === 'styled.div'
        ? '20%'
        : '20px'};

    &:hover {
      box-shadow: 0px 0px 25px 2px ${props => props.theme.subprimary};
      transition: 0.2s linear;
    }

    h3 {
      margin-top: 8px;
      margin-bottom: 3px;
      text-align: left;
    }
  `

  const BlogColumn = styled.article`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: center;
    justify-content: center;

    .blogColumnImage {
      width: 60%;
    }
  `

  const BlogRow = styled.article`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    z-index: 1;
    align-items: center;
    justify-content: center;

    .blogRowImage {
      width: 60%;
    }
  `

  const BlogBox = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    transition: 0.3s linear;
    z-index: 1;

    align-items: center;
    justify-content: center;

    .blogBoxImage {
      width: 60%;
    }
  `

  const InnerBlogText = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
  `

  const orientation = () => {
    if (gridRows > gridColumns) {
      return 0
    } else if (gridRows < gridColumns) {
      return 1
    } else if (gridRows === gridColumns) {
      return 2
    }
  }

  return (
    <BlogItem>
      {(() => {
        switch (orientation()) {
          case 0:
            return (
              <Link to={`/blog/${article.slug}`}>
                <BlogRow>
                  <Img
                    alt="hi"
                    fluid={article.heroImage.fluid}
                    className="blogRowImage"
                  />
                  {/* 
                  <InnerBlogText>
                    <h3>{article.title}</h3>
                    <small>{article.publishDate}</small>
                    <p>{article.description.childMarkdownRemark.html}</p>
                  </InnerBlogText> */}
                </BlogRow>
              </Link>
            )
          case 1:
            return (
              <Link to={`/blog/${article.slug}`}>
                <BlogColumn>
                  <Img
                    alt="hi"
                    fluid={article.heroImage.fluid}
                    className="blogColumnImage"
                  />
                  {/* 
                  <InnerBlogText>
                    <h3>{article.title}</h3>
                    <small>{article.publishDate}</small>
                    <p>{article.description.childMarkdownRemark.html}</p>
                  </InnerBlogText> */}
                </BlogColumn>
              </Link>
            )
          case 2:
            return (
              <Link to={`/blog/${article.slug}`}>
                <BlogBox>
                  <Img
                    alt="hi"
                    fluid={article.heroImage.fluid}
                    className="blogBoxImage"
                  />
                </BlogBox>
              </Link>
            )
          default:
            null
        }
      })()}
    </BlogItem>
}
