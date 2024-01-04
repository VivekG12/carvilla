import React from "react";
import { styled } from "styled-components";
import { ServiceCard } from "../Components/ServiceCard";

export const Service = styled.section`
  padding: 260px 0 87px;
`

export const ServiceSection = () => {
  const obj = [
    {
      heading: "Largest dealership of car",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    },
    {
      heading: "Unlimited Repair Warranty",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    },
    {
      heading: "Insurance Support",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    },
  ];

  console.log('hello from obj');

  return (
    <Service>
      <div className="container">
        <div className="service-content">
          <div className="row">
            {obj.map((i) => (<ServiceCard key={i.heading} data={i} />))}
          </div>
        </div>
      </div>
    </Service>
  );
};
