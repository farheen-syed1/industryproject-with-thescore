// routes/nfl.js
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
    const options = {
        method: 'GET',
        hostname: 'api-american-football.p.rapidapi.com',
        port: null,
        path: '/teams?league=1&season=2023',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'api-american-football.p.rapidapi.com'
        }
    };

    https.request(options, function (apiRes) {
        const chunks = [];

        apiRes.on('data', function (chunk) {
            chunks.push(chunk);
        });

        apiRes.on('end', function () {
            const body = Buffer.concat(chunks).toString();
            console.log('Raw NFL API response:', body);
            try {
                const jsonResponse = JSON.parse(body);
                const teams = jsonResponse.response;

                if (teams && teams.length > 0) {
                    const randomTeam = teams[Math.floor(Math.random() * teams.length)];
                    const randomTeamId = randomTeam.id;
                    const path = `/players?team=${randomTeamId}&season=2023`;

                    const playerOptions = {
                        method: 'GET',
                        hostname: 'api-american-football.p.rapidapi.com',
                        port: null,
                        path: path,
                        headers: {
                            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                            'x-rapidapi-host': 'api-american-football.p.rapidapi.com'
                        }
                    };

                    getRandomPlayerData(playerOptions, res, true);
                } else {
                    res.status(404).send('No teams found');
                }
            } catch (error) {
                res.status(500).send('Error parsing response');
            }
        });
    }).end();
});

export default router;