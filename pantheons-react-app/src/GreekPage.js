import React from 'react';
import GodCard from './components/GodCard';
import Header from './components/Header';
import './styles/subpage.css';

const GreekPage = () => {
  return (
    <div>
        <Header />
        <main>
            <div className="main-box">
            <div className="fill-box"></div>
            <div className="subpage-banner" id="greek-banner">
                <h1>The Greek Pantheon</h1>
            </div>
            <div className="gods-title">
                <h1>Gods and Deities</h1>
            </div>
            <div className="gods-and-deities">
                <GodCard
                    image="/img/zeus.webp"
                    name="Zeus"
                    title="God of the Sky"
                    description="Zeus is the king of the Greek gods, ruler of Mount Olympus, and god of the sky, thunder, and justice. Wielding his iconic thunderbolt, Zeus maintains order among both gods and mortals. He overthrew his father Cronus to lead the Olympian gods and is known for his countless affairs with both goddesses and mortal women, which produced many heroes and demi-gods. Despite his flaws, Zeus represents authority, divine law, and cosmic balance."
                />
                <GodCard
                    image="/img/poseidon.png"
                    name="Poseidon"
                    title="God of the Sea"
                    description="Poseidon, brother of Zeus and Hades, is the god of the sea, earthquakes, and horses. He wields a powerful trident that can stir the oceans and shatter the earth. Known for his volatile temper, Poseidon could bless sailors with calm waters or doom them with storms. He played a key role in many myths, including the contest with Athena over Athens and his grudge against Odysseus during the Trojan War aftermath."
                />
                <GodCard
                    image="/img/hades.png"
                    name="Hades"
                    title="God of the Underworld"
                    description="Hades is the god of the underworld and ruler of the dead. Unlike the villainous portrayals in modern media, Hades was actually a fair and just god, though feared due to his domain. He presides over the afterlife and ensures that souls are judged properly. Hades rarely left the underworld and is known for abducting Persephone, whom he made queen of the underworld — a myth that explains the seasons."
                />
                <GodCard
                    image="/img/aphrodite.jpeg"
                    name="Aphrodite"
                    title="Goddess of Love"
                    description="Aphrodite is the goddess of love, beauty, and desire. According to one myth, she was born from sea foam near Cyprus, making her a divine embodiment of sensuality and allure. Despite being married to Hephaestus, she had numerous affairs — most famously with Ares. Aphrodite could spark desire in gods and mortals alike and played a role in many stories, including the events that led to the Trojan War."
                />
                <GodCard
                    image="/img/athena.webp"
                    name="Athena"
                    title="Goddess of Wisdom"
                    description="Athena is the goddess of wisdom, war strategy, and crafts. Born fully armored from Zeus's forehead, she represents intellect, logic, and reasoned warfare — in contrast to Ares' raw brutality. Athena is the patron goddess of Athens, a city named in her honor after she gifted the olive tree. Known for her calm demeanor and fairness, she's often a guide and protector of heroes like Odysseus and Perseus."
                />
            </div>
            <div className="stories"></div>
            </div>
        </main>
        <footer></footer>
    </div>
  );
};

export default GreekPage;
