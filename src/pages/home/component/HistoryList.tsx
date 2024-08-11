import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

//component
import SectionTitle from "components/SectionTitle";
import TabButton from "components/TabButton";
import HistoryRow from "pages/home/component/HistoryRow";
import { handleScrollActive } from "modules/scrollActive";

//data
import { projectData } from "assets/data/projectList.js";

const ProjectList: React.FC = () => {
  const tabRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const selectedData = projectData.filter((item) => item.year === selectedYear);
  const handleTabClick = (year: string) => {
    setSelectedYear(year);
  };
  // list fade Effect
  const tabInnerScroll = (items: HTMLElement | null) => {
    if (items) {
      const rows = Array.from(items.children) as HTMLElement[];

      rows.forEach((row, idx) => {
        // reset active class
        row.classList.remove("active");

        // set active class
        const delay = 500;
        setTimeout(() => {
          handleScrollActive(row, () => {
            row.classList.add("active");
          });
        }, delay);

        // row click after scroll event
        const handleClick = () => {
          if (listRef.current) {
            tabInnerScroll(listRef.current);
          }
        };
        if (listRef.current) {
          row.addEventListener("click", handleClick);
          return () => {
            row.removeEventListener("click", handleClick);
          };
        }
      });
    }
  };

  useEffect(() => {
    // load fade Effect
    tabInnerScroll(listRef.current);

    if (tabRef.current && listRef.current) {
      // load fade Effect
      handleScrollActive(tabRef.current, () => {
        tabRef.current!.style.opacity = "1";
      });
      // tab button click event
      const rows = Array.from(tabRef.current.children) as HTMLElement[];
      const tabButtonClick = (row: HTMLElement, rows: HTMLElement[]) => {
        rows.forEach((r) => r.classList.remove("on"));
        row.classList.add("on");
        // tab button click after fade Effect
        setTimeout(() => {
          tabInnerScroll(listRef.current);
        }, 0);
      };

      // tab button click event
      rows.forEach((row, idx) => {
        const handleClick = () => tabButtonClick(row, rows);
        row.addEventListener("click", handleClick);
        return () => {
          row.removeEventListener("click", handleClick);
        };
      });
    }
  }, [tabRef.current, listRef.current]);

  return (
    <ProjectListContainer>
      <SectionTitle className={``.trim()} title="전체 프로젝트" />
      <SectionTab ref={tabRef}>
        <Tab
          className={selectedYear === "all" ? "on" : ""}
          tabTitle="전체"
          clickEvent={() => {
            handleTabClick("all");
          }}
        />
        {tabButtons.map((tab, idx) => (
          <Tab
            key={idx.toString()}
            className={selectedYear === tab.year.toString() ? "on" : ""}
            tabTitle={tab.year.toString()}
            clickEvent={() => {
              handleTabClick(tab.year.toString());
            }}
          />
        ))}
      </SectionTab>
      <List ref={listRef}>
        {selectedYear !== "all"
          ? selectedData
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
              .filter(
                (element): element is JSX.Element => element !== undefined
              )
          : projectData
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
              .filter(
                (element): element is JSX.Element => element !== undefined
              )}
      </List>
    </ProjectListContainer>
  );
};
const Tab = styled(TabButton)``;
const SectionTab = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 50px;
  transition: opacity 1s;
  ${Tab} {
    flex-shrink: 0;
  }
  @media screen and (max-width: 1024px) {
    overflow-x: auto;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Row = styled(HistoryRow)``;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  ${Row} {
    width: 100%;
  }
  @media screen and (max-width: 1400px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 1024px) {
    ${Row} {
      width: calc(50% - 14px);
    }
  }
`;
const ProjectListContainer = styled.div``;

const tabButtons = [
  { year: 2024 },
  { year: 2023 },
  { year: 2022 },
  { year: 2021 },
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
];

export default ProjectList;
