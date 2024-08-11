import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>PORTFOLIO · WEB UI Developer</div>
      <div>2024 · Made by React</div>
      <ButtonTop
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        go to top
      </ButtonTop>
    </FooterContainer>
  );
};

const ButtonTop = styled.button`
  opacity: 0.6;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: var(--color_white);
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`;
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  height: 43vh;
  height: 43dvh;
  background-color: rgba(var(--main_footer), 0.8);
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  word-break: keep-all;
  color: var(--color_white);
  text-align: center;
`;

export default Footer;
