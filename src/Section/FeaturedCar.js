import React from "react"
import { styled } from "styled-components"
import { FeaturedCarInternal } from "../Components/FeaturedCarInternal"

const Featuredcar = styled.section`
  padding:112px 0 120px;
`
const Featuredcarcontent = styled.div`
  padding-top:96px;
`

export const FeaturedCar = () => {
  const store = [
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc1.png'
    },
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'chevrolet camaro wmv20',
      price:'$66,575',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc2.png'
    },
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc3.png'
    },
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc4.png'
    },
  ];
  const store2 = [
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc5.png'
    },
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc6.png'
    },
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc7.png'
    },
    {
      model: '2017',
      wheel:'3100MI',
      engine:'240HP',
      type:'automatic',
      name:'BMW 6-series gran coupe',
      price:'$89,395',
      detail:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      imageURL:'/images/featured-cars/fc8.png'
    },
  ];

  return (
    <Featuredcar>
      <div className="container">
        <div className="section-header">
          <p>checkout <span>the</span> featured cars</p>
          <h2>featured cars</h2>
        </div>
        <Featuredcarcontent>
          <div className="row">
            {store.map((i) => (<FeaturedCarInternal key={i.name} data={i} />))}
          </div>
          <div className="row">
            {store2.map((i) => (<FeaturedCarInternal key={i.name} data={i} />))}
          </div>
        </Featuredcarcontent>
      </div>
    </Featuredcar>
  )
}