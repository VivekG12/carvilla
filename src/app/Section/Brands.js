import React from "react";
import { styled } from "styled-components";
import OwlCarousel from "react-owl-carousel";
import { BrandsInternal } from "../Components/BrandsInternal";

const Brand = styled.section`
  padding: 120px 0;
`
const Brandarea = styled.div`
  position: relative;
`

export const Brands = () => {
 
  const brandimage = [
    {
      brandimg:'/images/brand/br1.png'
    },
    {
      brandimg:'/images/brand/br2.png'
    },
    {
      brandimg:'/images/brand/br3.png'
    },
    {
      brandimg:'/images/brand/br4.png'
    },
    {
      brandimg:'/images/brand/br5.png'
    },
    {
      brandimg:'/images/brand/br6.png'
    },
  ]
  return (
    <Brand id="Brands">
      <div className="container">
        <Brandarea>
          <OwlCarousel items={6} loop nav margin={10}>
            {brandimage.map((i) => (<BrandsInternal key={i.brandimg} data={i}/>))}
          </OwlCarousel>
        </Brandarea>
      </div>
    </Brand>
  )
}