import React from 'react';
import Layout from '../components/layout'

import { graphql } from 'gatsby';

import SEO from '../components/seo'



const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
    </Layout>
  )
}

export default SinglePost;