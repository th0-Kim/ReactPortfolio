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
      <RowName>
        <RowFlex>
          <RowLeft>프로젝트명</RowLeft>
          <RowRight>
            {company} {name}
          </RowRight>
        </RowFlex>
      </RowName>
      <RowContentUl>
        <RowFlexLi>
          <RowLeft>사용 기술</RowLeft>
          <RowRight>
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
          </RowRight>
        </RowFlexLi>
        <RowFlexLi>
          <RowLeft>참여도</RowLeft>
          <RowRight>{rate}</RowRight>
        </RowFlexLi>
        <RowFlexLi>
          <RowLeft>유형</RowLeft>
          <RowRight>{kind}</RowRight>
        </RowFlexLi>
        <RowFlexLi>
          <RowLeft>기간</RowLeft>
          <RowRight>{period}</RowRight>
        </RowFlexLi>
      </RowContentUl>
    </RowContainer>
  );
};

const RowLeft = styled.strong`
  flex-shrink: 0;
  flex: 1;
  max-width: 80px;
  margin-right: 10px;
`;
const RowRight = styled.div`
  flex: 1;
`;
const RowFlex = styled.div`
  display: flex;
`;
const RowFlexLi = styled.li`
  display: flex;
  ${RowLeft} {
    color: var(--color_555555);
  }
`;

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
  margin-bottom: 8px;
  font-weight: normal;
  ${RowLeft} {
    color: rgba(var(--color_list_dim), 0.7);
  }
`;
const RowContentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const RowContainer = styled.div`
  position: relative;
  opacity: 0;
  bottom: -20px;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  word-break: keep-all;
  border: 1px solid var(--color_dddddd);
  background-color: var(--color_white);
  box-shadow: 0 4px 10px 0 var(--color_dddddd);
  box-sizing: border-box;
  &:last-child {
    border-bottom: none;
  }
  transition: all 0.5s;
  &.active {
    opacity: 1;
    bottom: 0;
  }
`;

export default HistoryRow;
