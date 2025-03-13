import React, {useEffect, useState} from "react";
import fetchData from "../fetching.js";
import '../App.css';
import trybosis from "../assets/ExtrasImages/Trybosis3204.webp";
import gpl205 from "../assets/ExtrasImages/GPL205g0.webp";

function Extras() {

    const [DB, setDB] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await fetchData();
            setDB(data);
        }
        getData();
    }, []);

    const extrasItems = DB.filter(item => item.type === "Extras");

    const imageMap = {
        'Trybosis 3204': trybosis,
        'GPL 205g0': gpl205,
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", paddingTop: "1rem", paddingLeft: "2.5rem", flexWrap: "wrap" }}>
            {extrasItems.map((item, index) => (
                <button key={index} className="right_side_containers">
                    <img className="avatar_page_main" src={imageMap[item.name]} alt={item.name} />
                    <div className="text_right_side_container_name">{item.name}</div>
                </button>
            ))}
        </div>
    );
}

export default Extras;
