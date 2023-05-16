import styled from "styled-components";
import React from "react";
const LoadingCSS = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  text-indent: -9999em;
  -webkit-animation: load5 0.5s infinite ease;
  animation: load5 0.5s infinite ease;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);

  @-webkit-keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #1a7399,
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.7),
        1.8em -1.8em 0 0em #1a7399, 2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.5),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.7), 2.5em 0em 0 0em #1a7399,
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.5),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.7), 1.75em 1.75em 0 0em #1a7399,
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.5),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.7), 0em 2.5em 0 0em #1a7399,
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.5),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.7), -1.8em 1.8em 0 0em #1a7399,
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.7), -2.6em 0em 0 0em #1a7399,
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.5),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.7), -1.8em -1.8em 0 0em #1a7399;
    }
  }
  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #1a7399,
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.7),
        1.8em -1.8em 0 0em #1a7399, 2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.5),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.7), 2.5em 0em 0 0em #1a7399,
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.5),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.7), 1.75em 1.75em 0 0em #1a7399,
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.5),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.7), 0em 2.5em 0 0em #1a7399,
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.2),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.5),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.7), -1.8em 1.8em 0 0em #1a7399,
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.7), -2.6em 0em 0 0em #1a7399,
        -1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 182, 255, 0.2),
        1.8em -1.8em 0 0em rgba(0, 182, 255, 0.2),
        2.5em 0em 0 0em rgba(0, 182, 255, 0.2),
        1.75em 1.75em 0 0em rgba(0, 182, 255, 0.2),
        0em 2.5em 0 0em rgba(0, 182, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 182, 255, 0.5),
        -2.6em 0em 0 0em rgba(0, 182, 255, 0.7), -1.8em -1.8em 0 0em #1a7399;
    }
  }
`;
const Loading = () => {
  return <LoadingCSS></LoadingCSS>;
};

export default Loading;
