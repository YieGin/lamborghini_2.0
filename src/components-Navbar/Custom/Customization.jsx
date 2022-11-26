import React from "react";
import Image59 from "../../Images/59.png";
import Image60 from "../../Images/60.png";
import Image61 from "../../Images/61.png";
import Image62 from "../../Images/62.png";
import Image63 from "../../Images/63.png";
import Image64 from "../../Images/64.png";
import Image28 from "../../Images/28.png";
import Video3 from "../../Video/3.mp4";
import ListCustom from "./ListCustom";
const Customization = () => {
  const LandingCard = {
    heroImage: Image59,
    heroText: "AD PERSONAM",
    Page2:
      "The Ad Personam customisation program is available for the Huracán and Aventador, giving customers the chance to create their own personal Lamborghini, making it extra special and meeting any wish. There is an infinity of  possible combinations, from the colours to the materials: from the logo on the seat that may be hand stitched instead of branded, to the  initials stitched inside the vehicle’s interior, or even a custom colour, all meeting the company’s exacting standards of quality.  Or the possibility to choose from various types of materials, from luxurious Lambo Vintage semi aniline leathers embellished with other effects and developed together with leading Italian experts, or the innovative Forged Composite material in carbon fiber.",
    Image2: Image60,
    Image3: Image62,
    Image4: Image61,
    Image5: Image28,
    Page2Text: "MAKE IT UNIQUE MAKE IT YOURS",
    Page4H1: "AD PERSONAM STUDIO",
    Page4P:
      "Customers wishing to take advantage of the customisation program can design their own vehicle directly with Ad Personam Studio, the area dedicated to customisation based at the Sant’Agata Bolognese HQ. The area was designed to offer a unique experience, with displays showing the alternative leathers, colours, materials, seats and rims, as well as digital simulation of the possible options using an advanced car configurator. Our team of experts supports customers at all stages of the  configuration of their personal super sports car, including the choice of colour, accessories and materials. The meeting with the customer is preceded by a production line experience, with a guided tour of the factory and a preview of some of the possible configurations of the Huracán and Aventador. ",
    CustomVideo: Video3,
    ImagePage6: Image64,
    ImagePage7: Image63,
    TextPage6_1: "LAMBORGHINI",
    TextPage6_2: "MODELS",
    TextPage6_3: "LAMBORGHINI",
    TextPage6_4: "DESIGN",
  };

  return (
    <div>
      <ListCustom List={LandingCard} />
    </div>
  );
};

export default Customization;
