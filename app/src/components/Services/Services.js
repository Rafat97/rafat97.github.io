import React from "react"
import SingleServices from './SingleServices'

import Allservices from "../../static/Services/my_services.json"

const Services = () => {
  return (
    <section className="border-t-4 rounded-tr-3xl rounded-tl-3xl text-gray-600 body-font dark:text-gray-300 dark:bg-gray-800 ">
      <div className="mt-10 flex justify-center mx-auto text-5xl font-extrabold ">
        <div className="border-b-2">My Services</div>
      </div>
      <div className="container px-5 py-20 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">

          {
            Allservices.map((service , idx)=>{
              return(
                  <SingleServices
                    key={idx}
                    {...service}
                  />
              );
            })
          }


       
        </div>
      </div>
    </section>
  )
}

export default Services
