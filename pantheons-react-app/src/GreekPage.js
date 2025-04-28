import React from 'react';
import GodCard from './components/GodCard';
import Header from './components/Header';
import { gods } from './data/gods';
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
                {gods
                    .filter(god => god.pantheon === 'greek')
                    .map(god => (
                    <GodCard
                        key={god.id}
                        id={god.id}
                        image={god.image}
                        name={god.name}
                        title={god.title}
                        description={god.description}
                    />
                ))}
            </div>
            <div className="stories"></div>
            </div>
        </main>
        <footer></footer>
    </div>
  );
};

export default GreekPage;
