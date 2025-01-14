//IMPORTS
import React from "react";
import "./Mythos.css";
import Title from "../Title/Title";
import Footer from "../Footer/Footer"

//IMPORT IMAGES
import apollo from "../../assets/apollo.jpg";
import bacchus from "../../assets/bacchus.jpg";
import ceres from "../../assets/ceres.jpg";
import diana from "../../assets/diana.jpg";
import juno from "../../assets/juno.jpg";
import jupiter from "../../assets/jupiter.jpg";
import mars from "../../assets/mars.jpg";
import mercury from "../../assets/mercury.jpg";
import minerva from "../../assets/minerva.jpg";
import neptune from "../../assets/neptune.jpg";
import pluto from "../../assets/pluto.jpg";
import venus from "../../assets/venus.jpg";
import vesta from "../../assets/hestia.jpg";
import vulcan from "../../assets/vulcan.jpg";
import fortuna from "../../assets/fortuna.jpg";
import bellona from "../../assets/bellona.jpg";
import stat from "../../assets/trevistat.png";

const Mythos = () => {
  return (
    <>
      {/*  THE MAIN CONTAINER */}
      <div className="mythoscon">
        <div className="mythbanner">
          <div className="mythtitle">
            <h1>Mythology</h1>
          </div>

          {/*  THE IMAGE */}
          <div className="mythstatcon">
            <div className="mythstat">
              <img src={stat} alt="Oceanus at Trevi fountain" />
            </div>

          {/*  TEXT LITERATURE QUOTE IN THE BOTTOM */}
            <div className="mythstattext">
              <p>
                "For them, I set no limits of space or time; I have given them
                empire without end. Even fierce Juno, who now torments sea,
                earth, and heaven in fear, will change her plans for the better
                and join me in cherishing the Romans, masters of the world, the
                toga-wearing race."
              </p>
              <p id="mythauthor">- Aeneid by Virgil (Jupiter's Prophecy)</p>
            </div>

          {/*  THE 3D CIRCULAR SLIDER */}
            <div className="mythgridslider" style={{ "--quantity": 16 }}>
              <div className="mythitem" style={{ "--position": 1 }}>
                <img src={apollo} alt="Apollo" />
              </div>
              <div className="mythitem" style={{ "--position": 2 }}>
                <img src={bacchus} alt="Bacchus" />
              </div>
              <div className="mythitem" style={{ "--position": 3 }}>
                <img src={bellona} alt="Bellona" />
              </div>
              <div className="mythitem" style={{ "--position": 4 }}>
                <img src={ceres} alt="Ceres" />
              </div>
              <div className="mythitem" style={{ "--position": 5 }}>
                <img src={diana} alt="Diana" />
              </div>
              <div className="mythitem" style={{ "--position": 6 }}>
                <img src={fortuna} alt="Fortuna" />
              </div>
              <div className="mythitem" style={{ "--position": 7 }}>
                <img src={juno} alt="Juno" />
              </div>
              <div className="mythitem" style={{ "--position": 8 }}>
                <img src={jupiter} alt="Jupiter" />
              </div>
              <div className="mythitem" style={{ "--position": 9 }}>
                <img src={mars} alt="Mars" />
              </div>
              <div className="mythitem" style={{ "--position": 10 }}>
                <img src={mercury} alt="Mercury" />
              </div>
              <div className="mythitem" style={{ "--position": 11 }}>
                <img src={minerva} alt="Minerva" />
              </div>
              <div className="mythitem" style={{ "--position": 12 }}>
                <img src={neptune} alt="Neptune" />
              </div>
              <div className="mythitem" style={{ "--position": 13 }}>
                <img src={pluto} alt="Pluto" />
              </div>
              <div className="mythitem" style={{ "--position": 14 }}>
                <img src={venus} alt="Venus" />
              </div>
              <div className="mythitem" style={{ "--position": 15 }}>
                <img src={vesta} alt="Vesta" />
              </div>
              <div className="mythitem" style={{ "--position": 16 }}>
                <img src={vulcan} alt="Vulcan" />
              </div>
            </div>
          </div>
        </div>
        
         {/*  THE CARD DESCRIPTIONS */}
        <Title title="Roman Mythology" />
        
        {/*  MAIN CARD CONTAINER */}
        <div className="mythcardcon">
          {/*  LEFT CARD DESIGN */}
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={apollo} alt="Apollo" />
            </div>
            <div className="textleft">
              <h2>Apollo</h2>
              <p>
                <i>(Latin: Apollo)</i> was the Roman god of the sun, music, prophecy,
                healing, and the arts, retaining the same name and attributes as
                his Greek counterpart, Apollo. Revered as a symbol of law,
                order, and civilization, he embodied the ideals of enlightenment
                and harmony, often depicted with a lyre or a radiant sun. His
                influence extended to oracles and poetry, inspiring creativity
                and foresight.
              </p>
            </div>
          </div>

          {/*  RIGHT CARD DESIGN */}
          <div className="mythcardright">
            <div className="textright">
              <h2>Bacchus</h2>
              <p>
                <i>(Latin: Bacchus)</i>, known as Dionysus in Greek mythology, was the
                god of wine, revelry, theater, and ecstatic celebration. His
                rites, known as Bacchanalia, were famous for their wild,
                uninhibited nature, reflecting the duality of chaos and
                liberation that he represented. Bacchus also symbolized rebirth
                and transformation, embodying the cycle of life and indulgence.
              </p>
            </div>
            <div className="imgright">
              <img src={bacchus} alt="Bacchus" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={ceres} alt="Ceres" />
            </div>
            <div className="textleft">
              <h2>Ceres</h2>
              <p>
                <i>(Latin: Ceres)</i>, the Roman equivalent of Demeter, was the goddess
                of agriculture, grain, and fertility. Deeply connected to the
                sustenance of Roman life, she was celebrated through sacred
                rites that honored the cycle of harvest and the fertility of the
                earth. She also protected the sanctity of motherhood and the
                continuity of family life.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Diana</h2>
              <p>
                <i>(Latin: Diana)</i>, aligned with the Greek Artemis, was the goddess
                of the hunt, the moon, and wild animals. A protector of the
                wilderness and women, she was venerated as a virgin goddess,
                embodying independence and natural purity. Diana also symbolized
                the mysteries of the night and the resilience of untamed nature.
              </p>
            </div>
            <div className="imgright">
              <img src={diana} alt="Diana" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={juno} alt="Juno" />
            </div>
            <div className="textleft">
              <h2>Juno</h2>
              <p>
                <i>(Latin: Iuno)</i>, equivalent to the Greek Hera, was the queen of
                the gods and the goddess of marriage and childbirth. She
                symbolized the sanctity of marital union and served as a fierce
                protector of women, often depicted with a peacock or a diadem.
                As the consort of Jupiter, she represented the power and dignity
                of the Roman state.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Jupiter</h2>
              <p>
                <i>(Latin: Iuppiter)</i>, the Roman counterpart of Zeus, was the king
                of the gods and the god of the sky, thunder, and justice. As the
                supreme deity, he wielded immense power, symbolizing authority
                and the enforcement of divine and earthly law. Jupiter also
                served as the divine guardian of oaths and treaties, ensuring
                trust among the Roman people.
              </p>
            </div>
            <div className="imgright">
              <img src={jupiter} alt="Jupiter" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={mars} alt="Mars" />
            </div>
            <div className="textleft">
              <h2>Mars</h2>
              <p>
                <i>(Latin: Mars)</i>, the Roman version of Ares, was the god of war,
                but unlike his Greek counterpart, he was seen as a noble
                protector of Rome. Associated with military strength and honor,
                he embodied the Roman ideals of courage, discipline, and
                conquest. Mars was also venerated as a father figure, being the
                mythological ancestor of Rome through his sons, Romulus and
                Remus.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Mercury</h2>
              <p>
                <i>(Latin: Mercurius)</i>, corresponding to the Greek Hermes, was the
                messenger of the gods and the deity of commerce, communication,
                and travelers. Known for his cunning and speed, he was often
                depicted with winged sandals and a caduceus. Mercury also
                protected merchants and guided souls to the underworld, linking
                trade and spiritual journeys.
              </p>
            </div>
            <div className="imgright">
              <img src={mercury} alt="Mercury" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={minerva} alt="Minerva" />
            </div>
            <div className="textleft">
              <h2>Minerva</h2>
              <p>
                <i>(Latin: Minerva)</i>, mirroring the Greek Athena, was the goddess of
                wisdom, strategy, and crafts. She was highly revered as a
                patroness of knowledge and artisans, often depicted with an owl
                symbolizing her wisdom. Minerva also governed innovation and
                technology, embodying intellect and creativity in all forms.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Neptune</h2>
              <p>
                <i>(Latin: Neptunus)</i>, aligned with the Greek Poseidon, was the god
                of the sea, earthquakes, and horses. He was a vital deity for a
                civilization reliant on naval power and trade, often shown
                wielding a trident. Neptune’s tempestuous nature reflected the
                unpredictability of the sea and its immense power over life.
              </p>
            </div>
            <div className="imgright">
              <img src={neptune} alt="Neptune" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={pluto} alt="Pluto" />
            </div>
            <div className="textleft">
              <h2>Pluto</h2>
              <p>
                <i>(Latin: Pluto)</i>, the Roman equivalent of Hades, was the god of
                the underworld and wealth, ruling over the domain of the dead.
                Though feared, he was respected for maintaining balance between
                life and death. Pluto’s connection to riches beneath the earth
                also made him a god of prosperity and hidden treasures.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Venus</h2>
              <p>
                <i>(Latin: Venus)</i>, the Roman version of Aphrodite, was the goddess
                of love, beauty, and fertility. As the mother of Aeneas, she
                held a special role in Roman mythology as an ancestor of the
                Roman people. Venus also embodied the allure of desire and the
                creative force of nature, influencing both mortal and divine
                realms.
              </p>
            </div>
            <div className="imgright">
              <img src={venus} alt="Venus" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={vesta} alt="Vesta" />
            </div>
            <div className="textleft">
              <h2>Vesta</h2>
              <p>
                <i>(Latin: Vesta)</i>, corresponding to the Greek Hestia, was the
                goddess of the hearth, home, and family. Central to Roman
                religious practice, her sacred flame was maintained by the
                Vestal Virgins, symbolizing Rome’s eternal life. Vesta also
                represented unity and stability, providing spiritual comfort to
                the Roman people.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Vulcan</h2>
              <p>
                <i>(Latin: Vulcanus)</i>, the Roman counterpart of Hephaestus, was the
                god of fire, metalworking, and craftsmanship. As a master smith,
                he represented the transformative power of fire and ingenuity,
                crafting weapons for gods and heroes. Vulcan also symbolized
                resilience, turning destruction into creation through his
                mastery of the forge.
              </p>
            </div>
            <div className="imgright">
              <img src={vulcan} alt="Vulcan" />
            </div>
          </div>
          <div className="mythcardleft">
            <div className="imgleft">
              <img src={bellona} alt="Bellona" />
            </div>
            <div className="textleft">
              <h2>Bellona</h2>
              <p>
                <i>(Latin: Bellona)</i>, associated with the Greek Enyo, was the
                goddess of war and destruction. She symbolized the ferocity and
                chaos of battle, often accompanying Mars into war. Bellona also
                personified the call to arms, inspiring soldiers with
                unrelenting courage and resolve.
              </p>
            </div>
          </div>
          <div className="mythcardright">
            <div className="textright">
              <h2>Fortuna</h2>
              <p>
                <i>(Latin: Fortuna)</i>, without a direct Greek counterpart, was the
                goddess of fortune and fate. She governed luck and destiny,
                often depicted with a wheel symbolizing the capriciousness of
                fortune. Fortuna also embodied hope and the unforeseen blessings
                that could arise from life’s uncertainties.
              </p>
            </div>
            <div className="imgright">
              <img src={fortuna} alt="fortuna" />
            </div>
          </div>
        </div>
      </div>
      <Footer />{/* FOOTER */}
    </>
  );
};

export default Mythos;
//MY FAV PAGE DUH WHYD I SPENT 2 DAYS ON THIS THEN