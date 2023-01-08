import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/Drivers.css";
import Image132 from "../../Images/132.png";
import Image133 from "../../Images/133.png";
import Image134 from "../../Images/134.png";
import Image135 from "../../Images/135.png";
import Image136 from "../../Images/136.png";
import Image137 from "../../Images/137.png";
import Image138 from "../../Images/138.png";
import Image139 from "../../Images/139.png";
const Drivers = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariantsDrive = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controlsDrive1 = useAnimation();
  const [refDrive1, inViewDrive1] = useInView();

  useEffect(() => {
    if (inViewDrive1) {
      controlsDrive1.start("visible");
    }
  }, [controlsDrive1, inViewDrive1]);

  const controlsDrive2 = useAnimation();
  const [refDrive2, inViewDrive2] = useInView();

  useEffect(() => {
    if (inViewDrive2) {
      controlsDrive2.start("visible");
    }
  }, [controlsDrive2, inViewDrive2]);

  const controlsDrive3 = useAnimation();
  const [refDrive3, inViewDrive3] = useInView();

  useEffect(() => {
    if (inViewDrive3) {
      controlsDrive3.start("visible");
    }
  }, [controlsDrive3, inViewDrive3]);

  const controlsDrive4 = useAnimation();
  const [refDrive4, inViewDrive4] = useInView();

  useEffect(() => {
    if (inViewDrive4) {
      controlsDrive4.start("visible");
    }
  }, [controlsDrive4, inViewDrive4]);

  return (
    <div>
      <div className="Page1-Motorsport">
        <motion.img
          ref={refDrive1}
          variants={textScrollVariants}
          initial="hidden"
          className="Image132"
          animate={controlsDrive1}
          src={Image132}
        ></motion.img>
        <div className="Page1-Motorsport-left">
          <motion.h2
            ref={refDrive1}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive1}
          >
            SUPER TROFEO
          </motion.h2>
          <motion.h1
            ref={refDrive1}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive1}
          >
            DRIVERS
          </motion.h1>
        </div>
      </div>
      <div className="Page2-Drivers">
        <div className="Page2-Drivers-left">
          <motion.h1
            ref={refDrive2}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive2}
          >
            GT3 FACTORY DRIVERS
          </motion.h1>
          <motion.p
            ref={refDrive2}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive2}
          >
            Only the best GT drivers have a chance of becoming official
            Lamborghini drivers. Factory Drivers have contracts with Automobili
            Lamborghini and they race in the most prestigious GT championships
            in the world. As well as being brand ambassadors, Factory Drivers
            contribute to the development of Automobili Lamborghini cars for
            both racing and the road.
          </motion.p>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refDrive2}
                variants={textScrollVariantsDrive}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsDrive2}
              >
                SC18 ALSTON
              </motion.a>
            </li>
            <motion.div
              ref={refDrive2}
              variants={textScrollVariantsDrive}
              initial="hidden"
              className="Borderbottom"
              animate={controlsDrive2}
            ></motion.div>
          </ul>
        </div>
        <div className="Page2-Drivers-right">
          <motion.img
            ref={refDrive2}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Image133"
            animate={controlsDrive2}
            src={Image133}
          ></motion.img>
          <motion.img
            ref={refDrive2}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Image134"
            animate={controlsDrive2}
            src={Image134}
          ></motion.img>
        </div>
      </div>

      <div className="Page3-Drivers">
        <div className="Page3-Drivers-left">
          <motion.img
            ref={refDrive3}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Image135"
            animate={controlsDrive3}
            src={Image135}
          ></motion.img>
          <motion.img
            ref={refDrive3}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Image136"
            animate={controlsDrive3}
            src={Image136}
          ></motion.img>
        </div>
        <div className="Page3-Drivers-right">
          <motion.h1
            ref={refDrive3}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive3}
          >
            GT3 JUNIOR PROGRAM
          </motion.h1>
          <motion.p
            ref={refDrive3}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive3}
          >
            Every year, the best young drivers who race Lamborghini cars in GT3
            championships are selected to take part in the GT3 Junior Program.
            They are monitored by Lamborghini driving coaches during all of
            their races and at the end of the season the most promising ones are
            invited to take part in a track test that is organized by
            Lamborghini Squadra Corse. As well as their driving skills, their
            attitudes and their physical and mental health are all painstakingly
            assessed. Only the very best stand a chance of earning Factory
            Driver status.
          </motion.p>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refDrive3}
                variants={textScrollVariantsDrive}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsDrive3}
              >
                LINE UP
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
        </div>
      </div>

      <div className="Page4-Drivers">
        <div className="Page4-Drivers-left">
          <motion.h1
            ref={refDrive4}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive4}
          >
            YOUNG DRIVERS PROGRAM
          </motion.h1>
          <motion.p
            ref={refDrive4}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Drive-top"
            animate={controlsDrive4}
          >
            The Young Drivers Program is for the most promising drivers aged
            under 26 in the Lamborghini Super Trofeo continental championships.
            Lamborghini Squadra Corse driving coaches analyze the performances
            of the Young Drivers during every stage of the Lamborghini Super
            Trofeo. The ones that stand out the most during the season are
            invited to take part in a track test that is organized by
            Lamborghini Squadra Corse. As well as their driving skills, their
            attitudes and their physical and mental health are all painstakingly
            assessed. The best driver is given the opportunity to race in GT3
            cars the following season with support from Lamborghini Squadra
            Corse and embark on a career as a professional driver.
          </motion.p>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refDrive4}
                variants={textScrollVariantsDrive}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsDrive4}
              >
                LINE UP
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
        </div>
        <div className="Page4-Drivers-right">
          <motion.img
            ref={refDrive4}
            variants={textScrollVariantsDrive}
            initial="hidden"
            className="Image137"
            animate={controlsDrive4}
            src={Image137}
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
