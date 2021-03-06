import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const profilePicImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "HeroSection/my-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="text-gray-600 dark:text-gray-300 dark:bg-gray-800">
      <footer className="body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Img
            fluid={profilePicImage.file.childImageSharp.fluid}
            className="w-10 h-10 p-2 rounded-full" 
            alt="My profile pic"
          />
           {/* 
           class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" 
          */}
            <span className="ml-3 text-xl dark:text-gray-300">E.H Rafat</span>
          </div>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 ml-auto mr-auto items-center justify-center">
           Thank you. See you soon
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
           
          <p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            ©{ new Date().getFullYear() } Emdadul Haque Rafat —
            <a
              href="https://rafat97.github.io/"
              className="text-blue-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Rafat97
            </a>
          </p>
          </span>
        </div>
      </footer>
    </section>
  )
}

export default Footer
