import React, {useEffect, useState} from "react";
import penguin from "../assets/SwitchesImages/Penguin.webp";
import starlit from "../assets/SwitchesImages/Starlit.webp";
import greenfog from "../assets/SwitchesImages/GreenFog.webp";
import creamycyan from "../assets/SwitchesImages/CreamyCyan.webp";
import fetchData from "../fetching.js";
import '../App.css';
import White from "../assets/KeycapsImages/White.jpg";
import Black from "../assets/KeycapsImages/Black.jpg";

function Switches() {

    const [DB, setDB] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await fetchData();
            setDB(data);
        }
        getData();
    }, []);

    const switchesItems = DB.filter(item => item.type === "Switches");

    const imageMap = {
        'Penguin': penguin,
        'Starlit': starlit,
        'Green Fog': greenfog,
        'Creamy Cyan': creamycyan,
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", paddingTop: "1rem", paddingLeft: "2.5rem", flexWrap: "wrap" }}>
            {switchesItems.map((item, index) => (
                <button key={index} className="right_side_containers">
                    <img className="avatar_page_main" src={imageMap[item.name]} alt="Penguin Switch" />
                    <div className="text_right_side_container_name">{item.name}</div>
                </button>
            ))}
        </div>
    );
}

export default Switches;
