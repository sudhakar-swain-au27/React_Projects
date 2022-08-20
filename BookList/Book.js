import React from 'react'


 export const Book = (props) => {
  const clickHandler = () =>{
    alert('Welcome to The BookList')
  }
  const{img , title , author} = props.book;
  
  return(
  <article className="book">
  <img src={img} alt="" />
  <h1>{title}</h1>
  <h4>{author}</h4>
  <button type="button" className="prime" onClick={clickHandler}>Buy Now</button>



</article>
  );
};

export default Book ;