import React from "react";
import styled from "styled-components";

import DropDown from "components/DropDown";

const SampleDropDown: React.FC = () => {
  return (
    <DropDownContainer>
      <DropDown
        buttonTitle="-"
        listData={itemOptions1}
        label={"길이 선택"}
        disabled={false}
      />
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div``;

const itemOptions1 = [
  {
    title: "130~150cm",
  },
  {
    title: "150~180cm",
  },
  {
    title: "180~210cm",
  },
];

export default SampleDropDown;
