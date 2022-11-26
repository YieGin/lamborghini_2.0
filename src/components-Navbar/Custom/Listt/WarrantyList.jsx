import "../Styles/Customization.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image84 from "../../../Images/84.png";
const WarrantyList = ({ List }) => {
  const [SvgRight, setSvgRight] = useState(true);
  const [SvgRight2, setSvgRight2] = useState(false);
  const [SvgRight3, setSvgRight3] = useState(false);
  const [SvgRight4, setSvgRight4] = useState(false);
  const [SvgRight5, setSvgRight5] = useState(false);
  const [SvgLeft, setSvgLeft] = useState(true);
  const textScrollVariants = {
    visible: { opacity: 1, right: 0, top: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariantss = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const Page22text = useAnimation();
  const [Page22, inPage22] = useInView();

  const Page23text = useAnimation();
  const [Page23, inPage23] = useInView();

  const Page24text = useAnimation();
  const [Page24, inPage24] = useInView();

  const Page25text = useAnimation();
  const [Page25, inPage25] = useInView();

  const Page26text = useAnimation();
  const [Page26, inPage26] = useInView();

  const Page27text = useAnimation();
  const [Page27, inPage27] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inPage22) {
      Page22text.start("visible");
    }
  }, [Page22text, inPage22]);

  useEffect(() => {
    if (inPage23) {
      Page23text.start("visible");
    }
  }, [Page23text, inPage23]);

  useEffect(() => {
    if (inPage24) {
      Page24text.start("visible");
    }
  }, [Page24text, inPage24]);

  useEffect(() => {
    if (inPage25) {
      Page25text.start("visible");
    }
  }, [Page25text, inPage25]);

  useEffect(() => {
    if (inPage26) {
      Page26text.start("visible");
    }
  }, [Page26text, inPage26]);

  useEffect(() => {
    if (inPage27) {
      Page27text.start("visible");
    }
  }, [Page27text, inPage27]);

  return (
    <div className="ListMain">
      <div className="ListPage1">
        <img className="ListImage1" src={List["heroImage"]}></img>
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="ListText"
          animate={controls}
        >
          {List["heroText"]}
        </motion.div>
      </div>
      <div className="CustomVideo">
        <video
          className="Video3"
          autoPlay
          muted
          loop
          src={List["CustomVideo"]}
        ></video>
      </div>
      <div className="ListPage2">
        <div className="Image-text-Page2">
          <motion.h1
            ref={Page22}
            variants={textScrollVariants}
            initial="hidden"
            className="ListCustomPage2"
            animate={Page22text}
          >
            {List["Page2Text"]}
          </motion.h1>
          <motion.div
            ref={Page22}
            variants={textScrollVariants}
            initial="hidden"
            className="ListPTag"
            animate={Page22text}
          >
            {List["Page2"]}
          </motion.div>
        </div>
        <img className="ListImage2" src={List["Image2"]} alt="" />
      </div>
      <div className="ListPage4">
        <motion.img
          ref={Page23}
          variants={textScrollVariants}
          initial="hidden"
          className="Page4Image5"
          animate={Page23text}
          src={List["Image5"]}
        ></motion.img>
        <div className="Page4Text">
          <motion.h1
            ref={Page23}
            variants={textScrollVariants}
            initial="hidden"
            animate={Page23text}
            className="Extended"
          >
            {List["Page4H1"]}
          </motion.h1>
          <motion.div
            ref={Page23}
            variants={textScrollVariants}
            initial="hidden"
            className="Page4P"
            animate={Page23text}
          >
            {List["Page4P"]}
          </motion.div>
          <motion.p
            ref={Page23}
            variants={textScrollVariants}
            initial="hidden"
            className="ListPTagg"
            animate={Page23text}
          >
            *For information on the characteristics and duration of the specific
            options for each car, please contact Dealers and Service Points
            belonging to the official Lamborghini network. Terms and conditions
            may vary depending on the specific market. ** The service may be
            provided by an insurance provider.
          </motion.p>
        </div>
      </div>
      <div className="WarrancityList_Page4">
        <div className="Browse-div">
          <motion.img
            ref={Page25}
            variants={textScrollVariantss}
            initial="hidden"
            className="Image84"
            animate={Page25text}
            src={Image84}
          ></motion.img>
          <motion.h2
            ref={Page25}
            variants={textScrollVariants}
            initial="hidden"
            className="Browse-h2"
            animate={Page25text}
          >
            LAMBORGHINI AFTER SALES
          </motion.h2>
          <motion.h1
            ref={Page25}
            variants={textScrollVariants}
            initial="hidden"
            className="Browse"
            animate={Page25text}
          >
            BROWSE THE BROCHURE
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default WarrantyList;
