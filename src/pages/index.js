import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.header__container}>
      <h2 className={styles.header__container_title}>Keep Moving Forward</h2>
      <div className={styles.header__container_bio}>
        <Image />
        <div className={styles.header__container_bio_left}>
          <p>
            Written by Nyan Lin Tun who lives and remote developer in Myanmar.
          </p>
          <small>passionate about code, design, startups and technology</small>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
