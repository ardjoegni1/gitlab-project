import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <h1>NOT FOUND</h1>
    <p>Well this was embarrasing for us.</p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <div>Try another <a href="https://www.gitlab.com">link</a></div>
  </Layout>
)

export default NotFoundPage
