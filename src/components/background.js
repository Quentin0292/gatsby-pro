import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Image = () => (
  <StaticQuery
   query={graphql`
    query {
      placeholderImage: file(relativePath: { eq: "background.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1920){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
   `}
   render={data => (
     <Img
      style={{ minHeight: '100vh' }}
      fluid={data.placeholderImage.childImageSharp.fluid}
     />
   )}
  />
)

const Background = () => {
  return (
    <div
      style={{
        left: 'Opx',
        top: 'Opx',
        overflow: 'hidden',
        margin: '0px',
        padding: '0px',
        height: '100%',
        width: '100%',
        zIndex: '-999999',
        position: 'fixed'
      }}
    >
      <Image />
    </div>
  )
}



export default Background
