// routes/soccer.js
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
    const teamOptions = {
        method: 'GET',
        hostname: 'soccer-football-info.p.rapidapi.com',
        port: null,
        path: '/players/list/?c=all&p=1',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'soccer-football-info.p.rapidapi.com'
        }
    };

    https.request(teamOptions, function (apiRes) {
        const chunks = [];

        apiRes.on('data', function (chunk) {
            chunks.push(chunk);
        });

        apiRes.on('end', function () {
            const body = Buffer.concat(chunks).toString();
            console.log('Raw Soccer API response:', body);
            try {
                const jsonResponse = JSON.parse(body);
                const players = jsonResponse.result;

                if (players && players.length > 0) {
                    const randomPlayer = players[Math.floor(Math.random() * players.length)];
                    const playerId = randomPlayer.id;
                    const path = `/players/view/?i=${playerId}&l=en_US`;

                    const playerOptions = {
                        method: 'GET',
                        hostname: 'soccer-football-info.p.rapidapi.com',
                        port: null,
                        path: path,
                        headers: {
                            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                            'x-rapidapi-host': 'soccer-football-info.p.rapidapi.com'
                        }
                    };

                    getRandomPlayerData(playerOptions, res);
                } else {
                    res.status(404).send('No players found');
                }
            } catch (error) {
                res.status(500).send('Error parsing response');
            }
        });
    }).end();
});

export default router;