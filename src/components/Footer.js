import React from "react";
import { css } from "emotion";
import {
  Footer,
  FooterColumnContainer,
  FooterColumns,
  Container,
  FooterGridItem,
  FooterGridColumn
} from "./styles.js";

const ListItem = (props) => {
  return (
    <FooterGridItem>
      <a href={props.link}>
        <span>{props.item}</span>
      </a>
    </FooterGridItem>
  );
};

export const FooterComp = (props) => {
  return (
    <Footer>
      <FooterColumnContainer>
        <FooterColumns>
          <FooterGridColumn>
            <Container>
              <h4
                className={css`
                  margin: 0;
                  padding-left: 18px;
                `}
              >
                <span>Post-Clone</span>
              </h4>
              <ul
                className={css`
                  margin-bottom: 41px;
                  list-style-type: none;
                `}
              >
                <ListItem link="null" item="About" />
                <ListItem link="null" item="Careers" />
                <ListItem link="null" item="Blog" />
                <ListItem link="null" item="Media & Press" />
                <ListItem link="null" item="Developers" />
                <ListItem link="null" item="API Docs" />
                <ListItem link="null" item="Civic Labs" />
                <ListItem link="null" item="Unlimited" />
                <ListItem link="null" item="Gift Cards" />
                <ListItem link="null" item="Pick Up" />
                <ListItem link="null" item="Party" />
                <ListItem link="null" item="Party at work" />
              </ul>
            </Container>
          </FooterGridColumn>
          <FooterGridColumn>
            <Container>
              <h4
                className={css`
                  margin: 0;
                  padding-left: 18px;
                `}
              >
                <span>Merchants</span>
              </h4>
              <ul
                className={css`
                  margin-bottom: 41px;
                  list-style-type: none;
                `}
              >
                <ListItem link="nuil" item="Sell on PostClone" />
                <ListItem link="nuil" item="Restaurants" />
              </ul>
            </Container>
            <Container>
              <h4
                className={css`
                  margin: 0;
                  padding-left: 18px;
                `}
              >
                <span>Fleet</span>
              </h4>
              <ul
                className={css`
                  margin-bottom: 41px;
                  list-style-type: none;
                `}
              >
                <ListItem link="null" item="Joing the Fleet" />
              </ul>
            </Container>
            <Container>
              <h4
                className={css`
                  margin: 0;
                  padding-left: 18px;
                `}
              >
                <span>Support</span>
              </h4>
              <ul
                className={css`
                  margin-bottom: 41px;
                  list-style-type: none;
                `}
              >
                <ListItem link="null" item="Customer help" />
                <ListItem link="null" item="Fleet help" />
                <ListItem link="null" item="Merchant help" />
              </ul>
            </Container>
          </FooterGridColumn>
        </FooterColumns>
      </FooterColumnContainer>
    </Footer>
  );
};
