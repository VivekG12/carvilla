import React from "react"
import OwlCarousel from "react-owl-carousel"
import { styled } from "styled-components"
import { ClientsInternal } from "../Components/ClientsInternal"

const Clientssay = styled.section`
  padding:115px 0 80px;
  background: #f8f9fb;
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
`
export const Clients = () => {

  const car = [
    {
      clientimage:"/images/clients/c1.png",
      comment:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.',
      name:'Tomas lili',
      address:'New York',
    },
    {
      clientimage:"/images/clients/c2.png",
      comment:'Seduced ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.',
      name:'Romy Rain',
      address:'London',
    },
    {
      clientimage:"/images/clients/c3.png",
      comment:'Sed ultimate pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.',
      name:'John Doe',
      address:'Washington',
    },
  ]
  return (
    <Clientssay>
      <div className="container">
        <Sectionheader>
          <h2>what our clients say</h2>
        </Sectionheader>
        <div className="row">
          <OwlCarousel loop nav margin={10}>
            {car.map((i) => (<ClientsInternal key={i.name} data={i}/>))}
          </OwlCarousel>
        </div>
      </div>
    </Clientssay>
  )
}
  