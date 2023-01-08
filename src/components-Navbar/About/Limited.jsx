import React, { useLayoutEffect } from "react";
import List from "../List/List";
import Image2 from "../../Images/2.jpg";
import Image53 from "../../Images/53.png";
import Image54 from "../../Images/54.png";
import Image55 from "../../Images/55.png";
import Image56 from "../../Images/56.png";
import Image57 from "../../Images/57.png";
import Image58 from "../../Images/58.png";
import Image19 from "../../Images/19.png";
import Image20 from "../../Images/20.png";
import Image28 from "../../Images/28.png";
import Image29 from "../../Images/29.png";
import Video1 from "../../Video/1.mp4";
import Video2 from "../../Video/2.mp4";
const Limited = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const LandingCard = {
    heroImage: Image53,
    heroText: "LIMITED SERIES",
    Page2:
      "The Sián FKP 37, whose name means “lightning” in Bolognese dialect, is the first super sports car powered by a V12 with hybrid technology based on a supercapacitor. A real masterpiece of engineering and technology with an extraordinary design, both functional and futuristic, that elicits excitement right from the first glance. Produced in just 63 units, the first few-off hybrid car boasts the lowest power-to-weight ratio of any other Lamborghini with a V12 engine, and its top speed exceeds 350 km/h. With the first application of supercapacitors in the world in the hybrid segment, the Sián FKP 37 looks to the future without forgoing the emotions of a Lamborghini, and also paves the way for a new technology of autonomous actuation in the automotive world.",
    Image2: Image55,
    Page2Imagetag: Image54,
    Image3: Image57,
    Image4: Image56,
    Image5: Image58,
    Page5_RightImage: Image28,
    Page4H1: "SIAN",
    Page4P:
      "The Sián Roadster is the first hybrid open-top super sports car equipped with pioneering supercapacitor technology and an innovative use of materials science. This technological gem combines the most powerful V12 engine ever with a new power pack, thus introducing an innovative hybrid system that offers the maximum power to the more limited weight. The aerodynamic efficiency of the Sián Roadster is optimized by the pure design, which reinterprets the forms in the open-top cabin, creating an unmistakable futuristic profile.",
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

export default Limited;
