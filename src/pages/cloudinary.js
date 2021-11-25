import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CloudImageGallery from "../components/CloudImageGallery"

const CloudinaryPage = () => (
  <Layout>
    <Seo title="Cloudinary" />
    <CloudImageGallery/>
  </Layout>
)

export default CloudinaryPage
