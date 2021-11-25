import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LocalImageGallery from "../components/LocalImageGallery"

const LocalPage = () => (
  <Layout>
    <Seo title="Local" />
    <LocalImageGallery/>
  </Layout>
)

export default LocalPage