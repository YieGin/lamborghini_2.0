import React, { useLayoutEffect } from "react";
import ListOwner from "../List/ListOwner";
import Image90 from "../../Images/90.png";
import Image91 from "../../Images/91.png";
import Image92 from "../../Images/92.png";
import Image93 from "../../Images/93.png";
import Image89 from "../../Images/89.png";
const Mobility = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ListOwnerPage = {
    OwnerImage1: Image90,
    OwnerText1: "LAMBORGHINI",
    OwnerText22: "MOBILITY PROGRAM",
    OwnerText2: "UTMOST CONVENIENCE, EVEN IF YOU HAVE A BREAKDOWN",
    OwnerText3:
      "With the Lamborghini Excellence Mobility Program, owners of new vehicles with standard or extended warranty coverage and owners of vehicles with active Selezione Lamborghini Certified Pre-Owned program that fall within the specified warranty period get the ultimate in assistance convenience. Lamborghini Excellence Mobility offers, free of charge, the use of a Courtesy Car for the period the covered vehicle is off the road and vehicle Pick-up & Delivery service by a Lamborghini representative.",
    OwnerImage2: Image91,
    OwnerImage3: Image92,
    OwnerTextPage3: "COURTESY CAR",
    OwnerTextPage4:
      "If you bring your vehicle to an official Lamborghini Dealer or Service Point for mechanical or body repair, servicing, accessory installation or any other type of work that will require you to leave the vehicle with them, you will be offered a courtesy car, either a Lamborghini Urus or another available model. The courtesy car service, which must be booked in advance, is completely free of charge and is provided for the entire period your Lamborghini remains in the service center, with no mileage limits attached.",
    OwnerImage5: Image93,
    OwnerImage6: Image89,
    OwnerPage4p:
      "You can ask for pick-up and delivery of your Lamborghini from/to your home or other address you provide with a simple telephone call. Pick-up & Delivery service is completely free-of-charge and is really useful when commitments prevent you from delivering your vehicle in person, allowing you to optimize the management and stay of your vehicle at the official Lamborghini Dealer/Service Point.",
  };
  return (
    <div>
      <ListOwner List={ListOwnerPage} />
    </div>
  );
};

export default Mobility;
