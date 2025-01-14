//IMPOTS
import React from "react";
import "./Militia.css";
import Footer from "../Footer/Footer";

// IMGGS
import spartan from "../../assets/spartan.jpg";
import eagle from "../../assets/eagle.jpg";
import soldier from "../../assets/soldier.jpg";
import praetor from "../../assets/praetor.jpg";

const Militia = () => {
  return (
    <>
      {/* THE PAGE MAIN BG */}
      <div className="milimaincon">
        <div className="milibanner">
          <div className="overlay">{/* OVERLAY DUH*/}</div>
          <div className="milicontent">
            <div className="milititle">
              <h2>Military</h2>
              <p>"Power and Strategy: The Backbone of Rome's Empire"</p>
            </div>
          </div>
        </div>

        {/* MILITARY DESCRIP */}
        <div className="spqrcon">
          <div className="spqrdescrip">
            <h2>SPQR</h2>
            <hr id="spqrhr" />
            <p>
              SPQR, an acronym for Senatus Populusque Romanus, translates to
              "The Senate and the People of Rome." This phrase was the emblem of
              the Roman Republic and later the Roman Empire, symbolizing the
              unity of the Roman government and its citizens. It represented the
              idea that the authority of Rome came from both the Senate (the
              ruling body) and the Roman people (the citizens), underlining the
              republic's political structure and its principles.
            </p>
          </div>
        </div>

        {/* CONTINUATIN */}
        <div className="legioncon">
          <div className="leftmilicon">
            <img src={spartan} alt="Spartan" />
          </div>
          <div className="rightmilicon">
            <h2>The Legion</h2>
            <p>
              The Roman legion was the principal military unit of the Roman
              army, consisting of approximately 4,000 to 6,000 soldiers. A
              legion was divided into smaller units, making it flexible and
              highly organized.
            </p>
            <ul>
              <li>
                <b>Legionaries:</b> The core of the Roman legion, soldiers who
                were Roman citizens and heavily trained.
              </li>
              <li>
                <b>Auxiliaries:</b> Non-citizen troops that supported the
                legions, providing additional cavalry, archers, and other
                specialized forces.
              </li>
            </ul>
            <p>
              Each legion had its own unique number and name, such as Legio I
              Adiutrix or Legio XII Fulminata.
            </p>
          </div>
        </div>
        
        {/* THE EAGLE */}
        <div className="legioncon">
          <div className="rightcon">
            <h2>The Eagle of the Legion</h2>
            <p>
              The eagle (Aquila) was the most revered symbol of a Roman legion.
              Made of silver or bronze, the eagle standard was carried by the
              Aquilifer, the soldier in charge of guarding it. Losing the eagle
              was considered a catastrophic disgrace, and Roman soldiers would
              fight to the death to protect it. The eagle represented the power
              of the Roman state and was a symbol of unity, loyalty, and
              strength. It was often accompanied by a banner that displayed the
              number and name of the legion.
            </p>
          </div>
          <div className="leftcon">
            <img src={eagle} alt="Eagle" />
          </div>
        </div>

        {/* QUOTE */}
        <div className="bgmili">
          <div className="militext">
            <h2>"VENI, VIDI, VICI"</h2>
            <p>- Julius Caesar</p>
          </div>
        </div>
        <div className="legioncon">
          <div className="leftmilicon">
            <img src={soldier} alt="Roman Centurion" />
          </div>
          <div className="rightmilicon">
            <h2>Training and Equipment</h2>
            <p>
              Roman soldiers underwent rigorous training, focusing on physical
              fitness, formation drills, and combat skills. The Roman army was
              known for its tactical flexibility and ability to adapt to various
              battlefield conditions.
            </p>
            <ul>
              <li>
                <b>Armor:</b> Soldiers wore <i>lorica segmentata</i> (segmented
                armor), <i>lorica hamata</i> (chain mail),{" "}
                <i>lorica squamata</i> (scale armor). They also carried a helmet
                (galea) and a shield (scutum) that was large enough to protect
                the soldier from head to toe.
              </li>
              <li>
                <b>Weapons:</b> The standard Roman weapon was the <i>gladius</i>
                , a short sword used for stabbing. Soldiers also carried a{" "}
                <i>pilum</i> (throwing spear), a <i>pugio</i> (dagger), and a
                sling for ranged combat.
              </li>
              <li>
                <b>Boots and Sandals:</b> Roman soldiers wore <i>caligae</i>,
                sturdy sandals with iron studs, designed for long marches.
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* PRAETOR */}
        <div className="legioncon">
          <div className="rightcon">
            <h2>The Praetor of a Legion</h2>
            <p>
              In ancient Rome, the Praetor was a high-ranking magistrate, second
              only to the Consul in authority, with duties that evolved over
              time. While primarily a judicial officer, certain
              Praetors—especially those in provinces—were entrusted with
              military responsibilities. Their role in military planning was
              crucial, especially during times of war and territorial expansion.
            </p>
            <p>
              The military planning of Praetors contributed significantly to the
              Roman Empire's ability to maintain control over its vast
              territories. Their efforts in logistics, strategy, and
              administration exemplified the efficiency and organization of
              Roman governance, ensuring that conquered lands remained firmly
              under Roman influence.
            </p>
          </div>
          <div className="leftcon">
            <img src={praetor} alt="Praetor planning" />
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Militia;
{/* BORING PAGE END */}