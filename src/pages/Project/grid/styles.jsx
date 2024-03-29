import styled from "styled-components";

const Container = styled.div`
  & {
    border-radius: 10px;
    border: 2px solid #00ffff;
  }

  & > div:last-child {
    padding: 20px 0;
    color: #00ffff;
    text-align: center;
    font-family: "Play", sans-serif;
  }

  .grid {
    position: relative;
    height: 10rem;
    border-radius: 10px;
    border: 2px solid #2a369ebe;
    box-shadow: 0px 0px 1px 1px #2a369ebe;
    cursor: pointer;
    display: flex;
    align-items: end;
    justify-content: end;
    background-color: #2a369e;
    overflow: hidden;
    transition: 0.5s;
  }

  .grid:hover {
    box-shadow: none;
    border: 2px solid #00ffff;
    transition: 0.3s;
  }

  .project {
    width: 100%;
    height: 100%;
  }

  .project img {
    width: 100%;
    height: 100%;
  }

  .view {
    position: absolute;
    font-weight: bolder;
    letter-spacing: 3px;
    font-size: 20px;
    padding: 10px;
    color: var(--color2);
    opacity: 0;
    transition: 0.3s;
  }

  .grid:hover .view {
    background-color: var(--color1);
    border: 1px solid #00ffff;
    border-radius: 10px 0 10px 0;
    opacity: 1;
  }

  @media (max-width: 1055px) {
    .grid {
      height: 15rem;
    }

    .active {
      border-color: aqua;
    }

    .active .view {
      background-color: rgba(127, 255, 212, 0.151);
      border-radius: 10px 0 10px 0;
      opacity: 1;
    }
  }

  @media (max-width: 420px) {
    .grid {
      margin: 0 10px;
    }
  }
`;

export default Container;
