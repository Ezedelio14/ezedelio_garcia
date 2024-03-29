import styled from "styled-components";

const Container = styled.div`
  .nav {
    color: red;
    display: flex;
  }

  .nav a {
    color: var(--color1);
    padding-left: 10px;
    letter-spacing: 2px;
    transition: 0.2s;
    font-weight: bold;
  }

  .nav a:hover {
    color: #0d9b9bb9;
  }

  .resume {
    padding: 2vh;
    color: var(--color1);
    border-radius: 10px;
    background-color: #1dc8e657;
    border: 2px solid var(--color1);
    font-size: 21px;
    font-family: "Play", sans-serif;
    transition: 0.5s;
  }

  .resume:hover {
    color: var(--color0);
    background-color: var(--color1);
    transition: 0.5s;
  }

  @media screen and (max-width: 675px) {
    .nav {
      width: 100vw;
      height: 95vh;
      position: absolute;
      top: 10vh;
      right: -100vw;
      flex-direction: column;
      align-items: center;
      background-color: var(--color1);
      background-image: url(../assets/img/background.png);
      background-repeat: no-repeat;
      background-position: center;
      transition: 0.5s;
    }

    .nav.active {
      right: 0;
    }

    .nav a {
      color: var(--color0);
      padding-left: 0px;
      margin-top: 3rem;
    }

    .resume {
      padding: 20px 40px;
      color: var(--color2);
      background-color: #1dc8e657;
      border: 3px solid var(--color2);
    }
  }
`;

export default Container;
