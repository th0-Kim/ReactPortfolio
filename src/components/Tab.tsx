import styled from "styled-components";

interface Tab {
  name: string;
}

interface Props {
  tabList: Tab[];
}

const Tab: React.FC<Props> = ({ tabList }) => {
  return (
    <TabContainer>
      {tabList.map((tabButton, index) => (
        <TabButton key={index.toString()}>{tabButton.name}</TabButton>
      ))}
    </TabContainer>
  );
};

const TabButton = styled.button``;
const TabContainer = styled.div``;

export default Tab;
