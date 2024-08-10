import React, { useRef, useEffect } from "react";
import styled from "styled-components";

//component
import SectionTitle from "components/SectionTitle";
import HistoryRow from "pages/home/component/HistoryRow";
import { handleScrollActive } from "modules/scrollActive";

//data
import { projectData } from "assets/data/projectList.js";

const Row = styled(HistoryRow)``;

const historyMap: JSX.Element[] = projectData
  .map((item, index) => (
    <Row
      key={index.toString()}
      className={`history-row`.trim()}
      company={item.company}
      period={item.period}
      name={item.name}
      skills={item.skills}
      kind={item.kind}
      rate={item.rate}
    />
  ))
  .filter((element): element is JSX.Element => element !== undefined);

const List = styled.div`
  @media screen and (max-width: 1400px) {
    padding: 0 20px;
  }
`;
const ProjectListContainer = styled.div``;

const ProjectList: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = document.querySelectorAll(
      ".history-row"
    ) as NodeListOf<HTMLElement>;

    rows.forEach((row, idx) => {
      setTimeout(() => {
        handleScrollActive(row, () => {
          row.classList.add("active");
        });
      }, 500);
    });
  }, []);

  return (
    <ProjectListContainer ref={listRef}>
      <SectionTitle className={``.trim()} title="전체 프로젝트" />
      <List>{historyMap}</List>
    </ProjectListContainer>
  );
};

export default ProjectList;
