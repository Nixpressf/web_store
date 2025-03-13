async function fetchData() {
    try {
        const response = await fetch('https://67d0c5b0825945773eb1e14f.mockapi.io/web_store/switches');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Data:", data);

        if (Array.isArray(data)) {
            console.log("Number of elements:", data.length);
        } else {
            console.log("Fetched data is not an array.");
        }

        return data; // Return data if needed
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}

export default fetchData;
