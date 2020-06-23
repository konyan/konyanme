import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Blog from "../components/blog"

const blogsQuery = graphql`
  query{
    allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            author
            title
            date(formatString: "MMM Do, YYYY")
            path
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`konyan`, `nyan lin tun's blog`, 'gatsby', 'react', `dev konyan's blog`, `konyan's blog`]} />
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
        <StaticQuery query={blogsQuery} render={data => {
          return (
            <div>
              {
                data.allMarkdownRemark.edges.map(({ node }) => (
                  <Blog
                    key={node.id}
                    title={node.frontmatter.title}
                    description={node.excerpt}
                    path={node.frontmatter.path}
                    date={node.frontmatter.date}
                  />
                ))
              }
            </div>
          )
        }} />
      </div>
    </div>
  </Layout>
)

export default IndexPage


// {
//   blogs.map(b => (
//     <Blog
//       key={b.title}
//       title={b.title}
//       description={b.description}
//       date={b.date}
//     />
//   ))
// }