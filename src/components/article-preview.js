import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default ({ article }) => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 2) == 0 //The maximum is exclusive and the minimum is inclusive
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

  const BlogItem = styled.main`
    overflow: hidden;
    display: grid;
    grid-row: ${gridColumns};
    grid-column: ${gridRows};
    border: 3px red solid;
  `

  const BlogColumn = styled.article`
    display: flex;
    flex-direction: column;
  `

  const BlogRow = styled.article`
    display: flex;
    flex-direction: row;
  `

  // {/* <Img alt="hi" fluid={article.heroImage.fluid} /> */ }
  // <h3>{article.title}</h3>

  const boxOrientation = gridRows > gridColumns

  const boxEqualOrientation = gridRows === gridColumns

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
              <BlogRow>
                <Link to={`/blog/${article.slug}`}>THIS IS A BLOG ROW</Link>
              </BlogRow>
            )
          case 1:
            return (
              <BlogRow>
                <Link to={`/blog/${article.slug}`}>THIS IS A BLOG COLUMN</Link>
              </BlogRow>
            )
          case 2:
            return (
              <BlogRow>
                <Link to={`/blog/${article.slug}`}>THIS IS A BLOG BOX</Link>
              </BlogRow>
            )
          default:
            null
        }
      })()}
    </BlogItem>
  )
}

// {
//   boxOrientation ? (
//     <BlogRow>
//       <Link to={`/blog/${article.slug}`}>THIS IS A BLOG ROW</Link>
//     </BlogRow>
//   ) : (
//       <BlogColumn>
//         <Link to={`/blog/${article.slug}`}>THIS IS A BLOG COLUMN</Link>
//       </BlogColumn>
//     )
// }
