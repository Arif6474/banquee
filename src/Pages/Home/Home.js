import React from 'react';
import Bank from '../Bank/Bank';
import BankCards from '../Bank/BankCards';
import Cards from '../Cards/Cards';
import Features from '../Features/Features';

import Transaction from '../Transaction/Transaction';

const Home = () => {
    return (
        <div>
            <Features/>
            <Transaction/>
            <Cards/>
            <Bank/>
            <BankCards/>
        
        </div>
    );
};

export default Home;