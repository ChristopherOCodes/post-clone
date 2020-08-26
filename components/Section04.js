import React from "react";
import { css } from "emotion";
import {
  Section04,
  Section04Shrink01,
  Section04Shrink02,
  Section04Content,
  Section04ContentInfo,
  Section04OrderBtn
} from "./styles.js";

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
                <span></span>
              </Section04OrderBtn>
            </Section04ContentInfo>
            <ul></ul>
          </Section04Content>
        </Section04Shrink02>
      </Section04Shrink01>
    </Section04>
  );
};
