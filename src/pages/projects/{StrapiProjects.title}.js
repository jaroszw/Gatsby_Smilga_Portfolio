import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <div>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProjects.description}</p>
      </main>
    </div>
  )
}

export default ProjectTemplate

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      title
      github
      featured
      description
      slug
      url
      stack {
        id
        title
      }
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      id
    }
  }
`
