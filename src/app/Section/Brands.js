import React from "react";
import { styled } from "styled-components";
import OwlCarousel from "react-owl-carousel";

const Brand = styled.section`
  padding: 120px 0;
`

export const Brands = () => {
  return (
    <Brand>
      <div className="container">
        <div className="brand-area">
          <OwlCarousel>
            <div className="item">
              <a href="#">
                <img src="/images/brand/br1.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="/images/brand/br2.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="/images/brand/br3.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="/images/brand/br4.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="/images/brand/br5.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="/images/brand/br6.png" alt="brand-image" />
              </a>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </Brand>
  )
}