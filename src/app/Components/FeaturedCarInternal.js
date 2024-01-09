import React from "react"
import { styled } from "styled-components"

export const Featuredimgbox = styled.div`
  border: 1px solid #dadfe9;
`
export const Featuredcarsimg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 220px;
  border-bottom: 1px solid #dadfe9;
`
export const Featuredmodelinfo = styled.div`
  padding:12px 7px;
  p {
    font-size: 12px;
    color: #8c92a0;
    text-transform: capitalize;
  }
`
export const Featuredmispan = styled.span`
  display: inline-block;
  margin:0 10px;
`
export const Featuredhpspan = styled.span`
  display: inline-block;
  margin-right: 10px;
`
const Featuredcarstxt = styled.div`
  margin:21px 0 47px;

  h2 a {
    font-size: 16px;
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 10px;
  }
  h3 p {
    font-size: 13px;
  }
`

export const FeaturedCarInternal = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="single-featured-cars">
        <Featuredimgbox>
        <Featuredcarsimg>
            <img src={props.data.imageURL} alt="cars" />
        </Featuredcarsimg>
        <Featuredmodelinfo>
          <p>
            {props.data.model}
            <Featuredmispan>{props.data.wheel}</Featuredmispan> 
            <Featuredhpspan>{props.data.engine}</Featuredhpspan>
            {props.data.type}
          </p>
        </Featuredmodelinfo>
        </Featuredimgbox>
        <Featuredcarstxt>
          <h2><a href="#">{props.data.name}</a></h2>
          <h3>{props.data.price}</h3>
          <p>
            {props.data.detail} 
          </p>
        </Featuredcarstxt>
      </div>
    </div>
  )
}
