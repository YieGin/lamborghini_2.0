import React from "react";
import List from "../List/List";
import Image2 from "../../Images/2.jpg";
import Image45 from "../../Images/45.png";
import Image47 from "../../Images/47.png";
import Image46 from "../../Images/46.png";
import Image48 from "../../Images/48.png";
import Image49 from "../../Images/49.png";
import Image50 from "../../Images/50.png";
import Image51 from "../../Images/51.png";
import Image52 from "../../Images/52.png";
import Image28 from "../../Images/28.png";
import Image29 from "../../Images/29.png";
import Video1 from "../../Video/1.mp4";
import Video2 from "../../Video/2.mp4";
const Owned = () => {
  const LandingCard = {
    heroImage: Image45,
    heroText: "CERTIFIED PRE-OWNED PROGRAM",
    Page2:
      "Selezione Lamborghini Certified Pre-Owned is the official program that guarantees total peace of mind and safety for new buyers of pre-owned Lamborghini cars. The pre-owned Lamborghini is selected based on a thorough certification process and prepared for sale by qualified technicians of the House of the Raging Bull, using exclusively original spare parts. Customers can also take advantage of the Lamborghini warranty and roadside assistance service for up to 24 months. The Selezione Lamborghini Certified Pre-Owned  program is only available at the Authorized Dealerships and Service Centers. ",
    Image2: Image47,
    Page2Imagetag: Image46,
    Image3: Image48,
    Image4: Image49,
    Image5: Image50,
    Page5_RightImage: Image28,
    Page4H1: "PRE-OWNED CAR: ROADSIDE ASSISTANCE",
    Page4P:
      "To ensure your peace of mind, every car in the Selezione Certified Pre- Owned program can rely on roadside assistance for the duration of the warranty. The service is available 24 hours a day, 365 days a year.* *In some countries, roadside assistance services may be provided by partner companies.  ",
    Page5Image: Image2,
    Video1: Video1,
    Video2: Video2,
    ImagePage6: Image51,
    ImagePage7: Image52,
    TextPage6_1: "FIND YOUR",
    TextPage6_2: "PRE-OWNED CAR",
    TextPage6_3: "ACCESSORI",
    TextPage6_4: "ORIGINALI",
    Svg_Right_5_Image: Image29,
  };

  return (
    <div>
      <List List={LandingCard} />
    </div>
  );
};

export default Owned;
