import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./index.css";

export function StarRating({}) {
  const [rating, setRating] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseOver = (e: number) => {
    setHoverIndex(e);
  };

  const handleMouseLeave = () => {
    setHoverIndex(rating);
  };

  const handleMouseClick = (e: number) => {
    setRating(e);
  };

  return (
    <>
      <div className="container-rate" style={{}}>
        {[1, 2, 3, 4, 5].map((e) => {
          if (e <= hoverIndex)
            return (
              <AiFillStar
                onMouseEnter={() => {
                  handleMouseOver(e);
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                }}
                onClick={() => handleMouseClick(e)}
                style={{
                  padding: 4,
                }}
                key={e}
                size={60}
              />
            );
          else
            return (
              <AiOutlineStar
                onMouseEnter={() => {
                  handleMouseOver(e);
                }}
                style={{
                  padding: 4,
                }}
                key={e}
                size={60}
              />
            );
        })}

        <div>current rating :- {rating}</div>
      </div>
    </>
  );
}
