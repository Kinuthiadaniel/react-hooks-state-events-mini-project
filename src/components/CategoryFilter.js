import React,{useState} from "react";

function CategoryFilter({ categories, selectedButton}) {
const [selectedCategory,setSelectedCategory]= useState("All")
const handleClick = (category)=>{
setSelectedCategory(category)
selectedButton(category)
}
  return (
    <div className="categories">
      <h5>Category filters</h5>
    {
      categories.map((category) => (
        <button key={category} className={category === selectedCategory? "selected" : ""} onClick={()=>handleClick(category)}>
          {category}
        </button>
      ))
    }
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
