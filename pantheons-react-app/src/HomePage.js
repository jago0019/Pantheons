import React, { Component } from 'react';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import './styles/style.css'; // adjust if your CSS file is elsewhere

class HomePage extends Component {
   
    render() {
        
        return (
            <div>
                <Header />
                <main>
                    <div className="index-image"></div>
                    <div className="main-info">
                        <h1>✨ Welcome to the Pantheon of Gods ✨</h1>
                        <p>
                        Across time and cultures, gods and deities have shaped the beliefs, stories, and imaginations of civilizations. From the mighty Zeus hurling thunderbolts in Olympus to the mysterious Loki of the Norse world, divine beings have ruled over the elements, the afterlife, and the fate of mortals.
                        </p>
                        <p>
                        This website is a journey through three great mythologies — Norse, Greek and Egyptian — exploring the gods who ruled the heavens, the underworld, and everything in between.
                        </p>
                        <p>
                        🔮 Click on a Pantheon to discover its gods, their powers, and the legends that surround them.
                        </p>
                        <Link to="/norse"><div className="action-button" id="first-button">
                            <h3>Norse Pantheon</h3>
                            <img src="/svg/Valknut.svg" alt="valknut" />
                        </div></Link>
                        <Link to="/greek"><div className="action-button" id="second-button">
                            <h3>Greek Pantheon</h3>
                            <img src="/svg/Greek.svg" alt="greek pillar" />
                        </div></Link>
                        <Link to="/egyptian"><div className="action-button" id="third-button">
                            <h3>Egyptian Pantheon</h3>
                            <img src="/svg/egyptian.svg" alt="egyptian cross" />
                        </div></Link>
                        <div className="random-button" id="random-button" onClick={this.navigateToRandom}>
                            <h3>⚡ Not sure where to start?</h3>
                        </div>
                    </div>
                </main>
                <footer></footer>
            </div>
        );
    }

    navigateToRandom = () => {
        const pantheons = ['/norse', '/greek', '/egyptian'];
        const randomPantheon = pantheons[Math.floor(Math.random() * pantheons.length)];
        window.location.href = randomPantheon;
    }
}


export default HomePage;