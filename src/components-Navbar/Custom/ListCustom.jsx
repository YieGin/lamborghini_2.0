import "./Styles/Customization.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const ListCustom = ({ List }) => {
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

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const Page2text = useAnimation();
  const [Page2, inPage2] = useInView();

  const Page3text = useAnimation();
  const [Page3, inPage3] = useInView();

  const Page4text = useAnimation();
  const [Page4, inPage4] = useInView();

  const Page5text = useAnimation();
  const [Page5, inPage5] = useInView();

  const Page6text = useAnimation();
  const [Page6, inPage6] = useInView();

  const Page7text = useAnimation();
  const [Page7, inPage7] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inPage2) {
      Page2text.start("visible");
    }
  }, [Page2text, inPage2]);

  useEffect(() => {
    if (inPage3) {
      Page3text.start("visible");
    }
  }, [Page3text, inPage3]);

  useEffect(() => {
    if (inPage4) {
      Page4text.start("visible");
    }
  }, [Page4text, inPage4]);

  useEffect(() => {
    if (inPage5) {
      Page5text.start("visible");
    }
  }, [Page5text, inPage5]);

  useEffect(() => {
    if (inPage6) {
      Page6text.start("visible");
    }
  }, [Page6text, inPage6]);

  useEffect(() => {
    if (inPage7) {
      Page7text.start("visible");
    }
  }, [Page7text, inPage7]);

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
            ref={Page2}
            variants={textScrollVariants}
            initial="hidden"
            className="ListCustomPage2"
            animate={Page2text}
          >
            {List["Page2Text"]}
          </motion.h1>
          <motion.div
            ref={Page2}
            variants={textScrollVariants}
            initial="hidden"
            className="ListPTag"
            animate={Page2text}
          >
            {List["Page2"]}
          </motion.div>
        </div>
        <img className="ListImage2" src={List["Image2"]} alt="" />
      </div>
      <div className="ListPage3">
        <motion.img
          ref={Page7}
          variants={textScrollVariants}
          initial="hidden"
          className="ImagePage3"
          animate={Page7text}
          src={List["Image3"]}
        ></motion.img>
        <motion.img
          ref={Page7}
          variants={textScrollVariants}
          initial="hidden"
          className="ImagePage3-4"
          animate={Page7text}
          src={List["Image4"]}
        ></motion.img>
      </div>
      <div className="ListPage4">
        <motion.img
          ref={Page3}
          variants={textScrollVariants}
          initial="hidden"
          className="Page4Image5"
          animate={Page3text}
          src={List["Image5"]}
        ></motion.img>
        <div className="Page4Text">
          <motion.h1
            ref={Page3}
            variants={textScrollVariants}
            initial="hidden"
            animate={Page3text}
          >
            {List["Page4H1"]}
          </motion.h1>
          <motion.div
            ref={Page3}
            variants={textScrollVariants}
            initial="hidden"
            className="Page4P"
            animate={Page3text}
          >
            {List["Page4P"]}
          </motion.div>
        </div>
      </div>
      <div className="ListPage6">
        <div className="ImagePage6_text">
          <figure class="snip1401">
            <img className="ImagePage7" src={List["ImagePage6"]} alt="" />{" "}
            <figcaption className="Figcaption">
              <h3 className="Page6_Text">{List["TextPage6_1"]}</h3>
              <p className="Page6_Text-Bigger">{List["TextPage6_2"]}</p>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </div>
        <div className="ImagePage6_text">
          <figure class="snip1401">
            <img className="ImagePage7" src={List["ImagePage7"]} alt="" />
            <figcaption className="Figcaption">
              <h3 className="Page6_Text">{List["TextPage6_3"]}</h3>
              <p className="Page6_Text-Bigger">{List["TextPage6_4"]}</p>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ListCustom;
