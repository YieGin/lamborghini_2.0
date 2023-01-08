import "./Styles/Financial.css";
import Image65 from "../../Images/65.png";
import Image73 from "../../Images/73.png";
import Image74 from "../../Images/74.png";
import Image75 from "../../Images/75.png";
import Image76 from "../../Images/76.png";
import Image77 from "../../Images/77.png";
import Image78 from "../../Images/2.jpg";
import Image79 from "../../Images/78.png";
import Image80 from "../../Images/80.png";
import Image81 from "../../Images/81.png";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Financial = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [Pres, setPres] = useState(true);
  const [Pres2, setPres2] = useState(false);
  const [Pres3, setPres3] = useState(false);

  const textScrollVariants = {
    visible: { opacity: 1, right: 0, left: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariantss = {
    visible: { opacity: 1, top: 0, left: 0 },
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

  return (
    <div>
      <div className="Accessories_Page1">
        <>
          <motion.img
            ref={ref}
            variants={textScrollVariants}
            initial="hidden"
            className="Image65"
            animate={controls}
            src={Image74}
          ></motion.img>
          <motion.h1
            ref={ref14}
            variants={textScrollVariants}
            initial="hidden"
            className="Accesori_H1"
            animate={controls14}
          >
            FINANCIAL SERVICES
          </motion.h1>
        </>
      </div>
      <div className="Financial_Page2">
        <div className="Financial_Page2-left">
          <motion.img
            ref={ref11}
            variants={textScrollVariants}
            initial="hidden"
            className="Financial_Page2-left_Image"
            animate={controls11}
            src={Image73}
          ></motion.img>
          <motion.p
            ref={ref11}
            variants={textScrollVariants}
            initial="hidden"
            className="Financial_P"
            animate={controls11}
          >
            Envision yourself driving a technologically advanced, cutting edge
            Lamborghini. Can you feel its strength and power from behind the
            steering wheel? Good. Now consider this. Why only imagine it when,
            thanks to Lamborghini Financial Services, you could actually drive
            off in your very own Lamborghini? Now you can lie back, and enjoy
            your bespoke Lamborghini, thanks to Lamborghini Financial Services
          </motion.p>
        </div>
        <div className="Financial_Page2-right">
          <motion.img
            ref={ref11}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_Page2-right_Image"
            animate={controls11}
            src={Image75}
          ></motion.img>
        </div>
      </div>
      <div className="Financial_Page3">
        <div className="Financial_Page3_Left">
          <motion.img
            ref={ref12}
            variants={textScrollVariantss}
            initial="hidden"
            className="Image76"
            animate={controls12}
            src={Image76}
          ></motion.img>
        </div>
        <div className="Financial_Page3_right">
          <motion.p
            ref={ref12}
            variants={textScrollVariants}
            initial="hidden"
            className="Financial_P-3"
            animate={controls12}
          >
            Lamborghini Financial Services offers flexible leasing and financing
            solutions to provide you with an incredible experience and
            Lamborghini ownership. Whether you prefer to lease or purchase your
            dream car, we understand your needs and will be sure to give you our
            utmost support and to guide you in your new, or pre-owned,
            selection. Realize your dreams by visiting your local Authorized
            Lamborghini Dealer, and let them pave the way for a brand new,
            seamless experience. Be unstoppable. Start your exclusive journey
            with Lamborghini Financial Services.
          </motion.p>
        </div>
      </div>
      <div className="Financial_Page4">
        <div className="Financial_Page4_left">
          <motion.h1
            ref={ref15}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_P"
            animate={controls15}
          >
            IN EUROPE, MIDDLE EAST AND AFRICA YOUR ADVENTURE AWAITS
          </motion.h1>
          <motion.p
            ref={ref15}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_P"
            animate={controls15}
          >
            Now is the perfect time to learn about Lamborghini's latest
            innovations and embark on an adventure with Lamborghini Financial
            Services.
          </motion.p>
          <div className="contenttt">
            <motion.h1
              ref={ref15}
              variants={textScrollVariantss}
              initial="hidden"
              animate={controls15}
            >
              VIEW ALL COUNTRIES
            </motion.h1>
          </div>
        </div>
        <div className="Financial_Page4_right">
          <motion.img
            ref={ref15}
            variants={textScrollVariantss}
            initial="hidden"
            className="Image77"
            animate={controls15}
            src={Image77}
          ></motion.img>
        </div>
      </div>
      <div className="Financial_Page5">
        <motion.img
          ref={ref16}
          variants={textScrollVariantss}
          initial="hidden"
          className="Image78"
          animate={controls16}
          src={Image78}
        ></motion.img>
        <motion.img
          ref={ref16}
          variants={textScrollVariantss}
          initial="hidden"
          className="Image79"
          animate={controls16}
          src={Image79}
        ></motion.img>
      </div>
      <div className="Financial_Page6">
        <motion.img
          ref={ref17}
          variants={textScrollVariantss}
          initial="hidden"
          className="Image80"
          animate={controls17}
          src={Image80}
        ></motion.img>
        <div className="Financial_Page6-right">
          <motion.h1
            ref={ref17}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_P-Left"
            animate={controls17}
          >
            FIND YOUR THRILL IN ASIA PACIFIC
          </motion.h1>
          <motion.p
            ref={ref17}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_P-Left"
            animate={controls17}
          >
            There's a journey ahead of you. Intensify your day and rule the road
            with your Lamborghini. Let Lamborghini Financial Services help you
            on this thrilling adventure.
          </motion.p>
          <ul class="menuuu">
            <li class="li-text">
              <a class="A-text" href="#0">
                <motion.p
                  ref={ref17}
                  variants={textScrollVariantss}
                  initial="hidden"
                  className="Financial_P-Left"
                  animate={controls17}
                >
                  AUSTRALIA
                </motion.p>
              </a>
            </li>
          </ul>
          <ul class="menuuu">
            <li class="li-text">
              <a class="A-text" href="#0">
                <motion.p
                  ref={ref17}
                  variants={textScrollVariantss}
                  initial="hidden"
                  className="Financial_P-Left"
                  animate={controls17}
                >
                  JAPAN
                </motion.p>
              </a>
            </li>
          </ul>
          <ul class="menuuu">
            <li class="li-text">
              <a class="A-text" href="#0">
                <motion.p
                  ref={ref17}
                  variants={textScrollVariantss}
                  initial="hidden"
                  className="Financial_P-Left"
                  animate={controls17}
                >
                  SINGAPORE
                </motion.p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Financial_Page6">
        <div className="Financial_Page7-right">
          <motion.h1
            ref={ref18}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_P-Left-2"
            animate={controls18}
          >
            FULFILL YOUR DREAM IN AMERICA AND CANADA
          </motion.h1>
          <motion.p
            ref={ref18}
            variants={textScrollVariantss}
            initial="hidden"
            className="Financial_P-Left-2"
            animate={controls18}
          >
            Driving a Lamborghini does not have to just be a dream. Unlock new
            possibilities and Lamborghini Financial Services will light up your
            road and make it real.
          </motion.p>
          <ul class="menuuu">
            <li class="li-text">
              <a class="A-text" href="#0">
                <motion.p
                  ref={ref18}
                  variants={textScrollVariantss}
                  initial="hidden"
                  className="Financial_P-Left"
                  animate={controls18}
                >
                  USA
                </motion.p>
              </a>
            </li>
          </ul>
          <ul class="menuuu">
            <li class="li-text">
              <a class="A-text" href="#0">
                <motion.p
                  ref={ref18}
                  variants={textScrollVariantss}
                  initial="hidden"
                  className="Financial_P-Left"
                  animate={controls18}
                >
                  CANADA
                </motion.p>
              </a>
            </li>
          </ul>
        </div>
        <motion.img
          ref={ref18}
          variants={textScrollVariantss}
          initial="hidden"
          className="Image81"
          animate={controls18}
          src={Image81}
        ></motion.img>
      </div>
    </div>
  );
};

export default Financial;
