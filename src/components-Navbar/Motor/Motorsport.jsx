import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/Motorsport.css";
import Image126 from "../../Images/126.png";
import Image127 from "../../Images/127.png";
import Image128 from "../../Images/128.png";
import Image129 from "../../Images/129.png";
import Image130 from "../../Images/130.png";
import Image131 from "../../Images/131.png";

const Motorsport = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Ts = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const Tss = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controlsMoto1 = useAnimation();
  const [refMoto1, inViewMoto1] = useInView();

  const controlsMoto2 = useAnimation();
  const [refMoto2, inViewMoto2] = useInView();

  const controlsMoto3 = useAnimation();
  const [refMoto3, inViewMoto3] = useInView();

  const controlsMoto4 = useAnimation();
  const [refMoto4, inViewMoto4] = useInView();

  const controlsMoto5 = useAnimation();
  const [refMoto5, inViewMoto5] = useInView();

  useEffect(() => {
    if (inViewMoto1) {
      controlsMoto1.start("visible");
    }
  }, [controlsMoto1, inViewMoto1]);

  useEffect(() => {
    if (inViewMoto2) {
      controlsMoto2.start("visible");
    }
  }, [controlsMoto2, inViewMoto2]);

  useEffect(() => {
    if (inViewMoto3) {
      controlsMoto3.start("visible");
    }
  }, [controlsMoto3, inViewMoto3]);

  useEffect(() => {
    if (inViewMoto4) {
      controlsMoto4.start("visible");
    }
  }, [controlsMoto4, inViewMoto4]);

  useEffect(() => {
    if (inViewMoto5) {
      controlsMoto5.start("visible");
    }
  }, [controlsMoto5, inViewMoto5]);

  return (
    <>
      <div className="Page1-Motorsport">
        <motion.img
          ref={refMoto1}
          variants={Tss}
          initial="hidden"
          className="Image126"
          animate={controlsMoto1}
          src={Image126}
        ></motion.img>
        <div className="Page1-Motorsport-left">
          <motion.h2
            ref={refMoto1}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto1}
          >
            MOTORSPORT
          </motion.h2>
          <motion.h1
            ref={refMoto1}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto1}
          >
            MODELS
          </motion.h1>
        </div>
      </div>
      <div className="Page2-Motorsport">
        <div className="Page2-Motorsport-left">
          <motion.h1
            ref={refMoto2}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto2}
          >
            RACE CARS
          </motion.h1>
          <motion.p
            ref={refMoto2}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto2}
          >
            The race cars that compete in championships all over the world are
            designed and produced in-house by Squadra Corse. Lamborghini has
            total control of all engineering and production processes, so it can
            provide its motorsport customers with vehicles whose superior
            quality has been underlined by countless victories across the globe.
          </motion.p>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refMoto2}
                variants={Ts}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsMoto2}
              >
                HURACÁN SUPER TROFEO EVO2
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
          <ul class="menu-Motorsport">
            <motion.p
              ref={refMoto2}
              variants={Ts}
              initial="hidden"
              className="A-text-Motorsport"
              animate={controlsMoto2}
            >
              HURACÁN GT3 EVO2
            </motion.p>
            <div className="Borderbottom"></div>
          </ul>
        </div>
        <div className="Page2-Motorsport-right">
          <motion.img
            ref={refMoto3}
            variants={Ts}
            initial="hidden"
            className="Image127"
            animate={controlsMoto3}
            src={Image127}
          ></motion.img>
        </div>
      </div>
      <div className="Page3-Motorsport">
        <motion.img
          ref={refMoto3}
          variants={Ts}
          initial="hidden"
          className="Image128"
          animate={controlsMoto3}
          src={Image128}
        ></motion.img>
        <motion.img
          ref={refMoto3}
          variants={Ts}
          initial="hidden"
          className="Image129"
          animate={controlsMoto3}
          src={Image129}
        ></motion.img>
      </div>
      <div className="Page4-Motorsport">
        <div className="Page4-Motorsport-right">
          <motion.img
            ref={refMoto4}
            variants={Ts}
            initial="hidden"
            className="Image130"
            animate={controlsMoto4}
            src={Image130}
          ></motion.img>
        </div>
        <div className="Page4-Motorsport-left">
          <motion.h1
            ref={refMoto4}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto4}
          >
            ONE OFFS
          </motion.h1>
          <motion.p
            ref={refMoto4}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto4}
          >
            Squadra Corse offers its motorsport customers the opportunity to
            develop special, bespoke track-oriented designs. Thanks to its
            racing experience, Lamborghini Squadra Corse can make vehicles to
            measure, catering to its customers’ needs.
          </motion.p>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refMoto4}
                variants={Ts}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsMoto4}
              >
                SC18 ALSTON
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
          <ul class="menu-Motorsport">
            <motion.p
              ref={refMoto4}
              variants={Ts}
              initial="hidden"
              className="A-text-Motorsport"
              animate={controlsMoto4}
            >
              SC20
            </motion.p>
            <div className="Borderbottom"></div>
          </ul>
        </div>
      </div>
      <div className="Page5-Motorsport">
        <div className="Page5-Motorsport-left">
          <motion.h1
            ref={refMoto5}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto5}
          >
            LIMITED SERIES
          </motion.h1>
          <motion.p
            ref={refMoto5}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto5}
          >
            Essenza SCV12 represents the purest track driving experience that
            our brand can offer. It is equipped with the most powerful V12
            naturally aspirated engine ever developed by Lamborghini, combined
            with aerodynamics inspired by racing prototypes and innovative
            technical solutions. This car is the perfect combination of our
            tradition and what we imagine for the future.
          </motion.p>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refMoto5}
                variants={Ts}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsMoto5}
              >
                ESSENZA SCV12
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
        </div>
        <div className="Page5-Motorsport-right">
          <motion.img
            ref={refMoto5}
            variants={Ts}
            initial="hidden"
            className="Image131"
            animate={controlsMoto5}
            src={Image131}
          ></motion.img>
        </div>
      </div>
    </>
  );
};

export default Motorsport;
