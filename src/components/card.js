import PropTypes from "prop-types"
import React from "react"
import styles from "./card.module.scss"

const Card = ({ title, skills, image, github }) => {
  return (
    <a className={styles.container} href={github} target="blank">
      <div className={styles.image__container}>
        <img src={image} alt={title} className={styles.image__container_img} />
      </div>
      <div className={styles.body__container}>
        <ul className={styles.body__container__skills}>
          {skills.map(skill => (
            <li className={styles.body__container__skills_item} key={skill}>
              {skill}
            </li>
          ))}
        </ul>
        <h3 className={styles.body__container_title}>{title}</h3>
      </div>
    </a>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: ``,
}

export default Card
