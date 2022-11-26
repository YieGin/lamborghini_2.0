import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/ListOwner.css";

const ListOwner = ({ List }) => {
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
    <div className="ListMainOwner">
      <div className="ListOwner-1">
        <motion.img
          ref={ref40}
          variants={textScrollVariants}
          initial="hidden"
          className="Image85"
          animate={controls40}
          src={List["OwnerImage1"]}
        ></motion.img>
        <div className="Owner_Text-div">
          <motion.h2
            ref={ref40}
            variants={textScrollVariants}
            initial="hidden"
            className="Owner_Text_1-h2"
            animate={controls40}
          >
            {List["OwnerText1"]}
          </motion.h2>
          <motion.h1
            ref={ref40}
            variants={textScrollVariants}
            initial="hidden"
            className="Owner_Text_1-h1"
            animate={controls40}
          >
            {List["OwnerText22"]}
          </motion.h1>
        </div>
      </div>
      <div className="ListOwner-2">
        <div className="ListOwner_Left">
          <motion.h1
            ref={ref41}
            variants={textScrollVariants}
            initial="hidden"
            className="Owner_Text_1"
            animate={controls41}
          >
            {List["OwnerText2"]}
          </motion.h1>
          <motion.p
            ref={ref41}
            variants={textScrollVariants}
            initial="hidden"
            className="Owner_Text_1-p"
            animate={controls41}
          >
            {List["OwnerText3"]}
          </motion.p>
        </div>
        <div className="ListOwner_right">
          <motion.img
            ref={ref41}
            variants={textScrollVariants}
            initial="hidden"
            className="Image86"
            animate={controls41}
            src={List["OwnerImage2"]}
          ></motion.img>
        </div>
      </div>
      <div className="ListOwner-3">
        <div className="ListOwner3-left">
          <motion.img
            ref={ref42}
            variants={textScrollVariantsleft}
            initial="hidden"
            className="Image87"
            animate={controls42}
            src={List["OwnerImage3"]}
          ></motion.img>
        </div>
        <div className="ListOwner3-right">
          <motion.h1
            ref={ref42}
            variants={textScrollVariantsleft}
            initial="hidden"
            className="OwnerTextPage4-h1"
            animate={controls42}
          >
            {List["OwnerTextPage3"]}
          </motion.h1>
          <motion.p
            ref={ref42}
            variants={textScrollVariantsleft}
            initial="hidden"
            className="OwnerTextPage4"
            animate={controls42}
          >
            {List["OwnerTextPage4"]}
          </motion.p>
        </div>
      </div>
      <div className="ListOwner-4">
        <div className="ListOwner-4-Left">
          <motion.img
            ref={ref43}
            variants={textScrollVariantsleft}
            initial="hidden"
            className="Image88"
            animate={controls43}
            src={List["OwnerImage5"]}
          ></motion.img>
        </div>
        <div className="ListOwner-4-Right">
          <motion.img
            ref={ref43}
            variants={textScrollVariantsleft}
            initial="hidden"
            className="Image89"
            animate={controls43}
            src={List["OwnerImage6"]}
          ></motion.img>
          <motion.p
            ref={ref43}
            variants={textScrollVariantsleft}
            initial="hidden"
            className="OwnerTextPage4"
            animate={controls43}
          >
            {List["OwnerPage4p"]}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ListOwner;
