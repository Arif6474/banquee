import React from 'react';
import Account from '../Account/Account';
import Bank from '../Bank/Bank';
import BankCards from '../Bank/BankCards';
import Cards from '../Cards/Cards';
import Features from '../Features/Features';
import Help from '../Help/Help';

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
            <Help/>
        
        </div>
    );
};

export default Home;