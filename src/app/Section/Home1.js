import React from "react"
import { styled } from "styled-components"

const Welcomehero = styled.section`
height: 100vh;
background-image: url('/images/welcome-hero/welcome-banner.jpg');
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
&:before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(42, 45, 84, 0.60);
}
`
const Welcomeherotext = styled.div`
text-align: center;
padding:290px 0 372px;
`
const Hero = styled.h2`
font-size: 42px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
margin-bottom: 45px;
`
const Para = styled.p`
font-size: 18px;
text-transform: initial;
color: #fff;
font-weight: 500;
max-width: 735px;
margin: 0 auto;
`
const Herobutton = styled.button`
display: inline-block;
width: 230px;
height: 60px;
background: #4e4ffa;
color: #fff;
border-radius: 3px;
margin-top: 55px;
transition: .3s linear;
&:hover {
  background: #0102fa;
}
`
const Modelsearchcontent = styled.div`
  padding: 40px 0;
  background: #fff;
  box-shadow:0 10px 40px 0px rgba(38,40,64,.2);
  position: absolute;
  bottom: -150px;
  width: 100%;
  border-radius: 3px;
`
const Singlemodelsearch = styled.div`
  margin-bottom: 30px;
`
const Singlemodelsearchh2 = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 20px;
`
const Modelselecticon = styled.div`
  position: relative;
&:after {
  position: absolute;
  content: "\f103";
  right: 0px;
  top: 0;
  font-size: 10px;
  color: #888f9d;
  background: #f8f8f8;
  height: 60px;
  line-height: 60px;
  width: 50px;
  text-align: center;
  font-family: "Flaticon";
  pointer-events: none;
  border: transparent;
}
`
const Modelformcontrol = styled.select`
  outline: 0!important;
  box-shadow: none;
  border: 1px solid #f8f8f8;
  background: #f8f8f8;
  height: 60px;
  font-size: 16px;
  color: #888f9d;
  text-transform: capitalize;
`
export const Home1 = () => {
  return (
    <Welcomehero>
      <div className='container'>
        <Welcomeherotext>
          <Hero>get your desired car in resonable price</Hero>
          <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.</Para>
          <Herobutton>contact us</Herobutton>
        </Welcomeherotext>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Modelsearchcontent>
              <div className="row">
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <Singlemodelsearch>
                    <Singlemodelsearchh2>Select Year</Singlemodelsearchh2>
                      <Modelselecticon>
                        <Modelformcontrol>
                            <option value="default">year</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </Modelformcontrol>
                      </Modelselecticon>
                  </Singlemodelsearch>
                  <Singlemodelsearch>
                    <Singlemodelsearchh2>body style</Singlemodelsearchh2>
                    <Modelselecticon>
                      <Modelformcontrol>
                          <option value="default">style</option>
                          <option value="sedan">sedan</option>
                          <option value="van">van</option>
                          <option value="roadster">roadster</option>
                      </Modelformcontrol>
                    </Modelselecticon>
                  </Singlemodelsearch>
                </div>
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <Singlemodelsearch>
										<Singlemodelsearchh2>select make</Singlemodelsearchh2>
										<Modelselecticon>
											<Modelformcontrol>
											  	<option value="default">make</option>
											  	<option value="toyota">toyota</option>
											  	<option value="holden">holden</option>
											  	<option value="maecedes-benz">maecedes-benz.</option>
											</Modelformcontrol>
										</Modelselecticon>
									</Singlemodelsearch>
                  <Singlemodelsearch>
										<Singlemodelsearchh2>car condition</Singlemodelsearchh2>
										<Modelselecticon>
											<Modelformcontrol>
											  	<option value="default">condition</option>
											  	<option value="something">something</option>
											  	<option value="something">something</option>
											  	<option value="something">something</option>
											</Modelformcontrol>
										</Modelselecticon>
									</Singlemodelsearch>
								</div>
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <Singlemodelsearch>
										<Singlemodelsearchh2>select model</Singlemodelsearchh2>
										<Modelselecticon>
											<Modelformcontrol>
											  	<option value="default">model</option>
											  	<option value="kia-rio">kia-rio</option>
											  	<option value="mitsubishi">mitsubishi</option>
											  	<option value="ford">ford</option>
											</Modelformcontrol>
										</Modelselecticon>
									</Singlemodelsearch>
                  <Singlemodelsearch>
										<Singlemodelsearchh2>select price</Singlemodelsearchh2>
										<Modelselecticon>
											<Modelformcontrol>
											  	<option value="default">price</option>
											  	<option value="$0.00">$0.00</option>
											  	<option value="$0.00">$0.00</option>
											  	<option value="$0.00">$0.00</option>
											</Modelformcontrol>
										</Modelselecticon>
									</Singlemodelsearch>
								</div>
                <div className="col-md-2 col-sm-12">
									<div className="single-model-search text-center">
										<button className="welcome-btn model-search-btn" onClick={()=>window.location.href='#'}>
											search
										</button>
									</div>
								</div>
              </div>
            </Modelsearchcontent>
          </div>
        </div>
      </div>  
    </Welcomehero>
  )
}
