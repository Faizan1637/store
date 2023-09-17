import React from 'react'

function CategoryButton({onCatSelection, selectedCatId,categoryArray}) {
  
  return (
    <>
      {categoryArray.map((cat,index)=>{
      return(<React.Fragment key={index}>
      <button
        type="button"
        className={
          `m-1 btn 
            ${index === selectedCatId ? 'btn-success' : 'btn-danger'}`
        }
        key={index}
        onClick={() => onCatSelection(index,cat)}
      >
        {cat}
        </button>
    </React.Fragment>)
    })}
    </>
  )
}

export default CategoryButton