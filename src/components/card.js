import PropTypes from "prop-types"
import React from "react"
import styles from "./card.module.scss"

const Card = ({ title, skills, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <img src={image} alt={title} className={styles.image__container_img} />
      </div>
      <div className={styles.body__container}>
        <ul className={styles.body__container__skills}>
          {skills.map(skill => (
            <li className={styles.body__container__skills_item}>{skill}</li>
          ))}
        </ul>
        <h3 className={styles.body__container_title}>{title}</h3>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: ``,
}

export default Card
