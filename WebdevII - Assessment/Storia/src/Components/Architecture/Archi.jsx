//IMPORTS
import React from "react";
import "./Archi.css";
import Footer from "../Footer/Footer";

//IMGS
import pantheon from "../../assets/pantheon.png";
import panth from "../../assets/panth.jpg";


const Archi = () => {
  return (
    <>
      <div className="archbanner">
        <img src={panth} alt="" />
        <div className="archtitle">
          <h2>Architecture</h2>
        </div>
        <div className="archibg">
          <img src={pantheon} alt="Roman Pantheon" />
        </div>
        <div className="archioverlay"></div>
        <div className="archioverlaytext">
          <p>
            "From grand structures with towering arches, intricate columns, and
            awe-inspiring domes. Ancient Roman architecture blends practicality
            with beauty, using advanced engineering like aqueducts,
            amphitheaters, and temples to leave a lasting mark on the world."
          </p>
        </div>
      </div>

      {/* THE ARCHITECTURE DESCRIPS */}
      <div className="archcon">
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
                amphitheater could hold up to 50,000 spectators and was used for
                gladiatorial contests, animal hunts, and mock naval battles. Its
                design features a complex system of arches and vaults, with a
                facade adorned by columns in three distinct orders: Doric,
                Ionic, and Corinthian. The Colosseum’s enduring influence on
                architecture and engineering is seen in modern stadium designs.
              </p>
            </div>
          </div>
        </div>

        {/* THE ROMAN PANTHEON */}
        <div className="archpanth">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>The Pantheon</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                The Pantheon, originally built as a temple to all Roman gods, is
                renowned for its extraordinary architectural features. Located
                in the center of Rome, it was rebuilt by Emperor Hadrian around
                126 AD. The building's most remarkable feature is its massive
                dome, which remains the world’s largest unreinforced concrete
                dome. At the dome’s apex is an oculus, a circular opening that
                allows light to flood the interior, creating a symbolic
                connection between the temple and the heavens. The Pantheon has
                been remarkably well-preserved and now serves as a Christian
                church.
              </p>
            </div>
          </div>
        </div>

        {/* THE ROMAN FORUM */}
        <div className="archforum">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>The Roman Forum</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                The Roman Forum was the heart of ancient Rome, serving as the
                political, commercial, and social center. Located between the
                Palatine Hill and the Capitoline Hill, it hosted temples,
                basilicas, and monuments, including the Senate House (Curia),
                the Temple of Saturn, and the Arch of Titus. The Forum was used
                for speeches, public events, and civic functions. Today, it
                remains an extensive archaeological site, offering a glimpse
                into the daily life and governance of the Roman Empire.
              </p>
            </div>
          </div>
        </div>

        {/* THE ROMAN AQUEDUCTS */}
        <div className="archaque">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>The Aqueducts</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                Roman aqueducts were groundbreaking feats of engineering that
                transported water from distant sources into cities and towns.
                Among the most famous is the Pont du Gard in southern France, an
                exceptionally well-preserved aqueduct bridge. The Aqua Appia,
                Rome’s first aqueduct, and the Aqua Claudia, which supplied
                water to Rome for centuries, are key examples. These aqueducts
                were integral to Roman life, providing water for drinking,
                public baths, fountains, and agriculture, demonstrating Roman
                expertise in hydraulics.
              </p>
            </div>
          </div>
        </div>

        {/* TRAJAN'S COLUMN */}
        <div className="archtrajan">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>Trajan's Column</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                Trajan’s Column, located in Trajan’s Forum, commemorates Emperor
                Trajan’s victory in the Dacian Wars (101-106 AD). The column
                stands at 98 feet (30 meters) tall and is adorned with a
                continuous frieze that spirals up the column, depicting over
                2,500 individual figures. The column is a detailed narrative of
                the military campaigns, illustrating Roman military tactics,
                battles, and daily life in the empire. It is considered one of
                the greatest achievements in Roman art and sculpture.
              </p>
            </div>
          </div>
        </div>

        {/* THE ARCH OF TITUS */}
        <div className="archtitus">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>The Arch of Titus</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                The Arch of Titus, erected by Emperor Domitian in AD 81 to honor
                his brother Titus after his death, stands at the eastern end of
                the Roman Forum. It celebrates Titus’s victory in the Jewish
                War, particularly the sack of Jerusalem in AD 70. The arch’s
                reliefs depict the triumphal procession, showing Jewish captives
                and the treasures from the Temple of Jerusalem, including the
                Menorah. The Arch of Titus is a significant example of Roman
                triumphal architecture, influencing later arches, such as the
                Arc de Triomphe in Paris.
              </p>
            </div>
          </div>
        </div>

        {/* HADRIAN'S VILLA */}
        <div className="archhadrian">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>Hadrian's Villa</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                Hadrian’s Villa (Villa Adriana) is an expansive Roman retreat
                built by Emperor Hadrian in the 2nd century AD, located in
                Tivoli, near Rome. The villa spans over 250 acres and features a
                series of luxurious buildings, including temples, baths,
                theaters, and artificial grottoes. It combines elements from
                various cultures within the Roman Empire, reflecting Hadrian’s
                travels. Notable features include the Canopus, a large pool
                surrounded by statues, and the Maritime Theater, an island villa
                within the complex. The site is now a UNESCO World Heritage
                Site.
              </p>
            </div>
          </div>
        </div>

        {/* THE BATHS OF CARACALLA */}
        <div className="archbath">
          <div className="archdescrip">
            <div className="arcdescriphead">
              <h2>The Baths of Caracalla</h2>
              <hr />
            </div>
            <div className="archdescriptext">
              <p>
                The Baths of Caracalla, completed in AD 216 under Emperor
                Caracalla, were among the largest and most impressive public
                baths in ancient Rome. Located in the southeastern part of Rome,
                the complex could accommodate over 1,600 bathers at a time. It
                featured a series of large swimming pools, hot and cold baths,
                and gymnasiums, all decorated with intricate mosaics and marble.
                The baths were not only places for bathing but also centers for
                socializing, exercising, and relaxation. Though now in ruins,
                the Baths of Caracalla continue to stand as a testament to Roman
                engineering and luxury.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Archi;
