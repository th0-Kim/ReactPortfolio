import React from "react";
import styled from "styled-components";

interface Skill {
  color: string;
  skillName: string[];
}

interface Props {
  className: string;
  company: string;
  period: string;
  name: string;
  skills: Skill[];
  kind: string;
  rate: string;
}

const HistoryRow: React.FC<Props> = ({
  className,
  company,
  period,
  name,
  skills,
  kind,
  rate,
}) => {
  return (
    <RowContainer className={className}>
      <RowLeft>
        <RowPeriod>{period}</RowPeriod>
      </RowLeft>
      <RowRight>
        <RowName>
          <strong>프로젝트명: </strong>
          {company} {name}
        </RowName>
        <RowContent>
          <li>
            <strong>사용 기술: </strong>
            <SkillBox>
              {skills.map((skill, skillIndex) =>
                skill.skillName.map((name, nameIndex) => (
                  <span
                    className={skill.color}
                    key={`${skillIndex}-${nameIndex}`}
                  >
                    {name}
                  </span>
                ))
              )}
            </SkillBox>
          </li>
          <li>
            <strong>참여도: </strong>
            {rate}
          </li>
          <li>
            <strong>유형: </strong>
            {kind}
          </li>
        </RowContent>
      </RowRight>
    </RowContainer>
  );
};

const SkillBox = styled.div`
  display: inline-block;
  & > span {
    &:after {
      content: ", ";
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;
const RowName = styled.strong`
  display: block;
  margin-bottom: 10px;
  font-weight: normal;
`;
const RowPeriod = styled.span`
  margin-right: 10px;
`;
const RowContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > li {
  }
`;
const RowLeft = styled.div`
  @media screen and (min-width: 1024px) {
    flex-shrink: 0;
    width: 200px;
  }
`;
const RowRight = styled.div`
  @media screen and (min-width: 1024px) {
    flex: 1;
  }
`;
const RowContainer = styled.div`
  position: relative;
  opacity: 0;
  bottom: -20px;
  padding: 20px 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  word-break: keep-all;
  border-bottom: 1px solid var(--color_dddddd);
  &:last-child {
    border-bottom: none;
  }
  transition: all 0.5s;
  &.active {
    opacity: 1;
    bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default HistoryRow;
