import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import logo from "../images/logo.svg"

const Header = () => (
  <header className={styles.container}>
    <nav className={styles.navbar}>
      <div className={styles.navbar__header}>
        <img src={logo} alt="konyan's blog logo" />
      </div>
      <ul className={styles.navbar__right}>
        <li className={styles.navbar__right_item}>
          <Link to="/" activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li className={styles.navbar__right_item}>
          <Link to="/projects" activeClassName={styles.active}>
            Projects
          </Link>
        </li>
        <li className={styles.navbar__right_item}>
          <Link to="/resume" activeClassName={styles.active}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
