import React from 'react'
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
        <div className="header__body__left__heading">404 Page NotFound</div>
        <Link to={"/"}><input type="button" value="Back Home" className="btn-default"/></Link>
    </>
  )
}

export default NotFound