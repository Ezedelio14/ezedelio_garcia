import styled from "styled-components";

const Container = styled.button`
  display: none;
  .menuBtn {
    border: none;
    background: none;
  }

  .menuBtn > div {
    margin: 3px 0;
    width: 20px;
    height: 3px;
    rotate: 360deg;
    background-color: var(--color1);
    transition: 0.7s;
  }

  .menuBtn.active {
    position: relative;
  }

  .menuBtn.active div:first-child {
    position: absolute;
    top: 0;
    rotate: 45deg;
  }

  .menuBtn.active div:nth-child(2) {
    opacity: 0;
  }

  .menuBtn.active div:last-child {
    position: absolute;
    top: 0;
    rotate: -45deg;
  }

  @media screen and (max-width: 675px) {
    display: block;
  }
`;

export default Container;
