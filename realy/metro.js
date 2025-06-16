const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const API_KEY = "YOUR_API_KEY"; // Replace with your API Key

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Korean Subway Realtime Info</title>
        </head>
        <body>
            <h1>🚇 Korean Subway Real-time Info</h1>
            <input type="text" id="station" placeholder="Enter station name (e.g., 강남)">
            <button onclick="fetchSubwayInfo()">Get Info</button>
            <div id="result"></div>

            <script>
                async function fetchSubwayInfo() {
                    const station = document.getElementById("station").value;
                    if (!station) {
                        alert("Please enter a station name!");
                        return;
                    }

                    const response = await fetch("/subway?station=" + encodeURIComponent(station));
                    const data = await response.json();
                    const resultDiv = document.getElementById("result");
                    resultDiv.innerHTML = "";

                    if (data.error) {
                        resultDiv.innerHTML = "<p>Error: " + data.error + "</p>";
                        return;
                    }

                    data.realtimeArrivalList.forEach(train => {
                        const trainInfo = "<div><h3>🚆 " + train.trainLineNm + " (" + train.updnLine + ")</h3>"
                            + "<p>📍 " + train.arvlMsg2 + "</p>"
                            + "<p>⏳ " + train.arvlMsg3 + "</p><hr></div>";
                        resultDiv.innerHTML += trainInfo;
                    });
                }
            </script>
        </body>
        </html>
    `);
});

app.get("/subway", async (req, res) => {
    const station = req.query.station;
    if (!station) {
        return res.json({ error: "No station provided" });
    }

    const URL = \`http://swopenAPI.seoul.go.kr/api/subway/\${API_KEY}/json/realtimeStationArrival/0/\${encodeURIComponent(station)}\`;

    try {
        const response = await axios.get(URL);
        res.json(response.data);
    } catch (error) {
        res.json({ error: "Failed to fetch subway data" });
    }
});

app.listen(PORT, () => console.log(\`🚀 Server running at http://localhost:\${PORT}\`));
