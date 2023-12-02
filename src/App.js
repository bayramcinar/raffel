import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import x from "./images/x.jpg"
import mobile from "./images/mobile.png"
import wallet from "./images/wallet.png"
import account from "./images/account.png"
import RuleBox from './components/ruleBox';

function App() {
  return (
    <>
      <Navbar />
      <div className='row'>
        <div className='raffleNameArea col-4 flex items-center justify-center'>
            <h1 className='text-white text-7xl text-center'>100 ETHERIUM GIVEAWAY</h1>
        </div>
        <div className='imageArea col-4 flex items-center justify-center'>
          <img src={mobile} className=''/>
        </div>
        <div className='rulesArea col-4'>
          <div className='ruleBoxes mt-8'>
          <div className='upArea flex items-center justify-center w-full'>
            <button className='w-10 h-10 rounded-full bg-arrowColor'><i class="text-white fa-solid fa-arrow-up"></i></button>
          </div>
          <RuleBox image={x} rule={"You must follow us in twitter."}/>
          <RuleBox image={wallet} rule={"There must be at least 5 ETH in your account."}/>
          <RuleBox image={account} rule={"Your account must be created at least 3 months ago."}/>
          <div className='upArea flex items-center justify-center w-full'>
            <button className='w-10 h-10 rounded-full bg-arrowColor'><i class="text-white fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
        </div>
      </div>  
    </>
  );
}

export default App;
