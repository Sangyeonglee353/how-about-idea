import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { createMemberStar, updateMemberStar, getStarRating } from "../../Api";

const StarRatingCSS = styled.div`
  display: inline-block;
  padding-right: 10px;
  .btn-star {
    border: none;
    background: transparent;
  }
  .btn-star__update {
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

  // const getData = props.starNum;

  // [백 엔드]_평가하기 반영
  // 조건 1_사용자가 메긴 별점이 없는 경우_=="" => 별점 등록
  // 조건 2_사용자가 메긴 별점이 있는 경우_!=="" => 별점 패치(업데이트)
  async function memberStarHandler() {
    const data = {
      starRating: stars,
    };
    let id = props.sentenceId;
    let res;

    if (props.starNum === "") {
      res = await createMemberStar(id, data);
      alert("별점 평가가 추가되었습니다.");
    } else {
      res = await updateMemberStar(id, data);
      alert("별점 평가가 반영되었습니다.");
    }
  }

  useEffect(() => {
    setStars(props.starNum === "" ? 0 : props.starNum);
  }, [props.starNum]);

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
            disabled={true}
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
        <button
          type="button"
          className="btn-star__update"
          onClick={memberStarHandler}
        >
          평가하기
        </button>
      ) : (
        ""
      )}
    </StarRatingCSS>
  );
};

export default StarRating;
