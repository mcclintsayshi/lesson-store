import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

const ProductPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>A Product</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cumque
        similique molestiae illum suscipit, dolore dignissimos minus modi aut
        quos qui officiis, in odit doloremque veniam iste. Dicta, quo itaque?
      </p>
    </Layout>
  )
}

export default ProductPage
