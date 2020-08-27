import React from "react";
import { css } from "emotion";
import {
  Section01,
  Section01Shrink,
  Section01Content,
  AddressContainer,
  AddressDeliveryOptions,
  DeliverySelection,
  DeliveryOptionBtn,
  Section01BackgroundContainer,
  Section01Background01
} from "../styles.js";

export const Section01Comp = (props) => {
  return (
    <Section01>
      <Section01Shrink>
        <Section01Content>
          <h1
            className={css`
              margin-top: 0;
              margin-bottom: 10px;
              letter-spacing: -1.5px;
              line-height: 50px;
              display: block;
            `}
          >
            <span>You want it. We get it.</span>
          </h1>

          <h2
            className={css`
              margin-top: 0;
              margin-bottom: 0;
              font-size: 18px;
              letter-spacing: initial;
              font-weight: 400;
              line-height: normal;
              color: black;
              margin: 0;
              text-align: center;
              padding-bottom: 26px;
              display: block;
            `}
          >
            <span>
              Food, drinks, groceries, and more available for delivery and
              pickup.
            </span>
          </h2>

          <AddressContainer>
            <AddressDeliveryOptions>
              <DeliverySelection>
                <DeliveryOptionBtn>
                  <span>Delivery</span>
                </DeliveryOptionBtn>
                <DeliveryOptionBtn>
                  <span>Pick Up</span>
                </DeliveryOptionBtn>
              </DeliverySelection>
            </AddressDeliveryOptions>
          </AddressContainer>
          <Section01BackgroundContainer>
            <Section01Background01>
              <img
                alt=""
                src="https://png2.cleanpng.com/sh/f0aed218b8838c15f9513ac448e0d419/L0KzQYm3VMI3N5pqfZH0aYP2gLBuTgJia5pzf59raXP8c73sTgNqdJl0jdd9dHWwfbF8jwRicZ8yett0ZT24cba4hvI6PGo8Sak8Nz60RIeAVMU6O2I6SqYCNUm3RIW9Ucg6NqFzf3==/kisspng-racing-bicycle-silhouette-mountain-bike-5ae1fb94971737.1467459315247594446189.png"
                className={css`
                  height: 50%;
                  padding-top: 258px;
                  padding-left: 320px;
                `}
              />
            </Section01Background01>
          </Section01BackgroundContainer>
        </Section01Content>
      </Section01Shrink>
    </Section01>
  );
};
