import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/Super-Trofeo.css";
import Image104 from "../../Images/104.png";
import Image105 from "../../Images/105.png";
import Image106 from "../../Images/106.png";
import Image107 from "../../Images/107.png";
import Image108 from "../../Images/108.png";
import Image109 from "../../Images/109.png";
import Image110 from "../../Images/110.png";

const SuperTrofeo = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const textScrollSuper = {
    visible: { opacity: 1, bottom: 0 },
    hidden: { opacity: 0 },
  };
  const textScrollSuperRight = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controlsSuper1 = useAnimation();
  const [refSuper1, inViewSuper1] = useInView();

  const controlsSuper2 = useAnimation();
  const [refSuper2, inViewSuper2] = useInView();

  const controlsSuper3 = useAnimation();
  const [refSuper3, inViewSuper3] = useInView();

  const controlsSuper4 = useAnimation();
  const [refSuper4, inViewSuper4] = useInView();

  const controlsSuper5 = useAnimation();
  const [refSuper5, inViewSuper5] = useInView();

  useEffect(() => {
    if (inViewSuper1) {
      controlsSuper1.start("visible");
    }
  }, [controlsSuper1, inViewSuper1]);

  useEffect(() => {
    if (inViewSuper2) {
      controlsSuper2.start("visible");
    }
  }, [controlsSuper2, inViewSuper2]);

  useEffect(() => {
    if (inViewSuper3) {
      controlsSuper3.start("visible");
    }
  }, [controlsSuper3, inViewSuper3]);

  useEffect(() => {
    if (inViewSuper4) {
      controlsSuper4.start("visible");
    }
  }, [controlsSuper4, inViewSuper4]);

  useEffect(() => {
    if (inViewSuper5) {
      controlsSuper5.start("visible");
    }
  }, [controlsSuper5, inViewSuper5]);

  return (
    <div className="SuperMainPage">
      <div className="Super_Page1">
        <div className="Super_Page1_left">
          <motion.h2
            ref={refSuper1}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper1}
          >
            LAMBORGHINI
          </motion.h2>
          <motion.h1
            ref={refSuper1}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper1}
          >
            SUPER TROFEO
          </motion.h1>
        </div>
        <motion.img
          ref={refSuper1}
          variants={textScrollSuperRight}
          initial="hidden"
          className="Image104"
          animate={controlsSuper1}
          src={Image104}
        ></motion.img>
      </div>
      <div className="Super_Page2">
        <div className="Supr_Page2_left">
          <motion.h1
            ref={refSuper2}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper2}
          >
            SUPER TROFEO EUROPE
          </motion.h1>
          <motion.p
            ref={refSuper2}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper2}
          >
            The longest established Lamborghini championship takes place on the
            famous circuits of Europe in tandem with five of the races in the GT
            World Challenge Europe Powered by AWS. The Lamborghini Super Trofeo
            Europe is one of the most competitive one-make championships in the
            world. Over the years, some of the top GT racers, gentleman drivers
            and motorsport champions have battled it out on iconic tracks such
            as Monza, Silverstone, Paul Ricard and Spa-Francorchamps.{" "}
          </motion.p>
          <ul class="menu-Super">
            <li class="li-text-Super">
              <motion.h1
                ref={refSuper2}
                variants={textScrollSuper}
                initial="hidden"
                className="A-text-Super"
                animate={controlsSuper2}
              >
                EUROPE CHAMPIONSHIP
              </motion.h1>
            </li>
          </ul>
        </div>
        <div className="Supr_Page2_right">
          <motion.img
            ref={refSuper2}
            variants={textScrollSuper}
            initial="hidden"
            className="Image105"
            animate={controlsSuper2}
            src={Image105}
          ></motion.img>
          <motion.img
            ref={refSuper2}
            variants={textScrollSuper}
            initial="hidden"
            className="Image106"
            animate={controlsSuper2}
            src={Image106}
          ></motion.img>
        </div>
      </div>
      <div className="Super_Page3">
        <div className="Super_Page3-left">
          <motion.img
            ref={refSuper3}
            variants={textScrollSuper}
            initial="hidden"
            className="Image107"
            animate={controlsSuper3}
            src={Image107}
          ></motion.img>
          <motion.img
            ref={refSuper3}
            variants={textScrollSuper}
            initial="hidden"
            className="Image108"
            animate={controlsSuper3}
            src={Image108}
          ></motion.img>
        </div>
        <div className="Super_Page3-right">
          <motion.h1
            ref={refSuper3}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper3}
            src={Image108}
          >
            SUPER TROFEO NORTH AMERICA
          </motion.h1>
          <motion.p
            ref={refSuper3}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper3}
            src={Image108}
          >
            From the East Coast to California, the Lamborghini Super Trofeo
            takes in circuits that have gone down in American motorsport
            history. It made its debut in North America in 2013 and from the
            very beginning it attracted professionals and gentleman drivers who
            were keen to put themselves to the test behind the wheel of a racing
            Lamborghini on tracks such as Laguna Seca and Watkins Glen. It has
            provided young drivers with invaluable experience and helped to pave
            their way to success in legendary races such as the 24 Hours of
            Daytona.
          </motion.p>
          <ul class="menu-Super">
            <li class="li-text-Super">
              <motion.p
                ref={refSuper3}
                variants={textScrollSuper}
                initial="hidden"
                className="A-text-Super"
                animate={controlsSuper3}
              >
                NORTH AMERICA CHAMPIONSHIP
              </motion.p>
            </li>
          </ul>
        </div>
      </div>
      <div className="Super_Page4">
        <div className="Supr_Page4_left">
          <motion.h1
            ref={refSuper4}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper4}
          >
            SUPER TROFEO WORLD FINAL
          </motion.h1>
          <motion.p
            ref={refSuper4}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper4}
          >
            The Lamborghini World Final has brought the curtain down on every
            Super Trofeo season since 2013. Every year, the drivers from all of
            the continental championships go to a different circuit and take
            part in two 50-minute Sprint races, with the overall winner being
            crowned as the Lamborghini world champion. As well as being the
            biggest racing weekend of the year, the Lamborghini World Final is a
            genuine motorsport festival that attracts fans and owners from all
            over the world.
          </motion.p>
          <ul class="menu-Super">
            <li class="li-text-Super">
              <motion.p
                ref={refSuper4}
                variants={textScrollSuper}
                initial="hidden"
                className="A-text-Super"
                animate={controlsSuper4}
              >
                SUPER TROFEO WORLD FINAL
              </motion.p>
            </li>
          </ul>
        </div>
        <div className="Supr_Page4_right">
          <motion.img
            ref={refSuper4}
            variants={textScrollSuper}
            initial="hidden"
            className="Image109"
            animate={controlsSuper4}
            src={Image109}
          ></motion.img>
        </div>
      </div>
      <div className="Super_Page5">
        <div className="Super_Page5-left">
          <motion.img
            ref={refSuper5}
            variants={textScrollSuper}
            initial="hidden"
            className="Image110"
            animate={controlsSuper5}
            src={Image110}
          ></motion.img>
        </div>
        <div className="Super_Page5-right">
          <motion.h1
            ref={refSuper5}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper5}
          >
            SUPER TROFEO NORTH AMERICA
          </motion.h1>
          <motion.p
            ref={refSuper5}
            variants={textScrollSuper}
            initial="hidden"
            className="Motion-text"
            animate={controlsSuper5}
          >
            From the East Coast to California, the Lamborghini Super Trofeo
            takes in circuits that have gone down in American motorsport
            history. It made its debut in North America in 2013 and from the
            very beginning it attracted professionals and gentleman drivers who
            were keen to put themselves to the test behind the wheel of a racing
            Lamborghini on tracks such as Laguna Seca and Watkins Glen. It has
            provided young drivers with invaluable experience and helped to pave
            their way to success in legendary races such as the 24 Hours of
            Daytona.
          </motion.p>
          <ul class="menu-Super">
            <li class="li-text-Super">
              <motion.h1
                ref={refSuper5}
                variants={textScrollSuper}
                initial="hidden"
                className="A-text-Super"
                animate={controlsSuper5}
              >
                NORTH AMERICA CHAMPIONSHIP
              </motion.h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuperTrofeo;
