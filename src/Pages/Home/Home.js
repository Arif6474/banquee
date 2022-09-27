import React from 'react';
import Cards from '../Cards/Cards';
import Features from '../Features/Features';

import Transaction from '../Transaction/Transaction';

const Home = () => {
    return (
        <div>
            <Features/>
            <Transaction/>
            <Cards/>
        
        </div>
    );
};

export default Home;