import type { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

html {
  min-height: 100%;
        }

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
          background: black;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          font-weight: 200;
        }

        img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

`;

const Home: NextPage = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header>Welcome to Next.js!</Header>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1``;
