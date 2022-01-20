import type { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";
import { COLORS, WEIGHTS } from "../src/constants";

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
          font-weight: ${WEIGHTS.normal};
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
        <TitleContainer>
          <MainTitle>Pop Pow</MainTitle>
          <Subheading>A memory flashcard app</Subheading>
        </TitleContainer>
        <CardContainer>
          <DeckTitle>English/Danish</DeckTitle>
          <Flashcard></Flashcard>
        </CardContainer>
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 56px);
  background-color: ${COLORS.gray[100]};
  margin: 3em 0 3em 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const MainTitle = styled.h1`
  color: ${COLORS.primary};
  font-size: 6vw;
  margin: 0.5em 0em 0em 0em;
`;

const Subheading = styled.h3`
  color: ${COLORS.gray[700]};
  font-size: 3vw;
  margin: 0em 0em 1.5em 0em;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.gray[100]};
  width: calc(100% - 56px);
  min-height: 20em;
  margin: 0 0 0.5em 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const DeckTitle = styled.h2`
  color: ${COLORS.gray[900]};
  font-size: 4vw;
  margin: 0em 0em 1.5em 0em;
`;

const Flashcard = styled.div``;
