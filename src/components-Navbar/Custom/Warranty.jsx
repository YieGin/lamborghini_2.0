import React, { useLayoutEffect } from "react";
import Image83 from "../../Images/83.png";
import Image82 from "../../Images/82.png";
import Image61 from "../../Images/61.png";
import Image62 from "../../Images/62.png";
import Image63 from "../../Images/63.png";
import Image64 from "../../Images/64.png";
import Image28 from "../../Images/28.png";
import Video3 from "../../Video/3.mp4";
import WarrantyList from "./Listt/WarrantyList";
const Warranty = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const LandingCard = {
    heroImage: Image83,
    heroText: "WARRANTY EXTENSION",
    Page2:
      "With us, you get more than the highest performance; you also get the guarantee of reliability and protection that allows for a supreme, worry-free driving experience.   On all new vehicles – starting from the date of delivery and under normal conditions of use – Lamborghini provides a three-year, unlimited-mileage warranty*. This means guaranteed peace of mind for you from 0 to 3 years and 0 to infinite mileage. But it doesn’t have to end there because you can keep it for longer thanks to our Warranty Extension program. Or you can secure it through our Selezione program. *Warranty conditions may vary by country.  Official Lamborghini Dealers and Service Points are able to provide detailed information on the terms and conditions of the warranty coverage provided for your vehicle.",
    Image2: Image82,
    Image3: Image62,
    Image4: Image61,
    Image5: Image28,
    Page2Text: "DRIVE WORRY-FREE WITH OUR THREE-YEAR WARRANTY",
    Page4H1: "EXTENDED PROTECTION” FOR THE MAXIMUM",
    Page4P:
      "The Warranty Extension covers cars participating in the Selezione program with an additional Lamborghini warranty of at least 12 months*/**. The formula covers parts and labor and guarantees the use of Original Spare Parts and the work of Lamborghini specialized technicians. >To be eligible for the Selezione program, the car must be no more than 7 years old (10 for Urus) and have no more than 70,000 km (100,000 for Urus). >To renew the warranty, the car must pass the 150 tests of the Lamborghini checklist.  ",
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
      <WarrantyList List={LandingCard} />
    </div>
  );
};

export default Warranty;
