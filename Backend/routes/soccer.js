// Backend/routes/soccer.js
import express from 'express';
import {
    soccerPlayers
} from '../data.js';

const router = express.Router();

function getRandomPlayers(players) {
    const shuffled = players.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

router.get('/', (req, res) => {
    const players = getRandomPlayers(soccerPlayers);
    res.json(players);
});

export default router;