import MindList from "./MindList";
import styled from "styled-components";
import magnifyingGlass from "../images/magnifying-glass-solid.svg";

const MindSearchCSS = styled.div`
  background-color: #f3f3f3;
  padding-top: 1.5vh;

  .search-wrapper {
    width: 55vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 20px;
    @media (max-width: 600px) {
      width: 90%;
    }
    .search-form {
      width: 95%;
      @media (max-width: 600px) {
        width: 90%;
      }
      img {
        &.fa-magnifyingGlass {
          margin-left: 2%;
          height: 16px;
        }
      }
      input {
        border: none;
        &:focus {
          outline: none;
        }
        &.search {
          width: 85%;
          font-size: 20px;
          margin: 15px auto 15px 1vw;
          word-break: break-all;
        }
      }
    }
  }
`;
const MindSearch = () => {
  return (
    <MindSearchCSS>
      <div className="search-wrapper">
        <form className="search-form">
          <img
            src={magnifyingGlass}
            className="fa-magnifyingGlass"
            alt="fa-magnifyingGlass"
          />
          <input type="text" className="search" placeHolder="Search..." />
        </form>
      </div>
      <MindList />
    </MindSearchCSS>
  );
};

export default MindSearch;
