import React from "react";
import { styled } from "styled-components";

const Singleserviceitem = styled.div`
  text-align: center;
  padding:55px 30px 60px;
  border-radius: 3px;
  margin-bottom: 30px;
  border: 1px solid #dadfe9;
  -webkit-transition: .3s linear; 
  -moz-transition:.3s linear; 
  -ms-transition:.3s linear; 
  -o-transition:.3s linear;
  transition: .3s linear;
  h2 {
    margin: 0;
    color: #444a57;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
  }
  h2 a {
    font-size:20px;
    margin: 35px 0 20px;
  }
`

const Singleserviceicon = styled.div`
  display: inline-block;
  color: #50616c;
`
const Singleserviceitemp = styled.p`
  padding-bottom:35px;
  text-transform: initial;
  position: relative;
&:before {
  position: absolute;
  content: "";
  width: 20px;
  height: 3px;
  background: #3030ea;
  bottom: 0;
  left: 50%;
  margin-left: -10px;
}
`

export const ServiceCard = (props) => {
  return(
    <div className="col-md-4 col-sm-6">
      <Singleserviceitem>
        <Singleserviceicon>
          <i className="flaticon-car"></i>
        </Singleserviceicon>
        <h2><a href="#">{props.data.heading}</a></h2>
        <Singleserviceitemp>
          {props.data.content}
        </Singleserviceitemp>
      </Singleserviceitem>
    </div>
  );
}