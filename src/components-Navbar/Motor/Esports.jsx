import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/Esports.css";
import Video4 from "../../Video/4.mp4";
import Image152 from "../../Images/152.png";
import Image153 from "../../Images/153.png";
import Image154 from "../../Images/154.png";
import Image155 from "../../Images/155.png";
import Image156 from "../../Images/156.png";

const Esports = () => {
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

  const controlsEspo2 = useAnimation();
  const [refEspo2, inViewEspo2] = useInView();

  const controlsEspo3 = useAnimation();
  const [refEspo3, inViewEspo3] = useInView();

  const controlsEspo4 = useAnimation();
  const [refEspo4, inViewEspo4] = useInView();

  const controlsEspo5 = useAnimation();
  const [refEspo5, inViewEspo5] = useInView();

  useEffect(() => {
    if (inViewMoto1) {
      controlsMoto1.start("visible");
    }
  }, [controlsMoto1, inViewMoto1]);

  useEffect(() => {
    if (inViewEspo2) {
      controlsEspo2.start("visible");
    }
  }, [controlsEspo2, inViewEspo2]);

  useEffect(() => {
    if (inViewEspo3) {
      controlsEspo3.start("visible");
    }
  }, [controlsEspo3, inViewEspo3]);

  useEffect(() => {
    if (inViewEspo4) {
      controlsEspo4.start("visible");
    }
  }, [controlsEspo4, inViewEspo4]);

  useEffect(() => {
    if (inViewEspo5) {
      controlsEspo5.start("visible");
    }
  }, [controlsEspo5, inViewEspo5]);

  return (
    <div>
      <div className="Page1-Motorsport">
        <motion.img
          ref={refMoto1}
          variants={Tss}
          initial="hidden"
          className="Image126"
          animate={controlsMoto1}
          src={Image152}
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
      <div className="Page2-Esports">
        <video className="Video4" autoPlay muted loop src={Video4}></video>
      </div>
      <div className="Page3-Esports">
        <motion.img
          ref={refEspo2}
          variants={Ts}
          initial="hidden"
          className="Image153"
          animate={controlsEspo2}
          src={Image153}
        ></motion.img>
        <div className="Page3-Esports-right">
          <motion.h1
            ref={refEspo2}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsEspo2}
          >
            THE REAL RACE
          </motion.h1>
          <motion.p
            ref={refEspo2}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsEspo2}
          >
            The racing competition where the real and virtual worlds collide.
            Lamborghini invites you to drive in The Real Race, a global esports
            competition on Assetto Corsa Competizione. The Real Race returns
            with an updated format, designed to be even closer to the community
            and the players. This year the competition will take place on a
            global level to allow all drivers to qualify through 3 different
            regional rankings.
          </motion.p>

          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refEspo2}
                variants={Ts}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsEspo2}
              >
                DISCOVER MORE
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refEspo2}
                variants={Ts}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsEspo2}
              >
                SCHEDULE
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
        </div>
      </div>
      <div className="Page4-Esports">
        <div className="Page4-Esports-left">
          <motion.h1
            ref={refEspo3}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsEspo3}
          >
            PRIZE
          </motion.h1>
          <motion.p
            ref={refEspo3}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsEspo3}
          >
            The winners will now have the possibility to enter the official
            Automobili Lamborghini Esports team, as well as enjoy a slice of the
            € 15,000 prize pool, which will be divided among the best 6 sim
            drivers in the final ranking of each region.
          </motion.p>
        </div>
        <motion.img
          ref={refEspo3}
          variants={Ts}
          initial="hidden"
          className="Image154"
          animate={controlsEspo3}
          src={Image154}
        ></motion.img>
      </div>
      <div className="Page3-Esports">
        <motion.img
          ref={refEspo4}
          variants={Ts}
          initial="hidden"
          className="Image153"
          animate={controlsEspo4}
          src={Image155}
        ></motion.img>
        <div className="Page3-Esports-right">
          <motion.h1
            ref={refEspo4}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsEspo4}
          >
            ESPORTS TEAM
          </motion.h1>
          <motion.p
            ref={refEspo4}
            variants={Ts}
            initial="hidden"
            className="Drive-top"
            animate={controlsEspo4}
          >
            Sometimes dreams come true. Thanks to The Real Race, Jordan
            Sherratt, the winner of the 2021 edition, became the first official
            driver of the Automobili Lamborghini esports team. Together with his
            new teammates, Gianfranco Giglioli and Giorgio Simonini, he will
            compete against the best drivers from all over the world in official
            competitions to reach the pinnacle of sim racing. Speed, Courage,
            and Determination have been rewarded proving that anything is
            possible.
          </motion.p>

          <ul class="menu-Motorsport">
            <li class="li-text-Motorsport">
              <motion.a
                ref={refEspo4}
                variants={Ts}
                initial="hidden"
                className="A-text-Motorsport"
                animate={controlsEspo4}
              >
                DISCOVER MORE
              </motion.a>
            </li>
            <div className="Borderbottom"></div>
          </ul>
        </div>
      </div>
      <div className="Page5-Esports">
        <motion.img
          ref={refEspo5}
          variants={Ts}
          initial="hidden"
          className="Image156"
          animate={controlsEspo5}
          src={Image156}
        ></motion.img>
      </div>
    </div>
  );
};

export default Esports;
