import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/RecallCampaign.css";
import Image102 from "../../Images/102.png";
import Image103 from "../../Images/103.png";
import { useState } from "react";

const RecallCampaign = () => {
  const [setInput, Input] = useState(false);
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariantsleft = {
    visible: { opacity: 1, left: 0 },
    hidden: { opacity: 0 },
  };

  const controls40 = useAnimation();
  const [ref40, inView40] = useInView();

  const controls41 = useAnimation();
  const [ref41, inView41] = useInView();

  const controls42 = useAnimation();
  const [ref42, inView42] = useInView();

  const controls43 = useAnimation();
  const [ref43, inView43] = useInView();

  useEffect(() => {
    if (inView40) {
      controls40.start("visible");
    }
  }, [controls40, inView40]);

  useEffect(() => {
    if (inView41) {
      controls41.start("visible");
    }
  }, [controls41, inView41]);

  useEffect(() => {
    if (inView42) {
      controls42.start("visible");
    }
  }, [controls42, inView42]);

  useEffect(() => {
    if (inView43) {
      controls43.start("visible");
    }
  }, [controls43, inView43]);
  return (
    <div>
      <div className="ListRecall-1">
        <motion.img
          ref={ref40}
          variants={textScrollVariants}
          initial="hidden"
          className="Image102"
          animate={controls40}
          src={Image102}
        ></motion.img>
        <div className="Recall_Text-div">
          <motion.h2
            ref={ref40}
            variants={textScrollVariants}
            initial="hidden"
            className="Recall_Text_1-h2"
            animate={controls40}
          >
            RECALL CAMPAIGN
          </motion.h2>
          <motion.h1
            ref={ref40}
            variants={textScrollVariants}
            initial="hidden"
            className="Recall_Text_1-h1"
            animate={controls40}
          >
            LAMBORGHINI
          </motion.h1>
        </div>
      </div>
      <div className="Recall-2">
        <motion.h1
          ref={ref41}
          variants={textScrollVariants}
          initial="hidden"
          className="Recall_Text_2-h1"
          animate={controls41}
        >
          FIND YOUR CAR
        </motion.h1>
        <div className="Recall-bottom">
          <motion.input
            onClick={() => {
              setInput(true);
            }}
            ref={ref41}
            variants={textScrollVariants}
            initial="hidden"
            className={Input ? "Recall-input" : "Recall-inputttt"}
            type="text"
            placeholder="Type your Lamborghini VIN *"
            animate={controls41}
          ></motion.input>
          <motion.p
            ref={ref41}
            variants={textScrollVariants}
            initial="hidden"
            className="Recall_Text_1-h1"
            animate={controls41}
          >
            THE VEHICLE IDENTIFICATION NUMBER ALLOWS US TO OFFER YOU A PROMPT
            AND PERSONALIZED SERVICE.
          </motion.p>
        </div>
      </div>
      <div className="Recall-3">
        <div className="Recall-left-3">
          <motion.img
            ref={ref42}
            variants={textScrollVariants}
            initial="hidden"
            className="Image103"
            animate={controls42}
            src={Image103}
          ></motion.img>
        </div>
        <div className="Recall-right-3">
          <motion.h1
            ref={ref42}
            variants={textScrollVariants}
            initial="hidden"
            className="Recall_Text_3-h1-"
            animate={controls42}
          >
            RECALL CAMPAIGN
          </motion.h1>
          <motion.p
            ref={ref42}
            variants={textScrollVariants}
            initial="hidden"
            className="Recall_Text_3-h1"
            animate={controls42}
          >
            Lamborghini's responsibility for your safety lasts through the
            years. In fact, we are committed to constantly checking the proper
            operation of the vehicles throughout the entirety of their life
            cycle. The development of new solutions to improve the quality of
            the Lamborghini models on the road allows us to set in motion
            adequate Recall Campaigns whenever necessary. The owners of vehicles
            affected by a Recall Campaign are notified by letter and are asked
            to go to the nearest Lamborghini Service Partner for the checks and
            work.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default RecallCampaign;
