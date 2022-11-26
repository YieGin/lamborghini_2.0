import React from "react";
import List from "../List/List";
import Image2 from "../../Images/2.jpg";
import Image30 from "../../Images/30.jpg";
import Image31 from "../../Images/31.png";
import Image32 from "../../Images/32.png";
import Image33 from "../../Images/33.jpg";
import Image34 from "../../Images/34.png";
import Image35 from "../../Images/35.png";
import Image19 from "../../Images/19.png";
import Image20 from "../../Images/20.png";
import Image28 from "../../Images/28.png";
import Image29 from "../../Images/29.png";
import Video1 from "../../Video/1.mp4";
import Video2 from "../../Video/2.mp4";
const Huracan = () => {
  const LandingCard = {
    heroImage: Image30,
    heroText: "HURACAN",
    Page2:
      "Discover all the new models of this exclusive car family, created to shape to your deepest emotions. Combining the highest expression of Lamborghini’s power with the exclusive refinement of Italian handicraft, this series embodies authentic design and state-of-the-art mechanical technology. The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road, you’ll get a thrill just by looking at it. The only thing better than taking in this beauty from a distance is actually touching it. The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.",
    Image2: Image32,
    Page2Imagetag: Image31,
    Image3: Image33,
    Image4: Image34,
    Image5: Image35,
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

export default Huracan;
