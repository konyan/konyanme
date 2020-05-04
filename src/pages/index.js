import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Blog from "../components/blog"

const blogs = [
  {
    title: "Hello World",
    date: "20, MAY, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Hello World",
    date: "20, MAY, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Hello World",
    date: "20, MAY, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Hello World",
    date: "20, MAY, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.container}>
      <h2 className={styles.header__title}>Keep Moving Forward</h2>
      <div className={styles.header__bio}>
        <Image />
        <div className={styles.header__bio_left}>
          <p>
            Written by Nyan Lin Tun who lives and remote developer in Myanmar.
          </p>
          <small>passionate about code, design, startups and technology</small>
        </div>
      </div>
      <div className={styles.blogs__container}>
        {blogs.map(b => (
          <Blog
            key={b.title}
            title={b.title}
            description={b.description}
            date={b.date}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
