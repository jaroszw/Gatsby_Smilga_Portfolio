import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        id
        url
        title
        github
        slug
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default IndexPage
