import React from "react";//import './Owl.css';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { styled } from "styled-components"
import { NewCarInternal } from "../Components/NewCarInternal"

const Newcars = styled.section`
  background: #f8f9fb;
  padding:112px 0 120px;
`
const Newcarcontent = styled.div`
  padding-top:96px;
`
const Sectionheader = styled.div`
  position: relative;
  text-align: center;

  h2 {
    position: relative;
    font-size: 36px;
    font-weight: 500;
    padding-bottom: 35px;
    text-transform:capitalize;
  }
  h2:before {
    position: absolute;
    content: "";
    width: 80px;
    height: 2px;
    bottom: 0;
    left: 50%;
    margin-left: -42px;
    background: #4e4ffa;
  }
  p {
    color: #444a57;
    text-transform: capitalize;
    margin-bottom:10px;
    text-transform:capitalize;
  }
`
export const NewCar = () => {

  const newcarArr = [
    {
      heading:'Chevrolet Camaro ZA100 1',
      paragraph1:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      paragraph2:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      buttontxt:'View Details',
      imageURL:"/images/new-cars-model/ncm1.png"
    },
    {
      heading:'Chevrolet Camaro ZA100 2',
      paragraph1:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      paragraph2:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      buttontxt:'View Details',
      imageURL:"/images/new-cars-model/ncm2.png"
    },
    {
      heading:'Chevrolet Camaro ZA100 3',
      paragraph1:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      paragraph2:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      buttontxt:'View Details',
      imageURL:"/images/new-cars-model/ncm3.png"
    },
  ]
  return (
    <Newcars id="NewCar">
      <div className="container">
        <Sectionheader>
          <p>checkout <span>the</span> latest cars</p>
          <h2>newest cars</h2>
        </Sectionheader>
        <Newcarcontent>
          <OwlCarousel items={1} loop nav margin={8}>
            {newcarArr.map((i) => (<NewCarInternal key={i.heading} data={i} />))}
          </OwlCarousel>
        </Newcarcontent>
      </div>
    </Newcars>
  )
}

