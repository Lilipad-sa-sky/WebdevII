//IMPORTS
import React from "react";
import "./DL.css";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";

//IMGS
import cicero from "../../assets/cicero.jpg";
import vesta from "../../assets/vesta.jpg";
import forum from "../../assets/forum.jpg";
import town from "../../assets/town.jpg";
import people from "../../assets/people.jpg";
import food from "../../assets/food.jpg";
import leisure from "../../assets/leisure.jpg";
import lifestyle from "../../assets/lifestyle.jpg";
import romans from "../../assets/romans.jpg";

const DL = () => {
  return (
    <>
    {/* DAILY LIFE MAIN CONTAINER */}
      <div className="dlmaincon">
        <div className="dlbg">
          <img src={town} alt="town" />
        </div>
        <div className="dltext">
          <h2>Daily Life</h2>
        </div>
        <hr id="bottomhr" />
        <div className="dlsubtext">
          <p id="left">Roman Empire</p>
          <p id="middle">27 BC</p>
          <p id="right">Rome, Italy</p>
        </div>
        <hr id="bottomhr" />
      </div>

      {/* INFO  */}
      <div className="dlmaincon">
        <div className="dltitle">
          <h1>Daily Life in Ancient Rome</h1>
          <h3>
            Daily life in ancient Rome varied greatly depending on one's social
            class, location (urban or rural), and personal circumstances.
          </h3>
        </div>
        {/* DAILY LIFE PT. 1 */}
        <div className="maincon">
          <div class="cardcontainer">
            <div class="cardleft">
              <div class="dlgrid1img">
                <img src={cicero} alt="Philosopher Cicero" />
              </div>
              <div class="subtext">
                <h2>Education</h2>
                <p>
                  Education was highly valued, particularly among the wealthy.
                  Being male dominated subjects of discussion are Philosophy,
                  Strategy, and Mathematics.
                </p>
              </div>
            </div>

            <div class="cardmiddle">
              <div class="dlgrid1img">
                <img src={forum} alt="Forum" />
              </div>
            </div>

            <div class="cardright">
              <div class="subtext">
                <h2>Religion</h2>
                <p>
                  Religion was a key aspect of life in Rome. The Ponifex Maximus
                  and his priestesses would hold celebrations for the gods.
                  Worship of the Roman gods were widely practiced and taken
                  seriously.
                </p>
              </div>
              <div class="dlgrid1img">
                <img src={vesta} alt="Vestal Virgins" />
              </div>
            </div>
          </div>
        </div>
        <hr id="bottomhr" />

        {/* DAILY LIFE PT. 2 */}
        <div className="maincon2">
          <div className="dlcard">
            <img src={people} alt="people" />
            <div className="dlcardtext">
              <div className="dlfits">
                <h2>Out</h2>
                <h2>Fits</h2>
              </div>
              <p>
                In ancient Rome, clothing varied by social status, gender, and
                occasion. Roman men wore tunics, with wealthier citizens opting
                for finer fabrics. The <i>toga</i>, a formal garment, was worn
                at public events and signified status. Footwear ranged from
                sandals
                <i> (caligae)</i> for soldiers to refined shoes <i>(soleae)</i>
                for the wealthy. Women wore the <i>stola</i>, a long tunic over
                a subucula, often paired with a <i>palla</i>, a cloak worn
                outdoors. Wealthier women had stolas made from fine, brightly
                dyed fabrics, while poorer women had simpler, unadorned
                versions. As for footwear, women typically wore sandals or
                closed shoes, similar to men's.
              </p>
            </div>
          </div>
        </div>
        <hr id="bottomhr" />

        {/* LIFESTYLE */}
        <div className="maincon3">
          <div className="dlcard3">
            <div className="dllifeimg">
              <img src={food} alt="romans eating" />
            </div>
            <div className="dllifetext">
              <h2>Lifestyle</h2>
              <p>
                The diet of a Roman citizen depended largely on their social
                class. The rich enjoyed a variety of foods, including meats,
                fish, fruits, vegetables, and exotic spices imported from across
                the empire. They often ate elaborate feasts with multiple
                courses, including appetizers, main dishes, and desserts.
                Commoners, however, had a simpler diet primarily consisting of
                grains like wheat and barley, which were made into bread and
                porridge.
              </p>
              <p>
                Partying was a cornerstone of elite Roman culture, with wealthy
                citizens hosting lavish dinner parties and banquets. These
                gatherings were opportunities for showing off wealth and
                influence, flowing wine, and live entertainment such as music,
                poetry readings, or dancers. Conversations, debates, and
                political maneuvering were common at events.
              </p>
              <p>
                Behavior and social customs reflected Roman values of honor,
                discipline, and hierarchy. Family was central, with the
                paterfamilias holding authority over all members. Public
                behavior was expected to align with societal norms of dignity
                and respectability, although the elite’s private lives often
                featured indulgence and excess.
              </p>
            </div>
          </div>
        </div>
        <hr id="bottomhr" />

        {/* LEISURE */}
        <div className="maincon3">
          <div className="dlcard3">
            <div className="dlleitext">
              <h2>Entertainment</h2>
              <p>
                Entertainment in ancient Rome was varied, grand, and often
                intertwined with religion, politics, and social life. Romans
                loved public spectacles, and the city provided countless
                opportunities for its citizens to engage in leisure activities,
                from grand festivals to thrilling games and performances.
              </p>
              <p>
                <b>Gladiatorial games</b> were among the most popular forms of
                entertainment. Hosted in amphitheaters like the Colosseum, these
                games showcased combat between gladiators, who were often
                slaves, prisoners of war, or criminals. Some gladiators,
                however, were free men seeking fame and fortune. The battles
                ranged from one-on-one duels to large-scale mock wars, sometimes
                involving exotic animals like lions, elephants, and leopards.
                These spectacles were thrilling and gruesome, reflecting Roman
                society's fascination with bravery, skill, and the spectacle of
                life-and-death struggles.
              </p>
              <p>
                <b>Chariot races</b> at the Circus Maximus were another wildly
                popular attraction. Teams, identified by their colors (reds,
                blues, greens, and whites), competed in dangerous, high-speed
                races around the massive arena. These events drew huge crowds,
                and fans were fiercely loyal to their favorite teams, sometimes
                leading to violent rivalries.
              </p>
              <p>
                <b>Public baths</b> also served as centers of leisure and
                recreation. Beyond bathing, they offered opportunities for
                socializing, exercising, and even enjoying small performances or
                lectures. They were an essential part of Roman daily life and
                accessible to nearly everyone.
              </p>
              <p>
                Overall, entertainment in ancient Rome was not merely a pastime
                but a reflection of the empire’s values and priorities: the
                celebration of power, skill, and community. It brought people
                together and reinforced Roman identity through shared
                experiences of spectacle and grandeur.
              </p>
            </div>
            <div className="dlleiimg">
              <img src={leisure} alt="romans watching" />
              <img src={lifestyle} alt="romans lifestyle" />
            </div>
          </div>
        </div>

        <hr id="bottomhr" />
        <div className="dlromansimg">
          <img src={romans} alt="the decadence of the romans" />
        </div>

        <hr id="bottomhr" />
        
        <div className="dllasttext">
          <p id="dlleft">The decadence of the romans</p>
          <p id="dlright">Thomas Couture</p>
        </div>
        <hr id="bottomhr" />
        <div className="dlbottom"></div>
      </div>
      <Footer />
    </>
  );
};

export default DL;
{/* THE END FOR THIS ONE. */}