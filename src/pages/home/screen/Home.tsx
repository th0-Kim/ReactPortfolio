import React from "react";
import styled from "styled-components";

import Header from "components/Header";
import Footer from "components/Footer";
import ProjectList from "pages/home/component/ProjectList";
import HistoryList from "pages/home/component/HistoryList";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1380px;
  gap: 100px;
  margin: 100px auto 160px;
`;
const HomeContainer = styled.div``;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Main>
        <ProjectList />
        <HistoryList />
      </Main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
