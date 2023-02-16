import LevelButton from "./LevelButton";
import styled from "styled-components";

const LevelListCSS = styled.ul`
  .level-list {
    width: 280px;
    display: flex;
    justify-content: space-around;
    margin: 25px auto 0 auto;
  }
`;
const LevelList = () => {
  return (
    <LevelListCSS>
      <ul className="level-list">
        <LevelButton level="1" />
        <LevelButton level="2" />
        <LevelButton level="3" />
      </ul>
    </LevelListCSS>
  );
};

export default LevelList;
