import React from "react"
// import ProgileImage from "../../images/HeroSection/my-image.jpg"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SocialMediaLink from './SocialMediaLink'
import Typewriter from 'typewriter-effect';


function HeroSection() {
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
    <>
      <section className="h-screen text-gray-600 dark:text-gray-300 dark:bg-gray-800 ">
        <div className="h-screen container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <Img
            fluid={profilePicImage.file.childImageSharp.fluid}
            className="lg:w-1/6 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded-full"
            alt="My profile pic"
          />
          {/* <img
            className="lg:w-1/6 md:w-2/6 w-3/6 object-cover object-center rounded"
            alt="hero"
            src={ProgileImage}
          /> */}

          <div className="text-center lg:w-3/3 w-full">
            <div className="title-font sm:text-4xl text-3xl mb-7 font-bold">
              Hi, This is  <Typewriter
                options={{
                    strings: ['Emdadul Haque', 'Rafat'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>
            <p className="mb-8 font-semibold ">
              Student | Computer Science and Engineering | Ahsanullah University of Science and Technology
            </p>
            
            <div className="flex justify-center">
                <SocialMediaLink />
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
