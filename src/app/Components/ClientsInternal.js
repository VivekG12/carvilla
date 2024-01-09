import React from "react";
import { styled } from "styled-components";

const Testimonialimg = styled.div`
  margin-right: 5px;
  border-radius:50%;
  -webkit-transition: .3s; 
  -moz-transition:.3s; 
  -ms-transition:.3s; 
  -o-transition:.3s;
  transition: .3s;
  img {
    width: 90px !important;
    margin-left: 100px;
  }
`
const Testimonialperson = styled.div`
  h2 a {
    font-size: 16px;
    color: #5e6778;
    font-weight: 600;
  }
  h4 {
    font-size: 16px;
    color: #5e6778;
    font-weight: 600;
    margin-top: 10px;
  }
`
const Singletestbox = styled.div`
  padding: 50px 30px 57px;
    text-align: center;
    border: 1px solid #dadfe9;
    overflow-x: hidden;
    -webkit-transition: .3s; 
    -moz-transition:.3s; 
    -ms-transition:.3s; 
    -o-transition:.3s;
    transition: .3s;
    width:350px;
    margin-left: 30px;
    margin-top: 50px;
  &:hover{
    background: #4e4ffa;
    border: 1px solid #4e4ffa;
    box-shadow: 0 12px 30px 0px rgba(0,1,193,.2);
    h2 a, h4, p {
      color:#fff;
    }
  }
`
const Singletestcomment = styled.div`
p {
  font-size: 16px;
  color: #5e6778;
  margin-top: 30px;
  margin-bottom: 25px;
}
`
export const ClientsInternal = (props) => {
  return (
    <div className="col-sm-3 col-xs-12">
      <Singletestbox>
        <div className="testimonial-description">
          <div className="testimonial-info">
            <Testimonialimg>  
              <img src={props.data.clientimage} alt="client picture"/>
            </Testimonialimg>
          </div>
          <Singletestcomment>
            <p>
              {props.data.comment}
            </p>
          </Singletestcomment>
          <Testimonialperson>
            <h2><a href="#">{props.data.name}</a></h2>
            <h4>{props.data.address}</h4>
          </Testimonialperson>
        </div>
      </Singletestbox>
    </div>
  )
}
