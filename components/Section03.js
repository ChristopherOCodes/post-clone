import React from "react";
import { css } from "emotion";
import {
  Section03,
  Section03Shrink01,
  Section03Shrink02,
  Section03Content,
  Section03ContentInfo,
  Section03ContentInfoShrink,
  Section03ContentImageContainer,
  Section02ContentImage
} from "./styles.js";

export const Section03Comp = (props) => {
  return (
    <Section03>
      <Section03Shrink01>
        <Section03Shrink02>
          <Section03Content>
            <Section03ContentInfo>
              <Section03ContentInfoShrink>
                <h2
                  className={css`
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size: 32px;
                    letter-spacing: -2.2px;
                    text-align: center;
                    color: #000;
                    width: calc(100% - 10px);
                    display: block;
                    margin-block-start: 0.83em;
                    margin-block-end: 0.83em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                  `}
                  href="null"
                >
                  <span>Order from local favorites near you.</span>
                </h2>
                <p
                  className={css`
                    font-size: 16px;
                    letter-spacing: 0.14px;
                    font-weight: 400;
                    line-height: normal;
                    margin-bottom: 20px;
                    margin-top: 8px;
                    line-height: 26px;
                    color: #8f95a3;
                    text-align: center;
                    display: block;
                  `}
                >
                  <span>
                    Whatever you want, we get it. Order delivery for yourself or
                    with friends and watch in real-time as your Postmate brings
                    you all the things you love.
                  </span>
                </p>
              </Section03ContentInfoShrink>
            </Section03ContentInfo>
            <Section03ContentImageContainer>
              <Section02ContentImage />
            </Section03ContentImageContainer>
          </Section03Content>
        </Section03Shrink02>
      </Section03Shrink01>
    </Section03>
  );
};
