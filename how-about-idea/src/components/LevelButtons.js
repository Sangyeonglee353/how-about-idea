import React from 'react'
import LevelButton from "./LevelButton";
import styled from 'styled-components';

const LevelBtns = styled.ul`
    width: 280px;
    display: flex;
    justify-content: space-around;
    margin: 25px auto 0 auto;
`;

const LevelButtons = () => {
  return (
    <LevelBtns>
      <LevelButton level="1" />
      <LevelButton level="2" />
      <LevelButton level="3" />
    </LevelBtns>
  );
};

export default LevelButtons;
