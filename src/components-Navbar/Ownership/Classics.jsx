import React, { useLayoutEffect } from "react";
import ListOwner from "../List/ListOwner";
import Image94 from "../../Images/94.png";
import Image95 from "../../Images/95.png";
import Image96 from "../../Images/96.png";
import Image97 from "../../Images/97.png";
import Image89 from "../../Images/89.png";
const Classics = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ListOwnerPage = {
    OwnerImage1: Image94,
    OwnerText1: "LAMBORGHINI",
    OwnerText22: "POLO STORICO",
    OwnerText2: "LAMBORGHINI POLO STORICO: PRESERVATION OF A GLORIOUS HERITAGE",
    OwnerText3:
      "Lamborghini Polo Storico is the center dedicated to classic Lamborghinis and the preservation of the historical heritage of the House of the Raging Bull. Opened in Spring 2015 at the Sant’Agata Bolognese headquarters, Polo Storico is now a benchmark for Lamborghini owners all around the world. Polo Storico’s activities are focused on four main pillars: Archive, Certification, Restoration and Original Spare Parts.",
    OwnerImage2: Image95,
    OwnerImage3: Image96,
    OwnerTextPage3: "ARCHIVE AND CERTIFICATION",
    OwnerTextPage4:
      "The Polo Storico Archive contains all the information relating to the models manufactured in Sant’Agata Bolognese in the past, from the first sketches to the production files and the original technical drawings.  Under the supervision of the Comitato dei Saggi (Experts Committee), Polo Storico also offers an exclusive Certification of Authenticity service that verifies the originality of each individual component. This service is only possible because of the detailed information available in the Polo Storico Archive.",
    OwnerImage5: Image97,
    OwnerImage6: Image89,
    OwnerPage4p:
      "The Restoration of a Lamborghini is a complex endeavor that requires great skill, expertise and specialization. Lamborghini Polo Storico oversees the entire process, working in-house on the mechanics and collaborating with highly qualified and experienced specialists for the bodywork and interiors. Each step in the job is discussed with the customer and developed by Polo Storico experts. Automobili Lamborghini is committed to also producing Original Spare Parts for classic cars, with components covering over 65% of the fleet, a number that continues to grow year after year for a wide range of models, from the 350 GT to the Diablo. Owners can order spare parts directly through any authorized Automobili Lamborghini dealer.",
  };
  return (
    <div>
      <ListOwner List={ListOwnerPage} />
    </div>
  );
};

export default Classics;
