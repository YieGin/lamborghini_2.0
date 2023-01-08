import React, { useLayoutEffect } from "react";
import List from "../List/List";
import Image42 from "../../Images/42.png";
import Image36 from "../../Images/36.png";
import Image37 from "../../Images/37.png";
import Image38 from "../../Images/38.png";
import Image39 from "../../Images/39.png";
import Image40 from "../../Images/40.png";
import Image41 from "../../Images/41.png";
import Image19 from "../../Images/19.png";
import Image20 from "../../Images/20.png";
import Image43 from "../../Images/43.png";
import Image44 from "../../Images/44.png";
import Video1 from "../../Video/1.mp4";
import Video2 from "../../Video/2.mp4";
const Urus = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const LandingCard = {
    heroImage: Image36,
    heroText: "URUS",
    Page2:
      "Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of a super sports car with the practical functionality of an SUV. Powered by Lamborghini’s 4.0-liter twin-turbo V8 engine,  the Urus is all about a performance mindset that brings together fun- to-drive and astounding vehicle capabilities. The design, performance, driving dynamics and unbridled emotion flow effortlessly into this visionary realization of authentic Lamborghini DNA",
    Image2: Image37,
    Page2Imagetag: Image38,
    Image3: Image39,
    Image4: Image40,
    Image5: Image41,
    Page5_RightImage: Image42,
    Page4H1: "DESIGN",
    Page4P:
      "A declaration of freedom, Urus enables you to discover any terrain, from track to sand, ice, gravel or rocks. It is the absolute all-round super sports car and more. It allows you to explore new paths and new ways to express yourself—to accept challenges confidently and to live life to the fullest. You are not afraid to go far: this is what you aspire to. Unlock any road, unlock your personality. ",
    Page5Image: Image43,
    Video1: Video1,
    Video2: Video2,
    ImagePage6: Image19,
    ImagePage7: Image20,
    TextPage6_1: "AUTOMOBILI LAMBORGHINI",
    TextPage6_2: "COMPANY",
    TextPage6_3: "MAKE IT UNIQUE MAKE IT YOURS",
    TextPage6_4: "AD PERSONAM",
    Svg_Right_5_Image: Image44,
  };

  return (
    <div>
      <List List={LandingCard} />
    </div>
  );
};

export default Urus;
