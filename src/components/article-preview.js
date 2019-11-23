import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default ({ article }) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
  }

  const totalColumns = article.length
  const columnsArray = new Array(totalColumns).fill(0)
  const gridColumns = columnsArray
    .map(_ => {
      return `${getRandomInt(2, 4)}`
    })
    .join(' ')

  const gridRows = columnsArray
    .map(_ => {
      return `${getRandomInt(2, 8)}`
    })
    .join(' ')

  const BlogItem = styled.main`
    overflow: hidden;
    display: flex;
    grid-row: span ${gridRows};
    grid-column: span ${gridColumns};
    border: 3px red solid;
  `

  const boxGridItem = gridRows === gridColumns

  return (
    <BlogItem>
      {boxGridItem ? (
        <Link to={`/blog/${article.slug}`}>
          <Img alt="" fluid={article.heroImage.fluid} />
          <h3>{article.title}</h3>
        </Link>
      ) : (
        <Link to={`/blog/${article.slug}`}>
          <Img alt="hi" fluid={article.heroImage.fluid} />
          <h3>{article.title}</h3>
          <small>{article.publishDate}</small>
          {article.description.childMarkdownRemark.html}
        </Link>
      )}
    </BlogItem>
  )
}
