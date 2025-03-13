import React, {useEffect, useState} from "react";
import fetchData from "../fetching.js";
import '../App.css';
import mk750 from "../assets/CustomImages/MK750.webp";
import mk870 from "../assets/CustomImages/MK870.webp";
function Custom() {

    const [DB, setDB] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await fetchData();
            setDB(data);
        }
        getData();
    }, []);

    const customItems = DB.filter(item => item.type === "Custom");

    const imageMap = {
        'MK750': mk750,
        'MK870': mk870,
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", paddingTop: "1rem", paddingLeft: "2.5rem", flexWrap: "wrap" }}>
            {customItems.map((item, index) => (
                <button key={index} className="right_side_containers">
                    <img className="avatar_page_main" src={imageMap[item.name]} alt={item.name} />
                    <div className="text_right_side_container_name">{item.name}</div>
                </button>
            ))}
        </div>
    );
}

export default Custom;
