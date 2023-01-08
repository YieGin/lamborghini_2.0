import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/GT3.css";
import GT3List from "./GT3List";
import Image111 from "../../Images/111.png";
import Image112 from "../../Images/112.png";
import Image113 from "../../Images/113.png";
import Image114 from "../../Images/114.png";
import Image115 from "../../Images/115.png";
import Image116 from "../../Images/116.png";
import Image117 from "../../Images/117.png";
import Image118 from "../../Images/118.png";
import Image119 from "../../Images/119.png";
import Image120 from "../../Images/120.png";
import Image121 from "../../Images/121.png";
import Image122 from "../../Images/122.png";
import Image123 from "../../Images/123.png";
import Image124 from "../../Images/124.png";
import Image125 from "../../Images/125.png";
const GT3 = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const textScrollVariantsGt = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controlsGt1 = useAnimation();
  const [refGt1, inViewGt1] = useInView();

  const controlsGt2 = useAnimation();
  const [refGt2, inViewGt2] = useInView();

  const controlsGt3 = useAnimation();
  const [refGt3, inViewGt3] = useInView();

  const controlsGt4 = useAnimation();
  const [refGt4, inViewGt4] = useInView();

  useEffect(() => {
    if (inViewGt1) {
      controlsGt1.start("visible");
    }
  }, [controlsGt1, inViewGt1]);

  useEffect(() => {
    if (inViewGt2) {
      controlsGt2.start("visible");
    }
  }, [controlsGt2, inViewGt2]);

  useEffect(() => {
    if (inViewGt3) {
      controlsGt3.start("visible");
    }
  }, [controlsGt3, inViewGt3]);

  useEffect(() => {
    if (inViewGt4) {
      controlsGt4.start("visible");
    }
  }, [controlsGt4, inViewGt4]);

  const GttList = [
    ["2021", "Drivers", "BARWELL MOTORSPORT", "D. LIND - L. MACHITSKI"],
    ["2021", "Drivers", "", "BARWELL MOTORSPORT"],
    ["2017", "Drivers", "", "BARWELL MOTORSPORT"],
  ];
  const GttList2 = [
    ["2021", "Drivers", "VSR RACING", "VSR RACING"],
    ["2021", "Team", "", "VSR RACING"],
    ["2019", "Team", "", "EMIL FREY RACING"],
    ["2029", "Drivers", "EMIL FREY RACING", "G. ALTOÈ - A. COSTA"],
    ["2029", "Drivers - (Pro/Am", "", "VSR RACING"],
    ["2018", "Team", "", "IMPERIALE RACING"],
    ["2017", "Drivers", "", "IMPERIALE RACING"],
    ["2017", "Team", "", "IMPERIALE RACING"],
    ["2016", "Drivers", "LAZARUS RACING", "F. CRESTANI - T. BIAGI"],
  ];
  const GttList3 = [
    ["2021", "Drivers", "K - PAX RACING", "A. CALDARELLI - J. PEPPER"],
    ["2021", "Team", "", "K - PAX RACING"],
  ];
  const GttList4 = [
    [
      "2019",
      "Drivers - Sprint Cup",
      "ORANGE 1 RACING BY FFF RACING",
      "A. CALDARELLI - M. MAPELLI",
    ],
    [
      "2019",
      "Drivers",
      "ORANGE 1 RACING BY FFF RACING",
      "A. CALDARELLI - M. MAPELLI",
    ],
    ["2019", "Team - Sprint Cup (Pro/Am)", "", "ORANGE 1 RACING BY FFF RACING"],
    [
      "2019",
      "Drivers - Sprint Cup (Pro/Am)",
      "ORANGE 1 RACING BY FFF RACING",
      "P. KEEN - H. HAMAGUCHI",
    ],
    ["2019", "Team", "", "ORANGE 1 RACING BY FFF RACING"],
    ["2019", "Team - Endurance Cup", "", "ORANGE 1 RACING BY FFF RACING"],
    [
      "2019",
      "Drivers - Endurance Cup",
      "ORANGE 1 RACING BY FFF RACING",
      "A. CALDARELLI - M. MAPELLI",
    ],
    ["2019", "Team - (Am)", "", "BARWELL MOTORSPORT"],
    ["2019", "Drivers - Endurance Cup (Am)", "", "BARWELL MOTORSPORT"],
  ];
  const GttList5 = [
    ["2019", "Manufacturers", "", "LAMBORGHINI"],
    ["2018", "Drivers", "PAUL MILLER RACING", "M. SNOW - B. SELLERS"],
    ["2018", "Manufacturers", "", "LAMBORGHINI"],
    ["2018", "Team", "", "PAUL MILLER RACING"],
  ];
  const GttList6 = [
    ["2018", "Team", "", "ANTONELLI MOTORSPORT"],
    ["2018", "Manufacturers", "", "LAMBORGHINI"],
    ["2018", "Drivers", "ANTONELLI MOTORSPORT", "G. ALTOÈ - D. ZAMPIERI"],
    ["2017", "Drivers", "OMBRA RACING", "M. BERETTA - A. FRASSINETI"],
    ["2017", "Team", "", "OMBRA RACING"],
  ];
  const GttList7 = [
    ["2018", "Team - (Am)", "", "BARWELL MOTORSPORT"],
    [
      "2018",
      "Drivers - (Am)",
      "BARWELL MOTORSPORT",
      "A. AMSTUTZ - L. MACHITSKI",
    ],
    ["2018", "Team - Endurance Cup", "", "BARWELL MOTORSPORT"],
    [
      "2017",
      "Team - Endurance Cup (Am)",
      "BARWELL MOTORSPORT",
      "A. AMSTUTZ - L. MACHINSKI",
    ],
    ["2017", "Drivers", "GRASSER RACING", "M. BORTOLOTTI - C. ENGELHART"],
    [
      "2017",
      "Drivers - Endurance Cup",
      "GRASSER RACING",
      "M. BORTOLOTTI - C. ENGELHART - A. CALDARELLI",
    ],
    ["2017", "Team", "", "GRASSER RACING"],
    [
      "2017",
      "Drivers - Sprint (Silver Cup)",
      "GRASSER RACING",
      "M. BERETTA - L. STOLTZ",
    ],
  ];
  const GttList8 = [
    ["2017", "Team - (Am)", "EBIMOTORS", "F. BABINI - E. BUSNELLI"],
    ["2017", "Drivers - (Am)", "", "EBIMOTORS"],
  ];
  const GttList9 = [
    ["2016", "Team - (Am)", "FFF RACING", "A. AMICI - E. LIBERATI"],
  ];
  return (
    <div className="Gt3_Main">
      <div className="Page1-Gt">
        <motion.img
          ref={refGt1}
          variants={textScrollVariants}
          initial="hidden"
          className="Image111"
          animate={controlsGt1}
          src={Image111}
        ></motion.img>
        <div className="Page1-gt-left">
          <motion.h3
            ref={refGt1}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Gt3-top"
            animate={controlsGt1}
          >
            GT3
          </motion.h3>
          <motion.h1
            ref={refGt1}
            variants={textScrollVariantsGt}
            initial="hidden"
            animate={controlsGt1}
            className="Gt3-top"
          >
            CUSTOMER RACING
          </motion.h1>
        </div>
      </div>
      <h2 className="NewsGt3">GT3 NEWS</h2>
      <div className="Page2-Gt">
        <div className="Gt3-Box">
          <motion.img
            ref={refGt2}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Image112"
            animate={controlsGt2}
            src={Image112}
          ></motion.img>
          <p>6 NOVEMBER 2022</p>
          <h1 className="Gt3-box-h1">
            LAMBORGHINI SUPER TROFEO: NELSON PIQUET CROWNED GRAND FINALS WINNER
            IN PORTIMÃO
          </h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
        <div className="Gt3-Box">
          <motion.img
            ref={refGt2}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Image112"
            animate={controlsGt2}
            src={Image114}
          ></motion.img>
          <p>5 NOVEMBER 2022</p>
          <h1 className="Gt3-box-h1">
            LAMBORGHINI AND IRON LYNX JOIN FORCES FOR LMDH PROGRAMME IN FIA WEC
            AND IMSA FROM 2024
          </h1>
          <div className="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
        <div className="Gt3-Box">
          <motion.img
            ref={refGt2}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Image112"
            animate={controlsGt2}
            src={Image115}
          ></motion.img>
          <p>5 NOVEMBER 2022</p>
          <h1 className="Gt3-box-h1">
            LAMBORGHINI SUPER TROFEO: REGIONAL TITLES DECIDED ON OPENING DAY IN
            PORTIMÃO
          </h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Page3-Gt">
        <motion.img
          ref={refGt3}
          variants={textScrollVariantsGt}
          initial="hidden"
          className="Image113"
          animate={controlsGt3}
          src={Image113}
        ></motion.img>
        <div className="Page3-gt-right">
          <motion.h1
            ref={refGt3}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Gt3-top"
            animate={controlsGt3}
          >
            GT3
          </motion.h1>
          <motion.p
            ref={refGt3}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Gt3-top"
            animate={controlsGt3}
          >
            The name GT3 refers to a category of racing cars that comply with
            the FIA regulations of the same name. The first FIA GT3 European
            Championship took place in 2005 and it was an instant hit with both
            fans and drivers. From the very first season, the GT3 category has
            set a benchmark for professionals and gentlemen drivers.
          </motion.p>
        </div>
      </div>
      <div className="Page4-Gt">
        <div className="Page4-gt-left">
          <motion.h1
            ref={refGt4}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Gt3-top"
            animate={controlsGt4}
          >
            GT3 TEAMS
          </motion.h1>
          <motion.p
            ref={refGt4}
            variants={textScrollVariantsGt}
            initial="hidden"
            className="Gt3-top"
            animate={controlsGt4}
          >
            Customer Teams get technical support from Lamborghini in the shape
            of spare parts and on-track assistance at top GT events all over the
            world. The support schemes can be tailored to suit each customer’s
            needs, from a car’s first shakedown to when it hits the race track.
          </motion.p>
          <ul class="menu-GT3">
            <li class="li-text-GT3">
              <motion.a
                ref={refGt4}
                variants={textScrollVariantsGt}
                initial="hidden"
                className="A-text-GT3"
                animate={controlsGt4}
              >
                TEAMS LIST
              </motion.a>
              <div className="Bordrline"></div>
            </li>
          </ul>
        </div>
        <motion.img
          ref={refGt4}
          variants={textScrollVariantsGt}
          initial="hidden"
          className="Image116"
          animate={controlsGt4}
          src={Image116}
        ></motion.img>
      </div>
      <div className="Page5-gt">
        <h1>ROLL OF HONOR</h1>
        <h1>GT3</h1>
      </div>
      <div className="Page6-gt">
        <div className="ListDrivers">
          <a className="Shoping-a">
            <span className="Shoping-span">CHAMPIONSHIP</span>
            <i className="Shoping-i"></i>
          </a>
          <a className="Shoping-a">
            <span className="Shoping-span">YEAR</span>
            <i className="Shoping-i"></i>
          </a>
          <a className="Shoping-a">
            <span className="Shoping-span">CATEGORIES</span>
            <i className="Shoping-i"></i>
          </a>
          <a className="Shoping-a">
            <span className="Shoping-span">TEAMS</span>
            <i className="Shoping-i"></i>
          </a>
        </div>
        <img className="Image117" src={Image117} alt="" />
        <GT3List GtList={GttList} />
        <img className="Image118" src={Image118} alt="" />
        <GT3List GtList={GttList2} />
        <img className="Image118" src={Image119} alt="" />
        <GT3List GtList={GttList3} />
        <img className="Image118" src={Image119} alt="" />
        <GT3List GtList={GttList4} />
        <img className="Image118" src={Image120} alt="" />
        <GT3List GtList={GttList5} />
        <img className="Image118" src={Image121} alt="" />
        <GT3List GtList={GttList6} />
        <img className="Image118" src={Image123} alt="" />
        <GT3List GtList={GttList7} />
        <img className="Image118" src={Image124} alt="" />
        <GT3List GtList={GttList8} />
        <img className="Image118" src={Image125} alt="" />
        <GT3List GtList={GttList9} />
      </div>
    </div>
  );
};

export default GT3;
