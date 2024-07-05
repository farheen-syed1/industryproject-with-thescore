// Backend/routes/nfl.js
import express from 'express';
import {
    nflPlayers
} from '../data.js';

const router = express.Router();

function getRandomPlayers(players) {
    const shuffled = players.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

router.get('/', (req, res) => {
    const players = getRandomPlayers(nflPlayers);
    res.json(players);
});

export default router;