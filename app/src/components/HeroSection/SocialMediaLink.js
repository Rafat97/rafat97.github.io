import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import Socialmedia from "../../images/HeroSection/socialmedia.json"

const SocialMediaLink = () => {
  return (
    <>
      <div className=" justify-center flex-col">
        <div className="transition delay-150 duration-300 ease-in-out inline-flex py-1 px-6 focus:outline-none  hover:text-black">
          <a href={Socialmedia.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="transition delay-150 duration-300 ease-in-out inline-flex py-1 px-6 focus:outline-none hover:text-purple-600">
          <a href={Socialmedia.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <div className="transition delay-150 duration-300 ease-in-out inline-flex py-1 px-6 focus:outline-none hover:text-blue-600">
          <a href={Socialmedia.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div className="transition delay-150 duration-300 ease-in-out inline-flex py-1 px-6 focus:outline-none hover:text-purple-300">
          <a href={Socialmedia.twitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <div className="transition delay-150 duration-300 ease-in-out inline-flex py-1 px-6 focus:outline-none hover:text-red-600">
          <a href={Socialmedia.email} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faAt} size="2x" />
          </a>
        </div>
        <div className="transition delay-150 duration-300 ease-in-out inline-flex py-1 px-6 focus:outline-none hover:text-red-600">
          <a href={Socialmedia.phone} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faMobileAlt} size="2x" />
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialMediaLink
