//IMPORTS
import React, { useRef } from "react";
import "./Emperors.css";
import Footer from "../Footer/Footer";

// IMGS
import statue1 from "../../assets/statue1.png";
import statue2 from "../../assets/statue2.png";
import statue3 from "../../assets/statue3.png";
import statue4 from "../../assets/statue4.png";
import statue5 from "../../assets/statue5.png";
import statue6 from "../../assets/statue6.png";
import s from "../../assets/s.png";
import t from "../../assets/t.png";
import a from "../../assets/a.png";
import t1 from "../../assets/t1.png";
import u from "../../assets/u.png";
import e from "../../assets/e.png";

const Emperors = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="empmaincon">
        <div className="empheadcon">
          <div className="empheadtitle">
            <h1>Emperors</h1>
          </div>
          <div className="empheadbanner">
            <div className="empitem">
              <img src={s} alt="augustus" />
            </div>
            <div className="empitem">
              <img src={t} alt="julius caesar" />
            </div>
            <div className="empitem">
              <img src={a} alt="commodus" />
            </div>
            <div className="empitem">
              <img src={t1} alt="caligula" />
            </div>
            <div className="empitem">
              <img src={u} alt="marcus aurelius" />
            </div>
            <div className="empitem">
              <img src={e} alt="nero" />
            </div>
          </div>
        </div>

        {/* THE SLIDER */}
        <div className="empmaintitle">
          <h1>Emperors of Ancient Rome</h1>
        </div>
        <div className="empbodycon">
          <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="wrap">
            <ul className="carousel" ref={carouselRef}>
              <li className="empcard">
                <div className="empimg">
                  <img src={statue1} alt="julius caesar" />
                </div>
                <div className="emptext">
                  <h2>Julius Caesar</h2>
                  <p>
                    Gaius Julius Caesar was a military general and dictator, not
                    an emperor. He conquered Gaul, reformed the Roman calendar,
                    and played a key role in ending the Roman Republic. He was
                    assassinated on the Ides of March in 44 BCE by conspirators
                    including Brutus. His name became synonymous with power,
                    influencing titles like "Caesar" and "Tsar."
                  </p>
                </div>
              </li>
              <li className="empcard">
                <div className="empimg">
                  <img src={statue2} alt="commodus" />
                </div>
                <div className="emptext">
                  <h2>Commodus</h2>
                  <p>
                    Lucius Aurelius Commodus ruled from 180 to 192 CE and was
                    known for his erratic behavior and vanity. He declared
                    himself a reincarnation of Hercules and even participated in
                    gladiatorial games. His reign ended when he was strangled by
                    a wrestler, part of a conspiracy involving his inner circle.
                    Commodus' rule is often seen as a key point in the decline
                    of the Roman Empire.
                  </p>
                </div>
              </li>
              <li className="empcard">
                <div className="empimg">
                  <img src={statue3} alt="nero" />
                </div>
                <div className="emptext">
                  <h2>Nero</h2>
                  <p>
                    Nero Claudius Caesar Augustus Germanicus is infamous for his
                    cruelty and extravagance, including his possible involvement
                    in the Great Fire of Rome. He built the extravagant Domus
                    Aurea and persecuted Christians. After being declared a
                    public enemy by the Senate, he committed suicide.
                  </p>
                </div>
              </li>
              <li className="empcard">
                <div className="empimg">
                  <img src={statue4} alt="caligula" />
                </div>
                <div className="emptext">
                  <h2>Caligula</h2>
                  <p>
                    Gaius Julius Caesar Augustus Germanicus’s reign (37-41 CE)
                    is remembered for his cruelty and eccentricities, including
                    making his horse, Incitatus, a consul. His behavior led to
                    widespread instability, and he was assassinated by members
                    of the Praetorian Guard in a conspiracy. He remains one of
                    the most controversial and chaotic emperors in Roman
                    history.
                  </p>
                </div>
              </li>
              <li className="empcard">
                <div className="empimg">
                  <img src={statue5} alt="marcus aurelius" />
                </div>
                <div className="emptext">
                  <h2>Marcus Aurelius</h2>
                  <p>
                    Marcus Aurelius Antoninus Augustus, a Stoic philosopher,
                    ruled from 161 to 180 CE as one of the "Five Good Emperors."
                    His reign was marked by military conflicts, particularly
                    with Germanic tribes. He is best known for his philosophical
                    writings in Meditations. His choice of his son Commodus as
                    successor is often criticized, as it led to instability
                    after his death.
                  </p>
                </div>
              </li>
              <li className="empcard">
                <div className="empimg">
                  <img src={statue6} alt="augustus" />
                </div>
                <div className="emptext">
                  <h2>Augustus</h2>
                  <p>
                    Gaius Octavius Thurinus, later Gaius Julius Caesar Augustus,
                    the first emperor of Rome, ruled from 27 BCE to 14 CE. He
                    founded the Roman Empire, initiated the Pax Romana, and
                    implemented significant reforms in governance. Augustus
                    commissioned major building projects, including the Forum of
                    Augustus. His reign set the standard for future emperors,
                    and he is regarded as one of Rome's greatest leaders.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        </div>

        {/* ACHIEVEMENTS CARD */}
        <div className="empachheading">
          <h1>Achievements notably known during their reigns</h1>
        </div>
        <div className="empachcon">
          {/* AUGUSTUS */}
          <div className="empachcard">
            <div className="empachtitle">
              <h2>Augustus</h2>
            </div>
            <div className="empachdetails">
              <p>
                <b>Architectural and Cultural Renaissance</b>: Augustus famously
                claimed,
                <i>
                  "I found Rome a city of bricks and left it a city of marble."
                </i>
                He commissioned numerous building projects, such as the Forum of
                Augustus, the Ara Pacis, and the renovation of temples,
                fostering a cultural revival that showcased Rome's grandeur.
              </p>
            </div>
          </div>

          {/* CALIGULA */}
          <div className="empachcard">
            <div className="empachtitle">
              <h2>Caligula</h2>
            </div>
            <div className="empachdetails">
              <p>
                <b>Extravagance and Excess:</b> Caligula's reign is infamous for
                his eccentricities and lavish spending. He reportedly built a
                massive floating palace, a luxury barge on Lake Nemi, complete
                with marble floors and gardens. His eccentric acts, such as
                allegedly planning to make his horse a consul, reflected his
                erratic leadership style.
              </p>
            </div>
          </div>

          {/* CAESAR */}
          <div className="empachcard">
            <div className="empachtitle">
              <h2>Julius Caesar</h2>
            </div>
            <div className="empachdetails">
              <p>
                <b>Conquest of Gaul:</b> Julius Caesar's military campaigns in
                Gaul (modern France) between 58 BCE and 50 BCE greatly expanded
                Roman territory and demonstrated his tactical genius. His
                victories cemented his reputation and provided Rome with immense
                wealth and resources.
              </p>
            </div>
          </div>

          {/* COMODDUS */}
          <div className="empachcard">
            <div className="empachtitle">
              <h2>Commodus</h2>
            </div>
            <div className="empachdetails">
              <p>
                <b>Religious and Cultural Eccentricity:</b> Commodus declared
                himself the reincarnation of Hercules, commissioning statues of
                himself in the hero's guise and even renaming Rome to Colonia
                Commodiana (Commodus' Colony), reflecting his self-obsession and
                detachment from reality.
              </p>
            </div>
          </div>

          {/* MARCUS AURELIUS */}
          <div className="empachcard">
            <div className="empachtitle">
              <h2>Marcus Aurelius</h2>
            </div>
            <div className="empachdetails">
              <p>
                <b>Defender of the Empire:</b> While known as the
                philosopher-emperor, Marcus Aurelius spent much of his reign on
                the battlefield, notably during the Marcomannic Wars against
                Germanic tribes. His leadership was crucial in defending Rome’s
                northern borders.
              </p>
            </div>
          </div>

          {/* NERO */}
          <div className="empachcard">
            <div className="empachtitle">
              <h2>Nero</h2>
            </div>
            <div className="empachdetails">
              <p>
                <b>The Great Fire of Rome and Reconstruction:</b> During Nero's reign,
                the Great Fire of Rome (64 CE) devastated large parts of the
                city. While rumors accused Nero of starting the fire, he
                initiated ambitious rebuilding projects, including the
                construction of his extravagant palace, the Domus Aurea, though
                these projects burdened the empire financially.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Emperors;
