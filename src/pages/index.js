import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import Header from "../components/Header"
import Map1 from "../images/map1.jpeg"
import Map2 from "../images/map2.jpeg"
import Map3 from "../images/map3.jpeg"
import Map4 from "../images/map4.jpeg"
import Map5 from "../images/map5.jpeg"
import Map6 from "../images/map6.jpeg"
import Map7 from "../images/map7.jpeg"
import SEO from "../components/seo"

import "../style/app.css";
import "animate.css/animate.min.css";

const IndexPage = () => (
  <body>
    <Header/>
    <SEO title="Map the system AI" />
      <img alt="IMG" src={Map1} className="map"/>
    <ScrollAnimation animateIn='bounceInRight'>
        <img alt="IMG" src={Map2} className="map"/>
    </ScrollAnimation>
    <ScrollAnimation animateIn='bounceInRight'>
        <img alt="IMG" src={Map3} className="map"/>
    </ScrollAnimation>
    <ScrollAnimation animateIn='bounceInRight'>
        <img alt="IMG" src={Map4} className="map"/>
    </ScrollAnimation>
    <ScrollAnimation animateIn='bounceInRight'>
        <img alt="IMG" src={Map5} className="map"/>
    </ScrollAnimation>
    <ScrollAnimation animateIn='bounceInRight'>
        <img alt="IMG" src={Map6} className="map"/>
    </ScrollAnimation>
    <ScrollAnimation animateIn='bounceInRight'>
        <img alt="IMG" src={Map7} className="map"/>
    </ScrollAnimation>
  </body>
)

export default IndexPage
