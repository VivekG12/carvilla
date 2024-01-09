import React from "react"
import { styled } from "styled-components"
import Link from "next/link"

const Contact = styled.footer`
  background: #2a2d54;
`
const Footertop = styled.div`
  padding: 112px 0 72px;
`
const Footerlogo = styled.div`
a , a:hover , a:focus {
  display: inline-block;
  color: #fff;
  font-size: 24px;
  letter-spacing: 3px;
  font-family: 'Rufina', serif;
  font-weight: 700;
  text-transform:uppercase;
}
`
const Singlefooterwidget = styled.div`
  margin-bottom: 40px;
  p {
    font-size: 14px;
    color: #eeeff6;
    max-width: 300px;
    margin:40px 0 20px;
  }
  h2 {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 43px;
  }
  ul li {
    display:  inherit;
    -webkit-transition: .5s; 
    -moz-transition:.5s; 
    -ms-transition:.5s; 
    -o-transition:.5s;
    transition: .5s;
  }
  ul li:hover {
    -webkit-transform:translateX(10px);
    -moz-transform:translateX(10px);
    -ms-transform:translateX(10px);
    -o-transform:translateX(10px);
    transform:translateX(10px);
  }
  ul li a {
    font-size:  14px;
    color:  #cfd0e3;
    font-weight:  300;
    padding-bottom: 13px;
  }
  ul li a span {
    text-transform: lowercase;
  }
`
const Footercontact = styled.div`
  p {
    margin: 0;
    color: #d1d7e9;
  }
  h2 {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 43px;
  }
  `
  const Footernewsletter = styled.div`
    p {
      color: #aeafc2;
      font-size: 14px;
      font-weight: 300;
      margin: 0 0 15px;
    }
  `
  const Hmfootemail = styled.div`
    position: relative;
  `
  const Footemailbox = styled.div`
    background:#26294d;
    display: block;
    padding: 15px 20px;
    outline:0!important;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
    border:0;
    input {
      background:#26294d;
      display: block;
      padding: 15px 20px;
      outline:0!important;
      box-shadow:0 5px 15px rgba(0,0,0,.2);
      border:0;
      font-size: 12px;
      color: #666c81;
      font-weight: 300;
    }
    input:hover {
      box-shadow:0 5px 15px rgba(0,0,0,.4);
    }
  `
  const Footemailsubscribe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background: transparent;
    color: #666c81;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const Footercopyright = styled.div`
    padding: 20px 0 17px;
    border-top: 1px solid #434859;
    p , a {
      color: #a8a9bf;
      font-size: 14px;
      font-weight: 400;
      text-transform: capitalize;
    }
  `
const Footer = () => {
    return (
        <Contact id="Contact">
			<div className="container">
				<Footertop>
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<Singlefooterwidget>
								<Footerlogo>
									<Link href="#Home">carvilla</Link>
								</Footerlogo>
								<p>
									Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
								</p>
								<Footercontact>
									<p>info@themesine.com</p>
									<p>+1 (885) 2563154554</p>
								</Footercontact>
							</Singlefooterwidget>
						</div>
						<div className="col-md-2 col-sm-6">
							<Singlefooterwidget>
								<h2>about devloon</h2>
								<ul>
									<li><a href="#">about us</a></li>
									<li><a href="#">career</a></li>
									<li><a href="#">terms <span> of service</span></a></li>
									<li><a href="#">privacy policy</a></li>
								</ul>
							</Singlefooterwidget>
						</div>
						<div className="col-md-3 col-xs-12">
							<Singlefooterwidget>
								<h2>top brands</h2>
								<div className="row">
									<div className="col-md-7 col-xs-6">
										<ul>
											<li><a href="#">BMW</a></li>
											<li><a href="#">lamborghini</a></li>
											<li><a href="#">camaro</a></li>
											<li><a href="#">audi</a></li>
											<li><a href="#">infiniti</a></li>
											<li><a href="#">nissan</a></li>
										</ul>
									</div>
									<div className="col-md-5 col-xs-6">
										<ul>
											<li><a href="#">ferrari</a></li>
											<li><a href="#">porsche</a></li>
											<li><a href="#">land rover</a></li>
											<li><a href="#">aston martin</a></li>
											<li><a href="#">mersedes</a></li>
											<li><a href="#">opel</a></li>
										</ul>
									</div>
								</div>
							</Singlefooterwidget>
						</div>
						<div className="col-md-offset-1 col-md-3 col-sm-6">
							<Singlefooterwidget>
								<h2>news letter</h2>
								<Footernewsletter>
									<p>
										Subscribe to get latest news  update and informations
									</p>
								</Footernewsletter>
								<Hmfootemail>
									<Footemailbox>
										<input type="text" placeholder="Add Email" />
									</Footemailbox>
									<Footemailsubscribe>
										<span><i className="fa fa-arrow-right"></i></span>
									</Footemailsubscribe>
								</Hmfootemail>
							</Singlefooterwidget>
						</div>
					</div>
				</Footertop>
				<Footercopyright>
					<div className="row">
						<div className="col-sm-6">
							<p>
								&copy; copyright.designed and developed by <a href="https://www.themesine.com/">themesine</a>.
							</p>
						</div>
						<div className="col-sm-6">
							<div className="footer-social">
								<a href="#"><i className="fa fa-facebook"></i></a>	
								<a href="#"><i className="fa fa-instagram"></i></a>
								<a href="#"><i className="fa fa-linkedin"></i></a>
								<a href="#"><i className="fa fa-pinterest-p"></i></a>
								<a href="#"><i className="fa fa-behance"></i></a>	
							</div>
						</div>
					</div>
				</Footercopyright>
			</div>
			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
			</div>
        </Contact>
    )
}
export default Footer