import React from 'react';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
import "./style.css"

function Rating({rating,onClick,style}) {
  return <div className='containerRating'>
      {
          [...Array(5)].map((_,i) => (
              <div key={i} onClick={() => onClick(i)} style={style}>
                  {
                      rating > i ? (
                          <AiFillStar fontSize = "15px" />
                      ) : (
                        <AiOutlineStar fontSize = "15px" />
                      )
                  }
              </div>
          ))
      }
  </div>;
}

export default Rating;
