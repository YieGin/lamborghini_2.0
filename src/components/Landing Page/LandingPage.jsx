import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import "./styles/LandingPage.css";
import { Parallax } from "react-parallax";
import Image2 from "../../Images/2.jpg";
import Image3 from "../../Images/2.png";
import Image4 from "../../Images/3.jpg";
import Image5 from "../../Images/4.jpg";
import Image6 from "../../Images/5.jpg";
import Image7 from "../../Images/7.png";
import Image8 from "../../Images/8.png";
import Image9 from "../../Images/9.jpg";
import Image10 from "../../Images/10.png";
import Image11 from "../../Images/11.png";
import Image12 from "../../Images/12.png";
const LandingPage = () => {
  const parallaxImage1 = {
    bgImageStyle: {
      height: "500px",
      width: "50%",
      position: "absolute",
      right: "0",
    },
  };

  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const Page_1 = useAnimation();
  const [ref1, inPage1] = useInView();

  const Page_2 = useAnimation();
  const [ref2, inPage2] = useInView();

  const Page_3 = useAnimation();
  const [ref3, inPage3] = useInView();

  const Page_4 = useAnimation();
  const [ref4, inPage4] = useInView();

  const Page_5 = useAnimation();
  const [ref5, inPage5] = useInView();

  const Page_6 = useAnimation();
  const [ref6, inPage6] = useInView();

  const Page_7 = useAnimation();
  const [ref7, inPage7] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inPage1) {
      Page_1.start("visible");
    }
  }, [Page_1, inPage1]);

  useEffect(() => {
    if (inPage2) {
      Page_2.start("visible");
    }
  }, [Page_2, inPage2]);

  useEffect(() => {
    if (inPage3) {
      Page_3.start("visible");
    }
  }, [Page_3, inPage3]);

  useEffect(() => {
    if (inPage4) {
      Page_4.start("visible");
    }
  }, [Page_4, inPage4]);

  useEffect(() => {
    if (inPage5) {
      Page_5.start("visible");
    }
  }, [Page_5, inPage5]);

  useEffect(() => {
    if (inPage6) {
      Page_6.start("visible");
    }
  }, [Page_6, inPage6]);

  useEffect(() => {
    if (inPage7) {
      Page_7.start("visible");
    }
  }, [Page_7, inPage7]);

  const parallaxImage2 = {
    bgImageStyle: {
      height: "800px",
      width: "100%",
      position: "absolute",
    },
  };
  const parallaxImage3 = {
    bgImageStyle: {
      height: "600px",
      width: "70%",
      objectFit: "cover",
    },
  };
  return (
    <div className="Main-Page">
      <div className="PageOne">
        <img className="Image2" src={Image2} alt="" />
        <motion.h1
          ref={ref1}
          variants={textScrollVariants}
          initial="hidden"
          className="TIMELESS"
          animate={Page_1}
        >
          IT TAKES TIME TO BECOME TIMELESS
        </motion.h1>
      </div>
      <div className="PageTwo">
        <img className="Image3" src={Image4} alt="" />
        <img className="Image5" src={Image7} alt="" />
        <section className="Hoodies-section">
          <div className="Div-Hoodies">
            <div className="PageOne">
              <img className="Image2" src={Image2} alt="" />
              <motion.div
                ref={ref2}
                variants={textScrollVariants}
                initial="hidden"
                className="TIMELESS1"
                animate={Page_2}
              >
                TAKE ALL YOUR SOULS TO DRIVE
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <div className="PageThree">
        <div className="PageOnee">
          <motion.div
            ref={ref3}
            variants={textScrollVariants}
            initial="hidden"
            className="TIMELESS1"
            animate={Page_3}
          >
            CONFIGURAYOR CREATE YOUR HURACAN
          </motion.div>
          <img className="Image8" src={Image8} alt="" />
        </div>
      </div>
      <div className="PageThree">
        <Parallax {...parallaxImage2} strength={400} bgImage={Image9}>
          <section className="Images-2-section-PageThree">
            <div className="PageOne">
              <img className="Image2" src={Image2} alt="" />
              <motion.div
                ref={ref7}
                variants={textScrollVariants}
                initial="hidden"
                className="TIMELESS2"
                animate={Page_7}
              >
                DEALER ULOCATOR FIND YOUR COUNTRY DEALER
              </motion.div>
            </div>
          </section>
        </Parallax>
      </div>
      <div className="Page5">
        <motion.div
          ref={ref4}
          variants={textScrollVariants}
          initial="hidden"
          className="waviy-PageFoor-Page5"
          animate={Page_4}
        >
          NEW
        </motion.div>
        <motion.div
          ref={ref4}
          variants={textScrollVariants}
          initial="hidden"
          className="waviy-PageFoor-Page5"
          animate={Page_4}
        >
          LAMBORGHINI WORLD
        </motion.div>
        <Parallax {...parallaxImage3} strength={600} bgImage={Image10}>
          <section className="Images-2-section">
            <div class="waviy-Page4"></div>
          </section>
        </Parallax>
      </div>
      <div className="Page6">
        <p className="Date">28 OCTOBER 2022</p>
        <div className="AUTOMOBILI-Box">
          <div className="AUTOMOBILI">
            <h1>
              AUTOMOBILI LAMBORGHINI AT THE 19TH AUTOSTYLE DESIGN COMPETITION
            </h1>
          </div>
          <div>
            <div class="button_container">
              <button class="btn">
                <span>READ MORE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="Automobili-flex">
          <p className="Automobili-text">
            Automobili Lamborghini took part in the 19th edition of Autostyle
            Design Competition, the event promoted by component manufacturer
            Berman S.p.A. that presented the newest products and projects of the
            most highly advanced designers on Italy’s scene.
          </p>
        </div>
        <div className="LAMBORGHINI-2023-Main">
          <div className="Image-Box">
            <img className="Image11" src={Image11} alt="" />
          </div>
          <div className="Image-box-right">
            <div className="Dates">
              <h3 className="Right-animation">26 OCTOBER 2022</h3>
              <div className="Image-text-rowgap">
                <h3 className="Right-animation">MOTORSPORT</h3>
              </div>
              <h2 className="LAMBORGHINI-H1">
                LAMBORGHINI SUPER TROFEO ASIA TO RESTART IN 2023 WITH SIX DOUBLE
                APPOINTMENTS
              </h2>
              <div class="button_container_MOTORSPORT">
                <button class="btn_MOTORSPORT">
                  <span>READ MORE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="LAMBORGHINI-2023-Main">
          <div className="Image-Box">
            <img className="Image11" src={Image12} alt="" />
          </div>
          <div className="Image-box-right">
            <div className="Dates">
              <h3 className="Right-animation">25 OCTOBER 2022</h3>
              <h2 className="LAMBORGHINI-H1">
                CULTI MILANO FOR AUTOMOBILI LAMBORGHINI: THE SECOND SPECIAL
                EDITION IS BORN
              </h2>
              <div class="button_container_MOTORSPORT">
                <button class="btn_MOTORSPORT">
                  <span>READ MORE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="See-All">
        <Link to="./MotorsportNews">
          <a className="Shoping-a-Bigger">
            <span className="Shoping-span">SEE ALL</span>
            <i className="Shoping-i"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
