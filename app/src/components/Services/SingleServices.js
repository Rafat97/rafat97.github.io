import React from "react"

const SingleServices = ({ title, description, image_link, redirect_url }) => {
  return (
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col transition delay-150 duration-300 ease-in-out hover:shadow-2xl dark:hover:shadow-2xl-dark dark:hover:border-indigo-600 ">
         
           <img 
           className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center text-indigo-500 flex-shrink-0"
           src={image_link}
           alt={title}
           />
          <div className="flex-grow">
            <h2 className="text-3xl title-font font-medium mb-3">{title}</h2>
            <p className="leading-relaxed text-base">{description}</p>
            <a href={redirect_url} target="_blank" rel="noreferrer noopener">
              <div className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default SingleServices
