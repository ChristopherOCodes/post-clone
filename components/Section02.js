import React from "react";
import { css } from "emotion";
import {
  Section02,
  Section02Shrink,
  Section02Shrink02,
  Section02Shrink03,
  Section02Content,
  Section02ContentInfo,
  Section02Btn,
  Section02ContentImageContainer,
  Section02ContentImage
} from "./styles.js";

export const Section02Comp = (props) => {
  return (
    <Section02>
      <Section02Shrink>
        <Section02Shrink02>
          <Section02Shrink03>
            <Section02Content>
              <Section02ContentInfo>
                <h2
                  className={css`
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size: 32px;
                    font-weight: 600;
                    letter-spacing: -2.2;
                    text-align: center;
                    color: black;
                    width: 100%;
                  `}
                >
                  <span>Save big on every order. Join Unlimited.</span>
                </h2>
                <p
                  className={css`
                    font-size: 16px;
                    letter-spacing: 0.14px;
                    font-weight: 400;
                    line-height: normal;
                    margin-bottom: 23px;
                    margin-top: 8px;
                    line-height: 26px;
                    color: #8f95a3;
                    text-align: center;
                    display: block;
                  `}
                >
                  <span>
                    Unlimited free deliveries. Reduced fees on eligible orders.
                    Exclusive deals. Try Postmates Unlimited now for free,
                    cancel anytime.
                  </span>
                </p>
                <a
                  href="null"
                  className={css`
                    color: inherit;
                    text-decoration: none;
                    background-color: transparent;
                  `}
                >
                  <Section02Btn>
                    <span>Try Unlimited Free</span>
                  </Section02Btn>
                </a>
              </Section02ContentInfo>
              <Section02ContentImageContainer>
                <Section02ContentImage>
                  <img
                    alt=""
                    src="https://png2.cleanpng.com/sh/d670623072024ced0789e26a7f5fdaf4/L0KzQYm3U8I2N5ttiZH0aYP2gLBuTfhidZN6itlucj3meLbskBVjfaNsfeQ2ZnH2hH7tjB9lNZN3fdN0ZnH2hH76gf5lf5poRdRAcnfogn68gfI5OWhnfaQ7Zke3QXA8VMMyO2U7UKMAMkKzQYW4VMIyPGQ3RuJ3Zx==/kisspng-hamburger-cheeseburger-fast-food-breakfast-sandwic-burger-5ab817be22f741.5431346815220141421432.png"
                    className={css`
                      height: 85%;
                      padding-left: 185px;
                    `}
                  />
                </Section02ContentImage>
              </Section02ContentImageContainer>
            </Section02Content>
          </Section02Shrink03>
        </Section02Shrink02>
      </Section02Shrink>
    </Section02>
  );
};
