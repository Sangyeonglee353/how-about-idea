import styled from "styled-components";

const LevelBtn = styled.button`
  width: 70px;
  height: 56px;
  background-color: white;
  border: 5px solid var(--color-main-blue);
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-main-blue);
    color: white;
  }
`;
const LevelButton = (props) => {
  return <LevelBtn>{props.level}</LevelBtn>;
};

export default LevelButton;
