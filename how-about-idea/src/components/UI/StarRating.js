import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import faRegularStar from "../../images/star-regular.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StarRatingCSS = styled.div`
  display: inline-block;
  padding-right: 10px;
  .fa-star-fill {
    width: 15px;
    height: 15px;
  }
`;

const StarRating = ({ totalStars = 5 }, props) => {
  // 1. API에서 넘겨줄 때 개수로 넘겨준다.
  // 2. 해당 개수 만큼 State를 변경한다.(handleStarRating 사용)

  // [문제사항]
  // Star라는 컴포넌트를 따로 만들어서 map을 이용해 호출하려고 하나, 해당 컴포넌트가 제대로 작동하지 않음
  // [문제 해결]
  // 컴포넌트는 기본적으로 return 구문이 있어야 값을 뱉어낸다. 이전의 경우 return 구문이 없어 값을 출력하지 못함
  // [고민사항]
  // 별의 크기는 어떻게 조정할 것인가?
  // 방법 1_전체 너비를 기준으로 %로 준다. -> props로 크기를 받아와 설정 / but, 마지막 페이지는...?

  // [문제사항]
  // 기본 셋팅 값을 어떻게 반영할 것인가?
  // setStar([0, 1, 2, 3, 4, 5])
  // 별점 표시
  const createArray = (length) => [...Array(length)];

  const [stars, setStars] = useState(0);

  const getData = props.starNum;

  console.log("starNum: ", getData);
  // useEffect(setStars(starNum), []);

  const Star = ({ selected = false, onSelect = (f) => f }) => {
    return (
      <>
        <FontAwesomeIcon
          icon="fa-solid fa-star"
          color={selected ? "yellow" : "gray"}
          onClick={onSelect}
          className="fa-star-fill"
        />
      </>
    );
  };

  return (
    <StarRatingCSS>
      {createArray(totalStars).map((n, i) => {
        return (
          <Star key={i} selected={stars > i} onSelect={() => setStars(i + 1)} />
        );
      })}
      <button type="button" onClick={() => setStars(4)}>
        테스트
      </button>
    </StarRatingCSS>
  );
};

export default StarRating;
