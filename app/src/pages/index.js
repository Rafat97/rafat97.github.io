import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {HeroSection} from "../components/HeroSection"
import {Footer} from "../components/Footer"
import {Services} from "../components/Services"
const IndexPage = () => (
 
  <Layout>
    <SEO title="Rafat's World" />
    <HeroSection />
    <Services/>
     
    {/*<h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>  */}
    <Footer />
  </Layout>
)

export default IndexPage
