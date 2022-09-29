import React from 'react';
import Account from '../Account/Account';
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
            <Account/>
        
        </div>
    );
};

export default Home;