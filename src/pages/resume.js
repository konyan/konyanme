import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Page two" keywords={["konyan's resume"]} />
    <p>
      We’ll be back soon! Sorry for the inconvenience but we’re performing some
      maintenance at the moment. If you need to you can always contact us,
      otherwise we’ll be back online shortly! — KoNyan
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
