import React from "react"
import styles from "./projects.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className={styles.header}>
      <h2 className={styles.header_first}>Who i am</h2>
      <hr />
      <h2 className={styles.header_second}>(today)</h2>
    </div>
  </Layout>
)

export default Projects
