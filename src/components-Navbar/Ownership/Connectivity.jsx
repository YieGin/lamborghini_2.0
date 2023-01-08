import React, { useLayoutEffect } from "react";
import ListOwner from "../List/ListOwner";
import Image85 from "../../Images/85.png";
import Image86 from "../../Images/86.png";
import Image87 from "../../Images/87.png";
import Image88 from "../../Images/88.png";
import Image89 from "../../Images/89.png";
const Connectivity = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ListOwnerPage = {
    OwnerImage1: Image85,
    OwnerText1: "LAMBORGHINI",
    OwnerText22: "CONNECT",
    OwnerText2: "LAMBORGHINI CONNECT",
    OwnerText3:
      "The journey is more important than the destination. That’s why Automobili Lamborghini is constantly committed to improving the driving experience, paving the way to new horizons that look to the future of mobility. Lamborghini connected services can be used from the moment you get in the car via the Lamborghini Infotainment System (LIS), an intuitive system that accesses information directly from the Web and allows you to manage it quickly and easily. The experience doesn’t stop upon reaching your destination but also continues remotely.",
    OwnerImage2: Image86,
    OwnerImage3: Image87,
    OwnerTextPage3: "CONNECT REMOTELY WHENEVER YOU WANT",
    OwnerTextPage4:
      "The Lamborghini UNICA app is the key to accessing an exclusive and personalized experience. Reserved for Lamborghini customers, the app allows you to conveniently and simply manage, command and control your car remotely from wherever you are. In addition, with its innovative services, Lamborghini UNICA allows you to receive the latest updates from the Sant’Agata Bolognese company in preview and gives you access to exclusive content and events.",
    OwnerImage5: Image88,
    OwnerImage6: Image89,
    OwnerPage4p:
      "The exclusive and advanced suite of connected technologies are ready to raise driving engagement to a level never experienced before. Lamborghini Connect gives EVO drivers peace of mind when they are not at the wheel and always up to date functions on board while driving.",
  };
  return (
    <div>
      <ListOwner List={ListOwnerPage} />
    </div>
  );
};

export default Connectivity;
