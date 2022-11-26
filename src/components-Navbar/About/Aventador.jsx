import React from "react";
import List from "../List/List";
import Image2 from "../../Images/2.jpg";
import Image13 from "../../Images/13.jpg";
import Image14 from "../../Images/14.png";
import Image17 from "../../Images/17.png";
import Image15 from "../../Images/15.jpg";
import Image16 from "../../Images/16.png";
import Image18 from "../../Images/18.png";
import Image19 from "../../Images/19.png";
import Image20 from "../../Images/20.png";
import Image28 from "../../Images/28.png";
import Image29 from "../../Images/29.png";
import Video1 from "../../Video/1.mp4";
import Video2 from "../../Video/2.mp4";
const Aventador = () => {
  const LandingCard = {
    heroImage: Image13,
    heroText: "AVENTADOR",
    Page2:
      "DESIGNED TO PUSH BEYOND PERFORMANCE Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or  technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car sector. Giving a glimpse of the future today, it comes from a family of supercars already considered legendary.",
    Image2: Image14,
    Page2Imagetag: Image17,
    Image3: Image15,
    Image4: Image16,
    Image5: Image18,
    Page5_RightImage: Image28,
    Page4H1: "DESIGN",
    Page4P:
      "Each and every detail of the Aventador bears the hallmarks of the House of the Raging Bull. It is a true masterpiece of design that expresses dynamism and power, with the carbon-fiber monocoque the jewel in its crown. The interior combines high-level technology and luxury equipment, crafted by skilled artisans using ",
    Page5Image: Image2,
    Video1: Video1,
    Video2: Video2,
    ImagePage6: Image19,
    ImagePage7: Image20,
    TextPage6_1: "AUTOMOBILI LAMBORGHINI",
    TextPage6_2: "COMPANY",
    TextPage6_3: "MAKE IT UNIQUE MAKE IT YOURS",
    TextPage6_4: "AD PERSONAM",
    Svg_Right_5_Image: Image29,
  };

  return (
    <div>
      <List List={LandingCard} />
    </div>
  );
};

export default Aventador;
