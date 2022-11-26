import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/Motorsport.css";
import Image147 from "../../Images/147.png";
import Image148 from "../../Images/148.png";
import Image149 from "../../Images/149.png";
import Image150 from "../../Images/150.png";
import Image151 from "../../Images/151.png";

const Experience = () => {
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
          src={Image147}
        ></motion.img>
        <div className="Page1-Motorsport-left">
          <motion.h2
            ref={refMoto1}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto1}
          >
            LAMBORGHINI
          </motion.h2>
          <motion.h1
            ref={refMoto1}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto1}
          >
            EXPERIENCE
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
            CORSO PILOTA LAMBORGHINI
          </motion.h1>
          <motion.p
            ref={refMoto2}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto2}
          >
            Is the official Lamborghini Squadra Corse driving course which
            allows drivers to access Super Trofeo competitions. As well as an
            intensive driving program on the Huracán Super Trofeo Evo, the
            course also includes classroom time dedicated to the technique and
            theoretical foundations of track driving. At the end of the course,
            participants will be able to apply for a racing license to
            participate in Lamborghini Super Trofeo race weekends.
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
                DISCOVER MORE
              </motion.a>
            </li>
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
            src={Image148}
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
          src={Image149}
        ></motion.img>
        <motion.img
          ref={refMoto3}
          variants={Ts}
          initial="hidden"
          className="Image129"
          animate={controlsMoto3}
          src={Image150}
        ></motion.img>
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
            VIP PROGRAM
          </motion.h1>
          <motion.p
            ref={refMoto5}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsMoto5}
          >
            Is the gateway to the exclusive Lamborghini Hospitality present at
            all Super Trofeo weekends. The Lamborghini VIP Program allows you to
            experience a Super Trofeo weekend in full Lamborghini style. Garage
            Tours, Hot Laps and Grid Walks are just some of the activities which
            will make the experience unforgettable.
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
                DISCOVER MORE
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
            src={Image151}
          ></motion.img>
        </div>
      </div>
    </>
  );
};

export default Experience;
