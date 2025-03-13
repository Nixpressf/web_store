import React, {useState} from "react";
import background from './assets/Resume_Background.png';
import avatar from './assets/Final.png';
// import penguin from './assets/Penguin.webp';
import telegram from './assets/Telegram.svg';
import viber from './assets/Viber.svg';
import gmail from './assets/Gmail.svg';
import phone from './assets/Phone.svg';
import discord from './assets/Discord.svg';
//import fetchData from './fetching.js';
import './App.css';
import Switches from "./Features/Switches.jsx";
import Built from "./Features/Built.jsx";
import Custom from "./Features/Custom.jsx";
import Keycaps from "./Features/Keycaps.jsx";
import Extras from "./Features/Extras.jsx";


function App() {


    const [activeModule, setActiveModule] = useState("Main");

    const renderModule = () => {
        switch (activeModule) {
            case "Built":
                return <Built />;
            case "Custom":
                return <Custom />;
            case "Switches":
                return <Switches />;
            case "Keycaps":
                return <Keycaps />;
            case "Extras":
                return <Extras />;
            default:
                return <Switches />;
        }
    }

    return (
        <div className="app_container">
            <img className="background" src={background} alt="Background" />
            <div className="left_side">
                <img className="avatar" src={avatar} alt="Avatar" />
                <h1 className="text_first_left_side">Alex Shop</h1>
                <button className="button_secondary_left_side" onClick={() => setActiveModule("Built")}>❯ Prebuilt keyboards</button>
                <button className="button_secondary_left_side" onClick={() => setActiveModule("Custom")}>❯ Custom keyboards</button>
                <button className="button_secondary_left_side" onClick={() => setActiveModule("Switches")}>❯ Switches</button>
                <button className="button_secondary_left_side" onClick={() => setActiveModule("Keycaps")}>❯ Keycaps</button>
                <button className="button_secondary_left_side" onClick={() => setActiveModule("Extras")}>❯ Extras</button>
                <div className="images_bottom_left_side">
                    <img src={telegram} alt="Telegram"/>
                    <img src={viber} alt="Viber"/>
                    <img src={phone} alt="Phone"/>
                    <img src={gmail} alt="Gmail"/>
                    <img src={discord} alt="Discord"/>
                </div>
            </div>
             <div className="page_main">
                <div>
                    <div className="text_right_side_container_top_text">
                        <a className="text_first_right_side">
                            {["Built", "Custom", "Switches", "Keycaps", "Extras"].includes(activeModule) ? activeModule : "Switches"}
                        </a>
                    </div>
                    {renderModule()}
                </div>
            </div>
        </div>
    );

}

export default App;