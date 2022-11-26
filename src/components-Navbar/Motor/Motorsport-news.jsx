import React from "react";
import Image140 from "../../Images/140.png";
import Image141 from "../../Images/141.png";
import Image142 from "../../Images/142.png";
import Image143 from "../../Images/143.png";
import Image144 from "../../Images/144.png";
import Image145 from "../../Images/145.png";
import Image146 from "../../Images/146.png";

import "./Styles/Motorsport-news.css";
const Motorsportnews = () => {
  return (
    <div>
      <div className="Page1-News">
        <h2>NEWS</h2>
        <h1>MOTORSPORT</h1>
        <img className="Image140" src={Image140} alt="" />
      </div>
      <div className="Page2-News">
        <div className="Page2-News-left">
          <h3>6 NOVEMBER 2022</h3>
          <h1>
            LAMBORGHINI SUPER TROFEO: NELSON PIQUET CROWNED GRAND FINALS WINNER
            IN PORTIMÃO
          </h1>
          <p>
            Ortiz and Carazo win Pro-Am title, while Lewandowski and Semoulin
            siblings take Am/LB Cup titles
          </p>
        </div>
        <div className="Page2-News-right">
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Page3-News">
        <div className="Page3-News-left">
          <img className="Image141" src={Image141} alt="" />
        </div>
        <div className="Page3-News-right">
          <p>5 NOVEMBER 2022</p>
          <h1>
            LAMBORGHINI AND IRON LYNX JOIN FORCES FOR LMDH PROGRAMME IN FIA WEC
            AND IMSA FROM 2024
          </h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Page3-News">
        <div className="Page3-News-left">
          <img className="Image141" src={Image142} alt="" />
        </div>
        <div className="Page3-News-right">
          <p>5 NOVEMBER 2022</p>
          <h1>
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
      <div className="Page3-News">
        <div className="Page3-News-left">
          <img className="Image141" src={Image143} alt="" />
        </div>
        <div className="Page3-News-right">
          <p>1 NOVEMBER 2022</p>
          <h1>
            LAMBORGHINI SUPER TROFEO EMBARKS ON FIRST GRAND FINALS VISIT TO
            PORTIMÃO WITH 65 CARS
          </h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Page3-News">
        <div className="Page3-News-left">
          <img className="Image141" src={Image144} alt="" />
        </div>
        <div className="Page3-News-right">
          <p>28 OCTOBER 2022</p>
          <h1>THE GENTLEMAN DRIVER: GERARD VAN DER HORST</h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Page3-News">
        <div className="Page3-News-left">
          <img className="Image141" src={Image145} alt="" />
        </div>
        <div className="Page3-News-right">
          <p>26 OCTOBER 2022</p>
          <h1>
            LAMBORGHINI SUPER TROFEO ASIA TO RETURN IN 2023 WITH SIX-RACE
            CALENDAR
          </h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Page3-News">
        <div className="Page3-News-left">
          <img className="Image141" src={Image146} alt="" />
        </div>
        <div className="Page3-News-right">
          <p>24 OCTOBER 2022</p>
          <h1>
            LAMBORGHINI TAKES VICTORY IN THE ITALIAN GT CHAMPIONSHIP SPRINT CUP
            FINALE AT MUGELLO
          </h1>
          <div class="Div-Page2_Gt3">
            <button class="Page2_Gt3-Button">
              <span>Find out More!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motorsportnews;
