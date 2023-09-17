import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div>
      <h1> HomePage of  Store</h1>
      <p>Design as you like Home Page</p>
     <Link to="/menu">Menu Page</Link><br/>
    </div>
  )
}

export default HomePage