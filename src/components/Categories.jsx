import React from 'react'

const Categories = ({activeCategory, selectedCategory, onSelectCategory,}) => {
    const categories = ["Startups", "Security", "AI", "Tech", "Apps"];
    
  return (
    <div className= 'px-4 mb-8 lg: space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-primary'>
      <button onClick={()=> onSelectCategory(null)} className={`lg:ml-12 ${activeCategory? "": "activeCategory"}`}>All</button>
      {
        categories.map((category, index)=>{
            return(
                <button 
                onClick={()=> onSelectCategory(category)}
                className={`${activeCategory === category ? "activeCategory": ""}`} key={index}>
                    {category}
                </button>
            )
        })
      }
    </div>
  )
}

export default Categories
