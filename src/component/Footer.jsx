import React from 'react'

function Footer({page}) {
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><button className="page-link" onClick={()=>page(10)}>1</button></li>
        <li className="page-item"><button className="page-link" onClick={()=>page(20)}>2</button></li>
        <li className="page-item"><button className="page-link" onClick={()=>page(30)}>All</button></li>
      </ul>
    </nav>
  )
}

export default Footer