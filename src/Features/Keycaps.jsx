import React, {useEffect, useState} from "react";
import White from "../assets/KeycapsImages/White.jpg";
import Black from "../assets/KeycapsImages/Black.jpg";
import fetchData from "../fetching.js";
import '../App.css';

function Keycaps() {

    const [DB, setDB] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await fetchData();
            setDB(data);
        }
        getData();
    }, []);

    const keycapsItems = DB.filter(item => item.type === "Keycaps");

    const imageMap = {
        'Ceramic white': White,
        'Ceramic black': Black,
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", paddingTop: "1rem", paddingLeft: "2.5rem", flexWrap: "wrap" }}>
            {keycapsItems.map((item, index) => (
                <button key={index} className="right_side_containers">
                    <img className="avatar_page_main" src={imageMap[item.name] || White} alt={item.name} />
                    <div className="text_right_side_container_name">{item.name}</div>
                </button>
            ))}
        </div>
    );
}

export default Keycaps;
