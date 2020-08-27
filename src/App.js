import React from "react";
import {
  AppContainer,
  NavbarComp,
  Page,
  Section01Comp,
  Section01Trans,
  Section02Comp,
  Section03Comp,
  Section04Comp,
  FooterComp
} from "./components";

export default function App() {
  return (
    <AppContainer>
      <NavbarComp />
      <Page>
        <Section01Comp />
        <Section01Trans />
        <Section02Comp />
        <Section03Comp />
        <Section04Comp />
      </Page>
      <FooterComp />
    </AppContainer>
  );
}
