import React from 'react';
import Features from '../Features/Features';
import FeaturesCard from '../Features/FeaturesCard';
import Transaction from '../Transaction/Transaction';

const Home = () => {
    return (
        <div>
            <Features/>
            <Transaction/>
            <FeaturesCard/>
        </div>
    );
};

export default Home;