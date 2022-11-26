import "./styles/List.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const List = ({ List }) => {
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

  const Page7text = useAnimation();
  const [Page7, inPage7] = useInView();

  const Page34text = useAnimation();
  const [Page34, inPage34] = useInView();

  const Page35text = useAnimation();
  const [Page35, inPage35] = useInView();

  const Page36text = useAnimation();
  const [Page36, inPage36] = useInView();

  const Page37text = useAnimation();
  const [Page37, inPage37] = useInView();

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
    if (inPage34) {
      Page34text.start("visible");
    }
  }, [Page34text, inPage34]);

  useEffect(() => {
    if (inPage35) {
      Page35text.start("visible");
    }
  }, [Page35text, inPage35]);

  useEffect(() => {
    if (inPage36) {
      Page36text.start("visible");
    }
  }, [Page36text, inPage36]);

  useEffect(() => {
    if (inPage37) {
      Page37text.start("visible");
    }
  }, [Page37text, inPage37]);

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
      <div className="ListPage2">
        <div className="Image-text-Page2">
          <motion.img
            ref={Page2}
            variants={textScrollVariants}
            initial="hidden"
            className="Image17"
            animate={Page2text}
            src={List["Page2Imagetag"]}
          ></motion.img>
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
      <div className="ListPage5">
        {SvgLeft && (
          <svg
            onClick={() => {
              setSvgLeft(true);
              setSvgRight(true);
              setSvgRight2(false);
              setSvgRight3(false);
              setSvgRight4(false);
              setSvgRight5(false);
            }}
            className="Svg_Left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="34"
            height="34"
          >
            <path
              fill-rule="evenodd"
              d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"
            ></path>
          </svg>
        )}

        {SvgRight && (
          <div>
            <motion.img
              ref={Page34}
              variants={textScrollVariants}
              initial="hidden"
              className="Page5Image"
              animate={Page34text}
              src={List["Page5Image"]}
            ></motion.img>
            <svg
              onClick={() => {
                setSvgRight(false);
                setSvgRight2(true);
              }}
              className="SvgList"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </div>
        )}

        {SvgRight2 && (
          <div>
            <motion.img
              ref={Page34}
              variants={textScrollVariants}
              initial="hidden"
              className="Page5Image"
              animate={Page34text}
              src={List["Page5_RightImage"]}
            ></motion.img>
            <svg
              onClick={() => {
                setSvgRight(false);
                setSvgRight2(false);
                setSvgRight3(true);
              }}
              className="SvgList"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </div>
        )}

        {SvgRight3 && (
          <div>
            <motion.video
              ref={Page35}
              variants={textScrollVariants}
              initial="hidden"
              className="Page5Image"
              animate={Page35text}
              autoPlay
              muted
              loop
              src={List["Video1"]}
            ></motion.video>
            <svg
              onClick={() => {
                setSvgRight(false);
                setSvgRight2(false);
                setSvgRight3(false);
                setSvgRight4(true);
              }}
              className="SvgList"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </div>
        )}

        {SvgRight4 && (
          <div>
            <motion.video
              ref={Page36}
              variants={textScrollVariants}
              initial="hidden"
              className="Page5Image"
              animate={Page36text}
              autoPlay
              muted
              loop
              src={List["Video2"]}
            ></motion.video>
            <svg
              onClick={() => {
                setSvgRight(false);
                setSvgRight2(false);
                setSvgRight3(false);
                setSvgRight4(false);
                setSvgRight5(true);
              }}
              className="SvgList"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </div>
        )}

        {SvgRight5 && (
          <div>
            <motion.img
              ref={Page37}
              variants={textScrollVariants}
              initial="hidden"
              className="Page5Image"
              animate={Page37text}
              src={List["Svg_Right_5_Image"]}
            ></motion.img>
            <svg
              onClick={() => {
                setSvgRight(true);
                setSvgRight2(false);
                setSvgRight3(false);
                setSvgRight4(false);
                setSvgRight5(false);
              }}
              className="SvgList"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </div>
        )}
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

export default List;
