import React from "react"
import { styled } from "styled-components"

const Clientssay = styled.section`
  padding:115px 0 80px;
  background: #f8f9fb;
`
const Testimonialimg = styled.div`
  margin-right: 5px;
  border-radius:50%;
  -webkit-transition: .3s; 
  -moz-transition:.3s; 
  -ms-transition:.3s; 
  -o-transition:.3s;
  transition: .3s;
`
const Testimonialpersonh2 = styled.h2`
  font-size: 16px;
  color: #5e6778;
  font-weight: 600;
`
const Testimonialpersonh4 = styled.h4`
  font-size: 16px;
  color: #5e6778;
  font-weight: 600;
  margin-top:10px;
`
export const Clients = () => {
  return (
    <Clientssay>
      <div className="container">
        <div className="section-header">
          <h2>what our clients say</h2>
        </div>
        <div className="row">
          <div className="owl-carousel testimonial-carousel">
            <div className="col-sm-3 col-xs-12">
              <div className="single-testimonial-box">
                  <div className="testimonial-description">
                      <div className="testimonial-info">
                        <Testimonialimg>  
                          <img src="assets/images/clients/c1.png" alt="image of clients person" />
                        </Testimonialimg>
                      </div>
                      <div className="testimonial-comment">
                        <p>
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
                        </p>
                      </div>
                      <div className="testimonial-person">
                        <Testimonialpersonh2><a href="#">tomas lili</a></Testimonialpersonh2>
                        <Testimonialpersonh4>new york</Testimonialpersonh4>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="single-testimonial-box">
                <div className="testimonial-description">
                  <div className="testimonial-info">
                    <Testimonialimg>
                      <img src="assets/images/clients/c2.png" alt="image of clients person" />
                    </Testimonialimg>
                  </div>
                  <div className="testimonial-comment">
                    <p>
                      Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
                    </p>
                  </div>
                  <div className="testimonial-person">
                    <h2><a href="#">romi rain</a></h2>
                    <h4>london</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="single-testimonial-box">
                <div className="testimonial-description">
                  <div className="testimonial-info">
                    <Testimonialimg>
                      <img src="assets/images/clients/c3.png" alt="image of clients person" />
                    </Testimonialimg>
                  </div>
                  <div className="testimonial-comment">
                    <p>
                      Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. 
                    </p>
                  </div>
                  <div className="testimonial-person">
                    <h2><a href="#">john doe</a></h2>
                    <h4>washington</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Clientssay>
  )
}
  