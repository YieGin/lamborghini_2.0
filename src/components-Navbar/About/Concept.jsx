import React from "react";
import List from "../List/List";
import Image21 from "../../Images/21.png";
import Image22 from "../../Images/22.png";
import Image23 from "../../Images/23.png";
import Image24 from "../../Images/24.png";
import Image25 from "../../Images/25.png";
import Image26 from "../../Images/26.png";
import Image27 from "../../Images/27.png";
import Image18 from "../../Images/18.png";
import Image19 from "../../Images/19.png";
import Image20 from "../../Images/20.png";
import Image28 from "../../Images/28.png";
import Image29 from "../../Images/29.png";
import Video1 from "../../Video/1.mp4";
import Video2 from "../../Video/2.mp4";
const Concept = () => {
  const LandingCard = {
    heroImage: Image21,
    heroText: "CONCEPT",
    Page2:
      "The Terzo Millennio anticipates the future and projects the emotions of super sports cars into the electrical revolution era. This design concept car features futuristic lines and is designed with the goal of maximizing aerodynamic  performance, stylistic pursuit and driving emotions through advanced technological solutions including an energy storage system based on super capacitators, functional materials in carbon fiber and electric propulsion true to the spirit of a super sports car.",
    Image2: Image23,
    Page2Imagetag: Image22,
    Image3: Image24,
    Image4: Image25,
    Image5: Image26,
    Page4H1: "ESTOQUE",
    Page4P:
      "The Estoque is an extremely versatile concept car, which stands apart in terms of innovation, creativity and design: a four-door super sports car, perfect for everyday use, boasting technological features that are one of a kind. Lamborghini’s unmistakable style converges in a revolutionary new sedan concept, at the same time characterized by a very low profile and spaciousness, with luxurious interiors.",
    Page5Image: Image27,
    ImagePage6: Image19,
    ImagePage7: Image20,
    TextPage6_1: "AUTOMOBILI LAMBORGHINI",
    TextPage6_2: "COMPANY",
    TextPage6_3: "MAKE IT UNIQUE MAKE IT YOURS",
    TextPage6_4: "AD PERSONAM",
    Video1: Video1,
    Video2: Video2,
    Svg_Right_5_Image: Image29,
    Page5_RightImage: Image28,
  };
  return (
    <div>
      <List List={LandingCard} />
    </div>
  );
};

export default Concept;
