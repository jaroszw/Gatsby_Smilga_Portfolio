import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    github,
    featured,
    description,
    slug,
    url,
    stack,
    image,
  } = data.strapiProjects

  return (
    <div>
      <h4>{title}</h4>
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
