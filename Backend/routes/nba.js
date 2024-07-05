// routes/nba.js
import express from 'express';
import https from 'https';

const router = express.Router();

const getRandomPlayerData = (options, res, randomPlayer = false) => {
    console.log('Request options:', options);

    const apiReq = https.request(options, function (apiRes) {
        const chunks = [];

        apiRes.on('data', function (chunk) {
            chunks.push(chunk);
        });

        apiRes.on('end', function () {
            const body = Buffer.concat(chunks).toString();
            console.log('Raw API response:', body);
            try {
                const jsonResponse = JSON.parse(body);
                if (randomPlayer && Array.isArray(jsonResponse.response)) {
                    const randomIndex = Math.floor(Math.random() * jsonResponse.response.length);
                    res.json(jsonResponse.response[randomIndex]);
                } else {
                    res.json(jsonResponse.response || jsonResponse);
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                res.status(500).send('Error parsing response');
            }
        });
    });

    apiReq.on('error', function (e) {
        console.error('API request error:', e.message);
        res.status(500).send(e.message);
    });

    apiReq.end();
};

router.get('/random-player', (req, res) => {
    const teamIds = [1, 2, 3, 4, 5];
    const randomTeamId = teamIds[Math.floor(Math.random() * teamIds.length)];
    const path = `/players?team=${randomTeamId}&season=2021`;

    const options = {
        method: 'GET',
        hostname: 'api-nba-v1.p.rapidapi.com',
        port: null,
        path: path,
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    getRandomPlayerData(options, res, true);
});

export default router;