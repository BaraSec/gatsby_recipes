import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with ❤️ by Bara
      </p>
    </footer>
  )
}

export default Footer