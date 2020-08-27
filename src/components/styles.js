import styled from "@emotion/styled";

export const Container = styled.div``;

export const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: white;
  text-rendering: optimizeLegibility;
  z-index: 99999;
`;

export const Navbar = styled.div`
  left: 0;
  right: 0;
  background-color: #ffdf18;
  display: flex;
  margin: 0 auto;
  min-height: 72px;
  position: relative;
  width: 100%;
`;

export const NavbarBrand = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  width: auto;
`;

export const NavBtnContainer = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
  width: auto;
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size: 12px;
  letter-spacing: 0.85;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  border: 1px solid rgba(0, 0, 0, 0.27);
  color: black;
  background-color: ${(props) => (props.altColor ? props.altColor : "")};
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  margin-right: 10px;
  padding-left: 0;
  padding-right: 0;
`;

export const LoginBtn = styled.a`
  display: block;
  width: 100%;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 32px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  background-color: transparent;
`;

export const SignupBtn = styled.a`
  display: block;
  width: 100%;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 32px;
  text-align: center;
  color: #ffdf18;
  text-decoration: none;
  background-color: transparent;
`;

export const Page = styled.div`
  position: relative;
`;

export const Section01 = styled.div`
  height: 530px;
  padding: 0px 16px 0px 16px;
  background-color: #ffdf18;
  z-index: 1;
`;

export const Section01Shrink = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column-reverse;
  padding-top: 60px;
  position: relative;
  text-align: center;
`;

export const Section01Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`;

export const AddressContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 52px;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  box-shadow: 15px 8px 15px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  z-index: 1;
`;

export const AddressDeliveryOptions = styled.div`
  background-color: transparent;
  box-shadow: rgba(16, 25, 30, 0.08) 0px 6px 4px 0px;
  position: absolute;
  transform: translate(calc(-50% + 225px), 100%);
  width: 100%;
  max-width: 450px;
  bottom: 0px;
  border-radius: 16px;
  opacity: 1;
  border-top: none;
  z-index: 1;
`;

export const DeliverySelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 62px;
  z-index: 1;
`;

export const DeliveryOptionBtn = styled.button`
  display: flex;
  appearance: none;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  color: black;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  height: 100%;
  padding: 0px;
  margin: 0px;
  border-style: none;
  border-radius: 8px;
  border-bottom: 2px solid rgba(2, 220, 224, 0.8);
  flex: 1 1 0%;
  z-index: 1;
`;

export const Section01BackgroundContainer = styled.div`
  height: 528px;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const Section01Background01 = styled.div`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 0;
`;

export const Section01Trans = styled.div`
  background: rgb(255, 223, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 223, 24, 1) 0%,
    rgba(255, 240, 0, 1) 22%,
    rgba(255, 255, 255, 1) 68%
  );
  height: 200px;
`;

export const Section02 = styled.div`
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: content-box;
`;

export const Section02Shrink = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  background-color: #fff;
  padding-bottom: 16px;
`;

export const Section02Shrink02 = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const Section02Shrink03 = styled.div`
  padding: 25px 0 40px 0;
`;

export const Section02Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Section02ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Section02Btn = styled.button`
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  outline: none;
  font-size: 12px;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  border-radius: 28px;
  background-color: #00cc99;
  color: white;
  align-items: center;
  width: 265px;
  height: 48px;
`;

export const Section02ContentImageContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: calc(100% + 32px);
  overflow: hidden;
`;

export const Section02ContentImage = styled.div`
  position: absolute;
  background-size: cover;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const Section03 = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  background-color: #fff;
  padding-bottom: 16px;
`;

export const Section03Shrink01 = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const Section03Shrink02 = styled.div`
  padding: 60px 0 20px;
`;

export const Section03Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Section03ContentInfo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section03ContentInfoShrink = styled.div`
  width: calc(100% - 10px);
  padding-top: 28px;
  display: flex;
  align-items: center;
`;

export const Section03ContentImageContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: calc(100% - 40px);
  overflow: hidden;
`;

export const Section03ContentImage = styled.div``;

export const Section04 = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  background-color: #fff;
  padding-bottom: 0;
`;

export const Section04Shrink01 = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const Section04Shrink02 = styled.div`
  padding: 60px 0;
`;

export const Section04Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Section04ContentInfo = styled.div`
  width: 100%;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section04OrderBtn = styled.button`
  width: 165px;
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  outline: none;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  border-radius: 28px;
  background-color: #00cc99;
  color: white;
  justify-content: center;
  align-items: center;
  height: 48px;
`;

export const Section04CatSelection = styled.ul`
  display: flex;
  padding-right: 16px;
  padding-right: 16px;
`;

export const Section04Cat = styled.li`
  flex: 0 0 33.333333%;
  padding: 6px;
  width: 114px;
  & > a {
    background-color: gray;
    border-radius: 12px;
    display: block;
    padding: 8px;
    color: inherit;
    text-decoration: none;
  }
`;

export const Footer = styled.div`
  background-color: #000;
  color: #fff;
  padding-top: 60px;
`;

export const FooterColumnContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: content-box;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid rgba(151, 151, 151, 0.21);
  padding-left: 25%;
`;

export const FooterGridColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: white;
`;
export const FooterGridItem = styled.li`
  color: White;
  & > a {
    font-size: 14px;
    line-height: 24px;
    padding: 18px 0 0;
    text-decoration: none;
    color: white;
    display: list-item;
  }
`;
