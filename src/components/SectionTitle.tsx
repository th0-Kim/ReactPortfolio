import styled from "styled-components";

interface Props {
  className: string;
  title: string;
}
const SectionTitle: React.FC<Props> = ({ className, title }) => {
  return <SectionTitleBox className={className}>{title}</SectionTitleBox>;
};

const SectionTitleBox = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 1400px) {
    padding: 0 20px;
  }
`;

export default SectionTitle;
