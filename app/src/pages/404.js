import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bounce from "react-reveal/Bounce"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="text-gray-600 dark:text-gray-300  dark:bg-gray-800 ">
      <div className="h-screen mx-auto flex items-center justify-center flex-col">
        <div className="text-9xl font-extrabold font-sans error-text">
          <Bounce big top cascade>
            404
          </Bounce>
        </div>
        <div className="text-3xl pt-5 font-sans">
          Sorry ! Page Not Found
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
