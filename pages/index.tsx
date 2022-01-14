import type { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";

const GlobalStyles = createGlobalStyle`

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html, body, #__next {
  height: 100%;
}

html {
  min-height: 100%;
        }

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
          background: #6868AC;
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

p, h1, h2, h3, h4, h5, h6, li, dl, dt, blockquote {
  overflow-wrap: break-word;
  hyphens: auto;
}

#root, #__next {
  isolation: isolate;
}

`;

const Home: NextPage = () => {
  return (
    <Container>
      <GlobalStyles />

      <Header />
      <MainContainer>
        <MainTitle>Pop Pow</MainTitle>
        <Subheading>A memory flashcard app</Subheading>
        <Card>{}</Card>
      </MainContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 6vw;
  /*
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  */
  margin: 1em 0em 0.5em 0em;
`;

const Subheading = styled.h3`
  color: white;
  font-size: 3vw;
  /*
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  */
  margin: 0em 0em 1em 0em;
`;

const Card = styled.div`
  background: white;
  width: 20em;
  height: 15em;
  margin: 0em 0em 0.5em 0em;
`;
