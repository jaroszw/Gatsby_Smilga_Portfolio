import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container"></div>
        <h1>Ooops i did it again</h1>
        <Link to="/" className="btn">
          back Home
        </Link>
      </main>
    </>
  )
}

export default Error
