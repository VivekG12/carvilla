import React from "react"
import { styled } from "styled-components"
import Link from "next/link"
const Welcomehero = styled.section`
background-image: url('/images/welcome-hero/welcome-banner.jpg');
background-size: cover;
z-index: 1;
position: relative;
&:before {
position: absolute;
content: "";
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
position: relative;

h2 {
  font-size: 42px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 45px;
}
p {
  font-size: 18px;
  text-transform: initial;
  color: #fff;
  font-weight: 500;
  max-width: 735px;
  margin: 0 auto;
}
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
  width: 65%;
  border-radius: 3px;
`
const Singlemodelsearch = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 20px;
  }
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
const Modelbutton = styled.button`
  width: 160px;
  margin-top: 80px;
  margin-left: 53px;
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
  &:hover {
  background: #0102fa;
}
`
const Toparea = styled.div`
  position: fixed;
  z-index: 1;
`
const Headerarea = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  z-index: 99;
`
const Navbarbrand = styled.div`
  display: inline-block;
  color: #fff;
  font-size: 24px;
  letter-spacing: 3px;
  font-family: 'Rufina', serif;
  font-weight: 700;
  padding: 45px 0px;
  text-transform:uppercase;
`
export const Home1 = () => {
  return (
    <Welcomehero id="Home">
      <Toparea>
				<Headerarea>
              <nav>
				        <div className="container">
				            <div className="navbar-header">
				                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i className="fa fa-bars"></i>
				                </button>
				                <Navbarbrand><a href="#Home">carvilla<span></span></a></Navbarbrand>
				            </div>
				            <div>
				                <ul>
				                    <li><Link href="#Home">Home</Link></li>
                            <li><Link href="#ServiceSection">Service</Link></li>
                            <li><Link href="#FeaturedCar">Featured Cars</Link></li>
                            <li><Link href="#NewCar">New Cars</Link></li>
                            <li><Link href="#Brands">Brands</Link></li>
                            <li><Link href="#Contact">Contact</Link></li>
				                </ul>
				            </div>
				        </div>
				    </nav>
				</Headerarea>
			    <div className="clearfix"></div>
			</Toparea>

      <div className='container'>
        <Welcomeherotext>
          <h2>get your desired car in resonable price</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.</p>
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
                    <h2>Select Year</h2>
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
                    <h2>body style</h2>
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
										<h2>select make</h2>
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
										<h2>car condition</h2>
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
										<h2>select model</h2>
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
										<h2>select price</h2>
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
										<Modelbutton>
											search
										</Modelbutton>
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
