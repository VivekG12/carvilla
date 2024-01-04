import React from "react"
import { styled } from "styled-components"

const Scrollimg = styled.div`
  height: 60px !important;
  width:10% !important;
`
const Newcartxt = styled.div`
  margin-left: 29px;
  margin-bottom: 30px;
`
const Newcartxth2 = styled.h2`
  font-size:  30px;
  font-weight:  500;
  margin-bottom: 26px;
`
const Newcarspara2 = styled.p`
  margin-top: 30px;
`
const Welcomebutton = styled.button`
  width: 176px;
  margin-top: 32px;
`

export const NewCarInternal = (props) => {
  return (
    <div className="new-cars-item">
      <div className="single-new-cars-item">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="new-cars-img">
              <Scrollimg><img src={props.data.imageURL} alt=""/></Scrollimg>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <Newcartxt>
              <Newcartxth2><a href="#">{props.data.heading}</a></Newcartxth2>
              <p>
                {props.data.paragraph1}
              </p>
              <Newcarspara2>
                {props.data.paragraph2}
              </Newcarspara2>
              <Welcomebutton>
                {props.data.buttontxt}
              </Welcomebutton>
            </Newcartxt>
          </div>
        </div>
      </div>
    </div>
  )
}
   