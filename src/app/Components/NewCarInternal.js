import React from "react"
import { styled } from "styled-components"

const Scrollimg = styled.div`
  height: 60px;
  width:80%;
`
const Newcartxt = styled.div`
  margin-left: 29px;
  margin-bottom: 30px;

  h2 a {
    font-size:  30px;
    font-weight:  500;
    margin-bottom: 26px;
  }
`
const Newcarspara2 = styled.p`
  margin-top: 30px;
`
const Welcomebutton = styled.div`
  width: 176px;
  margin-top: 32px;
  button {
    display: inline-block;
    width: 230px;
    height: 60px;
    background: #4e4ffa;
    color: #fff;
    border-radius: 3px;
    margin-top: 55px;
    -webkit-transition: .3s linear; 
    -moz-transition:.3s linear; 
    -ms-transition:.3s linear; 
    -o-transition:.3s linear;
    transition: .3s linear;
  }
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
              <h2><a href="#">{props.data.heading}</a></h2>
              <p>
                {props.data.paragraph1}
              </p>
              <Newcarspara2>
                {props.data.paragraph2}
              </Newcarspara2>
              <Welcomebutton>
                <button>
                  {props.data.buttontxt}
                </button>
              </Welcomebutton>
            </Newcartxt>
          </div>
        </div>
      </div>
    </div>
  )
}
   