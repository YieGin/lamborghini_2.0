import "./Styles/Accessories.css";
import Image65 from "../../Images/65.png";
import Image66 from "../../Images/66.png";
import Image67 from "../../Images/67.png";
import Image68 from "../../Images/68.png";
import Image69 from "../../Images/69.png";
import Image70 from "../../Images/70.png";
import Image71 from "../../Images/71.png";
import Image72 from "../../Images/72.png";

import { useState } from "react";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Accessories = () => {
  const [Pres, setPres] = useState(true);
  const [Pres2, setPres2] = useState(false);
  const [Pres3, setPres3] = useState(false);

  const textScrollVariants = {
    visible: { opacity: 1, right: 0, left: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const controls11 = useAnimation();
  const [ref11, inView11] = useInView();

  const controls12 = useAnimation();
  const [ref12, inView12] = useInView();

  const controls13 = useAnimation();
  const [ref13, inView13] = useInView();

  const controls14 = useAnimation();
  const [ref14, inView14] = useInView();

  const controls15 = useAnimation();
  const [ref15, inView15] = useInView();

  const controls16 = useAnimation();
  const [ref16, inView16] = useInView();

  const controls17 = useAnimation();
  const [ref17, inView17] = useInView();

  const controls18 = useAnimation();
  const [ref18, inView18] = useInView();

  const controls19 = useAnimation();
  const [ref19, inView19] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView11) {
      controls11.start("visible");
    }
  }, [controls11, inView11]);

  useEffect(() => {
    if (inView12) {
      controls12.start("visible");
    }
  }, [controls12, inView12]);

  useEffect(() => {
    if (inView13) {
      controls13.start("visible");
    }
  }, [controls13, inView13]);

  useEffect(() => {
    if (inView14) {
      controls14.start("visible");
    }
  }, [controls14, inView14]);

  useEffect(() => {
    if (inView15) {
      controls15.start("visible");
    }
  }, [controls15, inView15]);

  useEffect(() => {
    if (inView16) {
      controls16.start("visible");
    }
  }, [controls16, inView16]);

  useEffect(() => {
    if (inView17) {
      controls17.start("visible");
    }
  }, [controls17, inView17]);

  useEffect(() => {
    if (inView18) {
      controls18.start("visible");
    }
  }, [controls18, inView18]);

  useEffect(() => {
    if (inView19) {
      controls19.start("visible");
    }
  }, [controls19, inView19]);

  return (
    <div>
      <div className="Accessories_Page1">
        {Pres && (
          <>
            <motion.img
              ref={ref}
              variants={textScrollVariants}
              initial="hidden"
              className="Image65"
              animate={controls}
              src={Image65}
            ></motion.img>
            <motion.h1
              ref={ref14}
              variants={textScrollVariants}
              initial="hidden"
              className="Accesori_H1"
              animate={controls14}
            >
              ACCESSORI ORIGINALI
            </motion.h1>
            <svg
              onClick={() => {
                setPres(false);
                setPres2(true);
              }}
              className="Svg_Accessories"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
            >
              <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>
            </svg>
          </>
        )}
        {Pres2 && (
          <>
            <motion.img
              ref={ref11}
              variants={textScrollVariants}
              initial="hidden"
              className="Image65"
              animate={controls11}
              src={Image66}
            ></motion.img>
            <motion.h1
              ref={ref13}
              variants={textScrollVariants}
              initial="hidden"
              className="Accesori_H1"
              animate={controls13}
            >
              ACCESSORI ORIGINALI
            </motion.h1>
            <svg
              onClick={() => {
                setPres(true);
                setPres2(false);
                setPres3(false);
              }}
              className="Svg_Accessories-Left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60"
              height="60"
            >
              <path d="M8.854 11.646l5.792-5.792a.5.5 0 01.854.353v11.586a.5.5 0 01-.854.353l-5.792-5.792a.5.5 0 010-.708z"></path>
            </svg>
            <svg
              onClick={() => {
                setPres(false);
                setPres2(false);
                setPres3(true);
              }}
              className="Svg_Accessories"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
            >
              <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>
            </svg>
          </>
        )}
        {Pres3 && (
          <>
            <motion.img
              ref={ref12}
              variants={textScrollVariants}
              initial="hidden"
              className="Image65"
              animate={controls12}
              src={Image67}
            ></motion.img>
            <motion.h1
              ref={ref14}
              variants={textScrollVariants}
              initial="hidden"
              className="Accesori_H1"
              animate={controls14}
            >
              ACCESSORI ORIGINALI
            </motion.h1>
            <svg
              onClick={() => {
                setPres(false);
                setPres2(false);
                setPres3(true);
              }}
              className="Svg_Accessories"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
            >
              <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>
            </svg>
            <svg
              onClick={() => {
                setPres(false);
                setPres2(true);
                setPres3(false);
              }}
              className="Svg_Accessories-Left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60"
              height="60"
            >
              <path d="M8.854 11.646l5.792-5.792a.5.5 0 01.854.353v11.586a.5.5 0 01-.854.353l-5.792-5.792a.5.5 0 010-.708z"></path>
            </svg>
          </>
        )}
      </div>
      <div className="Accessories_Page2">
        <motion.img
          ref={ref15}
          variants={textScrollVariants}
          initial="hidden"
          className="Image68"
          animate={controls15}
          src={Image68}
        ></motion.img>
        <div className="Accessories_Page2-Right">
          <motion.h1
            ref={ref15}
            variants={textScrollVariants}
            initial="hidden"
            className="Customize_Your_style"
            animate={controls15}
          >
            CUSTOMIZE YOUR STYLE
          </motion.h1>
          <motion.h3
            ref={ref15}
            variants={textScrollVariants}
            initial="hidden"
            className="Accessories_H3-right"
            animate={controls15}
          >
            The full Accessori Originali range combines style with functionality
            to increase the value of your car by adding an exclusive touch.
            Available for all models, the solutions guaranteed by Automobili
            Lamborghini are designed to meet all your customization needs. With
            specific accessories for interiors and exteriors, not to mention
            those for care and safety, you will be free to express an
            unparalleled style: your own.
          </motion.h3>
        </div>
      </div>
      <div className="Accessories_Page3">
        <div class="waviy">
          <motion.h1
            ref={ref16}
            variants={textScrollVariants}
            initial="hidden"
            animate={controls16}
            className="FEATURED-ACCESSORIES"
          >
            FEATURED ACCESSORIES
          </motion.h1>
        </div>

        <div className="Accessories_Page3_Image">
          <div className="Accessories_Page3_Image1">
            <motion.img
              ref={ref19}
              variants={textScrollVariants}
              initial="hidden"
              className="Image69"
              animate={controls19}
              src={Image69}
            ></motion.img>
            <motion.p
              ref={ref19}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls19}
              className="Bike_Carpier"
            >
              URUS - TRAVELLING
            </motion.p>
            <motion.h2
              ref={ref19}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls19}
              className="Bike_Carpier"
            >
              BIKE CARPIER
            </motion.h2>
            <motion.p
              ref={ref19}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls19}
              className="Accessories_Page3_Image1_text"
            >
              The Accessori Originali range offers the finest, yet sporty travel
              pack to accompany you, whether you are planning a quick weekend
              getaway or a longer adventure.Drive in extra comfort by equipping
              your Urus with the highest quality components and materials both
              you and your vehicle deserve, and wave goodbye to travel-related
              burden.
            </motion.p>
            <div class="button_container">
              <button class="btn">
                <span>Find out more!</span>
              </button>
            </div>
          </div>
          <div className="Accessories_Page3_Image1">
            <motion.img
              ref={ref16}
              variants={textScrollVariants}
              initial="hidden"
              className="Image69"
              animate={controls16}
              src={Image70}
            ></motion.img>
            <motion.p
              ref={ref16}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls16}
              className="Bike_Carpier"
            >
              HURACAN - SPORT
            </motion.p>
            <motion.h2
              ref={ref16}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls16}
              className="Bike_Carpier"
            >
              TITANIUM EXHAUST
            </motion.h2>
            <motion.p
              ref={ref16}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls16}
              className="Accessories_Page3_Image1_text"
            >
              The new titanium exhaust for Huracan STO is an extremely advanced
              component that doesn’t go unnoticed. Made from lightweight
              titanium of the highest quality.
            </motion.p>
            <div class="button_container">
              <button class="btn">
                <span>Find out more!</span>
              </button>
            </div>
          </div>
          <div className="Accessories_Page3_Image1">
            <motion.img
              ref={ref17}
              variants={textScrollVariants}
              initial="hidden"
              className="Image69"
              animate={controls17}
              src={Image71}
            ></motion.img>
            <motion.p
              ref={ref17}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls17}
              className="Bike_Carpier"
            >
              AVENTADOR - EXTERIOR
            </motion.p>
            <motion.h2
              ref={ref17}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls17}
              className="Bike_Carpier"
            >
              X-FRAME IN CARBON FIBER
            </motion.h2>
            <motion.p
              ref={ref17}
              variants={textScrollVariants}
              initial="hidden"
              animate={controls17}
              className="Accessories_Page3_Image1_text"
            >
              Together with the complete set of engine bay shields and the
              T-Engine cover, the X-Frame support helps adds that finishing
              touch to your engine compartment.
            </motion.p>
            <div class="button_container">
              <button class="btn">
                <span>Find out more!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Accessories_Page4">
        <motion.img
          ref={ref18}
          variants={textScrollVariants}
          initial="hidden"
          animate={controls18}
          className="Image72"
          src={Image72}
        ></motion.img>
        <motion.h1
          ref={ref18}
          variants={textScrollVariants}
          initial="hidden"
          className="Accesori_H1"
          animate={controls18}
        >
          MAKE AN APPOINTMENT
        </motion.h1>
      </div>
    </div>
  );
};

export default Accessories;
