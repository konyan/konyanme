import PropTypes from "prop-types"
import React from "react"
import styles from "./blog.module.scss"
import { Link } from "gatsby"

const Card = ({ title, date, description, path }) => {
  return (
    <article className={styles.container}>
      <Link to={path}>
        <h4 className={styles.title}>{title}</h4>
      </Link>
      <date className={styles.date}>{date}</date>
      <p className={styles.description}>{description}</p>
      <Link className={styles.readmore} to={path}>
        <span>Read more >></span>
      </Link>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: ``,
}

export default Card
