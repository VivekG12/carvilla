import React from "react";
import { styled } from "styled-components";

const Brandss = styled.div`
  display: block;
  //width: 65%;
  //height:72px;
  border-radius:0;
`
const Item = styled.div`
  padding: 0 40px 0;
`
export const BrandsInternal = (props) => {
  return (
    <Item>
      <Brandss>
      <a href="#">
        <img src={props.data.brandimg} alt="brand-image" />
      </a>
      </Brandss>
    </Item>
  )
}