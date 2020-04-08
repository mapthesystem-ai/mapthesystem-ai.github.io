import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import Header from "../components/Header"
import Hero from "../images/test/map_Hero.png"
import Intro from "../images/test/map_Introduction.png"
import CurrentState from "../images/test/map_currentState.png"
import FutureState from "../images/test/map_FutureState.png"
import StateBlurb from "../images/test/map_StateBlurb.png"
import SystemsMap from "../images/test/map_SystemsMap.png"
import Adkar from "../images/test/map_AdkarIntro.png"
import Aware from "../images/test/map_A-08.png"
import Desire from "../images/test/map_D.png"
import Knowledge from "../images/test/map_K.png"
import Ability from "../images/test/map_A-11.png"
import Enforce from "../images/test/map_R.png"
import AdkarBlurb from "../images/test/map_akdarbblurb.png"
import Levers from "../images/test/map_levers.png"
import Gaps from "../images/test/map_gaps.png"
import Impact from "../images/test/map_impact.png"
import Folder1 from "../images/test/map-17.png"
import Folder2 from "../images/test/map-18.png"
import Folder3 from "../images/test/map-19.png"
import Folder4 from "../images/test/map-20.png"

import SEO from "../components/seo"

import "../style/app.css"
import "animate.css/animate.min.css"

const IndexPage = () => (
  <body className="index">
    <Header />
    <SEO title="Map the System AI" />
    <div className="map__images">
      <img alt="IMG" src={Hero} className="map__head" />
      <ScrollAnimation
        animateIn="zoomIn"
        animateOut="fadeOut"
        animatePreScroll={false}
      >
        <div>
          <img alt="IMG" src={Intro} className="map test" />
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInLeft"
        animateOut="slideOutLeft"
        animatePreScroll={false}
      >
        <img alt="IMG" src={CurrentState} className="map test" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInRight"
        animateOut="slideOutRight"
        animatePreScroll={false}
      >
        <img alt="IMG" src={FutureState} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceInRight"
        animatePreScroll={false}
      >
        <img alt="IMG" src={StateBlurb} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={SystemsMap} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceInLeft"
        animateOut="bounceOutLeft"
        animatePreScroll={false}
        delay={700}
      >
        <img alt="IMG" src={Adkar} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="rollIn"
        animateOut="rollOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Aware} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="rollIn"
        animateOut="rollOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Knowledge} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="rollIn"
        animateOut="rollOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Desire} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="rollIn"
        animateOut="rollOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Ability} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="rollIn"
        animateOut="rollOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Enforce} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceOutRight"
        animatePreScroll={false}
      >
        <img alt="IMG" src={AdkarBlurb} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="flipInX"
        animateOut="flipOutX"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Levers} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="zoomInLeft"
        animateOut="zoomOutLeft"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Gaps} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceIn"
        animateOut="bounceOut"
        animatePreScroll={false}
      >
        <img alt="IMG" src={Impact} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="lightSpeedIn"
        animateOut="lightSpeedOut"
        animatePreScroll={false}
        duration={0.75}
      >
        <img alt="IMG" src={Folder1} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="lightSpeedIn"
        animateOut="lightSpeedOut"
        duration={0.75}
        animatePreScroll={false}
      >
        <img alt="IMG" src={Folder2} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="lightSpeedIn"
        animateOut="lightSpeedOut"
        duration={0.75}
        animatePreScroll={false}
      >
        <img alt="IMG" src={Folder3} className="map" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="lightSpeedIn"
        animateOut="lightSpeedOut"
        duration={0.75}
        animatePreScroll={false}
      >
        <img alt="IMG" src={Folder4} className="map" />
      </ScrollAnimation>
    </div>
  </body>
)

export default IndexPage
