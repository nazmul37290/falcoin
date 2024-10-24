import { useState } from "react";
import logo from "../assets/images/logo-tr.png";
import dollar from "../assets/images/dollar.png";



const Homepage = () => {
   
    const [coins,setCoins]  =useState(0);
    const handleAddCoins = () => {
        setCoins(coins + 100);
        const coin=document.getElementById('coin-add')
        coin.classList.add('coin-add');
        setTimeout(() => {
            coin.classList.remove('coin-add');
        }, 200);
    }
    return (
        <div className={`min-h-screen homepage relative h-full bg-zinc-500 py-4`}>
            
            <div className="flex gap-2 justify-center">
            <div className="bg-zinc-900 p-4 text-zinc-300 flex items-center text-sm rounded"><img className="h-5  mb-1 mr-1" src={dollar}/>1M coins = $1</div>
            <div className="bg-zinc-900 p-4 text-zinc-300 flex items-center text-sm rounded"><img className="h-10 mb-2 invert" src={logo}/>Per Click 100 Falcoin</div>
            </div>
            <div id="coin-add" className="absolute  duration-300 left-1/2  -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
            <div className=" h-8 w-8 rounded-full bg-[#343434] shadow-lg shadow-zinc-600 flex items-center justify-center">
                <img src={logo} alt="" className="invert" />
            </div>
                <p className="text-zinc-300 text-lg font-bold mt-1">+100</p>
            </div>
            <div className="flex items-center justify-center bg-[#343434] mt-10 px-2 py-5">
                <img src={logo} alt=""  className="h-14 invert " />
            <h3 className="text-4xl text-center  text-zinc-200  font-bold">{coins}</h3>
            </div>
            <div onClick={handleAddCoins} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#343434] shadow-lg shadow-zinc-600 flex items-center justify-center">
                <img src={logo} alt="" className="invert" />
            </div>
        </div>
    );
};

export default Homepage;