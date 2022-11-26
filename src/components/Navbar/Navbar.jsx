import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/Navbar.css";
import Image1 from "../../Images/1.png";
import Search from "./SearchBar/Search.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [Models, setModels] = useState(false);
  const [Custom, setCustom] = useState(false);
  const [Owner, setOwner] = useState(false);
  const [Motor, setMotor] = useState(false);
  const [Hamburger, setHamburger] = useState(false);
  const [HamburgerMenu, setHamburgerMenu] = useState(false);
  const [About, setAbout] = useState(false);
  const [CustomPhone, setCustomPhone] = useState(false);
  const [OwnerPhone, setOwnerPhone] = useState(false);
  const [Motorsport, setMotorsport] = useState(false);

  const textScrollVariants = {
    visible: { opacity: 1, right: 0, top: 10 },
    hidden: { opacity: 0 },
  };

  const Page_10 = useAnimation();
  const [ref10, inPage10] = useInView();
  const Page_11 = useAnimation();
  const [ref11, inPage11] = useInView();

  useEffect(() => {
    if (inPage10) {
      Page_10.start("visible");
    }
  }, [Page_10, inPage10]);
  useEffect(() => {
    if (inPage11) {
      Page_11.start("visible");
    }
  }, [Page_11, inPage11]);
  return (
    <>
      <div className="Navbar">
        <Link to="/">
          <img className="image" src={Image1} alt="" />
        </Link>
        <div
          className="Models-div"
          onMouseEnter={() => {
            setModels(true);
          }}
          onMouseLeave={() => {
            setModels(false);
          }}
        >
          <ul class="menu">
            <li class="li-text">
              <a class="A-text">About</a>
            </li>
          </ul>
          {Models && (
            <div className="list">
              <Link to="/Aventador">
                <h4>AVENTADOR</h4>
              </Link>
              <Link to="/Huracan">
                <h4>HURACAN</h4>
              </Link>
              <Link to="/Urus">
                <h4>URUS</h4>
              </Link>
              <Link to="/Owned">
                <h4>PRE-OWNED</h4>
              </Link>
              <Link to="/Limited">
                <h4>LIMITED SERIES</h4>
              </Link>
              <Link to="/Concept">
                <h4>CONCEPT</h4>
              </Link>
            </div>
          )}
          {Models && <div className="black-bg"></div>}
        </div>
        <div
          onMouseEnter={() => {
            setCustom(true);
          }}
          onMouseLeave={() => {
            setCustom(false);
          }}
          className="Models-div"
        >
          <ul class="menu">
            <li class="li-text">
              <a class="A-text">CUSTOM SOLUTIONS</a>
            </li>
          </ul>
          {Custom && (
            <div className="list">
              <Link to="/Customization">
                <h4>CUSTOMIZATION</h4>
              </Link>
              <Link to="/Accessories">
                <h4>ACCESSORIES</h4>
              </Link>
              <Link to="/Financial">
                <h4>FINANCIAL SERVICES</h4>
              </Link>
              <Link to="/Warranty">
                <h4>WARRANTY EXTENSION</h4>
              </Link>
            </div>
          )}
          {Custom && <div className="black-Custom"></div>}
        </div>
        <div
          onMouseEnter={() => {
            setOwner(true);
          }}
          onMouseLeave={() => {
            setOwner(false);
          }}
          className="Models-div"
        >
          <ul class="menu">
            <li class="li-text">
              <a class="A-text">OWNERSHIP</a>
            </li>
          </ul>
          {Owner && (
            <div className="list">
              <Link to="/Connectivity">
                <h4>CONNECTIVITY</h4>
              </Link>
              <Link to="/Mobility">
                <h4>MOBILITY PROGRAM</h4>
              </Link>
              <Link to="/Classics">
                <h4>CLASSICS</h4>
              </Link>
              <Link to="/Service">
                <h4>SERVICE</h4>
              </Link>
              <Link to="/RecallCampaign">
                <h4>RECALL CAMPAIGN</h4>
              </Link>
            </div>
          )}
          {Owner && <div className="black-bg"></div>}
        </div>
        <div
          onMouseEnter={() => {
            setMotor(true);
          }}
          onMouseLeave={() => {
            setMotor(false);
          }}
          className="Models-div"
        >
          <ul class="menu">
            <li class="li-text">
              <a class="A-text">MOTORSPORT</a>
            </li>
          </ul>
          {Motor && (
            <div className="list">
              <Link to="/SuperTrofeo">
                <h4>SUPER TROFEO</h4>
              </Link>
              <Link to="/GT3">
                <h4>GT3</h4>
              </Link>
              <Link to="/Motorsport">
                <h4>MOTORSPORT MODELS</h4>
              </Link>
              <Link to="/Drivers">
                <h4>DRIVERS</h4>
              </Link>
              <Link to="/MotorsportNews">
                <h4>MOTORSPORT NEWS</h4>
              </Link>
              <Link to="/Experience">
                <h4>EXPERIENCE</h4>
              </Link>
              <Link to="/Esports">
                <h4>ESPORTS</h4>
              </Link>
            </div>
          )}
          {Motor && <div className="black-Motor"></div>}
        </div>
        <Search />
        <div
          onClick={() => {
            setHamburger(!Hamburger);
            setHamburgerMenu(!HamburgerMenu);
            if (About || CustomPhone || OwnerPhone || Motorsport) {
              setHamburgerMenu(false);
              setAbout(false);
              setCustomPhone(false);
              setOwnerPhone(false);
              setMotorsport(false);
              setHamburger(false);
            }
          }}
          className="hamburger"
        >
          <span className={Hamburger ? "bar active" : "bar"}></span>
          <span className={Hamburger ? "bar active" : "bar"}></span>
          <span className={Hamburger ? "bar active" : "bar"}></span>
        </div>
        {HamburgerMenu && (
          <div className="Hamburger-Menu-Open">
            <p
              onClick={() => {
                {
                  setAbout(true);
                }
              }}
            >
              About
            </p>
            <p
              onClick={() => {
                setCustomPhone(true);
              }}
            >
              Custom
            </p>
            <p
              onClick={() => {
                setOwnerPhone(true);
              }}
            >
              Owenr
            </p>
            <p
              onClick={() => {
                setMotorsport(true);
              }}
            >
              Motorsport
            </p>
          </div>
        )}
        {About && (
          <div onclick className="sdsqdqsd">
            <Link to="./Aventador">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                AVENTADOR
              </motion.div>
            </Link>
            <Link to="./Huracan">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                HURACAN
              </motion.div>
            </Link>
            <Link to="./Urus">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                URUS
              </motion.div>
            </Link>
            <Link to="./Owned">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                PRE-OWNEDd
              </motion.div>
            </Link>
            <Link to="./Limited">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                LIMITED SERIES
              </motion.div>
            </Link>
            <Link to="./Concept">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                CONCEPT
              </motion.div>
            </Link>
          </div>
        )}

        {CustomPhone && (
          <div className="sdsqdqsd">
            <Link to="./Customization">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                CUSTOMIZATION
              </motion.div>
            </Link>
            <Link to="./Accessories">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                ACCESSORIES
              </motion.div>
            </Link>
            <Link to="./Financial">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                FINANCIAL SERVICES
              </motion.div>
            </Link>
            <Link to="./Warranty">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                WARRANTY EXTENSION
              </motion.div>
            </Link>
          </div>
        )}

        {OwnerPhone && (
          <div className="sdsqdqsd">
            <Link to="./Connectivity">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                CONNECTIVITY
              </motion.div>
            </Link>
            <Link to="./Mobility">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                MOBILITY PROGRAM
              </motion.div>
            </Link>
            <Link to="./Classics">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                CLASSICS
              </motion.div>
            </Link>
            <Link to="./Service">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                SERVICE
              </motion.div>
            </Link>
            <Link to="./RecallCampaign">
              <motion.div
                ref={ref10}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_10}
              >
                RECALL CAMPAIGN
              </motion.div>
            </Link>
          </div>
        )}

        {Motorsport && (
          <div className="sdsqdqsd">
            <Link to="./SuperTrofeo">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_11}
              >
                SUPER TROFEO
              </motion.div>
            </Link>
            <Link to="./GT3">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_11}
              >
                GT3
              </motion.div>
            </Link>
            <Link to="./Motorsport">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_11}
              >
                MOTORSPORT MODELS
              </motion.div>
            </Link>
            <Link to="./Drivers">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_11}
              >
                DRIVERS
              </motion.div>
            </Link>
            <Link to="./MotorsportNews">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_11}
              >
                MOTORSPORT NEWS
              </motion.div>
            </Link>
            <Link to="./Experience">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Testxdd"
                animate={Page_11}
              >
                EXPERIENCE
              </motion.div>
            </Link>
            <Link to="./Experience">
              <motion.div
                ref={ref11}
                variants={textScrollVariants}
                initial="hidden"
                className="Esports"
                animate={Page_11}
              >
                ESPORTSS
              </motion.div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
