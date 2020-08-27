import React from "react";
import { css } from "emotion";
import {
  Section04,
  Section04Shrink01,
  Section04Shrink02,
  Section04Content,
  Section04ContentInfo,
  Section04OrderBtn,
  Section04CatSelection
} from "../styles.js";

const Cetegory = (props) => {
  return (
    <li
      className={css`
        list-style-type: none;
        padding: 20px;
        width: 100px;
      `}
    >
      <a
        href={props.link}
        className={css`
          background-color: #f7f7f8;
          border-radius: 12px;
          display: block;
          padding: 8px;
          height: 80px;
          color: inherit;
          text-decoration: none;
          text-align: center;
        `}
      >
        <span>{props.cat}</span>
      </a>
    </li>
  );
};

export const Section04Comp = (props) => {
  return (
    <Section04>
      <Section04Shrink01>
        <Section04Shrink02>
          <Section04Content>
            <Section04ContentInfo>
              <h2
                className={css`
                  letter-spacing: -2.2px;
                  text-align: center;
                  color: #000;
                  width: 100%;
                  line-height: 40px;
                  font-weight: 600;
                  font-size: 32px;
                `}
              >
                <span>We deliver more than dinner.</span>
              </h2>
              <p
                className={css`
                  margin-bottom: 23px;
                  margin-top: 8px;
                  line-height: 26px;
                  color: #8f95a3;
                  text-align: center;
                  letter-spacing: 0.14px;
                  font-weight: 400;
                  font-size: 16px;
                `}
              >
                <span>
                  Need another charger? Kitchen staples? Party supplies? We’ve
                  got everything you need available for delivery within an hour.
                </span>
              </p>
              <Section04OrderBtn>
                <span>Order Now</span>
              </Section04OrderBtn>
            </Section04ContentInfo>
            <Section04CatSelection>
              <Cetegory link="null" cat="Electronics" />
              <Cetegory link="null" cat="Pet Supplies" />
              <Cetegory link="null" cat="Drug Store" />
              <Cetegory link="null" cat="Grocery Store" />
              <Cetegory link="null" cat="Alchol" />
              <Cetegory link="null" cat="Specialty Store" />
            </Section04CatSelection>
          </Section04Content>
        </Section04Shrink02>
      </Section04Shrink01>
    </Section04>
  );
};
