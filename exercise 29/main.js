
async function fetchJSONData() {
    console.log("Start fetching JSON data...");

    const response = await fetch('data.json'); // Simulated fetch call
    const data = await response.json();

    console.log("Fetched JSON Data:", data);
}

fetchJSONData();
console.log("This message runs immediately and is not blocked.");

