import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query  {
      placeholderImage: file(relativePath: { eq: "image-not-found.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img className="lg:w-1/6 md:w-2/6 w-3/6 object-cover object-center rounded mb-10"
               fluid={data.placeholderImage.childImageSharp.fluid} 
               />
}

Image.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
}

Image.defaultProps = {
  path: `my-image.jpg`,
  className: ``,
  alt : ``,
}

export default Image
