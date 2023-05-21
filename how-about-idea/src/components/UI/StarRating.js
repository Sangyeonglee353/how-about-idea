import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StarRatingCSS = styled.div`
  display: inline-block;
  padding-right: 10px;
  .btn-star {
    border: none;
    background: transparent;
  }
  .btn-star__save {
    margin-left: 5px;
  }
  .fa-star-fill {
    width: 15px;
    height: 15px;
  }
`;

const StarRating = (props, { totalStars = 5 }) => {
  const createArray = (length) => [...Array(length)];

  const [stars, setStars] = useState(0);

  const getData = props.starNum;

  useEffect(() => {
    setStars(getData);
  }, []);

  const Star = ({
    selected = false,
    onSelect = (f) => f,
    isDisabled = true,
  }) => {
    return (
      <>
        <button
          type="button"
          className="btn-star"
          disabled={isDisabled}
          onClick={onSelect}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            color={selected ? "#ffc807" : "gray"}
            // onClick={onSelect}
            className="fa-star-fill"
            disabled="true"
          />
        </button>
      </>
    );
  };

  return (
    <StarRatingCSS>
      {createArray(totalStars).map((n, i) => {
        return (
          <Star
            key={i}
            selected={stars > i}
            onSelect={() => setStars(i + 1)}
            isDisabled={props.isDisabled}
          />
        );
      })}
      {!props.isDisabled ? (
        <button type="button" className="btn-star__save">
          평가하기
        </button>
      ) : (
        ""
      )}
    </StarRatingCSS>
  );
};

export default StarRating;
