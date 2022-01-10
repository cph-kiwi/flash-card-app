import Head from "next/head";
import type { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  min-height: 100%;
        }
body {
          box-sizing: border-box;
          background: #ffe6e6;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          font-weight: 200;
        }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Header>Welcome to Next.js!</Header>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  color: red;
`;
