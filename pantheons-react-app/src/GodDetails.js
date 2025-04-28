import React from 'react';
import { useParams } from 'react-router-dom';
import { gods } from './data/gods';
import Header from './components/Header';
import './styles/goddetails.css';

const GodDetails = () => {
    const { godId } = useParams();
    const god = gods.find(g => g.id === godId);

    if (!god) return <p>God not found!</p>;

    return (
        <div>
            <Header />
            <main>
                <div className="fill-box"></div>
                <div className="main-box">
                <div className="god-main-info">
                    <div className="god-img">
                        <img src={god.image} alt={god.name} />
                    </div>
                    <div className="god-name-and-info">
                        <div className="god-header">
                            <h1>{god.name}</h1>
                        </div>
                        <div className="god-info">
                            <h3>{god.title}</h3>
                            <p>{god.description}</p>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
};

export default GodDetails;
