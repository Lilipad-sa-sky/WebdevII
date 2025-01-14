//IMPORTS
import React from "react";
import "./Rome.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

// IMGS
import statue1 from "../../assets/statue1.png";
import statue2 from "../../assets/statue2.png";
import statue3 from "../../assets/statue3.png";
import statue4 from "../../assets/statue4.png";
import statue5 from "../../assets/statue5.png";
import statue6 from "../../assets/statue6.png";

const Rome = () => {
  return (
    <>
    {/* LANDING PAGE*/}
      <div className="romemaincon">
        <div className="bg">
          <div className="header">
            <h1>The Roman Empire</h1>
            <h2>
              "Explore the Rise, Glory, and Legacy of One of History's Greatest
              Civilizations, Uncovering the Stories of Power, Innovation, and
              Culture that Shaped the Ancient World and Continue to Influence
              Modern Society."
            </h2>
            <div className="readmorebtn">
              <button>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* EMPEROR GRID */}
        <div className="empgridcon">
          <h2>Emperors</h2>
          <div className="empgrid">
            <Link
              to="/emperors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={statue1} alt="julius" />
            </Link>
            <Link
              to="/emperors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={statue2} alt="commodus" />
            </Link>
            <Link
              to="/emperors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={statue3} alt="nero" />
            </Link>
            <Link
              to="/emperors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={statue4} alt="caligula" />
            </Link>
            <Link
              to="/emperors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={statue5} alt="marcus aurelius" />
            </Link>
            <Link
              to="/emperors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={statue6} alt="augustus" />
            </Link>
          </div>
          <div className="empgridbtn">
            <button>
              <Link
                to="/emperors"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Expand
              </Link>
            </button>
          </div>
        </div>

        {/* QUOTE */}
        <div className="romequote">
          <div className="rometext">
            <h2>"Si vis pacem, para bellum."</h2>
            <p>- Vegetius</p>
          </div>
        </div>

        {/* MYTHOLOGY */}
        <div className="romemythcon">
          <div className="romedescrip">
            <h2>Mythology</h2>
            <hr id="romehr" />
            <p>
              SPQR, an acronym for Senatus Populusque Romanus, translates to
              "The Senate and the People of Rome." This phrase was the emblem of
              the Roman Republic and later the Roman Empire, symbolizing the
              unity of the Roman government and its citizens. It represented the
              idea that the authority of Rome came from both the Senate (the
              ruling body) and the Roman people (the citizens), underlining the
              republic's political structure and its principles.
            </p>
            <button>
              <Link
                to="/mythology"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Read more
              </Link>
            </button>
          </div>
        </div>

        {/* THE COLOSSEUM */}
        <div className="archcolos">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>The Colosseum</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                The Colosseum, also known as the Flavian Amphitheatre, is one of
                the most iconic symbols of ancient Rome. Located in the heart of
                Rome, it was completed in AD 80 under Emperor Titus. The
                amphitheater could hold up to 50,000 spectators and was used...
              </p>
            </div>
            <button>
              <Link
                to="/architecture"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Read more
              </Link>
            </button>
          </div>
        </div>

        {/* TO DAILY LIFE */}
        <div className="dlromecon">
          <hr id="romehr" />
          <div className="romesubtext">
            <p id="left">
              <Link
                to="/daily-life"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Find out more about Ancient Rome
              </Link>
            </p>
            <p id="middle">27 BC</p>
            <p id="right">Rome, Italy</p>
          </div>
          <hr id="romehr" />
        </div><br />
        <Footer />
      </div>
    </>
  );
};

export default Rome;
//END
//IM SO TIRED BRUH