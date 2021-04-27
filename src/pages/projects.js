import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="project-page">
          <Projects projects={projects} title="all project" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        featured
        github
        id
        title
        url
        slug
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default ProjectsPage
