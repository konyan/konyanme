import { Link } from "gatsby"
import React from "react"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import styles from "./footer.module.scss"

const Footer = () => (
  <footer className={styles.f_contianer}>
    <div className={styles.footer}>
      <p className={styles.footer__builder}>
        © {new Date().getFullYear()}, Built with love by Ko Nyan
      </p>
      <ul className={styles.footer__right}>
        <li className={styles.footer__right_item}>
          <Link>
            <img src={github} alt="ko nyan's github" />
          </Link>
        </li>
        <li className={styles.footer__right_item}>
          <Link>
            <img src={linkedin} alt="ko nyan's linkedin" />
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
