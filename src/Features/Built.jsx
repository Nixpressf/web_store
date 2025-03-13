import React, {useEffect, useState} from "react";
import fetchData from "../fetching.js";
import '../App.css';
import f75 from "../assets/BuiltImages/AULAF75.webp";
import k820 from "../assets/BuiltImages/AJAZZAK820.webp";

function Built() {

    const [DB, setDB] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await fetchData();
            setDB(data);
        }
        getData();
    }, []);

    const builtItems = DB.filter(item => item.type === "Built");

    const imageMap = {
        'Aula F75': f75,
        'AK820': k820,
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", paddingTop: "1rem", paddingLeft: "2.5rem", flexWrap: "wrap" }}>
            {builtItems.map((item, index) => (
                <button key={index} className="right_side_containers">
                    <img className="avatar_page_main" src={imageMap[item.name]} alt={item.name} />
                    <div className="text_right_side_container_name">{item.name}</div>
                </button>
            ))}
        </div>
    );
}

export default Built;
