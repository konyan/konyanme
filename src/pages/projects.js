import React from "react"
import styles from "./projects.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Card from "../components/card"

const projects = [
  {
    image:
      "https://raw.githubusercontent.com/konyan/love-note/development/app/assets/images/ss.png",
    title: "My Love Note",
    skills: ["Rails", "HTML", "CSS"],
    github: "https://github.com/konyan/love-note",
  },
  {
    image:
      "https://github.com/konyan/ruby-job-scrapper/raw/master/images/program.png",
    title: "Console Jobs",
    skills: ["Ruby", "Terminal"],
    github: "https://github.com/konyan/ruby-job-scrapper",
  },
  {
    image:
      "https://github.com/konyan/myanmar-restaurant/raw/development/dist/img/project-img.png",
    title: "Myanmar Restaurant App",
    skills: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/konyan/myanmar-restaurant",
  },
  {
    image:
      "https://github.com/konyan/todo-project/raw/development/dist/img/todo.png",
    title: "My Todo List App",
    skills: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/konyan/todo-project",
  },
  {
    image:
      "https://github.com/konyan/weather-app/raw/development/dist/img/project-bg.png",
    title: "My Weather App",
    skills: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/konyan/weather-app",
  }
]

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={["konyan's projects"]} />
      <div className={styles.header}>
        <h2 className={styles.header_first}>Who i am</h2>
        <hr />
        <h2 className={styles.header_second}>(today)</h2>
      </div>
      <div className={styles.skills}>
        <ul className={styles.skills__list}>
          <li className={styles.skills__list_item}>
            <Link
              to="/projects?skills=all"
              activeClassName="active"
              partiallyActive={true}
            >
              ALL
            </Link>
          </li>
          <li className={styles.skills__list_item}>
            <Link to="/projects?skills=html" activeClassName="active">
              HTML
            </Link>
          </li>
          <li className={styles.skills__list_item}>
            <Link to="/projects?skills=css" activeClassName="active">
              CSS
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.cards}>
        {projects.map(p => (
          <Card
            title={p.title}
            skills={p.skills}
            image={p.image}
            key={p.title}
            github={p.github}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects
